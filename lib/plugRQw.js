var Kt = Object.defineProperty;
var $t = (a, o, e) => o in a ? Kt(a, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[o] = e;
var Ze = (a, o, e) => ($t(a, typeof o != "symbol" ? o + "" : o, e), e);
import { getCurrentInstance as ml, defineComponent as se, resolveComponent as j, openBlock as x, createElementBlock as D, normalizeClass as Ae, normalizeStyle as Q, createBlock as J, createCommentVNode as he, renderSlot as Ie, ref as z, computed as P, withDirectives as xe, unref as h, createElementVNode as U, toDisplayString as H, createVNode as N, withCtx as G, createTextVNode as pe, vShow as Le, resolveDirective as tt, h as be, Fragment as me, renderList as ve, onBeforeMount as Dt, watch as ke, nextTick as Re, isRef as Fe, onMounted as Xe, withModifiers as Nt, mergeProps as al, onUnmounted as Et, shallowRef as kl, onBeforeUnmount as Gt, createSlots as Ye } from "vue";
import zt from "deepmerge";
import { isObject as Ht, isFunction as Wt, isPlainObject as qe, cloneDeep as ie, isEmpty as Ce, isBoolean as jt, isNumber as Je, debounce as qt, isString as at, last as ul, isEqual as ll, first as wl, indexOf as zl, findIndex as nt, remove as Jt, find as Hl } from "lodash-es";
import ol from "sweetalert";
import { Tooltip as Yt, TableColumnConfig as Xt, Radio as Zt, Input as Qt, Modal as Ne, Icon as ea, Button as bl } from "view-ui-plus";
import { useRouter as la, useRoute as ta } from "vue-router";
import { useI18n as aa } from "vue-i18n";
import Vl from "axios";
import na from "ar-cascader";
import { Toolbar as oa, Editor as ia } from "@wangeditor/editor-for-vue";
import Qe from "moment";
import { Boot as sa } from "@wangeditor/editor";
const ot = {
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
  function a(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }
  function o(e, ...t) {
    let u;
    return t.length === 1 && typeof t[0] == "object" && (u = t[0]), (!u || !u.hasOwnProperty) && (u = {}), e === void 0 ? "" : e.replace(ra, (n, c, s, p) => {
      let r;
      return e[p - 1] === "{" && e[p + n.length] === "}" ? s : (r = a(u, s) ? u[s] : null, r ?? "");
    });
  }
  return o;
}
const da = ua();
let dl = ot;
const ca = {
  zh: ot
};
let Wl, jl = {}, Be, fa = function(a, o) {
  if (typeof this == "object" && Reflect.has(this, "$t"))
    return this.$t(a, o);
  if (Be && Be.global)
    return Be.global.t(a, o);
  if (Be && Be.locale) {
    if (!jl[Be.locale] || Wl != Be.locale) {
      jl[Be.locale] = !0;
      let e = Be.getLocaleMessage(Be.locale) || {}, t = zt(ca[Be.locale], e, { clone: !0 });
      dl = t, Be.setLocaleMessage(Be.locale, t), Wl = Be.locale;
    }
    return Be.hlang(a, o);
  }
};
const $e = function(a, o) {
  let e = fa.apply(this, [a, o]);
  if (e != null)
    return e;
  const t = a.split(".");
  let u = dl;
  for (let n = 0, c = t.length; n < c; n++) {
    const s = t[n];
    if (e = u[s], n === c - 1)
      return da(e, o);
    if (!e)
      return "";
    u = e;
  }
  return "";
}, pa = function(a) {
  dl = a || dl;
}, ma = function(a) {
  Be = a;
}, cl = {
  use: pa,
  t: $e,
  i18n: ma
};
function S(a, o) {
  var t, u, n;
  const e = (n = (u = (t = ml()) == null ? void 0 : t.appContext) == null ? void 0 : u.config) == null ? void 0 : n.globalProperties;
  return $e.apply(e, [a, o]);
}
const it = /* @__PURE__ */ se({
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
      return x(), D("div", {
        class: Ae({ headerBtCTM: !0, withIconCTM: e.icon || e.withIcon, disabled: e.disabled }),
        style: Q({ color: e.color, borderLeftColor: e.borderColor }),
        onClick: t
      }, [
        e.icon ? (x(), J(c, {
          key: 0,
          size: e.iconSize,
          type: e.icon
        }, null, 8, ["size", "type"])) : he("", !0),
        Ie(u.$slots, "default")
      ], 6);
    };
  }
}), ha = { class: "headerTxtAM" }, ya = { class: "contentAM" }, va = /* @__PURE__ */ se({
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
    }), (r, d) => xe((x(), D("div", {
      class: "fullScreenPopBoxAM",
      style: Q(h(c))
    }, [
      U("div", {
        class: "headerAM",
        style: Q({ color: t.headerColor, backgroundColor: t.headerBg, fontSize: h(n) })
      }, [
        U("span", ha, H(r.title || h(S)("r.title")), 1),
        N(it, {
          icon: "md-return-left",
          onClick: p
        }, {
          default: G(() => [
            pe(H(h(S)("r.back")), 1)
          ]),
          _: 1
        })
      ], 4),
      U("div", ya, [
        Ie(r.$slots, "default")
      ])
    ], 4)), [
      [Le, h(u)]
    ]);
  }
}), ga = { class: "msg" }, ba = /* @__PURE__ */ se({
  __name: "Hello",
  setup(a) {
    let o = z("Greetings from Ricky.");
    return (e, t) => (x(), D("span", ga, H(h(o)), 1));
  }
});
function hl() {
  const { appContext: a } = ml();
  return a.config.globalProperties;
}
const ka = /* @__PURE__ */ se({
  __name: "IconTxtBtn",
  props: {
    name: {},
    icon: { default: "md-download" },
    size: { default: () => hl().iconTxtBtnIconSize },
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
      const s = j("Icon"), p = tt("has");
      return xe((x(), D("div", {
        class: Ae(["tabTopBtnsT", { disabled: e.disabled }]),
        onClick: u,
        style: Q({ "font-size": h(t) })
      }, [
        N(s, {
          type: e.icon,
          size: e.size
        }, null, 8, ["type", "size"]),
        pe(" " + H(e.name || h(S)("r.button")), 1)
      ], 6)), [
        [p, n.has]
      ]);
    };
  }
}), wa = { class: "c404K" }, Va = /* @__PURE__ */ U("div", { class: "t404" }, "404", -1), _a = { class: "ct404" }, Ca = { class: "p404" }, Aa = /* @__PURE__ */ se({
  __name: "Page404",
  setup(a) {
    const e = ml().appContext.config.globalProperties.$router;
    function t() {
      e.go(-1);
    }
    return (u, n) => {
      const c = j("Button");
      return x(), D("div", wa, [
        Va,
        U("div", _a, "UH OH! " + H(h(S)("r.pageNotFound")), 1),
        U("div", Ca, H(h(S)("r.notFoundMsg")), 1),
        N(c, {
          class: "bt404",
          onClick: t
        }, {
          default: G(() => [
            pe(H(h(S)("r.back")), 1)
          ]),
          _: 1
        })
      ]);
    };
  }
});
function Se(a, o, e) {
  const t = (...u) => $e.apply(this, u);
  return new Promise((u, n) => {
    if (typeof a == "object" && !Array.isArray(a)) {
      let c = t("r.confirm"), s = t("r.cancel"), p = !1, r = "swalConfirmBt", d = "swalCancelBt";
      const f = /^HTML.*Element$/;
      a.type && (a.icon = a.type) && delete a.type, a.content && (a.text = a.content) && delete a.content, a.className = a.className || "swalBoxX";
      let _ = "";
      a.text && f.test(K(a.text)) ? _ = "content" : a.text && K(a.text) === "String" && (_ = "text"), a.buttons && (typeof a.buttons == "object" && !Array.isArray(a.buttons) ? a.buttons.cancel && (a.buttons.cancel.text && (s = a.buttons.cancel.text) && (p = !0), a.buttons.cancel.className && (d = a.buttons.cancel.className), a.buttons.confirm.text && (c = a.buttons.confirm.text), a.buttons.confirm.className && (r = a.buttons.confirm.className)) : Array.isArray(a.buttons) && (a.buttons[0] && (s = a.buttons[0], p = !0), a.buttons[1] && (c = a.buttons[1]))), ol({
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
function st(a) {
  return a.replace(/_(\w)/g, function(o, e) {
    return e.toUpperCase();
  });
}
function Ba(a) {
  let o = document.createElement("div");
  return o.textContent !== void 0 ? o.textContent = a : o.innerText = a, o.innerHTML;
}
function xa(a) {
  let o = document.createElement("div");
  return o.innerHTML = a, o.innerText || o.textContent;
}
function sl(a) {
  return new Promise((o) => {
    let e = new FileReader();
    e.readAsDataURL(a), e.onloadend = () => {
      o(e.result);
    };
  });
}
function Ol(a) {
  return a.split(".").pop().toLocaleLowerCase();
}
function rl(a) {
  return K(a) === "String" && a.indexOf("image") > -1;
}
function _l(a) {
  const o = Ol(a);
  let e = "ios-document-outline";
  return ["gif", "jpg", "jpeg", "png", "bmp", "webp"].indexOf(o) > -1 ? e = "ios-image" : ["mp4", "m3u8", "rmvb", "avi", "swf", "3gp", "mkv", "flv"].indexOf(o) > -1 ? e = "ios-film" : ["mp3", "wav", "wma", "ogg", "aac", "flac"].indexOf(o) > -1 ? e = "ios-musical-notes" : ["doc", "txt", "docx", "pages", "epub", "pdf"].indexOf(o) > -1 ? e = "md-document" : ["numbers", "csv", "xls", "xlsx"].indexOf(o) > -1 ? e = "ios-stats" : ["keynote", "ppt", "pptx"].indexOf(o) > -1 && (e = "ios-videocam"), e;
}
function rt(a, o) {
  let e = document.createElement("a");
  e.href = o, e.download = a, ut(e);
}
function ut(a) {
  let o = document.createEvent("MouseEvents");
  o.initMouseEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), a.dispatchEvent(o);
}
function fl({
  group: a,
  condition: o,
  pathKey: e,
  childKey: t = "children",
  path: u = []
}) {
  if (a && Ht(a)) {
    if (Wt(o)) {
      if (qe(a)) {
        let n = a, c = ie(u);
        if (o(n))
          return e && n[e] && c.push(n[e]), c;
        if (n[t] && !Ce(n[t])) {
          e && n[e] && c.push(n[e]);
          let s = fl({
            group: n[t],
            condition: o,
            pathKey: e,
            childKey: t,
            path: c
          });
          if (!Ce(s))
            return s;
        }
      } else if (Array.isArray(a))
        for (let n of a) {
          let c = ie(u);
          if (o(n))
            return e && n[e] ? c.push(n[e]) : c.push(String(a.indexOf(n))), c;
          if (n[t] && n[t].length > 0) {
            e && n[e] ? c.push(n[e]) : c.push(String(a.indexOf(n)));
            let s = fl({
              group: n[t],
              condition: o,
              pathKey: e,
              childKey: t,
              path: c
            });
            if (!Ce(s))
              return s;
          }
        }
    } else if (Array.isArray(a))
      for (let n of a) {
        let c = ie(u);
        if (n === o)
          return c.push(String(a.indexOf(n))), c;
      }
  }
  return [];
}
function dt(a, o = 12) {
  if (K(a) === "String" && a.length > 0) {
    let e = document.createElement("span");
    e.style.fontSize = o + "px", e.style.fontFamily = "inherit", e.innerHTML = a, e.style.opacity = "0", e.style.position = "fixed", e.style.top = "3000px", document.body.append(e);
    const t = e.clientWidth;
    return document.body.removeChild(e), t;
  }
  return 0;
}
function Ta(a) {
  return a === "" ? null : a;
}
function Sa(a) {
  a = a || window.Event, a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0;
}
const Ia = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  downloadFileReaderFile: rt,
  emptyInput: Ta,
  fakeALinkClick: ut,
  findPath: fl,
  getFileSrc: sl,
  getFileTypeByName: Ol,
  getFileTypeIconByName: _l,
  getStringWidth: dt,
  htmlDecode: xa,
  htmlEncode: Ba,
  isImgByFile: rl,
  stopBubbling: Sa,
  toHump: st
}, Symbol.toStringTag, { value: "Module" }));
function K(a) {
  return Object.prototype.toString.call(a).replace(/\[object |]/g, "");
}
function ct(a) {
  return a.replace(/([A-Z])/g, "_$1").toLowerCase();
}
function pl(a) {
  let o = K(a);
  if (o === "Object") {
    for (let e in a)
      if (a.hasOwnProperty(e)) {
        let t = K(a[e]);
        t === "String" ? a[e] = a[e].trim() : (t === "Object" || t === "Array") && pl(a[e]);
      }
  } else if (o === "Array")
    for (let e = 0, t = a.length; e < t; e++) {
      let u = K(a[e]);
      u === "String" ? a[e] = a[e].trim() : (u === "Array" || u === "Object") && pl(a[e]);
    }
  return a;
}
function Cl(a, o = []) {
  if (K(a) === "Array")
    return a.forEach((e, t) => {
      switch (K(e)) {
        case "Array":
        case "Object":
          Cl(e);
          break;
        default:
          a[t] = null;
      }
    }), a;
  if (K(a) === "Object") {
    for (let e in a)
      if (a.hasOwnProperty(e)) {
        let t = !0;
        for (let u of o)
          if (u === e) {
            t = !1;
            break;
          }
        if (t)
          switch (K(a[e])) {
            case "Array":
            case "Object":
              Cl(a[e]);
              break;
            default:
              a[e] = null;
          }
      }
    return a;
  } else
    return a;
}
const La = {
  headers: {
    "Content-Type": "multipart/form-data"
  }
};
function Oa(a) {
  let o = new FormData();
  for (let e in a)
    a.hasOwnProperty(e) && a[e] !== null && o.append(e, a[e]);
  return o;
}
function He(a, o, e = !1) {
  if (!a || !o)
    return !1;
  let t, u = "notFoundC", n = function(c, s) {
    if (Array.isArray(c)) {
      if (K(s) === "Function" && s(c))
        return u = c, [];
      for (let p of c) {
        if (u !== "notFoundC")
          break;
        if (K(s) === "Function" && s(p) || p === s)
          return u = p, [c.indexOf(p)];
        if (K(p) === "Array" || K(p) === "Object") {
          let r = n(p, s);
          if (r !== void 0)
            return [c.indexOf(p), ...r];
        }
      }
    } else if (K(c) === "Object") {
      if (K(s) === "Function" && s(c))
        return u = c, [];
      for (let p in c) {
        if (u !== "notFoundC")
          break;
        if (c.hasOwnProperty(p)) {
          if (K(s) === "Function" && s(p) || c[p] === s)
            return u = c[p], [p];
          if (K(c[p]) === "Object" || K(c[p]) === "Array") {
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
function Ma(a, o) {
  for (let e = 0, t = o.length; e < t; e++)
    if (a === o[e])
      return !0;
  return !1;
}
function Ua(a, o = 2) {
  let e = new RegExp(`(^-?\\d+\\.\\d{${o}})(\\d+$)`), t = a && String(a) || "";
  return e.test(t) ? Number(t.replace(e, "$1")) : a;
}
function ft(a, o = {}, e = "get") {
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
  if (t.setAttribute("action", n), qe(o)) {
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
function Fa(a, o = {}, e = "get") {
  if (o.hasOwnProperty("columns") && (o.columns === "" || o.columns === null || o.columns === void 0)) {
    Se.call(this, {
      title: "需要导出的列不能为空",
      type: "warning"
    });
    return;
  }
  ft(a, o, e);
}
function Pa(a, o, e = !1) {
  let t;
  if (a && K(o) === "Array") {
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
function Ra(a) {
  return /^-?\d+(.\d+)?$/.test(a);
}
function pt(a, o = !1, e = "") {
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
    let c = dt(n), s = u.column._width;
    return n && c > s ? be(
      Yt,
      {
        style: {
          width: "100%"
        },
        content: n,
        maxWidth: s * 2
      },
      () => be(
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
    ) : be("span", o && !we(n) ? "--" : n);
  };
}
function Ka(a) {
  if (qe(a)) {
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
function $a(a) {
  return K(a) === "String" ? a.replace(/[^\x00-\xff]/g, "01").length : K(a) === "Number" ? (a += "", a.replace(/[^\x00-\xff]/g, "01").length) : 0;
}
function We({
  group: a,
  condition: o,
  key: e,
  val: t,
  childKey: u = "children"
}) {
  if (K(a) !== "Array" || K(o) !== "Function" || K(e) !== "String" || K(u) !== "String")
    return !1;
  a.forEach((n) => {
    o(n) && (K(t) === "Function" ? n[e] = t(n[e]) : n[e] = t), K(n[u]) === "Array" && n[u].length > 0 && We({
      group: n[u],
      condition: o,
      key: e,
      val: t,
      childKey: u
    });
  });
}
function mt(a) {
  let o = sessionStorage.getItem("btnPermissions");
  return o ? o.split(",").indexOf(a) > -1 : !1;
}
function ht(a) {
  return K(a) === "Number" && String(a) === "NaN";
}
function Da(a, o = !1, e = !1) {
  if (K(a) !== "Object")
    return a;
  let t = Object.assign(a, {}), u = "";
  for (let n in t)
    if (t.hasOwnProperty(n)) {
      let c = t[n];
      c === void 0 || c === "" || K(c) === "String" && c.trim() === "" || c === null || ht(c) ? e ? o ? u += n + "=&" : t[n] = "" : delete t[n] : o && (u += n + "=" + c + "&");
    }
  return o ? u.length > 0 ? u.substring(0, u.length - 1) : "" : t;
}
function Al(a) {
  let o = {};
  if (Array.isArray(a)) {
    o = [];
    for (let e of a)
      Array.isArray(e) || qe(e) ? o.push(Al(e)) : we(e) && o.push(e);
  } else if (qe(a))
    for (let e in a)
      a.hasOwnProperty(e) && (Array.isArray(a[e]) || qe(a[e]) ? o[e] = Al(a[e]) : we(a[e]) && (o[e] = a[e]));
  return o;
}
function Na(a) {
  const o = window.open();
  if (o) {
    o.document.write(a);
    let e = setTimeout(() => {
      o.print(), window.clearTimeout(e), e = null;
    }, 10);
  }
}
function yt(a) {
  let o = [], e = a;
  for (; a.previousSibling && (a = a.previousSibling); )
    a.nodeType === 1 && o.push(a);
  for (; e.nextSibling && (e = e.nextSibling); )
    e.nodeType === 1 && o.push(e);
  return o;
}
const vt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clearObj: Cl,
  dataFilterOrToUrl: Da,
  decimalDigitsLimit: Ua,
  downloadFileByFormSubmit: ft,
  fileExport: Fa,
  findCollection: He,
  formDataHeadConfig: La,
  getColumnsKeys: Pa,
  hasPermission: mt,
  htmlPrint: Na,
  isEmptyValue: Ka,
  isNaN: ht,
  isNumberValue: Ra,
  isValidValue: we,
  myTypeof: K,
  oneOf: Ma,
  removeEmptyValue: Al,
  setValByOption: We,
  siblingElems: yt,
  stringLength: $a,
  toFormData: Oa,
  toLine: ct,
  tooltipManual: pt,
  trimObj: pl
}, Symbol.toStringTag, { value: "Module" })), Ea = { class: "groupBoxRP" }, Ga = ["onClick"], za = /* @__PURE__ */ se({
  __name: "SideMenuGroup",
  props: {
    data: { default: () => [] },
    pathName: { default: "" }
  },
  setup(a) {
    const o = a, e = la();
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
      let p = s.parentNode, r = yt(p);
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
      return x(), D("ul", Ea, [
        (x(!0), D(me, null, ve(o.data, (p, r) => (x(), D("li", {
          class: Ae({ dropItemRP: p.children }),
          key: p.path + r
        }, [
          U("div", {
            class: Ae(["menuTxtR", t(p)]),
            onClick: (d) => u(d, p),
            style: Q({ paddingLeft: p.level * 20 + "px" })
          }, H(p.name || "-- no name --"), 15, Ga),
          p.children ? (x(), J(s, {
            key: 0,
            data: p.children,
            "path-name": o.pathName
          }, null, 8, ["data", "path-name"])) : he("", !0)
        ], 2))), 128))
      ]);
    };
  }
}), Ha = { class: "menuListR" }, Wa = /* @__PURE__ */ se({
  __name: "SideMenu",
  props: {
    data: { default: () => [] }
  },
  emits: ["on-change"],
  setup(a, { emit: o }) {
    const e = a, t = ta(), u = z(!0), n = z(), c = z(), s = P(() => u.value ? S("r.hideMenu") : S("r.showMenu")), p = P(() => u.value ? "ios-arrow-back" : "ios-arrow-forward");
    Dt(() => {
      let f = localStorage.getItem("menuDisplayR") || "";
      f !== "" ? u.value = JSON.parse(f) : (u.value = !0, localStorage.setItem("menuDisplayR", JSON.stringify(!0)));
    }), ke(
      () => t.path,
      (f) => {
        n.value = f, Re(d);
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
      return x(), D("div", {
        ref_key: "menuRef",
        ref: c,
        class: "menuBoxRP"
      }, [
        xe(U("div", Ha, [
          N(za, {
            data: e.data,
            pathName: h(n)
          }, null, 8, ["data", "pathName"])
        ], 512), [
          [Le, h(u)]
        ]),
        N(b, {
          type: h(p),
          size: 25,
          class: Ae([{ showIco: !h(u) }, "menuShowHideIco"]),
          title: h(s),
          onClick: r,
          color: h(u) ? "#fff" : "#333"
        }, null, 8, ["type", "class", "title", "color"])
      ], 512);
    };
  }
}), ja = ["title"], qa = /* @__PURE__ */ se({
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
      const c = j("Icon"), s = tt("has");
      return xe((x(), D("div", {
        class: Ae(["tableBtnsG", { disabled: e.disabled }]),
        onClick: t,
        title: e.title || h(S)("r.button")
      }, [
        N(c, {
          type: e.icon,
          size: e.size
        }, null, 8, ["type", "size"])
      ], 10, ja)), [
        [s, e.has]
      ]);
    };
  }
}), Ja = { class: "contentX" }, Ya = { class: "arrowA" }, Bl = /* @__PURE__ */ se({
  __name: "ShowHidePanel",
  props: {
    bg: {}
  },
  setup(a) {
    const o = a, e = z(!0), t = P(() => e ? "background:" + o.bg || "transparent" : "");
    return (u, n) => {
      const c = j("Icon");
      return x(), D("div", {
        style: Q(h(t))
      }, [
        xe(U("div", Ja, [
          Ie(u.$slots, "default")
        ], 512), [
          [Le, h(e)]
        ]),
        U("div", Ya, [
          U("div", {
            class: "btA",
            onClick: n[0] || (n[0] = (s) => e.value = !h(e))
          }, [
            N(c, {
              type: h(e) ? "ios-arrow-up" : "ios-arrow-down",
              size: "20"
            }, null, 8, ["type"])
          ])
        ])
      ], 4);
    };
  }
}), Xa = { class: "contentZ" }, Za = /* @__PURE__ */ se({
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
    return (n, c) => (x(), D("div", {
      style: Q(h(u))
    }, [
      xe(U("div", Xa, [
        Ie(n.$slots, "default")
      ], 512), [
        [Le, h(t)]
      ])
    ], 4));
  }
});
let xl = [], Tl = [];
const Qa = function(a) {
  a && a.beforeEach ? a.beforeEach(() => {
    xl.map((o) => {
      window.clearTimeout(o);
    }), Tl.map((o) => {
      window.clearInterval(o);
    }), xl.length = 0, Tl.length = 0;
  }) : console.warn(
    "安装库plug-r-qw时未传入router，调用该库的定时器方法产生的定时器将不能自动销毁，请传入router：Vue.use(plugRQw,{router,...})"
  );
}, Te = function(a, o) {
  let e = window.setTimeout(a, o);
  return xl.push(e), e;
}, gt = function(a, o) {
  let e = window.setInterval(a, o);
  return Tl.push(e), e;
}, en = /* @__PURE__ */ se({
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
      t || (t = !0, o("on-search", u.value), Te(() => {
        t = !1;
      }, 2e3));
    }
    return (p, r) => {
      const d = j("Input"), f = j("icon");
      return x(), D("div", {
        class: "tableSearchV",
        style: Q({ position: e.fixed ? "fixed" : "absolute", right: e.right, top: e.top })
      }, [
        Ie(p.$slots, "default", {}, () => [
          N(d, {
            modelValue: h(u),
            "onUpdate:modelValue": r[0] || (r[0] = (_) => Fe(u) ? u.value = _ : null),
            style: Q({ width: e.width }),
            search: "",
            onOnSearch: s,
            class: "searchInputC",
            placeholder: e.placeholder || h(S)("r.pInput")
          }, null, 8, ["modelValue", "style", "placeholder"])
        ]),
        xe(U("span", {
          class: "sbt",
          onClick: r[1] || (r[1] = (_) => n.value = !h(n)),
          style: Q({ color: e.btnColor })
        }, [
          N(f, {
            type: h(c),
            color: e.btnColor
          }, null, 8, ["type", "color"]),
          pe(H(h(S)("r.adSearch")), 1)
        ], 4), [
          [Le, e.showBtn]
        ])
      ], 4);
    };
  }
}), ln = { class: "tabSetF" }, tn = { class: "topCheck" }, an = /* @__PURE__ */ se({
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
    const e = a, t = z(!0), u = z(!1), n = z(!1), c = z([]), s = P(() => {
      let y = S("r.unknown");
      return e.modelValue.length > c.value.length && (c.value = ie(e.modelValue)), c.value.map((V) => {
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
    }), { locale: d } = aa();
    Xe(() => {
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
    function v() {
      t.value ? u.value = !1 : u.value = !u.value, t.value = !1, u.value ? r.value = s.value.map((y) => y.label) : r.value = p.value.map((y) => y.label);
    }
    return (y, V) => {
      const T = j("Icon"), w = j("Checkbox"), C = j("CheckboxGroup");
      return x(), D("div", ln, [
        U("div", {
          class: "tabSetBt",
          onClick: _
        }, [
          N(T, {
            type: "md-settings",
            size: "17"
          }),
          U("span", null, H(h(S)("r.tabSetting")), 1)
        ]),
        xe(U("div", {
          class: "tabSetCard",
          style: Q({ top: e.top, right: e.right, width: e.width, backgroundColor: e.bg })
        }, [
          U("div", tn, [
            N(w, {
              indeterminate: h(t),
              modelValue: h(u),
              "onUpdate:modelValue": V[0] || (V[0] = (B) => Fe(u) ? u.value = B : null),
              onClick: Nt(v, ["prevent"])
            }, {
              default: G(() => [
                pe(H(h(S)("r.all")), 1)
              ]),
              _: 1
            }, 8, ["indeterminate", "modelValue", "onClick"]),
            U("span", {
              style: { cursor: "pointer", float: "right" },
              onClick: b
            }, H(h(S)("r.confirm")), 1)
          ]),
          N(C, {
            modelValue: h(r),
            "onUpdate:modelValue": V[1] || (V[1] = (B) => Fe(r) ? r.value = B : null)
          }, {
            default: G(() => [
              (x(!0), D(me, null, ve(h(s), (B, I) => (x(), J(w, {
                class: "setItem",
                label: B && B.label,
                key: "tabSet_" + e.sKey + I,
                disabled: B && B.disabled
              }, null, 8, ["label", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["modelValue"])
        ], 4), [
          [Le, h(n)]
        ])
      ]);
    };
  }
});
let ze = 0, tl = document.createElement("div");
tl.setAttribute("class", "spinModal");
tl.innerHTML = '<div class="loader"><svg class="circular" viewBox="25 25 50 50"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10" /></svg></div>';
window.onload = function() {
  document.getElementsByTagName("body")[0].append(tl);
};
function ql(a) {
  a ? tl.classList.add("show") : tl.classList.remove("show");
}
function bt(a) {
  let o = ze;
  a ? ze++ : ze > 0 && ze--, o !== ze && (ze === 0 ? ql(!1) : o === 0 && ql(!0));
}
const nn = window.location.origin;
let je = null;
const Jl = (...a) => $e.apply(je, a);
let Oe = Vl.create({
  baseURL: nn,
  withCredentials: !0
  // 允许携带cookie
});
function on() {
  console.info("store为空，请在安装插件时传入store实例：Vue.use(plugRQw,{store:store})，Pinia传{store:useStore}");
}
Oe.interceptors.request.use(
  (a) => a,
  (a) => Promise.reject(a)
);
function Yl() {
  var a, o;
  if (Oe.store)
    if (typeof Oe.store == "function") {
      const e = Oe.store();
      e.logout && e.logout();
    } else
      (o = (a = Oe.store) == null ? void 0 : a.dispatch) == null || o.call(a, "logout");
  else
    on();
}
Oe.interceptors.response.use(
  (a) => {
    var o, e;
    return je && (((o = a == null ? void 0 : a.data) == null ? void 0 : o.code) === 403 || ((e = a == null ? void 0 : a.data) == null ? void 0 : e.code) === 409) && je.messageBox({
      content: Jl("r.http." + a.data.code),
      onOk: Yl
    }), a;
  },
  (a) => {
    var o, e;
    return je && (((o = a == null ? void 0 : a.response) == null ? void 0 : o.status) === 403 || ((e = a == null ? void 0 : a.response) == null ? void 0 : e.status) === 409) && je.messageBox({
      content: Jl("r.http." + a.response.status),
      onOk: Yl
    }), console.warn("请求出错：", a), Promise.reject(a);
  }
);
function De(a, o, e, t) {
  t && t.spin && bt(!1);
  let u = !0, n = a && a.data;
  if (n) {
    e = e || [];
    for (let c of e)
      n = n[c], u = u && n;
    return u ? n : (o && console.warn(o), !1);
  }
  return o && console.warn(o), !1;
}
function sn(a, o, e, t, u, n, c) {
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
      n && n.spin && bt(!0);
      let d = o;
      if (window && window.hasOwnProperty("g")) {
        const b = window.g;
        let v = Object.keys(b).filter((y) => y.indexOf("URL") > -1).map((y) => y.replace("URL", ""));
        for (let y of v) {
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
      let _ = a.toLowerCase();
      sn(_, d, f, t, u, n, c).then((b) => {
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
    Oe.store = a, je = o.config.globalProperties;
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
  all: Vl.all,
  spread: Vl.spread,
  config: Oe
}, rn = {
  class: "btTablePage fullHeight",
  ref: "tableBox"
}, un = { class: "topBtn" }, dn = { class: "fullHeight relativeBox" }, cn = {
  ref: "tableContainerLOI",
  class: "fullFlowContent"
}, fn = { class: "pageContainer" }, pn = 300, Sl = /* @__PURE__ */ se({
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
    const t = a, { globalProperties: u } = ml().appContext.config;
    ({ ...{
      showSettingCheck: !1,
      disableShowSetting: !1
    }, ...Xt });
    const c = u.pageSizes || [10, 20, 30, 40], s = z(t.data), p = z(
      localStorage.getItem("btPageSize") && Number(localStorage.getItem("btPageSize")) || t.pageSize
    ), r = z(1), d = z(0);
    let f = [], _, b, v = t.orderKey, y = t.orderDefault;
    const V = P(() => {
      for (let R of t.columns)
        if (R.fixed)
          return !0;
      return !1;
    }), T = P(() => t.selectionFixed || V.value), w = P(() => {
      let R = {
        ...t.searchData,
        current: r.value,
        size: p.value
      };
      return t.sortable === "custom" && (t.orderKeyFormat === "underline" ? R[y] = ct(v) : t.orderKeyFormat === "camelcase" && (R[y] = st(v))), R;
    }), C = P(() => {
      let R = t.columns.filter((F) => F.type !== "selection");
      if (t.selection || t.radio) {
        let F;
        t.radio ? F = {
          title: " ",
          width: 65,
          render: (fe, ue) => be(Zt, {
            value: ue.row.btChecked
          })
        } : F = {
          type: "selection",
          width: 60
        }, t.selectionFixed && (F.fixed = t.selectionFixed), R.unshift(F);
      }
      return R.forEach((F) => {
        t.sortable === "custom" ? F.key && F.sortable !== !0 && F.sortable !== !1 && (F.sortable = "custom") : F.sortable = !1, F.align || (F.align = "center");
      }), t.tableEmptyTdHandle && R.forEach((F) => {
        F.key && F.render === void 0 && (F.tooltip ? F.render = pt(F.key, !0) : F.render = (fe, ue) => {
          let Ve = ue.row[F.key];
          return fe("span", Ve === "" || Ve === null || Ve === void 0 ? "--" : Ve);
        });
      }), R;
    }), B = P({
      get() {
        return s.value.map((R, F) => ({
          btKey: "bt-" + F,
          btChecked: !1,
          ...R
        }));
      },
      set(R) {
        s.value = R;
      }
    }), I = P(() => f.map((R) => R.id)), M = P(() => f.map((R) => R.btKey)), m = z();
    ke(() => t.searchData, L, { deep: !0 });
    function L() {
      r.value = 1, Pe();
    }
    function g() {
      t.initData && Pe();
    }
    function O(R) {
      s.value.unshift(ie(R)), Te(() => {
        var F, fe;
        (fe = (F = m.value) == null ? void 0 : F.clickCurrentRow) == null || fe.call(F, 0);
      }, 100);
    }
    function E(R, F, fe) {
      let ue = null;
      if (jt(F) && F ? ue = b : Je(F) && (ue = F), ue !== null) {
        let Ve = s.value[ue];
        for (let Z in R)
          R.hasOwnProperty(Z) && (Ve[Z] = R[Z]);
        fe && Te(() => {
          var Z, Me;
          (Me = (Z = m.value) == null ? void 0 : Z.clickCurrentRow) == null || Me.call(Z, ue);
        }, 10);
      }
    }
    function ee(R) {
      s.value.splice(R, 1), Te(() => {
        var F, fe;
        (fe = (F = m.value) == null ? void 0 : F.clickCurrentRow) == null || fe.call(F, 0);
      }, 100);
    }
    function ae(R, F) {
      var fe, ue;
      R.btChecked && t.radio || (t.selection || t.radio) && t.rowClickSelect && ((ue = (fe = m.value) == null ? void 0 : fe.toggleSelect) == null || ue.call(fe, F));
    }
    function q(R, F) {
      _ = F.btKey, b = Number(F.btKey.split("-")[1]), t.radio && (s.value[b].btChecked = !0);
    }
    function ce(R) {
      if (t.radio)
        for (let F of B.value)
          F.btKey !== _ && (s.value[Number(F.btKey.split("-")[1])].btChecked = !1);
      f = R, e("on-selection-change", R);
    }
    function ye() {
      return ie(f);
    }
    function W(R) {
      r.value = R, Pe();
    }
    function ge(R) {
      p.value = R, localStorage.setItem("btPageSize", String(R)), r.value === 1 && Pe();
    }
    function ne({ key: R, order: F }) {
      y === "normal" ? (v = t.orderKey, y = t.orderDefault) : (v = R, y = F), r.value = 1, re();
    }
    function oe() {
      var R, F;
      if (t.radio) {
        if (M.value.length > 0 && B.value.length > 0) {
          let fe = M.value[0].split("-")[1];
          B.value[fe].btChecked = !1;
        }
      } else
        (F = (R = m.value) == null ? void 0 : R.selectAll) == null || F.call(R, !1);
      f.length > 0 && (f = [], e("on-selection-change", [])), _ = null, b = null;
    }
    function de() {
      s.value = [], oe(), r.value = 1, d.value = 0;
    }
    function re(R, F, fe) {
      return new Promise((ue) => {
        R && (y = R), F && (v = F), t.url ? Ke.get(t.url, w.value, "", [], { spin: t.getDataLoading }).then((Ve) => {
          var Me, nl;
          let Z;
          fe || oe(), typeof t.dataHandler == "function" ? Z = t.dataHandler(Ve) : Z = Ve, Z.data ? (Z.data.records || Z.data.records === null ? s.value = Z.data.records || [] : Z.data.page ? (Z.data.page.records || Z.data.page.records === null) && (s.value = Z.data.page.records || []) : Z.data.data ? (Z.data.data.records || Z.data.data.records === null) && (s.value = Z.data.data.records || []) : s.value = Z.data, d.value = ((Me = Z.data.page) == null ? void 0 : Me.total) || ((nl = Z.data.data) == null ? void 0 : nl.total) || Z.data.total || Z.total || 0, d.value === 0 && r.value > 1 && s.value && s.value.length === 0 ? r.value = 1 : r.value > 1 && d.value <= (r.value - 1) * p.value && (r.value--, Re(function() {
            re(R, F);
          })), e("on-data-change", Z), ue(Z)) : (console.warn("请求返回数据有误，无法使用"), de(), e("on-data-change", Z));
        }).catch((Ve) => {
          console.warn(Ve), oe(), de(), e("on-data-change", Ve);
        }) : console.warn("没有有效的请求地址，无法获取表格数据");
      });
    }
    function Pe(R, F, fe) {
      t.radio && (R || t.rowClickNum !== -1) ? re(F, fe, R).then(() => {
        s.value.length > 0 && Te(() => {
          var ue, Ve, Z, Me;
          R ? (Ve = (ue = m.value) == null ? void 0 : ue.clickCurrentRow) == null || Ve.call(ue, b || 0) : (Me = (Z = m.value) == null ? void 0 : Z.clickCurrentRow) == null || Me.call(Z, t.rowClickNum);
        }, 10);
      }) : re();
    }
    return Xe(g), o({
      selectedIds: I,
      addRow: O,
      setRowData: E,
      deleteRow: ee,
      getSelected: ye,
      clearSelect: oe,
      clearTableData: de,
      getTableData: re,
      getDataAndClickRow: Pe
    }), (R, F) => {
      const fe = j("Table"), ue = j("Page");
      return x(), D("div", rn, [
        xe(U("div", un, [
          Ie(R.$slots, "tableSetting"),
          Ie(R.$slots, "topMsg"),
          Ie(R.$slots, "topBtnGroup")
        ], 512), [
          [Le, t.showTopRow]
        ]),
        U("div", {
          class: Ae(["tableContainer fullHeight", { noTop: !t.showTopRow, noPage: t.noPage }])
        }, [
          U("div", dn, [
            U("div", cn, [
              N(fe, al({
                ref_key: "tableRef",
                ref: m
              }, R.$attrs, {
                height: h(T) && pn || null,
                class: { noBorderTable: t.noBorderTable, fullHeightTable: !h(T), lightHeadO: t.lightHead },
                columns: h(C),
                data: h(B),
                "highlight-row": t.radio || t.highlightRow,
                onOnSelect: q,
                onOnSelectionChange: ce,
                onOnSortChange: ne,
                onOnRowClick: ae
              }), null, 16, ["height", "class", "columns", "data", "highlight-row"])
            ], 512)
          ])
        ], 2),
        xe(U("div", fn, [
          N(ue, {
            modelValue: h(r),
            "onUpdate:modelValue": F[0] || (F[0] = (Ve) => Fe(r) ? r.value = Ve : null),
            "page-size-opts": h(c),
            total: h(d),
            "page-size": h(p),
            "show-sizer": "",
            "show-total": "",
            showElevator: !t.noElevator,
            size: t.pageComponentSize,
            onOnChange: W,
            onOnPageSizeChange: ge
          }, null, 8, ["modelValue", "page-size-opts", "total", "page-size", "showElevator", "size"])
        ], 512), [
          [Le, !t.noPage]
        ])
      ], 512);
    };
  }
}), kt = /* @__PURE__ */ se({
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
    const p = qt((r) => {
      o("on-change", r);
    }, 500);
    return (r, d) => {
      const f = j("Option"), _ = j("Select"), b = j("Input");
      return x(), D("div", null, [
        N(_, {
          modelValue: h(t),
          "onUpdate:modelValue": d[0] || (d[0] = (v) => Fe(t) ? t.value = v : null),
          style: Q(h(n)),
          disabled: !!e.disabled,
          transfer: ""
        }, {
          default: G(() => [
            (x(!0), D(me, null, ve(e.selectOption, (v, y) => (x(), J(f, {
              value: v.val,
              key: "selectInputOp" + v.value + y,
              style: Q({ textAlign: e.labelTextAlign })
            }, {
              default: G(() => [
                pe(H(v.label), 1)
              ]),
              _: 2
            }, 1032, ["value", "style"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue", "style", "disabled"]),
        N(b, {
          modelValue: h(u),
          "onUpdate:modelValue": d[1] || (d[1] = (v) => Fe(u) ? u.value = v : null),
          placeholder: e.placeholder || h(S)("r.pInput"),
          style: Q(h(c)),
          clearable: e.clearable,
          disabled: !!e.disabled,
          onOnChange: s
        }, null, 8, ["modelValue", "placeholder", "style", "clearable", "disabled"])
      ]);
    };
  }
});
var mn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function hn(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var wt = { exports: {} };
(function(a, o) {
  (function(e, t) {
    a.exports = t();
  })(mn, function() {
    function e(f) {
      var _ = [];
      return f.AMapUI && _.push(t(f.AMapUI)), f.Loca && _.push(u(f.Loca)), Promise.all(_);
    }
    function t(f) {
      return new Promise(function(_, b) {
        var v = [];
        if (f.plugins)
          for (var y = 0; y < f.plugins.length; y += 1)
            c.AMapUI.plugins.indexOf(f.plugins[y]) == -1 && v.push(f.plugins[y]);
        if (s.AMapUI === n.failed)
          b("前次请求 AMapUI 失败");
        else if (s.AMapUI === n.notload) {
          s.AMapUI = n.loading, c.AMapUI.version = f.version || c.AMapUI.version, y = c.AMapUI.version;
          var V = document.body || document.head, T = document.createElement("script");
          T.type = "text/javascript", T.src = "https://webapi.amap.com/ui/" + y + "/main.js", T.onerror = function(w) {
            s.AMapUI = n.failed, b("请求 AMapUI 失败");
          }, T.onload = function() {
            if (s.AMapUI = n.loaded, v.length)
              window.AMapUI.loadUI(v, function() {
                for (var w = 0, C = v.length; w < C; w++) {
                  var B = v[w].split("/").slice(-1)[0];
                  window.AMapUI[B] = arguments[w];
                }
                for (_(); p.AMapUI.length; )
                  p.AMapUI.splice(0, 1)[0]();
              });
            else
              for (_(); p.AMapUI.length; )
                p.AMapUI.splice(0, 1)[0]();
          }, V.appendChild(T);
        } else
          s.AMapUI === n.loaded ? f.version && f.version !== c.AMapUI.version ? b("不允许多个版本 AMapUI 混用") : v.length ? window.AMapUI.loadUI(v, function() {
            for (var w = 0, C = v.length; w < C; w++) {
              var B = v[w].split("/").slice(-1)[0];
              window.AMapUI[B] = arguments[w];
            }
            _();
          }) : _() : f.version && f.version !== c.AMapUI.version ? b("不允许多个版本 AMapUI 混用") : p.AMapUI.push(function(w) {
            w ? b(w) : v.length ? window.AMapUI.loadUI(v, function() {
              for (var C = 0, B = v.length; C < B; C++) {
                var I = v[C].split("/").slice(-1)[0];
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
          var v = c.Loca.version, y = c.AMap.version.startsWith("2"), V = v.startsWith("2");
          if (y && !V || !y && V)
            b("JSAPI 与 Loca 版本不对应！！");
          else {
            y = c.key, V = document.body || document.head;
            var T = document.createElement("script");
            T.type = "text/javascript", T.src = "https://webapi.amap.com/loca?v=" + v + "&key=" + y, T.onerror = function(w) {
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
          var v = f.key, y = f.version, V = f.plugins;
          v ? (window.AMap && location.host !== "lbs.amap.com" && b("禁止多种API加载方式混用"), c.key = v, c.AMap.version = y || c.AMap.version, c.AMap.plugins = V || c.AMap.plugins, s.AMap = n.loading, y = document.body || document.head, window.___onAPILoaded = function(w) {
            if (delete window.___onAPILoaded, w)
              s.AMap = n.failed, b(w);
            else
              for (s.AMap = n.loaded, e(f).then(function() {
                _(window.AMap);
              }).catch(b); r.length; )
                r.splice(0, 1)[0]();
          }, V = document.createElement("script"), V.type = "text/javascript", V.src = "https://webapi.amap.com/maps?callback=___onAPILoaded&v=" + c.AMap.version + "&key=" + v + "&plugin=" + c.AMap.plugins.join(","), V.onerror = function(w) {
            s.AMap = n.failed, b(w);
          }, y.appendChild(V)) : b("请填写key");
        } else if (s.AMap == n.loaded)
          if (f.key && f.key !== c.key)
            b("多个不一致的 key");
          else if (f.version && f.version !== c.AMap.version)
            b("不允许多个版本 JSAPI 混用");
          else {
            if (v = [], f.plugins)
              for (y = 0; y < f.plugins.length; y += 1)
                c.AMap.plugins.indexOf(f.plugins[y]) == -1 && v.push(f.plugins[y]);
            v.length ? window.AMap.plugin(v, function() {
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
})(wt);
var yn = wt.exports;
const vn = /* @__PURE__ */ hn(yn);
let Il = { securityJsCode: "", key: "" };
function gn({ securityJsCode: a, key: o }) {
  Il.securityJsCode = a, Il.key = o;
}
function bn(a) {
  return Il[a];
}
const Vt = /* @__PURE__ */ se({
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
    }), u = P(() => Je(e.width) ? e.width + "px" : e.width), n = P(() => Je(e.height) ? e.height + "px" : e.height ? e.height : Je(e.width) ? e.width * 0.66 + "px" : "200px"), c = P(() => ({
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
          if (!v || !y)
            return;
          T({
            lng: C.lng,
            lat: C.lat,
            name: C.name
          });
        }
      }
    );
    const p = "mapId" + Math.floor(Math.random() * 1e9), r = z(null), d = z(null);
    let f;
    function _() {
      d.value && d.value.clientHeight < 10 || !d.value ? Te(_, 300) : Te(V, 100);
    }
    let b, v, y;
    function V() {
      vn.load({
        key: bn("key"),
        version: "2.0",
        plugins: ["AMap.AutoComplete", "AMap.Geocoder"]
      }).then((C) => {
        b = C, v = new b.Map(p).on("complete", () => {
          var I, M, m, L;
          y = new b.Geocoder(), (I = e.modelValue) != null && I.lng && ((M = e.modelValue) != null && M.lat) && T({
            lng: e.modelValue.lng,
            lat: e.modelValue.lat,
            name: e.modelValue.name
          });
          const B = (L = (m = r.value) == null ? void 0 : m.$el) == null ? void 0 : L.children;
          B && B.length > 1 && new b.AutoComplete({
            input: B[1]
          }).on("select", (g) => {
            var O, E, ee;
            (O = g == null ? void 0 : g.poi) != null && O.name && ((E = g.poi.location) != null && E.lng && ((ee = g.poi.location) != null && ee.lat) ? (T({
              name: g.poi.name,
              lng: g.poi.location.lng,
              lat: g.poi.location.lat
            }), t.value = {
              name: g.poi.name,
              lng: g.poi.location.lng,
              lat: g.poi.location.lat
            }) : v.setCity(g.poi.name, () => {
              let ae = v.getCenter();
              T({
                name: g.poi.name,
                lng: ae.lng,
                lat: ae.lat
              }), t.value = {
                name: g.poi.name,
                lng: ae.lng,
                lat: ae.lat
              };
            })), o("on-change", t.value);
          }), v.on("hotspotclick", (g) => {
            T({
              name: g.name,
              lng: g.lnglat.lng,
              lat: g.lnglat.lat
            }), t.value = {
              name: g.name,
              lng: g.lnglat.lng,
              lat: g.lnglat.lat
            };
          });
        });
      });
    }
    function T({ lng: C, lat: B, name: I }) {
      v.clearMap();
      let M = new b.LngLat(C, B), m = new b.Marker({
        map: v,
        position: M,
        draggable: !0
      });
      v.add(m), w(C, B), m.on("dragend", () => {
        let L = m.getPosition();
        t.value = {
          name: I || null,
          lng: L.lng,
          lat: L.lat
        }, w(C, B);
      }), m.on("click", (L) => {
        f && f.open(v, L.target.getPosition());
      }), v.setFitView();
    }
    function w(C, B) {
      y.getAddress([C, B], (I, M) => {
        I === "complete" && M.info === "OK" && M.regeocode && M.regeocode.formattedAddress ? f = new b.InfoWindow({
          //创建信息窗体
          isCustom: !0,
          content: '<div class="mapInfoWindowIKJ">' + M.regeocode.formattedAddress + "</div>",
          offset: new b.Pixel(16, -45),
          closeWhenClickMap: !0
        }) : (f = null, console.warn("地图获取位置信息失败", M));
      });
    }
    return Xe(_), Et(() => {
      v && (v.destroy(), v = null, y = null, f = null);
    }), (C, B) => (x(), D("div", {
      style: Q(h(c)),
      class: "containerIKJ"
    }, [
      N(h(Qt), {
        ref_key: "mapInputRef",
        ref: r,
        modelValue: h(t).name,
        "onUpdate:modelValue": B[0] || (B[0] = (I) => h(t).name = I),
        class: Ae({ mapInputIKJ: e.showMap }),
        placeholder: e.placeholder || h(S)("r.search"),
        disabled: e.disabled,
        icon: "ios-search"
      }, null, 8, ["modelValue", "class", "placeholder", "disabled"]),
      U("div", {
        style: Q(h(s)),
        ref_key: "mapRef",
        ref: d,
        id: p
      }, null, 4)
    ], 4));
  }
});
var et;
const _t = /* @__PURE__ */ se({
  __name: "AsyncCascader",
  props: {
    modelValue: {},
    url: { default: (et = window == null ? void 0 : window.g) != null && et.mgrURL ? window.g.mgrURL + "/web/v1/umc/orgs" : "" },
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
    const e = a, t = z([]), u = P({
      get() {
        let r = e.modelValue;
        return Array.isArray(r) ? ie(r) : Je(r) ? fl({
          group: t.value,
          condition: (d) => d.value === r,
          pathKey: "value"
        }) : at(r) ? r.split(e.separator) : [];
      },
      set(r) {
        if (e.onlyLastVal)
          Ce(r) ? (o("update:modelValue", null), o("on-label-change", null)) : o("update:modelValue", ul(r));
        else {
          if (ll(e.modelValue, r))
            return;
          o("update:modelValue", ie(r));
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
        (f = r == null ? void 0 : r.data) != null && f.records ? d = r.data.records : r != null && r.data ? d = r.data : r && (d = r), d ? (typeof e.optionFilter == "function" && K(e.optionFilter) === "Function" && (d = e.optionFilter(d)), t.value = c(d)) : console.warn("级联数据错误，不能使用");
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
        f.children && !Ce(f.children) && (_.children = c(f.children)), d.push(_);
      }
      return d;
    }
    function s(r) {
      return e.onlyLastLabel ? ul(r) : r.join(e.separator);
    }
    function p(r, d) {
      let f = "";
      Ce(d) || (f = d.map((_) => _.label).join(e.separator)), o("on-label-change", f);
    }
    return Xe(n), (r, d) => {
      const f = j("Cascader");
      return x(), J(f, {
        data: h(t),
        modelValue: h(u),
        "onUpdate:modelValue": d[0] || (d[0] = (_) => Fe(u) ? u.value = _ : null),
        onOnChange: p,
        "change-on-select": "",
        transfer: "",
        disabled: e.disabled,
        "render-format": s,
        placeholder: e.placeholder || h(S)("r.pSelect"),
        filterable: e.filterable
      }, null, 8, ["data", "modelValue", "disabled", "placeholder", "filterable"]);
    };
  }
}), Ct = /* @__PURE__ */ se({
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
    const e = a, t = z(), u = P({
      get() {
        if (e.modelValue && (Je(e.modelValue) || at(e.modelValue))) {
          let c = String(e.modelValue).trim();
          if (/^\d*$/.test(c)) {
            let p = c.substring(0, 2) + "0000", r, d = n(c);
            return d.length < 7 ? r = c.substring(0, 4) + "00" : r = c.substring(0, 6), /^8\d+$/.test(c) ? [p, d] : [p, r, d];
          }
          return c.indexOf(e.separator) !== -1 ? c.split(e.separator) : [c];
        } else
          return Array.isArray(e.modelValue) ? ie(e.modelValue) : (t.value && (t.value.select = []), []);
      },
      set(c) {
        if (Ce(c))
          o("update:modelValue", null), o("on-name-change", null);
        else {
          let s = ul(c), p = "", r = "";
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
    return (c, s) => (x(), J(h(na), al(c.$attrs, {
      class: "alCascaderMC",
      ref_key: "alCRef",
      ref: t,
      modelValue: h(u),
      "onUpdate:modelValue": s[0] || (s[0] = (p) => Fe(u) ? u.value = p : null),
      level: e.level,
      disabled: e.disabled,
      placeholder: e.placeholder || h(S)("r.pSelect"),
      transfer: e.transfer,
      searchable: e.filterable
    }), null, 16, ["modelValue", "level", "disabled", "placeholder", "transfer", "searchable"]));
  }
});
function Ee(a) {
  var c, s, p;
  const o = (...r) => $e.apply(this, r), e = o("r.closePreview"), t = o("r.fullImg");
  let u = wl(document.getElementsByTagName("body")), n = document.createElement("div");
  n.setAttribute("class", "fullScreenImgByDom"), n.innerHTML = `<div class='previewInner'><img src='${a}' alt='${t}' ><i class='ivu-icon ivu-icon-md-close' title='${e}' ></i></div>`, (s = (c = n.querySelector(".ivu-icon-md-close")) == null ? void 0 : c.addEventListener) == null || s.call(c, "click", function() {
    var d;
    let r = wl(document.getElementsByTagName("body"));
    (d = r == null ? void 0 : r.removeChild) == null || d.call(r, n);
  }), (p = u == null ? void 0 : u.appendChild) == null || p.call(u, n);
}
const kn = { class: "previewBoxM" }, wn = {
  key: 0,
  class: "previewImg"
}, Vn = ["src", "alt"], _n = { class: "deleteModal" }, Cn = { class: "previewBoxM" }, An = {
  key: 0,
  class: "previewImg"
}, Bn = ["src", "alt"], xn = { class: "deleteModal" }, Tn = { class: "customFileListM" }, Sn = {
  key: 0,
  class: "customFileListItem"
}, In = ["onClick", "title"], Ln = { class: "btBoxJ" }, On = { class: "customFileListM" }, Mn = {
  key: 0,
  class: "customFileListItem"
}, Un = ["onClick", "title"], Fn = { class: "btBoxJ" };
var lt;
const At = /* @__PURE__ */ se({
  __name: "UploadGroup",
  props: {
    modelValue: { default: () => [] },
    url: { default: (lt = window == null ? void 0 : window.g) != null && lt.mgrURL ? window.g.mgrURL + "/web/v1/fsc/file" : "" },
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
    const e = a, t = kl([]), u = kl([]), n = P(() => !e.manualUpload && e.showImg && r.value ? "img" : e.manualUpload && e.showImg && r.value ? "localImg" : e.manualUpload && e.showUploadList && (!e.showImg || !r.value) ? "localList" : !e.manualUpload && e.showUploadList && (!e.showImg || !r.value) ? "list" : ""), c = P(() => e.manualUpload ? "//jsonplaceholder.typicode.com/posts/" : e.url), s = P({
      get() {
        if (e.manualUpload)
          return p.value;
        {
          let g = [];
          for (let O of p.value)
            typeof O == "object" && K(O) === "File" ? g.push(O) : (typeof O == "number" || typeof O == "string") && g.push({
              response: {
                data: [
                  {
                    id: O
                  }
                ]
              }
            });
          return g;
        }
      },
      set(g) {
        var O, E, ee;
        if (e.manualUpload)
          p.value = g;
        else {
          let ae = [];
          for (let q of g)
            (ee = (E = (O = q.response) == null ? void 0 : O.data) == null ? void 0 : E[0]) != null && ee.id && ae.push(q.response.data[0].id);
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
            return Array.isArray(e.modelValue) ? e.modelValue.filter((g) => g !== "--") : K(e.modelValue) === "File" ? [e.modelValue] : [];
          default:
            return [];
        }
      },
      set(g) {
        if (e.length === 1) {
          let O = wl(g);
          o("update:modelValue", O ?? null), o("on-change", O ?? null);
        } else
          o("update:modelValue", ie(g)), o("on-change", ie(g));
      }
    }), r = P(() => {
      let g;
      e.manualUpload ? g = s.value : g = u.value;
      for (let O of g) {
        let E;
        if (e.manualUpload ? E = O && O.type : E = O && O.mimeType, !E || E && !rl(E))
          return !1;
      }
      return !0;
    });
    ke(
      () => s.value,
      async (g) => {
        var O, E, ee, ae, q, ce, ye, W, ge;
        if (n.value === "localImg")
          (g == null ? void 0 : g.length) > 0 ? t.value = await f(g) : t.value = [];
        else if ((g == null ? void 0 : g.length) > 0 && n.value !== "localList") {
          let ne = [];
          for (let oe of g)
            if (oe.name === void 0)
              if ((ee = (E = (O = oe.response) == null ? void 0 : O.data) == null ? void 0 : E[0]) != null && ee.id) {
                let de = await Ke.get(e.url + "/" + oe.response.data[0].id).catch(() => {
                  ne.push({ name: S("r.file") + zl(g, oe) });
                }), re = ie(oe);
                re.name = ((ce = (q = (ae = de == null ? void 0 : de.data) == null ? void 0 : ae.returnValue) == null ? void 0 : q[0]) == null ? void 0 : ce.name) || S("r.file") + zl(g, oe), re.mimeType = ((ge = (W = (ye = de == null ? void 0 : de.data) == null ? void 0 : ye.returnValue) == null ? void 0 : W[0]) == null ? void 0 : ge.mimeType) || "unknown", ne.push(re);
              } else
                ne.push({ name: S("r.unknown") });
            else
              ne.push(oe);
          u.value = ne;
        } else
          u.value = [];
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    function d(g) {
      return g.name || g.split && ul(g.split("/")) || g;
    }
    async function f(g) {
      let O = [];
      for (let E of g) {
        let ee = await sl(E);
        O.push(ee);
      }
      return O;
    }
    function _(g) {
      if (!e.disabled) {
        let O = s.value;
        O.splice(g, 1), s.value = O;
      }
    }
    function b(g) {
      var O, E, ee;
      (ee = (E = (O = g == null ? void 0 : g.response) == null ? void 0 : O.data) == null ? void 0 : E[0]) != null && ee.id && window.open(e.url + "/" + g.response.data[0].id + "/download");
    }
    function v(g) {
      var O, E, ee;
      return e.manualUpload ? g.type && rl(g.type) : ((ee = (E = (O = g == null ? void 0 : g.response) == null ? void 0 : O.data) == null ? void 0 : E[0]) == null ? void 0 : ee.id) && g.mimeType && rl(g.mimeType);
    }
    function y(g) {
      e.manualUpload ? sl(g).then((O) => {
        Ee(O);
      }) : Ee(e.url + "/" + g.response.data[0].id + "/download?preview=true");
    }
    function V(g) {
      K(g) === "String" && g.indexOf("http") > -1 ? window.open(g) : K(g) === "File" && sl(g).then((O) => {
        rt(g.name, O);
      });
    }
    function T(g) {
      if (e.manualUpload) {
        if (g) {
          let O = Ol(g.name);
          if (e.format.length > 0 && e.format.indexOf(O) < 0)
            return Se(
              S("r.wrongFileType"),
              S("r.supportType") + (e.format.length > 0 && String(e.format) || S("r.none")),
              "warning"
            ), !1;
          if (e.maxSize && g.size > e.maxSize * 1024)
            return Se(S("r.fileIsBig"), S("r.supportSize") + e.maxSize + "kb", "warning"), !1;
          let E = s.value;
          E.push(g), s.value = E;
        }
        return !1;
      } else
        return !0;
    }
    function w(g) {
      console.warn(g), Se(S("r.uploadError"), "", "error");
    }
    function C(g, O, E) {
      if (g && g.code === 0) {
        let ee = s.value;
        ee.push(O), s.value = ee;
      } else
        Se(S("r.uploadFail"), g && g.message || "", "error");
    }
    function B() {
      Se(S("r.fileIsBig"), S("r.supportSize") + e.maxSize + " kb", "warning");
    }
    function I() {
      Se(
        S("r.wrongFileType"),
        S("r.supportType") + (e.format.length > 0 && String(e.format) || S("r.none")),
        "warning"
      );
    }
    function M(g) {
      var ee, ae, q, ce, ye, W;
      let O = (q = (ae = (ee = g == null ? void 0 : g.response) == null ? void 0 : ee.data) == null ? void 0 : ae[0]) == null ? void 0 : q.id, E = (W = (ye = (ce = g == null ? void 0 : g.response) == null ? void 0 : ce.data) == null ? void 0 : ye[0]) == null ? void 0 : W.mimeType;
      O && (K(E) === "String" && E.indexOf("image") > -1 ? Ee(e.url + "/" + O + "/download?preview=true") : window.open(e.url + "/" + O + "/download?preview=true"));
    }
    function m(g) {
      var E, ee, ae;
      let O = (ae = (ee = (E = g == null ? void 0 : g.response) == null ? void 0 : E.data) == null ? void 0 : ee[0]) == null ? void 0 : ae.id;
      L(null, O);
    }
    function L(g, O) {
      if (!e.disabled && p.value.indexOf(O) !== -1) {
        const E = ie(p.value);
        let ee = s.value;
        ee.splice(E.indexOf(O), 1), s.value = ee;
      }
    }
    return (g, O) => {
      const E = j("Button"), ee = j("Upload"), ae = j("Icon");
      return x(), D("div", null, [
        N(ee, {
          name: "files",
          action: h(c),
          "before-upload": T,
          "on-error": w,
          "on-success": C,
          "on-exceeded-size": B,
          "on-preview": M,
          "on-remove": m,
          "on-format-error": I,
          data: e.data,
          "max-size": e.maxSize,
          "show-upload-list": !1,
          "with-credentials": e.withCredentials,
          format: e.format,
          multiple: e.multiple || !1,
          disabled: e.length > 0 && h(s).length >= e.length || !!e.disabled
        }, {
          default: G(() => [
            N(E, {
              icon: "ios-cloud-upload-outline",
              class: Ae({ disabledR: e.length > 0 && h(s).length >= e.length || !!e.disabled })
            }, {
              default: G(() => [
                pe(H(h(S)("r.selectFile")), 1)
              ]),
              _: 1
            }, 8, ["class"])
          ]),
          _: 1
        }, 8, ["action", "data", "max-size", "with-credentials", "format", "multiple", "disabled"]),
        xe(U("div", kn, [
          (x(!0), D(me, null, ve(h(p), (q) => (x(), D(me, { key: q }, [
            !e.manualUpload && q !== null ? (x(), D("div", wn, [
              U("img", {
                src: g.url + "/" + q + "/download?preview=true",
                alt: q
              }, null, 8, Vn),
              U("div", _n, [
                N(ae, {
                  type: "ios-expand",
                  size: "40",
                  class: "previewExpand",
                  title: h(S)("r.fView"),
                  onClick: (ce) => h(Ee)(e.url + "/" + q + "/download?preview=true")
                }, null, 8, ["title", "onClick"]),
                N(ae, {
                  type: "ios-trash-outline",
                  size: "40",
                  class: "previewDelete",
                  onClick: (ce) => L(ce, q),
                  title: h(S)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : he("", !0)
          ], 64))), 128))
        ], 512), [
          [Le, h(n) === "img" && h(p).length > 0]
        ]),
        xe(U("div", Cn, [
          (x(!0), D(me, null, ve(h(t), (q, ce) => (x(), D(me, {
            key: "manualImg" + ce
          }, [
            e.manualUpload && q !== null ? (x(), D("div", An, [
              U("img", {
                src: q,
                alt: "manualImg" + ce
              }, null, 8, Bn),
              U("div", xn, [
                N(ae, {
                  type: "ios-expand",
                  size: "40",
                  class: "previewExpand",
                  onClick: (ye) => h(Ee)(q),
                  title: h(S)("r.fView")
                }, null, 8, ["onClick", "title"]),
                N(ae, {
                  type: "ios-trash-outline",
                  size: "40",
                  class: "previewDelete",
                  onClick: (ye) => _(ce),
                  title: h(S)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : he("", !0)
          ], 64))), 128))
        ], 512), [
          [Le, h(n) === "localImg" && h(t).length > 0]
        ]),
        xe(U("div", Tn, [
          (x(!0), D(me, null, ve(h(s), (q, ce) => (x(), D(me, {
            key: "manualItem" + ce
          }, [
            e.manualUpload && q !== null ? (x(), D("p", Sn, [
              q.name ? (x(), J(ae, {
                key: 0,
                type: h(_l)(q.name)
              }, null, 8, ["type"])) : he("", !0),
              U("span", {
                class: Ae(["upNameT", { previewName: v(q) }]),
                onClick: (ye) => V(q),
                title: h(S)("r.download")
              }, H(d(q)), 11, In),
              U("span", Ln, [
                v(q) ? (x(), J(ae, {
                  key: 0,
                  type: "md-qr-scanner",
                  size: "14",
                  class: "listBtH",
                  onClick: (ye) => y(q),
                  title: h(S)("r.fView")
                }, null, 8, ["onClick", "title"])) : he("", !0),
                N(ae, {
                  type: "ios-close",
                  size: "22",
                  class: "listBtH",
                  onClick: (ye) => _(ce),
                  title: h(S)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : he("", !0)
          ], 64))), 128))
        ], 512), [
          [Le, h(n) === "localList" && h(s).length > 0]
        ]),
        xe(U("div", On, [
          (x(!0), D(me, null, ve(h(u), (q, ce) => (x(), D(me, {
            key: "defaultItem" + ce
          }, [
            !e.manualUpload && q !== null ? (x(), D("p", Mn, [
              N(ae, {
                type: h(_l)(q.name)
              }, null, 8, ["type"]),
              U("span", {
                class: Ae(["upNameT", { previewName: v(q) }]),
                onClick: (ye) => b(q),
                title: h(S)("r.download")
              }, H(q.name || h(S)("r.file") + (ce + 1)), 11, Un),
              U("span", Fn, [
                v(q) ? (x(), J(ae, {
                  key: 0,
                  type: "md-qr-scanner",
                  size: "14",
                  class: "listBtH",
                  onClick: (ye) => y(q),
                  title: h(S)("r.fView")
                }, null, 8, ["onClick", "title"])) : he("", !0),
                N(ae, {
                  type: "ios-close",
                  size: "22",
                  class: "listBtH",
                  onClick: (ye) => _(ce),
                  title: h(S)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : he("", !0)
          ], 64))), 128))
        ], 512), [
          [Le, h(n) === "list" && h(u).length > 0]
        ])
      ]);
    };
  }
}), Pn = /* @__PURE__ */ U("div", { class: "bRoot" }, null, -1), Bt = /* @__PURE__ */ se({
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
    const e = a, t = z(!1), u = z(!1), n = z(!1), c = P({
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
    ), r = z();
    Xe(() => {
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
    function v() {
      t.value = !1, u.value = !1, c.value && s.value === null && (c.value = null);
    }
    return (y, V) => {
      const T = j("DatePicker"), w = j("Icon"), C = j("Input");
      return x(), D("div", {
        class: "monthRangeBoxR",
        ref_key: "mPickerRef",
        ref: r
      }, [
        N(T, {
          open: h(u),
          modelValue: h(s),
          transfer: "",
          type: "month",
          placement: e.placement,
          options: e.options2,
          onOnChange: _,
          onOnClickoutside: v
        }, {
          default: G(() => [
            Pn
          ]),
          _: 1
        }, 8, ["open", "modelValue", "placement", "options"]),
        N(T, {
          open: h(t),
          modelValue: h(c),
          transfer: "",
          type: "month",
          placement: e.placement,
          options: e.options1,
          onOnChange: f,
          onOnClickoutside: v
        }, {
          default: G(() => [
            U("div", { onClick: d }, [
              N(C, {
                class: "aRoot",
                modelValue: h(p),
                "onUpdate:modelValue": V[0] || (V[0] = (B) => Fe(p) ? p.value = B : null),
                readonly: "",
                placeholder: e.placeholder || h(S)("r.selectDate"),
                disabled: e.disabled
              }, {
                suffix: G(() => [
                  N(w, {
                    type: h(n) && (h(c) || h(s)) && !e.disabled ? "ios-close-circle" : "ios-calendar-outline"
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
}), Rn = { class: "editor-pro-root" }, xt = /* @__PURE__ */ se({
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
    const e = a, t = kl(), u = P({
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
                }).then((v) => {
                  if (v && v.data)
                    if (Array.isArray(v.data))
                      for (let y of v.data) {
                        const V = b + "/" + y.id + "/download";
                        d(V, _, V);
                      }
                    else {
                      const y = b + "/" + v.data.id + "/download";
                      d(y, _, y);
                    }
                }).catch(() => {
                  Se(S("r.uploadFail"), "", "error");
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
                      for (let v of b.data) {
                        const y = _ + "/" + v.id + "/download";
                        d(y);
                      }
                    else {
                      const v = _ + "/" + b.data.id + "/download";
                      d(v);
                    }
                }).catch(() => {
                  Se(S("r.uploadFail"), "", "error");
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
    ), Gt(() => {
      t.value && t.value.destroy();
    }), (r, d) => (x(), D("div", Rn, [
      xe(N(h(oa), {
        class: "editor-pro-toolbar",
        editor: h(t),
        defaultConfig: h(n),
        mode: r.mode
      }, null, 8, ["editor", "defaultConfig", "mode"]), [
        [Le, !r.disabled]
      ]),
      N(h(ia), {
        class: "editor-pro-editor",
        modelValue: h(u),
        "onUpdate:modelValue": d[0] || (d[0] = (f) => Fe(u) ? u.value = f : null),
        defaultConfig: h(c),
        mode: r.mode,
        onOnCreated: p,
        style: Q(h(s))
      }, null, 8, ["modelValue", "defaultConfig", "mode", "style"])
    ]));
  }
}), Kn = {
  key: 19,
  class: "formInfoTxtXN"
}, $n = {
  key: 20,
  class: "formTitleTxtXN"
}, Xl = /* @__PURE__ */ se({
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
      const f = j("InputNumber"), _ = j("Input"), b = j("Option"), v = j("Select"), y = j("Radio"), V = j("Icon"), T = j("RadioGroup"), w = j("Checkbox"), C = j("CheckboxGroup"), B = j("DatePicker"), I = j("TimePicker"), M = j("FormItem");
      return x(), J(M, {
        label: e.item.type !== "radio" && e.item.type !== "checkbox" ? e.item.label : " ",
        prop: e.item.key || "",
        class: Ae(["relativeBox", t(e.item)])
      }, {
        default: G(() => [
          e.item.type === "txt" ? (x(), D("div", {
            key: 0,
            style: Q([e.itemStyle, { display: "inline-block" }]),
            class: Ae({ likeInputX: e.item.likeInput, disabled: !!e.item.disabled || e.disabled })
          }, H(e.item.valKey ? e.valGroup[e.item.valKey] || "无" : e.item.val), 7)) : e.item.type === "inputNumber" ? (x(), J(f, {
            key: 1,
            style: Q(e.itemStyle),
            modelValue: e.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": d[0] || (d[0] = (m) => e.tempKeys[e.item.tempKey] = m),
            max: e.item.max || e.item.max === 0 ? e.item.max : 1 / 0,
            min: e.item.min || e.item.min === 0 ? e.item.min : -1 / 0,
            precision: e.item.precision,
            step: e.item.step || 1,
            placeholder: e.item.placeholder || h(S)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            readonly: !!e.item.readonly,
            editable: e.item.editable !== !1,
            onOnBlur: d[1] || (d[1] = (m) => u(m, e.item)),
            "active-change": !!e.item.activeChange,
            clearable: e.item.clearable !== !1
          }, null, 8, ["style", "modelValue", "max", "min", "precision", "step", "placeholder", "disabled", "readonly", "editable", "active-change", "clearable"])) : e.item.type === "input" ? (x(), J(_, {
            key: 2,
            style: Q(r.itemStyle),
            modelValue: e.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": d[2] || (d[2] = (m) => e.tempKeys[e.item.tempKey] = m),
            maxlength: e.item.maxLength || null,
            password: !!e.item.password,
            icon: e.item.icon,
            prefix: e.item.prefix,
            suffix: e.item.suffix,
            placeholder: e.item.placeholder || h(S)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            onOnBlur: d[3] || (d[3] = (m) => u(m, e.item)),
            clearable: e.item.clearable !== !1
          }, Ye({ _: 2 }, [
            e.item.slotPosition && e.item.slotName ? {
              name: e.item.slotPosition,
              fn: G(() => [
                Ie(r.$slots, e.item.slotName)
              ]),
              key: "0"
            } : void 0,
            e.item.slotPosition !== "prepend" && e.item.prepend ? {
              name: "prepend",
              fn: G(() => [
                U("span", null, H(e.item.prepend), 1)
              ]),
              key: "1"
            } : void 0,
            e.item.slotPosition !== "append" && e.item.append ? {
              name: "append",
              fn: G(() => [
                U("span", null, H(e.item.append), 1)
              ]),
              key: "2"
            } : void 0
          ]), 1032, ["style", "modelValue", "maxlength", "password", "icon", "prefix", "suffix", "placeholder", "disabled", "clearable"])) : e.item.type === "select" ? (x(), J(v, {
            key: 3,
            modelValue: r.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": d[4] || (d[4] = (m) => r.tempKeys[e.item.tempKey] = m),
            style: Q(r.itemStyle),
            filterable: e.item.filterable === !0 || e.item.filterable === !1 ? e.item.filterable : !1,
            disabled: !!e.item.disabled || e.disabled,
            multiple: !!e.item.multiple,
            placeholder: e.item.placeholder || h(S)("r.pSelect"),
            onOnChange: d[5] || (d[5] = (m) => u(m, e.item)),
            transfer: "",
            clearable: e.item.clearable !== !1
          }, {
            default: G(() => [
              (x(!0), D(me, null, ve(e.item.options, (m, L) => (x(), J(b, {
                value: m.val,
                label: m.label || m.val,
                key: "option-" + e.item.key + L,
                disabled: !!m.disabled
              }, null, 8, ["value", "label", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["modelValue", "style", "filterable", "disabled", "multiple", "placeholder", "clearable"])) : e.item.type === "selectInput" ? (x(), J(kt, {
            key: 4,
            modelValue: r.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": d[6] || (d[6] = (m) => r.tempKeys[e.item.tempKey] = m),
            "label-width": r.labelWidth,
            "item-width": r.itemWidth,
            "select-option": e.item.options || [],
            placeholder: e.item.placeholder || h(S)("r.pInput"),
            clearable: e.item.clearable !== !1,
            disabled: !!e.item.disabled || e.disabled,
            onOnChange: c
          }, null, 8, ["modelValue", "label-width", "item-width", "select-option", "placeholder", "clearable", "disabled"])) : e.item.type === "alCascader" ? (x(), J(Ct, {
            key: 5,
            style: Q(r.itemStyle),
            class: "inlineBlock",
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": d[7] || (d[7] = (m) => e.valGroup[e.item.key] = m),
            level: e.item.level || e.item.level === 0 ? e.item.level : 2,
            disabled: !!e.item.disabled || e.disabled,
            filterable: e.item.filterable !== !1,
            placeholder: e.item.placeholder || h(S)("r.pSelect"),
            "change-on-select": !!e.item.changeOnSelect,
            onOnNameChange: d[8] || (d[8] = (m) => s(m, e.item))
          }, null, 8, ["style", "modelValue", "level", "disabled", "filterable", "placeholder", "change-on-select"])) : e.item.type === "asyncCascader" ? (x(), J(_t, {
            key: 6,
            style: Q(r.itemStyle),
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": d[9] || (d[9] = (m) => e.valGroup[e.item.key] = m),
            url: e.item.url || r.mgrUrl + "/web/v1/umc/orgs",
            "option-val": e.item.optionVal || "id",
            "option-label": e.item.optionLabel || "name",
            "option-filter": e.item.optionFilter || null,
            "only-last-val": e.item.onlyLastVal !== !1,
            "only-last-label": e.item.onlyLastLabel !== !1,
            separator: e.item.separator || "/",
            placeholder: e.item.placeholder || h(S)("r.pSelect"),
            filterable: !!e.item.filterable,
            disabled: !!e.item.disabled || e.disabled,
            onOnLabelChange: d[10] || (d[10] = (m) => p(m, e.item))
          }, null, 8, ["style", "modelValue", "url", "option-val", "option-label", "option-filter", "only-last-val", "only-last-label", "separator", "placeholder", "filterable", "disabled"])) : e.item.type === "radio" ? (x(), J(y, {
            key: 7,
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": d[11] || (d[11] = (m) => e.valGroup[e.item.key] = m),
            disabled: !!e.item.disabled || e.disabled,
            onOnChange: d[12] || (d[12] = (m) => u(m, e.item))
          }, {
            default: G(() => [
              pe(H(e.item.label), 1)
            ]),
            _: 1
          }, 8, ["modelValue", "disabled"])) : e.item.type === "radioGroup" ? (x(), J(T, {
            key: 8,
            style: Q(r.itemStyle),
            onOnChange: d[13] || (d[13] = (m) => n(m, e.item)),
            type: e.item.buttonType ? "button" : null,
            modelValue: r.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": d[14] || (d[14] = (m) => r.tempKeys[e.item.tempKey] = m)
          }, {
            default: G(() => [
              (x(!0), D(me, null, ve(e.item.options, (m) => (x(), J(y, {
                key: "radioItem" + m.val,
                label: m.val,
                border: !!e.item.itemBorder,
                disabled: !!e.item.disabled || e.disabled || m.disabled
              }, {
                default: G(() => [
                  m.icon && !e.item.buttonType ? (x(), J(V, {
                    key: 0,
                    type: m.icon
                  }, null, 8, ["type"])) : he("", !0),
                  U("span", null, H(m.label || m.val), 1)
                ]),
                _: 2
              }, 1032, ["label", "border", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["style", "type", "modelValue"])) : e.item.type === "checkbox" ? (x(), J(w, {
            key: 9,
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": d[15] || (d[15] = (m) => e.valGroup[e.item.key] = m),
            disabled: !!e.item.disabled,
            onOnChange: d[16] || (d[16] = (m) => u(m, e.item))
          }, {
            default: G(() => [
              pe(H(e.item.label), 1)
            ]),
            _: 1
          }, 8, ["modelValue", "disabled"])) : e.item.type === "checkboxGroup" ? (x(), J(C, {
            key: 10,
            style: Q(r.itemStyle),
            modelValue: r.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": d[17] || (d[17] = (m) => r.tempKeys[e.item.tempKey] = m),
            onOnChange: d[18] || (d[18] = (m) => n(m, e.item))
          }, {
            default: G(() => [
              (x(!0), D(me, null, ve(e.item.options, (m) => (x(), J(w, {
                key: "checkItem" + m.val,
                label: m.val,
                disabled: !!e.item.disabled || e.disabled || m.disabled
              }, {
                default: G(() => [
                  m.icon ? (x(), J(V, {
                    key: 0,
                    type: m.icon
                  }, null, 8, ["type"])) : he("", !0),
                  U("span", null, H(m.label || m.val), 1)
                ]),
                _: 2
              }, 1032, ["label", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["style", "modelValue"])) : e.item.type === "textarea" ? (x(), J(_, {
            key: 11,
            type: "textarea",
            modelValue: r.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": d[19] || (d[19] = (m) => r.tempKeys[e.item.tempKey] = m),
            autosize: e.item.autosize || { minRows: 2 },
            style: Q(r.itemStyle),
            maxlength: e.item.maxLength || null,
            "show-word-limit": !!e.item.showWordLimit,
            placeholder: e.item.placeholder || h(S)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            onOnBlur: d[20] || (d[20] = (m) => u(m, e.item)),
            clearable: e.item.clearable !== !1
          }, null, 8, ["modelValue", "autosize", "style", "maxlength", "show-word-limit", "placeholder", "disabled", "clearable"])) : e.item.type === "upload" ? (x(), J(At, {
            key: 12,
            style: Q(r.itemStyle),
            class: "inlineBlock",
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": d[21] || (d[21] = (m) => e.valGroup[e.item.key] = m),
            url: e.item.url || r.uploadUrl,
            "manual-upload": !!e.item.manualUpload,
            format: e.item.format || [],
            data: e.item.data,
            "max-size": e.item.maxSize || 0,
            "show-img": !!e.item.showImg,
            length: e.item.length || 0,
            disabled: !!e.item.disabled || e.disabled,
            "with-credentials": e.item.withCredentials !== !1,
            onOnFileIdChange: d[22] || (d[22] = (m) => n(m, e.item))
          }, null, 8, ["style", "modelValue", "url", "manual-upload", "format", "data", "max-size", "show-img", "length", "disabled", "with-credentials"])) : e.item.type === "date" ? (x(), J(B, {
            key: 13,
            style: Q(r.itemStyle),
            modelValue: r.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": d[23] || (d[23] = (m) => r.tempKeys[e.item.tempKey] = m),
            type: e.item.dateType,
            disabled: !!e.item.disabled || e.disabled,
            placement: "bottom-end",
            placeholder: e.item.placeholder || h(S)("r.selectDate"),
            options: e.item.dateOptions || null,
            clearable: e.item.clearable !== !1,
            editable: !1,
            transfer: "",
            onOnChange: d[24] || (d[24] = (m) => u(m, e.item))
          }, null, 8, ["style", "modelValue", "type", "disabled", "placeholder", "options", "clearable"])) : e.item.type === "time" ? (x(), J(I, {
            key: 14,
            style: Q(r.itemStyle),
            modelValue: r.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": d[25] || (d[25] = (m) => r.tempKeys[e.item.tempKey] = m),
            type: e.item.dateType,
            disabled: !!e.item.disabled || e.disabled,
            placement: "bottom-end",
            placeholder: e.item.placeholder || h(S)("r.selectTime"),
            steps: e.item.steps || [],
            clearable: e.item.clearable !== !1,
            editable: !1,
            format: e.item.format || "HH:mm:ss",
            transfer: "",
            onOnChange: d[26] || (d[26] = (m) => u(m, e.item))
          }, null, 8, ["style", "modelValue", "type", "disabled", "placeholder", "steps", "clearable", "format"])) : e.item.type === "monthRange" ? (x(), J(Bt, {
            key: 15,
            style: Q(r.itemStyle),
            modelValue: r.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": d[27] || (d[27] = (m) => r.tempKeys[e.item.tempKey] = m),
            disabled: !!e.item.disabled || e.disabled,
            placement: "bottom-end",
            placeholder: e.item.placeholder || h(S)("r.selectDate"),
            options1: e.item.dateOptions1 || null,
            options2: e.item.dateOptions2 || null,
            onOnChange: d[28] || (d[28] = (m) => u(m, e.item))
          }, null, 8, ["style", "modelValue", "disabled", "placeholder", "options1", "options2"])) : e.item.type === "editorPro" ? (x(), J(xt, {
            key: 16,
            class: "inlineBlock",
            style: Q(r.itemStyle),
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": d[29] || (d[29] = (m) => e.valGroup[e.item.key] = m),
            placeholder: e.item.placeholder || h(S)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            "toolbar-config": e.item.toolbarConfig || {},
            "editor-config": e.item.editorConfig || {},
            mode: e.item.mode || "simple",
            height: e.item.height || 300,
            onInput: d[30] || (d[30] = (m) => u(m, e.item))
          }, null, 8, ["style", "modelValue", "placeholder", "disabled", "toolbar-config", "editor-config", "mode", "height"])) : e.item.type === "inputMap" ? (x(), J(Vt, {
            key: 17,
            modelValue: r.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": d[31] || (d[31] = (m) => r.tempKeys[e.item.tempKey] = m),
            style: Q(r.itemStyle),
            placeholder: e.item.placeholder || h(S)("r.search"),
            disabled: !!e.item.disabled || e.disabled,
            "show-map": e.item.showMap !== !1,
            height: e.item.mapHeight || "250px",
            onOnChange: d[32] || (d[32] = (m) => u(m, e.item))
          }, null, 8, ["modelValue", "style", "placeholder", "disabled", "show-map", "height"])) : e.item.type === "custom" ? (x(), D("div", {
            key: 18,
            class: "inlineBlock",
            style: Q(r.itemStyle)
          }, [
            Ie(r.$slots, e.item.slotName, {
              valGroup: e.valGroup
            })
          ], 4)) : he("", !0),
          e.item.info ? (x(), D("div", Kn, H(e.item.info), 1)) : he("", !0),
          e.item.title ? (x(), D("div", $n, H(e.item.title), 1)) : he("", !0)
        ]),
        _: 3
      }, 8, ["label", "prop", "class"]);
    };
  }
}), Dn = /* @__PURE__ */ U("input", { type: "text" }, null, -1), Nn = { class: "inlineBlock" }, yl = /* @__PURE__ */ se({
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
    var El, Gl;
    const t = a, u = z(null), n = z({}), c = z([]), s = z({});
    let p = [];
    const r = ((El = window == null ? void 0 : window.g) == null ? void 0 : El.mgrURL) ?? "";
    let d = [], f = [];
    const _ = z(!1), b = z(Math.random() * 1e8 + 1e3), v = (Gl = window == null ? void 0 : window.g) != null && Gl.mgrURL ? window.g.mgrURL + "/web/v1/fsc/file" : "/file";
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
      let i = ie(t.formRules);
      for (let l in i)
        if (i.hasOwnProperty(l))
          if (Array.isArray(i[l]))
            for (let A of i[l])
              A.message || A.validator || (A.message = S("r.required"));
          else
            K(i[l]) === "Object" && (i[l].message || i[l].validator || (i[l].message = S("r.required")));
      return i;
    }), B = P(() => {
      let i = [];
      if (V.value)
        for (let l of c.value)
          m(l, i);
      else
        m(c.value, i);
      return i.concat(d, f);
    }), I = P(() => {
      let i = [];
      if (V.value)
        for (let l of c.value)
          L(l, i);
      else
        L(c.value, i);
      return i;
    });
    function M(i) {
      return i.filter((l) => l.slotName);
    }
    function m(i, l) {
      for (let A of i)
        if (A.showing === !0 && A.key && A.type !== "selectInput" && (l.push(A.key), A.key2 && l.push(A.key2), A.collectLabel)) {
          if (!Array.isArray(A.collectLabel) && A.collectLabel.key)
            l.push(A.collectLabel.key);
          else if (Array.isArray(A.collectLabel))
            for (let k of A.collectLabel)
              k.key && l.push(k.key);
        }
    }
    function L(i, l) {
      for (let A of i)
        A.showing === !0 && A.key && A.type !== "selectInput" && l.push(A.key);
    }
    function g() {
      return new Promise((i) => {
        ee(), E().then(() => {
          e("on-reset"), i(!0);
        });
      });
    }
    function O() {
      return new Promise((i) => {
        for (let l of p)
          l();
        p = [], s.value = {}, F(), de(), E().then(() => {
          e("on-re-render"), i(!0);
        });
      });
    }
    function E() {
      return new Promise((i) => {
        b.value = Math.floor(Math.random() * 1e8 + 1e3), Re(function() {
          i(!0);
        });
      });
    }
    function ee() {
      let i = ce();
      for (let l in n.value)
        if (n.value.hasOwnProperty(l))
          if (we(i[l]))
            n.value[l] = i[l];
          else if (Array.isArray(n.value[l]))
            n.value[l] = [];
          else if (K(n.value[l]) === "Boolean")
            n.value[l] = !1;
          else {
            const A = He(t.formData, (k) => k.key === l);
            A && (A.type === "editor" || A.type === "editorPro") ? n.value[l] = "" : n.value[l] = null;
          }
      ae(i);
    }
    function ae(i) {
      for (let l in s.value)
        s.value.hasOwnProperty(l) && (we(i[l]) ? s.value[l] = i[l] : Array.isArray(s.value[l]) ? s.value[l] = [] : K(s.value[l]) === "Object" && s.value[l].hasOwnProperty("key") && s.value[l].hasOwnProperty("val") ? s.value[l].val = null : s.value[l] = null);
    }
    function q(i) {
      let l = ce();
      we(l[i]) ? s.value[i] = l[i] : Array.isArray(s.value[i]) ? s.value[i] = [] : s.value[i] = null;
    }
    function ce() {
      let i = {};
      if (V.value)
        for (let l of c.value)
          ye(l, i);
      else
        ye(c.value, i);
      return i;
    }
    function ye(i, l) {
      for (let A of i)
        A.tempKey && we(A.defaultVal) && oe(A, l), A.key && we(A.defaultVal) && (l[A.key] = A.defaultVal), A.key2 && we(A.defaultVal2) && (l[A.key2] = A.defaultVal2);
    }
    function W(i) {
      if (i.show) {
        if (K(i.show) === "Object")
          return ne(i, ge(i.show));
        if (Array.isArray(i.show))
          if (i.showOr) {
            for (let l of i.show)
              if (ge(l) === !0)
                return ne(i, !0);
            return ne(i, !1);
          } else {
            for (let l of i.show)
              if (ge(l) === !1)
                return ne(i, !1);
            return ne(i, !0);
          }
        else if (K(i.show) === "Function")
          return ne(i, i.show(n.value));
      } else
        i.showing || (i.showing = !0);
      return !0;
    }
    function ge(i) {
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
    function ne(i, l) {
      return !i.showing && l && i.key ? (i.showing = l, i.defaultVal !== void 0 && (i.tempKey ? (s.value[i.tempKey] === null || s.value[i.tempKey] === void 0 || (K(s.value[i.tempKey]) === "Object" || Array.isArray(s.value[i.tempKey])) && Ce(s.value[i.tempKey])) && oe(i, s.value) : (n.value[i.key] === null || n.value[i.key] === void 0) && (n.value[i.key] = i.defaultVal), i.key2 && i.deafultVal2 !== void 0 && (n.value[i.key2] === null || n.value[i.key2] === void 0) && i.type !== "inputMap" && (n.value[i.key2] = i.defaultVal2)), i.tempKey && ue(s.value[i.tempKey], i)) : i.showing = l, l;
    }
    function oe(i, l) {
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
    function de() {
      let i = ie(t.formData);
      if (V.value)
        for (let l of i)
          re(l);
      else
        re(i);
      c.value = i;
    }
    function re(i) {
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
                ($) => {
                  ue($, l);
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
                ($) => {
                  ue($, l);
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
              ke(
                () => s.value[te],
                ($) => {
                  ue($, l);
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
                  let $ = !0;
                  for (let Y of l.changeOption)
                    if (!Y.valKey || !Y.key) {
                      $ = !1;
                      break;
                    }
                  $ ? p.push(
                    ke(
                      () => {
                        let Y = "";
                        if (Array.isArray(l.changeOption))
                          for (let _e of l.changeOption) {
                            let Ue = n.value[_e.valKey];
                            if (Ue || Ue === 0 || Ue === !1)
                              Y += "&" + _e.key + "=" + Ue;
                            else if (!_e.notRequired)
                              return !1;
                          }
                        return Y;
                      },
                      (Y) => {
                        let _e = ie(s.value[l.tempKey]);
                        if (s.value[l.tempKey] = null, Y && l.optionUrl) {
                          let Ue = l.optionUrl.indexOf("?") !== -1 ? l.optionUrl : l.optionUrl + "?";
                          Pe((Ue + Y).replace(/\?&/, "?"), l, _e);
                        } else
                          l.options = [], l.localOption && (l.options = [...l.localOption]), we(_e) && R(_e, l);
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
                      ($) => {
                        let Y = ie(s.value[l.tempKey]);
                        if (s.value[l.tempKey] = null, ($ || $ === 0 || $ === !1) && l.optionUrl && typeof l.changeOption == "object" && !Array.isArray(l.changeOption)) {
                          let _e = l.optionUrl.indexOf("?") !== -1 ? l.optionUrl : l.optionUrl + "?";
                          Pe((_e + "&" + l.changeOption.key + "=" + $).replace(/\?&/, "?"), l, Y);
                        } else
                          l.options = [], l.localOption && (l.options = [...l.localOption]), we(Y) && R(Y, l);
                      },
                      { immediate: !0 }
                    )
                  ) : K(l.changeOption) === "Boolean" && p.push(
                    ke(
                      () => He(t.formData, ($) => $.key === l.key).optionUrl,
                      ($) => {
                        let Y = ie(s.value[l.tempKey]);
                        s.value[l.tempKey] = null, $ ? Pe($, l, Y) : (l.options = [], l.localOption && (l.options = [...l.localOption]), we(Y) && R(Y, l));
                      },
                      {
                        immediate: !0
                      }
                    )
                  );
              else
                l.optionUrl && Pe(l.optionUrl, l);
            else
              K(l.borrowOption) === "String" && (l.options = He(c.value, ($) => $.key === l.borrowOption).options);
            const le = "opEle" + Math.floor(Math.random() * 1e8);
            l.key && (l.tempKey = le, l.type === "select" && l.multiple || l.type === "checkboxGroup" ? s.value[le] = l.defaultVal !== void 0 ? l.defaultVal : [] : l.booleanVal ? s.value[le] = l.defaultVal !== void 0 ? l.defaultVal ? 1 : 0 : null : s.value[le] = l.defaultVal !== void 0 ? l.defaultVal : null, p.push(
              ke(
                () => s.value[le],
                ($) => {
                  ue($, l);
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
                ($) => {
                  ue($, l);
                }
              )
            );
            break;
        }
    }
    function Pe(i, l, A) {
      Ke.get(i).then((k) => {
        var le;
        if (!l.options)
          return;
        let te = ((le = k == null ? void 0 : k.data) == null ? void 0 : le.records) || (k == null ? void 0 : k.data) || k || [];
        Array.isArray(te) ? (l.optionFilter && K(l.optionFilter) === "Function" && (te = l.optionFilter(te)), l.optionLabel && l.optionVal ? (l.options.length = 0, l.options.push(
          ...te.map((X) => {
            let $;
            if (Array.isArray(l.optionLabel)) {
              let Y = "";
              l.optionLabel.forEach((_e, Ue) => {
                let gl = String(X[_e]);
                Ue === 1 ? Y += "（" + gl : Ue > 1 ? Y += "、" + gl : Y += gl;
              }), $ = {
                label: Y + "）",
                val: l.optionVal && X[l.optionVal]
              };
            } else
              $ = {
                label: l.optionLabel && X[l.optionLabel],
                val: l.optionVal && X[l.optionVal]
              };
            if (l.collectLabel)
              if (Array.isArray(l.collectLabel))
                for (let Y of l.collectLabel)
                  Y.valKey && Y.valKey !== "label" && ($[Y.valKey] = X[Y.valKey]);
              else
                l.collectLabel.valKey && l.collectLabel.valKey !== "label" && ($[l.collectLabel.valKey] = X[l.collectLabel.valKey]);
            if ($.val !== null && $.val !== void 0)
              return $;
          })
        )) : (l.options.length = 0, l.options.push(...te))) : l.options.length = 0, l.localOption && l.options.unshift(...l.localOption), we(A) && R(A, l), l.disableOptionByOthers && (K(l.disableOptionByOthers) === "String" ? p.push(
          ke(
            () => n.value[l.disableOptionByOthers],
            (X) => {
              if (q(l.tempKey), !!l.options) {
                for (let $ of l.options)
                  $.disabled && ($.disabled = !1);
                if (X || X === 0 || X === !1)
                  for (let $ of l.options)
                    $.val === X && ($.disabled = !0);
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
              if (q(l.tempKey), !!l.options) {
                for (let $ of l.options)
                  $.disabled && ($.disabled = !1);
                if (X) {
                  for (let $ of l.options)
                    for (let Y = 0; Y < X.length; Y++)
                      if ($.val === X[Y]) {
                        $.disabled = !0, X.splice(Y, 1);
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
    function R(i, l) {
      Array.isArray(l.options) && nt(l.options, { val: i }) !== -1 && (s.value[l.tempKey] = i);
    }
    function F() {
      if (n.value = {}, V.value)
        for (let i of t.formData)
          fe(i);
      else
        fe(t.formData);
    }
    function fe(i) {
      for (let l of i)
        l.key && (l.type === "checkboxGroup" || l.type === "select" && l.multiple ? n.value[l.key] = l.defaultVal !== void 0 && l.show === void 0 ? l.defaultVal : [] : l.type === "editor" || l.type === "editorPro" ? n.value[l.key] = l.defaultVal !== void 0 && l.show === void 0 ? l.defaultVal : "" : (n.value[l.key] = l.defaultVal !== void 0 && l.show === void 0 ? l.defaultVal : null, l.key2 && (n.value[l.key2] = l.defaultVal2 !== void 0 && l.show === void 0 ? l.defaultVal2 : null)));
    }
    function ue(i, l) {
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
              let te = /^-?\d+(.\d+)?$/;
              l.numberVal && te.test(i) ? n.value[l.key] = Number(i) : n.value[l.key] = i;
            } else
              n.value[l.key] = null;
            break;
          case "select":
          case "radioGroup":
          case "checkboxGroup":
            if (!l.key)
              return;
            if (l.booleanVal && !l.multiple ? n.value[l.key] = i === void 0 || i === "" || i === null ? null : !!i : l.multiple || l.type === "checkboxGroup" ? n.value[l.key] = Object.assign([], i) : n.value[l.key] = i, l.collectLabel) {
              const te = Ve(l, i);
              if (Array.isArray(l.collectLabel)) {
                for (let le of l.collectLabel)
                  if (le.key && le.valKey) {
                    const X = Z(le.key);
                    let $ = null;
                    Array.isArray(te) ? ($ = te.map((_e) => _e[le.valKey]), n.value[le.key] = $, X && (s.value[X] = $)) : (te && we(te[le.valKey]) && ($ = te[le.valKey]), n.value[le.key] = $, X && (s.value[X] = $));
                    let Y = He(c.value, (_e) => _e.key === le.key);
                    Y && Y.tempKey && (s.value[Y.tempKey] = n.value[le.key]);
                  }
              } else if (typeof l.collectLabel == "object" && l.collectLabel.key && l.collectLabel.valKey) {
                const le = Z(l.collectLabel.key);
                let X = null;
                Array.isArray(te) ? (X = te.map(
                  (Y) => l.collectLabel && !Array.isArray(l.collectLabel) && Y[l.collectLabel.valKey]
                ), n.value[l.collectLabel.key] = X, le && (s.value[le] = X)) : (te && we(te[l.collectLabel.valKey]) && (X = te[l.collectLabel.valKey]), n.value[l.collectLabel.key] = X, le && (s.value[le] = X));
                let $ = He(
                  c.value,
                  (Y) => l.collectLabel && !Array.isArray(l.collectLabel) && Y.key === l.collectLabel.key || !1
                );
                $ && $.tempKey && (s.value[$.tempKey] = n.value[l.collectLabel.key]);
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
    function Z(i) {
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
      Ul(A, l);
      for (let k in i)
        i.hasOwnProperty(k) && (f.indexOf(k) < 0 && f.push(k), n.value[k] = i[k]);
    }
    function Lt(i) {
      let l = ie(i);
      if (V.value) {
        let A = [];
        for (let k of t.formData)
          A.push(...Ml(k, l));
        return A;
      }
      return Ml(t.formData, l);
    }
    function Ml(i, l) {
      return i.filter((A) => {
        for (let k of Object.keys(l))
          if (A.key === k && I.value.indexOf(k) > -1 && !(l[k] === null || (Array.isArray(l[k]) || K(l[k]) === "Object") && Ce(l[k])))
            return delete l[k], !0;
        return !1;
      }).map((A) => A.key);
    }
    function Ul(i, l = !1) {
      let A = ie(i);
      Ot(i, l);
      for (let k in n.value)
        if (n.value.hasOwnProperty(k) && i[k] !== void 0 && i[k] !== "--") {
          if (Array.isArray(i[k]))
            i[k] = i[k].filter((te) => te !== "--");
          else if (K(i[k]) === "Object")
            for (let te in i[k])
              i[k].hasOwnProperty(te) && i[k][te] === "--" && (i[k][te] = null);
          n.value[k] = i[k];
        } else
          l || (n.value[k] = Array.isArray(n.value[k]) ? [] : null);
      Pt(Lt(A));
    }
    function Ot(i, l = !1) {
      if (V.value)
        for (let A of c.value)
          Fl(A, i, l);
      else
        Fl(c.value, i, l);
    }
    function Fl(i, l, A = !1) {
      for (let k of i)
        if (k.key && (A && (l[k.key] !== void 0 || k.key2 && l[k.key2] !== void 0) || !A) && k.tempKey)
          switch (k.type) {
            case "inputMap":
              if (!k.key2)
                continue;
              K(l[k.key]) === "Number" && K(l[k.key2] === "Number") ? k.key3 ? s.value[k.tempKey] = {
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
    function Mt(i) {
      if (Array.isArray(i))
        for (let l of i)
          Pl(l);
      else
        K(i) === "Object" && Pl(i);
    }
    function Pl(i) {
      const { index: l, indexB: A, key: k, val: te } = i;
      if (typeof l == "number")
        if (Array.isArray(c.value[l])) {
          if (typeof A == "number")
            if (k && (te || te !== void 0))
              c.value[l][A][k] = te;
            else
              for (let le of Object.keys(i))
                le !== "index" && k !== "indexB" && (c.value[l][A][le] = i[le]);
        } else if (k && (te || te !== void 0))
          c.value[l][k] = te;
        else
          for (let le of Object.keys(i))
            le !== "index" && (c.value[l][le] = i[le]);
    }
    function Rl({ label: i, root: l }) {
      l.key2 && (n.value[l.key2] = i), Ge({
        e: i,
        root: l
      });
    }
    function Kl(i) {
      i.beforeKey && Jt(d, (l) => l === i.beforeKey), i.key && (d.indexOf(i.key) === -1 && d.push(i.key), Ge({
        e: null,
        root: i
      }));
    }
    function $l({ name: i, root: l }) {
      l.key2 && (n.value[l.key2] = i), Ge({
        e: i,
        root: l
      });
    }
    function Dl({ e: i, root: l }) {
      Ge({
        e: i,
        root: l
      }), Re(function() {
        var A, k;
        (k = (A = u.value) == null ? void 0 : A.validateField) == null || k.call(A, l.key);
      });
    }
    function Ge({ e: i, root: l }) {
      Te(() => {
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
    function Nl() {
      let i = {};
      for (let l of B.value)
        i[l] = n.value[l];
      return t.trim && (i = pl(i)), i;
    }
    function Ut() {
      var i, l;
      (l = (i = u.value) == null ? void 0 : i.validate) == null || l.call(i);
    }
    function Ft(i) {
      Te(() => {
        var l, A;
        (A = (l = u.value) == null ? void 0 : l.validateField) == null || A.call(l, i, () => {
        });
      }, 10);
    }
    function Pt(i) {
      Te(() => {
        var l, A;
        if (Array.isArray(i))
          for (let k of i)
            (A = (l = u.value) == null ? void 0 : l.validateField) == null || A.call(l, k, () => {
            });
      }, 10);
    }
    function Rt(i) {
      i !== void 0 && (_.value = !!i);
    }
    function vl() {
      var i, l;
      t.disabled || (l = (i = u.value) == null ? void 0 : i.validate) == null || l.call(i, (A) => {
        y || (y = !0, A && (_.value = !0, e("on-submit", Nl())), Te(() => {
          y = !1;
        }, 2e3));
      });
    }
    return Xe(() => {
      F(), de();
    }), o({
      resetForm: g,
      refreshFormDom: E,
      reRenderForm: O,
      setItemToValGroup: nl,
      updateValGroup: Ul,
      updateFormDataT: Mt,
      validate: Ut,
      reValidate: Ft,
      changeLoading: Rt,
      getValGroup: Nl,
      submit: vl
    }), (i, l) => {
      const A = j("FormItem"), k = j("Button"), te = j("Form");
      return x(), J(te, {
        ref_key: "formGroupXRef",
        ref: u,
        model: h(n),
        rules: h(C),
        "label-width": t.labelWidth,
        inline: t.inline,
        "show-message": t.showMessage,
        class: "formXN",
        key: h(b)
      }, {
        default: G(() => [
          N(A, { style: { display: "none" } }, {
            default: G(() => [
              Dn
            ]),
            _: 1
          }),
          h(V) ? (x(!0), D(me, { key: 0 }, ve(h(c), (le, X) => (x(), D("div", {
            class: Ae([i.teamClass, "formTeamBox" + X]),
            key: "formTeamBox" + X
          }, [
            (x(!0), D(me, null, ve(le, ($, Y) => (x(), D(me, {
              key: "formItem" + Y
            }, [
              W($) ? (x(), J(Xl, {
                key: 0,
                item: $,
                style: Q(h(T)),
                "item-style": h(w),
                "val-group": h(n),
                "temp-keys": h(s),
                inline: t.inline,
                disabled: t.disabled,
                "label-width": t.labelWidth,
                "item-width": t.itemWidth,
                "mgr-url": h(r),
                "upload-url": h(v),
                onItemChange: Ge,
                onReValidate: Dl,
                onClearTempKeyItem: q,
                onSelectInputChange: Kl,
                onAlNameChange: $l,
                onAsyncLabelChange: Rl
              }, Ye({ _: 2 }, [
                ve(M(le), (_e) => ({
                  name: _e.slotName,
                  fn: G((Ue) => [
                    Ie(i.$slots, _e.slotName, {
                      valGroup: Ue.valGroup
                    })
                  ])
                }))
              ]), 1032, ["item", "style", "item-style", "val-group", "temp-keys", "inline", "disabled", "label-width", "item-width", "mgr-url", "upload-url"])) : he("", !0)
            ], 64))), 128))
          ], 2))), 128)) : he("", !0),
          (x(!0), D(me, null, ve(h(c), (le, X) => (x(), D(me, {
            key: "formItem" + X
          }, [
            !h(V) && W(le) ? (x(), J(Xl, {
              key: 0,
              item: le,
              style: Q(h(T)),
              "item-style": h(w),
              "val-group": h(n),
              "temp-keys": h(s),
              inline: t.inline,
              disabled: t.disabled,
              "label-width": t.labelWidth,
              "item-width": t.itemWidth,
              "mgr-url": h(r),
              "upload-url": h(v),
              onItemChange: Ge,
              onReValidate: Dl,
              onClearTempKeyItem: q,
              onSelectInputChange: Kl,
              onAlNameChange: $l,
              onAsyncLabelChange: Rl
            }, Ye({ _: 2 }, [
              ve(M(i.formData), ($) => ({
                name: $.slotName,
                fn: G((Y) => [
                  Ie(i.$slots, $.slotName, {
                    valGroup: Y.valGroup
                  })
                ])
              }))
            ]), 1032, ["item", "style", "item-style", "val-group", "temp-keys", "inline", "disabled", "label-width", "item-width", "mgr-url", "upload-url"])) : he("", !0)
          ], 64))), 128)),
          t.showLongOkBt ? (x(), J(A, { key: 1 }, {
            default: G(() => [
              N(k, {
                onClick: vl,
                style: Q(h(w)),
                type: "primary",
                loading: t.btnLoading && h(_),
                disabled: t.disabled
              }, {
                default: G(() => [
                  pe(H(t.longOkBtTxt || h(S)("r.confirm")), 1)
                ]),
                _: 1
              }, 8, ["style", "loading", "disabled"])
            ]),
            _: 1
          })) : he("", !0),
          U("div", Nn, [
            t.showInlineOkBt ? (x(), J(k, {
              key: 0,
              type: "primary",
              class: Ae({ inlineFormBtXN: t.inline, okBtnXN: !0 }),
              onClick: vl,
              loading: t.btnLoading && h(_),
              disabled: t.disabled
            }, {
              default: G(() => [
                pe(H(t.inlineOkBtTxt || h(S)("r.confirm")), 1)
              ]),
              _: 1
            }, 8, ["class", "loading", "disabled"])) : he("", !0),
            t.showInlineClearBt ? (x(), J(k, {
              key: 1,
              onClick: g,
              class: Ae({ inlineFormBtXN: t.inline }),
              type: "dashed"
            }, {
              default: G(() => [
                pe(H(t.inlineClearBtTxt || h(S)("r.clear")), 1)
              ]),
              _: 1
            }, 8, ["class"])) : he("", !0)
          ])
        ]),
        _: 3
      }, 8, ["model", "rules", "label-width", "inline", "show-message"]);
    };
  }
}), En = /* @__PURE__ */ se({
  __name: "FormGroup",
  props: {
    formData: { default: () => [] },
    with: { default: "100%" },
    labelWidth: { default: () => hl().formGroupLabelWidth },
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
    const t = a, u = z({ width: t.with }), n = z(!1), c = z(), s = P(() => {
      if (Array.isArray(t.formData))
        if (Array.isArray(t.formData[0])) {
          let I = [];
          for (let M of t.formData)
            I = I.concat(M.filter((m) => m.type === "custom"));
          return I;
        } else
          return t.formData.filter((I) => I.type === "custom");
      return [];
    });
    function p() {
      return new Promise((I) => {
        var M, m;
        (m = (M = c.value).resetForm) == null || m.call(M).then((L) => {
          I(L);
        });
      });
    }
    function r() {
      return new Promise((I) => {
        var M, m;
        (m = (M = c.value).refreshFormDom) == null || m.call(M).then((L) => {
          I(L);
        });
      });
    }
    function d() {
      return new Promise((I) => {
        var M, m;
        (m = (M = c.value).reRenderForm) == null || m.call(M).then((L) => {
          I(L);
        });
      });
    }
    function f(I, M) {
      var m, L;
      (L = (m = c.value).setItemToValGroup) == null || L.call(m, I, M);
    }
    function _(I, M) {
      var m, L;
      (L = (m = c.value).updateValGroup) == null || L.call(m, I, M);
    }
    function b(I) {
      var M, m;
      (m = (M = c.value).updateFormDataT) == null || m.call(M, I);
    }
    function v() {
      var I, M;
      (M = (I = c.value).validate) == null || M.call(I);
    }
    function y(I) {
      var M, m;
      (m = (M = c.value).reValidate) == null || m.call(M, I);
    }
    function V(I) {
      var M, m;
      I !== void 0 && (n.value = !!I, (m = (M = c.value).changeLoading) == null || m.call(M, n.value));
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
    function B() {
      e("on-cancel"), Te(() => {
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
      validate: v,
      reValidate: y,
      changeLoading: V,
      getValGroup: T,
      submit: C,
      close: B
    }), (I, M) => {
      const m = j("Button");
      return x(), D("div", {
        style: Q(h(u)),
        class: "formGroupBoxVM"
      }, [
        N(yl, al({
          ref_key: "formRRef",
          ref: c
        }, I.$attrs, {
          "form-data": t.formData,
          "label-width": t.labelWidth,
          "content-width": t.contentWidth,
          "item-width": t.itemWidth,
          btnLoading: t.btnLoading,
          onOnSubmit: w
        }), Ye({ _: 2 }, [
          ve(h(s), (L) => ({
            name: L.slotName,
            fn: G(({ valGroup: g }) => [
              Ie(I.$slots, L.slotName, { valGroup: g })
            ])
          }))
        ]), 1040, ["form-data", "label-width", "content-width", "item-width", "btnLoading"]),
        xe(U("div", {
          class: "formFooterVM",
          style: Q({ marginLeft: t.labelWidth + "px" })
        }, [
          U("div", {
            style: Q({ width: t.contentWidth }),
            class: "btnBoxKAL"
          }, [
            t.showOkBt ? (x(), J(m, {
              key: 0,
              onClick: C,
              class: "form-save-btn",
              loading: t.btnLoading && h(n)
            }, {
              default: G(() => [
                pe(H(t.okBtTxt || h(S)("r.confirm")), 1)
              ]),
              _: 1
            }, 8, ["loading"])) : he("", !0),
            t.showCancelBt ? (x(), J(m, {
              key: 1,
              onClick: B,
              class: "form-cancel-btn"
            }, {
              default: G(() => [
                pe(H(t.cancelBtTxt || h(S)("r.cancel")), 1)
              ]),
              _: 1
            })) : he("", !0)
          ], 4)
        ], 4), [
          [Le, t.showOkBt || t.showCancelBt]
        ])
      ], 4);
    };
  }
}), Ll = /* @__PURE__ */ se({
  __name: "SearchForm",
  props: {
    formData: { default: () => [] },
    labelWidth: { default: () => hl().searchFormLabelWidth },
    itemWidth: { default: 202 },
    showInlineOkBt: { type: Boolean, default: !0 },
    showInlineClearBt: { type: Boolean, default: !0 }
  },
  emits: ["on-search"],
  setup(a, { expose: o, emit: e }) {
    const t = a, u = z(), n = P(() => {
      if (Array.isArray(t.formData[0])) {
        let w = [];
        for (let C of t.formData)
          w = w.concat(C.filter((B) => B.type === "custom"));
        return w;
      }
      return t.formData.filter((w) => w.type === "custom");
    });
    function c() {
      return new Promise((w) => {
        var C, B;
        (B = (C = u.value).resetForm) == null || B.call(C).then(() => {
          w();
        });
      });
    }
    function s() {
      return new Promise((w) => {
        var C, B;
        (B = (C = u.value).refreshFormDom) == null || B.call(C).then(() => {
          w();
        });
      });
    }
    function p() {
      return new Promise((w) => {
        var C, B;
        (B = (C = u.value).reRenderForm) == null || B.call(C).then(() => {
          w();
        });
      });
    }
    function r(w, C) {
      var B, I;
      (I = (B = u.value).setItemToValGroup) == null || I.call(B, w, C);
    }
    function d(w, C) {
      var B, I;
      (I = (B = u.value).updateValGroup) == null || I.call(B, w, C);
    }
    function f(w) {
      var C, B;
      (B = (C = u.value).updateFormDataT) == null || B.call(C, w);
    }
    function _() {
      var w, C;
      (C = (w = u.value).validate) == null || C.call(w);
    }
    function b(w) {
      var C, B;
      (B = (C = u.value).reValidate) == null || B.call(C, w);
    }
    function v(w) {
      var C, B;
      (B = (C = u.value).changeLoading) == null || B.call(C, w === void 0 ? !1 : w);
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
    return o({
      resetForm: c,
      refreshFormDom: s,
      reRenderForm: p,
      setItemToValGroup: r,
      updateValGroup: d,
      updateFormDataT: f,
      validate: _,
      reValidate: b,
      changeLoading: v,
      getValGroup: y,
      submit: T
    }), (w, C) => (x(), J(yl, al({
      ref_key: "formRRef",
      ref: u
    }, w.$attrs, {
      "form-data": t.formData,
      "label-width": t.labelWidth,
      "item-width": t.itemWidth,
      inline: "",
      "show-long-ok-bt": !1,
      "show-inline-ok-bt": t.showInlineOkBt,
      "inline-ok-bt-txt": h(S)("r.check"),
      "show-inline-clear-bt": t.showInlineClearBt,
      "show-message": !1,
      onOnSubmit: V
    }), Ye({ _: 2 }, [
      ve(h(n), (B) => ({
        name: B.slotName,
        fn: G(({ valGroup: I }) => [
          Ie(w.$slots, B.slotName, { valGroup: I })
        ])
      }))
    ]), 1040, ["form-data", "label-width", "item-width", "show-inline-ok-bt", "inline-ok-bt-txt", "show-inline-clear-bt"]));
  }
}), Gn = /* @__PURE__ */ se({
  __name: "FormModal",
  props: {
    title: {},
    formData: { default: () => [] },
    width: { default: 520 },
    labelWidth: { default: () => hl().formModalLabelWidth },
    okBtTxt: {},
    cancelBtTxt: {},
    hideCancelBt: { type: Boolean, default: !1 },
    hideFooter: { type: Boolean, default: !1 },
    btnLoading: { type: Boolean, default: !1 }
  },
  emits: ["on-close", "on-open"],
  setup(a, { expose: o, emit: e }) {
    const t = a, u = z(), n = z(!1), c = z(!1), s = P(() => {
      if (Array.isArray(t.formData[0])) {
        let m = [];
        for (let L of t.formData)
          m = m.concat(L.filter((g) => g.type === "custom"));
        return m;
      }
      return t.formData.filter((m) => m.type === "custom");
    });
    function p() {
      return new Promise((m) => {
        var L, g;
        (g = (L = u.value).resetForm) == null || g.call(L).then(() => {
          m();
        });
      });
    }
    function r() {
      return new Promise((m) => {
        var L, g;
        (g = (L = u.value).refreshFormDom) == null || g.call(L).then(() => {
          m();
        });
      });
    }
    function d() {
      return new Promise((m) => {
        var L, g;
        (g = (L = u.value).reRenderForm) == null || g.call(L).then(() => {
          m();
        });
      });
    }
    function f(m, L) {
      var g, O;
      (O = (g = u.value).setItemToValGroup) == null || O.call(g, m, L);
    }
    function _(m, L) {
      var g, O;
      (O = (g = u.value).updateValGroup) == null || O.call(g, m, L);
    }
    function b(m) {
      var L, g;
      (g = (L = u.value).updateFormDataT) == null || g.call(L, m);
    }
    function v() {
      var m, L;
      (L = (m = u.value).validate) == null || L.call(m);
    }
    function y(m) {
      var L, g;
      (g = (L = u.value).reValidate) == null || g.call(L, m);
    }
    function V(m) {
      var L, g;
      m !== void 0 && (c.value = !!m, (g = (L = u.value).changeLoading) == null || g.call(L, c.value));
    }
    function T() {
      var m, L;
      return (L = (m = u.value).getValGroup) == null ? void 0 : L.call(m);
    }
    function w() {
      c.value = !0;
    }
    function C() {
      var m, L;
      t.hideCancelBt ? I() : (L = (m = u.value).submit) == null || L.call(m);
    }
    function B() {
      n.value = !0;
    }
    function I() {
      n.value = !1, Te(() => {
        var m, L;
        c.value = !1, (L = (m = u.value).changeLoading) == null || L.call(m, !1);
      }, 1e3);
    }
    function M(m) {
      e(m ? "on-open" : "on-close");
    }
    return o({
      resetForm: p,
      refreshFormDom: r,
      reRenderForm: d,
      setItemToValGroup: f,
      updateValGroup: _,
      updateFormDataT: b,
      validate: v,
      reValidate: y,
      changeLoading: V,
      getValGroup: T,
      submit: C,
      open: B,
      close: I
    }), (m, L) => {
      const g = j("Button"), O = j("Modal");
      return x(), J(O, {
        class: Ae(["formModal", { hideFooter: t.hideFooter }]),
        title: t.title || h(S)("r.title"),
        modelValue: h(n),
        "onUpdate:modelValue": L[0] || (L[0] = (E) => Fe(n) ? n.value = E : null),
        "mask-closable": !1,
        "footer-hide": t.hideFooter,
        width: t.width,
        onOnVisibleChange: M
      }, {
        footer: G(() => [
          N(g, {
            onClick: C,
            class: "modal-save-btn",
            loading: t.btnLoading && h(c)
          }, {
            default: G(() => [
              pe(H(t.okBtTxt || h(S)("r.confirm")), 1)
            ]),
            _: 1
          }, 8, ["loading"]),
          t.hideCancelBt ? he("", !0) : (x(), J(g, {
            key: 0,
            onClick: I,
            class: "modal-cancel-btn"
          }, {
            default: G(() => [
              pe(H(t.cancelBtTxt || h(S)("r.cancel")), 1)
            ]),
            _: 1
          }))
        ]),
        default: G(() => [
          N(yl, al({
            ref_key: "formRRef",
            ref: u
          }, m.$attrs, {
            "form-data": t.formData,
            "label-width": t.labelWidth,
            btnLoading: t.btnLoading,
            onOnSubmit: w
          }), Ye({ _: 2 }, [
            ve(h(s), (E) => ({
              name: E.slotName,
              fn: G(({ valGroup: ee }) => [
                Ie(m.$slots, E.slotName, { valGroup: ee })
              ])
            }))
          ]), 1040, ["form-data", "label-width", "btnLoading"])
        ]),
        _: 3
      }, 8, ["title", "modelValue", "footer-hide", "class", "width"]);
    };
  }
}), zn = /* @__PURE__ */ se({
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
    let c = [];
    const s = P(() => Array.isArray(e.collectVal) ? e.collectVal : typeof e.collectVal == "string" ? [e.collectVal] : []), p = P(() => Array.isArray(e.modelValue) ? e.modelValue : []);
    ke(
      () => e.data,
      (v) => {
        t.value = !1;
        let y = [];
        r(v, y), u.value = y, Re(function() {
          t.value = !0, e.inlineLeaf && Re(_);
        });
      },
      {
        immediate: !0,
        deep: !0
      }
    ), ke(
      () => p.value,
      (v) => {
        let y, V = "s";
        if (Array.isArray(e.collectVal) ? (y = e.collectVal[0] || "", V = "a") : y = e.collectVal, !y || JSON.stringify(v) === JSON.stringify(c)) {
          c = [];
          return;
        }
        We({
          group: u.value,
          condition: (T) => T.checked === !0,
          key: "checked",
          val: !1
        }), We(V === "a" ? {
          group: u.value,
          condition: (T) => nt(v, [y, T[y]]) !== -1,
          key: "checked",
          val: !0
        } : {
          group: u.value,
          condition: (T) => v.indexOf(T[y]) !== -1,
          key: "checked",
          val: !0
        });
      }
    ), ke(
      () => e.disabled,
      (v) => {
        We({
          group: u.value,
          condition: (y) => y.disableCheckbox !== v,
          key: "disableCheckbox",
          val: v
        }), e.inlineLeaf && Re(_);
      },
      { immediate: !0 }
    );
    function r(v, y = []) {
      for (let V of v) {
        let T = !1;
        s.value.length > 1 ? T = Hl(p.value, (C) => C[s.value[0]] === V[s.value[0]]) !== void 0 : T = s.value[0] ? p.value.indexOf(V[s.value[0]]) !== -1 : !1;
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
    function d(v, y = []) {
      for (let V of v) {
        let T = !1;
        s.value.length > 1 ? T = Hl(p.value, (C) => C[s.value[0]] === V[s.value[0]]) !== void 0 : T = s.value[0] ? p.value.indexOf(V[s.value[0]]) !== -1 : !1;
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
    function f(v, {
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
      return v(
        "div",
        {
          style: {
            display: "inline-block",
            width: "100%"
          },
          class: V
        },
        [
          v(
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
    function _(v) {
      if (v) {
        v.expand && Re(_);
        return;
      }
      let y = document.querySelectorAll("#" + n + " .inlineChildXA");
      if (y.length > 0)
        for (let V of y) {
          let T = V.parentElement, w = T == null ? void 0 : T.nextElementSibling;
          if (!w)
            return;
          if (w.tagName !== "BR") {
            let C = T == null ? void 0 : T.parentElement, B = document.createElement("br");
            C == null || C.insertBefore(B, w), w = B.nextElementSibling, (w == null ? void 0 : w.className.indexOf("inlineTreeNodeF")) === -1 && w.setAttribute("class", w.className + " inlineTreeNodeF");
          }
          for (; w != null && w.nextElementSibling; )
            w = w.nextElementSibling, w.className.indexOf("inlineTreeNodeF") === -1 && w.setAttribute("class", w.className + " inlineTreeNodeF");
        }
    }
    function b(v) {
      let y = [];
      if (e.leaf) {
        for (let V of v)
          if (!V.children)
            if (Array.isArray(e.collectVal)) {
              let T = {};
              for (let w of e.collectVal)
                T[w] = V[w];
              y.push(T);
            } else
              y.push(V[e.collectVal]);
      } else
        for (let V of v)
          if (Array.isArray(e.collectVal)) {
            let T = {};
            for (let w of e.collectVal)
              T[w] = V[w];
            y.push(T);
          } else
            y.push(V[e.collectVal]);
      c = y, o("update:modelValue", y), o("on-change", ie(y));
    }
    return (v, y) => {
      const V = j("Tree");
      return h(t) ? (x(), J(V, {
        key: 0,
        id: n,
        class: "checkboxTreeGA",
        data: h(u),
        render: f,
        onOnCheckChange: b,
        onOnToggleExpand: _,
        "show-checkbox": ""
      }, null, 8, ["data"])) : he("", !0);
    };
  }
}), Hn = { class: "transferBoxRL" }, Wn = { class: "leftBoxLLL" }, jn = { class: "fullHeight flexColumnBox" }, qn = { class: "notGrow" }, Jn = { class: "titleLLL" }, Yn = { class: "growFlexItem" }, Xn = { class: "middleBoxLLL" }, Zn = { class: "rightBoxLLL" }, Qn = { class: "fullHeight flexColumnBox" }, eo = { class: "notGrow" }, lo = { class: "titleLLL" }, to = { class: "growFlexItem" }, ao = /* @__PURE__ */ se({
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
    let u = z({}), n = z({}), c = z([]), s = z([]), p = z(0), r = z(0);
    const d = P(() => ({ ...t.constSearchDataLeft, ...u.value })), f = P(() => ({ ...t.constSearchDataRight, ...n.value })), _ = P(() => p.value < 1), b = P(() => c.value.length < 1), v = P(() => s.value.length < 1), y = P(() => r.value < 1), V = z(), T = z(), w = z(), C = z();
    function B() {
      V.value.resetForm(), T.value.resetForm(), Ce(u.value) || (u.value = {}), Ce(n.value) || (n.value = {}), w.value.clearSelect(), C.value.clearSelect();
    }
    function I() {
      w.value.search(), C.value.search();
    }
    function M(W) {
      c.value = W;
    }
    function m(W) {
      s.value = W;
    }
    function L(W) {
      var ge, ne, oe, de, re;
      p.value = ((ne = (ge = W == null ? void 0 : W.data) == null ? void 0 : ge.page) == null ? void 0 : ne.total) || ((de = (oe = W == null ? void 0 : W.data) == null ? void 0 : oe.data) == null ? void 0 : de.total) || ((re = W == null ? void 0 : W.data) == null ? void 0 : re.total) || (W == null ? void 0 : W.total) || 0;
    }
    function g(W) {
      var ge, ne, oe, de, re;
      r.value = ((ne = (ge = W == null ? void 0 : W.data) == null ? void 0 : ge.page) == null ? void 0 : ne.total) || ((de = (oe = W == null ? void 0 : W.data) == null ? void 0 : oe.data) == null ? void 0 : de.total) || ((re = W == null ? void 0 : W.data) == null ? void 0 : re.total) || (W == null ? void 0 : W.total) || 0;
    }
    function O(W) {
      u.value = W;
    }
    function E(W) {
      n.value = W;
    }
    function ee() {
      t.addUrl && ye("add");
    }
    function ae() {
      t.deleteUrl && ye("delete");
    }
    function q() {
      t.addAllUrl && t.addUrl && ye("addAll");
    }
    function ce() {
      t.deleteAllUrl && ye("deleteAll");
    }
    function ye(W) {
      let ge, ne, oe = {}, de = "";
      switch (W) {
        case "add":
          ge = t.addMethod, ne = t.addUrl, oe = t.addParamsHandle(s.value), de = S("r.add");
          break;
        case "delete":
          ge = t.deleteMethod, ne = t.deleteUrl, oe = t.deleteParamsHandle(c.value), de = S("r.remove");
          break;
        case "addAll":
          ge = t.addAllMethod, ne = t.addAllUrl, oe = t.addAllParamsHandle(f.value), de = S("r.addAll");
          break;
        case "deleteAll":
          ge = t.deleteAllMethod, ne = t.deleteAllUrl, oe = t.deleteAllParamsHandle(d.value), de = S("r.removeAll");
          break;
      }
      ne && ge && Ke[ge](ne, oe, null, [], { spin: !0 }, !1).then((re) => {
        (re == null ? void 0 : re.code) === 0 ? (Se(de + S("r.success"), (re == null ? void 0 : re.message) || "", "success"), w.value && w.value.getTableData(), C.value && C.value.getTableData(), e("transferred")) : Se(de + S("r.failed"), (re == null ? void 0 : re.message) || "", "error");
      }).catch(() => {
        Se(de + S("r.error"), "", "error");
      });
    }
    return o({
      reset: B,
      search: I
    }), (W, ge) => {
      const ne = j("Icon"), oe = j("Button");
      return x(), D("div", Hn, [
        U("div", Wn, [
          U("div", jn, [
            U("div", qn, [
              U("div", Jn, H(t.titleLeft || h(S)("r.added")), 1),
              N(Bl, null, {
                default: G(() => [
                  N(Ll, {
                    ref_key: "leftFormRef",
                    ref: V,
                    "form-data": t.formDataLeft,
                    "form-rules": t.formRulesLeft,
                    "label-width": t.searchFormLabelWith,
                    onOnSearch: O
                  }, null, 8, ["form-data", "form-rules", "label-width"])
                ]),
                _: 1
              })
            ]),
            U("div", Yn, [
              N(Sl, {
                ref_key: "lTabRef",
                ref: w,
                columns: t.leftTableColumns,
                url: t.leftTableUrl,
                "search-data": h(d),
                onOnSelectionChange: M,
                onOnDataChange: L,
                "init-data": !!(h(Ce)(t.constSearchDataLeft) && t.leftTableUrl),
                "get-data-loading": "",
                selection: ""
              }, null, 8, ["columns", "url", "search-data", "init-data"])
            ])
          ])
        ]),
        U("div", Xn, [
          N(oe, {
            class: "middleBtLLL",
            size: "large",
            type: "default",
            onClick: ce,
            disabled: h(_)
          }, {
            default: G(() => [
              pe(H(h(S)("r.removeAll")) + " ", 1),
              N(ne, { type: "ios-arrow-forward" })
            ]),
            _: 1
          }, 8, ["disabled"]),
          N(oe, {
            class: "middleBtLLL",
            size: "large",
            type: "default",
            onClick: ae,
            disabled: h(b)
          }, {
            default: G(() => [
              pe(H(h(S)("r.remove")) + " ", 1),
              N(ne, { type: "ios-arrow-forward" })
            ]),
            _: 1
          }, 8, ["disabled"]),
          N(oe, {
            class: "middleBtLLL",
            size: "large",
            type: "primary",
            onClick: ee,
            disabled: h(v)
          }, {
            default: G(() => [
              N(ne, { type: "ios-arrow-back" }),
              pe(" " + H(h(S)("r.add")), 1)
            ]),
            _: 1
          }, 8, ["disabled"]),
          N(oe, {
            class: "middleBtLLL",
            size: "large",
            type: "primary",
            onClick: q,
            disabled: h(y)
          }, {
            default: G(() => [
              N(ne, { type: "ios-arrow-back" }),
              pe(" " + H(h(S)("r.addAll")), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ]),
        U("div", Zn, [
          U("div", Qn, [
            U("div", eo, [
              U("div", lo, H(t.titleRight || h(S)("r.notAdded")), 1),
              N(Bl, null, {
                default: G(() => [
                  N(Ll, {
                    ref_key: "rightFormRef",
                    ref: T,
                    "form-data": t.formDataRight,
                    "form-rules": t.formRulesRight,
                    "label-width": t.searchFormLabelWith,
                    onOnSearch: E
                  }, null, 8, ["form-data", "form-rules", "label-width"])
                ]),
                _: 1
              })
            ]),
            U("div", to, [
              N(Sl, {
                ref_key: "rTabRef",
                ref: C,
                columns: t.rightTableColumns,
                url: t.rightTableUrl,
                "search-data": h(f),
                onOnSelectionChange: m,
                onOnDataChange: g,
                "init-data": !!(h(Ce)(t.constSearchDataRight) && t.rightTableUrl),
                "get-data-loading": "",
                selection: ""
              }, null, 8, ["columns", "url", "search-data", "init-data"])
            ])
          ])
        ])
      ]);
    };
  }
}), no = { class: "boxLPA" }, oo = { class: "headerJ" }, io = { class: "firstT borderBoxAS" }, so = { class: "secondT borderBoxAS" }, ro = { class: "firstCol borderBoxAS" }, uo = { class: "secondCol borderBoxAS" }, co = /* @__PURE__ */ se({
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
    const e = a, t = z([]), u = P(() => {
      let p = ie(e.data), r = ie(t.value);
      for (let d of p) {
        let f = 0;
        if (d.children && !Ce(d.children))
          for (let _ of d.children) {
            for (let b = 0, v = r.length; b < v; b++)
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
            K(e.collectVal) === "String" && d.push(f[e.collectVal]);
        if (f.children) {
          for (let _ of f.children)
            if (_.checked)
              if (Array.isArray(e.collectVal)) {
                let b = {};
                for (let v of e.collectVal)
                  b[v] = _[v];
                d.push(b);
              } else
                K(e.collectVal) === "String" && d.push(_[e.collectVal]);
        }
      }
      r ? (t.value = d, e.leaf ? (o("update:modelValue", d), o("on-change", ie(d))) : Re(function() {
        s(u.value);
      })) : (o("update:modelValue", d), o("on-change", ie(d)));
    }
    return (p, r) => {
      const d = j("Checkbox");
      return x(), D("div", no, [
        U("div", oo, [
          U("div", io, H(p.firstTitle || h(S)("r.level.1")), 1),
          U("div", so, H(p.secondTitle || h(S)("r.level.2")), 1)
        ]),
        (x(!0), D(me, null, ve(h(u), (f, _) => (x(), D("div", {
          class: "bodyJ",
          key: "checkboxJ" + _
        }, [
          U("div", ro, [
            N(d, {
              modelValue: f.checked,
              "onUpdate:modelValue": (b) => f.checked = b,
              indeterminate: f.indeterminate,
              onOnChange: (b) => n(f, b),
              disabled: p.disabled
            }, {
              default: G(() => [
                pe(H(f[p.label]), 1)
              ]),
              _: 2
            }, 1032, ["modelValue", "onUpdate:modelValue", "indeterminate", "onOnChange", "disabled"])
          ]),
          U("div", uo, [
            (x(!0), D(me, null, ve(f.children, (b, v) => (x(), D("div", {
              class: "secItem",
              key: "secItem" + v
            }, [
              N(d, {
                modelValue: b.checked,
                "onUpdate:modelValue": (y) => b.checked = y,
                onOnChange: c,
                disabled: p.disabled
              }, {
                default: G(() => [
                  pe(H(b[p.label]), 1)
                ]),
                _: 2
              }, 1032, ["modelValue", "onUpdate:modelValue", "disabled"])
            ]))), 128))
          ])
        ]))), 128))
      ]);
    };
  }
}), fo = { class: "boxLPB" }, po = { class: "headerF" }, mo = { class: "firstT borderBoxKa" }, ho = { class: "secondT borderBoxKa" }, yo = { class: "thirdT borderBoxKa" }, vo = { class: "firstCol borderBoxKa" }, go = { class: "rightBoxAL" }, bo = { class: "secondCol borderBoxKa" }, ko = { class: "thirdCol borderBoxKa" }, wo = /* @__PURE__ */ se({
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
    const e = a, t = z([]), u = P(() => {
      let r = ie(e.data), d = ie(t.value);
      for (let f of r) {
        let _ = 0, b = 0;
        if (f.children && !Ce(f.children))
          for (let v of f.children) {
            let y = 0;
            if (v.children && !Ce(v.children))
              for (let V of v.children) {
                for (let T = 0, w = d.length; T < w; T++)
                  if (Array.isArray(e.collectVal)) {
                    let C = !0;
                    for (let B of e.collectVal)
                      if (d[T][B] !== V[B]) {
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
            y === 0 ? (v.checked = !1, v.indeterminate = !1) : v.children && y === v.children.length ? (v.checked = !0, v.indeterminate = !1, _++) : (v.checked = !1, v.indeterminate = !0, b++);
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
            for (let v of e.collectVal)
              b[v] = _[v];
            f.push(b);
          } else
            K(e.collectVal) === "String" && f.push(_[e.collectVal]);
        if (_.children)
          for (let b of _.children) {
            if (!d && !e.leaf && b.checked && b.indeterminate === !1)
              if (Array.isArray(e.collectVal)) {
                let v = {};
                for (let y of e.collectVal)
                  v[y] = b[y];
                f.push(v);
              } else
                K(e.collectVal) === "String" && f.push(b[e.collectVal]);
            if (b.children) {
              for (let v of b.children)
                if (v.checked)
                  if (Array.isArray(e.collectVal)) {
                    let y = {};
                    for (let V of e.collectVal)
                      y[V] = v[V];
                    f.push(y);
                  } else
                    K(e.collectVal) === "String" && f.push(v[e.collectVal]);
            }
          }
      }
      d ? (t.value = f, e.leaf ? (o("update:modelValue", f), o("on-change", ie(f))) : Re(function() {
        p(u.value);
      })) : (o("update:modelValue", f), o("on-change", ie(f)));
    }
    return (r, d) => {
      const f = j("Checkbox");
      return x(), D("div", fo, [
        U("div", po, [
          U("div", mo, H(r.firstTitle || h(S)("r.level.1")), 1),
          U("div", ho, H(r.secondTitle || h(S)("r.level.2")), 1),
          U("div", yo, H(r.thirdTitle || h(S)("r.level.3")), 1)
        ]),
        (x(!0), D(me, null, ve(h(u), (_, b) => (x(), D("div", {
          class: "bodyF",
          key: "checkboxJ" + b
        }, [
          U("div", vo, [
            N(f, {
              modelValue: _.checked,
              "onUpdate:modelValue": (v) => _.checked = v,
              indeterminate: _.indeterminate,
              onOnChange: (v) => n(_, v),
              disabled: r.disabled
            }, {
              default: G(() => [
                pe(H(_[r.label]), 1)
              ]),
              _: 2
            }, 1032, ["modelValue", "onUpdate:modelValue", "indeterminate", "onOnChange", "disabled"])
          ]),
          U("div", go, [
            (x(!0), D(me, null, ve(_.children, (v, y) => (x(), D("div", {
              class: "rightBoxInner",
              key: "secItem" + y
            }, [
              U("div", bo, [
                N(f, {
                  modelValue: v.checked,
                  "onUpdate:modelValue": (V) => v.checked = V,
                  indeterminate: v.indeterminate,
                  onOnChange: (V) => c(v, V),
                  disabled: r.disabled
                }, {
                  default: G(() => [
                    pe(H(v[r.label]), 1)
                  ]),
                  _: 2
                }, 1032, ["modelValue", "onUpdate:modelValue", "indeterminate", "onOnChange", "disabled"])
              ]),
              U("div", ko, [
                (x(!0), D(me, null, ve(v.children, (V, T) => (x(), D("div", {
                  class: "thirdItem",
                  key: "thirdItem" + T
                }, [
                  N(f, {
                    modelValue: V.checked,
                    "onUpdate:modelValue": (w) => V.checked = w,
                    onOnChange: s,
                    disabled: r.disabled
                  }, {
                    default: G(() => [
                      pe(H(V[r.label]), 1)
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
}), Zl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AlCascaderMC: Ct,
  AsyncCascader: _t,
  BtTablePage: Sl,
  CheckboxGroupThreeClass: wo,
  CheckboxGroupTwoClass: co,
  CheckboxTree: zn,
  EditorPro: xt,
  FormGroup: En,
  FormModal: Gn,
  FormR: yl,
  FullPop: va,
  HeaderBt: it,
  Hello: ba,
  IconTxtBtn: ka,
  InputMap: Vt,
  MonthRange: Bt,
  Page404: Aa,
  SearchForm: Ll,
  SelectInput: kt,
  ShowHidePanel: Bl,
  ShowHidePanelB: Za,
  SideMenu: Wa,
  TableIconBtn: qa,
  TableSearch: en,
  TableSetting: an,
  TransferBox: ao,
  UploadGroup: At
}, Symbol.toStringTag, { value: "Module" }));
function Tt(a) {
  const o = (...n) => $e.apply(this, n), e = o("r.closePreview"), t = o("r.fullImg");
  let u = "previewImg" + Math.floor(Math.random() * 1e7);
  Ne.info({
    closable: !1,
    "transition-names": ["linear", "fade"],
    render: (n) => be(
      "div",
      {
        class: "previewModal",
        id: u
      },
      [
        be(
          "div",
          {
            class: "previewModalInner"
          },
          [
            be("img", {
              src: a,
              alt: t
            }),
            be(ea, {
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
  }), Te(() => {
    var s, p, r, d, f, _;
    const n = (d = (r = (p = (s = document.getElementById(u)) == null ? void 0 : s.parentElement) == null ? void 0 : p.parentElement) == null ? void 0 : r.parentElement) == null ? void 0 : d.parentElement, c = (_ = (f = document.getElementById(u)) == null ? void 0 : f.parentElement) == null ? void 0 : _.nextSibling;
    n && (n.style.height = "0"), n && (n.style.padding = "0"), c && (c.style.display = "none");
  }, 10);
}
let el = !1;
function St({
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
  let b = (a && Number(a) - 90 > 100 ? Number(a) - 90 + "px" : 0) || "100px", v = K(t) === "String";
  Ne.warning({
    width: o,
    footerHide: !0,
    render: () => be(
      "div",
      {
        class: "customMessageBox",
        style: {
          height: b
        }
      },
      [
        be(
          "div",
          {
            class: "containerN"
          },
          [
            be(
              "div",
              {
                class: "titleN"
              },
              [
                be("span", e || f("r.info.title")),
                be(
                  bl,
                  {
                    class: "fr closeN",
                    type: "text",
                    onClick() {
                      el || Ne.remove();
                    }
                  },
                  () => be("i", {
                    class: "ivu-icon ivu-icon-ios-close",
                    style: {
                      fontSize: "30px"
                    }
                  })
                )
              ]
            ),
            be(
              "div",
              {
                class: "contentN",
                style: {
                  textAlign: v ? "center" : "left"
                }
              },
              [
                be("i", {
                  class: v && !p ? "ivu-icon ivu-icon-ios-alert-outline" : "hide",
                  style: {
                    fontSize: "60px",
                    color: "#f8bb86"
                  }
                }),
                be("div", { class: "msgBoxConO" }, t || f("r.info.text"))
              ]
            ),
            be(
              "div",
              {
                class: "footerN",
                style: {
                  textAlign: r || "center"
                }
              },
              [
                be(
                  bl,
                  {
                    class: "okBtN",
                    onClick(y) {
                      var V, T, w, C, B, I, M, m, L;
                      if (u && typeof u == "function") {
                        const g = u();
                        if (g && K(g) === "Promise") {
                          el = !0;
                          const O = (y == null ? void 0 : y.currentTarget) || (y == null ? void 0 : y.target);
                          O && ((T = (V = O.classList) == null ? void 0 : V.add) == null || T.call(V, "ivu-btn-loading"), (C = (w = O.nextSibling) == null ? void 0 : w.setAttribute) == null || C.call(w, "disabled", "disabled"), (L = (m = ((M = (I = (B = O.parentElement) == null ? void 0 : B.parentElement) == null ? void 0 : I.querySelector) == null ? void 0 : M.call(I, ".titleN .closeN")).classList) == null ? void 0 : m.add) == null || L.call(m, "disabled")), Promise.resolve(g).then(() => {
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
                    be("i", {
                      class: "ivu-load-loop ivu-icon ivu-icon-ios-loading"
                    }),
                    be("span", c || f("r.confirm"))
                  ]
                ),
                be(
                  bl,
                  {
                    class: ["cancelBtN", !d && "hide"],
                    onClick() {
                      el || (Ne.remove(), K(n) === "Function" && n && n());
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
function It(a, o, e, t) {
  const u = (...n) => $e.apply(this, n);
  Se.call(this, {
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
        const b = 40, v = 70, y = (C) => {
          if (C && C.type === "keyup") {
            let M = !1;
            if (C.key && (M = C.key !== "Enter"), M)
              return;
          }
          let B = C.target.value;
          if (B = Number(B), f.style && f.style.width === B + "px")
            return;
          const I = p.clientWidth;
          B < 250 ? (B = 250, C.target.value = 250) : B > I - b && (B = I - b, C.target.value = I - b), f.style.width = B + "px", localStorage.setItem("editorPreviewW", B);
        };
        _.addEventListener("blur", y), _.addEventListener("keyup", y);
        let V = r.children[0].children[0].children[0].children[3];
        const T = (C) => {
          if (C && C.type === "keyup") {
            let M = !1;
            if (C.key && (M = C.key !== "Enter"), M)
              return;
          }
          let B = C.target.value;
          if (B = Number(B), d.style && d.style.height === B + "px")
            return;
          const I = p.clientHeight;
          B < 300 ? (B = 300, C.target.value = 300) : B > I - v && (B = I - v, C.target.value = I - v), d.style.height = B + "px", localStorage.setItem("editorPreviewH", B);
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
  sa.registerMenu(o), window.wangeditorMenuInit = !0;
})();
const Ql = {
  $fetch: Ke,
  fullScreenImgByDom: Ee,
  fullScreenImgPreview: Tt,
  $swal: Se,
  $swalConfirm: It,
  messageBox: St,
  setInterval: gt,
  setTimeout: Te,
  ...vt
}, Vo = function(a, o = {}) {
  Ke.init(o.useStore || o.store, a), o.locale && cl.use(o.locale), o.i18n && cl.i18n(o.i18n), o.router && Qa(o.router), o.amap && gn(o.amap), o.notRegistryGlobal || (Object.keys(Zl).forEach((e) => {
    a.component(e) || a.component(e, Zl[e]);
  }), Object.keys(Ql).forEach((e) => {
    a.config.globalProperties[e] = Ql[e];
  })), a.directive("has") || a.directive("has", (e, t) => {
    t.value && !mt(t.value) && (e.style.display = "none");
  }), a.directive("loadmore") || a.directive("loadmore", (e, t) => {
    let u;
    t.arg ? u = e.querySelector("." + t.arg) : u = e.querySelector(".ivu-select-dropdown") || e, u.addEventListener("scroll", function() {
      u.scrollTop > 0 && u.scrollHeight - u.scrollTop <= u.clientHeight && t.value();
    });
  }), a.config.globalProperties.searchFormLabelWidth = 84, a.config.globalProperties.formModalLabelWidth = 140, a.config.globalProperties.formGroupLabelWidth = 160, a.config.globalProperties.iconTxtBtnIconSize = 17;
}, _o = cl.use, Co = cl.i18n, Ko = {
  locale: _o,
  i18n: Co,
  install: Vo,
  ...vt,
  ...Ia,
  $fetch: Ke,
  fullScreenImgByDom: Ee,
  fullScreenImgPreview: Tt,
  $swal: Se,
  $swalConfirm: It,
  messageBox: St,
  setInterval: gt,
  setTimeout: Te
};
export {
  Ke as $fetch,
  Se as $swal,
  It as $swalConfirm,
  Ct as AlCascaderMC,
  _t as AsyncCascader,
  Sl as BtTablePage,
  wo as CheckboxGroupThreeClass,
  co as CheckboxGroupTwoClass,
  zn as CheckboxTree,
  xt as EditorPro,
  En as FormGroup,
  Gn as FormModal,
  yl as FormR,
  va as FullPop,
  it as HeaderBt,
  ba as Hello,
  ka as IconTxtBtn,
  Vt as InputMap,
  Bt as MonthRange,
  Aa as Page404,
  Ll as SearchForm,
  kt as SelectInput,
  Bl as ShowHidePanel,
  Za as ShowHidePanelB,
  Wa as SideMenu,
  qa as TableIconBtn,
  en as TableSearch,
  an as TableSetting,
  ao as TransferBox,
  At as UploadGroup,
  Cl as clearObj,
  Da as dataFilterOrToUrl,
  Ua as decimalDigitsLimit,
  Ko as default,
  ft as downloadFileByFormSubmit,
  rt as downloadFileReaderFile,
  Ta as emptyInput,
  ut as fakeALinkClick,
  Fa as fileExport,
  He as findCollection,
  fl as findPath,
  La as formDataHeadConfig,
  Ee as fullScreenImgByDom,
  Tt as fullScreenImgPreview,
  Pa as getColumnsKeys,
  sl as getFileSrc,
  Ol as getFileTypeByName,
  _l as getFileTypeIconByName,
  dt as getStringWidth,
  mt as hasPermission,
  xa as htmlDecode,
  Ba as htmlEncode,
  Na as htmlPrint,
  Ka as isEmptyValue,
  rl as isImgByFile,
  ht as isNaN,
  Ra as isNumberValue,
  we as isValidValue,
  St as messageBox,
  K as myTypeof,
  Ma as oneOf,
  Al as removeEmptyValue,
  gt as setInterval,
  Te as setTimeout,
  We as setValByOption,
  yt as siblingElems,
  Sa as stopBubbling,
  $a as stringLength,
  Oa as toFormData,
  st as toHump,
  ct as toLine,
  pt as tooltipManual,
  pl as trimObj
};
//# sourceMappingURL=plugRQw.js.map
