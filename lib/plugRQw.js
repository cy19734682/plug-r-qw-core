var Ol = Object.defineProperty;
var Ml = (l, i, e) => i in l ? Ol(l, i, { enumerable: !0, configurable: !0, writable: !0, value: e }) : l[i] = e;
var Je = (l, i, e) => (Ml(l, typeof i != "symbol" ? i + "" : i, e), e);
import { getCurrentInstance as ft, defineComponent as oe, resolveComponent as W, openBlock as _, createElementBlock as D, normalizeClass as he, normalizeStyle as q, createBlock as G, createCommentVNode as se, renderSlot as Ce, ref as ee, computed as R, withDirectives as be, unref as y, createElementVNode as E, toDisplayString as te, createVNode as Z, withCtx as Y, createTextVNode as ke, vShow as Ae, resolveDirective as Jt, h as re, Fragment as fe, renderList as ye, onBeforeMount as Fl, watch as ge, nextTick as it, isRef as Oe, onMounted as Ye, withModifiers as Pl, mergeProps as et, onUnmounted as Ul, shallowRef as gt, onBeforeUnmount as Kl, createSlots as qe } from "vue";
import Rl from "deepmerge";
import { isObject as Nl, isFunction as Dl, isPlainObject as We, cloneDeep as ue, isEmpty as Pe, isBoolean as El, isNumber as je, debounce as $l, isString as Xt, last as st, isEqual as zl, first as bt, indexOf as Nt, findIndex as Gl, remove as Hl } from "lodash-es";
import lt from "sweetalert";
import { Tooltip as Wl, TableColumnConfig as jl, Radio as ql, Input as Yl, Modal as De, Icon as Jl, Button as vt } from "view-ui-plus";
import { useRouter as Xl, useRoute as Zl } from "vue-router";
import { useI18n as Ql } from "vue-i18n";
import wt from "axios";
import ea from "ar-cascader";
import { Toolbar as ta, Editor as la } from "@wangeditor/editor-for-vue";
import Xe from "moment";
import { Boot as aa } from "@wangeditor/editor";
const Zt = {
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
}, na = /(%|){([0-9a-zA-Z_]+)}/g;
function oa() {
  function l(e, a) {
    return Object.prototype.hasOwnProperty.call(e, a);
  }
  function i(e, ...a) {
    let r;
    return a.length === 1 && typeof a[0] == "object" && (r = a[0]), (!r || !r.hasOwnProperty) && (r = {}), e === void 0 ? "" : e.replace(na, (n, d, s, p) => {
      let u;
      return e[p - 1] === "{" && e[p + n.length] === "}" ? s : (u = l(r, s) ? r[s] : null, u ?? "");
    });
  }
  return i;
}
const ia = oa();
let rt = Zt;
const sa = {
  zh: Zt
};
let Dt, Et = {}, ve, ra = function(l, i) {
  if (typeof this == "object" && Reflect.has(this, "$t"))
    return this.$t(l, i);
  if (ve && ve.global)
    return ve.global.t(l, i);
  if (ve && ve.locale) {
    if (!Et[ve.locale] || Dt != ve.locale) {
      Et[ve.locale] = !0;
      let e = ve.getLocaleMessage(ve.locale) || {}, a = Rl(sa[ve.locale], e, { clone: !0 });
      rt = a, ve.setLocaleMessage(ve.locale, a), Dt = ve.locale;
    }
    return ve.hlang(l, i);
  }
};
const Ke = function(l, i) {
  let e = ra.apply(this, [l, i]);
  if (e != null)
    return e;
  const a = l.split(".");
  let r = rt;
  for (let n = 0, d = a.length; n < d; n++) {
    const s = a[n];
    if (e = r[s], n === d - 1)
      return ia(e, i);
    if (!e)
      return "";
    r = e;
  }
  return "";
}, ua = function(l) {
  rt = l || rt;
}, da = function(l) {
  ve = l;
}, ut = {
  use: ua,
  t: Ke,
  i18n: da
};
function x(l, i) {
  var a, r, n;
  const e = (n = (r = (a = ft()) == null ? void 0 : a.appContext) == null ? void 0 : r.config) == null ? void 0 : n.globalProperties;
  return Ke.apply(e, [l, i]);
}
const Qt = /* @__PURE__ */ oe({
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
  setup(l, { emit: i }) {
    const e = l;
    function a() {
      e.disabled || i("click");
    }
    return (r, n) => {
      const d = W("Icon");
      return _(), D("div", {
        class: he({ headerBtCTM: !0, withIconCTM: e.icon || e.withIcon, disabled: e.disabled }),
        style: q({ color: e.color, borderLeftColor: e.borderColor }),
        onClick: a
      }, [
        e.icon ? (_(), G(d, {
          key: 0,
          size: e.iconSize,
          type: e.icon
        }, null, 8, ["size", "type"])) : se("", !0),
        Ce(r.$slots, "default")
      ], 6);
    };
  }
}), ca = { class: "headerTxtAM" }, fa = { class: "contentAM" }, pa = /* @__PURE__ */ oe({
  __name: "FullPop",
  props: {
    title: {},
    headerColor: {},
    headerBg: {},
    headerFontSize: { default: 12 },
    zIndex: { default: 1e3 }
  },
  emits: ["on-open", "on-close"],
  setup(l, { expose: i, emit: e }) {
    const a = l;
    let r = ee(!1);
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
    }), (u, c) => be((_(), D("div", {
      class: "fullScreenPopBoxAM",
      style: q(y(d))
    }, [
      E("div", {
        class: "headerAM",
        style: q({ color: a.headerColor, backgroundColor: a.headerBg, fontSize: y(n) })
      }, [
        E("span", ca, te(u.title || y(x)("r.title")), 1),
        Z(Qt, {
          icon: "md-return-left",
          onClick: p
        }, {
          default: Y(() => [
            ke(te(y(x)("r.back")), 1)
          ]),
          _: 1
        })
      ], 4),
      E("div", fa, [
        Ce(u.$slots, "default")
      ])
    ], 4)), [
      [Ae, y(r)]
    ]);
  }
}), ma = { class: "msg" }, ya = /* @__PURE__ */ oe({
  __name: "Hello",
  setup(l) {
    let i = ee("Greetings from Ricky.");
    return (e, a) => (_(), D("span", ma, te(y(i)), 1));
  }
});
function pt() {
  const { appContext: l } = ft();
  return l.config.globalProperties;
}
const ha = /* @__PURE__ */ oe({
  __name: "IconTxtBtn",
  props: {
    name: {},
    icon: { default: "md-download" },
    size: { default: () => pt().iconTxtBtnIconSize },
    disabled: { type: Boolean, default: !1 },
    has: { default: "" }
  },
  emits: ["click"],
  setup(l, { emit: i }) {
    const e = l, a = R(() => Math.floor(e.size / 17 * 12) + "px");
    function r(n) {
      e.disabled || i("click", n);
    }
    return (n, d) => {
      const s = W("Icon"), p = Jt("has");
      return be((_(), D("div", {
        class: he(["tabTopBtnsT", { disabled: e.disabled }]),
        onClick: r,
        style: q({ "font-size": y(a) })
      }, [
        Z(s, {
          type: e.icon,
          size: e.size
        }, null, 8, ["type", "size"]),
        ke(" " + te(e.name || y(x)("r.button")), 1)
      ], 6)), [
        [p, n.has]
      ]);
    };
  }
}), va = { class: "c404K" }, ga = /* @__PURE__ */ E("div", { class: "t404" }, "404", -1), ba = { class: "ct404" }, wa = { class: "p404" }, ka = /* @__PURE__ */ oe({
  __name: "Page404",
  setup(l) {
    const e = ft().appContext.config.globalProperties.$router;
    function a() {
      e.go(-1);
    }
    return (r, n) => {
      const d = W("Button");
      return _(), D("div", va, [
        ga,
        E("div", ba, "UH OH! " + te(y(x)("r.pageNotFound")), 1),
        E("div", wa, te(y(x)("r.notFoundMsg")), 1),
        Z(d, {
          class: "bt404",
          onClick: a
        }, {
          default: Y(() => [
            ke(te(y(x)("r.back")), 1)
          ]),
          _: 1
        })
      ]);
    };
  }
});
function xe(l, i, e) {
  const a = (...r) => Ke.apply(this, r);
  return new Promise((r, n) => {
    if (typeof l == "object" && !Array.isArray(l)) {
      let d = a("r.confirm"), s = a("r.cancel"), p = !1, u = "swalConfirmBt", c = "swalCancelBt";
      const m = /^HTML.*Element$/;
      l.type && (l.icon = l.type) && delete l.type, l.content && (l.text = l.content) && delete l.content, l.className = l.className || "swalBoxX";
      let B = "";
      l.text && m.test(K(l.text)) ? B = "content" : l.text && K(l.text) === "String" && (B = "text"), l.buttons && (typeof l.buttons == "object" && !Array.isArray(l.buttons) ? l.buttons.cancel && (l.buttons.cancel.text && (s = l.buttons.cancel.text) && (p = !0), l.buttons.cancel.className && (c = l.buttons.cancel.className), l.buttons.confirm.text && (d = l.buttons.confirm.text), l.buttons.confirm.className && (u = l.buttons.confirm.className)) : Array.isArray(l.buttons) && (l.buttons[0] && (s = l.buttons[0], p = !0), l.buttons[1] && (d = l.buttons[1]))), lt({
        title: l.title,
        icon: l.icon,
        className: l.className,
        [B]: l.text,
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
      }).then((w) => {
        w && typeof l.onOk == "function" && l.onOk(), r(w);
      }).catch((w) => {
        n(w);
      });
    } else if (typeof l == "string") {
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
      lt({
        title: l,
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
    } else if (typeof l == "boolean")
      !l && lt.close && lt.close();
    else
      throw new TypeError("swal第一个参数类型有误，仅支持Object/String/false");
  });
}
function el(l) {
  return l.replace(/_(\w)/g, function(i, e) {
    return e.toUpperCase();
  });
}
function Va(l) {
  let i = document.createElement("div");
  return i.textContent !== void 0 ? i.textContent = l : i.innerText = l, i.innerHTML;
}
function Ca(l) {
  let i = document.createElement("div");
  return i.innerHTML = l, i.innerText || i.textContent;
}
function nt(l) {
  return new Promise((i) => {
    let e = new FileReader();
    e.readAsDataURL(l), e.onloadend = () => {
      i(e.result);
    };
  });
}
function It(l) {
  return l.split(".").pop().toLocaleLowerCase();
}
function ot(l) {
  return K(l) === "String" && l.indexOf("image") > -1;
}
function kt(l) {
  const i = It(l);
  let e = "ios-document-outline";
  return ["gif", "jpg", "jpeg", "png", "bmp", "webp"].indexOf(i) > -1 ? e = "ios-image" : ["mp4", "m3u8", "rmvb", "avi", "swf", "3gp", "mkv", "flv"].indexOf(i) > -1 ? e = "ios-film" : ["mp3", "wav", "wma", "ogg", "aac", "flac"].indexOf(i) > -1 ? e = "ios-musical-notes" : ["doc", "txt", "docx", "pages", "epub", "pdf"].indexOf(i) > -1 ? e = "md-document" : ["numbers", "csv", "xls", "xlsx"].indexOf(i) > -1 ? e = "ios-stats" : ["keynote", "ppt", "pptx"].indexOf(i) > -1 && (e = "ios-videocam"), e;
}
function tl(l, i) {
  let e = document.createElement("a");
  e.href = i, e.download = l, ll(e);
}
function ll(l) {
  let i = document.createEvent("MouseEvents");
  i.initMouseEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), l.dispatchEvent(i);
}
function dt({
  group: l,
  condition: i,
  pathKey: e,
  childKey: a = "children",
  path: r = []
}) {
  if (l && Nl(l)) {
    if (Dl(i)) {
      if (We(l)) {
        let n = l, d = ue(r);
        if (i(n))
          return e && n[e] && d.push(n[e]), d;
        if (n[a] && !Pe(n[a])) {
          e && n[e] && d.push(n[e]);
          let s = dt({
            group: n[a],
            condition: i,
            pathKey: e,
            childKey: a,
            path: d
          });
          if (!Pe(s))
            return s;
        }
      } else if (Array.isArray(l))
        for (let n of l) {
          let d = ue(r);
          if (i(n))
            return e && n[e] ? d.push(n[e]) : d.push(String(l.indexOf(n))), d;
          if (n[a] && n[a].length > 0) {
            e && n[e] ? d.push(n[e]) : d.push(String(l.indexOf(n)));
            let s = dt({
              group: n[a],
              condition: i,
              pathKey: e,
              childKey: a,
              path: d
            });
            if (!Pe(s))
              return s;
          }
        }
    } else if (Array.isArray(l))
      for (let n of l) {
        let d = ue(r);
        if (n === i)
          return d.push(String(l.indexOf(n))), d;
      }
  }
  return [];
}
function al(l, i = 12) {
  if (K(l) === "String" && l.length > 0) {
    let e = document.createElement("span");
    e.style.fontSize = i + "px", e.style.fontFamily = "inherit", e.innerHTML = l, e.style.opacity = "0", e.style.position = "fixed", e.style.top = "3000px", document.body.append(e);
    const a = e.clientWidth;
    return document.body.removeChild(e), a;
  }
  return 0;
}
function _a(l) {
  return l === "" ? null : l;
}
function Aa(l) {
  l = l || window.Event, l.stopPropagation ? l.stopPropagation() : l.cancelBubble = !0;
}
const Ba = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  downloadFileReaderFile: tl,
  emptyInput: _a,
  fakeALinkClick: ll,
  findPath: dt,
  getFileSrc: nt,
  getFileTypeByName: It,
  getFileTypeIconByName: kt,
  getStringWidth: al,
  htmlDecode: Ca,
  htmlEncode: Va,
  isImgByFile: ot,
  stopBubbling: Aa,
  toHump: el
}, Symbol.toStringTag, { value: "Module" }));
function K(l) {
  return Object.prototype.toString.call(l).replace(/\[object |]/g, "");
}
function nl(l) {
  return l.replace(/([A-Z])/g, "_$1").toLowerCase();
}
function ct(l) {
  let i = K(l);
  if (i === "Object") {
    for (let e in l)
      if (l.hasOwnProperty(e)) {
        let a = K(l[e]);
        a === "String" ? l[e] = l[e].trim() : (a === "Object" || a === "Array") && ct(l[e]);
      }
  } else if (i === "Array")
    for (let e = 0, a = l.length; e < a; e++) {
      let r = K(l[e]);
      r === "String" ? l[e] = l[e].trim() : (r === "Array" || r === "Object") && ct(l[e]);
    }
  return l;
}
function Vt(l, i = []) {
  if (K(l) === "Array")
    return l.forEach((e, a) => {
      switch (K(e)) {
        case "Array":
        case "Object":
          Vt(e);
          break;
        default:
          l[a] = null;
      }
    }), l;
  if (K(l) === "Object") {
    for (let e in l)
      if (l.hasOwnProperty(e)) {
        let a = !0;
        for (let r of i)
          if (r === e) {
            a = !1;
            break;
          }
        if (a)
          switch (K(l[e])) {
            case "Array":
            case "Object":
              Vt(l[e]);
              break;
            default:
              l[e] = null;
          }
      }
    return l;
  } else
    return l;
}
const Ia = {
  headers: {
    "Content-Type": "multipart/form-data"
  }
};
function xa(l) {
  let i = new FormData();
  for (let e in l)
    l.hasOwnProperty(e) && l[e] !== null && i.append(e, l[e]);
  return i;
}
function Ge(l, i, e = !1) {
  if (!l || !i)
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
  return a = n(l, i), e ? a || !1 : r === "notFoundC" ? !1 : r;
}
function Sa(l, i) {
  for (let e = 0, a = i.length; e < a; e++)
    if (l === i[e])
      return !0;
  return !1;
}
function Ta(l, i = 2) {
  let e = new RegExp(`(^-?\\d+\\.\\d{${i}})(\\d+$)`), a = l && String(l) || "";
  return e.test(a) ? Number(a.replace(e, "$1")) : l;
}
function ol(l, i = {}, e = "get") {
  let a = document.createElement("form"), r = document.getElementsByTagName("body")[0];
  r.appendChild(a), a.setAttribute("style", "display:none"), a.setAttribute("target", ""), a.setAttribute("method", e);
  let n = l;
  if (window && window.hasOwnProperty("g")) {
    let d = Object.keys(window.g).filter((s) => s.indexOf("URL") > -1).map((s) => s.replace("URL", ""));
    for (let s of d) {
      let p = new RegExp("^/" + s + "(?=/.*$)", "i");
      if (p.test(l) && window.g[s + "URL"]) {
        n = window.g[s + "URL"] + l.replace(p, "");
        break;
      }
    }
  }
  if (a.setAttribute("action", n), We(i)) {
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
function La(l, i = {}, e = "get") {
  if (i.hasOwnProperty("columns") && (i.columns === "" || i.columns === null || i.columns === void 0)) {
    xe.call(this, {
      title: "需要导出的列不能为空",
      type: "warning"
    });
    return;
  }
  ol(l, i, e);
}
function Oa(l, i, e = !1) {
  let a;
  if (l && K(i) === "Array") {
    let r = localStorage.getItem(l);
    if (r) {
      let n = JSON.parse(decodeURI(r));
      a = i.filter((d) => d.key && n.indexOf(d.title) !== -1).map((d) => d.key);
    } else
      a = i.map((n) => n.key);
  } else
    a = [];
  return e || (a = String(a)), a;
}
function de(l) {
  return l != null && l !== "";
}
function Ma(l) {
  return /^-?\d+(.\d+)?$/.test(l);
}
function il(l, i = !1, e = "") {
  return function(a, r) {
    var p, u;
    let n;
    if (Array.isArray(l)) {
      let c = [];
      for (let m of l)
        de((p = r.row) == null ? void 0 : p[m]) && c.push(r.row[m]);
      n = c.join(e);
    } else
      typeof l == "function" ? n = l(r) : n = (u = r.row) == null ? void 0 : u[l];
    let d = al(n), s = r.column._width;
    return n && d > s ? re(
      Wl,
      {
        style: {
          width: "100%"
        },
        content: n,
        maxWidth: s * 2
      },
      () => re(
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
    ) : re("span", i && !de(n) ? "--" : n);
  };
}
function Fa(l) {
  if (We(l)) {
    for (let i in l)
      if (l.hasOwnProperty(i) && de(l[i]))
        return !1;
    return !0;
  } else if (Array.isArray(l)) {
    for (let i of l)
      if (de(i))
        return !1;
    return !0;
  }
  return !de(l);
}
function Pa(l) {
  return K(l) === "String" ? l.replace(/[^\x00-\xff]/g, "01").length : K(l) === "Number" ? (l += "", l.replace(/[^\x00-\xff]/g, "01").length) : 0;
}
function sl({
  group: l,
  condition: i,
  key: e,
  val: a,
  childKey: r = "children"
}) {
  if (K(l) !== "Array" || K(i) !== "Function" || K(e) !== "String" || K(r) !== "String")
    return !1;
  l.forEach((n) => {
    i(n) && (K(a) === "Function" ? n[e] = a(n[e]) : n[e] = a), K(n[r]) === "Array" && n[r].length > 0 && sl({
      group: n[r],
      condition: i,
      key: e,
      val: a,
      childKey: r
    });
  });
}
function rl(l) {
  let i = sessionStorage.getItem("btnPermissions");
  return i ? i.split(",").indexOf(l) > -1 : !1;
}
function ul(l) {
  return K(l) === "Number" && String(l) === "NaN";
}
function Ua(l, i = !1, e = !1) {
  if (K(l) !== "Object")
    return l;
  let a = Object.assign(l, {}), r = "";
  for (let n in a)
    if (a.hasOwnProperty(n)) {
      let d = a[n];
      d === void 0 || d === "" || K(d) === "String" && d.trim() === "" || d === null || ul(d) ? e ? i ? r += n + "=&" : a[n] = "" : delete a[n] : i && (r += n + "=" + d + "&");
    }
  return i ? r.length > 0 ? r.substring(0, r.length - 1) : "" : a;
}
function Ct(l) {
  let i = {};
  if (Array.isArray(l)) {
    i = [];
    for (let e of l)
      Array.isArray(e) || We(e) ? i.push(Ct(e)) : de(e) && i.push(e);
  } else if (We(l))
    for (let e in l)
      l.hasOwnProperty(e) && (Array.isArray(l[e]) || We(l[e]) ? i[e] = Ct(l[e]) : de(l[e]) && (i[e] = l[e]));
  return i;
}
function Ka(l) {
  const i = window.open();
  if (i) {
    i.document.write(l);
    let e = setTimeout(() => {
      i.print(), window.clearTimeout(e), e = null;
    }, 10);
  }
}
function dl(l) {
  let i = [], e = l;
  for (; l.previousSibling && (l = l.previousSibling); )
    l.nodeType === 1 && i.push(l);
  for (; e.nextSibling && (e = e.nextSibling); )
    e.nodeType === 1 && i.push(e);
  return i;
}
const cl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clearObj: Vt,
  dataFilterOrToUrl: Ua,
  decimalDigitsLimit: Ta,
  downloadFileByFormSubmit: ol,
  fileExport: La,
  findCollection: Ge,
  formDataHeadConfig: Ia,
  getColumnsKeys: Oa,
  hasPermission: rl,
  htmlPrint: Ka,
  isEmptyValue: Fa,
  isNaN: ul,
  isNumberValue: Ma,
  isValidValue: de,
  myTypeof: K,
  oneOf: Sa,
  removeEmptyValue: Ct,
  setValByOption: sl,
  siblingElems: dl,
  stringLength: Pa,
  toFormData: xa,
  toLine: nl,
  tooltipManual: il,
  trimObj: ct
}, Symbol.toStringTag, { value: "Module" })), Ra = { class: "groupBoxRP" }, Na = ["onClick"], Da = /* @__PURE__ */ oe({
  __name: "SideMenuGroup",
  props: {
    data: { default: () => [] },
    pathName: { default: "" }
  },
  setup(l) {
    const i = l, e = Xl();
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
      let p = s.parentNode, u = dl(p);
      for (let c of u) {
        c.classList.remove("open");
        const m = c.querySelectorAll(".open");
        for (let B of m)
          B.classList.remove("open");
      }
      p.classList.toggle("open");
    }
    return (n, d) => {
      const s = W("sideMenuGroup", !0);
      return _(), D("ul", Ra, [
        (_(!0), D(fe, null, ye(i.data, (p, u) => (_(), D("li", {
          class: he({ dropItemRP: p.children }),
          key: p.path + u
        }, [
          E("div", {
            class: he(["menuTxtR", a(p)]),
            onClick: (c) => r(c, p),
            style: q({ paddingLeft: p.level * 20 + "px" })
          }, te(p.name || "-- no name --"), 15, Na),
          p.children ? (_(), G(s, {
            key: 0,
            data: p.children,
            "path-name": i.pathName
          }, null, 8, ["data", "path-name"])) : se("", !0)
        ], 2))), 128))
      ]);
    };
  }
}), Ea = { class: "menuListR" }, $a = /* @__PURE__ */ oe({
  __name: "SideMenu",
  props: {
    data: { default: () => [] }
  },
  emits: ["on-change"],
  setup(l, { emit: i }) {
    const e = l, a = Zl(), r = ee(!0), n = ee(), d = ee(), s = R(() => r.value ? x("r.hideMenu") : x("r.showMenu")), p = R(() => r.value ? "ios-arrow-back" : "ios-arrow-forward");
    Fl(() => {
      let m = localStorage.getItem("menuDisplayR") || "";
      m !== "" ? r.value = JSON.parse(m) : (r.value = !0, localStorage.setItem("menuDisplayR", JSON.stringify(!0)));
    }), ge(
      () => a.path,
      (m) => {
        n.value = m, it(c);
      },
      { immediate: !0 }
    );
    function u() {
      r.value = !r.value, localStorage.setItem("menuDisplayR", JSON.stringify(r.value)), i("on-change", r.value);
    }
    function c() {
      let m = d.value.querySelectorAll(".dropItemRP");
      for (let B of m)
        B.querySelector(".active") && !B.classList.contains("open") && B.classList.add("open");
    }
    return (m, B) => {
      const w = W("Icon");
      return _(), D("div", {
        ref_key: "menuRef",
        ref: d,
        class: "menuBoxRP"
      }, [
        be(E("div", Ea, [
          Z(Da, {
            data: e.data,
            pathName: y(n)
          }, null, 8, ["data", "pathName"])
        ], 512), [
          [Ae, y(r)]
        ]),
        Z(w, {
          type: y(p),
          size: 25,
          class: he([{ showIco: !y(r) }, "menuShowHideIco"]),
          title: y(s),
          onClick: u,
          color: y(r) ? "#fff" : "#333"
        }, null, 8, ["type", "class", "title", "color"])
      ], 512);
    };
  }
}), za = ["title"], Ga = /* @__PURE__ */ oe({
  __name: "TableIconBtn",
  props: {
    icon: { default: "md-radio-button-on" },
    title: {},
    has: { default: "" },
    disabled: { type: Boolean, default: !1 },
    size: { default: 24 }
  },
  emits: ["click"],
  setup(l, { emit: i }) {
    const e = l;
    function a(r) {
      e.disabled || i("click", r);
    }
    return (r, n) => {
      const d = W("Icon"), s = Jt("has");
      return be((_(), D("div", {
        class: he(["tableBtnsG", { disabled: e.disabled }]),
        onClick: a,
        title: e.title || y(x)("r.button")
      }, [
        Z(d, {
          type: e.icon,
          size: e.size
        }, null, 8, ["type", "size"])
      ], 10, za)), [
        [s, e.has]
      ]);
    };
  }
}), Ha = { class: "contentX" }, Wa = { class: "arrowA" }, ja = /* @__PURE__ */ oe({
  __name: "ShowHidePanel",
  props: {
    bg: {}
  },
  setup(l) {
    const i = l, e = ee(!0), a = R(() => e ? "background:" + i.bg || "transparent" : "");
    return (r, n) => {
      const d = W("Icon");
      return _(), D("div", {
        style: q(y(a))
      }, [
        be(E("div", Ha, [
          Ce(r.$slots, "default")
        ], 512), [
          [Ae, y(e)]
        ]),
        E("div", Wa, [
          E("div", {
            class: "btA",
            onClick: n[0] || (n[0] = (s) => e.value = !y(e))
          }, [
            Z(d, {
              type: y(e) ? "ios-arrow-up" : "ios-arrow-down",
              size: "20"
            }, null, 8, ["type"])
          ])
        ])
      ], 4);
    };
  }
}), qa = { class: "contentZ" }, Ya = /* @__PURE__ */ oe({
  __name: "ShowHidePanelB",
  props: {
    modelValue: { type: Boolean, default: !1 },
    bg: { default: "transparent" }
  },
  emits: ["update:modelValue"],
  setup(l, { emit: i }) {
    const e = l, a = R({
      get() {
        return e.modelValue;
      },
      set(n) {
        i("update:modelValue", n);
      }
    }), r = R(() => a.value ? "background:" + e.bg : "");
    return (n, d) => (_(), D("div", {
      style: q(y(r))
    }, [
      be(E("div", qa, [
        Ce(n.$slots, "default")
      ], 512), [
        [Ae, y(a)]
      ])
    ], 4));
  }
});
let _t = [], At = [];
const Ja = function(l) {
  l && l.beforeEach ? l.beforeEach(() => {
    _t.map((i) => {
      window.clearTimeout(i);
    }), At.map((i) => {
      window.clearInterval(i);
    }), _t.length = 0, At.length = 0;
  }) : console.warn(
    "安装库plug-r-qw时未传入router，调用该库的定时器方法产生的定时器将不能自动销毁，请传入router：Vue.use(plugRQw,{router,...})"
  );
}, we = function(l, i) {
  let e = window.setTimeout(l, i);
  return _t.push(e), e;
}, fl = function(l, i) {
  let e = window.setInterval(l, i);
  return At.push(e), e;
}, Xa = /* @__PURE__ */ oe({
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
  setup(l, { emit: i }) {
    const e = l;
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
      const c = W("Input"), m = W("icon");
      return _(), D("div", {
        class: "tableSearchV",
        style: q({ position: e.fixed ? "fixed" : "absolute", right: e.right, top: e.top })
      }, [
        Ce(p.$slots, "default", {}, () => [
          Z(c, {
            modelValue: y(r),
            "onUpdate:modelValue": u[0] || (u[0] = (B) => Oe(r) ? r.value = B : null),
            style: q({ width: e.width }),
            search: "",
            onOnSearch: s,
            class: "searchInputC",
            placeholder: e.placeholder || y(x)("r.pInput")
          }, null, 8, ["modelValue", "style", "placeholder"])
        ]),
        be(E("span", {
          class: "sbt",
          onClick: u[1] || (u[1] = (B) => n.value = !y(n)),
          style: q({ color: e.btnColor })
        }, [
          Z(m, {
            type: y(d),
            color: e.btnColor
          }, null, 8, ["type", "color"]),
          ke(te(y(x)("r.adSearch")), 1)
        ], 4), [
          [Ae, e.showBtn]
        ])
      ], 4);
    };
  }
}), Za = { class: "tabSetF" }, Qa = { class: "topCheck" }, en = /* @__PURE__ */ oe({
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
  setup(l, { emit: i }) {
    const e = l, a = ee(!0), r = ee(!1), n = ee(!1), d = ee([]), s = R(() => {
      let b = x("r.unknown");
      return e.modelValue.length > d.value.length && (d.value = ue(e.modelValue)), d.value.map((T) => {
        let U = { label: T && T.title || b };
        return T && T.disableShowSetting && (U.disabled = !0), U;
      });
    }), p = R(() => s.value.filter((b) => b.disabled)), u = R({
      get() {
        return e.modelValue.map((b) => b && b.title || x("r.unknown"));
      },
      set(b) {
        let T = d.value.filter((U) => {
          for (let A of b)
            if (A === U.title)
              return !0;
          return !1;
        });
        i("update:modelValue", T);
      }
    }), { locale: c } = Ql();
    Ye(() => {
      let b = x("r.unknown"), T;
      c.value ? T = localStorage.getItem(e.sKey + "_" + c.value) : T = localStorage.getItem(e.sKey), T ? u.value = JSON.parse(decodeURI(T)) : e.defaultCheck && (u.value = e.modelValue.filter((U) => U.showSettingCheck).map((U) => U && U.title || b));
    });
    function m(b) {
      b.length === s.value.length ? (a.value = !1, r.value = !0) : b.length > p.value.length ? (a.value = !0, r.value = !1) : (a.value = !1, r.value = !1);
    }
    ge(() => u.value, m, {
      immediate: !0,
      deep: !0
    });
    function B() {
      n.value || (n.value = !0);
    }
    function w() {
      c.value ? localStorage.setItem(e.sKey + "_" + c.value, encodeURI(JSON.stringify(u.value))) : localStorage.setItem(e.sKey, encodeURI(JSON.stringify(u.value))), n.value = !1;
    }
    function C() {
      a.value ? r.value = !1 : r.value = !r.value, a.value = !1, r.value ? u.value = s.value.map((b) => b.label) : u.value = p.value.map((b) => b.label);
    }
    return (b, T) => {
      const U = W("Icon"), A = W("Checkbox"), k = W("CheckboxGroup");
      return _(), D("div", Za, [
        E("div", {
          class: "tabSetBt",
          onClick: B
        }, [
          Z(U, {
            type: "md-settings",
            size: "17"
          }),
          E("span", null, te(y(x)("r.tabSetting")), 1)
        ]),
        be(E("div", {
          class: "tabSetCard",
          style: q({ top: e.top, right: e.right, width: e.width, backgroundColor: e.bg })
        }, [
          E("div", Qa, [
            Z(A, {
              indeterminate: y(a),
              modelValue: y(r),
              "onUpdate:modelValue": T[0] || (T[0] = (V) => Oe(r) ? r.value = V : null),
              onClick: Pl(C, ["prevent"])
            }, {
              default: Y(() => [
                ke(te(y(x)("r.all")), 1)
              ]),
              _: 1
            }, 8, ["indeterminate", "modelValue", "onClick"]),
            E("span", {
              style: { cursor: "pointer", float: "right" },
              onClick: w
            }, te(y(x)("r.confirm")), 1)
          ]),
          Z(k, {
            modelValue: y(u),
            "onUpdate:modelValue": T[1] || (T[1] = (V) => Oe(u) ? u.value = V : null)
          }, {
            default: Y(() => [
              (_(!0), D(fe, null, ye(y(s), (V, I) => (_(), G(A, {
                class: "setItem",
                label: V && V.label,
                key: "tabSet_" + e.sKey + I,
                disabled: V && V.disabled
              }, null, 8, ["label", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["modelValue"])
        ], 4), [
          [Ae, y(n)]
        ])
      ]);
    };
  }
});
let ze = 0, Qe = document.createElement("div");
Qe.setAttribute("class", "spinModal");
Qe.innerHTML = '<div class="loader"><svg class="circular" viewBox="25 25 50 50"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10" /></svg></div>';
window.onload = function() {
  document.getElementsByTagName("body")[0].append(Qe);
};
function $t(l) {
  l ? Qe.classList.add("show") : Qe.classList.remove("show");
}
function pl(l) {
  let i = ze;
  l ? ze++ : ze > 0 && ze--, i !== ze && (ze === 0 ? $t(!1) : i === 0 && $t(!0));
}
const tn = window.location.origin;
let He = null;
const zt = (...l) => Ke.apply(He, l);
let Se = wt.create({
  baseURL: tn,
  withCredentials: !0
  // 允许携带cookie
});
function ln() {
  console.info("store为空，请在安装插件时传入store实例：Vue.use(plugRQw,{store:store})，Pinia传{store:useStore}");
}
Se.interceptors.request.use(
  (l) => l,
  (l) => Promise.reject(l)
);
function Gt() {
  var l, i;
  if (Se.store)
    if (typeof Se.store == "function") {
      const e = Se.store();
      e.logout && e.logout();
    } else
      (i = (l = Se.store) == null ? void 0 : l.dispatch) == null || i.call(l, "logout");
  else
    ln();
}
Se.interceptors.response.use(
  (l) => {
    var i, e;
    return He && (((i = l == null ? void 0 : l.data) == null ? void 0 : i.code) === 403 || ((e = l == null ? void 0 : l.data) == null ? void 0 : e.code) === 409) && He.messageBox({
      content: zt("r.http." + l.data.code),
      onOk: Gt
    }), l;
  },
  (l) => {
    var i, e;
    return He && (((i = l == null ? void 0 : l.response) == null ? void 0 : i.status) === 403 || ((e = l == null ? void 0 : l.response) == null ? void 0 : e.status) === 409) && He.messageBox({
      content: zt("r.http." + l.response.status),
      onOk: Gt
    }), console.warn("请求出错：", l), Promise.reject(l);
  }
);
function Ne(l, i, e, a) {
  a && a.spin && pl(!1);
  let r = !0, n = l && l.data;
  if (n) {
    e = e || [];
    for (let d of e)
      n = n[d], r = r && n;
    return r ? n : (i && console.warn(i), !1);
  }
  return i && console.warn(i), !1;
}
function an(l, i, e, a, r, n, d) {
  return new Promise((s, p) => {
    switch (l) {
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
function at(l, i, e = {}, a, r, n, d) {
  return new Promise((s, p) => {
    var u;
    if (i) {
      n && n.spin && pl(!0);
      let c = i;
      if (window && window.hasOwnProperty("g")) {
        const w = window.g;
        let C = Object.keys(w).filter((b) => b.indexOf("URL") > -1).map((b) => b.replace("URL", ""));
        for (let b of C) {
          let T = new RegExp("^/" + b + "(?=/.*$)", "i");
          if (T.test(i) && w[b + "URL"]) {
            c = w[b + "URL"] + i.replace(T, "");
            break;
          }
        }
      }
      let m;
      if (((u = n == null ? void 0 : n.headers) == null ? void 0 : u["Content-Type"]) === "multipart/form-data")
        m = e;
      else if (e && !Pe(e))
        if (Array.isArray(e)) {
          m = [];
          for (let w of e)
            (w || w === 0 || w === !1 || w === "" && n && !n.noEmptyStr) && m.push(w);
        } else {
          m = {};
          for (let w in e)
            e.hasOwnProperty(w) && (e[w] || e[w] === 0 || e[w] === !1 || e[w] === "" && n && !n.noEmptyStr) && (m[w] = e[w]);
        }
      let B = l.toLowerCase();
      an(B, c, m, a, r, n, d).then((w) => {
        s(w);
      }).catch((w) => {
        p(w);
      });
    } else
      console.error("没有请求地址:url"), p("没有请求地址:url");
  });
}
const Ue = {
  /**
   * @description 初始化该请求插件，单独引入的话调用一次后，方可实现spin等功能，默认在该库安装时已自动化初始化了该请求插件
   * @function
   * @param {object} store 项目中vuex的store，或pinia的useStore
   * @param app 当前vue实例
   */
  init(l, i) {
    Se.store = l, He = i.config.globalProperties;
  },
  post(l, i, e, a, r) {
    return new Promise((n, d) => {
      at("post", l, i, e, a, r).then((s) => {
        n(s);
      }).catch((s) => {
        d(s);
      });
    });
  },
  put(l, i, e, a, r) {
    return new Promise((n, d) => {
      at("put", l, i, e, a, r).then((s) => {
        n(s);
      }).catch((s) => {
        d(s);
      });
    });
  },
  get(l, i, e, a, r) {
    return new Promise((n, d) => {
      at("get", l, i, e, a, r).then((s) => {
        n(s);
      }).catch((s) => {
        d(s);
      });
    });
  },
  delete(l, i, e, a, r, n = !0) {
    return new Promise((d, s) => {
      at("delete", l, i, e, a, r, n).then((p) => {
        d(p);
      }).catch((p) => {
        s(p);
      });
    });
  },
  all: wt.all,
  spread: wt.spread,
  config: Se
}, nn = {
  class: "btTablePage fullHeight",
  ref: "tableBox"
}, on = { class: "topBtn" }, sn = { class: "fullHeight relativeBox" }, rn = {
  ref: "tableContainerLOI",
  class: "fullFlowContent"
}, un = { class: "pageContainer" }, dn = 300, cn = /* @__PURE__ */ oe({
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
  setup(l, { expose: i, emit: e }) {
    const a = l, { globalProperties: r } = ft().appContext.config;
    ({ ...{
      showSettingCheck: !1,
      disableShowSetting: !1
    }, ...jl });
    const d = r.pageSizes || [10, 20, 30, 40], s = ee(a.data), p = ee(
      localStorage.getItem("btPageSize") && Number(localStorage.getItem("btPageSize")) || a.pageSize
    ), u = ee(1), c = ee(0);
    let m = [], B, w, C = a.orderKey, b = a.orderDefault;
    const T = R(() => {
      for (let F of a.columns)
        if (F.fixed)
          return !0;
      return !1;
    }), U = R(() => a.selectionFixed || T.value), A = R(() => {
      let F = {
        ...a.searchData,
        current: u.value,
        size: p.value
      };
      return a.sortable === "custom" && (a.orderKeyFormat === "underline" ? F[b] = nl(C) : a.orderKeyFormat === "camelcase" && (F[b] = el(C))), F;
    }), k = R(() => {
      let F = a.columns.filter((M) => M.type !== "selection");
      if (a.selection || a.radio) {
        let M;
        a.radio ? M = {
          title: " ",
          width: 65,
          render: (ne, ae) => re(ql, {
            value: ae.row.btChecked
          })
        } : M = {
          type: "selection",
          width: 60
        }, a.selectionFixed && (M.fixed = a.selectionFixed), F.unshift(M);
      }
      return F.forEach((M) => {
        a.sortable === "custom" ? M.key && M.sortable !== !0 && M.sortable !== !1 && (M.sortable = "custom") : M.sortable = !1, M.align || (M.align = "center");
      }), a.tableEmptyTdHandle && F.forEach((M) => {
        M.key && M.render === void 0 && (M.tooltip ? M.render = il(M.key, !0) : M.render = (ne, ae) => {
          let ce = ae.row[M.key];
          return ne("span", ce === "" || ce === null || ce === void 0 ? "--" : ce);
        });
      }), F;
    }), V = R({
      get() {
        return s.value.map((F, M) => ({
          btKey: "bt-" + M,
          btChecked: !1,
          ...F
        }));
      },
      set(F) {
        s.value = F;
      }
    }), I = R(() => m.map((F) => F.id)), O = R(() => m.map((F) => F.btKey)), f = ee();
    ge(() => a.searchData, S, { deep: !0 });
    function S() {
      u.value = 1, Fe();
    }
    function h() {
      a.initData && Fe();
    }
    function L(F) {
      s.value.unshift(ue(F)), we(() => {
        var M, ne;
        (ne = (M = f.value) == null ? void 0 : M.clickCurrentRow) == null || ne.call(M, 0);
      }, 100);
    }
    function N(F, M, ne) {
      let ae = null;
      if (El(M) && M ? ae = w : je(M) && (ae = M), ae !== null) {
        let ce = s.value[ae];
        for (let j in F)
          F.hasOwnProperty(j) && (ce[j] = F[j]);
        ne && we(() => {
          var j, Te;
          (Te = (j = f.value) == null ? void 0 : j.clickCurrentRow) == null || Te.call(j, ae);
        }, 10);
      }
    }
    function Q(F) {
      s.value.splice(F, 1), we(() => {
        var M, ne;
        (ne = (M = f.value) == null ? void 0 : M.clickCurrentRow) == null || ne.call(M, 0);
      }, 100);
    }
    function le(F, M) {
      var ne, ae;
      F.btChecked && a.radio || (a.selection || a.radio) && a.rowClickSelect && ((ae = (ne = f.value) == null ? void 0 : ne.toggleSelect) == null || ae.call(ne, M));
    }
    function $(F, M) {
      B = M.btKey, w = Number(M.btKey.split("-")[1]), a.radio && (s.value[w].btChecked = !0);
    }
    function ie(F) {
      if (a.radio)
        for (let M of V.value)
          M.btKey !== B && (s.value[Number(M.btKey.split("-")[1])].btChecked = !1);
      m = F, e("on-selection-change", F);
    }
    function pe() {
      return ue(m);
    }
    function Me(F) {
      u.value = F, Fe();
    }
    function Re(F) {
      p.value = F, localStorage.setItem("btPageSize", String(F)), u.value === 1 && Fe();
    }
    function _e({ key: F, order: M }) {
      b === "normal" ? (C = a.orderKey, b = a.orderDefault) : (C = F, b = M), u.value = 1, Ie();
    }
    function Ve() {
      var F, M;
      if (a.radio) {
        if (O.value.length > 0 && V.value.length > 0) {
          let ne = O.value[0].split("-")[1];
          V.value[ne].btChecked = !1;
        }
      } else
        (M = (F = f.value) == null ? void 0 : F.selectAll) == null || M.call(F, !1);
      m.length > 0 && (m = [], e("on-selection-change", [])), B = null, w = null;
    }
    function Be() {
      s.value = [], Ve(), u.value = 1, c.value = 0;
    }
    function Ie(F, M, ne) {
      return new Promise((ae) => {
        F && (b = F), M && (C = M), a.url ? Ue.get(a.url, A.value, "", [], { spin: a.getDataLoading }).then((ce) => {
          var Te, tt;
          let j;
          ne || Ve(), typeof a.dataHandler == "function" ? j = a.dataHandler(ce) : j = ce, j.data ? (j.data.records || j.data.records === null ? s.value = j.data.records || [] : j.data.page ? (j.data.page.records || j.data.page.records === null) && (s.value = j.data.page.records || []) : j.data.data ? (j.data.data.records || j.data.data.records === null) && (s.value = j.data.data.records || []) : s.value = j.data, c.value = ((Te = j.data.page) == null ? void 0 : Te.total) || ((tt = j.data.data) == null ? void 0 : tt.total) || j.data.total || j.total || 0, c.value === 0 && u.value > 1 && s.value && s.value.length === 0 ? u.value = 1 : u.value > 1 && c.value <= (u.value - 1) * p.value && (u.value--, it(function() {
            Ie(F, M);
          })), e("on-data-change", j), ae(j)) : (console.warn("请求返回数据有误，无法使用"), Be(), e("on-data-change", j));
        }).catch((ce) => {
          console.warn(ce), Ve(), Be(), e("on-data-change", ce);
        }) : console.warn("没有有效的请求地址，无法获取表格数据");
      });
    }
    function Fe(F, M, ne) {
      a.radio && (F || a.rowClickNum !== -1) ? Ie(M, ne, F).then(() => {
        s.value.length > 0 && we(() => {
          var ae, ce, j, Te;
          F ? (ce = (ae = f.value) == null ? void 0 : ae.clickCurrentRow) == null || ce.call(ae, w || 0) : (Te = (j = f.value) == null ? void 0 : j.clickCurrentRow) == null || Te.call(j, a.rowClickNum);
        }, 10);
      }) : Ie();
    }
    return Ye(h), i({
      selectedIds: I,
      addRow: L,
      setRowData: N,
      deleteRow: Q,
      getSelected: pe,
      clearSelect: Ve,
      clearTableData: Be,
      getTableData: Ie,
      getDataAndClickRow: Fe
    }), (F, M) => {
      const ne = W("Table"), ae = W("Page");
      return _(), D("div", nn, [
        be(E("div", on, [
          Ce(F.$slots, "tableSetting"),
          Ce(F.$slots, "topMsg"),
          Ce(F.$slots, "topBtnGroup")
        ], 512), [
          [Ae, a.showTopRow]
        ]),
        E("div", {
          class: he(["tableContainer fullHeight", { noTop: !a.showTopRow, noPage: a.noPage }])
        }, [
          E("div", sn, [
            E("div", rn, [
              Z(ne, et({
                ref_key: "tableRef",
                ref: f
              }, F.$attrs, {
                height: y(U) && dn || null,
                class: { noBorderTable: a.noBorderTable, fullHeightTable: !y(U), lightHeadO: a.lightHead },
                columns: y(k),
                data: y(V),
                "highlight-row": a.radio || a.highlightRow,
                onOnSelect: $,
                onOnSelectionChange: ie,
                onOnSortChange: _e,
                onOnRowClick: le
              }), null, 16, ["height", "class", "columns", "data", "highlight-row"])
            ], 512)
          ])
        ], 2),
        be(E("div", un, [
          Z(ae, {
            modelValue: y(u),
            "onUpdate:modelValue": M[0] || (M[0] = (ce) => Oe(u) ? u.value = ce : null),
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
          [Ae, !a.noPage]
        ])
      ], 512);
    };
  }
}), ml = /* @__PURE__ */ oe({
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
  setup(l, { emit: i }) {
    const e = l, a = R({
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
    const p = $l((u) => {
      i("on-change", u);
    }, 500);
    return (u, c) => {
      const m = W("Option"), B = W("Select"), w = W("Input");
      return _(), D("div", null, [
        Z(B, {
          modelValue: y(a),
          "onUpdate:modelValue": c[0] || (c[0] = (C) => Oe(a) ? a.value = C : null),
          style: q(y(n)),
          disabled: !!e.disabled,
          transfer: ""
        }, {
          default: Y(() => [
            (_(!0), D(fe, null, ye(e.selectOption, (C, b) => (_(), G(m, {
              value: C.val,
              key: "selectInputOp" + C.value + b,
              style: q({ textAlign: e.labelTextAlign })
            }, {
              default: Y(() => [
                ke(te(C.label), 1)
              ]),
              _: 2
            }, 1032, ["value", "style"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue", "style", "disabled"]),
        Z(w, {
          modelValue: y(r),
          "onUpdate:modelValue": c[1] || (c[1] = (C) => Oe(r) ? r.value = C : null),
          placeholder: e.placeholder || y(x)("r.pInput"),
          style: q(y(d)),
          clearable: e.clearable,
          disabled: !!e.disabled,
          onOnChange: s
        }, null, 8, ["modelValue", "placeholder", "style", "clearable", "disabled"])
      ]);
    };
  }
});
var fn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function pn(l) {
  return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default") ? l.default : l;
}
var yl = { exports: {} };
(function(l, i) {
  (function(e, a) {
    l.exports = a();
  })(fn, function() {
    function e(m) {
      var B = [];
      return m.AMapUI && B.push(a(m.AMapUI)), m.Loca && B.push(r(m.Loca)), Promise.all(B);
    }
    function a(m) {
      return new Promise(function(B, w) {
        var C = [];
        if (m.plugins)
          for (var b = 0; b < m.plugins.length; b += 1)
            d.AMapUI.plugins.indexOf(m.plugins[b]) == -1 && C.push(m.plugins[b]);
        if (s.AMapUI === n.failed)
          w("前次请求 AMapUI 失败");
        else if (s.AMapUI === n.notload) {
          s.AMapUI = n.loading, d.AMapUI.version = m.version || d.AMapUI.version, b = d.AMapUI.version;
          var T = document.body || document.head, U = document.createElement("script");
          U.type = "text/javascript", U.src = "https://webapi.amap.com/ui/" + b + "/main.js", U.onerror = function(A) {
            s.AMapUI = n.failed, w("请求 AMapUI 失败");
          }, U.onload = function() {
            if (s.AMapUI = n.loaded, C.length)
              window.AMapUI.loadUI(C, function() {
                for (var A = 0, k = C.length; A < k; A++) {
                  var V = C[A].split("/").slice(-1)[0];
                  window.AMapUI[V] = arguments[A];
                }
                for (B(); p.AMapUI.length; )
                  p.AMapUI.splice(0, 1)[0]();
              });
            else
              for (B(); p.AMapUI.length; )
                p.AMapUI.splice(0, 1)[0]();
          }, T.appendChild(U);
        } else
          s.AMapUI === n.loaded ? m.version && m.version !== d.AMapUI.version ? w("不允许多个版本 AMapUI 混用") : C.length ? window.AMapUI.loadUI(C, function() {
            for (var A = 0, k = C.length; A < k; A++) {
              var V = C[A].split("/").slice(-1)[0];
              window.AMapUI[V] = arguments[A];
            }
            B();
          }) : B() : m.version && m.version !== d.AMapUI.version ? w("不允许多个版本 AMapUI 混用") : p.AMapUI.push(function(A) {
            A ? w(A) : C.length ? window.AMapUI.loadUI(C, function() {
              for (var k = 0, V = C.length; k < V; k++) {
                var I = C[k].split("/").slice(-1)[0];
                window.AMapUI[I] = arguments[k];
              }
              B();
            }) : B();
          });
      });
    }
    function r(m) {
      return new Promise(function(B, w) {
        if (s.Loca === n.failed)
          w("前次请求 Loca 失败");
        else if (s.Loca === n.notload) {
          s.Loca = n.loading, d.Loca.version = m.version || d.Loca.version;
          var C = d.Loca.version, b = d.AMap.version.startsWith("2"), T = C.startsWith("2");
          if (b && !T || !b && T)
            w("JSAPI 与 Loca 版本不对应！！");
          else {
            b = d.key, T = document.body || document.head;
            var U = document.createElement("script");
            U.type = "text/javascript", U.src = "https://webapi.amap.com/loca?v=" + C + "&key=" + b, U.onerror = function(A) {
              s.Loca = n.failed, w("请求 AMapUI 失败");
            }, U.onload = function() {
              for (s.Loca = n.loaded, B(); p.Loca.length; )
                p.Loca.splice(0, 1)[0]();
            }, T.appendChild(U);
          }
        } else
          s.Loca === n.loaded ? m.version && m.version !== d.Loca.version ? w("不允许多个版本 Loca 混用") : B() : m.version && m.version !== d.Loca.version ? w("不允许多个版本 Loca 混用") : p.Loca.push(function(A) {
            A ? w(A) : w();
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
      return new Promise(function(B, w) {
        if (s.AMap == n.failed)
          w("");
        else if (s.AMap == n.notload) {
          var C = m.key, b = m.version, T = m.plugins;
          C ? (window.AMap && location.host !== "lbs.amap.com" && w("禁止多种API加载方式混用"), d.key = C, d.AMap.version = b || d.AMap.version, d.AMap.plugins = T || d.AMap.plugins, s.AMap = n.loading, b = document.body || document.head, window.___onAPILoaded = function(A) {
            if (delete window.___onAPILoaded, A)
              s.AMap = n.failed, w(A);
            else
              for (s.AMap = n.loaded, e(m).then(function() {
                B(window.AMap);
              }).catch(w); u.length; )
                u.splice(0, 1)[0]();
          }, T = document.createElement("script"), T.type = "text/javascript", T.src = "https://webapi.amap.com/maps?callback=___onAPILoaded&v=" + d.AMap.version + "&key=" + C + "&plugin=" + d.AMap.plugins.join(","), T.onerror = function(A) {
            s.AMap = n.failed, w(A);
          }, b.appendChild(T)) : w("请填写key");
        } else if (s.AMap == n.loaded)
          if (m.key && m.key !== d.key)
            w("多个不一致的 key");
          else if (m.version && m.version !== d.AMap.version)
            w("不允许多个版本 JSAPI 混用");
          else {
            if (C = [], m.plugins)
              for (b = 0; b < m.plugins.length; b += 1)
                d.AMap.plugins.indexOf(m.plugins[b]) == -1 && C.push(m.plugins[b]);
            C.length ? window.AMap.plugin(C, function() {
              e(m).then(function() {
                B(window.AMap);
              }).catch(w);
            }) : e(m).then(function() {
              B(window.AMap);
            }).catch(w);
          }
        else if (m.key && m.key !== d.key)
          w("多个不一致的 key");
        else if (m.version && m.version !== d.AMap.version)
          w("不允许多个版本 JSAPI 混用");
        else {
          var U = [];
          if (m.plugins)
            for (b = 0; b < m.plugins.length; b += 1)
              d.AMap.plugins.indexOf(m.plugins[b]) == -1 && U.push(m.plugins[b]);
          c(function() {
            U.length ? window.AMap.plugin(U, function() {
              e(m).then(function() {
                B(window.AMap);
              }).catch(w);
            }) : e(m).then(function() {
              B(window.AMap);
            }).catch(w);
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
})(yl);
var mn = yl.exports;
const yn = /* @__PURE__ */ pn(mn);
let Bt = { securityJsCode: "", key: "" };
function hn({ securityJsCode: l, key: i }) {
  Bt.securityJsCode = l, Bt.key = i;
}
function vn(l) {
  return Bt[l];
}
const hl = /* @__PURE__ */ oe({
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
  setup(l, { emit: i }) {
    const e = l, a = R({
      get() {
        let k;
        return e.modelValue ? e.modelValue.name ? k = ue(e.modelValue) : k = {
          ...e.modelValue,
          name: null
        } : k = {
          name: null
        }, k;
      },
      set(k) {
        i("update:modelValue", ue(k));
      }
    }), r = R(() => je(e.width) ? e.width + "px" : e.width), n = R(() => je(e.height) ? e.height + "px" : e.height ? e.height : je(e.width) ? e.width * 0.66 + "px" : "200px"), d = R(() => ({
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
    ge(
      () => e.modelValue,
      (k) => {
        if (k && k.lng && k.lat) {
          if (!C || !b)
            return;
          U({
            lng: k.lng,
            lat: k.lat,
            name: k.name
          });
        }
      }
    );
    const p = "mapId" + Math.floor(Math.random() * 1e9), u = ee(null), c = ee(null);
    let m;
    function B() {
      c.value && c.value.clientHeight < 10 || !c.value ? we(B, 300) : we(T, 100);
    }
    let w, C, b;
    function T() {
      yn.load({
        key: vn("key"),
        version: "2.0",
        plugins: ["AMap.AutoComplete", "AMap.Geocoder"]
      }).then((k) => {
        w = k, C = new w.Map(p).on("complete", () => {
          var I, O, f, S;
          b = new w.Geocoder(), (I = e.modelValue) != null && I.lng && ((O = e.modelValue) != null && O.lat) && U({
            lng: e.modelValue.lng,
            lat: e.modelValue.lat,
            name: e.modelValue.name
          });
          const V = (S = (f = u.value) == null ? void 0 : f.$el) == null ? void 0 : S.children;
          V && Array.isArray(V) && V.length > 1 && new w.AutoComplete({
            input: V[1]
          }).on("select", (h) => {
            var L, N, Q;
            (L = h == null ? void 0 : h.poi) != null && L.name && ((N = h.poi.location) != null && N.lng && ((Q = h.poi.location) != null && Q.lat) ? (U({
              name: h.poi.name,
              lng: h.poi.location.lng,
              lat: h.poi.location.lat
            }), a.value = {
              name: h.poi.name,
              lng: h.poi.location.lng,
              lat: h.poi.location.lat
            }) : C.setCity(h.poi.name, () => {
              let le = C.getCenter();
              U({
                name: h.poi.name,
                lng: le.lng,
                lat: le.lat
              }), a.value = {
                name: h.poi.name,
                lng: le.lng,
                lat: le.lat
              };
            })), i("on-change", a.value);
          }), C.on("hotspotclick", (h) => {
            U({
              name: h.name,
              lng: h.lnglat.lng,
              lat: h.lnglat.lat
            }), a.value = {
              name: h.name,
              lng: h.lnglat.lng,
              lat: h.lnglat.lat
            };
          });
        });
      });
    }
    function U({ lng: k, lat: V, name: I }) {
      C.clearMap();
      let O = new w.LngLat(k, V), f = new w.Marker({
        map: C,
        position: O,
        draggable: !0
      });
      C.add(f), A(k, V), f.on("dragend", () => {
        let S = f.getPosition();
        a.value = {
          name: I || null,
          lng: S.lng,
          lat: S.lat
        }, A(k, V);
      }), f.on("click", (S) => {
        m && m.open(C, S.target.getPosition());
      }), C.setFitView();
    }
    function A(k, V) {
      b.getAddress([k, V], (I, O) => {
        I === "complete" && O.info === "OK" && O.regeocode && O.regeocode.formattedAddress ? m = new w.InfoWindow({
          //创建信息窗体
          isCustom: !0,
          content: '<div class="mapInfoWindowIKJ">' + O.regeocode.formattedAddress + "</div>",
          offset: new w.Pixel(16, -45),
          closeWhenClickMap: !0
        }) : (m = null, console.warn("地图获取位置信息失败", O));
      });
    }
    return Ye(B), Ul(() => {
      C && (C.destroy(), C = null, b = null, m = null);
    }), (k, V) => (_(), D("div", {
      style: q(y(d)),
      class: "containerIKJ"
    }, [
      Z(y(Yl), {
        ref_key: "mapInputRef",
        ref: u,
        modelValue: y(a).name,
        "onUpdate:modelValue": V[0] || (V[0] = (I) => y(a).name = I),
        class: he({ mapInputIKJ: e.showMap }),
        placeholder: e.placeholder || y(x)("r.search"),
        disabled: e.disabled,
        icon: "ios-search"
      }, null, 8, ["modelValue", "class", "placeholder", "disabled"]),
      E("div", {
        style: q(y(s)),
        ref_key: "mapRef",
        ref: c,
        id: p
      }, null, 4)
    ], 4));
  }
});
var qt;
const vl = /* @__PURE__ */ oe({
  __name: "AsyncCascader",
  props: {
    modelValue: {},
    url: { default: (qt = window == null ? void 0 : window.g) != null && qt.mgrURL ? window.g.mgrURL + "/web/v1/umc/orgs" : "" },
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
  setup(l, { emit: i }) {
    const e = l, a = ee([]), r = R({
      get() {
        let u = e.modelValue;
        return Array.isArray(u) ? ue(u) : je(u) ? dt({
          group: a.value,
          condition: (c) => c.value === u,
          pathKey: "value"
        }) : Xt(u) ? u.split(e.separator) : [];
      },
      set(u) {
        if (e.onlyLastVal)
          Pe(u) ? (i("update:modelValue", null), i("on-label-change", null)) : i("update:modelValue", st(u));
        else {
          if (zl(e.modelValue, u))
            return;
          i("update:modelValue", ue(u));
        }
      }
    });
    function n() {
      if (!e.url) {
        console.error("没有用于拉取级联数据的有效接口地址");
        return;
      }
      Ue.get(e.url).then((u) => {
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
        let B = {
          value: m[e.optionVal],
          label: m[e.optionLabel]
        };
        m.children && !Pe(m.children) && (B.children = d(m.children)), c.push(B);
      }
      return c;
    }
    function s(u) {
      return e.onlyLastLabel ? st(u) : u.join(e.separator);
    }
    function p(u, c) {
      let m = "";
      Pe(c) || (m = c.map((B) => B.label).join(e.separator)), i("on-label-change", m);
    }
    return Ye(n), (u, c) => {
      const m = W("Cascader");
      return _(), G(m, {
        data: y(a),
        modelValue: y(r),
        "onUpdate:modelValue": c[0] || (c[0] = (B) => Oe(r) ? r.value = B : null),
        onOnChange: p,
        "change-on-select": "",
        transfer: "",
        disabled: e.disabled,
        "render-format": s,
        placeholder: e.placeholder || y(x)("r.pSelect"),
        filterable: e.filterable
      }, null, 8, ["data", "modelValue", "disabled", "placeholder", "filterable"]);
    };
  }
}), gl = /* @__PURE__ */ oe({
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
  setup(l, { emit: i }) {
    const e = l, a = ee(), r = R({
      get() {
        if (e.modelValue && (je(e.modelValue) || Xt(e.modelValue))) {
          let d = String(e.modelValue).trim();
          if (/^\d*$/.test(d)) {
            let p = d.substring(0, 2) + "0000", u, c = n(d);
            return c.length < 7 ? u = d.substring(0, 4) + "00" : u = d.substring(0, 6), /^8\d+$/.test(d) ? [p, c] : [p, u, c];
          }
          return d.indexOf(e.separator) !== -1 ? d.split(e.separator) : [d];
        } else
          return Array.isArray(e.modelValue) ? ue(e.modelValue) : (a.value && (a.value.select = []), []);
      },
      set(d) {
        if (Pe(d))
          i("update:modelValue", null), i("on-name-change", null);
        else {
          let s = st(d), p = "", u = "";
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
    return (d, s) => (_(), G(y(ea), et(d.$attrs, {
      class: "alCascaderMC",
      ref_key: "alCRef",
      ref: a,
      modelValue: y(r),
      "onUpdate:modelValue": s[0] || (s[0] = (p) => Oe(r) ? r.value = p : null),
      level: e.level,
      disabled: e.disabled,
      placeholder: e.placeholder || y(x)("r.pSelect"),
      transfer: e.transfer,
      searchable: e.filterable
    }), null, 16, ["modelValue", "level", "disabled", "placeholder", "transfer", "searchable"]));
  }
});
function Ee(l) {
  var d, s, p;
  const i = (...u) => Ke.apply(this, u), e = i("r.closePreview"), a = i("r.fullImg");
  let r = bt(document.getElementsByTagName("body")), n = document.createElement("div");
  n.setAttribute("class", "fullScreenImgByDom"), n.innerHTML = `<div class='previewInner'><img src='${l}' alt='${a}' ><i class='ivu-icon ivu-icon-md-close' title='${e}' ></i></div>`, (s = (d = n.querySelector(".ivu-icon-md-close")) == null ? void 0 : d.addEventListener) == null || s.call(d, "click", function() {
    var c;
    let u = bt(document.getElementsByTagName("body"));
    (c = u == null ? void 0 : u.removeChild) == null || c.call(u, n);
  }), (p = r == null ? void 0 : r.appendChild) == null || p.call(r, n);
}
const gn = { class: "previewBoxM" }, bn = {
  key: 0,
  class: "previewImg"
}, wn = ["src", "alt"], kn = { class: "deleteModal" }, Vn = { class: "previewBoxM" }, Cn = {
  key: 0,
  class: "previewImg"
}, _n = ["src", "alt"], An = { class: "deleteModal" }, Bn = { class: "customFileListM" }, In = {
  key: 0,
  class: "customFileListItem"
}, xn = ["onClick", "title"], Sn = { class: "btBoxJ" }, Tn = { class: "customFileListM" }, Ln = {
  key: 0,
  class: "customFileListItem"
}, On = ["onClick", "title"], Mn = { class: "btBoxJ" };
var Yt;
const bl = /* @__PURE__ */ oe({
  __name: "UploadGroup",
  props: {
    modelValue: { default: () => [] },
    url: { default: (Yt = window == null ? void 0 : window.g) != null && Yt.mgrURL ? window.g.mgrURL + "/web/v1/fsc/file" : "" },
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
  setup(l, { emit: i }) {
    const e = l, a = gt([]), r = gt([]), n = R(() => !e.manualUpload && e.showImg && u.value ? "img" : e.manualUpload && e.showImg && u.value ? "localImg" : e.manualUpload && e.showUploadList && (!e.showImg || !u.value) ? "localList" : !e.manualUpload && e.showUploadList && (!e.showImg || !u.value) ? "list" : ""), d = R(() => e.manualUpload ? "//jsonplaceholder.typicode.com/posts/" : e.url), s = R({
      get() {
        if (e.manualUpload)
          return p.value;
        {
          let h = [];
          for (let L of p.value)
            typeof L == "object" && K(L) === "File" ? h.push(L) : (typeof L == "number" || typeof L == "string") && h.push({
              response: {
                data: [
                  {
                    id: L
                  }
                ]
              }
            });
          return h;
        }
      },
      set(h) {
        var L, N, Q;
        if (e.manualUpload)
          p.value = h;
        else {
          let le = [];
          for (let $ of h)
            (Q = (N = (L = $.response) == null ? void 0 : L.data) == null ? void 0 : N[0]) != null && Q.id && le.push($.response.data[0].id);
          p.value = le;
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
            return Array.isArray(e.modelValue) ? e.modelValue.filter((h) => h !== "--") : K(e.modelValue) === "File" ? [e.modelValue] : [];
          default:
            return [];
        }
      },
      set(h) {
        if (e.length === 1) {
          let L = bt(h);
          i("update:modelValue", L ?? null), i("on-change", L ?? null);
        } else
          i("update:modelValue", ue(h)), i("on-change", ue(h));
      }
    }), u = R(() => {
      let h;
      e.manualUpload ? h = s.value : h = r.value;
      for (let L of h) {
        let N;
        if (e.manualUpload ? N = L && L.type : N = L && L.mimeType, !N || N && !ot(N))
          return !1;
      }
      return !0;
    });
    ge(
      () => s.value,
      async (h) => {
        var L, N, Q, le, $, ie, pe, Me, Re;
        if (n.value === "localImg")
          (h == null ? void 0 : h.length) > 0 ? a.value = await m(h) : a.value = [];
        else if ((h == null ? void 0 : h.length) > 0 && n.value !== "localList") {
          let _e = [];
          for (let Ve of h)
            if (Ve.name === void 0)
              if ((Q = (N = (L = Ve.response) == null ? void 0 : L.data) == null ? void 0 : N[0]) != null && Q.id) {
                let Be = await Ue.get(e.url + "/" + Ve.response.data[0].id).catch(() => {
                  _e.push({ name: x("r.file") + Nt(h, Ve) });
                }), Ie = ue(Ve);
                Ie.name = ((ie = ($ = (le = Be == null ? void 0 : Be.data) == null ? void 0 : le.returnValue) == null ? void 0 : $[0]) == null ? void 0 : ie.name) || x("r.file") + Nt(h, Ve), Ie.mimeType = ((Re = (Me = (pe = Be == null ? void 0 : Be.data) == null ? void 0 : pe.returnValue) == null ? void 0 : Me[0]) == null ? void 0 : Re.mimeType) || "unknown", _e.push(Ie);
              } else
                _e.push({ name: x("r.unknown") });
            else
              _e.push(Ve);
          r.value = _e;
        } else
          r.value = [];
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    function c(h) {
      return h.name || h.split && st(h.split("/")) || h;
    }
    async function m(h) {
      let L = [];
      for (let N of h) {
        let Q = await nt(N);
        L.push(Q);
      }
      return L;
    }
    function B(h) {
      if (!e.disabled) {
        let L = s.value;
        L.splice(h, 1), s.value = L;
      }
    }
    function w(h) {
      var L, N, Q;
      (Q = (N = (L = h == null ? void 0 : h.response) == null ? void 0 : L.data) == null ? void 0 : N[0]) != null && Q.id && window.open(e.url + "/" + h.response.data[0].id + "/download");
    }
    function C(h) {
      var L, N, Q;
      return e.manualUpload ? h.type && ot(h.type) : ((Q = (N = (L = h == null ? void 0 : h.response) == null ? void 0 : L.data) == null ? void 0 : N[0]) == null ? void 0 : Q.id) && h.mimeType && ot(h.mimeType);
    }
    function b(h) {
      e.manualUpload ? nt(h).then((L) => {
        Ee(L);
      }) : Ee(e.url + "/" + h.response.data[0].id + "/download?preview=true");
    }
    function T(h) {
      K(h) === "String" && h.indexOf("http") > -1 ? window.open(h) : K(h) === "File" && nt(h).then((L) => {
        tl(h.name, L);
      });
    }
    function U(h) {
      if (e.manualUpload) {
        if (h) {
          let L = It(h.name);
          if (e.format.length > 0 && e.format.indexOf(L) < 0)
            return xe(
              x("r.wrongFileType"),
              x("r.supportType") + (e.format.length > 0 && String(e.format) || x("r.none")),
              "warning"
            ), !1;
          if (e.maxSize && h.size > e.maxSize * 1024)
            return xe(x("r.fileIsBig"), x("r.supportSize") + e.maxSize + "kb", "warning"), !1;
          let N = s.value;
          N.push(h), s.value = N;
        }
        return !1;
      } else
        return !0;
    }
    function A(h) {
      console.warn(h), xe(x("r.uploadError"), "", "error");
    }
    function k(h, L, N) {
      if (h && h.code === 0) {
        let Q = s.value;
        Q.push(L), s.value = Q;
      } else
        xe(x("r.uploadFail"), h && h.message || "", "error");
    }
    function V() {
      xe(x("r.fileIsBig"), x("r.supportSize") + e.maxSize + " kb", "warning");
    }
    function I() {
      xe(
        x("r.wrongFileType"),
        x("r.supportType") + (e.format.length > 0 && String(e.format) || x("r.none")),
        "warning"
      );
    }
    function O(h) {
      var Q, le, $, ie, pe, Me;
      let L = ($ = (le = (Q = h == null ? void 0 : h.response) == null ? void 0 : Q.data) == null ? void 0 : le[0]) == null ? void 0 : $.id, N = (Me = (pe = (ie = h == null ? void 0 : h.response) == null ? void 0 : ie.data) == null ? void 0 : pe[0]) == null ? void 0 : Me.mimeType;
      L && (K(N) === "String" && N.indexOf("image") > -1 ? Ee(e.url + "/" + L + "/download?preview=true") : window.open(e.url + "/" + L + "/download?preview=true"));
    }
    function f(h) {
      var N, Q, le;
      let L = (le = (Q = (N = h == null ? void 0 : h.response) == null ? void 0 : N.data) == null ? void 0 : Q[0]) == null ? void 0 : le.id;
      S(null, L);
    }
    function S(h, L) {
      if (!e.disabled && p.value.indexOf(L) !== -1) {
        const N = ue(p.value);
        let Q = s.value;
        Q.splice(N.indexOf(L), 1), s.value = Q;
      }
    }
    return (h, L) => {
      const N = W("Button"), Q = W("Upload"), le = W("Icon");
      return _(), D("div", null, [
        Z(Q, {
          name: "files",
          action: y(d),
          "before-upload": U,
          "on-error": A,
          "on-success": k,
          "on-exceeded-size": V,
          "on-preview": O,
          "on-remove": f,
          "on-format-error": I,
          data: e.data,
          "max-size": e.maxSize,
          "show-upload-list": !1,
          "with-credentials": e.withCredentials,
          format: e.format,
          multiple: e.multiple || !1,
          disabled: e.length > 0 && y(s).length >= e.length || !!e.disabled
        }, {
          default: Y(() => [
            Z(N, {
              icon: "ios-cloud-upload-outline",
              class: he({ disabledR: e.length > 0 && y(s).length >= e.length || !!e.disabled })
            }, {
              default: Y(() => [
                ke(te(y(x)("r.selectFile")), 1)
              ]),
              _: 1
            }, 8, ["class"])
          ]),
          _: 1
        }, 8, ["action", "data", "max-size", "with-credentials", "format", "multiple", "disabled"]),
        be(E("div", gn, [
          (_(!0), D(fe, null, ye(y(p), ($) => (_(), D(fe, { key: $ }, [
            !e.manualUpload && $ !== null ? (_(), D("div", bn, [
              E("img", {
                src: h.url + "/" + $ + "/download?preview=true",
                alt: $
              }, null, 8, wn),
              E("div", kn, [
                Z(le, {
                  type: "ios-expand",
                  size: "40",
                  class: "previewExpand",
                  title: y(x)("r.fView"),
                  onClick: (ie) => y(Ee)(e.url + "/" + $ + "/download?preview=true")
                }, null, 8, ["title", "onClick"]),
                Z(le, {
                  type: "ios-trash-outline",
                  size: "40",
                  class: "previewDelete",
                  onClick: (ie) => S(ie, $),
                  title: y(x)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : se("", !0)
          ], 64))), 128))
        ], 512), [
          [Ae, y(n) === "img" && y(p).length > 0]
        ]),
        be(E("div", Vn, [
          (_(!0), D(fe, null, ye(y(a), ($, ie) => (_(), D(fe, {
            key: "manualImg" + ie
          }, [
            e.manualUpload && $ !== null ? (_(), D("div", Cn, [
              E("img", {
                src: $,
                alt: "manualImg" + ie
              }, null, 8, _n),
              E("div", An, [
                Z(le, {
                  type: "ios-expand",
                  size: "40",
                  class: "previewExpand",
                  onClick: (pe) => y(Ee)($),
                  title: y(x)("r.fView")
                }, null, 8, ["onClick", "title"]),
                Z(le, {
                  type: "ios-trash-outline",
                  size: "40",
                  class: "previewDelete",
                  onClick: (pe) => B(ie),
                  title: y(x)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : se("", !0)
          ], 64))), 128))
        ], 512), [
          [Ae, y(n) === "localImg" && y(a).length > 0]
        ]),
        be(E("div", Bn, [
          (_(!0), D(fe, null, ye(y(s), ($, ie) => (_(), D(fe, {
            key: "manualItem" + ie
          }, [
            e.manualUpload && $ !== null ? (_(), D("p", In, [
              $.name ? (_(), G(le, {
                key: 0,
                type: y(kt)($.name)
              }, null, 8, ["type"])) : se("", !0),
              E("span", {
                class: he(["upNameT", { previewName: C($) }]),
                onClick: (pe) => T($),
                title: y(x)("r.download")
              }, te(c($)), 11, xn),
              E("span", Sn, [
                C($) ? (_(), G(le, {
                  key: 0,
                  type: "md-qr-scanner",
                  size: "14",
                  class: "listBtH",
                  onClick: (pe) => b($),
                  title: y(x)("r.fView")
                }, null, 8, ["onClick", "title"])) : se("", !0),
                Z(le, {
                  type: "ios-close",
                  size: "22",
                  class: "listBtH",
                  onClick: (pe) => B(ie),
                  title: y(x)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : se("", !0)
          ], 64))), 128))
        ], 512), [
          [Ae, y(n) === "localList" && y(s).length > 0]
        ]),
        be(E("div", Tn, [
          (_(!0), D(fe, null, ye(y(r), ($, ie) => (_(), D(fe, {
            key: "defaultItem" + ie
          }, [
            !e.manualUpload && $ !== null ? (_(), D("p", Ln, [
              Z(le, {
                type: y(kt)($.name)
              }, null, 8, ["type"]),
              E("span", {
                class: he(["upNameT", { previewName: C($) }]),
                onClick: (pe) => w($),
                title: y(x)("r.download")
              }, te($.name || y(x)("r.file") + (ie + 1)), 11, On),
              E("span", Mn, [
                C($) ? (_(), G(le, {
                  key: 0,
                  type: "md-qr-scanner",
                  size: "14",
                  class: "listBtH",
                  onClick: (pe) => b($),
                  title: y(x)("r.fView")
                }, null, 8, ["onClick", "title"])) : se("", !0),
                Z(le, {
                  type: "ios-close",
                  size: "22",
                  class: "listBtH",
                  onClick: (pe) => B(ie),
                  title: y(x)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : se("", !0)
          ], 64))), 128))
        ], 512), [
          [Ae, y(n) === "list" && y(r).length > 0]
        ])
      ]);
    };
  }
}), Fn = /* @__PURE__ */ E("div", { class: "bRoot" }, null, -1), wl = /* @__PURE__ */ oe({
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
  setup(l, { emit: i }) {
    const e = l, a = ee(!1), r = ee(!1), n = ee(!1), d = R({
      get() {
        return e.modelValue && e.modelValue[0] || null;
      },
      set(b) {
        i("update:modelValue", [b, s.value]), i("on-change", [b, s.value]);
      }
    }), s = R({
      get() {
        return e.modelValue && e.modelValue[1] || null;
      },
      set(b) {
        i("update:modelValue", [d.value, b]), i("on-change", [d.value, b]);
      }
    }), p = R(
      () => (d.value || "") + ((d.value || s.value) && " - " || "") + (s.value || "")
    ), u = ee();
    Ye(() => {
      u.value.querySelector(".aRoot .ivu-input-suffix").addEventListener("mouseover", () => {
        n.value = !0;
      }), u.value.querySelector(".aRoot .ivu-input-suffix").addEventListener("mouseout", () => {
        n.value = !1;
      }), u.value.querySelector(".aRoot .ivu-input-suffix").addEventListener("click", (b) => {
        !e.disabled && (d.value || s.value) && (b.stopPropagation(), w());
      });
    });
    function c() {
      e.disabled || (a.value = !0);
    }
    function m(b) {
      d.value = b, a.value = !1, r.value = !0;
    }
    function B(b) {
      s.value = b, r.value = !1;
    }
    function w() {
      i("update:modelValue", [null, null]), i("on-change", [null, null]);
    }
    function C() {
      a.value = !1, r.value = !1, d.value && s.value === null && (d.value = null);
    }
    return (b, T) => {
      const U = W("DatePicker"), A = W("Icon"), k = W("Input");
      return _(), D("div", {
        class: "monthRangeBoxR",
        ref_key: "mPickerRef",
        ref: u
      }, [
        Z(U, {
          open: y(r),
          modelValue: y(s),
          transfer: "",
          type: "month",
          placement: e.placement,
          options: e.options2,
          onOnChange: B,
          onOnClickoutside: C
        }, {
          default: Y(() => [
            Fn
          ]),
          _: 1
        }, 8, ["open", "modelValue", "placement", "options"]),
        Z(U, {
          open: y(a),
          modelValue: y(d),
          transfer: "",
          type: "month",
          placement: e.placement,
          options: e.options1,
          onOnChange: m,
          onOnClickoutside: C
        }, {
          default: Y(() => [
            E("div", { onClick: c }, [
              Z(k, {
                class: "aRoot",
                modelValue: y(p),
                "onUpdate:modelValue": T[0] || (T[0] = (V) => Oe(p) ? p.value = V : null),
                readonly: "",
                placeholder: e.placeholder || y(x)("r.selectDate"),
                disabled: e.disabled
              }, {
                suffix: Y(() => [
                  Z(A, {
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
}), Pn = { class: "editor-pro-root" }, kl = /* @__PURE__ */ oe({
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
  setup(l, { emit: i }) {
    const e = l, a = gt(), r = R({
      get() {
        return e.modelValue;
      },
      set(u) {
        i("update:modelValue", u), i("on-change", u);
      }
    }), n = R(
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
    ), d = R(
      () => Object.assign(
        {
          readOnly: e.disabled,
          MENU_CONF: {
            uploadImage: {
              async customUpload(u, c) {
                let m = new FormData();
                m.append("files", u);
                const B = u.name, w = e.imgUploadUrl ?? "/node-serve/file";
                Ue.post(w, m, null, [], {
                  spin: !0,
                  headers: {
                    "Content-Type": "multipart/form-data"
                  }
                }).then((C) => {
                  if (C && C.data)
                    if (Array.isArray(C.data))
                      for (let b of C.data) {
                        const T = w + "/" + b.id + "/download";
                        c(T, B, T);
                      }
                    else {
                      const b = w + "/" + C.data.id + "/download";
                      c(b, B, b);
                    }
                }).catch(() => {
                  xe(x("r.uploadFail"), "", "error");
                });
              }
            },
            uploadVideo: {
              async customUpload(u, c) {
                let m = new FormData();
                m.append("files", u);
                const B = e.videoUploadUrl ?? "/node-serve/file";
                Ue.post(B, m, null, [], {
                  spin: !0,
                  headers: {
                    "Content-Type": "multipart/form-data"
                  }
                }).then((w) => {
                  if (w && w.data)
                    if (Array.isArray(w.data))
                      for (let C of w.data) {
                        const b = B + "/" + C.id + "/download";
                        c(b);
                      }
                    else {
                      const C = B + "/" + w.data.id + "/download";
                      c(C);
                    }
                }).catch(() => {
                  xe(x("r.uploadFail"), "", "error");
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
    return ge(
      () => e.disabled,
      (u) => {
        u ? a.value.disable() : a.value.enable();
      }
    ), Kl(() => {
      a.value && a.value.destroy();
    }), (u, c) => (_(), D("div", Pn, [
      be(Z(y(ta), {
        class: "editor-pro-toolbar",
        editor: y(a),
        defaultConfig: y(n),
        mode: u.mode
      }, null, 8, ["editor", "defaultConfig", "mode"]), [
        [Ae, !u.disabled]
      ]),
      Z(y(la), {
        class: "editor-pro-editor",
        modelValue: y(r),
        "onUpdate:modelValue": c[0] || (c[0] = (m) => Oe(r) ? r.value = m : null),
        defaultConfig: y(d),
        mode: u.mode,
        onOnCreated: p,
        style: q(y(s))
      }, null, 8, ["modelValue", "defaultConfig", "mode", "style"])
    ]));
  }
}), Un = {
  key: 19,
  class: "formInfoTxtXN"
}, Kn = {
  key: 20,
  class: "formTitleTxtXN"
}, Ht = /* @__PURE__ */ oe({
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
  setup(l, { emit: i }) {
    const e = l;
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
      const m = W("InputNumber"), B = W("Input"), w = W("Option"), C = W("Select"), b = W("Radio"), T = W("Icon"), U = W("RadioGroup"), A = W("Checkbox"), k = W("CheckboxGroup"), V = W("DatePicker"), I = W("TimePicker"), O = W("FormItem");
      return _(), G(O, {
        label: e.item.type !== "radio" && e.item.type !== "checkbox" ? e.item.label : " ",
        prop: e.item.key || "",
        class: he(["relativeBox", a(e.item)])
      }, {
        default: Y(() => [
          e.item.type === "txt" ? (_(), D("div", {
            key: 0,
            style: q([e.itemStyle, { display: "inline-block" }]),
            class: he({ likeInputX: e.item.likeInput, disabled: !!e.item.disabled || e.disabled })
          }, te(e.item.valKey ? e.valGroup[e.item.valKey] || "无" : e.item.val), 7)) : e.item.type === "inputNumber" ? (_(), G(m, {
            key: 1,
            style: q(e.itemStyle),
            modelValue: e.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[0] || (c[0] = (f) => e.tempKeys[e.item.tempKey] = f),
            max: e.item.max || e.item.max === 0 ? e.item.max : 1 / 0,
            min: e.item.min || e.item.min === 0 ? e.item.min : -1 / 0,
            precision: e.item.precision,
            step: e.item.step || 1,
            placeholder: e.item.placeholder || y(x)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            readonly: !!e.item.readonly,
            editable: e.item.editable !== !1,
            onOnBlur: c[1] || (c[1] = (f) => r(f, e.item)),
            "active-change": !!e.item.activeChange,
            clearable: e.item.clearable !== !1
          }, null, 8, ["style", "modelValue", "max", "min", "precision", "step", "placeholder", "disabled", "readonly", "editable", "active-change", "clearable"])) : e.item.type === "input" ? (_(), G(B, {
            key: 2,
            style: q(u.itemStyle),
            modelValue: e.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[2] || (c[2] = (f) => e.tempKeys[e.item.tempKey] = f),
            maxlength: e.item.maxLength || null,
            password: !!e.item.password,
            icon: e.item.icon,
            prefix: e.item.prefix,
            suffix: e.item.suffix,
            placeholder: e.item.placeholder || y(x)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            onOnBlur: c[3] || (c[3] = (f) => r(f, e.item)),
            clearable: e.item.clearable !== !1
          }, qe({ _: 2 }, [
            e.item.slotPosition && e.item.slotName ? {
              name: e.item.slotPosition,
              fn: Y(() => [
                Ce(u.$slots, e.item.slotName)
              ]),
              key: "0"
            } : void 0,
            e.item.slotPosition !== "prepend" && e.item.prepend ? {
              name: "prepend",
              fn: Y(() => [
                E("span", null, te(e.item.prepend), 1)
              ]),
              key: "1"
            } : void 0,
            e.item.slotPosition !== "append" && e.item.append ? {
              name: "append",
              fn: Y(() => [
                E("span", null, te(e.item.append), 1)
              ]),
              key: "2"
            } : void 0
          ]), 1032, ["style", "modelValue", "maxlength", "password", "icon", "prefix", "suffix", "placeholder", "disabled", "clearable"])) : e.item.type === "select" ? (_(), G(C, {
            key: 3,
            modelValue: u.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[4] || (c[4] = (f) => u.tempKeys[e.item.tempKey] = f),
            style: q(u.itemStyle),
            filterable: e.item.filterable === !0 || e.item.filterable === !1 ? e.item.filterable : !1,
            disabled: !!e.item.disabled || e.disabled,
            multiple: !!e.item.multiple,
            placeholder: e.item.placeholder || y(x)("r.pSelect"),
            onOnChange: c[5] || (c[5] = (f) => r(f, e.item)),
            transfer: "",
            clearable: e.item.clearable !== !1
          }, {
            default: Y(() => [
              (_(!0), D(fe, null, ye(e.item.options, (f, S) => (_(), G(w, {
                value: f.val,
                label: f.label || f.val,
                key: "option-" + e.item.key + S,
                disabled: !!f.disabled
              }, null, 8, ["value", "label", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["modelValue", "style", "filterable", "disabled", "multiple", "placeholder", "clearable"])) : e.item.type === "selectInput" ? (_(), G(ml, {
            key: 4,
            modelValue: u.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[6] || (c[6] = (f) => u.tempKeys[e.item.tempKey] = f),
            "label-width": u.labelWidth,
            "item-width": u.itemWidth,
            "select-option": e.item.options || [],
            placeholder: e.item.placeholder || y(x)("r.pInput"),
            clearable: e.item.clearable !== !1,
            disabled: !!e.item.disabled || e.disabled,
            onOnChange: d
          }, null, 8, ["modelValue", "label-width", "item-width", "select-option", "placeholder", "clearable", "disabled"])) : e.item.type === "alCascader" ? (_(), G(gl, {
            key: 5,
            style: q(u.itemStyle),
            class: "inlineBlock",
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": c[7] || (c[7] = (f) => e.valGroup[e.item.key] = f),
            level: e.item.level || e.item.level === 0 ? e.item.level : 2,
            disabled: !!e.item.disabled || e.disabled,
            filterable: e.item.filterable !== !1,
            placeholder: e.item.placeholder || y(x)("r.pSelect"),
            "change-on-select": !!e.item.changeOnSelect,
            onOnNameChange: c[8] || (c[8] = (f) => s(f, e.item))
          }, null, 8, ["style", "modelValue", "level", "disabled", "filterable", "placeholder", "change-on-select"])) : e.item.type === "asyncCascader" ? (_(), G(vl, {
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
            placeholder: e.item.placeholder || y(x)("r.pSelect"),
            filterable: !!e.item.filterable,
            disabled: !!e.item.disabled || e.disabled,
            onOnLabelChange: c[10] || (c[10] = (f) => p(f, e.item))
          }, null, 8, ["style", "modelValue", "url", "option-val", "option-label", "option-filter", "only-last-val", "only-last-label", "separator", "placeholder", "filterable", "disabled"])) : e.item.type === "radio" ? (_(), G(b, {
            key: 7,
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": c[11] || (c[11] = (f) => e.valGroup[e.item.key] = f),
            disabled: !!e.item.disabled || e.disabled,
            onOnChange: c[12] || (c[12] = (f) => r(f, e.item))
          }, {
            default: Y(() => [
              ke(te(e.item.label), 1)
            ]),
            _: 1
          }, 8, ["modelValue", "disabled"])) : e.item.type === "radioGroup" ? (_(), G(U, {
            key: 8,
            style: q(u.itemStyle),
            onOnChange: c[13] || (c[13] = (f) => n(f, e.item)),
            type: e.item.buttonType ? "button" : null,
            modelValue: u.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[14] || (c[14] = (f) => u.tempKeys[e.item.tempKey] = f)
          }, {
            default: Y(() => [
              (_(!0), D(fe, null, ye(e.item.options, (f) => (_(), G(b, {
                key: "radioItem" + f.val,
                label: f.val,
                border: !!e.item.itemBorder,
                disabled: !!e.item.disabled || e.disabled || f.disabled
              }, {
                default: Y(() => [
                  f.icon && !e.item.buttonType ? (_(), G(T, {
                    key: 0,
                    type: f.icon
                  }, null, 8, ["type"])) : se("", !0),
                  E("span", null, te(f.label || f.val), 1)
                ]),
                _: 2
              }, 1032, ["label", "border", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["style", "type", "modelValue"])) : e.item.type === "checkbox" ? (_(), G(A, {
            key: 9,
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": c[15] || (c[15] = (f) => e.valGroup[e.item.key] = f),
            disabled: !!e.item.disabled,
            onOnChange: c[16] || (c[16] = (f) => r(f, e.item))
          }, {
            default: Y(() => [
              ke(te(e.item.label), 1)
            ]),
            _: 1
          }, 8, ["modelValue", "disabled"])) : e.item.type === "checkboxGroup" ? (_(), G(k, {
            key: 10,
            style: q(u.itemStyle),
            modelValue: u.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[17] || (c[17] = (f) => u.tempKeys[e.item.tempKey] = f),
            onOnChange: c[18] || (c[18] = (f) => n(f, e.item))
          }, {
            default: Y(() => [
              (_(!0), D(fe, null, ye(e.item.options, (f) => (_(), G(A, {
                key: "checkItem" + f.val,
                label: f.val,
                disabled: !!e.item.disabled || e.disabled || f.disabled
              }, {
                default: Y(() => [
                  f.icon ? (_(), G(T, {
                    key: 0,
                    type: f.icon
                  }, null, 8, ["type"])) : se("", !0),
                  E("span", null, te(f.label || f.val), 1)
                ]),
                _: 2
              }, 1032, ["label", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["style", "modelValue"])) : e.item.type === "textarea" ? (_(), G(B, {
            key: 11,
            type: "textarea",
            modelValue: u.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[19] || (c[19] = (f) => u.tempKeys[e.item.tempKey] = f),
            autosize: e.item.autosize || { minRows: 2 },
            style: q(u.itemStyle),
            maxlength: e.item.maxLength || null,
            "show-word-limit": !!e.item.showWordLimit,
            placeholder: e.item.placeholder || y(x)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            onOnBlur: c[20] || (c[20] = (f) => r(f, e.item)),
            clearable: e.item.clearable !== !1
          }, null, 8, ["modelValue", "autosize", "style", "maxlength", "show-word-limit", "placeholder", "disabled", "clearable"])) : e.item.type === "upload" ? (_(), G(bl, {
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
          }, null, 8, ["style", "modelValue", "url", "manual-upload", "format", "data", "max-size", "show-img", "length", "disabled", "with-credentials"])) : e.item.type === "date" ? (_(), G(V, {
            key: 13,
            style: q(u.itemStyle),
            modelValue: u.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[23] || (c[23] = (f) => u.tempKeys[e.item.tempKey] = f),
            type: e.item.dateType,
            disabled: !!e.item.disabled || e.disabled,
            placement: "bottom-end",
            placeholder: e.item.placeholder || y(x)("r.selectDate"),
            options: e.item.dateOptions || null,
            clearable: e.item.clearable !== !1,
            editable: !1,
            transfer: "",
            onOnChange: c[24] || (c[24] = (f) => r(f, e.item))
          }, null, 8, ["style", "modelValue", "type", "disabled", "placeholder", "options", "clearable"])) : e.item.type === "time" ? (_(), G(I, {
            key: 14,
            style: q(u.itemStyle),
            modelValue: u.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[25] || (c[25] = (f) => u.tempKeys[e.item.tempKey] = f),
            type: e.item.dateType,
            disabled: !!e.item.disabled || e.disabled,
            placement: "bottom-end",
            placeholder: e.item.placeholder || y(x)("r.selectTime"),
            steps: e.item.steps || [],
            clearable: e.item.clearable !== !1,
            editable: !1,
            format: e.item.format || "HH:mm:ss",
            transfer: "",
            onOnChange: c[26] || (c[26] = (f) => r(f, e.item))
          }, null, 8, ["style", "modelValue", "type", "disabled", "placeholder", "steps", "clearable", "format"])) : e.item.type === "monthRange" ? (_(), G(wl, {
            key: 15,
            style: q(u.itemStyle),
            modelValue: u.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[27] || (c[27] = (f) => u.tempKeys[e.item.tempKey] = f),
            disabled: !!e.item.disabled || e.disabled,
            placement: "bottom-end",
            placeholder: e.item.placeholder || y(x)("r.selectDate"),
            options1: e.item.dateOptions1 || null,
            options2: e.item.dateOptions2 || null,
            onOnChange: c[28] || (c[28] = (f) => r(f, e.item))
          }, null, 8, ["style", "modelValue", "disabled", "placeholder", "options1", "options2"])) : e.item.type === "editorPro" ? (_(), G(kl, {
            key: 16,
            class: "inlineBlock",
            style: q(u.itemStyle),
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": c[29] || (c[29] = (f) => e.valGroup[e.item.key] = f),
            placeholder: e.item.placeholder || y(x)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            "toolbar-config": e.item.toolbarConfig || {},
            "editor-config": e.item.editorConfig || {},
            mode: e.item.mode || "simple",
            height: e.item.height || 300,
            onInput: c[30] || (c[30] = (f) => r(f, e.item))
          }, null, 8, ["style", "modelValue", "placeholder", "disabled", "toolbar-config", "editor-config", "mode", "height"])) : e.item.type === "inputMap" ? (_(), G(hl, {
            key: 17,
            modelValue: u.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[31] || (c[31] = (f) => u.tempKeys[e.item.tempKey] = f),
            style: q(u.itemStyle),
            placeholder: e.item.placeholder || y(x)("r.search"),
            disabled: !!e.item.disabled || e.disabled,
            "show-map": e.item.showMap !== !1,
            height: e.item.mapHeight || "250px",
            onOnChange: c[32] || (c[32] = (f) => r(f, e.item))
          }, null, 8, ["modelValue", "style", "placeholder", "disabled", "show-map", "height"])) : e.item.type === "custom" ? (_(), D("div", {
            key: 18,
            class: "inlineBlock",
            style: q(u.itemStyle)
          }, [
            Ce(u.$slots, e.item.slotName, {
              valGroup: e.valGroup
            })
          ], 4)) : se("", !0),
          e.item.info ? (_(), D("div", Un, te(e.item.info), 1)) : se("", !0),
          e.item.title ? (_(), D("div", Kn, te(e.item.title), 1)) : se("", !0)
        ]),
        _: 3
      }, 8, ["label", "prop", "class"]);
    };
  }
}), Rn = /* @__PURE__ */ E("input", { type: "text" }, null, -1), Nn = { class: "inlineBlock" }, mt = /* @__PURE__ */ oe({
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
  setup(l, { expose: i, emit: e }) {
    var Kt, Rt;
    const a = l, r = ee(null), n = ee({}), d = ee([]), s = ee({});
    let p = [];
    const u = ((Kt = window == null ? void 0 : window.g) == null ? void 0 : Kt.mgrURL) ?? "";
    let c = [], m = [];
    const B = ee(!1), w = ee(Math.random() * 1e8 + 1e3), C = (Rt = window == null ? void 0 : window.g) != null && Rt.mgrURL ? window.g.mgrURL + "/web/v1/fsc/file" : "/file";
    let b = !1;
    const T = R(() => Array.isArray(a.formData.length ? a.formData[0] : !1)), U = R(
      () => a.inline ? {
        width: a.itemWidth + a.labelWidth + "px"
      } : {}
    ), A = R(
      () => a.inline ? {
        width: "100%"
      } : { width: a.contentWidth }
    ), k = R(() => {
      let o = ue(a.formRules);
      for (let t in o)
        if (o.hasOwnProperty(t))
          if (Array.isArray(o[t]))
            for (let g of o[t])
              g.message || g.validator || (g.message = x("r.required"));
          else
            K(o[t]) === "Object" && (o[t].message || o[t].validator || (o[t].message = x("r.required")));
      return o;
    }), V = R(() => {
      let o = [];
      if (T.value)
        for (let t of d.value)
          f(t, o);
      else
        f(d.value, o);
      return o.concat(c, m);
    }), I = R(() => {
      let o = [];
      if (T.value)
        for (let t of d.value)
          S(t, o);
      else
        S(d.value, o);
      return o;
    });
    function O(o) {
      return o.filter((t) => t.slotName);
    }
    function f(o, t) {
      for (let g of o)
        if (g.showing === !0 && g.key && g.type !== "selectInput" && (t.push(g.key), g.key2 && t.push(g.key2), g.collectLabel)) {
          if (!Array.isArray(g.collectLabel) && g.collectLabel.key)
            t.push(g.collectLabel.key);
          else if (Array.isArray(g.collectLabel))
            for (let v of g.collectLabel)
              v.key && t.push(v.key);
        }
    }
    function S(o, t) {
      for (let g of o)
        g.showing === !0 && g.key && g.type !== "selectInput" && t.push(g.key);
    }
    function h() {
      return new Promise((o) => {
        Q(), N().then(() => {
          e("on-reset"), o(!0);
        });
      });
    }
    function L() {
      return new Promise((o) => {
        for (let t of p)
          t();
        p = [], s.value = {}, M(), Be(), N().then(() => {
          e("on-re-render"), o(!0);
        });
      });
    }
    function N() {
      return new Promise((o) => {
        w.value = Math.floor(Math.random() * 1e8 + 1e3), it(function() {
          o(!0);
        });
      });
    }
    function Q() {
      let o = ie();
      for (let t in n.value)
        if (n.value.hasOwnProperty(t))
          if (de(o[t]))
            n.value[t] = o[t];
          else if (Array.isArray(n.value[t]))
            n.value[t] = [];
          else if (K(n.value[t]) === "Boolean")
            n.value[t] = !1;
          else {
            const g = Ge(a.formData, (v) => v.key === t);
            g && (g.type === "editor" || g.type === "editorPro") ? n.value[t] = "" : n.value[t] = null;
          }
      le(o);
    }
    function le(o) {
      for (let t in s.value)
        s.value.hasOwnProperty(t) && (de(o[t]) ? s.value[t] = o[t] : Array.isArray(s.value[t]) ? s.value[t] = [] : K(s.value[t]) === "Object" && s.value[t].hasOwnProperty("key") && s.value[t].hasOwnProperty("val") ? s.value[t].val = null : s.value[t] = null);
    }
    function $(o) {
      let t = ie();
      de(t[o]) ? s.value[o] = t[o] : Array.isArray(s.value[o]) ? s.value[o] = [] : s.value[o] = null;
    }
    function ie() {
      let o = {};
      if (T.value)
        for (let t of d.value)
          pe(t, o);
      else
        pe(d.value, o);
      return o;
    }
    function pe(o, t) {
      for (let g of o)
        g.tempKey && de(g.defaultVal) && Ve(g, t), g.key && de(g.defaultVal) && (t[g.key] = g.defaultVal), g.key2 && de(g.defaultVal2) && (t[g.key2] = g.defaultVal2);
    }
    function Me(o) {
      if (o.show) {
        if (K(o.show) === "Object")
          return _e(o, Re(o.show));
        if (Array.isArray(o.show))
          if (o.showOr) {
            for (let t of o.show)
              if (Re(t) === !0)
                return _e(o, !0);
            return _e(o, !1);
          } else {
            for (let t of o.show)
              if (Re(t) === !1)
                return _e(o, !1);
            return _e(o, !0);
          }
        else if (K(o.show) === "Function")
          return _e(o, o.show(n.value));
      } else
        o.showing || (o.showing = !0);
      return !0;
    }
    function Re(o) {
      if (o.reg && typeof o.reg.test == "function")
        return o.reg.test(n.value[o.key]);
      if (Array.isArray(o.val)) {
        for (let t of o.val) {
          if ((n.value[o.key] || n.value[o.key] === 0 || n.value[o.key] === !1) && t === ".")
            return !0;
          if (n.value[o.key] === t)
            return !0;
        }
        return !1;
      } else
        return !1;
    }
    function _e(o, t) {
      return !o.showing && t && o.key ? (o.showing = t, o.defaultVal !== void 0 && (o.tempKey ? (s.value[o.tempKey] === null || s.value[o.tempKey] === void 0 || (K(s.value[o.tempKey]) === "Object" || Array.isArray(s.value[o.tempKey])) && Pe(s.value[o.tempKey])) && Ve(o, s.value) : (n.value[o.key] === null || n.value[o.key] === void 0) && (n.value[o.key] = o.defaultVal), o.key2 && o.deafultVal2 !== void 0 && (n.value[o.key2] === null || n.value[o.key2] === void 0) && o.type !== "inputMap" && (n.value[o.key2] = o.defaultVal2)), o.tempKey && ae(s.value[o.tempKey], o)) : o.showing = t, t;
    }
    function Ve(o, t) {
      switch (o.type) {
        case "selectInput":
          t[o.tempKey] = {
            key: o.key,
            val: o.defaultVal
          };
          break;
        case "inputMap":
          o.key3 ? t[o.tempKey] = {
            lng: o.defaultVal || 0,
            lat: o.defaultVal2 || 0,
            name: o.defaultVal3 || ""
          } : t[o.tempKey] = {
            lng: o.defaultVal || 0,
            lat: o.defaultVal2 || 0
          };
          break;
        case "input":
        case "inputNumber":
        case "textarea":
          t[o.tempKey] = o.defaultVal;
          break;
        case "radioGroup":
        case "select":
        case "checkboxGroup":
          o.booleanVal ? t[o.tempKey] = o.defaultVal ? 1 : 0 : t[o.tempKey] = o.defaultVal;
          break;
        case "date":
        case "time":
        case "monthRange":
          o.dateType === "date" || o.dateType === "datetime" || o.dateType === "time" || o.dateType === "year" || o.dateType === "month" ? t[o.tempKey] = o.defaultVal : (o.dateType === "daterange" || o.dateType === "datetimerange" || o.dateType === "timerange" || o.type === "monthRange") && (t[o.tempKey] = o.defaultVal && o.defaultVal2 && [o.defaultVal, o.defaultVal2] || []);
          break;
      }
    }
    function Be() {
      let o = ue(a.formData);
      if (T.value)
        for (let t of o)
          Ie(t);
      else
        Ie(o);
      d.value = o;
    }
    function Ie(o) {
      for (let t of o)
        switch (t.type) {
          case "selectInput":
            const g = "selectInput" + Math.floor(Math.random() * 1e8);
            t.tempKey = g, s.value[g] = {
              key: t.key || null,
              val: t.defaultVal || null
            }, p.push(
              ge(
                () => s.value[g],
                (P) => {
                  ae(P, t);
                },
                { immediate: !0 }
              )
            );
            break;
          case "inputMap":
            const v = "inputMap" + Math.floor(Math.random() * 1e8);
            t.key && (t.tempKey = v, t.key3 ? s.value[v] = t.defaultVal !== void 0 && t.defaultVal2 !== void 0 ? {
              lng: t.defaultVal,
              lat: t.defaultVal2,
              name: t.defaultVal3 || ""
            } : {
              lng: null,
              lat: null,
              name: null
            } : s.value[v] = t.defaultVal !== void 0 && t.defaultVal2 !== void 0 ? {
              lng: t.defaultVal,
              lat: t.defaultVal2
            } : {
              lng: null,
              lat: null
            }, p.push(
              ge(
                () => s.value[v],
                (P) => {
                  ae(P, t);
                },
                { immediate: !0 }
              )
            ));
            break;
          case "input":
          case "inputNumber":
          case "textarea":
            const X = "inputT" + Math.floor(Math.random() * 1e8);
            t.key && (t.tempKey = X, s.value[X] = t.defaultVal !== void 0 ? t.defaultVal : null, p.push(
              ge(
                () => s.value[X],
                (P) => {
                  ae(P, t);
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
                  let P = !0;
                  for (let z of t.changeOption)
                    if (!z.valKey || !z.key) {
                      P = !1;
                      break;
                    }
                  P ? p.push(
                    ge(
                      () => {
                        let z = "";
                        if (Array.isArray(t.changeOption))
                          for (let me of t.changeOption) {
                            let Le = n.value[me.valKey];
                            if (Le || Le === 0 || Le === !1)
                              z += "&" + me.key + "=" + Le;
                            else if (!me.notRequired)
                              return !1;
                          }
                        return z;
                      },
                      (z) => {
                        let me = ue(s.value[t.tempKey]);
                        if (s.value[t.tempKey] = null, z && t.optionUrl) {
                          let Le = t.optionUrl.indexOf("?") !== -1 ? t.optionUrl : t.optionUrl + "?";
                          Fe((Le + z).replace(/\?&/, "?"), t, me);
                        } else
                          t.options = [], t.localOption && (t.options = [...t.localOption]), de(me) && F(me, t);
                      },
                      {
                        immediate: !0
                      }
                    )
                  ) : (t.options = [], t.localOption && (t.options = [...t.localOption]));
                } else
                  typeof t.changeOption == "object" ? t.changeOption.valKey && t.changeOption.key && p.push(
                    ge(
                      () => typeof t.changeOption == "object" && !Array.isArray(t.changeOption) ? n.value[t.changeOption.valKey] : !1,
                      (P) => {
                        let z = ue(s.value[t.tempKey]);
                        if (s.value[t.tempKey] = null, (P || P === 0 || P === !1) && t.optionUrl && typeof t.changeOption == "object" && !Array.isArray(t.changeOption)) {
                          let me = t.optionUrl.indexOf("?") !== -1 ? t.optionUrl : t.optionUrl + "?";
                          Fe((me + "&" + t.changeOption.key + "=" + P).replace(/\?&/, "?"), t, z);
                        } else
                          t.options = [], t.localOption && (t.options = [...t.localOption]), de(z) && F(z, t);
                      },
                      { immediate: !0 }
                    )
                  ) : K(t.changeOption) === "Boolean" && p.push(
                    ge(
                      () => Ge(a.formData, (P) => P.key === t.key).optionUrl,
                      (P) => {
                        let z = ue(s.value[t.tempKey]);
                        s.value[t.tempKey] = null, P ? Fe(P, t, z) : (t.options = [], t.localOption && (t.options = [...t.localOption]), de(z) && F(z, t));
                      },
                      {
                        immediate: !0
                      }
                    )
                  );
              else
                t.optionUrl && Fe(t.optionUrl, t);
            else
              K(t.borrowOption) === "String" && (t.options = Ge(d.value, (P) => P.key === t.borrowOption).options);
            const J = "opEle" + Math.floor(Math.random() * 1e8);
            t.key && (t.tempKey = J, t.type === "select" && t.multiple || t.type === "checkboxGroup" ? s.value[J] = t.defaultVal !== void 0 ? t.defaultVal : [] : t.booleanVal ? s.value[J] = t.defaultVal !== void 0 ? t.defaultVal ? 1 : 0 : null : s.value[J] = t.defaultVal !== void 0 ? t.defaultVal : null, p.push(
              ge(
                () => s.value[J],
                (P) => {
                  ae(P, t);
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
            const H = "date" + Math.floor(Math.random() * 1e8);
            t.tempKey = H, t.dateType === "date" || t.dateType === "datetime" || t.dateType === "time" || t.dateType === "year" || t.dateType === "month" ? s.value[H] = t.defaultVal || null : (t.dateType === "daterange" || t.dateType === "datetimerange" || t.dateType === "timerange" || t.type === "monthRange") && (s.value[H] = t.defaultVal && t.defaultVal2 && [t.defaultVal, t.defaultVal2] || []), p.push(
              ge(
                () => s.value[H],
                (P) => {
                  ae(P, t);
                }
              )
            );
            break;
        }
    }
    function Fe(o, t, g) {
      Ue.get(o).then((v) => {
        var J;
        if (!t.options)
          return;
        let X = ((J = v == null ? void 0 : v.data) == null ? void 0 : J.records) || (v == null ? void 0 : v.data) || v || [];
        Array.isArray(X) ? (t.optionFilter && K(t.optionFilter) === "Function" && (X = t.optionFilter(X)), t.optionLabel && t.optionVal ? (t.options.length = 0, t.options.push(
          ...X.map((H) => {
            let P;
            if (Array.isArray(t.optionLabel)) {
              let z = "";
              t.optionLabel.forEach((me, Le) => {
                let ht = String(H[me]);
                Le === 1 ? z += "（" + ht : Le > 1 ? z += "、" + ht : z += ht;
              }), P = {
                label: z + "）",
                val: t.optionVal && H[t.optionVal]
              };
            } else
              P = {
                label: t.optionLabel && H[t.optionLabel],
                val: t.optionVal && H[t.optionVal]
              };
            if (t.collectLabel)
              if (Array.isArray(t.collectLabel))
                for (let z of t.collectLabel)
                  z.valKey && z.valKey !== "label" && (P[z.valKey] = H[z.valKey]);
              else
                t.collectLabel.valKey && t.collectLabel.valKey !== "label" && (P[t.collectLabel.valKey] = H[t.collectLabel.valKey]);
            if (P.val !== null && P.val !== void 0)
              return P;
          })
        )) : (t.options.length = 0, t.options.push(...X))) : t.options.length = 0, t.localOption && t.options.unshift(...t.localOption), de(g) && F(g, t), t.disableOptionByOthers && (K(t.disableOptionByOthers) === "String" ? p.push(
          ge(
            () => n.value[t.disableOptionByOthers],
            (H) => {
              if ($(t.tempKey), !!t.options) {
                for (let P of t.options)
                  P.disabled && (P.disabled = !1);
                if (H || H === 0 || H === !1)
                  for (let P of t.options)
                    P.val === H && (P.disabled = !0);
              }
            },
            {
              immediate: !0
            }
          )
        ) : Array.isArray(t.disableOptionByOthers) && p.push(
          ge(
            () => t.disableOptionByOthers.filter((H) => H).map((H) => n.value[H]),
            (H) => {
              if ($(t.tempKey), !!t.options) {
                for (let P of t.options)
                  P.disabled && (P.disabled = !1);
                if (H) {
                  for (let P of t.options)
                    for (let z = 0; z < H.length; z++)
                      if (P.val === H[z]) {
                        P.disabled = !0, H.splice(z, 1);
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
    function F(o, t) {
      Array.isArray(t.options) && Gl(t.options, { val: o }) !== -1 && (s.value[t.tempKey] = o);
    }
    function M() {
      if (n.value = {}, T.value)
        for (let o of a.formData)
          ne(o);
      else
        ne(a.formData);
    }
    function ne(o) {
      for (let t of o)
        t.key && (t.type === "checkboxGroup" || t.type === "select" && t.multiple ? n.value[t.key] = t.defaultVal !== void 0 && t.show === void 0 ? t.defaultVal : [] : t.type === "editor" || t.type === "editorPro" ? n.value[t.key] = t.defaultVal !== void 0 && t.show === void 0 ? t.defaultVal : "" : (n.value[t.key] = t.defaultVal !== void 0 && t.show === void 0 ? t.defaultVal : null, t.key2 && (n.value[t.key2] = t.defaultVal2 !== void 0 && t.show === void 0 ? t.defaultVal2 : null)));
    }
    function ae(o, t) {
      if (t.showing)
        switch (t.type) {
          case "selectInput":
            o && (o.beforeKey && delete n.value[o.beforeKey], n.value[o.key] = o.val);
            break;
          case "inputMap":
            if (!t.key || !t.key2)
              return;
            o ? (n.value[t.key] = o.lng, n.value[t.key2] = o.lat, t.key3 && (n.value[t.key3] = o.name)) : (n.value[t.key] = null, n.value[t.key2] = null, t.key3 && (n.value[t.key3] = null));
            break;
          case "input":
          case "inputNumber":
          case "textarea":
            if (!t.key)
              return;
            if (o || o === 0) {
              let X = /^-?\d+(.\d+)?$/;
              t.numberVal && X.test(o) ? n.value[t.key] = Number(o) : n.value[t.key] = o;
            } else
              n.value[t.key] = null;
            break;
          case "select":
          case "radioGroup":
          case "checkboxGroup":
            if (!t.key)
              return;
            if (t.booleanVal && !t.multiple ? n.value[t.key] = o === void 0 || o === "" || o === null ? null : !!o : t.multiple || t.type === "checkboxGroup" ? n.value[t.key] = Object.assign([], o) : n.value[t.key] = o, t.collectLabel) {
              const X = ce(t, o);
              if (Array.isArray(t.collectLabel)) {
                for (let J of t.collectLabel)
                  if (J.key && J.valKey) {
                    const H = j(J.key);
                    let P = null;
                    Array.isArray(X) ? (P = X.map((me) => me[J.valKey]), n.value[J.key] = P, H && (s.value[H] = P)) : (X && de(X[J.valKey]) && (P = X[J.valKey]), n.value[J.key] = P, H && (s.value[H] = P));
                    let z = Ge(d.value, (me) => me.key === J.key);
                    z && z.tempKey && (s.value[z.tempKey] = n.value[J.key]);
                  }
              } else if (typeof t.collectLabel == "object" && t.collectLabel.key && t.collectLabel.valKey) {
                const J = j(t.collectLabel.key);
                let H = null;
                Array.isArray(X) ? (H = X.map(
                  (z) => t.collectLabel && !Array.isArray(t.collectLabel) && z[t.collectLabel.valKey]
                ), n.value[t.collectLabel.key] = H, J && (s.value[J] = H)) : (X && de(X[t.collectLabel.valKey]) && (H = X[t.collectLabel.valKey]), n.value[t.collectLabel.key] = H, J && (s.value[J] = H));
                let P = Ge(
                  d.value,
                  (z) => t.collectLabel && !Array.isArray(t.collectLabel) && z.key === t.collectLabel.key || !1
                );
                P && P.tempKey && (s.value[P.tempKey] = n.value[t.collectLabel.key]);
              }
            }
            break;
          case "date":
          case "time":
          case "monthRange":
            if (!t.key)
              return;
            let g = t.dateType;
            const v = {
              date: "YYYY-MM-DD",
              daterange: "YYYY-MM-DD",
              datetime: "YYYY-MM-DD HH:mm:ss",
              datetimerange: "YYYY-MM-DD HH:mm:ss",
              year: "YYYY",
              month: "MM"
            };
            if (g === "date" || g === "datetime" || g === "time" || g === "year" || g === "month")
              o ? (g === "time" ? n.value[t.key] = o : n.value[t.key] = Xe(o).format(typeof t.format == "string" ? t.format : v[g]), g === "date" && t.addTime && (n.value[t.key] += " 00:00:00")) : n.value[t.key] = null;
            else if (t.type === "monthRange" || g === "daterange" || g === "datetimerange" || g === "timerange") {
              if (!t.key2)
                return;
              o && o[0] && o[1] ? (g === "timerange" ? (n.value[t.key] = o[0], n.value[t.key2] = o[1]) : t.type === "monthRange" ? (n.value[t.key] = typeof t.format == "string" && Xe(o[0]).format(t.format) || o[0], n.value[t.key2] = typeof t.format == "string" && t.format && Xe(o[1]).format(t.format) || o[1]) : (n.value[t.key] = Xe(o[0]).format(t.format || g && v[g]), n.value[t.key2] = Xe(o[1]).format(t.format || g && v[g])), g === "daterange" && t.addTime && (n.value[t.key] += " 00:00:00", n.value[t.key2] += " 23:59:59")) : (n.value[t.key] = null, n.value[t.key2] = null);
            }
            break;
        }
    }
    function ce(o, t) {
      if (o.options)
        if (o.multiple || o.type === "checkboxGroup") {
          if (t) {
            let g = [];
            for (let v of o.options)
              t.indexOf(v.val) !== -1 && g.push(v);
            return g;
          }
          return !1;
        } else {
          if (t || t === 0 || t === !1) {
            for (let g of o.options)
              if (g.val === t)
                return g;
          }
          return !1;
        }
    }
    function j(o) {
      if (T.value) {
        for (let t of d.value) {
          const g = Te(t, o);
          if (g)
            return g;
        }
        return !1;
      }
      return Te(d.value, o);
    }
    function Te(o, t) {
      for (let g of o)
        if (g.key === t)
          return g.tempKey;
      return !1;
    }
    function tt(o, t) {
      let g = {};
      for (let v in n.value)
        n.value.hasOwnProperty(v) && o[v] !== void 0 && (g[v] = o[v], delete o[v]);
      St(g, t);
      for (let v in o)
        o.hasOwnProperty(v) && (m.indexOf(v) < 0 && m.push(v), n.value[v] = o[v]);
    }
    function Al(o) {
      let t = ue(o);
      if (T.value) {
        let g = [];
        for (let v of a.formData)
          g.push(...xt(v, t));
        return g;
      }
      return xt(a.formData, t);
    }
    function xt(o, t) {
      return o.filter((g) => {
        for (let v of Object.keys(t))
          if (g.key === v && I.value.indexOf(v) > -1 && !(t[v] === null || (Array.isArray(t[v]) || K(t[v]) === "Object") && Pe(t[v])))
            return delete t[v], !0;
        return !1;
      }).map((g) => g.key);
    }
    function St(o, t = !1) {
      let g = ue(o);
      Bl(o, t);
      for (let v in n.value)
        if (n.value.hasOwnProperty(v) && o[v] !== void 0 && o[v] !== "--") {
          if (Array.isArray(o[v]))
            o[v] = o[v].filter((X) => X !== "--");
          else if (K(o[v]) === "Object")
            for (let X in o[v])
              o[v].hasOwnProperty(X) && o[v][X] === "--" && (o[v][X] = null);
          n.value[v] = o[v];
        } else
          t || (n.value[v] = Array.isArray(n.value[v]) ? [] : null);
      Tl(Al(g));
    }
    function Bl(o, t = !1) {
      if (T.value)
        for (let g of d.value)
          Tt(g, o, t);
      else
        Tt(d.value, o, t);
    }
    function Tt(o, t, g = !1) {
      for (let v of o)
        if (v.key && (g && (t[v.key] !== void 0 || v.key2 && t[v.key2] !== void 0) || !g) && v.tempKey)
          switch (v.type) {
            case "inputMap":
              if (!v.key2)
                continue;
              K(t[v.key]) === "Number" && K(t[v.key2] === "Number") ? v.key3 ? s.value[v.tempKey] = {
                lng: t[v.key],
                lat: t[v.key2],
                name: t[v.key3]
              } : s.value[v.tempKey] = {
                lng: t[v.key],
                lat: t[v.key2]
              } : v.key3 ? s.value[v.tempKey] = {
                lng: null,
                lat: null,
                name: null
              } : s.value[v.tempKey] = {
                lng: null,
                lat: null
              };
              break;
            case "input":
            case "inputNumber":
            case "textarea":
              t[v.key] && t[v.key] !== "--" || t[v.key] === 0 ? s.value[v.tempKey] = t[v.key] : s.value[v.tempKey] = null;
              break;
            case "select":
            case "radioGroup":
            case "checkboxGroup":
              t[v.key] && t[v.key] !== "--" || t[v.key] === 0 || t[v.key] === !1 ? v.multiple || v.type === "checkboxGroup" ? s.value[v.tempKey] = [...t[v.key]] : v.booleanVal ? s.value[v.tempKey] = t[v.key] ? 1 : 0 : s.value[v.tempKey] = t[v.key] : v.multiple || v.type === "checkboxGroup" ? s.value[v.tempKey] = [] : s.value[v.tempKey] = null;
              break;
            case "date":
            case "time":
              if (v.dateType === "date" || v.dateType === "datetime" || v.dateType === "year" || v.dateType === "month" || v.dateType === "time")
                s.value[v.tempKey] = t[v.key] && t[v.key] !== "--" ? t[v.key] : null;
              else if (v.dateType === "daterange" || v.dateType === "datetimerange" || v.dateType === "timerange") {
                if (!v.key2)
                  continue;
                s.value[v.tempKey] = t[v.key] && t[v.key] !== "--" && t[v.key2] && t[v.key2] !== "--" && [t[v.key], t[v.key2]] || [];
              }
              break;
          }
    }
    function Il(o) {
      if (Array.isArray(o))
        for (let t of o)
          Lt(t);
      else
        K(o) === "Object" && Lt(o);
    }
    function Lt(o) {
      const { index: t, indexB: g, key: v, val: X } = o;
      if (typeof t == "number")
        if (Array.isArray(d.value[t])) {
          if (typeof g == "number")
            if (v && (X || X !== void 0))
              d.value[t][g][v] = X;
            else
              for (let J of Object.keys(o))
                J !== "index" && v !== "indexB" && (d.value[t][g][J] = o[J]);
        } else if (v && (X || X !== void 0))
          d.value[t][v] = X;
        else
          for (let J of Object.keys(o))
            J !== "index" && (d.value[t][J] = o[J]);
    }
    function Ot({ label: o, root: t }) {
      t.key2 && (n.value[t.key2] = o), $e({
        e: o,
        root: t
      });
    }
    function Mt(o) {
      o.beforeKey && Hl(c, (t) => t === o.beforeKey), o.key && (c.indexOf(o.key) === -1 && c.push(o.key), $e({
        e: null,
        root: o
      }));
    }
    function Ft({ name: o, root: t }) {
      t.key2 && (n.value[t.key2] = o), $e({
        e: o,
        root: t
      });
    }
    function Pt({ e: o, root: t }) {
      $e({
        e: o,
        root: t
      }), it(function() {
        var g, v;
        (v = (g = r.value) == null ? void 0 : g.validateField) == null || v.call(g, t.key);
      });
    }
    function $e({ e: o, root: t }) {
      we(() => {
        let g = {
          event: o
        };
        if (t.key && (g[t.key] = n.value[t.key]), t.key2 && (g[t.key2] = n.value[t.key2]), Array.isArray(t.collectLabel))
          for (let v of t.collectLabel)
            g[v.key] = n.value[v.key];
        else
          t.collectLabel && t.collectLabel.key && (g[t.collectLabel.key] = n.value[t.collectLabel.key]);
        e("on-item-change", g);
      }, 500);
    }
    function Ut() {
      let o = {};
      for (let t of V.value)
        o[t] = n.value[t];
      return a.trim && (o = ct(o)), o;
    }
    function xl() {
      var o, t;
      (t = (o = r.value) == null ? void 0 : o.validate) == null || t.call(o);
    }
    function Sl(o) {
      we(() => {
        var t, g;
        (g = (t = r.value) == null ? void 0 : t.validateField) == null || g.call(t, o, () => {
        });
      }, 10);
    }
    function Tl(o) {
      we(() => {
        var t, g;
        if (Array.isArray(o))
          for (let v of o)
            (g = (t = r.value) == null ? void 0 : t.validateField) == null || g.call(t, v, () => {
            });
      }, 10);
    }
    function Ll(o) {
      o !== void 0 && (B.value = !!o);
    }
    function yt() {
      var o, t;
      a.disabled || (t = (o = r.value) == null ? void 0 : o.validate) == null || t.call(o, (g) => {
        b || (b = !0, g && (B.value = !0, e("on-submit", Ut())), we(() => {
          b = !1;
        }, 2e3));
      });
    }
    return Ye(() => {
      M(), Be();
    }), i({
      resetForm: h,
      refreshFormDom: N,
      reRenderForm: L,
      setItemToValGroup: tt,
      updateValGroup: St,
      updateFormDataT: Il,
      validate: xl,
      reValidate: Sl,
      changeLoading: Ll,
      getValGroup: Ut,
      submit: yt
    }), (o, t) => {
      const g = W("FormItem"), v = W("Button"), X = W("Form");
      return _(), G(X, {
        ref_key: "formGroupXRef",
        ref: r,
        model: y(n),
        rules: y(k),
        "label-width": a.labelWidth,
        inline: a.inline,
        "show-message": a.showMessage,
        class: "formXN",
        key: y(w)
      }, {
        default: Y(() => [
          Z(g, { style: { display: "none" } }, {
            default: Y(() => [
              Rn
            ]),
            _: 1
          }),
          y(T) ? (_(!0), D(fe, { key: 0 }, ye(y(d), (J, H) => (_(), D("div", {
            class: he([o.teamClass, "formTeamBox" + H]),
            key: "formTeamBox" + H
          }, [
            (_(!0), D(fe, null, ye(J, (P, z) => (_(), D(fe, {
              key: "formItem" + z
            }, [
              Me(P) ? (_(), G(Ht, {
                key: 0,
                item: P,
                style: q(y(U)),
                "item-style": y(A),
                "val-group": y(n),
                "temp-keys": y(s),
                inline: a.inline,
                disabled: a.disabled,
                "label-width": a.labelWidth,
                "item-width": a.itemWidth,
                "mgr-url": y(u),
                "upload-url": y(C),
                onItemChange: $e,
                onReValidate: Pt,
                onClearTempKeyItem: $,
                onSelectInputChange: Mt,
                onAlNameChange: Ft,
                onAsyncLabelChange: Ot
              }, qe({ _: 2 }, [
                ye(O(J), (me) => ({
                  name: me.slotName,
                  fn: Y((Le) => [
                    Ce(o.$slots, me.slotName, {
                      valGroup: Le.valGroup
                    })
                  ])
                }))
              ]), 1032, ["item", "style", "item-style", "val-group", "temp-keys", "inline", "disabled", "label-width", "item-width", "mgr-url", "upload-url"])) : se("", !0)
            ], 64))), 128))
          ], 2))), 128)) : se("", !0),
          (_(!0), D(fe, null, ye(y(d), (J, H) => (_(), D(fe, {
            key: "formItem" + H
          }, [
            !y(T) && Me(J) ? (_(), G(Ht, {
              key: 0,
              item: J,
              style: q(y(U)),
              "item-style": y(A),
              "val-group": y(n),
              "temp-keys": y(s),
              inline: a.inline,
              disabled: a.disabled,
              "label-width": a.labelWidth,
              "item-width": a.itemWidth,
              "mgr-url": y(u),
              "upload-url": y(C),
              onItemChange: $e,
              onReValidate: Pt,
              onClearTempKeyItem: $,
              onSelectInputChange: Mt,
              onAlNameChange: Ft,
              onAsyncLabelChange: Ot
            }, qe({ _: 2 }, [
              ye(O(o.formData), (P) => ({
                name: P.slotName,
                fn: Y((z) => [
                  Ce(o.$slots, P.slotName, {
                    valGroup: z.valGroup
                  })
                ])
              }))
            ]), 1032, ["item", "style", "item-style", "val-group", "temp-keys", "inline", "disabled", "label-width", "item-width", "mgr-url", "upload-url"])) : se("", !0)
          ], 64))), 128)),
          a.showLongOkBt ? (_(), G(g, { key: 1 }, {
            default: Y(() => [
              Z(v, {
                onClick: yt,
                style: q(y(A)),
                type: "primary",
                loading: a.btnLoading && y(B),
                disabled: a.disabled
              }, {
                default: Y(() => [
                  ke(te(a.longOkBtTxt || y(x)("r.confirm")), 1)
                ]),
                _: 1
              }, 8, ["style", "loading", "disabled"])
            ]),
            _: 1
          })) : se("", !0),
          E("div", Nn, [
            a.showInlineOkBt ? (_(), G(v, {
              key: 0,
              type: "primary",
              class: he({ inlineFormBtXN: a.inline, okBtnXN: !0 }),
              onClick: yt,
              loading: a.btnLoading && y(B),
              disabled: a.disabled
            }, {
              default: Y(() => [
                ke(te(a.inlineOkBtTxt || y(x)("r.confirm")), 1)
              ]),
              _: 1
            }, 8, ["class", "loading", "disabled"])) : se("", !0),
            a.showInlineClearBt ? (_(), G(v, {
              key: 1,
              onClick: h,
              class: he({ inlineFormBtXN: a.inline }),
              type: "dashed"
            }, {
              default: Y(() => [
                ke(te(a.inlineClearBtTxt || y(x)("r.clear")), 1)
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
    labelWidth: { default: () => pt().formGroupLabelWidth },
    contentWidth: { default: "70%" },
    itemWidth: { default: 200 },
    showOkBt: { type: Boolean, default: !0 },
    showCancelBt: { type: Boolean, default: !0 },
    okBtTxt: {},
    cancelBtTxt: {},
    btnLoading: { type: Boolean, default: !1 }
  },
  emits: ["on-cancel"],
  setup(l, { expose: i, emit: e }) {
    const a = l, r = ee({ width: a.with }), n = ee(!1), d = ee(), s = R(() => {
      if (Array.isArray(a.formData))
        if (Array.isArray(a.formData[0])) {
          let I = [];
          for (let O of a.formData)
            I = I.concat(O.filter((f) => f.type === "custom"));
          return I;
        } else
          return a.formData.filter((I) => I.type === "custom");
      return [];
    });
    function p() {
      return new Promise((I) => {
        var O, f;
        (f = (O = d.value).resetForm) == null || f.call(O).then((S) => {
          I(S);
        });
      });
    }
    function u() {
      return new Promise((I) => {
        var O, f;
        (f = (O = d.value).refreshFormDom) == null || f.call(O).then((S) => {
          I(S);
        });
      });
    }
    function c() {
      return new Promise((I) => {
        var O, f;
        (f = (O = d.value).reRenderForm) == null || f.call(O).then((S) => {
          I(S);
        });
      });
    }
    function m(I, O) {
      var f, S;
      (S = (f = d.value).setItemToValGroup) == null || S.call(f, I, O);
    }
    function B(I, O) {
      var f, S;
      (S = (f = d.value).updateValGroup) == null || S.call(f, I, O);
    }
    function w(I) {
      var O, f;
      (f = (O = d.value).updateFormDataT) == null || f.call(O, I);
    }
    function C() {
      var I, O;
      (O = (I = d.value).validate) == null || O.call(I);
    }
    function b(I) {
      var O, f;
      (f = (O = d.value).reValidate) == null || f.call(O, I);
    }
    function T(I) {
      var O, f;
      I !== void 0 && (n.value = !!I, (f = (O = d.value).changeLoading) == null || f.call(O, n.value));
    }
    function U() {
      var I, O;
      return (O = (I = d.value).getValGroup) == null ? void 0 : O.call(I);
    }
    function A() {
      n.value = !0;
    }
    function k() {
      var I, O;
      (O = (I = d.value).submit) == null || O.call(I);
    }
    function V() {
      e("on-cancel"), we(() => {
        var I, O;
        n.value = !1, (O = (I = d.value).changeLoading) == null || O.call(I, !1);
      }, 1e3);
    }
    return i({
      resetForm: p,
      refreshFormDom: u,
      reRenderForm: c,
      setItemToValGroup: m,
      updateValGroup: B,
      updateFormDataT: w,
      validate: C,
      reValidate: b,
      changeLoading: T,
      getValGroup: U,
      submit: k,
      close: V
    }), (I, O) => {
      const f = W("Button");
      return _(), D("div", {
        style: q(y(r)),
        class: "formGroupBoxVM"
      }, [
        Z(mt, et({
          ref_key: "formRRef",
          ref: d
        }, I.$attrs, {
          "form-data": a.formData,
          "label-width": a.labelWidth,
          "content-width": a.contentWidth,
          "item-width": a.itemWidth,
          btnLoading: a.btnLoading,
          onOnSubmit: A
        }), qe({ _: 2 }, [
          ye(y(s), (S) => ({
            name: S.slotName,
            fn: Y(({ valGroup: h }) => [
              Ce(I.$slots, S.slotName, { valGroup: h })
            ])
          }))
        ]), 1040, ["form-data", "label-width", "content-width", "item-width", "btnLoading"]),
        be(E("div", {
          class: "formFooterVM",
          style: q({ marginLeft: a.labelWidth + "px" })
        }, [
          E("div", {
            style: q({ width: a.contentWidth }),
            class: "btnBoxKAL"
          }, [
            a.showOkBt ? (_(), G(f, {
              key: 0,
              onClick: k,
              class: "form-save-btn",
              loading: a.btnLoading && y(n)
            }, {
              default: Y(() => [
                ke(te(a.okBtTxt || y(x)("r.confirm")), 1)
              ]),
              _: 1
            }, 8, ["loading"])) : se("", !0),
            a.showCancelBt ? (_(), G(f, {
              key: 1,
              onClick: V,
              class: "form-cancel-btn"
            }, {
              default: Y(() => [
                ke(te(a.cancelBtTxt || y(x)("r.cancel")), 1)
              ]),
              _: 1
            })) : se("", !0)
          ], 4)
        ], 4), [
          [Ae, a.showOkBt || a.showCancelBt]
        ])
      ], 4);
    };
  }
}), En = /* @__PURE__ */ oe({
  __name: "SearchForm",
  props: {
    formData: { default: () => [] },
    labelWidth: { default: () => pt().searchFormLabelWidth },
    itemWidth: { default: 202 },
    showInlineOkBt: { type: Boolean, default: !0 },
    showInlineClearBt: { type: Boolean, default: !0 }
  },
  emits: ["on-search"],
  setup(l, { expose: i, emit: e }) {
    const a = l, r = ee(), n = R(() => {
      if (Array.isArray(a.formData[0])) {
        let A = [];
        for (let k of a.formData)
          A = A.concat(k.filter((V) => V.type === "custom"));
        return A;
      }
      return a.formData.filter((A) => A.type === "custom");
    });
    function d() {
      return new Promise((A) => {
        var k, V;
        (V = (k = r.value).resetForm) == null || V.call(k).then(() => {
          A();
        });
      });
    }
    function s() {
      return new Promise((A) => {
        var k, V;
        (V = (k = r.value).refreshFormDom) == null || V.call(k).then(() => {
          A();
        });
      });
    }
    function p() {
      return new Promise((A) => {
        var k, V;
        (V = (k = r.value).reRenderForm) == null || V.call(k).then(() => {
          A();
        });
      });
    }
    function u(A, k) {
      var V, I;
      (I = (V = r.value).setItemToValGroup) == null || I.call(V, A, k);
    }
    function c(A, k) {
      var V, I;
      (I = (V = r.value).updateValGroup) == null || I.call(V, A, k);
    }
    function m(A) {
      var k, V;
      (V = (k = r.value).updateFormDataT) == null || V.call(k, A);
    }
    function B() {
      var A, k;
      (k = (A = r.value).validate) == null || k.call(A);
    }
    function w(A) {
      var k, V;
      (V = (k = r.value).reValidate) == null || V.call(k, A);
    }
    function C(A) {
      var k, V;
      (V = (k = r.value).changeLoading) == null || V.call(k, A === void 0 ? !1 : A);
    }
    function b() {
      var A, k;
      return (k = (A = r.value).getValGroup) == null ? void 0 : k.call(A);
    }
    function T(A) {
      e("on-search", A);
    }
    function U() {
      var A, k;
      (k = (A = r.value).submit) == null || k.call(A);
    }
    return i({
      resetForm: d,
      refreshFormDom: s,
      reRenderForm: p,
      setItemToValGroup: u,
      updateValGroup: c,
      updateFormDataT: m,
      validate: B,
      reValidate: w,
      changeLoading: C,
      getValGroup: b,
      submit: U
    }), (A, k) => (_(), G(mt, et({
      ref_key: "formRRef",
      ref: r
    }, A.$attrs, {
      "form-data": a.formData,
      "label-width": a.labelWidth,
      "item-width": a.itemWidth,
      inline: "",
      "show-long-ok-bt": !1,
      "show-inline-ok-bt": a.showInlineOkBt,
      "inline-ok-bt-txt": y(x)("r.check"),
      "show-inline-clear-bt": a.showInlineClearBt,
      "show-message": !1,
      onOnSubmit: T
    }), qe({ _: 2 }, [
      ye(y(n), (V) => ({
        name: V.slotName,
        fn: Y(({ valGroup: I }) => [
          Ce(A.$slots, V.slotName, { valGroup: I })
        ])
      }))
    ]), 1040, ["form-data", "label-width", "item-width", "show-inline-ok-bt", "inline-ok-bt-txt", "show-inline-clear-bt"]));
  }
}), $n = /* @__PURE__ */ oe({
  __name: "FormModal",
  props: {
    title: {},
    formData: { default: () => [] },
    width: { default: 520 },
    labelWidth: { default: () => pt().formModalLabelWidth },
    okBtTxt: {},
    cancelBtTxt: {},
    hideCancelBt: { type: Boolean, default: !1 },
    hideFooter: { type: Boolean, default: !1 },
    btnLoading: { type: Boolean, default: !1 }
  },
  emits: ["on-close", "on-open"],
  setup(l, { expose: i, emit: e }) {
    const a = l, r = ee(), n = ee(!1), d = ee(!1), s = R(() => {
      if (Array.isArray(a.formData[0])) {
        let f = [];
        for (let S of a.formData)
          f = f.concat(S.filter((h) => h.type === "custom"));
        return f;
      }
      return a.formData.filter((f) => f.type === "custom");
    });
    function p() {
      return new Promise((f) => {
        var S, h;
        (h = (S = r.value).resetForm) == null || h.call(S).then(() => {
          f();
        });
      });
    }
    function u() {
      return new Promise((f) => {
        var S, h;
        (h = (S = r.value).refreshFormDom) == null || h.call(S).then(() => {
          f();
        });
      });
    }
    function c() {
      return new Promise((f) => {
        var S, h;
        (h = (S = r.value).reRenderForm) == null || h.call(S).then(() => {
          f();
        });
      });
    }
    function m(f, S) {
      var h, L;
      (L = (h = r.value).setItemToValGroup) == null || L.call(h, f, S);
    }
    function B(f, S) {
      var h, L;
      (L = (h = r.value).updateValGroup) == null || L.call(h, f, S);
    }
    function w(f) {
      var S, h;
      (h = (S = r.value).updateFormDataT) == null || h.call(S, f);
    }
    function C() {
      var f, S;
      (S = (f = r.value).validate) == null || S.call(f);
    }
    function b(f) {
      var S, h;
      (h = (S = r.value).reValidate) == null || h.call(S, f);
    }
    function T(f) {
      var S, h;
      f !== void 0 && (d.value = !!f, (h = (S = r.value).changeLoading) == null || h.call(S, d.value));
    }
    function U() {
      var f, S;
      return (S = (f = r.value).getValGroup) == null ? void 0 : S.call(f);
    }
    function A() {
      d.value = !0;
    }
    function k() {
      var f, S;
      a.hideCancelBt ? I() : (S = (f = r.value).submit) == null || S.call(f);
    }
    function V() {
      n.value = !0;
    }
    function I() {
      n.value = !1, we(() => {
        var f, S;
        d.value = !1, (S = (f = r.value).changeLoading) == null || S.call(f, !1);
      }, 1e3);
    }
    function O(f) {
      e(f ? "on-open" : "on-close");
    }
    return i({
      resetForm: p,
      refreshFormDom: u,
      reRenderForm: c,
      setItemToValGroup: m,
      updateValGroup: B,
      updateFormDataT: w,
      validate: C,
      reValidate: b,
      changeLoading: T,
      getValGroup: U,
      submit: k,
      open: V,
      close: I
    }), (f, S) => {
      const h = W("Button"), L = W("Modal");
      return _(), G(L, {
        class: he(["formModal", { hideFooter: a.hideFooter }]),
        title: a.title || y(x)("r.title"),
        modelValue: y(n),
        "onUpdate:modelValue": S[0] || (S[0] = (N) => Oe(n) ? n.value = N : null),
        "mask-closable": !1,
        "footer-hide": a.hideFooter,
        width: a.width,
        onOnVisibleChange: O
      }, {
        footer: Y(() => [
          Z(h, {
            onClick: k,
            class: "modal-save-btn",
            loading: a.btnLoading && y(d)
          }, {
            default: Y(() => [
              ke(te(a.okBtTxt || y(x)("r.confirm")), 1)
            ]),
            _: 1
          }, 8, ["loading"]),
          a.hideCancelBt ? se("", !0) : (_(), G(h, {
            key: 0,
            onClick: I,
            class: "modal-cancel-btn"
          }, {
            default: Y(() => [
              ke(te(a.cancelBtTxt || y(x)("r.cancel")), 1)
            ]),
            _: 1
          }))
        ]),
        default: Y(() => [
          Z(mt, et({
            ref_key: "formRRef",
            ref: r
          }, f.$attrs, {
            "form-data": a.formData,
            "label-width": a.labelWidth,
            btnLoading: a.btnLoading,
            onOnSubmit: A
          }), qe({ _: 2 }, [
            ye(y(s), (N) => ({
              name: N.slotName,
              fn: Y(({ valGroup: Q }) => [
                Ce(f.$slots, N.slotName, { valGroup: Q })
              ])
            }))
          ]), 1040, ["form-data", "label-width", "btnLoading"])
        ]),
        _: 3
      }, 8, ["title", "modelValue", "footer-hide", "class", "width"]);
    };
  }
}), Wt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AlCascaderMC: gl,
  AsyncCascader: vl,
  BtTablePage: cn,
  EditorPro: kl,
  FormGroup: Dn,
  FormModal: $n,
  FormR: mt,
  FullPop: pa,
  HeaderBt: Qt,
  Hello: ya,
  IconTxtBtn: ha,
  InputMap: hl,
  MonthRange: wl,
  Page404: ka,
  SearchForm: En,
  SelectInput: ml,
  ShowHidePanel: ja,
  ShowHidePanelB: Ya,
  SideMenu: $a,
  TableIconBtn: Ga,
  TableSearch: Xa,
  TableSetting: en,
  UploadGroup: bl
}, Symbol.toStringTag, { value: "Module" }));
function Vl(l) {
  const i = (...n) => Ke.apply(this, n), e = i("r.closePreview"), a = i("r.fullImg");
  let r = "previewImg" + Math.floor(Math.random() * 1e7);
  De.info({
    closable: !1,
    "transition-names": ["linear", "fade"],
    render: (n) => re(
      "div",
      {
        class: "previewModal",
        id: r
      },
      [
        re(
          "div",
          {
            class: "previewModalInner"
          },
          [
            re("img", {
              src: l,
              alt: a
            }),
            re(Jl, {
              type: "md-close",
              size: 20,
              title: e,
              class: "previewModalDelete",
              onClick() {
                De.remove();
              }
            })
          ]
        )
      ]
    )
  }), we(() => {
    var s, p, u, c, m, B;
    const n = (c = (u = (p = (s = document.getElementById(r)) == null ? void 0 : s.parentElement) == null ? void 0 : p.parentElement) == null ? void 0 : u.parentElement) == null ? void 0 : c.parentElement, d = (B = (m = document.getElementById(r)) == null ? void 0 : m.parentElement) == null ? void 0 : B.nextSibling;
    n && (n.style.height = "0"), n && (n.style.padding = "0"), d && (d.style.display = "none");
  }, 10);
}
let Ze = !1;
function Cl({
  height: l,
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
  const m = (...b) => Ke.apply(this, b);
  let w = (l && Number(l) - 90 > 100 ? Number(l) - 90 + "px" : 0) || "100px", C = K(a) === "String";
  De.warning({
    width: i,
    footerHide: !0,
    render: () => re(
      "div",
      {
        class: "customMessageBox",
        style: {
          height: w
        }
      },
      [
        re(
          "div",
          {
            class: "containerN"
          },
          [
            re(
              "div",
              {
                class: "titleN"
              },
              [
                re("span", e || m("r.info.title")),
                re(
                  vt,
                  {
                    class: "fr closeN",
                    type: "text",
                    onClick() {
                      Ze || De.remove();
                    }
                  },
                  () => re("i", {
                    class: "ivu-icon ivu-icon-ios-close",
                    style: {
                      fontSize: "30px"
                    }
                  })
                )
              ]
            ),
            re(
              "div",
              {
                class: "contentN",
                style: {
                  textAlign: C ? "center" : "left"
                }
              },
              [
                re("i", {
                  class: C && !p ? "ivu-icon ivu-icon-ios-alert-outline" : "hide",
                  style: {
                    fontSize: "60px",
                    color: "#f8bb86"
                  }
                }),
                re("div", { class: "msgBoxConO" }, a || m("r.info.text"))
              ]
            ),
            re(
              "div",
              {
                class: "footerN",
                style: {
                  textAlign: u || "center"
                }
              },
              [
                re(
                  vt,
                  {
                    class: "okBtN",
                    onClick(b) {
                      var T, U, A, k, V, I, O, f, S;
                      if (r && typeof r == "function") {
                        const h = r();
                        if (h && K(h) === "Promise") {
                          Ze = !0;
                          const L = (b == null ? void 0 : b.currentTarget) || (b == null ? void 0 : b.target);
                          L && ((U = (T = L.classList) == null ? void 0 : T.add) == null || U.call(T, "ivu-btn-loading"), (k = (A = L.nextSibling) == null ? void 0 : A.setAttribute) == null || k.call(A, "disabled", "disabled"), (S = (f = ((O = (I = (V = L.parentElement) == null ? void 0 : V.parentElement) == null ? void 0 : I.querySelector) == null ? void 0 : O.call(I, ".titleN .closeN")).classList) == null ? void 0 : f.add) == null || S.call(f, "disabled")), Promise.resolve(h).then(() => {
                            Ze = !1, De.remove();
                          }).catch(() => {
                            Ze = !1, De.remove();
                          });
                        } else
                          De.remove();
                      }
                    }
                  },
                  () => [
                    re("i", {
                      class: "ivu-load-loop ivu-icon ivu-icon-ios-loading"
                    }),
                    re("span", d || m("r.confirm"))
                  ]
                ),
                re(
                  vt,
                  {
                    class: ["cancelBtN", !c && "hide"],
                    onClick() {
                      Ze || (De.remove(), K(n) === "Function" && n && n());
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
function _l(l, i, e, a) {
  const r = (...n) => Ke.apply(this, n);
  xe.call(this, {
    title: l || r("r.info.title"),
    text: i || r("r.info.text"),
    icon: e || "warning",
    onOk: a,
    buttons: [r("r.cancel")]
  });
}
(() => {
  if (window.wangeditorMenuInit)
    return;
  class l {
    constructor() {
      Je(this, "title");
      Je(this, "iconSvg");
      Je(this, "tag");
      Je(this, "alwaysEnable");
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
        let c = u.children[0].children[1], m = u.children[0].children[1].children[0], B = u.children[0].children[0].children[0].children[1];
        const w = 40, C = 70, b = (k) => {
          if (k && k.type === "keyup") {
            let O = !1;
            if (k.key && (O = k.key !== "Enter"), O)
              return;
          }
          let V = k.target.value;
          if (V = Number(V), m.style && m.style.width === V + "px")
            return;
          const I = p.clientWidth;
          V < 250 ? (V = 250, k.target.value = 250) : V > I - w && (V = I - w, k.target.value = I - w), m.style.width = V + "px", localStorage.setItem("editorPreviewW", V);
        };
        B.addEventListener("blur", b), B.addEventListener("keyup", b);
        let T = u.children[0].children[0].children[0].children[3];
        const U = (k) => {
          if (k && k.type === "keyup") {
            let O = !1;
            if (k.key && (O = k.key !== "Enter"), O)
              return;
          }
          let V = k.target.value;
          if (V = Number(V), c.style && c.style.height === V + "px")
            return;
          const I = p.clientHeight;
          V < 300 ? (V = 300, k.target.value = 300) : V > I - C && (V = I - C, k.target.value = I - C), c.style.height = V + "px", localStorage.setItem("editorPreviewH", V);
        };
        T.addEventListener("blur", U), T.addEventListener("keyup", U), u.children[0].children[0].children[1].addEventListener("click", () => {
          u.style.display = "none";
        }), m.innerHTML = s, m.style.width = n + "px", c.style.height = d + "px", p.append(u);
      }
    }
  }
  const i = {
    key: "previewX",
    factory() {
      return new l();
    }
  };
  aa.registerMenu(i), window.wangeditorMenuInit = !0;
})();
const jt = {
  $fetch: Ue,
  fullScreenImgByDom: Ee,
  fullScreenImgPreview: Vl,
  $swal: xe,
  $swalConfirm: _l,
  messageBox: Cl,
  setInterval: fl,
  setTimeout: we,
  ...cl
}, zn = function(l, i = {}) {
  Ue.init(i.useStore || i.store, l), i.locale && ut.use(i.locale), i.i18n && ut.i18n(i.i18n), i.router && Ja(i.router), i.amap && hn(i.amap), i.notRegistryGlobal || (Object.keys(Wt).forEach((e) => {
    l.component(e) || l.component(e, Wt[e]);
  }), Object.keys(jt).forEach((e) => {
    l.config.globalProperties[e] = jt[e];
  })), l.directive("has") || l.directive("has", (e, a) => {
    a.value && !rl(a.value) && (e.style.display = "none");
  }), l.directive("loadmore") || l.directive("loadmore", (e, a) => {
    let r;
    a.arg ? r = e.querySelector("." + a.arg) : r = e.querySelector(".ivu-select-dropdown") || e, r.addEventListener("scroll", function() {
      r.scrollTop > 0 && r.scrollHeight - r.scrollTop <= r.clientHeight && a.value();
    });
  }), l.config.globalProperties.searchFormLabelWidth = 84, l.config.globalProperties.formModalLabelWidth = 140, l.config.globalProperties.formGroupLabelWidth = 160, l.config.globalProperties.iconTxtBtnIconSize = 17;
}, Gn = ut.use, Hn = ut.i18n, oo = {
  locale: Gn,
  i18n: Hn,
  install: zn,
  ...cl,
  ...Ba,
  $fetch: Ue,
  fullScreenImgByDom: Ee,
  fullScreenImgPreview: Vl,
  $swal: xe,
  $swalConfirm: _l,
  messageBox: Cl,
  setInterval: fl,
  setTimeout: we
};
export {
  Ue as $fetch,
  xe as $swal,
  _l as $swalConfirm,
  gl as AlCascaderMC,
  vl as AsyncCascader,
  cn as BtTablePage,
  kl as EditorPro,
  Dn as FormGroup,
  $n as FormModal,
  mt as FormR,
  pa as FullPop,
  Qt as HeaderBt,
  ya as Hello,
  ha as IconTxtBtn,
  hl as InputMap,
  wl as MonthRange,
  ka as Page404,
  En as SearchForm,
  ml as SelectInput,
  ja as ShowHidePanel,
  Ya as ShowHidePanelB,
  $a as SideMenu,
  Ga as TableIconBtn,
  Xa as TableSearch,
  en as TableSetting,
  bl as UploadGroup,
  Vt as clearObj,
  Ua as dataFilterOrToUrl,
  Ta as decimalDigitsLimit,
  oo as default,
  ol as downloadFileByFormSubmit,
  tl as downloadFileReaderFile,
  _a as emptyInput,
  ll as fakeALinkClick,
  La as fileExport,
  Ge as findCollection,
  dt as findPath,
  Ia as formDataHeadConfig,
  Ee as fullScreenImgByDom,
  Vl as fullScreenImgPreview,
  Oa as getColumnsKeys,
  nt as getFileSrc,
  It as getFileTypeByName,
  kt as getFileTypeIconByName,
  al as getStringWidth,
  rl as hasPermission,
  Ca as htmlDecode,
  Va as htmlEncode,
  Ka as htmlPrint,
  Fa as isEmptyValue,
  ot as isImgByFile,
  ul as isNaN,
  Ma as isNumberValue,
  de as isValidValue,
  Cl as messageBox,
  K as myTypeof,
  Sa as oneOf,
  Ct as removeEmptyValue,
  fl as setInterval,
  we as setTimeout,
  sl as setValByOption,
  dl as siblingElems,
  Aa as stopBubbling,
  Pa as stringLength,
  xa as toFormData,
  el as toHump,
  nl as toLine,
  il as tooltipManual,
  ct as trimObj
};
//# sourceMappingURL=plugRQw.js.map
