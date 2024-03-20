var qt = Object.defineProperty;
var Yt = (a, o, e) => o in a ? qt(a, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[o] = e;
var Qe = (a, o, e) => (Yt(a, typeof o != "symbol" ? o + "" : o, e), e);
import { getCurrentInstance as nl, defineComponent as ue, resolveComponent as j, openBlock as S, createElementBlock as D, normalizeClass as xe, normalizeStyle as ee, createBlock as Y, createCommentVNode as ge, renderSlot as Te, ref as z, computed as U, withDirectives as re, unref as p, createElementVNode as I, toDisplayString as N, createVNode as G, withCtx as J, createTextVNode as me, vShow as fe, resolveDirective as Kl, h as we, Fragment as ve, renderList as be, onBeforeMount as Xt, watch as ye, nextTick as Oe, isRef as Me, onMounted as $e, withModifiers as dt, mergeProps as Ze, onUnmounted as Zt, shallowRef as cl, triggerRef as Qt, onBeforeUnmount as ea, createSlots as Xe } from "vue";
import la from "deepmerge";
import { isObject as ta, isFunction as aa, isPlainObject as qe, cloneDeep as ne, isEmpty as Ce, isBoolean as na, isNumber as Ye, debounce as ct, isString as Rl, last as fl, isEqual as tl, first as Cl, find as Al, indexOf as Xl, findIndex as ft, remove as oa } from "lodash-es";
import il from "sweetalert";
import { Tooltip as ia, Modal as Ee, Button as Vl, TableColumnConfig as sa, Radio as ra, Input as ua, Message as Zl, Icon as da } from "view-ui-plus";
import { useRouter as ca, useRoute as pt } from "vue-router";
import Bl from "axios";
import fa from "ar-cascader";
import { Toolbar as pa, Editor as ma } from "@wangeditor/editor-for-vue";
import el from "moment";
import { Boot as ha } from "@wangeditor/editor";
import ya from "vue-json-viewer";
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
      1: "1. 鼠标停留在表头列右边框，出现拖动图标，按下鼠标拖动可设置列宽。",
      2: "2. 点击“列表显示设置”，可选择需要打印的列，选择完需点击“确定”按钮。",
      3: "3. 页面有A4灰色参考线，将表格右边缘调至参考线区间，打印机默认设置时可将表格内容铺满A4纸，表格越宽字体将越小。",
      4: "4. 将此页面地址复制到浏览器地址栏，打开的页面将不可用。",
      5: "未到此线内容将无法铺满纸张",
      6: "超过此线打印内容将不完整",
      7: "A4 纵向参考线",
      8: "A4 横向参考线",
      9: "复制的页面无法使用该打印功能。"
    }
  }
}, va = /(%|){([0-9a-zA-Z_]+)}/g;
function ga() {
  function a(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }
  function o(e, ...t) {
    let u;
    return t.length === 1 && typeof t[0] == "object" && (u = t[0]), (!u || !u.hasOwnProperty) && (u = {}), e === void 0 ? "" : e.replace(va, (n, d, i, h) => {
      let s;
      return e[h - 1] === "{" && e[h + n.length] === "}" ? i : (s = a(u, i) ? u[i] : null, s ?? "");
    });
  }
  return o;
}
const ba = ga();
let pl = mt;
const ka = {
  zh: mt
};
let Ql, et = {}, Se, wa = function(a, o) {
  if (typeof this == "object" && Reflect.has(this, "$t"))
    return this.$t(a, o);
  if (Se && Se.global)
    return Se.global.t(a, o);
  if (Se && Se.locale) {
    if (!et[Se.locale] || Ql != Se.locale) {
      et[Se.locale] = !0;
      let e = Se.getLocaleMessage(Se.locale) || {}, t = la(ka[Se.locale], e, { clone: !0 });
      pl = t, Se.setLocaleMessage(Se.locale, t), Ql = Se.locale;
    }
    return Se.hlang(a, o);
  }
};
const De = function(a, o) {
  let e = wa.apply(this, [a, o]);
  if (e != null)
    return e;
  const t = a.split(".");
  let u = pl;
  for (let n = 0, d = t.length; n < d; n++) {
    const i = t[n];
    if (e = u[i], n === d - 1)
      return ba(e, o);
    if (!e)
      return "";
    u = e;
  }
  return "";
}, _a = function(a) {
  pl = a || pl;
}, Va = function(a) {
  Se = a;
}, ml = {
  use: _a,
  t: De,
  i18n: Va
};
function x(a, o) {
  var t, u, n;
  const e = (n = (u = (t = nl()) == null ? void 0 : t.appContext) == null ? void 0 : u.config) == null ? void 0 : n.globalProperties;
  return De.apply(e, [a, o]);
}
const ht = /* @__PURE__ */ ue({
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
      const d = j("Icon");
      return S(), D("div", {
        class: xe({ headerBtCTM: !0, withIconCTM: e.icon || e.withIcon, disabled: e.disabled }),
        style: ee({ color: e.color, borderLeftColor: e.borderColor }),
        onClick: t
      }, [
        e.icon ? (S(), Y(d, {
          key: 0,
          size: e.iconSize,
          type: e.icon
        }, null, 8, ["size", "type"])) : ge("", !0),
        Te(u.$slots, "default")
      ], 6);
    };
  }
}), Ca = { class: "headerTxtAM" }, Aa = { class: "contentAM" }, Ba = /* @__PURE__ */ ue({
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
    const n = U(() => typeof t.headerFontSize == "number" ? t.headerFontSize + "px" : t.headerFontSize), d = U(() => ({ zIndex: t.zIndex }));
    function i() {
      u.value = !0, e("on-open");
    }
    function h(s) {
      u.value = !1, e("on-close", s === !0);
    }
    return o({
      open: i,
      close: h
    }), (s, c) => re((S(), D("div", {
      class: "fullScreenPopBoxAM",
      style: ee(p(d))
    }, [
      I("div", {
        class: "headerAM",
        style: ee({ color: t.headerColor, backgroundColor: t.headerBg, fontSize: p(n) })
      }, [
        I("span", Ca, N(s.title || p(x)("r.title")), 1),
        G(ht, {
          icon: "md-return-left",
          onClick: h
        }, {
          default: J(() => [
            me(N(p(x)("r.back")), 1)
          ]),
          _: 1
        })
      ], 4),
      I("div", Aa, [
        Te(s.$slots, "default")
      ])
    ], 4)), [
      [fe, p(u)]
    ]);
  }
}), xa = { class: "msg" }, Ta = /* @__PURE__ */ ue({
  __name: "Hello",
  setup(a) {
    let o = z("Greetings from Ricky.");
    return (e, t) => (S(), D("span", xa, N(p(o)), 1));
  }
});
function bl() {
  const { appContext: a } = nl();
  return a.config.globalProperties;
}
const xl = /* @__PURE__ */ ue({
  __name: "IconTxtBtn",
  props: {
    name: {},
    icon: { default: "md-download" },
    size: { default: () => bl().iconTxtBtnIconSize },
    disabled: { type: Boolean, default: !1 },
    has: { default: "" }
  },
  emits: ["click"],
  setup(a, { emit: o }) {
    const e = a, t = U(() => Math.floor(e.size / 17 * 12) + "px");
    function u(n) {
      e.disabled || o("click", n);
    }
    return (n, d) => {
      const i = j("Icon"), h = Kl("has");
      return re((S(), D("div", {
        class: xe(["tabTopBtnsT", { disabled: e.disabled }]),
        onClick: u,
        style: ee({ "font-size": p(t) })
      }, [
        G(i, {
          type: e.icon,
          size: e.size
        }, null, 8, ["type", "size"]),
        me(" " + N(e.name || p(x)("r.button")), 1)
      ], 6)), [
        [h, n.has]
      ]);
    };
  }
}), Sa = { class: "c404K" }, La = /* @__PURE__ */ I("div", { class: "t404" }, "404", -1), Ia = { class: "ct404" }, Oa = { class: "p404" }, Ma = /* @__PURE__ */ ue({
  __name: "Page404",
  setup(a) {
    const e = nl().appContext.config.globalProperties.$router;
    function t() {
      e.go(-1);
    }
    return (u, n) => {
      const d = j("Button");
      return S(), D("div", Sa, [
        La,
        I("div", Ia, "UH OH! " + N(p(x)("r.pageNotFound")), 1),
        I("div", Oa, N(p(x)("r.notFoundMsg")), 1),
        G(d, {
          class: "bt404",
          onClick: t
        }, {
          default: J(() => [
            me(N(p(x)("r.back")), 1)
          ]),
          _: 1
        })
      ]);
    };
  }
});
function Ie(a, o, e) {
  const t = (...u) => De.apply(this, u);
  return new Promise((u, n) => {
    if (typeof a == "object" && !Array.isArray(a)) {
      let d = t("r.confirm"), i = t("r.cancel"), h = !1, s = "swalConfirmBt", c = "swalCancelBt";
      const f = /^HTML.*Element$/;
      a.type && (a.icon = a.type) && delete a.type, a.content && (a.text = a.content) && delete a.content, a.className = a.className || "swalBoxX";
      let w = "";
      a.text && f.test(R(a.text)) ? w = "content" : a.text && R(a.text) === "String" && (w = "text"), a.buttons && (typeof a.buttons == "object" && !Array.isArray(a.buttons) ? a.buttons.cancel && (a.buttons.cancel.text && (i = a.buttons.cancel.text) && (h = !0), a.buttons.cancel.className && (c = a.buttons.cancel.className), a.buttons.confirm.text && (d = a.buttons.confirm.text), a.buttons.confirm.className && (s = a.buttons.confirm.className)) : Array.isArray(a.buttons) && (a.buttons[0] && (i = a.buttons[0], h = !0), a.buttons[1] && (d = a.buttons[1]))), il({
        title: a.title,
        icon: a.icon,
        className: a.className,
        [w]: a.text,
        buttons: {
          confirm: {
            text: d,
            value: !0,
            visible: !0,
            className: s
          },
          cancel: {
            text: i,
            value: null,
            visible: h,
            className: c
          }
        }
      }).then((b) => {
        b && typeof a.onOk == "function" && a.onOk(), u(b);
      }).catch((b) => {
        n(b);
      });
    } else if (typeof a == "string") {
      let d = "";
      if (o)
        switch (typeof o) {
          case "string":
            d = "text";
            break;
          case "object":
            d = "content";
            break;
        }
      il({
        title: a,
        [d]: o || "",
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
function yt(a) {
  return a.replace(/_(\w)/g, function(o, e) {
    return e.toUpperCase();
  });
}
function Fa(a) {
  let o = document.createElement("div");
  return o.textContent !== void 0 ? o.textContent = a : o.innerText = a, o.innerHTML;
}
function Pa(a) {
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
function $l(a) {
  return (a == null ? void 0 : a.split(".").pop().toLocaleLowerCase()) || "";
}
function dl(a) {
  return R(a) === "String" && a.indexOf("image") > -1;
}
function Tl(a) {
  const o = $l(a);
  let e = "ios-document-outline";
  return ["gif", "jpg", "jpeg", "png", "bmp", "webp"].indexOf(o) > -1 ? e = "ios-image" : ["mp4", "m3u8", "rmvb", "avi", "swf", "3gp", "mkv", "flv"].indexOf(o) > -1 ? e = "ios-film" : ["mp3", "wav", "wma", "ogg", "aac", "flac"].indexOf(o) > -1 ? e = "ios-musical-notes" : ["doc", "txt", "docx", "pages", "epub", "pdf"].indexOf(o) > -1 ? e = "md-document" : ["numbers", "csv", "xls", "xlsx"].indexOf(o) > -1 ? e = "ios-stats" : ["keynote", "ppt", "pptx"].indexOf(o) > -1 && (e = "ios-videocam"), e;
}
function vt(a, o) {
  let e = document.createElement("a");
  e.href = o, e.download = a, gt(e);
}
function gt(a) {
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
  if (a && ta(a)) {
    if (aa(o)) {
      if (qe(a)) {
        let n = a, d = ne(u);
        if (o(n))
          return e && n[e] && d.push(n[e]), d;
        if (n[t] && !Ce(n[t])) {
          e && n[e] && d.push(n[e]);
          let i = hl({
            group: n[t],
            condition: o,
            pathKey: e,
            childKey: t,
            path: d
          });
          if (!Ce(i))
            return i;
        }
      } else if (Array.isArray(a))
        for (let n of a) {
          let d = ne(u);
          if (o(n))
            return e && n[e] ? d.push(n[e]) : d.push(String(a.indexOf(n))), d;
          if (n[t] && n[t].length > 0) {
            e && n[e] ? d.push(n[e]) : d.push(String(a.indexOf(n)));
            let i = hl({
              group: n[t],
              condition: o,
              pathKey: e,
              childKey: t,
              path: d
            });
            if (!Ce(i))
              return i;
          }
        }
    } else if (Array.isArray(a))
      for (let n of a) {
        let d = ne(u);
        if (n === o)
          return d.push(String(a.indexOf(n))), d;
      }
  }
  return [];
}
function bt(a, o = 12) {
  if (R(a) === "String" && a.length > 0) {
    let e = document.createElement("span");
    e.style.fontSize = o + "px", e.style.fontFamily = "inherit", e.innerHTML = a, e.style.opacity = "0", e.style.position = "fixed", e.style.top = "3000px", document.body.append(e);
    const t = e.clientWidth;
    return document.body.removeChild(e), t;
  }
  return 0;
}
function Ua(a) {
  return a === "" ? null : a;
}
function Ka(a) {
  a = a || window.Event, a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0;
}
const Ra = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  downloadFileReaderFile: vt,
  emptyInput: Ua,
  fakeALinkClick: gt,
  findPath: hl,
  getFileSrc: ul,
  getFileTypeByName: $l,
  getFileTypeIconByName: Tl,
  getStringWidth: bt,
  htmlDecode: Pa,
  htmlEncode: Fa,
  isImgByFile: dl,
  stopBubbling: Ka,
  toHump: yt
}, Symbol.toStringTag, { value: "Module" }));
function R(a) {
  return Object.prototype.toString.call(a).replace(/\[object |]/g, "");
}
function kt(a) {
  return a.replace(/([A-Z])/g, "_$1").toLowerCase();
}
function yl(a) {
  let o = R(a);
  if (o === "Object") {
    for (let e in a)
      if (a.hasOwnProperty(e)) {
        let t = R(a[e]);
        t === "String" ? a[e] = a[e].trim() : (t === "Object" || t === "Array") && yl(a[e]);
      }
  } else if (o === "Array")
    for (let e = 0, t = a.length; e < t; e++) {
      let u = R(a[e]);
      u === "String" ? a[e] = a[e].trim() : (u === "Array" || u === "Object") && yl(a[e]);
    }
  return a;
}
function Sl(a, o = []) {
  if (R(a) === "Array")
    return a.forEach((e, t) => {
      switch (R(e)) {
        case "Array":
        case "Object":
          Sl(e);
          break;
        default:
          a[t] = null;
      }
    }), a;
  if (R(a) === "Object") {
    for (let e in a)
      if (a.hasOwnProperty(e)) {
        let t = !0;
        for (let u of o)
          if (u === e) {
            t = !1;
            break;
          }
        if (t)
          switch (R(a[e])) {
            case "Array":
            case "Object":
              Sl(a[e]);
              break;
            default:
              a[e] = null;
          }
      }
    return a;
  } else
    return a;
}
const $a = {
  headers: {
    "Content-Type": "multipart/form-data"
  }
};
function Da(a) {
  let o = new FormData();
  for (let e in a)
    a.hasOwnProperty(e) && a[e] !== null && o.append(e, a[e]);
  return o;
}
function je(a, o, e = !1) {
  if (!a || !o)
    return !1;
  let t, u = "notFoundC", n = function(d, i) {
    if (Array.isArray(d)) {
      if (R(i) === "Function" && i(d))
        return u = d, [];
      for (let h of d) {
        if (u !== "notFoundC")
          break;
        if (R(i) === "Function" && i(h) || h === i)
          return u = h, [d.indexOf(h)];
        if (R(h) === "Array" || R(h) === "Object") {
          let s = n(h, i);
          if (s !== void 0)
            return [d.indexOf(h), ...s];
        }
      }
    } else if (R(d) === "Object") {
      if (R(i) === "Function" && i(d))
        return u = d, [];
      for (let h in d) {
        if (u !== "notFoundC")
          break;
        if (d.hasOwnProperty(h)) {
          if (R(i) === "Function" && i(h) || d[h] === i)
            return u = d[h], [h];
          if (R(d[h]) === "Object" || R(d[h]) === "Array") {
            let s = n(d[h], i);
            if (s !== void 0)
              return [h, ...s];
          }
        }
      }
    }
  };
  return t = n(a, o), e ? t || !1 : u === "notFoundC" ? !1 : u;
}
function Na(a, o) {
  for (let e = 0, t = o.length; e < t; e++)
    if (a === o[e])
      return !0;
  return !1;
}
function Ea(a, o = 2) {
  let e = new RegExp(`(^-?\\d+\\.\\d{${o}})(\\d+$)`), t = a && String(a) || "";
  return e.test(t) ? Number(t.replace(e, "$1")) : a;
}
function wt(a, o = {}, e = "get") {
  let t = document.createElement("form"), u = document.getElementsByTagName("body")[0];
  u.appendChild(t), t.setAttribute("style", "display:none"), t.setAttribute("target", ""), t.setAttribute("method", e);
  let n = a;
  if (window && window.hasOwnProperty("g")) {
    let d = Object.keys(window.g).filter((i) => i.indexOf("URL") > -1).map((i) => i.replace("URL", ""));
    for (let i of d) {
      let h = new RegExp("^/" + i + "(?=/.*$)", "i");
      if (h.test(a) && window.g[i + "URL"]) {
        n = window.g[i + "URL"] + a.replace(h, "");
        break;
      }
    }
  }
  if (t.setAttribute("action", n), qe(o)) {
    for (let i in o)
      if (o.hasOwnProperty(i) && (o[i] || o[i] === 0 || o[i] === !1 || o[i] === "")) {
        let h = document.createElement("input");
        h.setAttribute("type", "hidden"), h.setAttribute("name", i), h.setAttribute("value", o[i]), t.appendChild(h);
      }
    t.submit();
    let d = setTimeout(() => {
      u.removeChild(t), clearTimeout(d), d = null;
    }, 8e3);
  } else
    console.error("请求数据格式有误，无法下载文件");
}
function Ga(a, o = {}, e = "get") {
  if (o.hasOwnProperty("columns") && (o.columns === "" || o.columns === null || o.columns === void 0)) {
    Ie.call(this, {
      title: "需要导出的列不能为空",
      type: "warning"
    });
    return;
  }
  wt(a, o, e);
}
function za(a, o, e = !1) {
  let t;
  if (a && R(o) === "Array") {
    let u = localStorage.getItem(a);
    if (u) {
      let n = JSON.parse(decodeURI(u));
      t = o.filter((d) => d.key && n.indexOf(d.title) !== -1).map((d) => d.key);
    } else
      t = o.map((n) => n.key);
  } else
    t = [];
  return e || (t = String(t)), t;
}
function ke(a) {
  return a != null && a !== "";
}
function Ha(a) {
  return /^-?\d+(.\d+)?$/.test(a);
}
function _t(a, o = !1, e = "") {
  return function(t, u) {
    var h, s;
    let n;
    if (Array.isArray(a)) {
      let c = [];
      for (let f of a)
        ke((h = u.row) == null ? void 0 : h[f]) && c.push(u.row[f]);
      n = c.join(e);
    } else
      typeof a == "function" ? n = a(u) : n = (s = u.row) == null ? void 0 : s[a];
    let d = bt(n), i = u.column._width;
    return n && d > i ? we(
      ia,
      {
        style: {
          width: "100%"
        },
        content: n,
        maxWidth: i * 2
      },
      () => we(
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
    ) : we("span", o && !ke(n) ? "--" : n);
  };
}
function Wa(a) {
  if (qe(a)) {
    for (let o in a)
      if (a.hasOwnProperty(o) && ke(a[o]))
        return !1;
    return !0;
  } else if (Array.isArray(a)) {
    for (let o of a)
      if (ke(o))
        return !1;
    return !0;
  }
  return !ke(a);
}
function ja(a) {
  return R(a) === "String" ? a.replace(/[^\x00-\xff]/g, "01").length : R(a) === "Number" ? (a += "", a.replace(/[^\x00-\xff]/g, "01").length) : 0;
}
function Je({
  group: a,
  condition: o,
  key: e,
  val: t,
  childKey: u = "children"
}) {
  if (R(a) !== "Array" || R(o) !== "Function" || R(e) !== "String" || R(u) !== "String")
    return !1;
  a.forEach((n) => {
    o(n) && (R(t) === "Function" ? n[e] = t(n[e]) : n[e] = t), R(n[u]) === "Array" && n[u].length > 0 && Je({
      group: n[u],
      condition: o,
      key: e,
      val: t,
      childKey: u
    });
  });
}
function Vt(a) {
  let o = sessionStorage.getItem("btnPermissions");
  return o ? o.split(",").indexOf(a) > -1 : !1;
}
function Ct(a) {
  return R(a) === "Number" && String(a) === "NaN";
}
function Ja(a, o = !1, e = !1) {
  if (R(a) !== "Object")
    return a;
  let t = Object.assign(a, {}), u = "";
  for (let n in t)
    if (t.hasOwnProperty(n)) {
      let d = t[n];
      d === void 0 || d === "" || R(d) === "String" && d.trim() === "" || d === null || Ct(d) ? e ? o ? u += n + "=&" : t[n] = "" : delete t[n] : o && (u += n + "=" + d + "&");
    }
  return o ? u.length > 0 ? u.substring(0, u.length - 1) : "" : t;
}
function Ll(a) {
  let o = {};
  if (Array.isArray(a)) {
    o = [];
    for (let e of a)
      Array.isArray(e) || qe(e) ? o.push(Ll(e)) : ke(e) && o.push(e);
  } else if (qe(a))
    for (let e in a)
      a.hasOwnProperty(e) && (Array.isArray(a[e]) || qe(a[e]) ? o[e] = Ll(a[e]) : ke(a[e]) && (o[e] = a[e]));
  return o;
}
function qa(a) {
  const o = window.open();
  if (o) {
    o.document.write(a);
    let e = setTimeout(() => {
      o.print(), window.clearTimeout(e), e = null;
    }, 10);
  }
}
function At(a) {
  let o = [], e = a;
  for (; a.previousSibling && (a = a.previousSibling); )
    a.nodeType === 1 && o.push(a);
  for (; e.nextSibling && (e = e.nextSibling); )
    e.nodeType === 1 && o.push(e);
  return o;
}
const Bt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clearObj: Sl,
  dataFilterOrToUrl: Ja,
  decimalDigitsLimit: Ea,
  downloadFileByFormSubmit: wt,
  fileExport: Ga,
  findCollection: je,
  formDataHeadConfig: $a,
  getColumnsKeys: za,
  hasPermission: Vt,
  htmlPrint: qa,
  isEmptyValue: Wa,
  isNaN: Ct,
  isNumberValue: Ha,
  isValidValue: ke,
  myTypeof: R,
  oneOf: Na,
  removeEmptyValue: Ll,
  setValByOption: Je,
  siblingElems: At,
  stringLength: ja,
  toFormData: Da,
  toLine: kt,
  tooltipManual: _t,
  trimObj: yl
}, Symbol.toStringTag, { value: "Module" })), Ya = { class: "groupBoxRP" }, Xa = ["onClick"], Za = /* @__PURE__ */ ue({
  __name: "SideMenuGroup",
  props: {
    data: { default: () => [] },
    pathName: { default: "" }
  },
  setup(a) {
    const o = a, e = ca();
    function t(n) {
      return n.path === o.pathName ? "active" : "";
    }
    function u(n, d) {
      n.preventDefault();
      let i = n.target;
      if (!d.children && !i.classList.contains("active")) {
        e.push(d.path);
        return;
      }
      let h = i.parentNode, s = At(h);
      for (let c of s) {
        c.classList.remove("open");
        const f = c.querySelectorAll(".open");
        for (let w of f)
          w.classList.remove("open");
      }
      h.classList.toggle("open");
    }
    return (n, d) => {
      const i = j("sideMenuGroup", !0);
      return S(), D("ul", Ya, [
        (S(!0), D(ve, null, be(o.data, (h, s) => (S(), D("li", {
          class: xe({ dropItemRP: h.children }),
          key: h.path + s
        }, [
          I("div", {
            class: xe(["menuTxtR", t(h)]),
            onClick: (c) => u(c, h),
            style: ee({ paddingLeft: h.level * 20 + "px" })
          }, N(h.name || "-- no name --"), 15, Xa),
          h.children ? (S(), Y(i, {
            key: 0,
            data: h.children,
            "path-name": o.pathName
          }, null, 8, ["data", "path-name"])) : ge("", !0)
        ], 2))), 128))
      ]);
    };
  }
}), Qa = { class: "menuListR" }, en = /* @__PURE__ */ ue({
  __name: "SideMenu",
  props: {
    data: { default: () => [] }
  },
  emits: ["on-change"],
  setup(a, { emit: o }) {
    const e = a, t = pt(), u = z(!0), n = z(), d = z(), i = U(() => u.value ? x("r.hideMenu") : x("r.showMenu")), h = U(() => u.value ? "ios-arrow-back" : "ios-arrow-forward");
    Xt(() => {
      let f = localStorage.getItem("menuDisplayR") || "";
      f !== "" ? u.value = JSON.parse(f) : (u.value = !0, localStorage.setItem("menuDisplayR", JSON.stringify(!0)));
    }), ye(
      () => t.path,
      (f) => {
        n.value = f, Oe(c);
      },
      { immediate: !0 }
    );
    function s() {
      u.value = !u.value, localStorage.setItem("menuDisplayR", JSON.stringify(u.value)), o("on-change", u.value);
    }
    function c() {
      let f = d.value.querySelectorAll(".dropItemRP");
      for (let w of f)
        w.querySelector(".active") && !w.classList.contains("open") && w.classList.add("open");
    }
    return (f, w) => {
      const b = j("Icon");
      return S(), D("div", {
        ref_key: "menuRef",
        ref: d,
        class: "menuBoxRP"
      }, [
        re(I("div", Qa, [
          G(Za, {
            data: e.data,
            pathName: p(n)
          }, null, 8, ["data", "pathName"])
        ], 512), [
          [fe, p(u)]
        ]),
        G(b, {
          type: p(h),
          size: 25,
          class: xe([{ showIco: !p(u) }, "menuShowHideIco"]),
          title: p(i),
          onClick: s,
          color: p(u) ? "#fff" : "#333"
        }, null, 8, ["type", "class", "title", "color"])
      ], 512);
    };
  }
}), ln = ["title"], xt = /* @__PURE__ */ ue({
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
      const d = j("Icon"), i = Kl("has");
      return re((S(), D("div", {
        class: xe(["tableBtnsG", { disabled: e.disabled }]),
        onClick: t,
        title: e.title || p(x)("r.button")
      }, [
        G(d, {
          type: e.icon,
          size: e.size
        }, null, 8, ["type", "size"])
      ], 10, ln)), [
        [i, e.has]
      ]);
    };
  }
}), tn = { class: "contentX" }, an = { class: "arrowA" }, Il = /* @__PURE__ */ ue({
  __name: "ShowHidePanel",
  props: {
    bg: {}
  },
  setup(a) {
    const o = a, e = z(!0), t = U(() => e ? "background:" + o.bg || "transparent" : "");
    return (u, n) => {
      const d = j("Icon");
      return S(), D("div", {
        style: ee(p(t))
      }, [
        re(I("div", tn, [
          Te(u.$slots, "default")
        ], 512), [
          [fe, p(e)]
        ]),
        I("div", an, [
          I("div", {
            class: "btA",
            onClick: n[0] || (n[0] = (i) => e.value = !p(e))
          }, [
            G(d, {
              type: p(e) ? "ios-arrow-up" : "ios-arrow-down",
              size: "20"
            }, null, 8, ["type"])
          ])
        ])
      ], 4);
    };
  }
}), nn = { class: "contentZ" }, on = /* @__PURE__ */ ue({
  __name: "ShowHidePanelB",
  props: {
    modelValue: { type: Boolean, default: !1 },
    bg: { default: "transparent" }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: o }) {
    const e = a, t = U({
      get() {
        return e.modelValue;
      },
      set(n) {
        o("update:modelValue", n);
      }
    }), u = U(() => t.value ? "background:" + e.bg : "");
    return (n, d) => (S(), D("div", {
      style: ee(p(u))
    }, [
      re(I("div", nn, [
        Te(n.$slots, "default")
      ], 512), [
        [fe, p(t)]
      ])
    ], 4));
  }
});
let Ol = [], Ml = [];
const sn = function(a) {
  a && a.beforeEach ? a.beforeEach(() => {
    Ol.map((o) => {
      window.clearTimeout(o);
    }), Ml.map((o) => {
      window.clearInterval(o);
    }), Ol.length = 0, Ml.length = 0;
  }) : console.warn(
    "安装库plug-r-qw时未传入router，调用该库的定时器方法产生的定时器将不能自动销毁，请传入router：Vue.use(plugRQw,{router,...})"
  );
}, Le = function(a, o) {
  let e = window.setTimeout(a, o);
  return Ol.push(e), e;
}, Tt = function(a, o) {
  let e = window.setInterval(a, o);
  return Ml.push(e), e;
}, rn = /* @__PURE__ */ ue({
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
    const u = U({
      get() {
        return e.modelValue;
      },
      set(h) {
        o("update:modelValue", h);
      }
    }), n = U({
      get() {
        return e.open;
      },
      set(h) {
        o("on-toggle", h);
      }
    }), d = U(() => n.value ? "ios-arrow-up" : "ios-arrow-down");
    function i() {
      t || (t = !0, o("on-search", u.value), Le(() => {
        t = !1;
      }, 2e3));
    }
    return (h, s) => {
      const c = j("Input"), f = j("icon");
      return S(), D("div", {
        class: "tableSearchV",
        style: ee({ position: e.fixed ? "fixed" : "absolute", right: e.right, top: e.top })
      }, [
        Te(h.$slots, "default", {}, () => [
          G(c, {
            modelValue: p(u),
            "onUpdate:modelValue": s[0] || (s[0] = (w) => Me(u) ? u.value = w : null),
            style: ee({ width: e.width }),
            search: "",
            onOnSearch: i,
            class: "searchInputC",
            placeholder: e.placeholder || p(x)("r.pInput")
          }, null, 8, ["modelValue", "style", "placeholder"])
        ]),
        re(I("span", {
          class: "sbt",
          onClick: s[1] || (s[1] = (w) => n.value = !p(n)),
          style: ee({ color: e.btnColor })
        }, [
          G(f, {
            type: p(d),
            color: e.btnColor
          }, null, 8, ["type", "color"]),
          me(N(p(x)("r.adSearch")), 1)
        ], 4), [
          [fe, e.showBtn]
        ])
      ], 4);
    };
  }
}), un = { class: "tabSetF" }, dn = { class: "topCheck" }, St = /* @__PURE__ */ ue({
  __name: "TableSetting",
  props: {
    modelValue: { default: () => [] },
    sKey: {},
    top: { default: "30px" },
    right: { default: "0" },
    width: { default: "150px" },
    bg: { default: "#ccc" },
    defaultCheck: { type: Boolean, default: !1 },
    storage: { default: "localStorage" }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: o }) {
    var g, C, L, k, V;
    const e = a, t = z(!0), u = z(!1), n = z(!1), d = z([]), i = U(() => {
      let A = x("r.unknown");
      return e.modelValue.length > d.value.length && (d.value = ne(e.modelValue)), d.value.map((B) => {
        let O = { label: B && B.title || A };
        return B && B.disableShowSetting && (O.disabled = !0), O;
      });
    }), h = U(() => i.value.filter((A) => A.disabled)), s = U({
      get() {
        return e.modelValue.map((A) => A && A.title || x("r.unknown"));
      },
      set(A) {
        let B = d.value.filter((O) => {
          for (let m of A)
            if (m === O.title)
              return !0;
          return !1;
        });
        o("update:modelValue", B);
      }
    }), c = (V = (k = (L = (C = (g = nl()) == null ? void 0 : g.appContext) == null ? void 0 : C.config) == null ? void 0 : L.globalProperties) == null ? void 0 : k.$i18n) == null ? void 0 : V.locale;
    $e(() => {
      let A = x("r.unknown"), B;
      c ? B = window[e.storage].getItem(e.sKey + "_" + c) : B = window[e.storage].getItem(e.sKey), B ? s.value = JSON.parse(decodeURI(B)) : e.defaultCheck && (s.value = e.modelValue.filter((O) => O.showSettingCheck).map((O) => O && O.title || A));
    });
    function f(A) {
      A.length === i.value.length ? (t.value = !1, u.value = !0) : A.length > h.value.length ? (t.value = !0, u.value = !1) : (t.value = !1, u.value = !1);
    }
    ye(() => s.value, f, {
      immediate: !0,
      deep: !0
    });
    function w() {
      n.value || (n.value = !0);
    }
    function b() {
      c ? window[e.storage].setItem(e.sKey + "_" + c, encodeURI(JSON.stringify(s.value))) : window[e.storage].setItem(e.sKey, encodeURI(JSON.stringify(s.value))), n.value = !1;
    }
    function v() {
      t.value ? u.value = !1 : u.value = !u.value, t.value = !1, u.value ? s.value = i.value.map((A) => A.label) : s.value = h.value.map((A) => A.label);
    }
    return (A, B) => {
      const O = j("Icon"), m = j("Checkbox"), M = j("CheckboxGroup");
      return S(), D("div", un, [
        I("div", {
          class: "tabSetBt",
          onClick: w
        }, [
          G(O, {
            type: "md-settings",
            size: "17"
          }),
          I("span", null, N(p(x)("r.tabSetting")), 1)
        ]),
        re(I("div", {
          class: "tabSetCard",
          style: ee({ top: e.top, right: e.right, width: e.width, backgroundColor: e.bg })
        }, [
          I("div", dn, [
            G(m, {
              indeterminate: p(t),
              modelValue: p(u),
              "onUpdate:modelValue": B[0] || (B[0] = (y) => Me(u) ? u.value = y : null),
              onClick: dt(v, ["prevent"])
            }, {
              default: J(() => [
                me(N(p(x)("r.all")), 1)
              ]),
              _: 1
            }, 8, ["indeterminate", "modelValue", "onClick"]),
            I("span", {
              style: { cursor: "pointer", float: "right" },
              onClick: b
            }, N(p(x)("r.confirm")), 1)
          ]),
          G(M, {
            modelValue: p(s),
            "onUpdate:modelValue": B[1] || (B[1] = (y) => Me(s) ? s.value = y : null)
          }, {
            default: J(() => [
              (S(!0), D(ve, null, be(p(i), (y, F) => (S(), Y(m, {
                class: "setItem",
                label: y && y.label,
                key: "tabSet_" + e.sKey + F,
                disabled: y && y.disabled
              }, null, 8, ["label", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["modelValue"])
        ], 4), [
          [fe, p(n)]
        ])
      ]);
    };
  }
});
let ll = !1;
function vl({
  height: a,
  width: o = 416,
  title: e,
  content: t,
  onOk: u,
  onCancel: n,
  onClose: d,
  okText: i,
  cancelText: h,
  noWarnIcon: s,
  footerAlign: c,
  cancelBt: f = !0
}) {
  const w = (...C) => De.apply(this, C);
  let v = (a && Number(a) - 90 > 100 ? Number(a) - 90 + "px" : 0) || "100px", g = R(t) === "String";
  Ee.warning({
    width: o,
    footerHide: !0,
    render: () => we(
      "div",
      {
        class: "customMessageBox",
        style: {
          height: v
        }
      },
      [
        we(
          "div",
          {
            class: "containerN"
          },
          [
            we(
              "div",
              {
                class: "titleN"
              },
              [
                we("span", e || w("r.info.title")),
                we(
                  Vl,
                  {
                    class: "fr closeN",
                    type: "text",
                    onClick() {
                      ll || (Ee.remove(), d && R(d) === "Function" && d());
                    }
                  },
                  () => we("i", {
                    class: "ivu-icon ivu-icon-ios-close",
                    style: {
                      fontSize: "30px"
                    }
                  })
                )
              ]
            ),
            we(
              "div",
              {
                class: "contentN",
                style: {
                  textAlign: g ? "center" : "left"
                }
              },
              [
                we("i", {
                  class: g && !s ? "ivu-icon ivu-icon-ios-alert-outline" : "hide",
                  style: {
                    fontSize: "60px",
                    color: "#f8bb86"
                  }
                }),
                we("div", { class: "msgBoxConO" }, t || w("r.info.text"))
              ]
            ),
            we(
              "div",
              {
                class: "footerN",
                style: {
                  textAlign: c || "center"
                }
              },
              [
                we(
                  Vl,
                  {
                    class: "okBtN",
                    onClick(C) {
                      var L, k, V, A, B, O, m, M, y;
                      if (u && typeof u == "function") {
                        const F = u();
                        if (F && R(F) === "Promise") {
                          ll = !0;
                          const H = (C == null ? void 0 : C.currentTarget) || (C == null ? void 0 : C.target);
                          H && ((k = (L = H.classList) == null ? void 0 : L.add) == null || k.call(L, "ivu-btn-loading"), (A = (V = H.nextSibling) == null ? void 0 : V.setAttribute) == null || A.call(V, "disabled", "disabled"), (y = (M = ((m = (O = (B = H.parentElement) == null ? void 0 : B.parentElement) == null ? void 0 : O.querySelector) == null ? void 0 : m.call(O, ".titleN .closeN")).classList) == null ? void 0 : M.add) == null || y.call(M, "disabled")), Promise.resolve(F).then(() => {
                            ll = !1, Ee.remove();
                          }).catch(() => {
                            ll = !1, Ee.remove();
                          });
                        } else
                          Ee.remove();
                      }
                    }
                  },
                  () => [
                    we("i", {
                      class: "ivu-load-loop ivu-icon ivu-icon-ios-loading"
                    }),
                    we("span", i || w("r.confirm"))
                  ]
                ),
                we(
                  Vl,
                  {
                    class: ["cancelBtN", !f && "hide"],
                    onClick() {
                      ll || (Ee.remove(), R(n) === "Function" && n && n());
                    }
                  },
                  () => h || w("r.cancel")
                )
              ]
            )
          ]
        )
      ]
    )
  });
}
let We = 0, al = document.createElement("div");
al.setAttribute("class", "spinModal");
al.innerHTML = '<div class="loader"><svg class="circular" viewBox="25 25 50 50"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10" /></svg></div>';
window.onload = function() {
  document.getElementsByTagName("body")[0].append(al);
};
function lt(a) {
  a ? al.classList.add("show") : al.classList.remove("show");
}
function Lt(a) {
  let o = We;
  a ? We++ : We > 0 && We--, o !== We && (We === 0 ? lt(!1) : o === 0 && lt(!0));
}
const cn = window.location.origin;
let gl = null;
const tt = (...a) => De.apply(gl, a);
let Fe = Bl.create({
  baseURL: cn,
  withCredentials: !0
  // 允许携带cookie
});
function fn() {
  console.info("store为空，请在安装插件时传入store实例：Vue.use(plugRQw,{store:store})，Pinia传{store:useStore}");
}
Fe.interceptors.request.use(
  (a) => a,
  (a) => Promise.reject(a)
);
function at() {
  var a, o;
  if (Fe.store)
    if (typeof Fe.store == "function") {
      const e = Fe.store();
      e.logout && e.logout();
    } else
      (o = (a = Fe.store) == null ? void 0 : a.dispatch) == null || o.call(a, "logout");
  else
    fn();
}
Fe.interceptors.response.use(
  (a) => {
    var o, e;
    return gl && (((o = a == null ? void 0 : a.data) == null ? void 0 : o.code) === 403 || ((e = a == null ? void 0 : a.data) == null ? void 0 : e.code) === 409) && vl({
      content: tt("r.http." + a.data.code),
      onOk: at
    }), a;
  },
  (a) => {
    var o, e;
    return gl && (((o = a == null ? void 0 : a.response) == null ? void 0 : o.status) === 403 || ((e = a == null ? void 0 : a.response) == null ? void 0 : e.status) === 409) && vl({
      content: tt("r.http." + a.response.status),
      onOk: at
    }), console.warn("请求出错：", a), Promise.reject(a);
  }
);
function Ne(a, o, e, t) {
  t && t.spin && Lt(!1);
  let u = !0, n = a && a.data;
  if (n) {
    e = e || [];
    for (let d of e)
      n = n[d], u = u && n;
    return u ? n : (o && console.warn(o), !1);
  }
  return o && console.warn(o), !1;
}
function pn(a, o, e, t, u, n, d) {
  return new Promise((i, h) => {
    switch (a) {
      case "get":
        Fe.get(o, { params: e }).then((c) => {
          let f = Ne(c, t, u, n);
          f ? i(f) : h(c);
        }).catch((c) => {
          Ne({}, t, u, n), h(c);
        });
        break;
      case "delete":
        let s = d ? "params" : "data";
        Fe.delete(o, { [s]: e }).then((c) => {
          let f = Ne(c, t, u, n);
          f ? i(f) : h(c);
        }).catch((c) => {
          Ne({}, t, u, n), h(c);
        });
        break;
      case "post":
        Fe.post(o, e, n).then((c) => {
          let f = Ne(c, t, u, n);
          f ? i(f) : h(c);
        }).catch((c) => {
          Ne({}, t, u, n), h(c);
        });
        break;
      case "put":
        Fe.put(o, e, n).then((c) => {
          let f = Ne(c, t, u, n);
          f ? i(f) : h(c);
        }).catch((c) => {
          Ne({}, t, u, n), h(c);
        });
        break;
    }
  });
}
function sl(a, o, e = {}, t, u, n, d) {
  return new Promise((i, h) => {
    var s;
    if (o) {
      n && n.spin && Lt(!0);
      let c = o;
      if (window && window.hasOwnProperty("g")) {
        const b = window.g;
        let v = Object.keys(b).filter((g) => g.indexOf("URL") > -1).map((g) => g.replace("URL", ""));
        for (let g of v) {
          let C = new RegExp("^/" + g + "(?=/.*$)", "i");
          if (C.test(o) && b[g + "URL"]) {
            c = b[g + "URL"] + o.replace(C, "");
            break;
          }
        }
      }
      let f;
      if (((s = n == null ? void 0 : n.headers) == null ? void 0 : s["Content-Type"]) === "multipart/form-data")
        f = e;
      else if (e && !Ce(e))
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
      pn(w, c, f, t, u, n, d).then((b) => {
        i(b);
      }).catch((b) => {
        h(b);
      });
    } else
      console.error("没有请求地址:url"), h("没有请求地址:url");
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
    Fe.store = a, gl = o.config.globalProperties;
  },
  post(a, o, e, t, u) {
    return new Promise((n, d) => {
      sl("post", a, o, e, t, u).then((i) => {
        n(i);
      }).catch((i) => {
        d(i);
      });
    });
  },
  put(a, o, e, t, u) {
    return new Promise((n, d) => {
      sl("put", a, o, e, t, u).then((i) => {
        n(i);
      }).catch((i) => {
        d(i);
      });
    });
  },
  get(a, o, e, t, u) {
    return new Promise((n, d) => {
      sl("get", a, o, e, t, u).then((i) => {
        n(i);
      }).catch((i) => {
        d(i);
      });
    });
  },
  delete(a, o, e, t, u, n = !0) {
    return new Promise((d, i) => {
      sl("delete", a, o, e, t, u, n).then((h) => {
        d(h);
      }).catch((h) => {
        i(h);
      });
    });
  },
  all: Bl.all,
  spread: Bl.spread,
  config: Fe
}, mn = {
  class: "btTablePage fullHeight flexColumnBox",
  ref: "tableBox"
}, hn = { class: "topBtn" }, yn = { class: "tableContainer growFlexItem" }, vn = { class: "fullHeight relativeBox" }, gn = {
  ref: "tableContainerLOI",
  class: "fullFlowContent"
}, bn = { class: "pageContainer" }, kn = 300, Fl = /* @__PURE__ */ ue({
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
    const t = a, { globalProperties: u } = nl().appContext.config;
    ({ ...{
      showSettingCheck: !1,
      disableShowSetting: !1
    }, ...sa });
    const d = u.pageSizes || [10, 20, 30, 40], i = z(t.data), h = z(
      localStorage.getItem("btPageSize") && Number(localStorage.getItem("btPageSize")) || t.pageSize
    ), s = z(1), c = z(0);
    let f = [], w, b, v = t.orderKey, g = t.orderDefault;
    const C = U(() => {
      for (let K of t.columns)
        if (K.fixed)
          return !0;
      return !1;
    }), L = U(() => t.selectionFixed || C.value), k = U(() => {
      let K = {
        ...t.searchData,
        current: s.value,
        size: h.value
      };
      return t.sortable === "custom" && (t.orderKeyFormat === "underline" ? K[g] = kt(v) : t.orderKeyFormat === "camelcase" && (K[g] = yt(v))), K;
    }), V = U(() => {
      let K = t.columns.filter(($) => $.type !== "selection");
      if (t.selection || t.radio) {
        let $;
        t.radio ? $ = {
          title: " ",
          width: 65,
          render: (he, pe) => we(ra, {
            value: pe.row.btChecked
          })
        } : $ = {
          type: "selection",
          width: 60
        }, t.selectionFixed && ($.fixed = t.selectionFixed), K.unshift($);
      }
      return K.forEach(($) => {
        t.sortable === "custom" ? $.key && $.sortable !== !0 && $.sortable !== !1 && ($.sortable = "custom") : $.sortable = !1, $.align || ($.align = "center");
      }), t.tableEmptyTdHandle && K.forEach(($) => {
        $.key && $.render === void 0 && ($.tooltip ? $.render = _t($.key, !0) : $.render = (he, pe) => {
          let Ae = pe.row[$.key];
          return he("span", Ae === "" || Ae === null || Ae === void 0 ? "--" : Ae);
        });
      }), K;
    }), A = U({
      get() {
        return i.value.map((K, $) => ({
          btKey: "bt-" + $,
          btChecked: !1,
          ...K
        }));
      },
      set(K) {
        i.value = K;
      }
    }), B = U(() => f.map((K) => K.id)), O = U(() => f.map((K) => K.btKey)), m = z();
    ye(() => t.searchData, M, { deep: !0 }), ye(
      () => t.orderDefault,
      (K) => {
        g = K;
      }
    ), ye(
      () => t.orderKey,
      (K) => {
        v = K;
      }
    );
    function M() {
      s.value = 1, Re();
    }
    function y() {
      t.initData && Re();
    }
    function F(K) {
      i.value.unshift(ne(K)), Le(() => {
        var $, he;
        (he = ($ = m.value) == null ? void 0 : $.clickCurrentRow) == null || he.call($, 0);
      }, 100);
    }
    function H(K, $, he) {
      let pe = null;
      if (na($) && $ ? pe = b : Ye($) && (pe = $), pe !== null) {
        let Ae = i.value[pe];
        for (let le in K)
          K.hasOwnProperty(le) && (Ae[le] = K[le]);
        he && Le(() => {
          var le, Pe;
          (Pe = (le = m.value) == null ? void 0 : le.clickCurrentRow) == null || Pe.call(le, pe);
        }, 10);
      }
    }
    function q(K) {
      i.value.splice(K, 1), Le(() => {
        var $, he;
        (he = ($ = m.value) == null ? void 0 : $.clickCurrentRow) == null || he.call($, 0);
      }, 100);
    }
    function Q(K, $) {
      var he, pe;
      K.btChecked && t.radio || (t.selection || t.radio) && t.rowClickSelect && ((pe = (he = m.value) == null ? void 0 : he.toggleSelect) == null || pe.call(he, $));
    }
    function de(K, $) {
      w = $.btKey, b = Number($.btKey.split("-")[1]), t.radio && (i.value[b].btChecked = !0);
    }
    function Ve(K) {
      if (t.radio)
        for (let $ of A.value)
          $.btKey !== w && (i.value[Number($.btKey.split("-")[1])].btChecked = !1);
      f = K, e("on-selection-change", K);
    }
    function _e() {
      return ne(f);
    }
    function W(K) {
      s.value = K, Re();
    }
    function ce(K) {
      h.value = K, localStorage.setItem("btPageSize", String(K)), s.value === 1 && Re();
    }
    function ie({ key: K, order: $ }) {
      g === "normal" ? (v = t.orderKey, g = t.orderDefault) : (v = K, g = $), s.value = 1, se();
    }
    function P() {
      var K, $;
      if (t.radio) {
        if (O.value.length > 0 && A.value.length > 0) {
          let he = O.value[0].split("-")[1];
          A.value[he].btChecked = !1;
        }
      } else
        ($ = (K = m.value) == null ? void 0 : K.selectAll) == null || $.call(K, !1);
      f.length > 0 && (f = [], e("on-selection-change", [])), w = null, b = null;
    }
    function ae() {
      i.value = [], P(), s.value = 1, c.value = 0;
    }
    function se(K, $, he) {
      return new Promise((pe) => {
        K && (g = K), $ && (v = $), t.url ? Ke[t.method](t.url, k.value, "", [], { spin: t.getDataLoading }).then((Ae) => {
          var Pe, ol;
          let le;
          he || P(), typeof t.dataHandler == "function" ? le = t.dataHandler(Ae) : le = Ae, le.data ? (le.data.records || le.data.records === null ? i.value = le.data.records || [] : le.data.page ? (le.data.page.records || le.data.page.records === null) && (i.value = le.data.page.records || []) : le.data.data ? (le.data.data.records || le.data.data.records === null) && (i.value = le.data.data.records || []) : i.value = le.data, c.value = ((Pe = le.data.page) == null ? void 0 : Pe.total) || ((ol = le.data.data) == null ? void 0 : ol.total) || le.data.total || le.total || 0, c.value === 0 && s.value > 1 && i.value && i.value.length === 0 ? s.value = 1 : s.value > 1 && c.value <= (s.value - 1) * h.value && (s.value--, Oe(function() {
            se(K, $);
          })), e("on-data-change", le), pe(le)) : (console.warn("请求返回数据有误，无法使用"), ae(), e("on-data-change", le));
        }).catch((Ae) => {
          P(), ae(), e("on-data-change", Ae);
        }) : console.warn("没有有效的请求地址，无法获取表格数据");
      });
    }
    function Re(K, $, he) {
      t.radio && (K || t.rowClickNum !== -1) ? se($, he, K).then(() => {
        i.value.length > 0 && Le(() => {
          var pe, Ae, le, Pe;
          K ? (Ae = (pe = m.value) == null ? void 0 : pe.clickCurrentRow) == null || Ae.call(pe, b || 0) : (Pe = (le = m.value) == null ? void 0 : le.clickCurrentRow) == null || Pe.call(le, t.rowClickNum);
        }, 10);
      }) : se();
    }
    return $e(y), o({
      selectedIds: B,
      addRow: F,
      setRowData: H,
      deleteRow: q,
      getSelected: _e,
      clearSelect: P,
      clearTableData: ae,
      getTableData: se,
      getDataAndClickRow: Re
    }), (K, $) => {
      const he = j("Table"), pe = j("Page");
      return S(), D("div", mn, [
        re(I("div", hn, [
          Te(K.$slots, "tableSetting"),
          Te(K.$slots, "topMsg"),
          Te(K.$slots, "topBtnGroup")
        ], 512), [
          [fe, t.showTopRow]
        ]),
        I("div", yn, [
          I("div", vn, [
            I("div", gn, [
              G(he, Ze({
                ref_key: "tableRef",
                ref: m
              }, K.$attrs, {
                height: p(L) && kn || null,
                class: { noBorderTable: t.noBorderTable, fullHeightTable: !p(L), lightHeadO: t.lightHead },
                columns: p(V),
                data: p(A),
                "highlight-row": t.radio || t.highlightRow,
                onOnSelect: de,
                onOnSelectionChange: Ve,
                onOnSortChange: ie,
                onOnRowClick: Q
              }), null, 16, ["height", "class", "columns", "data", "highlight-row"])
            ], 512)
          ])
        ]),
        re(I("div", bn, [
          G(pe, {
            modelValue: p(s),
            "onUpdate:modelValue": $[0] || ($[0] = (Ae) => Me(s) ? s.value = Ae : null),
            "page-size-opts": p(d),
            total: p(c),
            "page-size": p(h),
            "show-sizer": "",
            "show-total": "",
            showElevator: !t.noElevator,
            size: t.pageComponentSize,
            onOnChange: W,
            onOnPageSizeChange: ce
          }, null, 8, ["modelValue", "page-size-opts", "total", "page-size", "showElevator", "size"])
        ], 512), [
          [fe, !t.noPage]
        ])
      ], 512);
    };
  }
}), It = /* @__PURE__ */ ue({
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
    const e = a, t = U({
      get() {
        return e.modelValue && e.modelValue.key || null;
      },
      set(s) {
        let c = {
          key: s,
          val: null
        };
        t.value && t.value !== s && (c.beforeKey = t.value), o("update:modelValue", c), o("on-change", c);
      }
    }), u = U({
      get() {
        return e.modelValue && e.modelValue.val || null;
      },
      set(s) {
        o("update:modelValue", {
          key: t.value,
          val: s
        });
      }
    }), n = U(() => ({
      width: e.labelWidth + "px",
      textAlign: e.labelTextAlign
    })), d = U(() => ({ width: e.itemWidth + "px" }));
    function i(s) {
      var c;
      ((c = s == null ? void 0 : s.target) == null ? void 0 : c.value) !== void 0 && h({
        key: t.value,
        val: s.target.value
      });
    }
    const h = ct((s) => {
      o("on-change", s);
    }, 500);
    return (s, c) => {
      const f = j("Option"), w = j("Select"), b = j("Input");
      return S(), D("div", null, [
        G(w, {
          modelValue: p(t),
          "onUpdate:modelValue": c[0] || (c[0] = (v) => Me(t) ? t.value = v : null),
          style: ee(p(n)),
          disabled: !!e.disabled,
          transfer: ""
        }, {
          default: J(() => [
            (S(!0), D(ve, null, be(e.selectOption, (v, g) => (S(), Y(f, {
              value: v.val,
              label: v.label,
              key: "selectInputOp" + v.value + g,
              style: ee({ textAlign: e.labelTextAlign })
            }, null, 8, ["value", "label", "style"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue", "style", "disabled"]),
        G(b, {
          modelValue: p(u),
          "onUpdate:modelValue": c[1] || (c[1] = (v) => Me(u) ? u.value = v : null),
          placeholder: e.placeholder || p(x)("r.pInput"),
          style: ee(p(d)),
          clearable: e.clearable,
          disabled: !!e.disabled,
          onOnChange: i
        }, null, 8, ["modelValue", "placeholder", "style", "clearable", "disabled"])
      ]);
    };
  }
});
var wn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function _n(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var Ot = { exports: {} };
(function(a, o) {
  (function(e, t) {
    a.exports = t();
  })(wn, function() {
    function e(f) {
      var w = [];
      return f.AMapUI && w.push(t(f.AMapUI)), f.Loca && w.push(u(f.Loca)), Promise.all(w);
    }
    function t(f) {
      return new Promise(function(w, b) {
        var v = [];
        if (f.plugins)
          for (var g = 0; g < f.plugins.length; g += 1)
            d.AMapUI.plugins.indexOf(f.plugins[g]) == -1 && v.push(f.plugins[g]);
        if (i.AMapUI === n.failed)
          b("前次请求 AMapUI 失败");
        else if (i.AMapUI === n.notload) {
          i.AMapUI = n.loading, d.AMapUI.version = f.version || d.AMapUI.version, g = d.AMapUI.version;
          var C = document.body || document.head, L = document.createElement("script");
          L.type = "text/javascript", L.src = "https://webapi.amap.com/ui/" + g + "/main.js", L.onerror = function(k) {
            i.AMapUI = n.failed, b("请求 AMapUI 失败");
          }, L.onload = function() {
            if (i.AMapUI = n.loaded, v.length)
              window.AMapUI.loadUI(v, function() {
                for (var k = 0, V = v.length; k < V; k++) {
                  var A = v[k].split("/").slice(-1)[0];
                  window.AMapUI[A] = arguments[k];
                }
                for (w(); h.AMapUI.length; )
                  h.AMapUI.splice(0, 1)[0]();
              });
            else
              for (w(); h.AMapUI.length; )
                h.AMapUI.splice(0, 1)[0]();
          }, C.appendChild(L);
        } else
          i.AMapUI === n.loaded ? f.version && f.version !== d.AMapUI.version ? b("不允许多个版本 AMapUI 混用") : v.length ? window.AMapUI.loadUI(v, function() {
            for (var k = 0, V = v.length; k < V; k++) {
              var A = v[k].split("/").slice(-1)[0];
              window.AMapUI[A] = arguments[k];
            }
            w();
          }) : w() : f.version && f.version !== d.AMapUI.version ? b("不允许多个版本 AMapUI 混用") : h.AMapUI.push(function(k) {
            k ? b(k) : v.length ? window.AMapUI.loadUI(v, function() {
              for (var V = 0, A = v.length; V < A; V++) {
                var B = v[V].split("/").slice(-1)[0];
                window.AMapUI[B] = arguments[V];
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
          i.Loca = n.loading, d.Loca.version = f.version || d.Loca.version;
          var v = d.Loca.version, g = d.AMap.version.startsWith("2"), C = v.startsWith("2");
          if (g && !C || !g && C)
            b("JSAPI 与 Loca 版本不对应！！");
          else {
            g = d.key, C = document.body || document.head;
            var L = document.createElement("script");
            L.type = "text/javascript", L.src = "https://webapi.amap.com/loca?v=" + v + "&key=" + g, L.onerror = function(k) {
              i.Loca = n.failed, b("请求 AMapUI 失败");
            }, L.onload = function() {
              for (i.Loca = n.loaded, w(); h.Loca.length; )
                h.Loca.splice(0, 1)[0]();
            }, C.appendChild(L);
          }
        } else
          i.Loca === n.loaded ? f.version && f.version !== d.Loca.version ? b("不允许多个版本 Loca 混用") : w() : f.version && f.version !== d.Loca.version ? b("不允许多个版本 Loca 混用") : h.Loca.push(function(k) {
            k ? b(k) : b();
          });
      });
    }
    if (!window)
      throw Error("AMap JSAPI can only be used in Browser.");
    var n;
    (function(f) {
      f.notload = "notload", f.loading = "loading", f.loaded = "loaded", f.failed = "failed";
    })(n || (n = {}));
    var d = { key: "", AMap: { version: "1.4.15", plugins: [] }, AMapUI: { version: "1.1", plugins: [] }, Loca: { version: "1.3.2" } }, i = { AMap: n.notload, AMapUI: n.notload, Loca: n.notload }, h = { AMap: [], AMapUI: [], Loca: [] }, s = [], c = function(f) {
      typeof f == "function" && (i.AMap === n.loaded ? f(window.AMap) : s.push(f));
    };
    return { load: function(f) {
      return new Promise(function(w, b) {
        if (i.AMap == n.failed)
          b("");
        else if (i.AMap == n.notload) {
          var v = f.key, g = f.version, C = f.plugins;
          v ? (window.AMap && location.host !== "lbs.amap.com" && b("禁止多种API加载方式混用"), d.key = v, d.AMap.version = g || d.AMap.version, d.AMap.plugins = C || d.AMap.plugins, i.AMap = n.loading, g = document.body || document.head, window.___onAPILoaded = function(k) {
            if (delete window.___onAPILoaded, k)
              i.AMap = n.failed, b(k);
            else
              for (i.AMap = n.loaded, e(f).then(function() {
                w(window.AMap);
              }).catch(b); s.length; )
                s.splice(0, 1)[0]();
          }, C = document.createElement("script"), C.type = "text/javascript", C.src = "https://webapi.amap.com/maps?callback=___onAPILoaded&v=" + d.AMap.version + "&key=" + v + "&plugin=" + d.AMap.plugins.join(","), C.onerror = function(k) {
            i.AMap = n.failed, b(k);
          }, g.appendChild(C)) : b("请填写key");
        } else if (i.AMap == n.loaded)
          if (f.key && f.key !== d.key)
            b("多个不一致的 key");
          else if (f.version && f.version !== d.AMap.version)
            b("不允许多个版本 JSAPI 混用");
          else {
            if (v = [], f.plugins)
              for (g = 0; g < f.plugins.length; g += 1)
                d.AMap.plugins.indexOf(f.plugins[g]) == -1 && v.push(f.plugins[g]);
            v.length ? window.AMap.plugin(v, function() {
              e(f).then(function() {
                w(window.AMap);
              }).catch(b);
            }) : e(f).then(function() {
              w(window.AMap);
            }).catch(b);
          }
        else if (f.key && f.key !== d.key)
          b("多个不一致的 key");
        else if (f.version && f.version !== d.AMap.version)
          b("不允许多个版本 JSAPI 混用");
        else {
          var L = [];
          if (f.plugins)
            for (g = 0; g < f.plugins.length; g += 1)
              d.AMap.plugins.indexOf(f.plugins[g]) == -1 && L.push(f.plugins[g]);
          c(function() {
            L.length ? window.AMap.plugin(L, function() {
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
      delete window.AMap, delete window.AMapUI, delete window.Loca, d = { key: "", AMap: { version: "1.4.15", plugins: [] }, AMapUI: { version: "1.1", plugins: [] }, Loca: { version: "1.3.2" } }, i = {
        AMap: n.notload,
        AMapUI: n.notload,
        Loca: n.notload
      }, h = { AMap: [], AMapUI: [], Loca: [] };
    } };
  });
})(Ot);
var Vn = Ot.exports;
const rl = /* @__PURE__ */ _n(Vn);
let Pl = { securityJsCode: "", key: "" };
function Cn({ securityJsCode: a, key: o }) {
  Pl.securityJsCode = a, Pl.key = o;
}
function An(a) {
  return Pl[a];
}
const Mt = /* @__PURE__ */ ue({
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
    const e = a, t = U({
      get() {
        let V;
        return e.modelValue ? e.modelValue.name ? V = ne(e.modelValue) : V = {
          ...e.modelValue,
          name: null
        } : V = {
          name: null
        }, V;
      },
      set(V) {
        o("update:modelValue", ne(V));
      }
    }), u = U(() => Ye(e.width) ? e.width + "px" : e.width), n = U(() => Ye(e.height) ? e.height + "px" : e.height ? e.height : Ye(e.width) ? e.width * 0.66 + "px" : "200px"), d = U(() => ({
      width: u.value,
      position: "relative"
    })), i = U(() => ({
      width: u.value,
      height: n.value,
      marginTop: "6px",
      opacity: e.showMap ? 1 : 0,
      position: e.showMap ? "relative" : "absolute",
      top: e.showMap ? 0 : "-10000px"
    }));
    ye(
      () => e.modelValue,
      (V) => {
        if (V && V.lng && V.lat) {
          if (!v || !g)
            return;
          L({
            lng: V.lng,
            lat: V.lat,
            name: V.name
          });
        }
      }
    );
    const h = "mapId" + Math.floor(Math.random() * 1e9), s = z(null), c = z(null);
    let f;
    function w() {
      c.value && c.value.clientHeight < 10 || !c.value ? Le(w, 300) : Le(C, 100);
    }
    let b, v, g;
    function C() {
      rl.load({
        key: An("key"),
        version: "2.0",
        plugins: ["AMap.AutoComplete", "AMap.Geocoder"]
      }).then((V) => {
        b = V, v = new b.Map(h).on("complete", () => {
          var B, O, m, M;
          g = new b.Geocoder(), (B = e.modelValue) != null && B.lng && ((O = e.modelValue) != null && O.lat) && L({
            lng: e.modelValue.lng,
            lat: e.modelValue.lat,
            name: e.modelValue.name
          });
          const A = (M = (m = s.value) == null ? void 0 : m.$el) == null ? void 0 : M.children;
          A && A.length > 1 && new b.AutoComplete({
            input: A[1]
          }).on("select", (y) => {
            var F, H, q;
            (F = y == null ? void 0 : y.poi) != null && F.name && ((H = y.poi.location) != null && H.lng && ((q = y.poi.location) != null && q.lat) ? (L({
              name: y.poi.name,
              lng: y.poi.location.lng,
              lat: y.poi.location.lat
            }), t.value = {
              name: y.poi.name,
              lng: y.poi.location.lng,
              lat: y.poi.location.lat
            }) : v.setCity(y.poi.name, () => {
              let Q = v.getCenter();
              L({
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
            L({
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
    function L({ lng: V, lat: A, name: B }) {
      v.clearMap();
      let O = new b.LngLat(V, A), m = new b.Marker({
        map: v,
        position: O,
        draggable: !0
      });
      v.add(m), k(V, A), m.on("dragend", () => {
        let M = m.getPosition();
        t.value = {
          name: B || null,
          lng: M.lng,
          lat: M.lat
        }, k(V, A);
      }), m.on("click", (M) => {
        f && f.open(v, M.target.getPosition());
      }), v.setFitView();
    }
    function k(V, A) {
      g.getAddress([V, A], (B, O) => {
        B === "complete" && O.info === "OK" && O.regeocode && O.regeocode.formattedAddress ? f = new b.InfoWindow({
          //创建信息窗体
          isCustom: !0,
          content: '<div class="mapInfoWindowIKJ">' + O.regeocode.formattedAddress + "</div>",
          offset: new b.Pixel(16, -45),
          closeWhenClickMap: !0
        }) : (f = null, console.warn("地图获取位置信息失败", O));
      });
    }
    return $e(w), Zt(() => {
      v && (v.destroy(), rl == null || rl.reset(), v = null, g = null, f = null);
    }), (V, A) => (S(), D("div", {
      style: ee(p(d)),
      class: "containerIKJ"
    }, [
      G(p(ua), {
        ref_key: "mapInputRef",
        ref: s,
        modelValue: p(t).name,
        "onUpdate:modelValue": A[0] || (A[0] = (B) => p(t).name = B),
        class: xe({ mapInputIKJ: e.showMap }),
        placeholder: e.placeholder || p(x)("r.search"),
        disabled: e.disabled,
        icon: "ios-search"
      }, null, 8, ["modelValue", "class", "placeholder", "disabled"]),
      I("div", {
        style: ee(p(i)),
        ref_key: "mapRef",
        ref: c,
        id: h
      }, null, 4)
    ], 4));
  }
});
var rt;
const Ft = /* @__PURE__ */ ue({
  __name: "AsyncCascader",
  props: {
    modelValue: {},
    url: { default: (rt = window == null ? void 0 : window.g) != null && rt.mgrURL ? window.g.mgrURL + "/web/v1/umc/orgs" : "" },
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
    const e = a, t = z([]), u = U({
      get() {
        let s = e.modelValue;
        return Array.isArray(s) ? ne(s) : Ye(s) ? hl({
          group: t.value,
          condition: (c) => c.value === s,
          pathKey: "value"
        }) : Rl(s) ? s.split(e.separator) : [];
      },
      set(s) {
        if (e.onlyLastVal)
          Ce(s) ? (o("update:modelValue", null), o("on-label-change", null)) : o("update:modelValue", fl(s));
        else {
          if (tl(e.modelValue, s))
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
      Ke.get(e.url).then((s) => {
        var f;
        let c = null;
        (f = s == null ? void 0 : s.data) != null && f.records ? c = s.data.records : s != null && s.data ? c = s.data : s && (c = s), c ? (typeof e.optionFilter == "function" && R(e.optionFilter) === "Function" && (c = e.optionFilter(c)), t.value = d(c)) : console.warn("级联数据错误，不能使用");
      }).catch(() => {
        console.warn("拉取级联数据出错");
      });
    }
    function d(s) {
      let c = [];
      for (let f of s) {
        let w = {
          value: f[e.optionVal],
          label: f[e.optionLabel]
        };
        f.children && !Ce(f.children) && (w.children = d(f.children)), c.push(w);
      }
      return c;
    }
    function i(s) {
      return e.onlyLastLabel ? fl(s) : s.join(e.separator);
    }
    function h(s, c) {
      let f = "";
      Ce(c) || (f = c.map((w) => w.label).join(e.separator)), o("on-label-change", f);
    }
    return $e(n), (s, c) => {
      const f = j("Cascader");
      return S(), Y(f, {
        data: p(t),
        modelValue: p(u),
        "onUpdate:modelValue": c[0] || (c[0] = (w) => Me(u) ? u.value = w : null),
        onOnChange: h,
        "change-on-select": "",
        transfer: "",
        disabled: e.disabled,
        "render-format": i,
        placeholder: e.placeholder || p(x)("r.pSelect"),
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
  setup(a, { emit: o }) {
    const e = a, t = z(), u = U({
      get() {
        if (e.modelValue && (Ye(e.modelValue) || Rl(e.modelValue))) {
          let d = String(e.modelValue).trim();
          if (/^\d*$/.test(d)) {
            let h = d.substring(0, 2) + "0000", s, c = n(d);
            return c.length < 7 ? s = d.substring(0, 4) + "00" : s = d.substring(0, 6), /^8\d+$/.test(d) ? [h, c] : [h, s, c];
          }
          return d.indexOf(e.separator) !== -1 ? d.split(e.separator) : [d];
        } else
          return Array.isArray(e.modelValue) ? ne(e.modelValue) : (t.value && (t.value.select = []), []);
      },
      set(d) {
        if (Ce(d))
          o("update:modelValue", null), o("on-name-change", null);
        else {
          let i = fl(d), h = "", s = "";
          if (i && (h = i.code), h && h.length < 12) {
            let c = [...h];
            for (; c.length < 12; )
              c.push(0);
            h = c.join("");
          }
          if (Array.isArray(d) && (s = d.map((c) => c.name).join(e.separator)), h) {
            if (h === e.modelValue)
              return;
            o("update:modelValue", h);
          }
          s && o("on-name-change", s);
        }
      }
    });
    function n(d) {
      let i = [...d];
      for (; i[i.length - 1] === "0"; )
        i.pop();
      return i.join("");
    }
    return (d, i) => (S(), Y(p(fa), Ze(d.$attrs, {
      class: "alCascaderMC",
      ref_key: "alCRef",
      ref: t,
      modelValue: p(u),
      "onUpdate:modelValue": i[0] || (i[0] = (h) => Me(u) ? u.value = h : null),
      level: e.level,
      disabled: e.disabled,
      placeholder: e.placeholder || p(x)("r.pSelect"),
      transfer: e.transfer,
      searchable: e.filterable
    }), null, 16, ["modelValue", "level", "disabled", "placeholder", "transfer", "searchable"]));
  }
});
function ze(a) {
  var d, i, h;
  const o = (...s) => De.apply(this, s), e = o("r.closePreview"), t = o("r.fullImg");
  let u = Cl(document.getElementsByTagName("body")), n = document.createElement("div");
  n.setAttribute("class", "fullScreenImgByDom"), n.innerHTML = `<div class='previewInner'><img src='${a}' alt='${t}' ><i class='ivu-icon ivu-icon-md-close' title='${e}' ></i></div>`, (i = (d = n.querySelector(".ivu-icon-md-close")) == null ? void 0 : d.addEventListener) == null || i.call(d, "click", function() {
    var c;
    let s = Cl(document.getElementsByTagName("body"));
    (c = s == null ? void 0 : s.removeChild) == null || c.call(s, n);
  }), (h = u == null ? void 0 : u.appendChild) == null || h.call(u, n);
}
const Bn = { class: "previewBoxM" }, xn = { class: "imgLoading" }, Tn = /* @__PURE__ */ I("div", {
  "data-loader": "circle-side",
  class: "loader-div"
}, null, -1), Sn = [
  Tn
], Ln = ["src", "alt"], In = { class: "deleteModal" }, On = { class: "previewBoxM" }, Mn = {
  key: 0,
  class: "previewImg"
}, Fn = ["src", "alt"], Pn = { class: "deleteModal" }, Un = { class: "customFileListM" }, Kn = {
  key: 0,
  class: "customFileListItem"
}, Rn = ["onClick", "title"], $n = { class: "btBoxJ" }, Dn = { class: "customFileListM" }, Nn = {
  key: 0,
  class: "customFileListItem"
}, En = { class: "listLoading" }, Gn = /* @__PURE__ */ I("div", {
  "data-loader": "circle-side",
  class: "loader-div"
}, null, -1), zn = [
  Gn
], Hn = ["onClick", "title"], Wn = { class: "btBoxJ" };
var ut;
const Ut = /* @__PURE__ */ ue({
  __name: "UploadGroup",
  props: {
    modelValue: { default: () => [] },
    url: { default: (ut = window == null ? void 0 : window.g) != null && ut.mgrURL ? window.g.mgrURL + "/web/v1/fsc/file" : "" },
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
    const e = a, t = cl([]), u = cl([]), n = U(() => !e.manualUpload && e.showImg && s.value ? "img" : e.manualUpload && e.showImg && s.value ? "localImg" : e.manualUpload && e.showUploadList && (!e.showImg || !s.value) ? "localList" : !e.manualUpload && e.showUploadList && (!e.showImg || !s.value) ? "list" : ""), d = U(() => e.manualUpload ? "//jsonplaceholder.typicode.com/posts/" : e.url), i = U({
      get() {
        return e.manualUpload ? h.value : h.value.map((y) => ({ id: y }));
      },
      set(y) {
        e.manualUpload ? h.value = y || [] : h.value = (y == null ? void 0 : y.map((F) => F.id)) || [];
      }
    }), h = U({
      get() {
        switch (typeof e.modelValue) {
          case "number":
            return [e.modelValue];
          case "string":
            return e.modelValue.indexOf("--") !== -1 ? [] : /^\d*$/.test(e.modelValue) ? [Number(e.modelValue)] : [e.modelValue];
          case "object":
            return Array.isArray(e.modelValue) ? e.modelValue.filter((y) => y !== "--") : R(e.modelValue) === "File" ? [e.modelValue] : [];
          default:
            return [];
        }
      },
      set(y) {
        if (e.length === 1) {
          let F = Cl(y);
          o("update:modelValue", F ?? null), o("on-change", F ?? null);
        } else
          o("update:modelValue", ne(y)), o("on-change", ne(y));
      }
    }), s = U(() => {
      let y;
      if (e.manualUpload ? y = i.value : y = u.value, !y)
        return !1;
      for (let F of y) {
        let H;
        if (e.manualUpload ? H = F == null ? void 0 : F.type : H = F == null ? void 0 : F.mimeType, !H || H && !(dl(H) || H === "loading"))
          return !1;
      }
      return !0;
    });
    ye(
      () => i.value,
      async (y) => {
        if (n.value === "localImg")
          y != null && y.length ? t.value = await f(y) : t.value = [];
        else if (y != null && y.length && n.value !== "localList") {
          let F = ne(y);
          const H = ne(u.value);
          for (let q of F)
            if ((q == null ? void 0 : q.name) === void 0)
              if (q.id) {
                const Q = Al(H, (de) => de.id === q.id);
                Q ? (q.name = Q.name, q.mimeType = Q.mimeType) : (q.mimeType = "loading", Ke.get(e.url + "/" + q.id).then((de) => {
                  var Ve, _e, W, ce, ie, P;
                  q.name = ((W = (_e = (Ve = de == null ? void 0 : de.data) == null ? void 0 : Ve.returnValue) == null ? void 0 : _e[0]) == null ? void 0 : W.name) || x("r.file") + Xl(y, q), q.mimeType = ((P = (ie = (ce = de == null ? void 0 : de.data) == null ? void 0 : ce.returnValue) == null ? void 0 : ie[0]) == null ? void 0 : P.mimeType) || "unknown", Qt(u);
                }).catch(() => {
                  q.name = x("r.file") + Xl(F, q);
                }));
              } else
                q.name = x("r.unknown");
          u.value = F;
        } else
          u.value = [];
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    function c(y) {
      return (y == null ? void 0 : y.name) || (y == null ? void 0 : y.split) && fl(y.split("/")) || y;
    }
    async function f(y) {
      let F = [];
      for (let H of y) {
        let q = await ul(H);
        F.push(q);
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
      return e.manualUpload ? (y == null ? void 0 : y.type) && dl(y.type) : (y == null ? void 0 : y.id) && y.mimeType && dl(y.mimeType);
    }
    function g(y) {
      if (e.manualUpload) {
        if (!y)
          return;
        ul(y).then((F) => {
          ze(F);
        });
      } else
        y != null && y.id && ze(e.url + "/" + y.id + "/download?preview=true");
    }
    function C(y) {
      R(y) === "String" && y.indexOf("http") > -1 ? window.open(y) : R(y) === "File" && ul(y).then((F) => {
        vt(y.name, F);
      });
    }
    function L(y) {
      var F, H;
      if (e.manualUpload) {
        if (y) {
          let q = $l(y.name);
          if ((F = e.format) != null && F.length && e.format.indexOf(q) < 0)
            return Ie(
              x("r.wrongFileType"),
              x("r.supportType") + (((H = e.format) == null ? void 0 : H.length) && String(e.format) || x("r.none")),
              "warning"
            ), !1;
          if (e.maxSize && y.size > e.maxSize * 1024)
            return Ie(x("r.fileIsBig"), x("r.supportSize") + e.maxSize + "kb", "warning"), !1;
          let Q = i.value;
          Q == null || Q.push(y), i.value = Q;
        }
        return !1;
      } else
        return !0;
    }
    function k(y) {
      console.warn(y), Ie(x("r.uploadError"), "", "error");
    }
    function V(y, F, H) {
      var q, Q, de, Ve, _e, W;
      if ((y == null ? void 0 : y.code) === 0) {
        let ce = i.value;
        F.id = (Q = (q = y.data) == null ? void 0 : q[0]) == null ? void 0 : Q.id, F.name = (Ve = (de = y.data) == null ? void 0 : de[0]) == null ? void 0 : Ve.name, F.mimeType = (W = (_e = y.data) == null ? void 0 : _e[0]) == null ? void 0 : W.mimeType, ce == null || ce.push(F), i.value = ce;
      } else
        Ie(x("r.uploadFail"), (y == null ? void 0 : y.message) || "", "error");
    }
    function A() {
      Ie(x("r.fileIsBig"), x("r.supportSize") + e.maxSize + " kb", "warning");
    }
    function B() {
      var y;
      Ie(
        x("r.wrongFileType"),
        x("r.supportType") + (((y = e.format) == null ? void 0 : y.length) && String(e.format) || x("r.none")),
        "warning"
      );
    }
    function O(y) {
      let F = y == null ? void 0 : y.id, H = y == null ? void 0 : y.mimeType;
      F && (R(H) === "String" && H.indexOf("image") > -1 ? ze(e.url + "/" + F + "/download?preview=true") : window.open(e.url + "/" + F + "/download?preview=true"));
    }
    function m(y) {
      var H, q, Q;
      let F = (Q = (q = (H = y == null ? void 0 : y.response) == null ? void 0 : H.data) == null ? void 0 : q[0]) == null ? void 0 : Q.id;
      M(null, F);
    }
    function M(y, F) {
      if (!(!F && F !== 0) && !e.disabled && h.value.indexOf(F) !== -1) {
        const H = ne(h.value);
        let q = i.value;
        q == null || q.splice(H.indexOf(F), 1), i.value = q;
      }
    }
    return (y, F) => {
      var de, Ve, _e, W, ce, ie;
      const H = j("Button"), q = j("Upload"), Q = j("Icon");
      return S(), D("div", null, [
        G(q, {
          name: "files",
          action: p(d),
          "before-upload": L,
          "on-error": k,
          "on-success": V,
          "on-exceeded-size": A,
          "on-preview": O,
          "on-remove": m,
          "on-format-error": B,
          data: e.data,
          "max-size": e.maxSize,
          "show-upload-list": !1,
          "with-credentials": e.withCredentials,
          format: e.format,
          multiple: e.multiple || !1,
          disabled: e.length && ((de = p(i)) == null ? void 0 : de.length) && ((Ve = p(i)) == null ? void 0 : Ve.length) >= e.length || !!e.disabled
        }, {
          default: J(() => {
            var P, ae;
            return [
              G(H, {
                icon: "ios-cloud-upload-outline",
                class: xe({
                  disabledR: e.length && ((P = p(i)) == null ? void 0 : P.length) && ((ae = p(i)) == null ? void 0 : ae.length) >= e.length || !!e.disabled
                })
              }, {
                default: J(() => [
                  me(N(p(x)("r.selectFile")), 1)
                ]),
                _: 1
              }, 8, ["class"])
            ];
          }),
          _: 1
        }, 8, ["action", "data", "max-size", "with-credentials", "format", "multiple", "disabled"]),
        re(I("div", Bn, [
          (S(!0), D(ve, null, be(p(u), (P) => (S(), D(ve, {
            key: P == null ? void 0 : P.id
          }, [
            !e.manualUpload && (P == null ? void 0 : P.id) !== null ? (S(), D("div", {
              key: 0,
              class: xe(["previewImg", { previewLoading: P.mimeType === "loading" }])
            }, [
              re(I("div", xn, Sn, 512), [
                [fe, P.mimeType === "loading"]
              ]),
              re(I("img", {
                src: y.url + "/" + P.id + "/download?preview=true",
                alt: P.name
              }, null, 8, Ln), [
                [fe, P.mimeType !== "loading"]
              ]),
              re(I("div", In, [
                G(Q, {
                  type: "ios-expand",
                  size: "40",
                  class: "previewExpand",
                  title: p(x)("r.fView"),
                  onClick: (ae) => p(ze)(e.url + "/" + P.id + "/download?preview=true")
                }, null, 8, ["title", "onClick"]),
                G(Q, {
                  type: "ios-trash-outline",
                  size: "40",
                  class: "previewDelete",
                  onClick: (ae) => M(ae, P.id),
                  title: p(x)("r.delete")
                }, null, 8, ["onClick", "title"])
              ], 512), [
                [fe, P.mimeType !== "loading"]
              ])
            ], 2)) : ge("", !0)
          ], 64))), 128))
        ], 512), [
          [fe, p(n) === "img" && ((_e = p(u)) == null ? void 0 : _e.length)]
        ]),
        re(I("div", On, [
          (S(!0), D(ve, null, be(p(t), (P, ae) => (S(), D(ve, {
            key: "manualImg" + ae
          }, [
            e.manualUpload && P !== null ? (S(), D("div", Mn, [
              I("img", {
                src: P,
                alt: "manualImg" + ae
              }, null, 8, Fn),
              I("div", Pn, [
                G(Q, {
                  type: "ios-expand",
                  size: "40",
                  class: "previewExpand",
                  onClick: (se) => p(ze)(P),
                  title: p(x)("r.fView")
                }, null, 8, ["onClick", "title"]),
                G(Q, {
                  type: "ios-trash-outline",
                  size: "40",
                  class: "previewDelete",
                  onClick: (se) => w(ae),
                  title: p(x)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : ge("", !0)
          ], 64))), 128))
        ], 512), [
          [fe, p(n) === "localImg" && ((W = p(t)) == null ? void 0 : W.length)]
        ]),
        re(I("div", Un, [
          (S(!0), D(ve, null, be(p(i), (P, ae) => (S(), D(ve, {
            key: "manualItem" + ae
          }, [
            e.manualUpload && P !== null ? (S(), D("p", Kn, [
              P.name ? (S(), Y(Q, {
                key: 0,
                type: p(Tl)(P.name)
              }, null, 8, ["type"])) : ge("", !0),
              I("span", {
                class: xe(["upNameT", { previewName: v(P) }]),
                onClick: (se) => C(P),
                title: p(x)("r.download")
              }, N(c(P)), 11, Rn),
              I("span", $n, [
                v(P) ? (S(), Y(Q, {
                  key: 0,
                  type: "md-qr-scanner",
                  size: "14",
                  class: "listBtH",
                  onClick: (se) => g(P),
                  title: p(x)("r.fView")
                }, null, 8, ["onClick", "title"])) : ge("", !0),
                G(Q, {
                  type: "ios-close",
                  size: "22",
                  class: "listBtH",
                  onClick: (se) => w(ae),
                  title: p(x)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : ge("", !0)
          ], 64))), 128))
        ], 512), [
          [fe, p(n) === "localList" && ((ce = p(i)) == null ? void 0 : ce.length)]
        ]),
        re(I("div", Dn, [
          (S(!0), D(ve, null, be(p(u), (P, ae) => (S(), D(ve, {
            key: "defaultItem" + ae
          }, [
            !e.manualUpload && P !== null ? (S(), D("div", Nn, [
              re(I("div", En, zn, 512), [
                [fe, P.mimeType === "loading"]
              ]),
              re(G(Q, {
                type: p(Tl)(P.name)
              }, null, 8, ["type"]), [
                [fe, P.mimeType !== "loading"]
              ]),
              re(I("span", {
                class: xe(["upNameT", { previewName: v(P) }]),
                onClick: (se) => b(P),
                title: p(x)("r.download")
              }, N(P.name || p(x)("r.file") + (ae + 1)), 11, Hn), [
                [fe, P.mimeType !== "loading"]
              ]),
              re(I("span", Wn, [
                v(P) ? (S(), Y(Q, {
                  key: 0,
                  type: "md-qr-scanner",
                  size: "14",
                  class: "listBtH",
                  onClick: (se) => g(P),
                  title: p(x)("r.fView")
                }, null, 8, ["onClick", "title"])) : ge("", !0),
                G(Q, {
                  type: "ios-close",
                  size: "22",
                  class: "listBtH",
                  onClick: (se) => w(ae),
                  title: p(x)("r.delete")
                }, null, 8, ["onClick", "title"])
              ], 512), [
                [fe, P.mimeType !== "loading"]
              ])
            ])) : ge("", !0)
          ], 64))), 128))
        ], 512), [
          [fe, p(n) === "list" && ((ie = p(u)) == null ? void 0 : ie.length)]
        ])
      ]);
    };
  }
}), jn = /* @__PURE__ */ I("div", { class: "bRoot" }, null, -1), Kt = /* @__PURE__ */ ue({
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
    const e = a, t = z(!1), u = z(!1), n = z(!1), d = U({
      get() {
        return e.modelValue && e.modelValue[0] || null;
      },
      set(g) {
        o("update:modelValue", [g, i.value]), o("on-change", [g, i.value]);
      }
    }), i = U({
      get() {
        return e.modelValue && e.modelValue[1] || null;
      },
      set(g) {
        o("update:modelValue", [d.value, g]), o("on-change", [d.value, g]);
      }
    }), h = U(
      () => (d.value || "") + ((d.value || i.value) && " - " || "") + (i.value || "")
    ), s = z();
    $e(() => {
      s.value.querySelector(".aRoot .ivu-input-suffix").addEventListener("mouseover", () => {
        n.value = !0;
      }), s.value.querySelector(".aRoot .ivu-input-suffix").addEventListener("mouseout", () => {
        n.value = !1;
      }), s.value.querySelector(".aRoot .ivu-input-suffix").addEventListener("click", (g) => {
        !e.disabled && (d.value || i.value) && (g.stopPropagation(), b());
      });
    });
    function c() {
      e.disabled || (t.value = !0);
    }
    function f(g) {
      d.value = g, t.value = !1, u.value = !0;
    }
    function w(g) {
      i.value = g, u.value = !1;
    }
    function b() {
      o("update:modelValue", [null, null]), o("on-change", [null, null]);
    }
    function v() {
      t.value = !1, u.value = !1, d.value && i.value === null && (d.value = null);
    }
    return (g, C) => {
      const L = j("DatePicker"), k = j("Icon"), V = j("Input");
      return S(), D("div", {
        class: "monthRangeBoxR",
        ref_key: "mPickerRef",
        ref: s
      }, [
        G(L, {
          open: p(u),
          modelValue: p(i),
          transfer: "",
          type: "month",
          placement: e.placement,
          options: e.options2,
          onOnChange: w,
          onOnClickoutside: v
        }, {
          default: J(() => [
            jn
          ]),
          _: 1
        }, 8, ["open", "modelValue", "placement", "options"]),
        G(L, {
          open: p(t),
          modelValue: p(d),
          transfer: "",
          type: "month",
          placement: e.placement,
          options: e.options1,
          onOnChange: f,
          onOnClickoutside: v
        }, {
          default: J(() => [
            I("div", { onClick: c }, [
              G(V, {
                class: "aRoot",
                modelValue: p(h),
                "onUpdate:modelValue": C[0] || (C[0] = (A) => Me(h) ? h.value = A : null),
                readonly: "",
                placeholder: e.placeholder || p(x)("r.selectDate"),
                disabled: e.disabled
              }, {
                suffix: J(() => [
                  G(k, {
                    type: p(n) && (p(d) || p(i)) && !e.disabled ? "ios-close-circle" : "ios-calendar-outline"
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
}), Jn = { class: "editor-pro-root" }, Rt = /* @__PURE__ */ ue({
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
    const e = a, t = cl(), u = U({
      get() {
        return e.modelValue;
      },
      set(s) {
        o("update:modelValue", s), o("on-change", s);
      }
    }), n = U(
      () => Object.assign(
        {
          placeholder: e.placeholder || x("r.pInput"),
          insertKeys: {
            index: 31,
            keys: ["previewX"]
          }
        },
        e.toolbarConfig
      )
    ), d = U(
      () => Object.assign(
        {
          readOnly: e.disabled,
          MENU_CONF: {
            uploadImage: {
              async customUpload(s, c) {
                let f = new FormData();
                f.append("files", s);
                const w = s.name, b = e.imgUploadUrl ?? "/node-serve/file";
                Ke.post(b, f, null, [], {
                  spin: !0,
                  headers: {
                    "Content-Type": "multipart/form-data"
                  }
                }).then((v) => {
                  if (v && v.data)
                    if (Array.isArray(v.data))
                      for (let g of v.data) {
                        const C = b + "/" + g.id + "/download";
                        c(C, w, C);
                      }
                    else {
                      const g = b + "/" + v.data.id + "/download";
                      c(g, w, g);
                    }
                }).catch(() => {
                  Ie(x("r.uploadFail"), "", "error");
                });
              }
            },
            uploadVideo: {
              async customUpload(s, c) {
                let f = new FormData();
                f.append("files", s);
                const w = e.videoUploadUrl ?? "/node-serve/file";
                Ke.post(w, f, null, [], {
                  spin: !0,
                  headers: {
                    "Content-Type": "multipart/form-data"
                  }
                }).then((b) => {
                  if (b && b.data)
                    if (Array.isArray(b.data))
                      for (let v of b.data) {
                        const g = w + "/" + v.id + "/download";
                        c(g);
                      }
                    else {
                      const v = w + "/" + b.data.id + "/download";
                      c(v);
                    }
                }).catch(() => {
                  Ie(x("r.uploadFail"), "", "error");
                });
              }
            }
          }
        },
        e.editorConfig
      )
    ), i = U(() => ({
      height: typeof e.height == "number" ? e.height + "px" : e.height
    }));
    function h(s) {
      t.value = s;
    }
    return ye(
      () => e.disabled,
      (s) => {
        s ? t.value.disable() : t.value.enable();
      }
    ), ea(() => {
      t.value && t.value.destroy();
    }), (s, c) => (S(), D("div", Jn, [
      re(G(p(pa), {
        class: "editor-pro-toolbar",
        editor: p(t),
        defaultConfig: p(n),
        mode: s.mode
      }, null, 8, ["editor", "defaultConfig", "mode"]), [
        [fe, !s.disabled]
      ]),
      G(p(ma), {
        class: "editor-pro-editor",
        modelValue: p(u),
        "onUpdate:modelValue": c[0] || (c[0] = (f) => Me(u) ? u.value = f : null),
        defaultConfig: p(d),
        mode: s.mode,
        onOnCreated: h,
        style: ee(p(i))
      }, null, 8, ["modelValue", "defaultConfig", "mode", "style"])
    ]));
  }
}), qn = {
  key: 19,
  class: "formInfoTxtXN"
}, Yn = {
  key: 20,
  class: "formTitleTxtXN"
}, nt = /* @__PURE__ */ ue({
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
    function u(s, c) {
      o("item-change", {
        e: s,
        root: c
      });
    }
    function n(s, c) {
      o("re-validate", {
        e: s,
        root: c
      });
    }
    function d(s) {
      o("select-input-change", s);
    }
    function i(s, c) {
      o("al-name-change", {
        name: s,
        root: c
      });
    }
    function h(s, c) {
      o("async-label-change", {
        label: s,
        root: c
      });
    }
    return (s, c) => {
      const f = j("InputNumber"), w = j("Input"), b = j("Option"), v = j("Select"), g = j("Radio"), C = j("Icon"), L = j("RadioGroup"), k = j("Checkbox"), V = j("CheckboxGroup"), A = j("DatePicker"), B = j("TimePicker"), O = j("FormItem");
      return S(), Y(O, {
        label: e.item.type !== "radio" && e.item.type !== "checkbox" ? e.item.label : " ",
        prop: e.item.key || "",
        class: xe(["relativeBox", t(e.item)])
      }, {
        default: J(() => [
          e.item.type === "txt" ? (S(), D("div", {
            key: 0,
            style: ee([e.itemStyle, { display: "inline-block" }]),
            class: xe({ likeInputX: e.item.likeInput, disabled: !!e.item.disabled || e.disabled })
          }, N(e.item.valKey ? e.valGroup[e.item.valKey] || "无" : e.item.val), 7)) : e.item.type === "inputNumber" ? (S(), Y(f, {
            key: 1,
            style: ee(e.itemStyle),
            modelValue: e.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[0] || (c[0] = (m) => e.tempKeys[e.item.tempKey] = m),
            max: e.item.max || e.item.max === 0 ? e.item.max : 1 / 0,
            min: e.item.min || e.item.min === 0 ? e.item.min : -1 / 0,
            precision: e.item.precision,
            step: e.item.step || 1,
            placeholder: e.item.placeholder || p(x)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            readonly: !!e.item.readonly,
            editable: e.item.editable !== !1,
            onOnBlur: c[1] || (c[1] = (m) => u(m, e.item)),
            "active-change": !!e.item.activeChange,
            clearable: e.item.clearable !== !1
          }, null, 8, ["style", "modelValue", "max", "min", "precision", "step", "placeholder", "disabled", "readonly", "editable", "active-change", "clearable"])) : e.item.type === "input" ? (S(), Y(w, {
            key: 2,
            style: ee(s.itemStyle),
            modelValue: e.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[2] || (c[2] = (m) => e.tempKeys[e.item.tempKey] = m),
            type: e.item.inputType ?? (e.item.password ? "password" : "text"),
            maxlength: e.item.maxLength || null,
            password: !!e.item.password,
            icon: e.item.icon,
            prefix: e.item.prefix,
            suffix: e.item.suffix,
            placeholder: e.item.placeholder || p(x)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            onOnBlur: c[3] || (c[3] = (m) => u(m, e.item)),
            clearable: !e.item.password && e.item.inputType === "text" && e.item.clearable !== !1
          }, Xe({ _: 2 }, [
            e.item.slotPosition && e.item.slotName ? {
              name: e.item.slotPosition,
              fn: J(() => [
                Te(s.$slots, e.item.slotName)
              ]),
              key: "0"
            } : void 0,
            e.item.slotPosition !== "prepend" && e.item.prepend ? {
              name: "prepend",
              fn: J(() => [
                I("span", null, N(e.item.prepend), 1)
              ]),
              key: "1"
            } : void 0,
            e.item.slotPosition !== "append" && e.item.append ? {
              name: "append",
              fn: J(() => [
                I("span", null, N(e.item.append), 1)
              ]),
              key: "2"
            } : void 0
          ]), 1032, ["style", "modelValue", "type", "maxlength", "password", "icon", "prefix", "suffix", "placeholder", "disabled", "clearable"])) : e.item.type === "select" ? (S(), Y(v, {
            key: 3,
            modelValue: s.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[4] || (c[4] = (m) => s.tempKeys[e.item.tempKey] = m),
            style: ee(s.itemStyle),
            filterable: e.item.filterable === !0 || e.item.filterable === !1 ? e.item.filterable : !1,
            disabled: !!e.item.disabled || e.disabled,
            multiple: !!e.item.multiple,
            placeholder: e.item.placeholder || p(x)("r.pSelect"),
            onOnChange: c[5] || (c[5] = (m) => u(m, e.item)),
            transfer: "",
            clearable: e.item.clearable !== !1
          }, {
            default: J(() => [
              (S(!0), D(ve, null, be(e.item.options, (m, M) => (S(), Y(b, {
                value: m.val,
                label: m.label || m.val,
                key: "option-" + e.item.key + M,
                disabled: !!m.disabled
              }, null, 8, ["value", "label", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["modelValue", "style", "filterable", "disabled", "multiple", "placeholder", "clearable"])) : e.item.type === "selectInput" ? (S(), Y(It, {
            key: 4,
            modelValue: s.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[6] || (c[6] = (m) => s.tempKeys[e.item.tempKey] = m),
            "label-width": s.labelWidth,
            "item-width": s.itemWidth,
            "select-option": e.item.options || [],
            placeholder: e.item.placeholder || p(x)("r.pInput"),
            clearable: e.item.clearable !== !1,
            disabled: !!e.item.disabled || e.disabled,
            onOnChange: d
          }, null, 8, ["modelValue", "label-width", "item-width", "select-option", "placeholder", "clearable", "disabled"])) : e.item.type === "alCascader" ? (S(), Y(Pt, {
            key: 5,
            style: ee(s.itemStyle),
            class: "inlineBlock",
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": c[7] || (c[7] = (m) => e.valGroup[e.item.key] = m),
            level: e.item.level || e.item.level === 0 ? e.item.level : 2,
            disabled: !!e.item.disabled || e.disabled,
            filterable: e.item.filterable !== !1,
            placeholder: e.item.placeholder || p(x)("r.pSelect"),
            "change-on-select": !!e.item.changeOnSelect,
            onOnNameChange: c[8] || (c[8] = (m) => i(m, e.item))
          }, null, 8, ["style", "modelValue", "level", "disabled", "filterable", "placeholder", "change-on-select"])) : e.item.type === "asyncCascader" ? (S(), Y(Ft, {
            key: 6,
            style: ee(s.itemStyle),
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": c[9] || (c[9] = (m) => e.valGroup[e.item.key] = m),
            url: e.item.url || s.mgrUrl + "/web/v1/umc/orgs",
            "option-val": e.item.optionVal || "id",
            "option-label": e.item.optionLabel || "name",
            "option-filter": e.item.optionFilter || null,
            "only-last-val": e.item.onlyLastVal !== !1,
            "only-last-label": e.item.onlyLastLabel !== !1,
            separator: e.item.separator || "/",
            placeholder: e.item.placeholder || p(x)("r.pSelect"),
            filterable: !!e.item.filterable,
            disabled: !!e.item.disabled || e.disabled,
            onOnLabelChange: c[10] || (c[10] = (m) => h(m, e.item))
          }, null, 8, ["style", "modelValue", "url", "option-val", "option-label", "option-filter", "only-last-val", "only-last-label", "separator", "placeholder", "filterable", "disabled"])) : e.item.type === "radio" ? (S(), Y(g, {
            key: 7,
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": c[11] || (c[11] = (m) => e.valGroup[e.item.key] = m),
            disabled: !!e.item.disabled || e.disabled,
            onOnChange: c[12] || (c[12] = (m) => u(m, e.item))
          }, {
            default: J(() => [
              me(N(e.item.label), 1)
            ]),
            _: 1
          }, 8, ["modelValue", "disabled"])) : e.item.type === "radioGroup" ? (S(), Y(L, {
            key: 8,
            style: ee(s.itemStyle),
            onOnChange: c[13] || (c[13] = (m) => n(m, e.item)),
            type: e.item.buttonType ? "button" : null,
            modelValue: s.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[14] || (c[14] = (m) => s.tempKeys[e.item.tempKey] = m)
          }, {
            default: J(() => [
              (S(!0), D(ve, null, be(e.item.options, (m) => (S(), Y(g, {
                key: "radioItem" + m.val,
                label: m.val,
                border: !!e.item.itemBorder,
                disabled: !!e.item.disabled || e.disabled || m.disabled
              }, {
                default: J(() => [
                  m.icon && !e.item.buttonType ? (S(), Y(C, {
                    key: 0,
                    type: m.icon
                  }, null, 8, ["type"])) : ge("", !0),
                  I("span", null, N(m.label || m.val), 1)
                ]),
                _: 2
              }, 1032, ["label", "border", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["style", "type", "modelValue"])) : e.item.type === "checkbox" ? (S(), Y(k, {
            key: 9,
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": c[15] || (c[15] = (m) => e.valGroup[e.item.key] = m),
            disabled: !!e.item.disabled,
            onOnChange: c[16] || (c[16] = (m) => u(m, e.item))
          }, {
            default: J(() => [
              me(N(e.item.label), 1)
            ]),
            _: 1
          }, 8, ["modelValue", "disabled"])) : e.item.type === "checkboxGroup" ? (S(), Y(V, {
            key: 10,
            style: ee(s.itemStyle),
            modelValue: s.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[17] || (c[17] = (m) => s.tempKeys[e.item.tempKey] = m),
            onOnChange: c[18] || (c[18] = (m) => n(m, e.item))
          }, {
            default: J(() => [
              (S(!0), D(ve, null, be(e.item.options, (m) => (S(), Y(k, {
                key: "checkItem" + m.val,
                label: m.val,
                disabled: !!e.item.disabled || e.disabled || m.disabled
              }, {
                default: J(() => [
                  m.icon ? (S(), Y(C, {
                    key: 0,
                    type: m.icon
                  }, null, 8, ["type"])) : ge("", !0),
                  I("span", null, N(m.label || m.val), 1)
                ]),
                _: 2
              }, 1032, ["label", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["style", "modelValue"])) : e.item.type === "textarea" ? (S(), Y(w, {
            key: 11,
            type: "textarea",
            modelValue: s.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[19] || (c[19] = (m) => s.tempKeys[e.item.tempKey] = m),
            autosize: e.item.autosize || { minRows: 2 },
            style: ee(s.itemStyle),
            maxlength: e.item.maxLength || null,
            "show-word-limit": !!e.item.showWordLimit,
            placeholder: e.item.placeholder || p(x)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            onOnBlur: c[20] || (c[20] = (m) => u(m, e.item)),
            clearable: e.item.clearable !== !1
          }, null, 8, ["modelValue", "autosize", "style", "maxlength", "show-word-limit", "placeholder", "disabled", "clearable"])) : e.item.type === "upload" ? (S(), Y(Ut, {
            key: 12,
            style: ee(s.itemStyle),
            class: "inlineBlock",
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": c[21] || (c[21] = (m) => e.valGroup[e.item.key] = m),
            url: e.item.url || s.uploadUrl,
            "manual-upload": !!e.item.manualUpload,
            format: e.item.format || [],
            data: e.item.data,
            "max-size": e.item.maxSize || 0,
            "show-img": !!e.item.showImg,
            length: e.item.length || 0,
            disabled: !!e.item.disabled || e.disabled,
            "with-credentials": e.item.withCredentials !== !1,
            onOnFileIdChange: c[22] || (c[22] = (m) => n(m, e.item))
          }, null, 8, ["style", "modelValue", "url", "manual-upload", "format", "data", "max-size", "show-img", "length", "disabled", "with-credentials"])) : e.item.type === "date" ? (S(), Y(A, {
            key: 13,
            style: ee(s.itemStyle),
            modelValue: s.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[23] || (c[23] = (m) => s.tempKeys[e.item.tempKey] = m),
            type: e.item.dateType,
            disabled: !!e.item.disabled || e.disabled,
            placement: "bottom-end",
            placeholder: e.item.placeholder || p(x)("r.selectDate"),
            options: e.item.dateOptions || null,
            clearable: e.item.clearable !== !1,
            editable: !1,
            transfer: "",
            onOnChange: c[24] || (c[24] = (m) => u(m, e.item))
          }, null, 8, ["style", "modelValue", "type", "disabled", "placeholder", "options", "clearable"])) : e.item.type === "time" ? (S(), Y(B, {
            key: 14,
            style: ee(s.itemStyle),
            modelValue: s.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[25] || (c[25] = (m) => s.tempKeys[e.item.tempKey] = m),
            type: e.item.dateType,
            disabled: !!e.item.disabled || e.disabled,
            placement: "bottom-end",
            placeholder: e.item.placeholder || p(x)("r.selectTime"),
            steps: e.item.steps || [],
            clearable: e.item.clearable !== !1,
            editable: !1,
            format: e.item.format || "HH:mm:ss",
            transfer: "",
            onOnChange: c[26] || (c[26] = (m) => u(m, e.item))
          }, null, 8, ["style", "modelValue", "type", "disabled", "placeholder", "steps", "clearable", "format"])) : e.item.type === "monthRange" ? (S(), Y(Kt, {
            key: 15,
            style: ee(s.itemStyle),
            modelValue: s.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[27] || (c[27] = (m) => s.tempKeys[e.item.tempKey] = m),
            disabled: !!e.item.disabled || e.disabled,
            placement: "bottom-end",
            placeholder: e.item.placeholder || p(x)("r.selectDate"),
            options1: e.item.dateOptions1 || null,
            options2: e.item.dateOptions2 || null,
            onOnChange: c[28] || (c[28] = (m) => u(m, e.item))
          }, null, 8, ["style", "modelValue", "disabled", "placeholder", "options1", "options2"])) : e.item.type === "editorPro" ? (S(), Y(Rt, {
            key: 16,
            class: "inlineBlock",
            style: ee(s.itemStyle),
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": c[29] || (c[29] = (m) => e.valGroup[e.item.key] = m),
            placeholder: e.item.placeholder || p(x)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            "toolbar-config": e.item.toolbarConfig || {},
            "editor-config": e.item.editorConfig || {},
            mode: e.item.mode || "simple",
            height: e.item.height || 300,
            onInput: c[30] || (c[30] = (m) => u(m, e.item))
          }, null, 8, ["style", "modelValue", "placeholder", "disabled", "toolbar-config", "editor-config", "mode", "height"])) : e.item.type === "inputMap" ? (S(), Y(Mt, {
            key: 17,
            modelValue: s.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[31] || (c[31] = (m) => s.tempKeys[e.item.tempKey] = m),
            style: ee(s.itemStyle),
            placeholder: e.item.placeholder || p(x)("r.search"),
            disabled: !!e.item.disabled || e.disabled,
            "show-map": e.item.showMap !== !1,
            height: e.item.mapHeight || "250px",
            onOnChange: c[32] || (c[32] = (m) => u(m, e.item))
          }, null, 8, ["modelValue", "style", "placeholder", "disabled", "show-map", "height"])) : e.item.type === "custom" ? (S(), D("div", {
            key: 18,
            class: "inlineBlock",
            style: ee(s.itemStyle)
          }, [
            Te(s.$slots, e.item.slotName, {
              valGroup: e.valGroup
            })
          ], 4)) : ge("", !0),
          e.item.info ? (S(), D("div", qn, N(e.item.info), 1)) : ge("", !0),
          e.item.title ? (S(), D("div", Yn, N(e.item.title), 1)) : ge("", !0)
        ]),
        _: 3
      }, 8, ["label", "prop", "class"]);
    };
  }
}), Xn = /* @__PURE__ */ I("input", { type: "text" }, null, -1), Zn = { class: "inlineBlock" }, kl = /* @__PURE__ */ ue({
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
    var ql, Yl;
    const t = a, u = z(null), n = z({}), d = z([]), i = z({});
    let h = [];
    const s = ((ql = window == null ? void 0 : window.g) == null ? void 0 : ql.mgrURL) ?? "";
    let c = [], f = [];
    const w = z(!1), b = z(Math.random() * 1e8 + 1e3), v = (Yl = window == null ? void 0 : window.g) != null && Yl.mgrURL ? window.g.mgrURL + "/web/v1/fsc/file" : "/file";
    let g = !1;
    const C = U(() => Array.isArray(t.formData.length ? t.formData[0] : !1)), L = U(
      () => t.inline ? {
        width: t.itemWidth + t.labelWidth + "px"
      } : {}
    ), k = U(
      () => t.inline ? {
        width: "100%"
      } : { width: t.contentWidth }
    ), V = U(() => {
      let r = ne(t.formRules);
      for (let l in r)
        if (r.hasOwnProperty(l))
          if (Array.isArray(r[l]))
            for (let T of r[l])
              T.message || T.validator || (T.message = x("r.required"));
          else
            R(r[l]) === "Object" && (r[l].message || r[l].validator || (r[l].message = x("r.required")));
      return r;
    }), A = U(() => {
      let r = [];
      if (C.value)
        for (let l of d.value)
          m(l, r);
      else
        m(d.value, r);
      return r.concat(c, f);
    }), B = U(() => {
      let r = [];
      if (C.value)
        for (let l of d.value)
          M(l, r);
      else
        M(d.value, r);
      return r;
    });
    function O(r) {
      return r.filter((l) => l.slotName);
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
    function M(r, l) {
      for (let T of r)
        T.showing === !0 && T.key && T.type !== "selectInput" && l.push(T.key);
    }
    function y() {
      return new Promise((r) => {
        q(), H().then(() => {
          e("on-reset"), r(!0);
        });
      });
    }
    function F() {
      return new Promise((r) => {
        for (let l of h)
          l();
        h = [], i.value = {}, $(), ae(), H().then(() => {
          e("on-re-render"), r(!0);
        });
      });
    }
    function H() {
      return new Promise((r) => {
        b.value = Math.floor(Math.random() * 1e8 + 1e3), Oe(function() {
          r(!0);
        });
      });
    }
    function q() {
      let r = Ve();
      for (let l in n.value)
        if (n.value.hasOwnProperty(l))
          if (ke(r[l]))
            n.value[l] = r[l];
          else if (Array.isArray(n.value[l]))
            n.value[l] = [];
          else if (R(n.value[l]) === "Boolean")
            n.value[l] = !1;
          else {
            const T = je(t.formData, (_) => _.key === l);
            T && (T.type === "editor" || T.type === "editorPro") ? n.value[l] = "" : n.value[l] = null;
          }
      Q(r);
    }
    function Q(r) {
      for (let l in i.value)
        i.value.hasOwnProperty(l) && (ke(r[l]) ? i.value[l] = r[l] : Array.isArray(i.value[l]) ? i.value[l] = [] : R(i.value[l]) === "Object" && i.value[l].hasOwnProperty("key") && i.value[l].hasOwnProperty("val") ? i.value[l].val = null : i.value[l] = null);
    }
    function de(r) {
      let l = Ve();
      ke(l[r]) ? i.value[r] = l[r] : Array.isArray(i.value[r]) ? i.value[r] = [] : i.value[r] = null;
    }
    function Ve() {
      let r = {};
      if (C.value)
        for (let l of d.value)
          _e(l, r);
      else
        _e(d.value, r);
      return r;
    }
    function _e(r, l) {
      for (let T of r)
        T.tempKey && ke(T.defaultVal) && P(T, l), T.key && ke(T.defaultVal) && (l[T.key] = T.defaultVal), T.key2 && ke(T.defaultVal2) && (l[T.key2] = T.defaultVal2);
    }
    function W(r) {
      if (r.show) {
        if (R(r.show) === "Object")
          return ie(r, ce(r.show));
        if (Array.isArray(r.show))
          if (r.showOr) {
            for (let l of r.show)
              if (ce(l) === !0)
                return ie(r, !0);
            return ie(r, !1);
          } else {
            for (let l of r.show)
              if (ce(l) === !1)
                return ie(r, !1);
            return ie(r, !0);
          }
        else if (R(r.show) === "Function")
          return ie(r, r.show(n.value));
      } else
        r.showing || (r.showing = !0);
      return !0;
    }
    function ce(r) {
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
      return !r.showing && l && r.key ? (r.showing = l, r.defaultVal !== void 0 && (r.tempKey ? (i.value[r.tempKey] === null || i.value[r.tempKey] === void 0 || (R(i.value[r.tempKey]) === "Object" || Array.isArray(i.value[r.tempKey])) && Ce(i.value[r.tempKey])) && P(r, i.value) : (n.value[r.key] === null || n.value[r.key] === void 0) && (n.value[r.key] = r.defaultVal), r.key2 && r.deafultVal2 !== void 0 && (n.value[r.key2] === null || n.value[r.key2] === void 0) && r.type !== "inputMap" && (n.value[r.key2] = r.defaultVal2)), r.tempKey && pe(i.value[r.tempKey], r)) : r.showing = l, l;
    }
    function P(r, l) {
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
          se(l);
      else
        se(r);
      d.value = r;
    }
    function se(r) {
      for (let l of r)
        switch (l.type) {
          case "selectInput":
            const T = "selectInput" + Math.floor(Math.random() * 1e8);
            l.tempKey = T, i.value[T] = {
              key: l.key || null,
              val: l.defaultVal || null
            }, h.push(
              ye(
                () => i.value[T],
                (E) => {
                  pe(E, l);
                },
                { immediate: !0 }
              )
            );
            break;
          case "inputMap":
            const _ = "inputMap" + Math.floor(Math.random() * 1e8);
            l.key && (l.tempKey = _, l.key3 ? i.value[_] = l.defaultVal !== void 0 && l.defaultVal2 !== void 0 ? {
              lng: l.defaultVal,
              lat: l.defaultVal2,
              name: l.defaultVal3 || ""
            } : {
              lng: null,
              lat: null,
              name: null
            } : i.value[_] = l.defaultVal !== void 0 && l.defaultVal2 !== void 0 ? {
              lng: l.defaultVal,
              lat: l.defaultVal2
            } : {
              lng: null,
              lat: null
            }, h.push(
              ye(
                () => i.value[_],
                (E) => {
                  pe(E, l);
                },
                { immediate: !0 }
              )
            ));
            break;
          case "input":
          case "inputNumber":
          case "textarea":
            const oe = "inputT" + Math.floor(Math.random() * 1e8);
            l.key && (l.tempKey = oe, i.value[oe] = l.defaultVal !== void 0 ? l.defaultVal : null, h.push(
              ye(
                () => i.value[oe],
                (E) => {
                  pe(E, l);
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
                  let E = !0;
                  for (let X of l.changeOption)
                    if (!X.valKey || !X.key) {
                      E = !1;
                      break;
                    }
                  E ? h.push(
                    ye(
                      () => {
                        let X = "";
                        if (Array.isArray(l.changeOption))
                          for (let Be of l.changeOption) {
                            let Ue = n.value[Be.valKey];
                            if (Ue || Ue === 0 || Ue === !1)
                              X += "&" + Be.key + "=" + Ue;
                            else if (!Be.notRequired)
                              return !1;
                          }
                        return X;
                      },
                      (X) => {
                        let Be = ne(i.value[l.tempKey]);
                        if (i.value[l.tempKey] = null, X && l.optionUrl) {
                          let Ue = l.optionUrl.indexOf("?") !== -1 ? l.optionUrl : l.optionUrl + "?";
                          Re((Ue + X).replace(/\?&/, "?"), l, Be);
                        } else
                          l.options = [], l.localOption && (l.options = [...l.localOption]), ke(Be) && K(Be, l);
                      },
                      {
                        immediate: !0
                      }
                    )
                  ) : (l.options = [], l.localOption && (l.options = [...l.localOption]));
                } else
                  typeof l.changeOption == "object" ? l.changeOption.valKey && l.changeOption.key && h.push(
                    ye(
                      () => typeof l.changeOption == "object" && !Array.isArray(l.changeOption) ? n.value[l.changeOption.valKey] : !1,
                      (E) => {
                        let X = ne(i.value[l.tempKey]);
                        if (i.value[l.tempKey] = null, (E || E === 0 || E === !1) && l.optionUrl && typeof l.changeOption == "object" && !Array.isArray(l.changeOption)) {
                          let Be = l.optionUrl.indexOf("?") !== -1 ? l.optionUrl : l.optionUrl + "?";
                          Re((Be + "&" + l.changeOption.key + "=" + E).replace(/\?&/, "?"), l, X);
                        } else
                          l.options = [], l.localOption && (l.options = [...l.localOption]), ke(X) && K(X, l);
                      },
                      { immediate: !0 }
                    )
                  ) : R(l.changeOption) === "Boolean" && h.push(
                    ye(
                      () => je(t.formData, (E) => E.key === l.key).optionUrl,
                      (E) => {
                        let X = ne(i.value[l.tempKey]);
                        i.value[l.tempKey] = null, E ? Re(E, l, X) : (l.options = [], l.localOption && (l.options = [...l.localOption]), ke(X) && K(X, l));
                      },
                      {
                        immediate: !0
                      }
                    )
                  );
              else
                l.optionUrl && Re(l.optionUrl, l);
            else
              R(l.borrowOption) === "String" && (l.options = je(d.value, (E) => E.key === l.borrowOption).options);
            const te = "opEle" + Math.floor(Math.random() * 1e8);
            l.key && (l.tempKey = te, l.type === "select" && l.multiple || l.type === "checkboxGroup" ? i.value[te] = l.defaultVal !== void 0 ? l.defaultVal : [] : l.booleanVal ? i.value[te] = l.defaultVal !== void 0 ? l.defaultVal ? 1 : 0 : null : i.value[te] = l.defaultVal !== void 0 ? l.defaultVal : null, h.push(
              ye(
                () => i.value[te],
                (E) => {
                  pe(E, l);
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
            l.tempKey = Z, l.dateType === "date" || l.dateType === "datetime" || l.dateType === "time" || l.dateType === "year" || l.dateType === "month" ? i.value[Z] = l.defaultVal || null : (l.dateType === "daterange" || l.dateType === "datetimerange" || l.dateType === "timerange" || l.type === "monthRange") && (i.value[Z] = l.defaultVal && l.defaultVal2 && [l.defaultVal, l.defaultVal2] || []), h.push(
              ye(
                () => i.value[Z],
                (E) => {
                  pe(E, l);
                }
              )
            );
            break;
        }
    }
    function Re(r, l, T) {
      Ke.get(r).then((_) => {
        var te;
        if (!l.options)
          return;
        let oe = ((te = _ == null ? void 0 : _.data) == null ? void 0 : te.records) || (_ == null ? void 0 : _.data) || _ || [];
        Array.isArray(oe) ? (l.optionFilter && R(l.optionFilter) === "Function" && (oe = l.optionFilter(oe)), l.optionLabel && l.optionVal ? (l.options.length = 0, l.options.push(
          ...oe.map((Z) => {
            let E;
            if (Array.isArray(l.optionLabel)) {
              let X = "";
              l.optionLabel.forEach((Be, Ue) => {
                let _l = String(Z[Be]);
                Ue === 1 ? X += "（" + _l : Ue > 1 ? X += "、" + _l : X += _l;
              }), E = {
                label: X + "）",
                val: l.optionVal && Z[l.optionVal]
              };
            } else
              E = {
                label: l.optionLabel && Z[l.optionLabel],
                val: l.optionVal && Z[l.optionVal]
              };
            if (l.collectLabel)
              if (Array.isArray(l.collectLabel))
                for (let X of l.collectLabel)
                  X.valKey && X.valKey !== "label" && (E[X.valKey] = Z[X.valKey]);
              else
                l.collectLabel.valKey && l.collectLabel.valKey !== "label" && (E[l.collectLabel.valKey] = Z[l.collectLabel.valKey]);
            if (E.val !== null && E.val !== void 0)
              return E;
          })
        )) : (l.options.length = 0, l.options.push(...oe))) : l.options.length = 0, l.localOption && l.options.unshift(...l.localOption), ke(T) && K(T, l), l.disableOptionByOthers && (R(l.disableOptionByOthers) === "String" ? h.push(
          ye(
            () => n.value[l.disableOptionByOthers],
            (Z) => {
              if (de(l.tempKey), !!l.options) {
                for (let E of l.options)
                  E.disabled && (E.disabled = !1);
                if (Z || Z === 0 || Z === !1)
                  for (let E of l.options)
                    E.val === Z && (E.disabled = !0);
              }
            },
            {
              immediate: !0
            }
          )
        ) : Array.isArray(l.disableOptionByOthers) && h.push(
          ye(
            () => l.disableOptionByOthers.filter((Z) => Z).map((Z) => n.value[Z]),
            (Z) => {
              if (de(l.tempKey), !!l.options) {
                for (let E of l.options)
                  E.disabled && (E.disabled = !1);
                if (Z) {
                  for (let E of l.options)
                    for (let X = 0; X < Z.length; X++)
                      if (E.val === Z[X]) {
                        E.disabled = !0, Z.splice(X, 1);
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
    function K(r, l) {
      Array.isArray(l.options) && ft(l.options, { val: r }) !== -1 && (i.value[l.tempKey] = r);
    }
    function $() {
      if (n.value = {}, C.value)
        for (let r of t.formData)
          he(r);
      else
        he(t.formData);
    }
    function he(r) {
      for (let l of r)
        l.key && (l.type === "checkboxGroup" || l.type === "select" && l.multiple ? n.value[l.key] = l.defaultVal !== void 0 && l.show === void 0 ? l.defaultVal : [] : l.type === "editor" || l.type === "editorPro" ? n.value[l.key] = l.defaultVal !== void 0 && l.show === void 0 ? l.defaultVal : "" : (n.value[l.key] = l.defaultVal !== void 0 && l.show === void 0 ? l.defaultVal : null, l.key2 && (n.value[l.key2] = l.defaultVal2 !== void 0 && l.show === void 0 ? l.defaultVal2 : null)));
    }
    function pe(r, l) {
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
              const oe = Ae(l, r);
              if (Array.isArray(l.collectLabel)) {
                for (let te of l.collectLabel)
                  if (te.key && te.valKey) {
                    const Z = le(te.key);
                    let E = null;
                    Array.isArray(oe) ? (E = oe.map((Be) => Be[te.valKey]), n.value[te.key] = E, Z && (i.value[Z] = E)) : (oe && ke(oe[te.valKey]) && (E = oe[te.valKey]), n.value[te.key] = E, Z && (i.value[Z] = E));
                    let X = je(d.value, (Be) => Be.key === te.key);
                    X && X.tempKey && (i.value[X.tempKey] = n.value[te.key]);
                  }
              } else if (typeof l.collectLabel == "object" && l.collectLabel.key && l.collectLabel.valKey) {
                const te = le(l.collectLabel.key);
                let Z = null;
                Array.isArray(oe) ? (Z = oe.map(
                  (X) => l.collectLabel && !Array.isArray(l.collectLabel) && X[l.collectLabel.valKey]
                ), n.value[l.collectLabel.key] = Z, te && (i.value[te] = Z)) : (oe && ke(oe[l.collectLabel.valKey]) && (Z = oe[l.collectLabel.valKey]), n.value[l.collectLabel.key] = Z, te && (i.value[te] = Z));
                let E = je(
                  d.value,
                  (X) => l.collectLabel && !Array.isArray(l.collectLabel) && X.key === l.collectLabel.key || !1
                );
                E && E.tempKey && (i.value[E.tempKey] = n.value[l.collectLabel.key]);
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
              month: "MM"
            };
            if (T === "date" || T === "datetime" || T === "time" || T === "year" || T === "month")
              r ? (T === "time" ? n.value[l.key] = r : n.value[l.key] = el(r).format(typeof l.format == "string" ? l.format : _[T]), T === "date" && l.addTime && (n.value[l.key] += " 00:00:00")) : n.value[l.key] = null;
            else if (l.type === "monthRange" || T === "daterange" || T === "datetimerange" || T === "timerange") {
              if (!l.key2)
                return;
              r && r[0] && r[1] ? (T === "timerange" ? (n.value[l.key] = r[0], n.value[l.key2] = r[1]) : l.type === "monthRange" ? (n.value[l.key] = typeof l.format == "string" && el(r[0]).format(l.format) || r[0], n.value[l.key2] = typeof l.format == "string" && l.format && el(r[1]).format(l.format) || r[1]) : (n.value[l.key] = el(r[0]).format(l.format || T && _[T]), n.value[l.key2] = el(r[1]).format(l.format || T && _[T])), T === "daterange" && l.addTime && (n.value[l.key] += " 00:00:00", n.value[l.key2] += " 23:59:59")) : (n.value[l.key] = null, n.value[l.key2] = null);
            }
            break;
        }
    }
    function Ae(r, l) {
      if (r.options)
        if (r.multiple || r.type === "checkboxGroup") {
          if (l) {
            let T = [];
            for (let _ of r.options)
              l.indexOf(_.val) !== -1 && T.push(_);
            return T;
          }
          return !1;
        } else {
          if (l || l === 0 || l === !1) {
            for (let T of r.options)
              if (T.val === l)
                return T;
          }
          return !1;
        }
    }
    function le(r) {
      if (C.value) {
        for (let l of d.value) {
          const T = Pe(l, r);
          if (T)
            return T;
        }
        return !1;
      }
      return Pe(d.value, r);
    }
    function Pe(r, l) {
      for (let T of r)
        if (T.key === l)
          return T.tempKey;
      return !1;
    }
    function ol(r, l) {
      let T = {};
      for (let _ in n.value)
        n.value.hasOwnProperty(_) && r[_] !== void 0 && (T[_] = r[_], delete r[_]);
      Nl(T, l);
      for (let _ in r)
        r.hasOwnProperty(_) && (f.indexOf(_) < 0 && f.push(_), n.value[_] = r[_]);
    }
    function Et(r) {
      let l = ne(r);
      if (C.value) {
        let T = [];
        for (let _ of t.formData)
          T.push(...Dl(_, l));
        return T;
      }
      return Dl(t.formData, l);
    }
    function Dl(r, l) {
      return r.filter((T) => {
        for (let _ of Object.keys(l))
          if (T.key === _ && B.value.indexOf(_) > -1 && !(l[_] === null || (Array.isArray(l[_]) || R(l[_]) === "Object") && Ce(l[_])))
            return delete l[_], !0;
        return !1;
      }).map((T) => T.key);
    }
    function Nl(r, l = !1) {
      let T = ne(r);
      Gt(r, l);
      for (let _ in n.value)
        if (n.value.hasOwnProperty(_) && r[_] !== void 0 && r[_] !== "--") {
          if (Array.isArray(r[_]))
            r[_] = r[_].filter((oe) => oe !== "--");
          else if (R(r[_]) === "Object")
            for (let oe in r[_])
              r[_].hasOwnProperty(oe) && r[_][oe] === "--" && (r[_][oe] = null);
          n.value[_] = r[_];
        } else
          l || (n.value[_] = Array.isArray(n.value[_]) ? [] : null);
      Oe(function() {
        jt(Et(T));
      });
    }
    function Gt(r, l = !1) {
      if (C.value)
        for (let T of d.value)
          El(T, r, l);
      else
        El(d.value, r, l);
    }
    function El(r, l, T = !1) {
      for (let _ of r)
        if (_.key && (T && (l[_.key] !== void 0 || _.key2 && l[_.key2] !== void 0) || !T) && _.tempKey)
          switch (_.type) {
            case "inputMap":
              if (!_.key2)
                continue;
              R(l[_.key]) === "Number" && R(l[_.key2] === "Number") ? _.key3 ? i.value[_.tempKey] = {
                lng: l[_.key],
                lat: l[_.key2],
                name: l[_.key3]
              } : i.value[_.tempKey] = {
                lng: l[_.key],
                lat: l[_.key2]
              } : _.key3 ? i.value[_.tempKey] = {
                lng: null,
                lat: null,
                name: null
              } : i.value[_.tempKey] = {
                lng: null,
                lat: null
              };
              break;
            case "input":
            case "inputNumber":
            case "textarea":
              l[_.key] && l[_.key] !== "--" || l[_.key] === 0 ? i.value[_.tempKey] = l[_.key] : i.value[_.tempKey] = null;
              break;
            case "select":
            case "radioGroup":
            case "checkboxGroup":
              l[_.key] && l[_.key] !== "--" || l[_.key] === 0 || l[_.key] === !1 ? _.multiple || _.type === "checkboxGroup" ? i.value[_.tempKey] = [...l[_.key]] : _.booleanVal ? i.value[_.tempKey] = l[_.key] ? 1 : 0 : i.value[_.tempKey] = l[_.key] : _.multiple || _.type === "checkboxGroup" ? i.value[_.tempKey] = [] : i.value[_.tempKey] = null;
              break;
            case "date":
            case "time":
              if (_.dateType === "date" || _.dateType === "datetime" || _.dateType === "year" || _.dateType === "month" || _.dateType === "time")
                i.value[_.tempKey] = l[_.key] && l[_.key] !== "--" ? l[_.key] : null;
              else if (_.dateType === "daterange" || _.dateType === "datetimerange" || _.dateType === "timerange") {
                if (!_.key2)
                  continue;
                i.value[_.tempKey] = l[_.key] && l[_.key] !== "--" && l[_.key2] && l[_.key2] !== "--" && [l[_.key], l[_.key2]] || [];
              }
              break;
          }
    }
    function zt(r) {
      if (Array.isArray(r))
        for (let l of r)
          Gl(l);
      else
        R(r) === "Object" && Gl(r);
    }
    function Gl(r) {
      const { index: l, indexB: T, key: _, val: oe } = r;
      if (typeof l == "number")
        if (Array.isArray(d.value[l])) {
          if (typeof T == "number")
            if (_ && r.hasOwnProperty("val"))
              d.value[l][T][_] = oe;
            else
              for (let te of Object.keys(r))
                te !== "index" && _ !== "indexB" && (d.value[l][T][te] = r[te]);
        } else if (_ && r.hasOwnProperty("val"))
          d.value[l][_] = oe;
        else
          for (let te of Object.keys(r))
            te !== "index" && (d.value[l][te] = r[te]);
    }
    function zl({ label: r, root: l }) {
      l.key2 && (n.value[l.key2] = r), He({
        e: r,
        root: l
      });
    }
    function Hl(r) {
      r.beforeKey && oa(c, (l) => l === r.beforeKey), r.key && (c.indexOf(r.key) === -1 && c.push(r.key), He({
        e: null,
        root: r
      }));
    }
    function Wl({ name: r, root: l }) {
      l.key2 && (n.value[l.key2] = r), He({
        e: r,
        root: l
      });
    }
    function jl({ e: r, root: l }) {
      He({
        e: r,
        root: l
      }), Oe(function() {
        var T, _;
        (_ = (T = u.value) == null ? void 0 : T.validateField) == null || _.call(T, l.key);
      });
    }
    function He({ e: r, root: l }) {
      Le(() => {
        let T = {
          event: r
        };
        if (l.key && (T[l.key] = n.value[l.key]), l.key2 && (T[l.key2] = n.value[l.key2]), Array.isArray(l.collectLabel))
          for (let _ of l.collectLabel)
            T[_.key] = n.value[_.key];
        else
          l.collectLabel && l.collectLabel.key && (T[l.collectLabel.key] = n.value[l.collectLabel.key]);
        e("on-item-change", T);
      }, 500);
    }
    function Jl() {
      let r = {};
      for (let l of A.value)
        r[l] = n.value[l];
      return t.trim && (r = yl(r)), r;
    }
    function Ht() {
      var r, l;
      (l = (r = u.value) == null ? void 0 : r.validate) == null || l.call(r);
    }
    function Wt(r) {
      Le(() => {
        var l, T;
        (T = (l = u.value) == null ? void 0 : l.validateField) == null || T.call(l, r, () => {
        });
      }, 10);
    }
    function jt(r) {
      Le(() => {
        var l, T;
        if (Array.isArray(r))
          for (let _ of r)
            (T = (l = u.value) == null ? void 0 : l.validateField) == null || T.call(l, _, () => {
            });
      }, 10);
    }
    function Jt(r) {
      r !== void 0 && (w.value = !!r);
    }
    function wl() {
      var r, l;
      t.disabled || (l = (r = u.value) == null ? void 0 : r.validate) == null || l.call(r, (T) => {
        g || (g = !0, T && (w.value = !0, e("on-submit", Jl())), Le(() => {
          g = !1;
        }, 2e3));
      });
    }
    return $e(() => {
      $(), ae();
    }), o({
      resetForm: y,
      refreshFormDom: H,
      reRenderForm: F,
      setItemToValGroup: ol,
      updateValGroup: Nl,
      updateFormDataT: zt,
      validate: Ht,
      reValidate: Wt,
      changeLoading: Jt,
      getValGroup: Jl,
      submit: wl
    }), (r, l) => {
      const T = j("FormItem"), _ = j("Button"), oe = j("Form");
      return S(), Y(oe, {
        ref_key: "formGroupXRef",
        ref: u,
        model: p(n),
        rules: p(V),
        "label-width": t.labelWidth,
        inline: t.inline,
        "show-message": t.showMessage,
        class: "formXN",
        key: p(b)
      }, {
        default: J(() => [
          G(T, { style: { display: "none" } }, {
            default: J(() => [
              Xn
            ]),
            _: 1
          }),
          p(C) ? (S(!0), D(ve, { key: 0 }, be(p(d), (te, Z) => (S(), D("div", {
            class: xe([r.teamClass, "formTeamBox" + Z]),
            key: "formTeamBox" + Z
          }, [
            (S(!0), D(ve, null, be(te, (E, X) => (S(), D(ve, {
              key: "formItem" + X
            }, [
              W(E) ? (S(), Y(nt, {
                key: 0,
                item: E,
                style: ee(p(L)),
                "item-style": p(k),
                "val-group": p(n),
                "temp-keys": p(i),
                inline: t.inline,
                disabled: t.disabled,
                "label-width": t.labelWidth,
                "item-width": t.itemWidth,
                "mgr-url": p(s),
                "upload-url": p(v),
                onItemChange: He,
                onReValidate: jl,
                onClearTempKeyItem: de,
                onSelectInputChange: Hl,
                onAlNameChange: Wl,
                onAsyncLabelChange: zl
              }, Xe({ _: 2 }, [
                be(O(te), (Be) => ({
                  name: Be.slotName,
                  fn: J((Ue) => [
                    Te(r.$slots, Be.slotName, {
                      valGroup: Ue.valGroup
                    })
                  ])
                }))
              ]), 1032, ["item", "style", "item-style", "val-group", "temp-keys", "inline", "disabled", "label-width", "item-width", "mgr-url", "upload-url"])) : ge("", !0)
            ], 64))), 128))
          ], 2))), 128)) : ge("", !0),
          (S(!0), D(ve, null, be(p(d), (te, Z) => (S(), D(ve, {
            key: "formItem" + Z
          }, [
            !p(C) && W(te) ? (S(), Y(nt, {
              key: 0,
              item: te,
              style: ee(p(L)),
              "item-style": p(k),
              "val-group": p(n),
              "temp-keys": p(i),
              inline: t.inline,
              disabled: t.disabled,
              "label-width": t.labelWidth,
              "item-width": t.itemWidth,
              "mgr-url": p(s),
              "upload-url": p(v),
              onItemChange: He,
              onReValidate: jl,
              onClearTempKeyItem: de,
              onSelectInputChange: Hl,
              onAlNameChange: Wl,
              onAsyncLabelChange: zl
            }, Xe({ _: 2 }, [
              be(O(r.formData), (E) => ({
                name: E.slotName,
                fn: J((X) => [
                  Te(r.$slots, E.slotName, {
                    valGroup: X.valGroup
                  })
                ])
              }))
            ]), 1032, ["item", "style", "item-style", "val-group", "temp-keys", "inline", "disabled", "label-width", "item-width", "mgr-url", "upload-url"])) : ge("", !0)
          ], 64))), 128)),
          t.showLongOkBt ? (S(), Y(T, { key: 1 }, {
            default: J(() => [
              G(_, {
                onClick: wl,
                style: ee(p(k)),
                type: "primary",
                loading: t.btnLoading && p(w),
                disabled: t.disabled
              }, {
                default: J(() => [
                  me(N(t.longOkBtTxt || p(x)("r.confirm")), 1)
                ]),
                _: 1
              }, 8, ["style", "loading", "disabled"])
            ]),
            _: 1
          })) : ge("", !0),
          I("div", Zn, [
            t.showInlineOkBt ? (S(), Y(_, {
              key: 0,
              type: "primary",
              class: xe({ inlineFormBtXN: t.inline, okBtnXN: !0 }),
              onClick: wl,
              loading: t.btnLoading && p(w),
              disabled: t.disabled
            }, {
              default: J(() => [
                me(N(t.inlineOkBtTxt || p(x)("r.confirm")), 1)
              ]),
              _: 1
            }, 8, ["class", "loading", "disabled"])) : ge("", !0),
            t.showInlineClearBt ? (S(), Y(_, {
              key: 1,
              onClick: y,
              class: xe({ inlineFormBtXN: t.inline }),
              type: "dashed"
            }, {
              default: J(() => [
                me(N(t.inlineClearBtTxt || p(x)("r.clear")), 1)
              ]),
              _: 1
            }, 8, ["class"])) : ge("", !0)
          ])
        ]),
        _: 3
      }, 8, ["model", "rules", "label-width", "inline", "show-message"]);
    };
  }
}), Qn = /* @__PURE__ */ ue({
  __name: "FormGroup",
  props: {
    formData: { default: () => [] },
    with: { default: "100%" },
    labelWidth: { default: () => bl().formGroupLabelWidth },
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
    const t = a, u = z({ width: t.with }), n = z(!1), d = z(), i = U(() => {
      if (Array.isArray(t.formData))
        if (Array.isArray(t.formData[0])) {
          let B = [];
          for (let O of t.formData)
            B = B.concat(O.filter((m) => m.type === "custom" || m.type === "input" && m.slotName && m.slotPosition));
          return B;
        } else
          return t.formData.filter((B) => B.type === "custom" || B.type === "input" && B.slotName && B.slotPosition);
      return [];
    });
    function h() {
      return new Promise((B) => {
        var O, m;
        (m = (O = d.value).resetForm) == null || m.call(O).then((M) => {
          B(M);
        });
      });
    }
    function s() {
      return new Promise((B) => {
        var O, m;
        (m = (O = d.value).refreshFormDom) == null || m.call(O).then((M) => {
          B(M);
        });
      });
    }
    function c() {
      return new Promise((B) => {
        var O, m;
        (m = (O = d.value).reRenderForm) == null || m.call(O).then((M) => {
          B(M);
        });
      });
    }
    function f(B, O) {
      var m, M;
      (M = (m = d.value).setItemToValGroup) == null || M.call(m, B, O);
    }
    function w(B, O) {
      var m, M;
      (M = (m = d.value).updateValGroup) == null || M.call(m, B, O);
    }
    function b(B) {
      var O, m;
      (m = (O = d.value).updateFormDataT) == null || m.call(O, B);
    }
    function v() {
      var B, O;
      (O = (B = d.value).validate) == null || O.call(B);
    }
    function g(B) {
      var O, m;
      (m = (O = d.value).reValidate) == null || m.call(O, B);
    }
    function C(B) {
      var O, m;
      B !== void 0 && (n.value = !!B, (m = (O = d.value).changeLoading) == null || m.call(O, n.value));
    }
    function L() {
      var B, O;
      return (O = (B = d.value).getValGroup) == null ? void 0 : O.call(B);
    }
    function k() {
      n.value = !0;
    }
    function V() {
      var B, O;
      (O = (B = d.value).submit) == null || O.call(B);
    }
    function A() {
      e("on-cancel"), Le(() => {
        var B, O;
        n.value = !1, (O = (B = d.value).changeLoading) == null || O.call(B, !1);
      }, 1e3);
    }
    return o({
      resetForm: h,
      refreshFormDom: s,
      reRenderForm: c,
      setItemToValGroup: f,
      updateValGroup: w,
      updateFormDataT: b,
      validate: v,
      reValidate: g,
      changeLoading: C,
      getValGroup: L,
      submit: V,
      close: A
    }), (B, O) => {
      const m = j("Button");
      return S(), D("div", {
        style: ee(p(u)),
        class: "formGroupBoxVM"
      }, [
        G(kl, Ze({
          ref_key: "formRRef",
          ref: d
        }, B.$attrs, {
          "form-data": t.formData,
          "label-width": t.labelWidth,
          "content-width": t.contentWidth,
          "item-width": t.itemWidth,
          btnLoading: t.btnLoading,
          onOnSubmit: k
        }), Xe({ _: 2 }, [
          be(p(i), (M) => ({
            name: M.slotName,
            fn: J(({ valGroup: y }) => [
              Te(B.$slots, M.slotName, { valGroup: y })
            ])
          }))
        ]), 1040, ["form-data", "label-width", "content-width", "item-width", "btnLoading"]),
        re(I("div", {
          class: "formFooterVM",
          style: ee({ marginLeft: t.labelWidth + "px" })
        }, [
          I("div", {
            style: ee({ width: t.contentWidth }),
            class: "btnBoxKAL"
          }, [
            t.showOkBt ? (S(), Y(m, {
              key: 0,
              onClick: V,
              class: "form-save-btn",
              loading: t.btnLoading && p(n)
            }, {
              default: J(() => [
                me(N(t.okBtTxt || p(x)("r.confirm")), 1)
              ]),
              _: 1
            }, 8, ["loading"])) : ge("", !0),
            t.showCancelBt ? (S(), Y(m, {
              key: 1,
              onClick: A,
              class: "form-cancel-btn"
            }, {
              default: J(() => [
                me(N(t.cancelBtTxt || p(x)("r.cancel")), 1)
              ]),
              _: 1
            })) : ge("", !0)
          ], 4)
        ], 4), [
          [fe, t.showOkBt || t.showCancelBt]
        ])
      ], 4);
    };
  }
}), Ul = /* @__PURE__ */ ue({
  __name: "SearchForm",
  props: {
    formData: { default: () => [] },
    labelWidth: { default: () => bl().searchFormLabelWidth },
    itemWidth: { default: 202 },
    showInlineOkBt: { type: Boolean, default: !0 },
    showInlineClearBt: { type: Boolean, default: !0 }
  },
  emits: ["on-search"],
  setup(a, { expose: o, emit: e }) {
    const t = a, u = z(), n = U(() => {
      if (Array.isArray(t.formData[0])) {
        let k = [];
        for (let V of t.formData)
          k = k.concat(V.filter((A) => A.type === "custom" || A.type === "input" && A.slotName && A.slotPosition));
        return k;
      }
      return t.formData.filter((k) => k.type === "custom" || k.type === "input" && k.slotName && k.slotPosition);
    });
    function d() {
      return new Promise((k) => {
        var V, A;
        (A = (V = u.value).resetForm) == null || A.call(V).then(() => {
          k();
        });
      });
    }
    function i() {
      return new Promise((k) => {
        var V, A;
        (A = (V = u.value).refreshFormDom) == null || A.call(V).then(() => {
          k();
        });
      });
    }
    function h() {
      return new Promise((k) => {
        var V, A;
        (A = (V = u.value).reRenderForm) == null || A.call(V).then(() => {
          k();
        });
      });
    }
    function s(k, V) {
      var A, B;
      (B = (A = u.value).setItemToValGroup) == null || B.call(A, k, V);
    }
    function c(k, V) {
      var A, B;
      (B = (A = u.value).updateValGroup) == null || B.call(A, k, V);
    }
    function f(k) {
      var V, A;
      (A = (V = u.value).updateFormDataT) == null || A.call(V, k);
    }
    function w() {
      var k, V;
      (V = (k = u.value).validate) == null || V.call(k);
    }
    function b(k) {
      var V, A;
      (A = (V = u.value).reValidate) == null || A.call(V, k);
    }
    function v(k) {
      var V, A;
      (A = (V = u.value).changeLoading) == null || A.call(V, k === void 0 ? !1 : k);
    }
    function g() {
      var k, V;
      return (V = (k = u.value).getValGroup) == null ? void 0 : V.call(k);
    }
    function C(k) {
      e("on-search", k);
    }
    function L() {
      var k, V;
      (V = (k = u.value).submit) == null || V.call(k);
    }
    return $e(() => {
      const k = u.value.$el;
      k != null && k.parentNode && k.parentNode.addEventListener("keyup", (V) => {
        V.keyCode === 13 && L();
      });
    }), o({
      resetForm: d,
      refreshFormDom: i,
      reRenderForm: h,
      setItemToValGroup: s,
      updateValGroup: c,
      updateFormDataT: f,
      validate: w,
      reValidate: b,
      changeLoading: v,
      getValGroup: g,
      submit: L
    }), (k, V) => (S(), Y(kl, Ze({
      ref_key: "formRRef",
      ref: u
    }, k.$attrs, {
      "form-data": t.formData,
      "label-width": t.labelWidth,
      "item-width": t.itemWidth,
      inline: "",
      "show-long-ok-bt": !1,
      "show-inline-ok-bt": t.showInlineOkBt,
      "inline-ok-bt-txt": p(x)("r.check"),
      "show-inline-clear-bt": t.showInlineClearBt,
      "show-message": !1,
      onOnSubmit: C
    }), Xe({ _: 2 }, [
      be(p(n), (A) => ({
        name: A.slotName,
        fn: J(({ valGroup: B }) => [
          Te(k.$slots, A.slotName, { valGroup: B })
        ])
      }))
    ]), 1040, ["form-data", "label-width", "item-width", "show-inline-ok-bt", "inline-ok-bt-txt", "show-inline-clear-bt"]));
  }
}), eo = /* @__PURE__ */ ue({
  __name: "FormModal",
  props: {
    title: {},
    formData: { default: () => [] },
    width: { default: 520 },
    labelWidth: { default: () => bl().formModalLabelWidth },
    okBtTxt: {},
    cancelBtTxt: {},
    hideCancelBt: { type: Boolean, default: !1 },
    hideFooter: { type: Boolean, default: !1 },
    btnLoading: { type: Boolean, default: !1 }
  },
  emits: ["on-close", "on-open"],
  setup(a, { expose: o, emit: e }) {
    const t = a, u = z(), n = z(!1), d = z(!1), i = U(() => {
      if (Array.isArray(t.formData[0])) {
        let m = [];
        for (let M of t.formData)
          m = m.concat(M.filter((y) => y.type === "custom" || y.type === "input" && y.slotName && y.slotPosition));
        return m;
      }
      return t.formData.filter((m) => m.type === "custom" || m.type === "input" && m.slotName && m.slotPosition);
    });
    function h() {
      return new Promise((m) => {
        var M, y;
        (y = (M = u.value).resetForm) == null || y.call(M).then(() => {
          m();
        });
      });
    }
    function s() {
      return new Promise((m) => {
        var M, y;
        (y = (M = u.value).refreshFormDom) == null || y.call(M).then(() => {
          m();
        });
      });
    }
    function c() {
      return new Promise((m) => {
        var M, y;
        (y = (M = u.value).reRenderForm) == null || y.call(M).then(() => {
          m();
        });
      });
    }
    function f(m, M) {
      var y, F;
      (F = (y = u.value).setItemToValGroup) == null || F.call(y, m, M);
    }
    function w(m, M) {
      var y, F;
      (F = (y = u.value).updateValGroup) == null || F.call(y, m, M);
    }
    function b(m) {
      var M, y;
      (y = (M = u.value).updateFormDataT) == null || y.call(M, m);
    }
    function v() {
      var m, M;
      (M = (m = u.value).validate) == null || M.call(m);
    }
    function g(m) {
      var M, y;
      (y = (M = u.value).reValidate) == null || y.call(M, m);
    }
    function C(m) {
      var M, y;
      m !== void 0 && (d.value = !!m, (y = (M = u.value).changeLoading) == null || y.call(M, d.value));
    }
    function L() {
      var m, M;
      return (M = (m = u.value).getValGroup) == null ? void 0 : M.call(m);
    }
    function k() {
      d.value = !0;
    }
    function V() {
      var m, M;
      t.hideCancelBt ? B() : (M = (m = u.value).submit) == null || M.call(m);
    }
    function A() {
      n.value = !0;
    }
    function B() {
      n.value = !1, Le(() => {
        var m, M;
        d.value = !1, (M = (m = u.value).changeLoading) == null || M.call(m, !1);
      }, 1e3);
    }
    function O(m) {
      e(m ? "on-open" : "on-close");
    }
    return o({
      resetForm: h,
      refreshFormDom: s,
      reRenderForm: c,
      setItemToValGroup: f,
      updateValGroup: w,
      updateFormDataT: b,
      validate: v,
      reValidate: g,
      changeLoading: C,
      getValGroup: L,
      submit: V,
      open: A,
      close: B
    }), (m, M) => {
      const y = j("Button"), F = j("Modal");
      return S(), Y(F, {
        class: xe(["formModal", { hideFooter: t.hideFooter }]),
        title: t.title || p(x)("r.title"),
        modelValue: p(n),
        "onUpdate:modelValue": M[0] || (M[0] = (H) => Me(n) ? n.value = H : null),
        "mask-closable": !1,
        "footer-hide": t.hideFooter,
        width: t.width,
        onOnVisibleChange: O
      }, {
        footer: J(() => [
          G(y, {
            onClick: V,
            class: "modal-save-btn",
            loading: t.btnLoading && p(d)
          }, {
            default: J(() => [
              me(N(t.okBtTxt || p(x)("r.confirm")), 1)
            ]),
            _: 1
          }, 8, ["loading"]),
          t.hideCancelBt ? ge("", !0) : (S(), Y(y, {
            key: 0,
            onClick: B,
            class: "modal-cancel-btn"
          }, {
            default: J(() => [
              me(N(t.cancelBtTxt || p(x)("r.cancel")), 1)
            ]),
            _: 1
          }))
        ]),
        default: J(() => [
          G(kl, Ze({
            ref_key: "formRRef",
            ref: u
          }, m.$attrs, {
            "form-data": t.formData,
            "label-width": t.labelWidth,
            btnLoading: t.btnLoading,
            onOnSubmit: k
          }), Xe({ _: 2 }, [
            be(p(i), (H) => ({
              name: H.slotName,
              fn: J(({ valGroup: q }) => [
                Te(m.$slots, H.slotName, { valGroup: q })
              ])
            }))
          ]), 1040, ["form-data", "label-width", "btnLoading"])
        ]),
        _: 3
      }, 8, ["title", "modelValue", "footer-hide", "class", "width"]);
    };
  }
}), lo = /* @__PURE__ */ ue({
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
    let d = [];
    const i = U(() => Array.isArray(e.collectVal) ? e.collectVal : typeof e.collectVal == "string" ? [e.collectVal] : []), h = U(() => Array.isArray(e.modelValue) ? e.modelValue : []);
    ye(
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
    ), ye(
      () => h.value,
      (v) => {
        let g, C = "s";
        if (Array.isArray(e.collectVal) ? (g = e.collectVal[0] || "", C = "a") : g = e.collectVal, !g || JSON.stringify(v) === JSON.stringify(d)) {
          d = [];
          return;
        }
        Je({
          group: u.value,
          condition: (L) => L.checked === !0,
          key: "checked",
          val: !1
        }), Je(C === "a" ? {
          group: u.value,
          condition: (L) => ft(v, [g, L[g]]) !== -1,
          key: "checked",
          val: !0
        } : {
          group: u.value,
          condition: (L) => v.indexOf(L[g]) !== -1,
          key: "checked",
          val: !0
        });
      }
    ), ye(
      () => e.disabled,
      (v) => {
        Je({
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
        let L = !1;
        i.value.length > 1 ? L = Al(h.value, (V) => V[i.value[0]] === C[i.value[0]]) !== void 0 : L = i.value[0] ? h.value.indexOf(C[i.value[0]]) !== -1 : !1;
        let k = {
          name: C[e.label],
          expand: !!(e.expandAll || C.expand),
          checked: L,
          disableCheckbox: e.disabled
        };
        for (let V of i.value)
          k[V] = C[V];
        g.push(k), C.children && C.children.length > 0 && (k.children = [], c(C.children, k.children));
      }
    }
    function c(v, g = []) {
      for (let C of v) {
        let L = !1;
        i.value.length > 1 ? L = Al(h.value, (V) => V[i.value[0]] === C[i.value[0]]) !== void 0 : L = i.value[0] ? h.value.indexOf(C[i.value[0]]) !== -1 : !1;
        let k = {
          name: C[e.label],
          expand: !!(e.expandAll || C.expand),
          checked: L,
          disableCheckbox: e.disabled
        };
        for (let V of i.value)
          k[V] = C[V];
        g.push(k), C.children && C.children.length > 0 && (k.children = [], s(C.children, k.children));
      }
    }
    function f(v, {
      data: g
    }) {
      let C = "", L = !0;
      if (g.children && g.children.length > 0) {
        for (let k of g.children)
          if (k.children !== void 0) {
            L = !1;
            break;
          }
        L && e.inlineLeaf && (C = "inlineChildXA");
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
          let L = C.parentElement, k = L == null ? void 0 : L.nextElementSibling;
          if (!k)
            return;
          if (k.tagName !== "BR") {
            let V = L == null ? void 0 : L.parentElement, A = document.createElement("br");
            V == null || V.insertBefore(A, k), k = A.nextElementSibling, (k == null ? void 0 : k.className.indexOf("inlineTreeNodeF")) === -1 && k.setAttribute("class", k.className + " inlineTreeNodeF");
          }
          for (; k != null && k.nextElementSibling; )
            k = k.nextElementSibling, k.className.indexOf("inlineTreeNodeF") === -1 && k.setAttribute("class", k.className + " inlineTreeNodeF");
        }
    }
    function b(v) {
      let g = [];
      if (e.leaf) {
        for (let C of v)
          if (!C.children)
            if (Array.isArray(e.collectVal)) {
              let L = {};
              for (let k of e.collectVal)
                L[k] = C[k];
              g.push(L);
            } else
              g.push(C[e.collectVal]);
      } else
        for (let C of v)
          if (Array.isArray(e.collectVal)) {
            let L = {};
            for (let k of e.collectVal)
              L[k] = C[k];
            g.push(L);
          } else
            g.push(C[e.collectVal]);
      d = g, o("update:modelValue", g), o("on-change", ne(g));
    }
    return (v, g) => {
      const C = j("Tree");
      return p(t) ? (S(), Y(C, {
        key: 0,
        id: n,
        class: "checkboxTreeGA",
        data: p(u),
        render: f,
        onOnCheckChange: b,
        onOnToggleExpand: w,
        "show-checkbox": ""
      }, null, 8, ["data"])) : ge("", !0);
    };
  }
}), to = { class: "transferBoxRL" }, ao = { class: "leftBoxLLL" }, no = { class: "fullHeight flexColumnBox" }, oo = { class: "notGrow" }, io = { class: "titleLLL" }, so = { class: "growFlexItem" }, ro = { class: "middleBoxLLL" }, uo = { class: "rightBoxLLL" }, co = { class: "fullHeight flexColumnBox" }, fo = { class: "notGrow" }, po = { class: "titleLLL" }, mo = { class: "growFlexItem" }, ho = /* @__PURE__ */ ue({
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
    let u = z({}), n = z({}), d = z([]), i = z([]), h = z(0), s = z(0);
    const c = U(() => ({ ...t.constSearchDataLeft, ...u.value })), f = U(() => ({ ...t.constSearchDataRight, ...n.value })), w = U(() => h.value < 1), b = U(() => d.value.length < 1), v = U(() => i.value.length < 1), g = U(() => s.value < 1), C = z(), L = z(), k = z(), V = z();
    function A() {
      C.value.resetForm(), L.value.resetForm(), Ce(u.value) || (u.value = {}), Ce(n.value) || (n.value = {}), k.value.clearSelect(), V.value.clearSelect();
    }
    function B() {
      k.value.search(), V.value.search();
    }
    function O(W) {
      d.value = W;
    }
    function m(W) {
      i.value = W;
    }
    function M(W) {
      var ce, ie, P, ae, se;
      h.value = ((ie = (ce = W == null ? void 0 : W.data) == null ? void 0 : ce.page) == null ? void 0 : ie.total) || ((ae = (P = W == null ? void 0 : W.data) == null ? void 0 : P.data) == null ? void 0 : ae.total) || ((se = W == null ? void 0 : W.data) == null ? void 0 : se.total) || (W == null ? void 0 : W.total) || 0, e("on-data-change-l", W);
    }
    function y(W) {
      var ce, ie, P, ae, se;
      s.value = ((ie = (ce = W == null ? void 0 : W.data) == null ? void 0 : ce.page) == null ? void 0 : ie.total) || ((ae = (P = W == null ? void 0 : W.data) == null ? void 0 : P.data) == null ? void 0 : ae.total) || ((se = W == null ? void 0 : W.data) == null ? void 0 : se.total) || (W == null ? void 0 : W.total) || 0, e("on-data-change-r", W);
    }
    function F(W) {
      u.value = W;
    }
    function H(W) {
      n.value = W;
    }
    function q() {
      t.addUrl && _e("add");
    }
    function Q() {
      t.deleteUrl && _e("delete");
    }
    function de() {
      t.addAllUrl && t.addUrl && _e("addAll");
    }
    function Ve() {
      t.deleteAllUrl && _e("deleteAll");
    }
    function _e(W) {
      let ce, ie, P = {}, ae = "";
      switch (W) {
        case "add":
          ce = t.addMethod, ie = t.addUrl, P = t.addParamsHandle(i.value), ae = x("r.add");
          break;
        case "delete":
          ce = t.deleteMethod, ie = t.deleteUrl, P = t.deleteParamsHandle(d.value), ae = x("r.remove");
          break;
        case "addAll":
          ce = t.addAllMethod, ie = t.addAllUrl, P = t.addAllParamsHandle(f.value), ae = x("r.addAll");
          break;
        case "deleteAll":
          ce = t.deleteAllMethod, ie = t.deleteAllUrl, P = t.deleteAllParamsHandle(c.value), ae = x("r.removeAll");
          break;
      }
      ie && ce && Ke[ce](ie, P, null, [], { spin: !0 }, !1).then((se) => {
        (se == null ? void 0 : se.code) === 0 ? (Ie(ae + x("r.success"), (se == null ? void 0 : se.message) || "", "success"), k.value && k.value.getTableData(), V.value && V.value.getTableData(), e("transferred")) : Ie(ae + x("r.failed"), (se == null ? void 0 : se.message) || "", "error");
      }).catch(() => {
        Ie(ae + x("r.error"), "", "error");
      });
    }
    return o({
      reset: A,
      search: B
    }), (W, ce) => {
      const ie = j("Icon"), P = j("Button");
      return S(), D("div", to, [
        I("div", ao, [
          I("div", no, [
            I("div", oo, [
              I("div", io, N(t.titleLeft || p(x)("r.added")), 1),
              G(Il, null, {
                default: J(() => [
                  G(Ul, {
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
            I("div", so, [
              G(Fl, {
                ref_key: "lTabRef",
                ref: k,
                columns: t.leftTableColumns,
                url: t.leftTableUrl,
                "search-data": p(c),
                onOnSelectionChange: O,
                onOnDataChange: M,
                "init-data": !!(p(Ce)(t.constSearchDataLeft) && t.leftTableUrl),
                "get-data-loading": "",
                selection: ""
              }, null, 8, ["columns", "url", "search-data", "init-data"])
            ])
          ])
        ]),
        I("div", ro, [
          G(P, {
            class: "middleBtLLL",
            size: "large",
            type: "default",
            onClick: Ve,
            disabled: p(w)
          }, {
            default: J(() => [
              me(N(p(x)("r.removeAll")) + " ", 1),
              G(ie, { type: "ios-arrow-forward" })
            ]),
            _: 1
          }, 8, ["disabled"]),
          G(P, {
            class: "middleBtLLL",
            size: "large",
            type: "default",
            onClick: Q,
            disabled: p(b)
          }, {
            default: J(() => [
              me(N(p(x)("r.remove")) + " ", 1),
              G(ie, { type: "ios-arrow-forward" })
            ]),
            _: 1
          }, 8, ["disabled"]),
          G(P, {
            class: "middleBtLLL",
            size: "large",
            type: "primary",
            onClick: q,
            disabled: p(v)
          }, {
            default: J(() => [
              G(ie, { type: "ios-arrow-back" }),
              me(" " + N(p(x)("r.add")), 1)
            ]),
            _: 1
          }, 8, ["disabled"]),
          G(P, {
            class: "middleBtLLL",
            size: "large",
            type: "primary",
            onClick: de,
            disabled: p(g)
          }, {
            default: J(() => [
              G(ie, { type: "ios-arrow-back" }),
              me(" " + N(p(x)("r.addAll")), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ]),
        I("div", uo, [
          I("div", co, [
            I("div", fo, [
              I("div", po, N(t.titleRight || p(x)("r.notAdded")), 1),
              G(Il, null, {
                default: J(() => [
                  G(Ul, {
                    ref_key: "rightFormRef",
                    ref: L,
                    "form-data": t.formDataRight,
                    "form-rules": t.formRulesRight,
                    "label-width": t.searchFormLabelWith,
                    onOnSearch: H
                  }, null, 8, ["form-data", "form-rules", "label-width"])
                ]),
                _: 1
              })
            ]),
            I("div", mo, [
              G(Fl, {
                ref_key: "rTabRef",
                ref: V,
                columns: t.rightTableColumns,
                url: t.rightTableUrl,
                "search-data": p(f),
                onOnSelectionChange: m,
                onOnDataChange: y,
                "init-data": !!(p(Ce)(t.constSearchDataRight) && t.rightTableUrl),
                "get-data-loading": "",
                selection: ""
              }, null, 8, ["columns", "url", "search-data", "init-data"])
            ])
          ])
        ])
      ]);
    };
  }
}), yo = { class: "boxLPA" }, vo = { class: "headerJ" }, go = { class: "firstT borderBoxAS" }, bo = { class: "secondT borderBoxAS" }, ko = { class: "firstCol borderBoxAS" }, wo = { class: "secondCol borderBoxAS" }, _o = /* @__PURE__ */ ue({
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
    const e = a, t = z([]), u = U(() => {
      let h = ne(e.data), s = ne(t.value);
      for (let c of h) {
        let f = 0;
        if (c.children && !Ce(c.children))
          for (let w of c.children) {
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
        f === 0 ? (c.checked = !1, c.indeterminate = !1) : c.children && f === c.children.length ? (c.checked = !0, c.indeterminate = !1) : (c.checked = !1, c.indeterminate = !0);
      }
      return h;
    });
    ye(
      () => e.modelValue,
      (h, s) => {
        tl(t.value, h) || tl(h, s) || (t.value = h);
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    function n(h, s) {
      if (h.children)
        for (let c of h.children)
          c.checked = s;
      d();
    }
    function d() {
      i(u.value, !0);
    }
    function i(h, s) {
      let c = [];
      for (let f of h) {
        if (!s && !e.leaf && f.checked && f.indeterminate === !1)
          if (Array.isArray(e.collectVal)) {
            let w = {};
            for (let b of e.collectVal)
              w[b] = f[b];
            c.push(w);
          } else
            R(e.collectVal) === "String" && c.push(f[e.collectVal]);
        if (f.children) {
          for (let w of f.children)
            if (w.checked)
              if (Array.isArray(e.collectVal)) {
                let b = {};
                for (let v of e.collectVal)
                  b[v] = w[v];
                c.push(b);
              } else
                R(e.collectVal) === "String" && c.push(w[e.collectVal]);
        }
      }
      s ? (t.value = c, e.leaf ? (o("update:modelValue", c), o("on-change", ne(c))) : Oe(function() {
        i(u.value);
      })) : (o("update:modelValue", c), o("on-change", ne(c)));
    }
    return (h, s) => {
      const c = j("Checkbox");
      return S(), D("div", yo, [
        I("div", vo, [
          I("div", go, N(h.firstTitle || p(x)("r.level.1")), 1),
          I("div", bo, N(h.secondTitle || p(x)("r.level.2")), 1)
        ]),
        (S(!0), D(ve, null, be(p(u), (f, w) => (S(), D("div", {
          class: "bodyJ",
          key: "checkboxJ" + w
        }, [
          I("div", ko, [
            G(c, {
              modelValue: f.checked,
              "onUpdate:modelValue": (b) => f.checked = b,
              indeterminate: f.indeterminate,
              onOnChange: (b) => n(f, b),
              disabled: h.disabled
            }, {
              default: J(() => [
                me(N(f[h.label]), 1)
              ]),
              _: 2
            }, 1032, ["modelValue", "onUpdate:modelValue", "indeterminate", "onOnChange", "disabled"])
          ]),
          I("div", wo, [
            (S(!0), D(ve, null, be(f.children, (b, v) => (S(), D("div", {
              class: "secItem",
              key: "secItem" + v
            }, [
              G(c, {
                modelValue: b.checked,
                "onUpdate:modelValue": (g) => b.checked = g,
                onOnChange: d,
                disabled: h.disabled
              }, {
                default: J(() => [
                  me(N(b[h.label]), 1)
                ]),
                _: 2
              }, 1032, ["modelValue", "onUpdate:modelValue", "disabled"])
            ]))), 128))
          ])
        ]))), 128))
      ]);
    };
  }
}), Vo = { class: "boxLPB" }, Co = { class: "headerF" }, Ao = { class: "firstT borderBoxKa" }, Bo = { class: "secondT borderBoxKa" }, xo = { class: "thirdT borderBoxKa" }, To = { class: "firstCol borderBoxKa" }, So = { class: "rightBoxAL" }, Lo = { class: "secondCol borderBoxKa" }, Io = { class: "thirdCol borderBoxKa" }, Oo = /* @__PURE__ */ ue({
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
    const e = a, t = z([]), u = U(() => {
      let s = ne(e.data), c = ne(t.value);
      for (let f of s) {
        let w = 0, b = 0;
        if (f.children && !Ce(f.children))
          for (let v of f.children) {
            let g = 0;
            if (v.children && !Ce(v.children))
              for (let C of v.children) {
                for (let L = 0, k = c.length; L < k; L++)
                  if (Array.isArray(e.collectVal)) {
                    let V = !0;
                    for (let A of e.collectVal)
                      if (c[L][A] !== C[A]) {
                        V = !1;
                        break;
                      }
                    if (V) {
                      C.checked = !0, g++, c.splice(L, 1);
                      break;
                    }
                  } else if (c[L] === C[e.collectVal]) {
                    C.checked = !0, g++, c.splice(L, 1);
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
    ye(
      () => e.modelValue,
      (s, c) => {
        tl(t.value, s) || tl(s, c) || (t.value = s);
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    function n(s, c) {
      if (s.children) {
        for (let f of s.children)
          if (f.checked = c, f.children)
            for (let w of f.children)
              w.checked = c;
      }
      i();
    }
    function d(s, c) {
      if (s.children)
        for (let f of s.children)
          f.checked = c;
      i();
    }
    function i() {
      h(u.value, !0);
    }
    function h(s, c) {
      let f = [];
      for (let w of s) {
        if (!c && !e.leaf && w.checked && w.indeterminate === !1)
          if (Array.isArray(e.collectVal)) {
            let b = {};
            for (let v of e.collectVal)
              b[v] = w[v];
            f.push(b);
          } else
            R(e.collectVal) === "String" && f.push(w[e.collectVal]);
        if (w.children)
          for (let b of w.children) {
            if (!c && !e.leaf && b.checked && b.indeterminate === !1)
              if (Array.isArray(e.collectVal)) {
                let v = {};
                for (let g of e.collectVal)
                  v[g] = b[g];
                f.push(v);
              } else
                R(e.collectVal) === "String" && f.push(b[e.collectVal]);
            if (b.children) {
              for (let v of b.children)
                if (v.checked)
                  if (Array.isArray(e.collectVal)) {
                    let g = {};
                    for (let C of e.collectVal)
                      g[C] = v[C];
                    f.push(g);
                  } else
                    R(e.collectVal) === "String" && f.push(v[e.collectVal]);
            }
          }
      }
      c ? (t.value = f, e.leaf ? (o("update:modelValue", f), o("on-change", ne(f))) : Oe(function() {
        h(u.value);
      })) : (o("update:modelValue", f), o("on-change", ne(f)));
    }
    return (s, c) => {
      const f = j("Checkbox");
      return S(), D("div", Vo, [
        I("div", Co, [
          I("div", Ao, N(s.firstTitle || p(x)("r.level.1")), 1),
          I("div", Bo, N(s.secondTitle || p(x)("r.level.2")), 1),
          I("div", xo, N(s.thirdTitle || p(x)("r.level.3")), 1)
        ]),
        (S(!0), D(ve, null, be(p(u), (w, b) => (S(), D("div", {
          class: "bodyF",
          key: "checkboxJ" + b
        }, [
          I("div", To, [
            G(f, {
              modelValue: w.checked,
              "onUpdate:modelValue": (v) => w.checked = v,
              indeterminate: w.indeterminate,
              onOnChange: (v) => n(w, v),
              disabled: s.disabled
            }, {
              default: J(() => [
                me(N(w[s.label]), 1)
              ]),
              _: 2
            }, 1032, ["modelValue", "onUpdate:modelValue", "indeterminate", "onOnChange", "disabled"])
          ]),
          I("div", So, [
            (S(!0), D(ve, null, be(w.children, (v, g) => (S(), D("div", {
              class: "rightBoxInner",
              key: "secItem" + g
            }, [
              I("div", Lo, [
                G(f, {
                  modelValue: v.checked,
                  "onUpdate:modelValue": (C) => v.checked = C,
                  indeterminate: v.indeterminate,
                  onOnChange: (C) => d(v, C),
                  disabled: s.disabled
                }, {
                  default: J(() => [
                    me(N(v[s.label]), 1)
                  ]),
                  _: 2
                }, 1032, ["modelValue", "onUpdate:modelValue", "indeterminate", "onOnChange", "disabled"])
              ]),
              I("div", Io, [
                (S(!0), D(ve, null, be(v.children, (C, L) => (S(), D("div", {
                  class: "thirdItem",
                  key: "thirdItem" + L
                }, [
                  G(f, {
                    modelValue: C.checked,
                    "onUpdate:modelValue": (k) => C.checked = k,
                    onOnChange: i,
                    disabled: s.disabled
                  }, {
                    default: J(() => [
                      me(N(C[s.label]), 1)
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
}), Mo = { class: "flexColumnBox wellCardR" }, Fo = { class: "panelHeader notGrow" }, Po = {
  class: "fl",
  style: { "font-weight": "bold" }
}, Uo = { class: "btsF" }, Ko = { class: "growFlexItem relativeBox" }, Ro = { class: "fullFlowContent" }, $o = /* @__PURE__ */ ue({
  __name: "WellCard",
  props: {
    title: {},
    width: { default: "100%" },
    height: { default: "100%" },
    inline: { type: Boolean, default: !1 }
  },
  setup(a) {
    const o = a, e = U(() => {
      let t = {
        width: o.width,
        height: o.height
      };
      o.inline && (t.display = "inline-block");
      for (let u in t)
        t.hasOwnProperty(u) && typeof t[u] == "number" && t[u] > 0 && (t[u] += "px");
      return t;
    });
    return (t, u) => (S(), D("div", {
      style: ee(p(e))
    }, [
      I("div", Mo, [
        I("div", Fo, [
          I("div", Po, N(o.title || p(x)("r.title")), 1),
          I("div", Uo, [
            Te(t.$slots, "bts")
          ])
        ]),
        I("div", Ko, [
          I("div", Ro, [
            Te(t.$slots, "default")
          ])
        ])
      ])
    ], 4));
  }
}), Do = /* @__PURE__ */ ue({
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
    const n = z(""), d = cl([]);
    let i = {}, h = !0, s = !1;
    const c = "scm" + Math.random(), f = U(() => n.value ? x("r.searchFor") + n.value : e.placeholder || x("r.pInput")), w = U({
      get() {
        return e.modelValue ?? "";
      },
      set(B) {
        if (o("update:modelValue", B ?? ""), e.collectLabel && B !== void 0) {
          let O = {};
          for (let m of d.value)
            if (m[e.optionsValKey] === B) {
              O = JSON.parse(JSON.stringify(m));
              break;
            }
          o("on-change", O);
        }
      }
    }), b = U(() => e.searchKey ? {
      ...e.searchData,
      current: t.value,
      [e.searchKey]: n.value
    } : {
      ...e.searchData,
      current: t.value
    });
    ye(
      () => e.getOptions,
      (B) => {
        B ? h && A() : C();
      },
      { immediate: !0 }
    ), ye(
      () => e.url,
      (B) => {
        B && (s = !0);
      }
    );
    const v = z();
    function g() {
      v.value.$el.querySelector('.ivu-select-input[type="text"]').addEventListener("keyup", k);
    }
    function C() {
      h || (w.value = "", h = !0, n.value = "", d.value = [], t.value = 1, u = 1, i = {}, s = !1);
    }
    function L(B) {
      for (let O of d.value)
        if (O.label === B)
          return !0;
      return !1;
    }
    const k = ct(function(B) {
      const O = B.target.value;
      L(O) || (ke(O) ? (s ? C() : (Ce(i) && (i.current = t.value, i.pages = u, i.options = ne(d.value)), ke(w.value) && (w.value = "")), n.value = String(O), d.value = [], t.value = 1, h = !0, A()) : s ? (C(), A()) : (w.value = "", n.value = "", i.current ? (t.value = i.current, u = i.pages, d.value = ne(i.options), i = {}) : A()));
    }, 600);
    function V() {
      s && C(), t.value < u ? (++t.value, Oe(function() {
        A();
      })) : Zl.warning({
        background: !0,
        content: x("r.noMore")
      });
    }
    function A() {
      return new Promise((B, O) => {
        if (e.getOptions) {
          if (e.searchWordsRequired && !ke(n.value)) {
            B(!1);
            return;
          }
          Ke.get(e.url, b.value).then((m) => {
            var F;
            h = !1;
            let M = [];
            (F = m == null ? void 0 : m.data) != null && F.records ? (M = m.data.records, u = m.data.pages) : m != null && m.data && R(m.data) === "Array" ? (M = m.data, u = m.pages) : m != null && m.data && R(m.data) === "Object" && (M = [m.data], u = 1), typeof e.optionFilter == "function" && R(e.optionFilter) === "Function" && (M = e.optionFilter(M)), Ce(M) || (M = M.map((H, q) => {
              let Q = x("r.optionLabel") + q;
              if (Array.isArray(e.optionsLabelKey)) {
                let de = [];
                for (let Ve = 1, _e = e.optionsLabelKey.length; Ve < _e; Ve++)
                  de.push(H[e.optionsLabelKey[Ve]]);
                Q = `${H[e.optionsLabelKey[0]]}(${String(de)})`;
              } else
                Rl(e.optionsLabelKey) && (Q = H[e.optionsLabelKey]);
              if (e.collectLabel) {
                let de = ne(H);
                return delete de.value, delete de.label, {
                  value: H[e.optionsValKey],
                  label: Q,
                  ...de
                };
              }
              return {
                value: H[e.optionsValKey],
                label: Q
              };
            })), d.value.push(...M);
            let y = {};
            d.value = d.value.filter((H) => y[H.value] ? !1 : (y[H.value] = !0, !0)), Oe(function() {
              o("update-option-finish");
            }), B(!0);
          }).catch(() => {
            Zl.error(x("r.getDataError")), O(x("r.getDataError"));
          });
        } else
          B(!1);
      });
    }
    return $e(g), (B, O) => {
      const m = j("Option"), M = j("Select"), y = Kl("loadmore");
      return re((S(), Y(M, Ze({
        modelValue: p(w),
        "onUpdate:modelValue": O[0] || (O[0] = (F) => Me(w) ? w.value = F : null),
        ref_key: "selectScrollSourceRef",
        ref: v,
        "transfer-class-name": c
      }, B.$attrs, {
        transfer: "",
        filterable: "",
        placeholder: p(f),
        disabled: B.disabled
      }), {
        default: J(() => [
          (S(!0), D(ve, null, be(p(d), (F, H) => (S(), Y(m, {
            key: "op" + H,
            value: F.value,
            label: F.label,
            disabled: F.disabled
          }, null, 8, ["value", "label", "disabled"]))), 128))
        ]),
        _: 1
      }, 16, ["modelValue", "placeholder", "disabled"])), [
        [y, V, c]
      ]);
    };
  }
}), ot = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AlCascaderMC: Pt,
  AsyncCascader: Ft,
  BtTablePage: Fl,
  CheckboxGroupThreeClass: Oo,
  CheckboxGroupTwoClass: _o,
  CheckboxTree: lo,
  EditorPro: Rt,
  FormGroup: Qn,
  FormModal: eo,
  FormR: kl,
  FullPop: Ba,
  HeaderBt: ht,
  Hello: Ta,
  IconTxtBtn: xl,
  InputMap: Mt,
  MonthRange: Kt,
  Page404: Ma,
  SearchForm: Ul,
  SelectInput: It,
  SelectScrollMore: Do,
  ShowHidePanel: Il,
  ShowHidePanelB: on,
  SideMenu: en,
  TableIconBtn: xt,
  TableSearch: rn,
  TableSetting: St,
  TransferBox: ho,
  UploadGroup: Ut,
  WellCard: $o
}, Symbol.toStringTag, { value: "Module" })), No = { class: "a4Line aL notPrint" }, Eo = { class: "a4Line aR notPrint" }, Go = { class: "a4Line bL notPrint" }, zo = { class: "a4Line bR notPrint" }, Ho = { class: "topsL notPrint" }, Wo = { class: "topsLTitle" }, jo = { class: "topsLBtn" }, Jo = { class: "topsLHelp" }, qo = /* @__PURE__ */ ue({
  __name: "PrintModal",
  setup(a) {
    const o = pt(), e = z(), t = z(!1), u = z(!1), n = z(!1), d = z(), i = "tablePrint_" + Date.now().toString(), h = z(""), s = z([]), c = z([]), f = () => {
      d.value && window.sessionStorage.removeItem("print_" + d.value), window.sessionStorage.removeItem(i), window.close();
    }, w = () => {
      n.value && (n.value = !1);
    }, b = () => {
      n.value = !1;
      let g = window.setTimeout(() => {
        window.clearTimeout(g), window.print();
      }, 100);
    }, v = () => {
      var g, C, L;
      if (d.value = (g = o == null ? void 0 : o.params) == null ? void 0 : g.isFrom, d.value) {
        let k = window.sessionStorage.getItem("print_" + d.value);
        if (k) {
          const V = JSON.parse(k);
          if (!V) {
            t.value = !0;
            return;
          }
          s.value = V.columns, c.value = V.data, e.value = V.title, h.value = ((C = V == null ? void 0 : V.config) == null ? void 0 : C.customClass) || "", u.value = ((L = V == null ? void 0 : V.config) == null ? void 0 : L.autoPrint) || !1, document.title = (e.value || x("r.print")) + "_" + (/* @__PURE__ */ new Date()).toLocaleString();
        } else
          t.value = !0;
      }
    };
    return $e(() => {
      if (u.value) {
        let g = window.setTimeout(() => {
          window.clearTimeout(g), b();
        }, 100);
      }
      document.addEventListener("click", w);
    }), v(), (g, C) => {
      const L = j("Table");
      return S(), D("div", {
        class: xe(["tablePrintModal", [p(h)]])
      }, [
        re(I("div", { class: "msgL notPrint" }, N(p(x)("r.printGuide.9")), 513), [
          [fe, p(t)]
        ]),
        re(I("div", No, [
          I("p", null, N(p(x)("r.printGuide.7")), 1),
          me(),
          I("p", null, N(p(x)("r.printGuide.5")), 1)
        ], 512), [
          [fe, !p(t)]
        ]),
        re(I("div", Eo, [
          I("p", null, N(p(x)("r.printGuide.7")), 1),
          me(),
          I("p", null, N(p(x)("r.printGuide.6")), 1)
        ], 512), [
          [fe, !p(t)]
        ]),
        re(I("div", Go, [
          I("p", null, N(p(x)("r.printGuide.8")), 1),
          me(),
          I("p", null, N(p(x)("r.printGuide.5")), 1)
        ], 512), [
          [fe, !p(t)]
        ]),
        re(I("div", zo, [
          I("p", null, N(p(x)("r.printGuide.8")), 1),
          me(),
          I("p", null, N(p(x)("r.printGuide.6")), 1)
        ], 512), [
          [fe, !p(t)]
        ]),
        re(I("div", Ho, [
          I("div", Wo, N(p(e) || p(x)("r.print")), 1),
          I("div", jo, [
            G(xl, {
              icon: "md-help-circle",
              name: p(x)("r.help"),
              onClick: C[0] || (C[0] = dt((k) => n.value = !p(n), ["stop"]))
            }, null, 8, ["name"]),
            G(xl, {
              icon: "md-print",
              name: p(x)("r.preview"),
              onClick: b
            }, null, 8, ["name"]),
            G(St, {
              modelValue: p(s),
              "onUpdate:modelValue": C[1] || (C[1] = (k) => Me(s) ? s.value = k : null),
              "s-key": i,
              storage: "sessionStorage"
            }, null, 8, ["modelValue"]),
            G(xt, {
              icon: "md-close",
              onClick: f,
              title: p(x)("r.close")
            }, null, 8, ["title"])
          ]),
          re(I("div", Jo, [
            I("p", null, N(p(x)("r.printGuide.1")), 1),
            I("p", null, N(p(x)("r.printGuide.2")), 1),
            I("p", null, N(p(x)("r.printGuide.3")), 1),
            I("p", null, N(p(x)("r.printGuide.4")), 1)
          ], 512), [
            [fe, p(n)]
          ])
        ], 512), [
          [fe, !p(t)]
        ]),
        re(G(L, {
          class: "tablePW",
          columns: p(s),
          data: p(c),
          border: ""
        }, null, 8, ["columns", "data"]), [
          [fe, !p(t)]
        ])
      ], 2);
    };
  }
});
let Ge = null;
function it() {
  document.documentElement.style.setProperty("overflow", "auto");
  const o = document.createElement("style");
  o.innerHTML = "body,div[data-v-app]{height:100% !important}", document.head.appendChild(o);
}
function Yo(a) {
  a != null && a.addRoute && (a.hasRoute("tablePrint") || a.addRoute({
    name: "tablePrint",
    path: "/tablePrint/:isFrom",
    component: qo
  })), Ge = a, location.pathname.indexOf("tablePrint") > -1 ? (Ge.push(location.pathname), it()) : location.hash.indexOf("tablePrint") > -1 && (Ge.push(location.hash.replace(/^#/, "")), it());
}
function Xo(a, o, e, t) {
  var s, c;
  if (!Ge)
    return;
  let u = ne(
    a.filter((f) => f.key)
  ), n;
  u[0].type === "selection" && u.shift(), u.length ? n = u.map((f) => (f.width = f.minWidth || 100, f.sortable = !1, delete f.minWidth, delete f.__id, f.resizable = !0, f)) : n = [];
  let d = (c = (s = Ge == null ? void 0 : Ge.currentRoute) == null ? void 0 : s.value) == null ? void 0 : c.fullPath;
  d && (d = d.replace(/\//g, "_")), window.sessionStorage.setItem(
    "print_" + d,
    JSON.stringify({
      columns: n,
      data: o,
      title: e,
      config: t
    })
  );
  const i = Ge.resolve({
    name: "tablePrint",
    params: { isFrom: d }
  });
  window.open(i == null ? void 0 : i.href, "_blank") || console.log("请不要禁用浏览器弹出窗口，否则无法正常使用该打印功能。");
}
const $t = {
  init: Yo,
  print: Xo
};
function Dt(a) {
  const o = (...n) => De.apply(this, n), e = o("r.closePreview"), t = o("r.fullImg");
  let u = "previewImg" + Math.floor(Math.random() * 1e7);
  Ee.info({
    closable: !1,
    "transition-names": ["linear", "fade"],
    render: (n) => we(
      "div",
      {
        class: "previewModal",
        id: u
      },
      [
        we(
          "div",
          {
            class: "previewModalInner"
          },
          [
            we("img", {
              src: a,
              alt: t
            }),
            we(da, {
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
  }), Le(() => {
    var i, h, s, c, f, w;
    const n = (c = (s = (h = (i = document.getElementById(u)) == null ? void 0 : i.parentElement) == null ? void 0 : h.parentElement) == null ? void 0 : s.parentElement) == null ? void 0 : c.parentElement, d = (w = (f = document.getElementById(u)) == null ? void 0 : f.parentElement) == null ? void 0 : w.nextSibling;
    n && (n.style.height = "0"), n && (n.style.padding = "0"), d && (d.style.display = "none");
  }, 10);
}
function Nt(a, o, e, t) {
  const u = (...n) => De.apply(this, n);
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
      this.title = De("r.preview"), this.iconSvg = '<svg t="1656644788547" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12356" width="256" height="256"><path d="M512 1024H135.4C60.7 1024 0 963.3 0 888.6V135.4C0 60.7 60.7 0 135.4 0h753.2C963.3 0 1024 60.7 1024 135.4V512c0 24.9-20.1 45-45 45s-45-20.1-45-45V135.4c0-25-20.4-45.4-45.4-45.4H135.4c-25 0-45.4 20.4-45.4 45.4v753.2c0 25 20.4 45.4 45.4 45.4H512c24.9 0 45 20.1 45 45s-20.1 45-45 45z" p-id="12357"></path><path d="M512 802c-77.5 0-150.3-30.2-205.1-84.9C252.2 662.3 222 589.5 222 512s30.2-150.3 84.9-205.1S434.5 222 512 222s150.3 30.2 205.1 84.9C771.8 361.7 802 434.5 802 512s-30.2 150.3-84.9 205.1C662.3 771.8 589.5 802 512 802z m0-490c-110.3 0-200 89.7-200 200s89.7 200 200 200 200-89.7 200-200-89.7-200-200-200z" p-id="12358"></path><path d="M978.5 1023.5c-11.5 0-23-4.4-31.8-13.2L653.2 716.8c-17.6-17.6-17.6-46.1 0-63.6 17.6-17.6 46.1-17.6 63.6 0l293.5 293.5c17.6 17.6 17.6 46.1 0 63.6-8.8 8.8-20.3 13.2-31.8 13.2z" p-id="12359"></path></svg>', this.tag = "button", this.alwaysEnable = !0;
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
      let n = localStorage.getItem("editorPreviewW") || 300, d = localStorage.getItem("editorPreviewH") || 500;
      const i = t.getHtml();
      if (u) {
        let h = u.children[0].children[1].children[0], s = u.children[0].children[1];
        h.innerHTML = i, h.style.width = n + "px", s.style.height = d + "px", u.style.display = "block";
      } else {
        const h = document.body, s = document.createElement("div");
        s.setAttribute("id", "editor-preview"), s.setAttribute("class", "editor-preview-mask"), s.innerHTML = `<div class='editor-preview-body'><div class='editor-preview-head'><div><span>宽</span><input type='number' value='${n}' min='200'><span>高</span><input type='number' value='${d}' min='300'></div><i class='ivu-icon ivu-icon-md-close'></i></div><div class='editor-preview-out-wall'><div class='editor-preview-wall r-editor-view'></div></div></div>`;
        let c = s.children[0].children[1], f = s.children[0].children[1].children[0], w = s.children[0].children[0].children[0].children[1];
        const b = 40, v = 70, g = (V) => {
          if (V && V.type === "keyup") {
            let O = !1;
            if (V.key && (O = V.key !== "Enter"), O)
              return;
          }
          let A = V.target.value;
          if (A = Number(A), f.style && f.style.width === A + "px")
            return;
          const B = h.clientWidth;
          A < 250 ? (A = 250, V.target.value = 250) : A > B - b && (A = B - b, V.target.value = B - b), f.style.width = A + "px", localStorage.setItem("editorPreviewW", A);
        };
        w.addEventListener("blur", g), w.addEventListener("keyup", g);
        let C = s.children[0].children[0].children[0].children[3];
        const L = (V) => {
          if (V && V.type === "keyup") {
            let O = !1;
            if (V.key && (O = V.key !== "Enter"), O)
              return;
          }
          let A = V.target.value;
          if (A = Number(A), c.style && c.style.height === A + "px")
            return;
          const B = h.clientHeight;
          A < 300 ? (A = 300, V.target.value = 300) : A > B - v && (A = B - v, V.target.value = B - v), c.style.height = A + "px", localStorage.setItem("editorPreviewH", A);
        };
        C.addEventListener("blur", L), C.addEventListener("keyup", L), s.children[0].children[0].children[1].addEventListener("click", () => {
          s.style.display = "none";
        }), f.innerHTML = i, f.style.width = n + "px", c.style.height = d + "px", h.append(s);
      }
    }
  }
  const o = {
    key: "previewX",
    factory() {
      return new a();
    }
  };
  ha.registerMenu(o), window.wangeditorMenuInit = !0;
})();
const st = {
  $fetch: Ke,
  tablePrint: $t,
  fullScreenImgByDom: ze,
  fullScreenImgPreview: Dt,
  $swal: Ie,
  $swalConfirm: Nt,
  messageBox: vl,
  setInterval: Tt,
  setTimeout: Le,
  ...Bt
}, Zo = function(a, o = {}) {
  Ke.init(o.useStore || o.store, a), a.use(ya), o.locale && ml.use(o.locale), o.i18n && ml.i18n(o.i18n), o.router && (sn(o.router), $t.init(o.router)), o.amap && Cn(o.amap), o.notRegistryGlobal || (Object.keys(ot).forEach((e) => {
    a.component(e) || a.component(e, ot[e]);
  }), Object.keys(st).forEach((e) => {
    a.config.globalProperties[e] = st[e];
  })), a.directive("has") || a.directive("has", (e, t) => {
    t.value && !Vt(t.value) && (e.style.display = "none");
  }), a.directive("loadmore") || a.directive("loadmore", {
    mounted(e, t) {
      var n;
      let u = e;
      t.arg && (u = (n = document.getElementsByClassName(t.arg)) == null ? void 0 : n[0]), u && u.addEventListener("scroll", function() {
        u.scrollTop > 0 && u.scrollHeight - u.scrollTop <= u.clientHeight && t.value();
      });
    }
  }), a.config.globalProperties.searchFormLabelWidth = 84, a.config.globalProperties.formModalLabelWidth = 140, a.config.globalProperties.formGroupLabelWidth = 160, a.config.globalProperties.iconTxtBtnIconSize = 17;
}, Qo = ml.use, ei = ml.i18n, mi = {
  locale: Qo,
  i18n: ei,
  install: Zo,
  ...Bt,
  ...Ra,
  $fetch: Ke,
  fullScreenImgByDom: ze,
  fullScreenImgPreview: Dt,
  $swal: Ie,
  $swalConfirm: Nt,
  messageBox: vl,
  setInterval: Tt,
  setTimeout: Le
};
export {
  Ke as $fetch,
  Ie as $swal,
  Nt as $swalConfirm,
  Pt as AlCascaderMC,
  Ft as AsyncCascader,
  Fl as BtTablePage,
  Oo as CheckboxGroupThreeClass,
  _o as CheckboxGroupTwoClass,
  lo as CheckboxTree,
  Rt as EditorPro,
  Qn as FormGroup,
  eo as FormModal,
  kl as FormR,
  Ba as FullPop,
  ht as HeaderBt,
  Ta as Hello,
  xl as IconTxtBtn,
  Mt as InputMap,
  Kt as MonthRange,
  Ma as Page404,
  Ul as SearchForm,
  It as SelectInput,
  Do as SelectScrollMore,
  Il as ShowHidePanel,
  on as ShowHidePanelB,
  en as SideMenu,
  xt as TableIconBtn,
  rn as TableSearch,
  St as TableSetting,
  ho as TransferBox,
  Ut as UploadGroup,
  $o as WellCard,
  Sl as clearObj,
  Ja as dataFilterOrToUrl,
  Ea as decimalDigitsLimit,
  mi as default,
  wt as downloadFileByFormSubmit,
  vt as downloadFileReaderFile,
  Ua as emptyInput,
  gt as fakeALinkClick,
  Ga as fileExport,
  je as findCollection,
  hl as findPath,
  $a as formDataHeadConfig,
  ze as fullScreenImgByDom,
  Dt as fullScreenImgPreview,
  za as getColumnsKeys,
  ul as getFileSrc,
  $l as getFileTypeByName,
  Tl as getFileTypeIconByName,
  bt as getStringWidth,
  Vt as hasPermission,
  Pa as htmlDecode,
  Fa as htmlEncode,
  qa as htmlPrint,
  Wa as isEmptyValue,
  dl as isImgByFile,
  Ct as isNaN,
  Ha as isNumberValue,
  ke as isValidValue,
  vl as messageBox,
  R as myTypeof,
  Na as oneOf,
  Ll as removeEmptyValue,
  Tt as setInterval,
  Le as setTimeout,
  Je as setValByOption,
  At as siblingElems,
  Ka as stopBubbling,
  ja as stringLength,
  $t as tablePrint,
  Da as toFormData,
  yt as toHump,
  kt as toLine,
  _t as tooltipManual,
  yl as trimObj
};
//# sourceMappingURL=plugRQw.js.map
