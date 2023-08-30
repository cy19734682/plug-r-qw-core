var Bt = Object.defineProperty;
var Ot = (t, i, e) => i in t ? Bt(t, i, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[i] = e;
var Ze = (t, i, e) => (Ot(t, typeof i != "symbol" ? i + "" : i, e), e);
import { getCurrentInstance as xl, defineComponent as se, resolveComponent as z, openBlock as V, createElementBlock as F, normalizeClass as he, normalizeStyle as j, createBlock as D, createCommentVNode as ne, renderSlot as Ie, ref as X, computed as K, withDirectives as be, unref as f, createElementVNode as E, toDisplayString as Q, createVNode as q, withCtx as ee, createTextVNode as xe, vShow as Ve, resolveDirective as Yl, h as oe, Fragment as pe, renderList as ge, onBeforeMount as Mt, watch as ye, nextTick as dl, isRef as Oe, onMounted as We, withModifiers as Tt, mergeProps as Jl, onUnmounted as Lt, shallowRef as gl, onBeforeUnmount as Ut, createSlots as Fl } from "vue";
import Kt from "deepmerge";
import { isObject as Pt, isFunction as Ft, isPlainObject as Ge, cloneDeep as ie, isEmpty as Be, isBoolean as Rt, isNumber as je, debounce as Et, isString as Xl, last as cl, isEqual as Nt, first as bl, indexOf as Rl, findIndex as $t, remove as zt } from "lodash-es";
import il from "sweetalert";
import { Tooltip as Dt, TableColumnConfig as Ht, Radio as Gt, Input as jt, Modal as Fe, Icon as Wt, Button as vl } from "view-ui-plus";
import { useRouter as qt, useRoute as Yt } from "vue-router";
import { useI18n as Jt } from "vue-i18n";
import wl from "axios";
import Xt from "ar-cascader";
import { Toolbar as Zt, Editor as Qt } from "@wangeditor/editor-for-vue";
import Qe from "moment";
import { Boot as ea } from "@wangeditor/editor";
const Zl = {
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
}, la = /(%|){([0-9a-zA-Z_]+)}/g;
function ta() {
  function t(e, n) {
    return Object.prototype.hasOwnProperty.call(e, n);
  }
  function i(e, ...n) {
    let d;
    return n.length === 1 && typeof n[0] == "object" && (d = n[0]), (!d || !d.hasOwnProperty) && (d = {}), e === void 0 ? "" : e.replace(la, (a, u, s, p) => {
      let r;
      return e[p - 1] === "{" && e[p + a.length] === "}" ? s : (r = t(d, s) ? d[s] : null, r ?? "");
    });
  }
  return i;
}
const aa = ta();
let pl = Zl;
const na = {
  zh: Zl
};
let El, Nl = {}, me, oa = function(t, i) {
  if (typeof this == "object" && Reflect.has(this, "$t"))
    return this.$t(t, i);
  if (me && me.global)
    return me.global.t(t, i);
  if (me && me.locale) {
    if (!Nl[me.locale] || El != me.locale) {
      Nl[me.locale] = !0;
      let e = me.getLocaleMessage(me.locale) || {}, n = Kt(na[me.locale], e, { clone: !0 });
      pl = n, me.setLocaleMessage(me.locale, n), El = me.locale;
    }
    return me.hlang(t, i);
  }
};
const Le = function(t, i) {
  let e = oa.apply(this, [t, i]);
  if (e != null)
    return e;
  const n = t.split(".");
  let d = pl;
  for (let a = 0, u = n.length; a < u; a++) {
    const s = n[a];
    if (e = d[s], a === u - 1)
      return aa(e, i);
    if (!e)
      return "";
    d = e;
  }
  return "";
}, ia = function(t) {
  pl = t || pl;
}, sa = function(t) {
  me = t;
}, fl = {
  use: ia,
  t: Le,
  i18n: sa
};
function C(t, i) {
  var n;
  const e = (n = xl()) == null ? void 0 : n.appContext.config.globalProperties;
  return Le.apply(e, [t, i]);
}
const Ql = /* @__PURE__ */ se({
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
    function n() {
      e.disabled || i("click");
    }
    return (d, a) => {
      const u = z("Icon");
      return V(), F("div", {
        class: he({ headerBtCTM: !0, withIconCTM: e.icon || e.withIcon, disabled: e.disabled }),
        style: j({ color: e.color, borderLeftColor: e.borderColor }),
        onClick: n
      }, [
        e.icon ? (V(), D(u, {
          key: 0,
          size: e.iconSize,
          type: e.icon
        }, null, 8, ["size", "type"])) : ne("", !0),
        Ie(d.$slots, "default")
      ], 6);
    };
  }
}), ra = { class: "headerTxtAM" }, ua = { class: "contentAM" }, da = /* @__PURE__ */ se({
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
    const n = t;
    let d = X(!1);
    const a = K(() => typeof n.headerFontSize == "number" ? n.headerFontSize + "px" : n.headerFontSize), u = K(() => ({ zIndex: n.zIndex }));
    function s() {
      d.value = !0, e("on-open");
    }
    function p(r) {
      d.value = !1, e("on-close", r === !0);
    }
    return i({
      open: s,
      close: p
    }), (r, c) => be((V(), F("div", {
      class: "fullScreenPopBoxAM",
      style: j(f(u))
    }, [
      E("div", {
        class: "headerAM",
        style: j({ color: n.headerColor, backgroundColor: n.headerBg, fontSize: f(a) })
      }, [
        E("span", ra, Q(r.title || f(C)("r.title")), 1),
        q(Ql, {
          icon: "md-return-left",
          onClick: p
        }, {
          default: ee(() => [
            xe(Q(f(C)("r.back")), 1)
          ]),
          _: 1
        })
      ], 4),
      E("div", ua, [
        Ie(r.$slots, "default")
      ])
    ], 4)), [
      [Ve, f(d)]
    ]);
  }
}), ca = { class: "msg" }, pa = /* @__PURE__ */ se({
  __name: "Hello",
  setup(t) {
    let i = X("Greetings from Ricky.");
    return (e, n) => (V(), F("span", ca, Q(f(i)), 1));
  }
}), fa = /* @__PURE__ */ se({
  __name: "IconTxtBtn",
  props: {
    name: {},
    icon: { default: "md-download" },
    size: { default: 17 },
    disabled: { type: Boolean, default: !1 },
    has: { default: "" }
  },
  emits: ["click"],
  setup(t, { emit: i }) {
    const e = t, n = K(() => Math.floor(e.size / 17 * 12) + "px");
    function d(a) {
      e.disabled || i("click", a);
    }
    return (a, u) => {
      const s = z("Icon"), p = Yl("has");
      return be((V(), F("div", {
        class: he(["tabTopBtnsT", { disabled: e.disabled }]),
        onClick: d,
        style: j({ "font-size": f(n) })
      }, [
        q(s, {
          type: e.icon,
          size: e.size
        }, null, 8, ["type", "size"]),
        xe(" " + Q(e.name || f(C)("r.button")), 1)
      ], 6)), [
        [p, a.has]
      ]);
    };
  }
}), ma = { class: "c404K" }, ya = /* @__PURE__ */ E("div", { class: "t404" }, "404", -1), ha = { class: "ct404" }, va = { class: "p404" }, ga = /* @__PURE__ */ se({
  __name: "Page404",
  setup(t) {
    const e = xl().appContext.config.globalProperties.$router;
    function n() {
      e.go(-1);
    }
    return (d, a) => {
      const u = z("Button");
      return V(), F("div", ma, [
        ya,
        E("div", ha, "UH OH! " + Q(f(C)("r.pageNotFound")), 1),
        E("div", va, Q(f(C)("r.notFoundMsg")), 1),
        q(u, {
          class: "bt404",
          onClick: n
        }, {
          default: ee(() => [
            xe(Q(f(C)("r.back")), 1)
          ]),
          _: 1
        })
      ]);
    };
  }
});
function Ce(t, i, e) {
  const n = (...d) => Le.apply(this, d);
  return new Promise((d, a) => {
    if (typeof t == "object" && !Array.isArray(t)) {
      let u = n("r.confirm"), s = n("r.cancel"), p = !1, r = "swalConfirmBt", c = "swalCancelBt";
      const m = /^HTML.*Element$/;
      t.type && (t.icon = t.type) && delete t.type, t.content && (t.text = t.content) && delete t.content, t.className = t.className || "swalBoxX";
      let g = "";
      t.text && m.test(O(t.text)) ? g = "content" : t.text && O(t.text) === "String" && (g = "text"), t.buttons && (typeof t.buttons == "object" && !Array.isArray(t.buttons) ? t.buttons.cancel && (t.buttons.cancel.text && (s = t.buttons.cancel.text) && (p = !0), t.buttons.cancel.className && (c = t.buttons.cancel.className), t.buttons.confirm.text && (u = t.buttons.confirm.text), t.buttons.confirm.className && (r = t.buttons.confirm.className)) : Array.isArray(t.buttons) && (t.buttons[0] && (s = t.buttons[0], p = !0), t.buttons[1] && (u = t.buttons[1]))), il({
        title: t.title,
        icon: t.icon,
        className: t.className,
        [g]: t.text,
        buttons: {
          confirm: {
            text: u,
            value: !0,
            visible: !0,
            className: r
          },
          cancel: {
            text: s,
            value: null,
            visible: p,
            className: c
          }
        }
      }).then((A) => {
        A && typeof t.onOk == "function" && t.onOk(), d(A);
      }).catch((A) => {
        a(A);
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
      il({
        title: t,
        [u]: i || "",
        icon: e || "",
        className: "swalBoxX",
        buttons: {
          confirm: {
            text: n("r.confirm"),
            value: !0,
            visible: !0,
            className: "swalConfirmBt",
            closeModal: !0
          }
        }
      }).then((s) => {
        d(s);
      }).catch((s) => {
        a(s);
      });
    } else if (typeof t == "boolean")
      !t && il.close && il.close();
    else
      throw new TypeError("swal第一个参数类型有误，仅支持Object/String/false");
  });
}
function et(t) {
  return t.replace(/_(\w)/g, function(i, e) {
    return e.toUpperCase();
  });
}
function ba(t) {
  let i = document.createElement("div");
  return i.textContent !== void 0 ? i.textContent = t : i.innerText = t, i.innerHTML;
}
function wa(t) {
  let i = document.createElement("div");
  return i.innerHTML = t, i.innerText || i.textContent;
}
function rl(t) {
  return new Promise((i) => {
    let e = new FileReader();
    e.readAsDataURL(t), e.onloadend = () => {
      i(e.result);
    };
  });
}
function Sl(t) {
  return t.split(".").pop().toLocaleLowerCase();
}
function ul(t) {
  return O(t) === "String" && t.indexOf("image") > -1;
}
function kl(t) {
  const i = Sl(t);
  let e = "ios-document-outline";
  return ["gif", "jpg", "jpeg", "png", "bmp", "webp"].indexOf(i) > -1 ? e = "ios-image" : ["mp4", "m3u8", "rmvb", "avi", "swf", "3gp", "mkv", "flv"].indexOf(i) > -1 ? e = "ios-film" : ["mp3", "wav", "wma", "ogg", "aac", "flac"].indexOf(i) > -1 ? e = "ios-musical-notes" : ["doc", "txt", "docx", "pages", "epub", "pdf"].indexOf(i) > -1 ? e = "md-document" : ["numbers", "csv", "xls", "xlsx"].indexOf(i) > -1 ? e = "ios-stats" : ["keynote", "ppt", "pptx"].indexOf(i) > -1 && (e = "ios-videocam"), e;
}
function lt(t, i) {
  let e = document.createElement("a");
  e.href = i, e.download = t, tt(e);
}
function tt(t) {
  let i = document.createEvent("MouseEvents");
  i.initMouseEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), t.dispatchEvent(i);
}
function ml({
  group: t,
  condition: i,
  pathKey: e,
  childKey: n = "children",
  path: d = []
}) {
  if (t && Pt(t)) {
    if (Ft(i)) {
      if (Ge(t)) {
        let a = t, u = ie(d);
        if (i(a))
          return e && a[e] && u.push(a[e]), u;
        if (a[n] && !Be(a[n])) {
          e && a[e] && u.push(a[e]);
          let s = ml({
            group: a[n],
            condition: i,
            pathKey: e,
            childKey: n,
            path: u
          });
          if (!Be(s))
            return s;
        }
      } else if (Array.isArray(t))
        for (let a of t) {
          let u = ie(d);
          if (i(a))
            return e && a[e] ? u.push(a[e]) : u.push(String(t.indexOf(a))), u;
          if (a[n] && a[n].length > 0) {
            e && a[e] ? u.push(a[e]) : u.push(String(t.indexOf(a)));
            let s = ml({
              group: a[n],
              condition: i,
              pathKey: e,
              childKey: n,
              path: u
            });
            if (!Be(s))
              return s;
          }
        }
    } else if (Array.isArray(t))
      for (let a of t) {
        let u = ie(d);
        if (a === i)
          return u.push(String(t.indexOf(a))), u;
      }
  }
  return [];
}
function at(t, i = 12) {
  if (O(t) === "String" && t.length > 0) {
    let e = document.createElement("span");
    e.style.fontSize = i + "px", e.style.fontFamily = "inherit", e.innerHTML = t, e.style.opacity = "0", e.style.position = "fixed", e.style.top = "3000px", document.body.append(e);
    const n = e.clientWidth;
    return document.body.removeChild(e), n;
  }
  return 0;
}
function ka(t) {
  return t === "" ? null : t;
}
function Va(t) {
  t = t || window.Event, t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0;
}
const Aa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  downloadFileReaderFile: lt,
  emptyInput: ka,
  fakeALinkClick: tt,
  findPath: ml,
  getFileSrc: rl,
  getFileTypeByName: Sl,
  getFileTypeIconByName: kl,
  getStringWidth: at,
  htmlDecode: wa,
  htmlEncode: ba,
  isImgByFile: ul,
  stopBubbling: Va,
  toHump: et
}, Symbol.toStringTag, { value: "Module" }));
function O(t) {
  return Object.prototype.toString.call(t).replace(/\[object |]/g, "");
}
function nt(t) {
  return t.replace(/([A-Z])/g, "_$1").toLowerCase();
}
function yl(t) {
  let i = O(t);
  if (i === "Object") {
    for (let e in t)
      if (t.hasOwnProperty(e)) {
        let n = O(t[e]);
        n === "String" ? t[e] = t[e].trim() : (n === "Object" || n === "Array") && yl(t[e]);
      }
  } else if (i === "Array")
    for (let e = 0, n = t.length; e < n; e++) {
      let d = O(t[e]);
      d === "String" ? t[e] = t[e].trim() : (d === "Array" || d === "Object") && yl(t[e]);
    }
  return t;
}
function Vl(t, i = []) {
  if (O(t) === "Array")
    return t.forEach((e, n) => {
      switch (O(e)) {
        case "Array":
        case "Object":
          Vl(e);
          break;
        default:
          t[n] = null;
      }
    }), t;
  if (O(t) === "Object") {
    for (let e in t)
      if (t.hasOwnProperty(e)) {
        let n = !0;
        for (let d of i)
          if (d === e) {
            n = !1;
            break;
          }
        if (n)
          switch (O(t[e])) {
            case "Array":
            case "Object":
              Vl(t[e]);
              break;
            default:
              t[e] = null;
          }
      }
    return t;
  } else
    return t;
}
const Ca = {
  headers: {
    "Content-Type": "multipart/form-data"
  }
};
function _a(t) {
  let i = new FormData();
  for (let e in t)
    t.hasOwnProperty(e) && t[e] !== null && i.append(e, t[e]);
  return i;
}
function De(t, i, e = !1) {
  if (!t || !i)
    return !1;
  let n, d = "notFoundC", a = function(u, s) {
    if (Array.isArray(u)) {
      if (O(s) === "Function" && s(u))
        return d = u, [];
      for (let p of u) {
        if (d !== "notFoundC")
          break;
        if (O(s) === "Function" && s(p) || p === s)
          return d = p, [u.indexOf(p)];
        if (O(p) === "Array" || O(p) === "Object") {
          let r = a(p, s);
          if (r !== void 0)
            return [u.indexOf(p), ...r];
        }
      }
    } else if (O(u) === "Object") {
      if (O(s) === "Function" && s(u))
        return d = u, [];
      for (let p in u) {
        if (d !== "notFoundC")
          break;
        if (u.hasOwnProperty(p)) {
          if (O(s) === "Function" && s(p) || u[p] === s)
            return d = u[p], [p];
          if (O(u[p]) === "Object" || O(u[p]) === "Array") {
            let r = a(u[p], s);
            if (r !== void 0)
              return [p, ...r];
          }
        }
      }
    }
  };
  return n = a(t, i), e ? n || !1 : d === "notFoundC" ? !1 : d;
}
function Ia(t, i) {
  for (let e = 0, n = i.length; e < n; e++)
    if (t === i[e])
      return !0;
  return !1;
}
function xa(t, i = 2) {
  let e = new RegExp(`(^-?\\d+\\.\\d{${i}})(\\d+$)`), n = t && String(t) || "";
  return e.test(n) ? Number(n.replace(e, "$1")) : t;
}
function ot(t, i = {}, e = "get") {
  let n = document.createElement("form"), d = document.getElementsByTagName("body")[0];
  d.appendChild(n), n.setAttribute("style", "display:none"), n.setAttribute("target", ""), n.setAttribute("method", e);
  let a = t;
  if (window && window.hasOwnProperty("g")) {
    let u = Object.keys(window.g).filter((s) => s.indexOf("URL") > -1).map((s) => s.replace("URL", ""));
    for (let s of u) {
      let p = new RegExp("^/" + s + "(?=/.*$)", "i");
      if (p.test(t) && window.g[s + "URL"]) {
        a = window.g[s + "URL"] + t.replace(p, "");
        break;
      }
    }
  }
  if (n.setAttribute("action", a), Ge(i)) {
    for (let s in i)
      if (i.hasOwnProperty(s) && (i[s] || i[s] === 0 || i[s] === !1 || i[s] === "")) {
        let p = document.createElement("input");
        p.setAttribute("type", "hidden"), p.setAttribute("name", s), p.setAttribute("value", i[s]), n.appendChild(p);
      }
    n.submit();
    let u = setTimeout(() => {
      d.removeChild(n), clearTimeout(u), u = null;
    }, 8e3);
  } else
    console.error("请求数据格式有误，无法下载文件");
}
function Sa(t, i = {}, e = "get") {
  if (i.hasOwnProperty("columns") && (i.columns === "" || i.columns === null || i.columns === void 0)) {
    Ce.call(this, {
      title: "需要导出的列不能为空",
      type: "warning"
    });
    return;
  }
  ot(t, i, e);
}
function Ba(t, i, e = !1) {
  let n;
  if (t && O(i) === "Array") {
    let d = localStorage.getItem(t);
    if (d) {
      let a = JSON.parse(decodeURI(d));
      n = i.filter((u) => u.key && a.indexOf(u.title) !== -1).map((u) => u.key);
    } else
      n = i.map((a) => a.key);
  } else
    n = [];
  return e || (n = String(n)), n;
}
function ue(t) {
  return t != null && t !== "";
}
function Oa(t) {
  return /^-?\d+(.\d+)?$/.test(t);
}
function it(t, i = !1, e = "") {
  return function(n, d) {
    let a;
    if (Array.isArray(t)) {
      let p = [];
      for (let r of t)
        ue(d.row[r]) && p.push(d.row[r]);
      a = p.join(e);
    } else
      typeof t == "function" ? a = t(d) : a = d.row[t];
    let u = at(a), s = d.column._width;
    return a && u > s ? oe(
      Dt,
      {
        style: {
          width: "100%"
        },
        content: a,
        maxWidth: s * 2
      },
      () => oe(
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
    ) : oe("span", i && !ue(a) ? "--" : a);
  };
}
function Ma(t) {
  if (Ge(t)) {
    for (let i in t)
      if (t.hasOwnProperty(i) && ue(t[i]))
        return !1;
    return !0;
  } else if (Array.isArray(t)) {
    for (let i of t)
      if (ue(i))
        return !1;
    return !0;
  }
  return !ue(t);
}
function Ta(t) {
  return O(t) === "String" ? t.replace(/[^\x00-\xff]/g, "01").length : O(t) === "Number" ? (t += "", t.replace(/[^\x00-\xff]/g, "01").length) : 0;
}
function st({
  group: t,
  condition: i,
  key: e,
  val: n,
  childKey: d = "children"
}) {
  if (O(t) !== "Array" || O(i) !== "Function" || O(e) !== "String" || O(d) !== "String")
    return !1;
  t.forEach((a) => {
    i(a) && (O(n) === "Function" ? a[e] = n(a[e]) : a[e] = n), O(a[d]) === "Array" && a[d].length > 0 && st({
      group: a[d],
      condition: i,
      key: e,
      val: n,
      childKey: d
    });
  });
}
function rt(t) {
  let i = sessionStorage.getItem("btnPermissions");
  return i ? i.split(",").indexOf(t) > -1 : !1;
}
function ut(t) {
  return O(t) === "Number" && String(t) === "NaN";
}
function La(t, i = !1, e = !1) {
  if (O(t) !== "Object")
    return t;
  let n = Object.assign(t, {}), d = "";
  for (let a in n)
    if (n.hasOwnProperty(a)) {
      let u = n[a];
      u === void 0 || u === "" || O(u) === "String" && u.trim() === "" || u === null || ut(u) ? e ? i ? d += a + "=&" : n[a] = "" : delete n[a] : i && (d += a + "=" + u + "&");
    }
  return i ? d.length > 0 ? d.substring(0, d.length - 1) : "" : n;
}
function Al(t) {
  let i = {};
  if (Array.isArray(t)) {
    i = [];
    for (let e of t)
      Array.isArray(e) || Ge(e) ? i.push(Al(e)) : ue(e) && i.push(e);
  } else if (Ge(t))
    for (let e in t)
      t.hasOwnProperty(e) && (Array.isArray(t[e]) || Ge(t[e]) ? i[e] = Al(t[e]) : ue(t[e]) && (i[e] = t[e]));
  return i;
}
function Ua(t) {
  const i = window.open();
  if (i) {
    i.document.write(t);
    let e = setTimeout(() => {
      i.print(), window.clearTimeout(e), e = null;
    }, 10);
  }
}
function dt(t) {
  let i = [], e = t;
  for (; t.previousSibling && (t = t.previousSibling); )
    t.nodeType === 1 && i.push(t);
  for (; e.nextSibling && (e = e.nextSibling); )
    e.nodeType === 1 && i.push(e);
  return i;
}
const ct = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clearObj: Vl,
  dataFilterOrToUrl: La,
  decimalDigitsLimit: xa,
  downloadFileByFormSubmit: ot,
  fileExport: Sa,
  findCollection: De,
  formDataHeadConfig: Ca,
  getColumnsKeys: Ba,
  hasPermission: rt,
  htmlPrint: Ua,
  isEmptyValue: Ma,
  isNaN: ut,
  isNumberValue: Oa,
  isValidValue: ue,
  myTypeof: O,
  oneOf: Ia,
  removeEmptyValue: Al,
  setValByOption: st,
  siblingElems: dt,
  stringLength: Ta,
  toFormData: _a,
  toLine: nt,
  tooltipManual: it,
  trimObj: yl
}, Symbol.toStringTag, { value: "Module" })), Ka = { class: "groupBoxRP" }, Pa = ["onClick"], Fa = /* @__PURE__ */ se({
  __name: "SideMenuGroup",
  props: {
    data: { default: () => [] },
    pathName: { default: "" }
  },
  setup(t) {
    const i = t, e = qt();
    function n(a) {
      return a.path === i.pathName ? "active" : "";
    }
    function d(a, u) {
      a.preventDefault();
      let s = a.target;
      if (!u.children && !s.classList.contains("active")) {
        e.push(u.path);
        return;
      }
      let p = s.parentNode, r = dt(p);
      for (let c of r) {
        c.classList.remove("open");
        const m = c.querySelectorAll(".open");
        for (let g of m)
          g.classList.remove("open");
      }
      p.classList.toggle("open");
    }
    return (a, u) => {
      const s = z("sideMenuGroup", !0);
      return V(), F("ul", Ka, [
        (V(!0), F(pe, null, ge(i.data, (p, r) => (V(), F("li", {
          class: he({ dropItemRP: p.children }),
          key: p.path + r
        }, [
          E("div", {
            class: he(["menuTxtR", n(p)]),
            onClick: (c) => d(c, p),
            style: j({ paddingLeft: p.level * 20 + "px" })
          }, Q(p.name || "-- no name --"), 15, Pa),
          p.children ? (V(), D(s, {
            key: 0,
            data: p.children,
            "path-name": i.pathName
          }, null, 8, ["data", "path-name"])) : ne("", !0)
        ], 2))), 128))
      ]);
    };
  }
}), Ra = { class: "menuListR" }, Ea = /* @__PURE__ */ se({
  __name: "SideMenu",
  props: {
    data: { default: () => [] }
  },
  emits: ["on-change"],
  setup(t, { emit: i }) {
    const e = t, n = Yt(), d = X(!0), a = X(), u = X(), s = K(() => d.value ? C("r.hideMenu") : C("r.showMenu")), p = K(() => d.value ? "ios-arrow-back" : "ios-arrow-forward");
    Mt(() => {
      let m = localStorage.getItem("menuDisplayR") || "";
      m !== "" ? d.value = JSON.parse(m) : (d.value = !0, localStorage.setItem("menuDisplayR", JSON.stringify(!0)));
    }), ye(
      () => n.path,
      (m) => {
        a.value = m, dl(c);
      },
      { immediate: !0 }
    );
    function r() {
      d.value = !d.value, localStorage.setItem("menuDisplayR", JSON.stringify(d.value)), i("on-change", d.value);
    }
    function c() {
      let m = u.value.querySelectorAll(".dropItemRP");
      for (let g of m)
        g.querySelector(".active") && !g.classList.contains("open") && g.classList.add("open");
    }
    return (m, g) => {
      const A = z("Icon");
      return V(), F("div", {
        ref_key: "menuRef",
        ref: u,
        class: "menuBoxRP"
      }, [
        be(E("div", Ra, [
          q(Fa, {
            data: e.data,
            pathName: f(a)
          }, null, 8, ["data", "pathName"])
        ], 512), [
          [Ve, f(d)]
        ]),
        q(A, {
          type: f(p),
          size: 25,
          class: he([{ showIco: !f(d) }, "menuShowHideIco"]),
          title: f(s),
          onClick: r,
          color: f(d) ? "#fff" : "#333"
        }, null, 8, ["type", "class", "title", "color"])
      ], 512);
    };
  }
}), Na = ["title"], $a = /* @__PURE__ */ se({
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
    function n(d) {
      e.disabled || i("click", d);
    }
    return (d, a) => {
      const u = z("Icon"), s = Yl("has");
      return be((V(), F("div", {
        class: he(["tableBtnsG", { disabled: e.disabled }]),
        onClick: n,
        title: e.title || f(C)("r.button")
      }, [
        q(u, {
          type: e.icon,
          size: e.size
        }, null, 8, ["type", "size"])
      ], 10, Na)), [
        [s, e.has]
      ]);
    };
  }
}), za = { class: "contentX" }, Da = { class: "arrowA" }, Ha = /* @__PURE__ */ se({
  __name: "ShowHidePanel",
  props: {
    bg: {}
  },
  setup(t) {
    const i = t, e = X(!0), n = K(() => e ? "background:" + i.bg || "transparent" : "");
    return (d, a) => {
      const u = z("Icon");
      return V(), F("div", {
        style: j(f(n))
      }, [
        be(E("div", za, [
          Ie(d.$slots, "default")
        ], 512), [
          [Ve, f(e)]
        ]),
        E("div", Da, [
          E("div", {
            class: "btA",
            onClick: a[0] || (a[0] = (s) => e.value = !f(e))
          }, [
            q(u, {
              type: f(e) ? "ios-arrow-up" : "ios-arrow-down",
              size: "20"
            }, null, 8, ["type"])
          ])
        ])
      ], 4);
    };
  }
}), Ga = { class: "contentZ" }, ja = /* @__PURE__ */ se({
  __name: "ShowHidePanelB",
  props: {
    modelValue: { type: Boolean, default: !1 },
    bg: { default: "transparent" }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: i }) {
    const e = t, n = K({
      get() {
        return e.modelValue;
      },
      set(a) {
        i("update:modelValue", a);
      }
    }), d = K(() => n.value ? "background:" + e.bg : "");
    return (a, u) => (V(), F("div", {
      style: j(f(d))
    }, [
      be(E("div", Ga, [
        Ie(a.$slots, "default")
      ], 512), [
        [Ve, f(n)]
      ])
    ], 4));
  }
});
let Cl = [], _l = [];
const Wa = function(t) {
  t && t.beforeEach ? t.beforeEach(() => {
    Cl.map((i) => {
      window.clearTimeout(i);
    }), _l.map((i) => {
      window.clearInterval(i);
    }), Cl.length = 0, _l.length = 0;
  }) : console.warn(
    "安装库plug-r-qw时未传入router，调用该库的定时器方法产生的定时器将不能自动销毁，请传入router：Vue.use(plugRQw,{router,...})"
  );
}, ke = function(t, i) {
  let e = window.setTimeout(t, i);
  return Cl.push(e), e;
}, pt = function(t, i) {
  let e = window.setInterval(t, i);
  return _l.push(e), e;
}, qa = /* @__PURE__ */ se({
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
    let n = !1;
    const d = K({
      get() {
        return e.modelValue;
      },
      set(p) {
        i("update:modelValue", p);
      }
    }), a = K({
      get() {
        return e.open;
      },
      set(p) {
        i("on-toggle", p);
      }
    }), u = K(() => a.value ? "ios-arrow-up" : "ios-arrow-down");
    function s() {
      n || (n = !0, i("on-search", d.value), ke(() => {
        n = !1;
      }, 2e3));
    }
    return (p, r) => {
      const c = z("Input"), m = z("icon");
      return V(), F("div", {
        class: "tableSearchV",
        style: j({ position: e.fixed ? "fixed" : "absolute", right: e.right, top: e.top })
      }, [
        Ie(p.$slots, "default", {}, () => [
          q(c, {
            modelValue: f(d),
            "onUpdate:modelValue": r[0] || (r[0] = (g) => Oe(d) ? d.value = g : null),
            style: j({ width: e.width }),
            search: "",
            onOnSearch: s,
            class: "searchInputC",
            placeholder: e.placeholder || f(C)("r.pInput")
          }, null, 8, ["modelValue", "style", "placeholder"])
        ]),
        be(E("span", {
          class: "sbt",
          onClick: r[1] || (r[1] = (g) => a.value = !f(a)),
          style: j({ color: e.btnColor })
        }, [
          q(m, {
            type: f(u),
            color: e.btnColor
          }, null, 8, ["type", "color"]),
          xe(Q(f(C)("r.adSearch")), 1)
        ], 4), [
          [Ve, e.showBtn]
        ])
      ], 4);
    };
  }
}), Ya = { class: "tabSetF" }, Ja = { class: "topCheck" }, Xa = /* @__PURE__ */ se({
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
    const e = t, n = X(!0), d = X(!1), a = X(!1), u = X([]), s = K(() => {
      let b = C("r.unknown");
      return e.modelValue.length > u.value.length && (u.value = ie(e.modelValue)), u.value.map((_) => {
        let L = { label: _ && _.title || b };
        return _ && _.disableShowSetting && (L.disabled = !0), L;
      });
    }), p = K(() => s.value.filter((b) => b.disabled)), r = K({
      get() {
        return e.modelValue.map((b) => b && b.title || C("r.unknown"));
      },
      set(b) {
        let _ = u.value.filter((L) => {
          for (let P of b)
            if (P === L.title)
              return !0;
          return !1;
        });
        i("update:modelValue", _);
      }
    }), { locale: c } = Jt();
    We(() => {
      let b = C("r.unknown"), _;
      c.value ? _ = localStorage.getItem(e.sKey + "_" + c.value) : _ = localStorage.getItem(e.sKey), _ ? r.value = JSON.parse(decodeURI(_)) : e.defaultCheck && (r.value = e.modelValue.filter((L) => L.showSettingCheck).map((L) => L && L.title || b));
    });
    function m(b) {
      b.length === s.value.length ? (n.value = !1, d.value = !0) : b.length > p.value.length ? (n.value = !0, d.value = !1) : (n.value = !1, d.value = !1);
    }
    ye(() => r.value, m, {
      immediate: !0,
      deep: !0
    });
    function g() {
      a.value || (a.value = !0);
    }
    function A() {
      c.value ? localStorage.setItem(e.sKey + "_" + c.value, encodeURI(JSON.stringify(r.value))) : localStorage.setItem(e.sKey, encodeURI(JSON.stringify(r.value))), a.value = !1;
    }
    function k() {
      n.value ? d.value = !1 : d.value = !d.value, n.value = !1, d.value ? r.value = s.value.map((b) => b.label) : r.value = p.value.map((b) => b.label);
    }
    return (b, _) => {
      const L = z("Icon"), P = z("Checkbox"), I = z("CheckboxGroup");
      return V(), F("div", Ya, [
        E("div", {
          class: "tabSetBt",
          onClick: g
        }, [
          q(L, {
            type: "md-settings",
            size: "17"
          }),
          E("span", null, Q(f(C)("r.tabSetting")), 1)
        ]),
        be(E("div", {
          class: "tabSetCard",
          style: j({ top: e.top, right: e.right, width: e.width, backgroundColor: e.bg })
        }, [
          E("div", Ja, [
            q(P, {
              indeterminate: f(n),
              modelValue: f(d),
              "onUpdate:modelValue": _[0] || (_[0] = (S) => Oe(d) ? d.value = S : null),
              onClick: Tt(k, ["prevent"])
            }, {
              default: ee(() => [
                xe(Q(f(C)("r.all")), 1)
              ]),
              _: 1
            }, 8, ["indeterminate", "modelValue", "onClick"]),
            E("span", {
              style: { cursor: "pointer", float: "right" },
              onClick: A
            }, Q(f(C)("r.confirm")), 1)
          ]),
          q(I, {
            modelValue: f(r),
            "onUpdate:modelValue": _[1] || (_[1] = (S) => Oe(r) ? r.value = S : null)
          }, {
            default: ee(() => [
              (V(!0), F(pe, null, ge(f(s), (S, Z) => (V(), D(P, {
                class: "setItem",
                label: S && S.label,
                key: "tabSet_" + e.sKey + Z,
                disabled: S && S.disabled
              }, null, 8, ["label", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["modelValue"])
        ], 4), [
          [Ve, f(a)]
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
function $l(t) {
  t ? ll.classList.add("show") : ll.classList.remove("show");
}
function ft(t) {
  let i = ze;
  t ? ze++ : ze > 0 && ze--, i !== ze && (ze === 0 ? $l(!1) : i === 0 && $l(!0));
}
const Za = window.location.origin;
let He = null;
const zl = (...t) => Le.apply(He, t);
let _e = wl.create({
  baseURL: Za,
  withCredentials: !0
  // 允许携带cookie
});
function Qa() {
  console.info("store为空，请在安装插件时传入store实例：Vue.use(plugRQw,{store:store})，Pinia传{store:useStore}");
}
_e.interceptors.request.use(
  (t) => t,
  (t) => Promise.reject(t)
);
function Dl() {
  if (_e.store)
    if (typeof _e.store == "function") {
      const t = _e.store();
      t.logout && t.logout();
    } else
      _e.store.dispatch("logout");
  else
    Qa();
}
_e.interceptors.response.use(
  (t) => (He && t && t.data && (t.data.code === 403 || t.data.code === 409) && He.messageBox({
    content: zl("r.http." + t.data.code),
    onOk: Dl
  }), t),
  (t) => (He && t && t.response && (t.response.status === 403 || t.response.status === 409) && He.messageBox({
    content: zl("r.http." + t.response.status),
    onOk: Dl
  }), console.warn("请求出错：", t), Promise.reject(t))
);
function Pe(t, i, e, n) {
  n && n.spin && ft(!1);
  let d = !0, a = t && t.data;
  if (a) {
    e = e || [];
    for (let u of e)
      a = a[u], d = d && a;
    return d ? a : (i && console.warn(i), !1);
  }
  return i && console.warn(i), !1;
}
function en(t, i, e, n, d, a, u) {
  return new Promise((s, p) => {
    switch (t) {
      case "get":
        _e.get(i, { params: e }).then((c) => {
          let m = Pe(c, n, d, a);
          m ? s(m) : p(c);
        }).catch((c) => {
          Pe({}, n, d, a), p(c);
        });
        break;
      case "delete":
        let r = u ? "params" : "data";
        _e.delete(i, { [r]: e }).then((c) => {
          let m = Pe(c, n, d, a);
          m ? s(m) : p(c);
        }).catch((c) => {
          Pe({}, n, d, a), p(c);
        });
        break;
      case "post":
        _e.post(i, e, a).then((c) => {
          let m = Pe(c, n, d, a);
          m ? s(m) : p(c);
        }).catch((c) => {
          Pe({}, n, d, a), p(c);
        });
        break;
      case "put":
        _e.put(i, e, a).then((c) => {
          let m = Pe(c, n, d, a);
          m ? s(m) : p(c);
        }).catch((c) => {
          Pe({}, n, d, a), p(c);
        });
        break;
    }
  });
}
function sl(t, i, e = {}, n, d, a, u) {
  return new Promise((s, p) => {
    if (i) {
      a && a.spin && ft(!0);
      let r = i;
      if (window && window.hasOwnProperty("g")) {
        const g = window.g;
        let A = Object.keys(g).filter((k) => k.indexOf("URL") > -1).map((k) => k.replace("URL", ""));
        for (let k of A) {
          let b = new RegExp("^/" + k + "(?=/.*$)", "i");
          if (b.test(i) && g[k + "URL"]) {
            r = g[k + "URL"] + i.replace(b, "");
            break;
          }
        }
      }
      let c;
      if (a && a.headers && a.headers["Content-Type"] === "multipart/form-data")
        c = e;
      else if (e && !Be(e))
        if (Array.isArray(e)) {
          c = [];
          for (let g of e)
            (g || g === 0 || g === !1 || g === "" && a && !a.noEmptyStr) && c.push(g);
        } else {
          c = {};
          for (let g in e)
            e.hasOwnProperty(g) && (e[g] || e[g] === 0 || e[g] === !1 || e[g] === "" && a && !a.noEmptyStr) && (c[g] = e[g]);
        }
      let m = t.toLowerCase();
      en(m, r, c, n, d, a, u).then((g) => {
        s(g);
      }).catch((g) => {
        p(g);
      });
    } else
      console.error("没有请求地址:url"), p("没有请求地址:url");
  });
}
const Te = {
  /**
   * @description 初始化该请求插件，单独引入的话调用一次后，方可实现spin等功能，默认在该库安装时已自动化初始化了该请求插件
   * @function
   * @param {object} store 项目中vuex的store，或pinia的useStore
   * @param app 当前vue实例
   */
  init(t, i) {
    _e.store = t, He = i.config.globalProperties;
  },
  post(t, i, e, n, d) {
    return new Promise((a, u) => {
      sl("post", t, i, e, n, d).then((s) => {
        a(s);
      }).catch((s) => {
        u(s);
      });
    });
  },
  put(t, i, e, n, d) {
    return new Promise((a, u) => {
      sl("put", t, i, e, n, d).then((s) => {
        a(s);
      }).catch((s) => {
        u(s);
      });
    });
  },
  get(t, i, e, n, d) {
    return new Promise((a, u) => {
      sl("get", t, i, e, n, d).then((s) => {
        a(s);
      }).catch((s) => {
        u(s);
      });
    });
  },
  delete(t, i, e, n, d, a = !0) {
    return new Promise((u, s) => {
      sl("delete", t, i, e, n, d, a).then((p) => {
        u(p);
      }).catch((p) => {
        s(p);
      });
    });
  },
  all: wl.all,
  spread: wl.spread,
  config: _e
}, ln = {
  class: "btTablePage fullHeight",
  ref: "tableBox"
}, tn = { class: "topBtn" }, an = { class: "fullHeight relativeBox" }, nn = {
  ref: "tableContainerLOI",
  class: "fullFlowContent"
}, on = { class: "pageContainer" }, sn = 300, rn = /* @__PURE__ */ se({
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
    const n = t, { globalProperties: d } = xl().appContext.config;
    ({ ...{
      showSettingCheck: !1,
      disableShowSetting: !1
    }, ...Ht });
    const u = d.pageSizes || [10, 20, 30, 40], s = X(n.data), p = X(
      localStorage.getItem("btPageSize") && Number(localStorage.getItem("btPageSize")) || n.pageSize
    ), r = X(1), c = X(0);
    let m = [], g, A, k = n.orderKey, b = n.orderDefault;
    const _ = K(() => {
      for (let x of n.columns)
        if (x.fixed)
          return !0;
      return !1;
    }), L = K(() => n.selectionFixed || _.value), P = K(() => {
      let x = {
        ...n.searchData,
        current: r.value,
        size: p.value
      };
      return n.sortable === "custom" && (n.orderKeyFormat === "underline" ? x[b] = nt(k) : n.orderKeyFormat === "camelcase" && (x[b] = et(k))), x;
    }), I = K(() => {
      let x = n.columns.filter((B) => B.type !== "selection");
      if (n.selection || n.radio) {
        let B;
        n.radio ? B = {
          title: " ",
          width: 65,
          render: (fe, ae) => oe(Gt, {
            value: ae.row.btChecked
          })
        } : B = {
          type: "selection",
          width: 60
        }, n.selectionFixed && (B.fixed = n.selectionFixed), x.unshift(B);
      }
      return x.forEach((B) => {
        n.sortable === "custom" ? B.key && B.sortable !== !0 && B.sortable !== !1 && (B.sortable = "custom") : B.sortable = !1, B.align || (B.align = "center");
      }), n.tableEmptyTdHandle && x.forEach((B) => {
        B.key && B.render === void 0 && (B.tooltip ? B.render = it(B.key, !0) : B.render = (fe, ae) => {
          let de = ae.row[B.key];
          return fe("span", de === "" || de === null || de === void 0 ? "--" : de);
        });
      }), x;
    }), S = K({
      get() {
        return s.value.map((x, B) => ({
          btKey: "bt-" + B,
          btChecked: !1,
          ...x
        }));
      },
      set(x) {
        s.value = x;
      }
    }), Z = K(() => m.map((x) => x.id)), R = K(() => m.map((x) => x.btKey)), h = X();
    ye(() => n.searchData, we, { deep: !0 });
    function we() {
      r.value = 1, Se();
    }
    function w() {
      n.initData && Se();
    }
    function U(x) {
      s.value.unshift(ie(x)), ke(() => {
        var B;
        (B = h.value) == null || B.clickCurrentRow(0);
      }, 100);
    }
    function G(x, B, fe) {
      let ae = null;
      if (Rt(B) && B ? ae = A : je(B) && (ae = B), ae !== null) {
        let de = s.value[ae];
        for (let W in x)
          x.hasOwnProperty(W) && (de[W] = x[W]);
        fe && ke(() => {
          var W;
          (W = h.value) == null || W.clickCurrentRow(ae);
        }, 10);
      }
    }
    function J(x) {
      s.value.splice(x, 1), ke(() => {
        var B;
        (B = h.value) == null || B.clickCurrentRow(0);
      }, 100);
    }
    function re(x, B) {
      var fe;
      x.btChecked && n.radio || (n.selection || n.radio) && n.rowClickSelect && ((fe = h.value) == null || fe.toggleSelect(B));
    }
    function $(x, B) {
      g = B.btKey, A = Number(B.btKey.split("-")[1]), n.radio && (s.value[A].btChecked = !0);
    }
    function le(x) {
      if (n.radio)
        for (let B of S.value)
          B.btKey !== g && (s.value[Number(B.btKey.split("-")[1])].btChecked = !1);
      m = x, e("on-selection-change", x);
    }
    function te() {
      return ie(m);
    }
    function ve(x) {
      r.value = x, Se();
    }
    function Me(x) {
      p.value = x, localStorage.setItem("btPageSize", String(x)), r.value === 1 && Se();
    }
    function Ue({ key: x, order: B }) {
      b === "normal" ? (k = n.orderKey, b = n.orderDefault) : (k = x, b = B), r.value = 1, Ke();
    }
    function Re() {
      var x;
      if (n.radio) {
        if (R.value.length > 0 && S.value.length > 0) {
          let B = R.value[0].split("-")[1];
          S.value[B].btChecked = !1;
        }
      } else
        (x = h.value) == null || x.selectAll(!1);
      m.length > 0 && (m = [], e("on-selection-change", [])), g = null, A = null;
    }
    function Ne() {
      s.value = [], Re(), r.value = 1, c.value = 0;
    }
    function Ke(x, B, fe) {
      return new Promise((ae) => {
        x && (b = x), B && (k = B), n.url ? Te.get(n.url, P.value, "", [], { spin: n.getDataLoading }).then((de) => {
          var qe, tl, al, Ye, Je, nl, Xe, ol;
          let W;
          fe || Re(), typeof n.dataHandler == "function" ? W = n.dataHandler(de) : W = de, W.data ? ((qe = W.data) != null && qe.records || ((tl = W.data) == null ? void 0 : tl.records) === null ? s.value = ((al = W.data) == null ? void 0 : al.records) || [] : W.data.page ? ((Ye = W.data.page) != null && Ye.records || ((Je = W.data.page) == null ? void 0 : Je.records) === null) && (s.value = W.data.page.records || []) : W.data.data ? ((nl = W.data.data) != null && nl.records || ((Xe = W.data.data) == null ? void 0 : Xe.records) === null) && (s.value = ((ol = W.data.data) == null ? void 0 : ol.records) || []) : s.value = W.data, c.value = W.data.page && W.data.page.total || W.data.data && W.data.data.total || W.data.total || W.total || 0, c.value === 0 && r.value > 1 && s.value && s.value.length === 0 ? r.value = 1 : r.value > 1 && c.value <= (r.value - 1) * p.value && (r.value--, dl(function() {
            Ke(x, B);
          })), e("on-data-change", W), ae(W)) : (console.warn("请求返回数据有误，无法使用"), Ne(), e("on-data-change", W));
        }).catch((de) => {
          console.warn(de), Re(), Ne(), e("on-data-change", de);
        }) : console.warn("没有有效的请求地址，无法获取表格数据");
      });
    }
    function Se(x, B, fe) {
      n.radio && (x || n.rowClickNum !== -1) ? Ke(B, fe, x).then(() => {
        s.value.length > 0 && ke(() => {
          var ae, de;
          x ? (ae = h.value) == null || ae.clickCurrentRow(A || 0) : (de = h.value) == null || de.clickCurrentRow(n.rowClickNum);
        }, 10);
      }) : Ke();
    }
    return We(w), i({
      selectedIds: Z,
      addRow: U,
      setRowData: G,
      deleteRow: J,
      getSelected: te,
      clearSelect: Re,
      clearTableData: Ne,
      getTableData: Ke,
      getDataAndClickRow: Se
    }), (x, B) => {
      const fe = z("Table"), ae = z("Page");
      return V(), F("div", ln, [
        be(E("div", tn, [
          Ie(x.$slots, "tableSetting"),
          Ie(x.$slots, "topMsg"),
          Ie(x.$slots, "topBtnGroup")
        ], 512), [
          [Ve, n.showTopRow]
        ]),
        E("div", {
          class: he(["tableContainer fullHeight", { noTop: !n.showTopRow, noPage: n.noPage }])
        }, [
          E("div", an, [
            E("div", nn, [
              q(fe, Jl({
                ref_key: "tableRef",
                ref: h
              }, x.$attrs, {
                height: f(L) && sn || null,
                class: { noBorderTable: n.noBorderTable, fullHeightTable: !f(L), lightHeadO: n.lightHead },
                columns: f(I),
                data: f(S),
                "highlight-row": n.radio || n.highlightRow,
                onOnSelect: $,
                onOnSelectionChange: le,
                onOnSortChange: Ue,
                onOnRowClick: re
              }), null, 16, ["height", "class", "columns", "data", "highlight-row"])
            ], 512)
          ])
        ], 2),
        be(E("div", on, [
          q(ae, {
            modelValue: f(r),
            "onUpdate:modelValue": B[0] || (B[0] = (de) => Oe(r) ? r.value = de : null),
            "page-size-opts": f(u),
            total: f(c),
            "page-size": f(p),
            "show-sizer": "",
            "show-total": "",
            showElevator: !n.noElevator,
            size: n.pageComponentSize,
            onOnChange: ve,
            onOnPageSizeChange: Me
          }, null, 8, ["modelValue", "page-size-opts", "total", "page-size", "showElevator", "size"])
        ], 512), [
          [Ve, !n.noPage]
        ])
      ], 512);
    };
  }
}), mt = /* @__PURE__ */ se({
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
    const e = t, n = K({
      get() {
        return e.modelValue && e.modelValue.key || null;
      },
      set(r) {
        let c = {
          key: r,
          val: null
        };
        n.value && n.value !== r && (c.beforeKey = n.value), i("update:modelValue", c), i("on-change", c);
      }
    }), d = K({
      get() {
        return e.modelValue && e.modelValue.val || null;
      },
      set(r) {
        i("update:modelValue", {
          key: n.value,
          val: r
        });
      }
    }), a = K(() => ({
      width: e.labelWidth + "px",
      textAlign: e.labelTextAlign
    })), u = K(() => ({ width: e.itemWidth + "px" }));
    function s(r) {
      r && r.target && r.target.value !== void 0 && p({
        key: n.value,
        val: r.target.value
      });
    }
    const p = Et((r) => {
      i("on-change", r);
    }, 500);
    return (r, c) => {
      const m = z("Option"), g = z("Select"), A = z("Input");
      return V(), F("div", null, [
        q(g, {
          modelValue: f(n),
          "onUpdate:modelValue": c[0] || (c[0] = (k) => Oe(n) ? n.value = k : null),
          style: j(f(a)),
          disabled: !!e.disabled,
          transfer: ""
        }, {
          default: ee(() => [
            (V(!0), F(pe, null, ge(e.selectOption, (k, b) => (V(), D(m, {
              value: k.val,
              key: "selectInputOp" + k.value + b,
              style: j({ textAlign: e.labelTextAlign })
            }, {
              default: ee(() => [
                xe(Q(k.label), 1)
              ]),
              _: 2
            }, 1032, ["value", "style"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue", "style", "disabled"]),
        q(A, {
          modelValue: f(d),
          "onUpdate:modelValue": c[1] || (c[1] = (k) => Oe(d) ? d.value = k : null),
          placeholder: e.placeholder || f(C)("r.pInput"),
          style: j(f(u)),
          clearable: e.clearable,
          disabled: !!e.disabled,
          onOnChange: s
        }, null, 8, ["modelValue", "placeholder", "style", "clearable", "disabled"])
      ]);
    };
  }
});
var un = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function dn(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var yt = { exports: {} };
(function(t, i) {
  (function(e, n) {
    t.exports = n();
  })(un, function() {
    function e(m) {
      var g = [];
      return m.AMapUI && g.push(n(m.AMapUI)), m.Loca && g.push(d(m.Loca)), Promise.all(g);
    }
    function n(m) {
      return new Promise(function(g, A) {
        var k = [];
        if (m.plugins)
          for (var b = 0; b < m.plugins.length; b += 1)
            u.AMapUI.plugins.indexOf(m.plugins[b]) == -1 && k.push(m.plugins[b]);
        if (s.AMapUI === a.failed)
          A("前次请求 AMapUI 失败");
        else if (s.AMapUI === a.notload) {
          s.AMapUI = a.loading, u.AMapUI.version = m.version || u.AMapUI.version, b = u.AMapUI.version;
          var _ = document.body || document.head, L = document.createElement("script");
          L.type = "text/javascript", L.src = "https://webapi.amap.com/ui/" + b + "/main.js", L.onerror = function(P) {
            s.AMapUI = a.failed, A("请求 AMapUI 失败");
          }, L.onload = function() {
            if (s.AMapUI = a.loaded, k.length)
              window.AMapUI.loadUI(k, function() {
                for (var P = 0, I = k.length; P < I; P++) {
                  var S = k[P].split("/").slice(-1)[0];
                  window.AMapUI[S] = arguments[P];
                }
                for (g(); p.AMapUI.length; )
                  p.AMapUI.splice(0, 1)[0]();
              });
            else
              for (g(); p.AMapUI.length; )
                p.AMapUI.splice(0, 1)[0]();
          }, _.appendChild(L);
        } else
          s.AMapUI === a.loaded ? m.version && m.version !== u.AMapUI.version ? A("不允许多个版本 AMapUI 混用") : k.length ? window.AMapUI.loadUI(k, function() {
            for (var P = 0, I = k.length; P < I; P++) {
              var S = k[P].split("/").slice(-1)[0];
              window.AMapUI[S] = arguments[P];
            }
            g();
          }) : g() : m.version && m.version !== u.AMapUI.version ? A("不允许多个版本 AMapUI 混用") : p.AMapUI.push(function(P) {
            P ? A(P) : k.length ? window.AMapUI.loadUI(k, function() {
              for (var I = 0, S = k.length; I < S; I++) {
                var Z = k[I].split("/").slice(-1)[0];
                window.AMapUI[Z] = arguments[I];
              }
              g();
            }) : g();
          });
      });
    }
    function d(m) {
      return new Promise(function(g, A) {
        if (s.Loca === a.failed)
          A("前次请求 Loca 失败");
        else if (s.Loca === a.notload) {
          s.Loca = a.loading, u.Loca.version = m.version || u.Loca.version;
          var k = u.Loca.version, b = u.AMap.version.startsWith("2"), _ = k.startsWith("2");
          if (b && !_ || !b && _)
            A("JSAPI 与 Loca 版本不对应！！");
          else {
            b = u.key, _ = document.body || document.head;
            var L = document.createElement("script");
            L.type = "text/javascript", L.src = "https://webapi.amap.com/loca?v=" + k + "&key=" + b, L.onerror = function(P) {
              s.Loca = a.failed, A("请求 AMapUI 失败");
            }, L.onload = function() {
              for (s.Loca = a.loaded, g(); p.Loca.length; )
                p.Loca.splice(0, 1)[0]();
            }, _.appendChild(L);
          }
        } else
          s.Loca === a.loaded ? m.version && m.version !== u.Loca.version ? A("不允许多个版本 Loca 混用") : g() : m.version && m.version !== u.Loca.version ? A("不允许多个版本 Loca 混用") : p.Loca.push(function(P) {
            P ? A(P) : A();
          });
      });
    }
    if (!window)
      throw Error("AMap JSAPI can only be used in Browser.");
    var a;
    (function(m) {
      m.notload = "notload", m.loading = "loading", m.loaded = "loaded", m.failed = "failed";
    })(a || (a = {}));
    var u = { key: "", AMap: { version: "1.4.15", plugins: [] }, AMapUI: { version: "1.1", plugins: [] }, Loca: { version: "1.3.2" } }, s = { AMap: a.notload, AMapUI: a.notload, Loca: a.notload }, p = { AMap: [], AMapUI: [], Loca: [] }, r = [], c = function(m) {
      typeof m == "function" && (s.AMap === a.loaded ? m(window.AMap) : r.push(m));
    };
    return { load: function(m) {
      return new Promise(function(g, A) {
        if (s.AMap == a.failed)
          A("");
        else if (s.AMap == a.notload) {
          var k = m.key, b = m.version, _ = m.plugins;
          k ? (window.AMap && location.host !== "lbs.amap.com" && A("禁止多种API加载方式混用"), u.key = k, u.AMap.version = b || u.AMap.version, u.AMap.plugins = _ || u.AMap.plugins, s.AMap = a.loading, b = document.body || document.head, window.___onAPILoaded = function(P) {
            if (delete window.___onAPILoaded, P)
              s.AMap = a.failed, A(P);
            else
              for (s.AMap = a.loaded, e(m).then(function() {
                g(window.AMap);
              }).catch(A); r.length; )
                r.splice(0, 1)[0]();
          }, _ = document.createElement("script"), _.type = "text/javascript", _.src = "https://webapi.amap.com/maps?callback=___onAPILoaded&v=" + u.AMap.version + "&key=" + k + "&plugin=" + u.AMap.plugins.join(","), _.onerror = function(P) {
            s.AMap = a.failed, A(P);
          }, b.appendChild(_)) : A("请填写key");
        } else if (s.AMap == a.loaded)
          if (m.key && m.key !== u.key)
            A("多个不一致的 key");
          else if (m.version && m.version !== u.AMap.version)
            A("不允许多个版本 JSAPI 混用");
          else {
            if (k = [], m.plugins)
              for (b = 0; b < m.plugins.length; b += 1)
                u.AMap.plugins.indexOf(m.plugins[b]) == -1 && k.push(m.plugins[b]);
            k.length ? window.AMap.plugin(k, function() {
              e(m).then(function() {
                g(window.AMap);
              }).catch(A);
            }) : e(m).then(function() {
              g(window.AMap);
            }).catch(A);
          }
        else if (m.key && m.key !== u.key)
          A("多个不一致的 key");
        else if (m.version && m.version !== u.AMap.version)
          A("不允许多个版本 JSAPI 混用");
        else {
          var L = [];
          if (m.plugins)
            for (b = 0; b < m.plugins.length; b += 1)
              u.AMap.plugins.indexOf(m.plugins[b]) == -1 && L.push(m.plugins[b]);
          c(function() {
            L.length ? window.AMap.plugin(L, function() {
              e(m).then(function() {
                g(window.AMap);
              }).catch(A);
            }) : e(m).then(function() {
              g(window.AMap);
            }).catch(A);
          });
        }
      });
    }, reset: function() {
      delete window.AMap, delete window.AMapUI, delete window.Loca, u = { key: "", AMap: { version: "1.4.15", plugins: [] }, AMapUI: { version: "1.1", plugins: [] }, Loca: { version: "1.3.2" } }, s = {
        AMap: a.notload,
        AMapUI: a.notload,
        Loca: a.notload
      }, p = { AMap: [], AMapUI: [], Loca: [] };
    } };
  });
})(yt);
var cn = yt.exports;
const pn = /* @__PURE__ */ dn(cn);
let Il = { securityJsCode: "", key: "" };
function fn({ securityJsCode: t, key: i }) {
  Il.securityJsCode = t, Il.key = i;
}
function mn(t) {
  return Il[t];
}
const ht = /* @__PURE__ */ se({
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
    const e = t, n = K({
      get() {
        let I;
        return e.modelValue ? e.modelValue.name ? I = ie(e.modelValue) : I = {
          ...e.modelValue,
          name: null
        } : I = {
          name: null
        }, I;
      },
      set(I) {
        i("update:modelValue", ie(I));
      }
    }), d = K(() => je(e.width) ? e.width + "px" : e.width), a = K(() => je(e.height) ? e.height + "px" : e.height ? e.height : je(e.width) ? e.width * 0.66 + "px" : "200px"), u = K(() => ({
      width: d.value,
      position: "relative"
    })), s = K(() => ({
      width: d.value,
      height: a.value,
      marginTop: "6px",
      opacity: e.showMap ? 1 : 0,
      position: e.showMap ? "relative" : "absolute",
      top: e.showMap ? 0 : "-10000px"
    }));
    ye(
      () => e.modelValue,
      (I) => {
        if (I && I.lng && I.lat) {
          if (!k || !b)
            return;
          L({
            lng: I.lng,
            lat: I.lat,
            name: I.name
          });
        }
      }
    );
    const p = "mapId" + Math.floor(Math.random() * 1e9), r = X(null), c = X(null);
    let m;
    function g() {
      c.value && c.value.clientHeight < 10 || !c.value ? ke(g, 300) : ke(_, 100);
    }
    let A, k, b;
    function _() {
      pn.load({
        key: mn("key"),
        version: "2.0",
        plugins: ["AMap.AutoComplete", "AMap.Geocoder"]
      }).then((I) => {
        A = I, k = new A.Map(p).on("complete", () => {
          var S, Z;
          b = new A.Geocoder(), e.modelValue && e.modelValue.lng && e.modelValue.lat && L({
            lng: e.modelValue.lng,
            lat: e.modelValue.lat,
            name: e.modelValue.name
          }), new A.AutoComplete({
            input: (Z = (S = r.value) == null ? void 0 : S.$el) == null ? void 0 : Z.children[1]
          }).on("select", (R) => {
            R && R.poi && R.poi.name && (R.poi.location && R.poi.location.lng && R.poi.location.lat ? (L({
              name: R.poi.name,
              lng: R.poi.location.lng,
              lat: R.poi.location.lat
            }), n.value = {
              name: R.poi.name,
              lng: R.poi.location.lng,
              lat: R.poi.location.lat
            }) : k.setCity(R.poi.name, () => {
              let h = k.getCenter();
              L({
                name: R.poi.name,
                lng: h.lng,
                lat: h.lat
              }), n.value = {
                name: R.poi.name,
                lng: h.lng,
                lat: h.lat
              };
            })), i("on-change", n.value);
          }), k.on("hotspotclick", (R) => {
            L({
              name: R.name,
              lng: R.lnglat.lng,
              lat: R.lnglat.lat
            }), n.value = {
              name: R.name,
              lng: R.lnglat.lng,
              lat: R.lnglat.lat
            };
          });
        });
      });
    }
    function L({ lng: I, lat: S, name: Z }) {
      k.clearMap();
      let R = new A.LngLat(I, S), h = new A.Marker({
        map: k,
        position: R,
        draggable: !0
      });
      k.add(h), P(I, S), h.on("dragend", () => {
        let we = h.getPosition();
        n.value = {
          name: Z || null,
          lng: we.lng,
          lat: we.lat
        }, P(I, S);
      }), h.on("click", (we) => {
        m && m.open(k, we.target.getPosition());
      }), k.setFitView();
    }
    function P(I, S) {
      b.getAddress([I, S], (Z, R) => {
        Z === "complete" && R.info === "OK" && R.regeocode && R.regeocode.formattedAddress ? m = new A.InfoWindow({
          //创建信息窗体
          isCustom: !0,
          content: '<div class="mapInfoWindowIKJ">' + R.regeocode.formattedAddress + "</div>",
          offset: new A.Pixel(16, -45),
          closeWhenClickMap: !0
        }) : (m = null, console.warn("地图获取位置信息失败", R));
      });
    }
    return We(g), Lt(() => {
      k && (k.destroy(), k = null, b = null, m = null);
    }), (I, S) => (V(), F("div", {
      style: j(f(u)),
      class: "containerIKJ"
    }, [
      q(f(jt), {
        ref_key: "mapInputRef",
        ref: r,
        modelValue: f(n).name,
        "onUpdate:modelValue": S[0] || (S[0] = (Z) => f(n).name = Z),
        class: he({ mapInputIKJ: e.showMap }),
        placeholder: e.placeholder || f(C)("r.search"),
        disabled: e.disabled,
        icon: "ios-search"
      }, null, 8, ["modelValue", "class", "placeholder", "disabled"]),
      E("div", {
        style: j(f(s)),
        ref_key: "mapRef",
        ref: c,
        id: p
      }, null, 4)
    ], 4));
  }
});
var Wl;
const vt = /* @__PURE__ */ se({
  __name: "AsyncCascader",
  props: {
    modelValue: {},
    url: { default: (Wl = window == null ? void 0 : window.g) != null && Wl.mgrURL ? window.g.mgrURL + "/web/v1/umc/orgs" : "" },
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
    const e = t, n = X([]), d = K({
      get() {
        let r = e.modelValue;
        return Array.isArray(r) ? ie(r) : je(r) ? ml({
          group: n.value,
          condition: (c) => c.value === r,
          pathKey: "value"
        }) : Xl(r) ? r.split(e.separator) : [];
      },
      set(r) {
        if (e.onlyLastVal)
          Be(r) ? (i("update:modelValue", null), i("on-label-change", null)) : i("update:modelValue", cl(r));
        else {
          if (Nt(e.modelValue, r))
            return;
          i("update:modelValue", ie(r));
        }
      }
    });
    function a() {
      if (!e.url) {
        console.error("没有用于拉取级联数据的有效接口地址");
        return;
      }
      Te.get(e.url).then((r) => {
        let c = null;
        r && r.data && r.data.records ? c = r.data.records : r && r.data ? c = r.data : r && (c = r), c ? (typeof e.optionFilter == "function" && O(e.optionFilter) === "Function" && (c = e.optionFilter(c)), n.value = u(c)) : console.warn("级联数据错误，不能使用");
      }).catch(() => {
        console.warn("拉取级联数据出错");
      });
    }
    function u(r) {
      let c = [];
      for (let m of r) {
        let g = {
          value: m[e.optionVal],
          label: m[e.optionLabel]
        };
        m.children && !Be(m.children) && (g.children = u(m.children)), c.push(g);
      }
      return c;
    }
    function s(r, c) {
      return e.onlyLastLabel ? cl(r) : r.join(e.separator);
    }
    function p(r, c) {
      let m = "";
      Be(c) || (m = c.map((g) => g.label).join(e.separator)), i("on-label-change", m);
    }
    return We(a), (r, c) => {
      const m = z("Cascader");
      return V(), D(m, {
        data: f(n),
        modelValue: f(d),
        "onUpdate:modelValue": c[0] || (c[0] = (g) => Oe(d) ? d.value = g : null),
        onOnChange: p,
        "change-on-select": "",
        transfer: "",
        disabled: e.disabled,
        "render-format": s,
        placeholder: e.placeholder || f(C)("r.pSelect"),
        filterable: e.filterable
      }, null, 8, ["data", "modelValue", "disabled", "placeholder", "filterable"]);
    };
  }
}), gt = /* @__PURE__ */ se({
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
    const e = t, n = X(), d = K({
      get() {
        if (e.modelValue && (je(e.modelValue) || Xl(e.modelValue))) {
          let u = String(e.modelValue).trim();
          if (/^\d*$/.test(u)) {
            let p = u.substring(0, 2) + "0000", r, c = a(u);
            return c.length < 7 ? r = u.substring(0, 4) + "00" : r = u.substring(0, 6), /^8\d+$/.test(u) ? [p, c] : [p, r, c];
          }
          return u.indexOf(e.separator) !== -1 ? u.split(e.separator) : [u];
        } else
          return Array.isArray(e.modelValue) ? ie(e.modelValue) : (n.value && (n.value.select = []), []);
      },
      set(u) {
        if (Be(u))
          i("update:modelValue", null), i("on-name-change", null);
        else {
          let s = cl(u), p = "", r = "";
          if (s && (p = s.code), p && p.length < 12) {
            let c = [...p];
            for (; c.length < 12; )
              c.push(0);
            p = c.join("");
          }
          if (Array.isArray(u) && (r = u.map((c) => c.name).join(e.separator)), p) {
            if (p === e.modelValue)
              return;
            i("update:modelValue", p);
          }
          r && i("on-name-change", r);
        }
      }
    });
    function a(u) {
      let s = [...u];
      for (; s[s.length - 1] === "0"; )
        s.pop();
      return s.join("");
    }
    return (u, s) => (V(), D(f(Xt), Jl(u.$attrs, {
      class: "alCascaderMC",
      ref_key: "alCRef",
      ref: n,
      modelValue: f(d),
      "onUpdate:modelValue": s[0] || (s[0] = (p) => Oe(d) ? d.value = p : null),
      level: e.level,
      disabled: e.disabled,
      placeholder: e.placeholder || f(C)("r.pSelect"),
      transfer: e.transfer,
      searchable: e.filterable
    }), null, 16, ["modelValue", "level", "disabled", "placeholder", "transfer", "searchable"]));
  }
});
function Ee(t) {
  var u;
  const i = (...s) => Le.apply(this, s), e = i("r.closePreview"), n = i("r.fullImg");
  let d = bl(document.getElementsByTagName("body")), a = document.createElement("div");
  a.setAttribute("class", "fullScreenImgByDom"), a.innerHTML = `<div class='previewInner'><img src='${t}' alt='${n}' ><i class='ivu-icon ivu-icon-md-close' title='${e}' ></i></div>`, (u = a.querySelector(".ivu-icon-md-close")) == null || u.addEventListener("click", function() {
    let s = bl(document.getElementsByTagName("body"));
    s && s.removeChild(a);
  }), d == null || d.appendChild(a);
}
const yn = { class: "previewBoxM" }, hn = {
  key: 0,
  class: "previewImg"
}, vn = ["src", "alt"], gn = { class: "deleteModal" }, bn = { class: "previewBoxM" }, wn = {
  key: 0,
  class: "previewImg"
}, kn = ["src", "alt"], Vn = { class: "deleteModal" }, An = { class: "customFileListM" }, Cn = {
  key: 0,
  class: "customFileListItem"
}, _n = ["onClick", "title"], In = { class: "btBoxJ" }, xn = { class: "customFileListM" }, Sn = {
  key: 0,
  class: "customFileListItem"
}, Bn = ["onClick", "title"], On = { class: "btBoxJ" };
var ql;
const bt = /* @__PURE__ */ se({
  __name: "UploadGroup",
  props: {
    modelValue: { default: () => [] },
    url: { default: (ql = window == null ? void 0 : window.g) != null && ql.mgrURL ? window.g.mgrURL + "/web/v1/fsc/file" : "" },
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
    const e = t, n = gl([]), d = gl([]), a = K(() => !e.manualUpload && e.showImg && r.value ? "img" : e.manualUpload && e.showImg && r.value ? "localImg" : e.manualUpload && e.showUploadList && (!e.showImg || !r.value) ? "localList" : !e.manualUpload && e.showUploadList && (!e.showImg || !r.value) ? "list" : ""), u = K(() => e.manualUpload ? "//jsonplaceholder.typicode.com/posts/" : e.url), s = K({
      get() {
        if (e.manualUpload)
          return p.value;
        {
          let w = [];
          for (let U of p.value)
            typeof U == "object" && O(U) === "File" ? w.push(U) : (typeof U == "number" || typeof U == "string") && w.push({
              response: {
                data: [
                  {
                    id: U
                  }
                ]
              }
            });
          return w;
        }
      },
      set(w) {
        var U;
        if (e.manualUpload)
          p.value = w;
        else {
          let G = [];
          for (let J of w)
            (U = J == null ? void 0 : J.response) != null && U.data && J.response.data[0] && J.response.data[0].id && G.push(J.response.data[0].id);
          p.value = G;
        }
      }
    }), p = K({
      get() {
        switch (typeof e.modelValue) {
          case "number":
            return [e.modelValue];
          case "string":
            return e.modelValue.indexOf("--") !== -1 ? [] : /^\d*$/.test(e.modelValue) ? [Number(e.modelValue)] : [e.modelValue];
          case "object":
            return Array.isArray(e.modelValue) ? e.modelValue.filter((w) => w !== "--") : O(e.modelValue) === "File" ? [e.modelValue] : [];
          default:
            return [];
        }
      },
      set(w) {
        if (e.length === 1) {
          let U = bl(w);
          i("update:modelValue", U ?? null), i("on-change", U ?? null);
        } else
          i("update:modelValue", ie(w)), i("on-change", ie(w));
      }
    }), r = K(() => {
      let w;
      e.manualUpload ? w = s.value : w = d.value;
      for (let U of w) {
        let G;
        if (e.manualUpload ? G = U && U.type : G = U && U.mimeType, !G || G && !ul(G))
          return !1;
      }
      return !0;
    });
    ye(
      () => s.value,
      async (w) => {
        var U, G, J, re, $;
        if (a.value === "localImg")
          w && w.length > 0 ? n.value = await m(w) : n.value = [];
        else if (w && w.length > 0 && a.value !== "localList") {
          let le = [];
          for (let te of w)
            if (te.name === void 0)
              if ((U = te == null ? void 0 : te.response) != null && U.data && te.response.data[0] && te.response.data[0].id) {
                let ve = await Te.get(e.url + "/" + te.response.data[0].id).catch(() => {
                  le.push({ name: C("r.file") + Rl(w, te) });
                }), Me = ie(te);
                Me.name = ((G = ve == null ? void 0 : ve.data) == null ? void 0 : G.returnValue) && ve.data.returnValue[0] && ((J = ve.data.returnValue[0]) == null ? void 0 : J.name) || C("r.file") + Rl(w, te), Me.mimeType = ((re = ve == null ? void 0 : ve.data) == null ? void 0 : re.returnValue) && ve.data.returnValue[0] && (($ = ve.data.returnValue[0]) == null ? void 0 : $.mimeType) || "unknown", le.push(Me);
              } else
                le.push({ name: C("r.unknown") });
            else
              le.push(te);
          d.value = le;
        } else
          d.value = [];
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    function c(w) {
      return w.name || w.split && cl(w.split("/")) || w;
    }
    async function m(w) {
      let U = [];
      for (let G of w) {
        let J = await rl(G);
        U.push(J);
      }
      return U;
    }
    function g(w) {
      if (!e.disabled) {
        let U = s.value;
        U.splice(w, 1), s.value = U;
      }
    }
    function A(w) {
      w && w.response && w.response.data && w.response.data[0] && w.response.data[0].id && window.open(e.url + "/" + w.response.data[0].id + "/download");
    }
    function k(w) {
      var U, G;
      return e.manualUpload ? w.type && ul(w.type) : ((U = w == null ? void 0 : w.response) == null ? void 0 : U.data) && ((G = w.response.data[0]) == null ? void 0 : G.id) && w.mimeType && ul(w.mimeType);
    }
    function b(w) {
      e.manualUpload ? rl(w).then((U) => {
        Ee(U);
      }) : Ee(e.url + "/" + w.response.data[0].id + "/download?preview=true");
    }
    function _(w) {
      O(w) === "String" && w.indexOf("http") > -1 ? window.open(w) : O(w) === "File" && rl(w).then((U) => {
        lt(w.name, U);
      });
    }
    function L(w) {
      if (e.manualUpload) {
        if (w) {
          let U = Sl(w.name);
          if (e.format.length > 0 && e.format.indexOf(U) < 0)
            return Ce(
              C("r.wrongFileType"),
              C("r.supportType") + (e.format.length > 0 && String(e.format) || C("r.none")),
              "warning"
            ), !1;
          if (e.maxSize && w.size > e.maxSize * 1024)
            return Ce(C("r.fileIsBig"), C("r.supportSize") + e.maxSize + "kb", "warning"), !1;
          let G = s.value;
          G.push(w), s.value = G;
        }
        return !1;
      } else
        return !0;
    }
    function P(w) {
      console.warn(w), Ce(C("r.uploadError"), "", "error");
    }
    function I(w, U, G) {
      if (w && w.code === 0) {
        let J = s.value;
        J.push(U), s.value = J;
      } else
        Ce(C("r.uploadFail"), w && w.message || "", "error");
    }
    function S() {
      Ce(C("r.fileIsBig"), C("r.supportSize") + e.maxSize + " kb", "warning");
    }
    function Z() {
      Ce(
        C("r.wrongFileType"),
        C("r.supportType") + (e.format.length > 0 && String(e.format) || C("r.none")),
        "warning"
      );
    }
    function R(w) {
      var J, re, $, le;
      let U = ((J = w == null ? void 0 : w.response) == null ? void 0 : J.data) && ((re = w.response.data[0]) == null ? void 0 : re.id), G = (($ = w == null ? void 0 : w.response) == null ? void 0 : $.data) && ((le = w.response.data[0]) == null ? void 0 : le.mimeType);
      U && (O(G) === "String" && G.indexOf("image") > -1 ? Ee(e.url + "/" + U + "/download?preview=true") : window.open(e.url + "/" + U + "/download?preview=true"));
    }
    function h(w) {
      var G, J;
      let U = ((G = w == null ? void 0 : w.response) == null ? void 0 : G.data) && ((J = w.response.data[0]) == null ? void 0 : J.id);
      we(null, U);
    }
    function we(w, U) {
      if (!e.disabled && p.value.indexOf(U) !== -1) {
        const G = ie(p.value);
        let J = s.value;
        J.splice(G.indexOf(U), 1), s.value = J;
      }
    }
    return (w, U) => {
      const G = z("Button"), J = z("Upload"), re = z("Icon");
      return V(), F("div", null, [
        q(J, {
          name: "files",
          action: f(u),
          "before-upload": L,
          "on-error": P,
          "on-success": I,
          "on-exceeded-size": S,
          "on-preview": R,
          "on-remove": h,
          "on-format-error": Z,
          data: e.data,
          "max-size": e.maxSize,
          "show-upload-list": !1,
          "with-credentials": e.withCredentials,
          format: e.format,
          multiple: e.multiple || !1,
          disabled: e.length > 0 && f(s).length >= e.length || !!e.disabled
        }, {
          default: ee(() => [
            q(G, {
              icon: "ios-cloud-upload-outline",
              class: he({ disabledR: e.length > 0 && f(s).length >= e.length || !!e.disabled })
            }, {
              default: ee(() => [
                xe(Q(f(C)("r.selectFile")), 1)
              ]),
              _: 1
            }, 8, ["class"])
          ]),
          _: 1
        }, 8, ["action", "data", "max-size", "with-credentials", "format", "multiple", "disabled"]),
        be(E("div", yn, [
          (V(!0), F(pe, null, ge(f(p), ($) => (V(), F(pe, { key: $ }, [
            !e.manualUpload && $ !== null ? (V(), F("div", hn, [
              E("img", {
                src: w.url + "/" + $ + "/download?preview=true",
                alt: $
              }, null, 8, vn),
              E("div", gn, [
                q(re, {
                  type: "ios-expand",
                  size: "40",
                  class: "previewExpand",
                  title: f(C)("r.fView"),
                  onClick: (le) => f(Ee)(e.url + "/" + $ + "/download?preview=true")
                }, null, 8, ["title", "onClick"]),
                q(re, {
                  type: "ios-trash-outline",
                  size: "40",
                  class: "previewDelete",
                  onClick: (le) => we(le, $),
                  title: f(C)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : ne("", !0)
          ], 64))), 128))
        ], 512), [
          [Ve, f(a) === "img" && f(p).length > 0]
        ]),
        be(E("div", bn, [
          (V(!0), F(pe, null, ge(f(n), ($, le) => (V(), F(pe, {
            key: "manualImg" + le
          }, [
            e.manualUpload && $ !== null ? (V(), F("div", wn, [
              E("img", {
                src: $,
                alt: "manualImg" + le
              }, null, 8, kn),
              E("div", Vn, [
                q(re, {
                  type: "ios-expand",
                  size: "40",
                  class: "previewExpand",
                  onClick: (te) => f(Ee)($),
                  title: f(C)("r.fView")
                }, null, 8, ["onClick", "title"]),
                q(re, {
                  type: "ios-trash-outline",
                  size: "40",
                  class: "previewDelete",
                  onClick: (te) => g(le),
                  title: f(C)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : ne("", !0)
          ], 64))), 128))
        ], 512), [
          [Ve, f(a) === "localImg" && f(n).length > 0]
        ]),
        be(E("div", An, [
          (V(!0), F(pe, null, ge(f(s), ($, le) => (V(), F(pe, {
            key: "manualItem" + le
          }, [
            e.manualUpload && $ !== null ? (V(), F("p", Cn, [
              $.name ? (V(), D(re, {
                key: 0,
                type: f(kl)($.name)
              }, null, 8, ["type"])) : ne("", !0),
              E("span", {
                class: he(["upNameT", { previewName: k($) }]),
                onClick: (te) => _($),
                title: f(C)("r.download")
              }, Q(c($)), 11, _n),
              E("span", In, [
                k($) ? (V(), D(re, {
                  key: 0,
                  type: "md-qr-scanner",
                  size: "14",
                  class: "listBtH",
                  onClick: (te) => b($),
                  title: f(C)("r.fView")
                }, null, 8, ["onClick", "title"])) : ne("", !0),
                q(re, {
                  type: "ios-close",
                  size: "22",
                  class: "listBtH",
                  onClick: (te) => g(le),
                  title: f(C)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : ne("", !0)
          ], 64))), 128))
        ], 512), [
          [Ve, f(a) === "localList" && f(s).length > 0]
        ]),
        be(E("div", xn, [
          (V(!0), F(pe, null, ge(f(d), ($, le) => (V(), F(pe, {
            key: "defaultItem" + le
          }, [
            !e.manualUpload && $ !== null ? (V(), F("p", Sn, [
              q(re, {
                type: f(kl)($.name)
              }, null, 8, ["type"]),
              E("span", {
                class: he(["upNameT", { previewName: k($) }]),
                onClick: (te) => A($),
                title: f(C)("r.download")
              }, Q($.name || f(C)("r.file") + (le + 1)), 11, Bn),
              E("span", On, [
                k($) ? (V(), D(re, {
                  key: 0,
                  type: "md-qr-scanner",
                  size: "14",
                  class: "listBtH",
                  onClick: (te) => b($),
                  title: f(C)("r.fView")
                }, null, 8, ["onClick", "title"])) : ne("", !0),
                q(re, {
                  type: "ios-close",
                  size: "22",
                  class: "listBtH",
                  onClick: (te) => g(le),
                  title: f(C)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : ne("", !0)
          ], 64))), 128))
        ], 512), [
          [Ve, f(a) === "list" && f(d).length > 0]
        ])
      ]);
    };
  }
}), Mn = /* @__PURE__ */ E("div", { class: "bRoot" }, null, -1), wt = /* @__PURE__ */ se({
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
    const e = t, n = X(!1), d = X(!1), a = X(!1), u = K({
      get() {
        return e.modelValue && e.modelValue[0] || null;
      },
      set(b) {
        i("update:modelValue", [b, s.value]), i("on-change", [b, s.value]);
      }
    }), s = K({
      get() {
        return e.modelValue && e.modelValue[1] || null;
      },
      set(b) {
        i("update:modelValue", [u.value, b]), i("on-change", [u.value, b]);
      }
    }), p = K(
      () => (u.value || "") + ((u.value || s.value) && " - " || "") + (s.value || "")
    ), r = X();
    We(() => {
      r.value.querySelector(".aRoot .ivu-input-suffix").addEventListener("mouseover", () => {
        a.value = !0;
      }), r.value.querySelector(".aRoot .ivu-input-suffix").addEventListener("mouseout", () => {
        a.value = !1;
      }), r.value.querySelector(".aRoot .ivu-input-suffix").addEventListener("click", (b) => {
        !e.disabled && (u.value || s.value) && (b.stopPropagation(), A());
      });
    });
    function c() {
      e.disabled || (n.value = !0);
    }
    function m(b) {
      u.value = b, n.value = !1, d.value = !0;
    }
    function g(b) {
      s.value = b, d.value = !1;
    }
    function A() {
      i("update:modelValue", [null, null]), i("on-change", [null, null]);
    }
    function k() {
      n.value = !1, d.value = !1, u.value && s.value === null && (u.value = null);
    }
    return (b, _) => {
      const L = z("DatePicker"), P = z("Icon"), I = z("Input");
      return V(), F("div", {
        class: "monthRangeBoxR",
        ref_key: "mPickerRef",
        ref: r
      }, [
        q(L, {
          open: f(d),
          modelValue: f(s),
          transfer: "",
          type: "month",
          placement: e.placement,
          options: e.options2,
          onOnChange: g,
          onOnClickoutside: k
        }, {
          default: ee(() => [
            Mn
          ]),
          _: 1
        }, 8, ["open", "modelValue", "placement", "options"]),
        q(L, {
          open: f(n),
          modelValue: f(u),
          transfer: "",
          type: "month",
          placement: e.placement,
          options: e.options1,
          onOnChange: m,
          onOnClickoutside: k
        }, {
          default: ee(() => [
            E("div", { onClick: c }, [
              q(I, {
                class: "aRoot",
                modelValue: f(p),
                "onUpdate:modelValue": _[0] || (_[0] = (S) => Oe(p) ? p.value = S : null),
                readonly: "",
                placeholder: e.placeholder || f(C)("r.selectDate"),
                disabled: e.disabled
              }, {
                suffix: ee(() => [
                  q(P, {
                    type: f(a) && (f(u) || f(s)) && !e.disabled ? "ios-close-circle" : "ios-calendar-outline"
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
}), Tn = { class: "editor-pro-root" }, kt = /* @__PURE__ */ se({
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
    const e = t, n = gl(), d = K({
      get() {
        return e.modelValue;
      },
      set(r) {
        i("update:modelValue", r), i("on-change", r);
      }
    }), a = K(
      () => Object.assign(
        {
          placeholder: e.placeholder || C("r.pInput"),
          insertKeys: {
            index: 31,
            keys: ["previewX"]
          }
        },
        e.toolbarConfig
      )
    ), u = K(
      () => Object.assign(
        {
          readOnly: e.disabled,
          MENU_CONF: {
            uploadImage: {
              async customUpload(r, c) {
                let m = new FormData();
                m.append("files", r);
                const g = r.name, A = e.imgUploadUrl ?? "/node-serve/file";
                Te.post(A, m, null, [], {
                  spin: !0,
                  headers: {
                    "Content-Type": "multipart/form-data"
                  }
                }).then((k) => {
                  if (k && k.data)
                    if (Array.isArray(k.data))
                      for (let b of k.data) {
                        const _ = A + "/" + b.id + "/download";
                        c(_, g, _);
                      }
                    else {
                      const b = A + "/" + k.data.id + "/download";
                      c(b, g, b);
                    }
                }).catch(() => {
                  Ce(C("r.uploadFail"), "", "error");
                });
              }
            },
            uploadVideo: {
              async customUpload(r, c) {
                let m = new FormData();
                m.append("files", r);
                const g = e.videoUploadUrl ?? "/node-serve/file";
                Te.post(g, m, null, [], {
                  spin: !0,
                  headers: {
                    "Content-Type": "multipart/form-data"
                  }
                }).then((A) => {
                  if (A && A.data)
                    if (Array.isArray(A.data))
                      for (let k of A.data) {
                        const b = g + "/" + k.id + "/download";
                        c(b);
                      }
                    else {
                      const k = g + "/" + A.data.id + "/download";
                      c(k);
                    }
                }).catch(() => {
                  Ce(C("r.uploadFail"), "", "error");
                });
              }
            }
          }
        },
        e.editorConfig
      )
    ), s = K(() => ({
      height: typeof e.height == "string" ? e.height : e.height + "px"
    }));
    function p(r) {
      n.value = r;
    }
    return ye(
      () => e.disabled,
      (r) => {
        r ? n.value.disable() : n.value.enable();
      }
    ), Ut(() => {
      n.value && n.value.destroy();
    }), (r, c) => (V(), F("div", Tn, [
      be(q(f(Zt), {
        class: "editor-pro-toolbar",
        editor: f(n),
        defaultConfig: f(a),
        mode: r.mode
      }, null, 8, ["editor", "defaultConfig", "mode"]), [
        [Ve, !r.disabled]
      ]),
      q(f(Qt), {
        class: "editor-pro-editor",
        modelValue: f(d),
        "onUpdate:modelValue": c[0] || (c[0] = (m) => Oe(d) ? d.value = m : null),
        defaultConfig: f(u),
        mode: r.mode,
        onOnCreated: p,
        style: j(f(s))
      }, null, 8, ["modelValue", "defaultConfig", "mode", "style"])
    ]));
  }
}), Ln = { key: 1 }, Un = { key: 2 }, Kn = {
  key: 19,
  class: "formInfoTxtXN"
}, Pn = {
  key: 20,
  class: "formTitleTxtXN"
}, Hl = /* @__PURE__ */ se({
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
    function n(r) {
      return {
        withInfo: !!r.info,
        withTitle: !!r.title,
        inlineFormItemXN: e.inline,
        noLabel: r.type === "selectInput",
        [r.class]: r.class,
        slotInput: r.slotPosition
      };
    }
    function d(r, c) {
      i("item-change", {
        e: r,
        root: c
      });
    }
    function a(r, c) {
      i("re-validate", {
        e: r,
        root: c
      });
    }
    function u(r) {
      i("select-input-change", r);
    }
    function s(r, c) {
      i("al-name-change", {
        name: r,
        root: c
      });
    }
    function p(r, c) {
      i("async-label-change", {
        label: r,
        root: c
      });
    }
    return (r, c) => {
      const m = z("InputNumber"), g = z("Input"), A = z("Option"), k = z("Select"), b = z("Radio"), _ = z("Icon"), L = z("RadioGroup"), P = z("Checkbox"), I = z("CheckboxGroup"), S = z("DatePicker"), Z = z("TimePicker"), R = z("FormItem");
      return V(), D(R, {
        label: e.item.type !== "radio" && e.item.type !== "checkbox" ? e.item.label : " ",
        prop: e.item.key || "",
        class: he(["relativeBox", n(e.item)])
      }, {
        default: ee(() => [
          e.item.type === "txt" ? (V(), F("div", {
            key: 0,
            style: j([e.itemStyle, { display: "inline-block" }]),
            class: he({ likeInputX: e.item.likeInput, disabled: !!e.item.disabled || e.disabled })
          }, Q(e.item.valKey ? e.valGroup[e.item.valKey] || "无" : e.item.val), 7)) : e.item.type === "inputNumber" ? (V(), D(m, {
            key: 1,
            style: j(e.itemStyle),
            modelValue: e.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[0] || (c[0] = (h) => e.tempKeys[e.item.tempKey] = h),
            max: e.item.max || e.item.max === 0 ? e.item.max : 1 / 0,
            min: e.item.min || e.item.min === 0 ? e.item.min : -1 / 0,
            precision: e.item.precision,
            step: e.item.step || 1,
            placeholder: e.item.placeholder || f(C)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            readonly: !!e.item.readonly,
            editable: e.item.editable !== !1,
            onOnBlur: c[1] || (c[1] = (h) => d(h, e.item)),
            "active-change": !!e.item.activeChange,
            clearable: e.item.clearable !== !1
          }, null, 8, ["style", "modelValue", "max", "min", "precision", "step", "placeholder", "disabled", "readonly", "editable", "active-change", "clearable"])) : e.item.type === "input" ? (V(), D(g, {
            key: 2,
            style: j(r.itemStyle),
            modelValue: e.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[2] || (c[2] = (h) => e.tempKeys[e.item.tempKey] = h),
            maxlength: e.item.maxLength || null,
            password: !!e.item.password,
            icon: e.item.icon,
            prefix: e.item.prefix,
            suffix: e.item.suffix,
            placeholder: e.item.placeholder || f(C)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            onOnBlur: c[3] || (c[3] = (h) => d(h, e.item)),
            clearable: e.item.clearable !== !1
          }, {
            default: ee(() => [
              e.item.slotPosition && e.item.slotName ? Ie(r.$slots, e.item.slotName, { key: 0 }) : ne("", !0),
              e.item.slotPosition !== "prepend" && e.item.prepend ? (V(), F("span", Ln, Q(e.item.prepend), 1)) : ne("", !0),
              e.item.slotPosition !== "append" && e.item.append ? (V(), F("span", Un, Q(e.item.append), 1)) : ne("", !0)
            ]),
            _: 3
          }, 8, ["style", "modelValue", "maxlength", "password", "icon", "prefix", "suffix", "placeholder", "disabled", "clearable"])) : e.item.type === "select" ? (V(), D(k, {
            key: 3,
            modelValue: r.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[4] || (c[4] = (h) => r.tempKeys[e.item.tempKey] = h),
            style: j(r.itemStyle),
            filterable: e.item.filterable === !0 || e.item.filterable === !1 ? e.item.filterable : !1,
            disabled: !!e.item.disabled || e.disabled,
            multiple: !!e.item.multiple,
            placeholder: e.item.placeholder || f(C)("r.pSelect"),
            onOnChange: c[5] || (c[5] = (h) => d(h, e.item)),
            transfer: "",
            clearable: e.item.clearable !== !1
          }, {
            default: ee(() => [
              (V(!0), F(pe, null, ge(e.item.options, (h, we) => (V(), D(A, {
                value: h.val,
                label: h.label || h.val,
                key: "option-" + e.item.key + we,
                disabled: !!h.disabled
              }, null, 8, ["value", "label", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["modelValue", "style", "filterable", "disabled", "multiple", "placeholder", "clearable"])) : e.item.type === "selectInput" ? (V(), D(mt, {
            key: 4,
            modelValue: r.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[6] || (c[6] = (h) => r.tempKeys[e.item.tempKey] = h),
            "label-width": r.labelWidth,
            "item-width": r.itemWidth,
            "select-option": e.item.options || [],
            placeholder: e.item.placeholder || f(C)("r.pInput"),
            clearable: e.item.clearable !== !1,
            disabled: !!e.item.disabled || e.disabled,
            onOnChange: u
          }, null, 8, ["modelValue", "label-width", "item-width", "select-option", "placeholder", "clearable", "disabled"])) : e.item.type === "alCascader" ? (V(), D(gt, {
            key: 5,
            style: j(r.itemStyle),
            class: "inlineBlock",
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": c[7] || (c[7] = (h) => e.valGroup[e.item.key] = h),
            level: e.item.level || e.item.level === 0 ? e.item.level : 2,
            disabled: !!e.item.disabled || e.disabled,
            filterable: e.item.filterable !== !1,
            placeholder: e.item.placeholder || f(C)("r.pSelect"),
            "change-on-select": !!e.item.changeOnSelect,
            onOnNameChange: c[8] || (c[8] = (h) => s(h, e.item))
          }, null, 8, ["style", "modelValue", "level", "disabled", "filterable", "placeholder", "change-on-select"])) : e.item.type === "asyncCascader" ? (V(), D(vt, {
            key: 6,
            style: j(r.itemStyle),
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": c[9] || (c[9] = (h) => e.valGroup[e.item.key] = h),
            url: e.item.url || r.mgrUrl + "/web/v1/umc/orgs",
            "option-val": e.item.optionVal || "id",
            "option-label": e.item.optionLabel || "name",
            "option-filter": e.item.optionFilter || null,
            "only-last-val": e.item.onlyLastVal !== !1,
            "only-last-label": e.item.onlyLastLabel !== !1,
            separator: e.item.separator || "/",
            placeholder: e.item.placeholder || f(C)("r.pSelect"),
            filterable: !!e.item.filterable,
            disabled: !!e.item.disabled || e.disabled,
            onOnLabelChange: c[10] || (c[10] = (h) => p(h, e.item))
          }, null, 8, ["style", "modelValue", "url", "option-val", "option-label", "option-filter", "only-last-val", "only-last-label", "separator", "placeholder", "filterable", "disabled"])) : e.item.type === "radio" ? (V(), D(b, {
            key: 7,
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": c[11] || (c[11] = (h) => e.valGroup[e.item.key] = h),
            disabled: !!e.item.disabled || e.disabled,
            onOnChange: c[12] || (c[12] = (h) => d(h, e.item))
          }, {
            default: ee(() => [
              xe(Q(e.item.label), 1)
            ]),
            _: 1
          }, 8, ["modelValue", "disabled"])) : e.item.type === "radioGroup" ? (V(), D(L, {
            key: 8,
            style: j(r.itemStyle),
            onOnChange: c[13] || (c[13] = (h) => a(h, e.item)),
            type: e.item.buttonType ? "button" : null,
            modelValue: r.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[14] || (c[14] = (h) => r.tempKeys[e.item.tempKey] = h)
          }, {
            default: ee(() => [
              (V(!0), F(pe, null, ge(e.item.options, (h) => (V(), D(b, {
                key: "radioItem" + h.val,
                label: h.val,
                border: !!e.item.itemBorder,
                disabled: !!e.item.disabled || e.disabled || h.disabled
              }, {
                default: ee(() => [
                  h.icon && !e.item.buttonType ? (V(), D(_, {
                    key: 0,
                    type: h.icon
                  }, null, 8, ["type"])) : ne("", !0),
                  E("span", null, Q(h.label || h.val), 1)
                ]),
                _: 2
              }, 1032, ["label", "border", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["style", "type", "modelValue"])) : e.item.type === "checkbox" ? (V(), D(P, {
            key: 9,
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": c[15] || (c[15] = (h) => e.valGroup[e.item.key] = h),
            disabled: !!e.item.disabled,
            onOnChange: c[16] || (c[16] = (h) => d(h, e.item))
          }, {
            default: ee(() => [
              xe(Q(e.item.label), 1)
            ]),
            _: 1
          }, 8, ["modelValue", "disabled"])) : e.item.type === "checkboxGroup" ? (V(), D(I, {
            key: 10,
            style: j(r.itemStyle),
            modelValue: r.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[17] || (c[17] = (h) => r.tempKeys[e.item.tempKey] = h),
            onOnChange: c[18] || (c[18] = (h) => a(h, e.item))
          }, {
            default: ee(() => [
              (V(!0), F(pe, null, ge(e.item.options, (h) => (V(), D(P, {
                key: "checkItem" + h.val,
                label: h.val,
                disabled: !!e.item.disabled || e.disabled || h.disabled
              }, {
                default: ee(() => [
                  h.icon ? (V(), D(_, {
                    key: 0,
                    type: h.icon
                  }, null, 8, ["type"])) : ne("", !0),
                  E("span", null, Q(h.label || (h == null ? void 0 : h.val)), 1)
                ]),
                _: 2
              }, 1032, ["label", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["style", "modelValue"])) : e.item.type === "textarea" ? (V(), D(g, {
            key: 11,
            type: "textarea",
            modelValue: r.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[19] || (c[19] = (h) => r.tempKeys[e.item.tempKey] = h),
            autosize: e.item.autosize || { minRows: 2 },
            style: j(r.itemStyle),
            maxlength: e.item.maxLength || null,
            "show-word-limit": !!e.item.showWordLimit,
            placeholder: e.item.placeholder || f(C)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            onOnBlur: c[20] || (c[20] = (h) => d(h, e.item)),
            clearable: e.item.clearable !== !1
          }, null, 8, ["modelValue", "autosize", "style", "maxlength", "show-word-limit", "placeholder", "disabled", "clearable"])) : e.item.type === "upload" ? (V(), D(bt, {
            key: 12,
            style: j(r.itemStyle),
            class: "inlineBlock",
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": c[21] || (c[21] = (h) => e.valGroup[e.item.key] = h),
            url: e.item.url || r.uploadUrl,
            "manual-upload": !!e.item.manualUpload,
            format: e.item.format || [],
            data: e.item.data,
            "max-size": e.item.maxSize || 0,
            "show-img": !!e.item.showImg,
            length: e.item.length || 0,
            disabled: !!e.item.disabled || e.disabled,
            "with-credentials": e.item.withCredentials !== !1,
            onOnFileIdChange: c[22] || (c[22] = (h) => a(h, e.item))
          }, null, 8, ["style", "modelValue", "url", "manual-upload", "format", "data", "max-size", "show-img", "length", "disabled", "with-credentials"])) : e.item.type === "date" ? (V(), D(S, {
            key: 13,
            style: j(r.itemStyle),
            modelValue: r.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[23] || (c[23] = (h) => r.tempKeys[e.item.tempKey] = h),
            type: e.item.dateType,
            disabled: !!e.item.disabled || e.disabled,
            placement: "bottom-end",
            placeholder: e.item.placeholder || f(C)("r.selectDate"),
            options: e.item.dateOptions || null,
            clearable: e.item.clearable !== !1,
            editable: !1,
            transfer: "",
            onOnChange: c[24] || (c[24] = (h) => d(h, e.item))
          }, null, 8, ["style", "modelValue", "type", "disabled", "placeholder", "options", "clearable"])) : e.item.type === "time" ? (V(), D(Z, {
            key: 14,
            style: j(r.itemStyle),
            modelValue: r.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[25] || (c[25] = (h) => r.tempKeys[e.item.tempKey] = h),
            type: e.item.dateType,
            disabled: !!e.item.disabled || e.disabled,
            placement: "bottom-end",
            placeholder: e.item.placeholder || f(C)("r.selectTime"),
            steps: e.item.steps || [],
            clearable: e.item.clearable !== !1,
            editable: !1,
            format: e.item.format || "HH:mm:ss",
            transfer: "",
            onOnChange: c[26] || (c[26] = (h) => d(h, e.item))
          }, null, 8, ["style", "modelValue", "type", "disabled", "placeholder", "steps", "clearable", "format"])) : e.item.type === "monthRange" ? (V(), D(wt, {
            key: 15,
            style: j(r.itemStyle),
            modelValue: r.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[27] || (c[27] = (h) => r.tempKeys[e.item.tempKey] = h),
            disabled: !!e.item.disabled || e.disabled,
            placement: "bottom-end",
            placeholder: e.item.placeholder || f(C)("r.selectDate"),
            options1: e.item.dateOptions1 || null,
            options2: e.item.dateOptions2 || null,
            onOnChange: c[28] || (c[28] = (h) => d(h, e.item))
          }, null, 8, ["style", "modelValue", "disabled", "placeholder", "options1", "options2"])) : e.item.type === "editorPro" ? (V(), D(kt, {
            key: 16,
            class: "inlineBlock",
            style: j(r.itemStyle),
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": c[29] || (c[29] = (h) => e.valGroup[e.item.key] = h),
            placeholder: e.item.placeholder || f(C)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            "toolbar-config": e.item.toolbarConfig || {},
            "editor-config": e.item.editorConfig || {},
            mode: e.item.mode || "simple",
            height: e.item.height || 300,
            onInput: c[30] || (c[30] = (h) => d(h, e.item))
          }, null, 8, ["style", "modelValue", "placeholder", "disabled", "toolbar-config", "editor-config", "mode", "height"])) : e.item.type === "inputMap" ? (V(), D(ht, {
            key: 17,
            modelValue: r.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[31] || (c[31] = (h) => r.tempKeys[e.item.tempKey] = h),
            style: j(r.itemStyle),
            placeholder: e.item.placeholder || f(C)("r.search"),
            disabled: !!e.item.disabled || e.disabled,
            "show-map": e.item.showMap !== !1,
            height: e.item.mapHeight || "250px",
            onOnChange: c[32] || (c[32] = (h) => d(h, e.item))
          }, null, 8, ["modelValue", "style", "placeholder", "disabled", "show-map", "height"])) : e.item.type === "custom" ? (V(), F("div", {
            key: 18,
            class: "inlineBlock",
            style: j(r.itemStyle)
          }, [
            Ie(r.$slots, e.item.slotName, {
              valGroup: e.valGroup
            })
          ], 4)) : ne("", !0),
          e.item.info ? (V(), F("div", Kn, Q(e.item.info), 1)) : ne("", !0),
          e.item.title ? (V(), F("div", Pn, Q(e.item.title), 1)) : ne("", !0)
        ]),
        _: 3
      }, 8, ["label", "prop", "class"]);
    };
  }
}), Fn = /* @__PURE__ */ E("input", { type: "text" }, null, -1), Rn = { class: "inlineBlock" }, En = /* @__PURE__ */ se({
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
    var Kl, Pl;
    const n = t, d = X(null), a = X({}), u = X([]), s = X({});
    let p = [];
    const r = ((Kl = window == null ? void 0 : window.g) == null ? void 0 : Kl.mgrURL) ?? null;
    let c = [], m = [];
    const g = X(!1), A = X(Math.random() * 1e8 + 1e3), k = (Pl = window == null ? void 0 : window.g) != null && Pl.mgrURL ? window.g.mgrURL + "/web/v1/fsc/file" : "/file";
    let b = !1;
    const _ = K(() => Array.isArray(n.formData.length ? n.formData[0] : !1)), L = K(
      () => n.inline ? {
        width: n.itemWidth + n.labelWidth + "px"
      } : {}
    ), P = K(
      () => n.inline ? {
        width: "100%"
      } : { width: n.contentWidth }
    ), I = K(() => {
      let o = ie(n.formRules);
      for (let l in o)
        if (o.hasOwnProperty(l))
          if (Array.isArray(o[l]))
            for (let v of o[l])
              v.message || v.validator || (v.message = C("r.required"));
          else
            O(o[l]) === "Object" && (o[l].message || o[l].validator || (o[l].message = C("r.required")));
      return o;
    }), S = K(() => {
      let o = [];
      if (_.value)
        for (let l of u.value)
          h(l, o);
      else
        h(u.value, o);
      return o.concat(c, m);
    }), Z = K(() => {
      let o = [];
      if (_.value)
        for (let l of u.value)
          we(l, o);
      else
        we(u.value, o);
      return o;
    });
    function R(o) {
      return o.filter((l) => l.slotName);
    }
    function h(o, l) {
      for (let v of o)
        if (v.showing === !0 && v.key && v.type !== "selectInput" && (l.push(v.key), v.key2 && l.push(v.key2), v.collectLabel)) {
          if (!Array.isArray(v.collectLabel) && v.collectLabel.key)
            l.push(v.collectLabel.key);
          else if (Array.isArray(v.collectLabel))
            for (let y of v.collectLabel)
              y.key && l.push(y.key);
        }
    }
    function we(o, l) {
      for (let v of o)
        v.showing === !0 && v.key && v.type !== "selectInput" && l.push(v.key);
    }
    function w() {
      return new Promise((o) => {
        J(), G().then(() => {
          e("on-reset"), o(!0);
        });
      });
    }
    function U() {
      return new Promise((o) => {
        for (let l of p)
          l();
        p = [], s.value = {}, B(), Ne(), G().then(() => {
          e("on-re-render"), o(!0);
        });
      });
    }
    function G() {
      return new Promise((o) => {
        A.value = Math.floor(Math.random() * 1e8 + 1e3), dl(function() {
          o(!0);
        });
      });
    }
    function J() {
      let o = le();
      for (let l in a.value)
        if (a.value.hasOwnProperty(l))
          if (ue(o[l]))
            a.value[l] = o[l];
          else if (Array.isArray(a.value[l]))
            a.value[l] = [];
          else if (O(a.value[l]) === "Boolean")
            a.value[l] = !1;
          else {
            const v = De(n.formData, (y) => y.key === l);
            v && (v.type === "editor" || v.type === "editorPro") ? a.value[l] = "" : a.value[l] = null;
          }
      re(o);
    }
    function re(o) {
      for (let l in s.value)
        s.value.hasOwnProperty(l) && (ue(o[l]) ? s.value[l] = o[l] : Array.isArray(s.value[l]) ? s.value[l] = [] : O(s.value[l]) === "Object" && s.value[l].hasOwnProperty("key") && s.value[l].hasOwnProperty("val") ? s.value[l].val = null : s.value[l] = null);
    }
    function $(o) {
      let l = le();
      ue(l[o]) ? s.value[o] = l[o] : Array.isArray(s.value[o]) ? s.value[o] = [] : s.value[o] = null;
    }
    function le() {
      let o = {};
      if (_.value)
        for (let l of u.value)
          te(l, o);
      else
        te(u.value, o);
      return o;
    }
    function te(o, l) {
      for (let v of o)
        v.tempKey && ue(v.defaultVal) && Re(v, l), v.key && ue(v.defaultVal) && (l[v.key] = v.defaultVal), v.key2 && ue(v.defaultVal2) && (l[v.key2] = v.defaultVal2);
    }
    function ve(o) {
      if (o.show) {
        if (O(o.show) === "Object")
          return Ue(o, Me(o.show));
        if (Array.isArray(o.show))
          if (o.showOr) {
            for (let l of o.show)
              if (Me(l) === !0)
                return Ue(o, !0);
            return Ue(o, !1);
          } else {
            for (let l of o.show)
              if (Me(l) === !1)
                return Ue(o, !1);
            return Ue(o, !0);
          }
        else if (O(o.show) === "Function")
          return Ue(o, o.show(a.value));
      } else
        o.showing || (o.showing = !0);
      return !0;
    }
    function Me(o) {
      if (o.reg && typeof o.reg.test == "function")
        return o.reg.test(a.value[o.key]);
      if (Array.isArray(o.val)) {
        for (let l of o.val) {
          if ((a.value[o.key] || a.value[o.key] === 0 || a.value[o.key] === !1) && l === ".")
            return !0;
          if (a.value[o.key] === l)
            return !0;
        }
        return !1;
      } else
        return !1;
    }
    function Ue(o, l) {
      return !o.showing && l && o.key ? (o.showing = l, o.defaultVal !== void 0 && (o.tempKey ? (s.value[o.tempKey] === null || s.value[o.tempKey] === void 0 || (O(s.value[o.tempKey]) === "Object" || Array.isArray(s.value[o.tempKey])) && Be(s.value[o.tempKey])) && Re(o, s.value) : (a.value[o.key] === null || a.value[o.key] === void 0) && (a.value[o.key] = o.defaultVal), o.key2 && o.deafultVal2 !== void 0 && (a.value[o.key2] === null || a.value[o.key2] === void 0) && o.type !== "inputMap" && (a.value[o.key2] = o.defaultVal2)), o.tempKey && ae(s.value[o.tempKey], o)) : o.showing = l, l;
    }
    function Re(o, l) {
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
    function Ne() {
      let o = ie(n.formData);
      if (_.value)
        for (let l of o)
          Ke(l);
      else
        Ke(o);
      u.value = o;
    }
    function Ke(o) {
      for (let l of o)
        switch (l.type) {
          case "selectInput":
            const v = "selectInput" + Math.floor(Math.random() * 1e8);
            l.tempKey = v, s.value[v] = {
              key: l.key || null,
              val: l.defaultVal || null
            }, p.push(
              ye(
                () => s.value[v],
                (T) => {
                  ae(T, l);
                },
                { immediate: !0 }
              )
            );
            break;
          case "inputMap":
            const y = "inputMap" + Math.floor(Math.random() * 1e8);
            l.key && (l.tempKey = y, l.key3 ? s.value[y] = l.defaultVal !== void 0 && l.defaultVal2 !== void 0 ? {
              lng: l.defaultVal,
              lat: l.defaultVal2,
              name: l.defaultVal3 || ""
            } : {
              lng: null,
              lat: null,
              name: null
            } : s.value[y] = l.defaultVal !== void 0 && l.defaultVal2 !== void 0 ? {
              lng: l.defaultVal,
              lat: l.defaultVal2
            } : {
              lng: null,
              lat: null
            }, p.push(
              ye(
                () => s.value[y],
                (T) => {
                  ae(T, l);
                },
                { immediate: !0 }
              )
            ));
            break;
          case "input":
          case "inputNumber":
          case "textarea":
            const H = "inputT" + Math.floor(Math.random() * 1e8);
            l.key && (l.tempKey = H, s.value[H] = l.defaultVal !== void 0 ? l.defaultVal : null, p.push(
              ye(
                () => s.value[H],
                (T) => {
                  ae(T, l);
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
                  let T = !0;
                  for (let Y of l.changeOption)
                    if (!Y.valKey || !Y.key) {
                      T = !1;
                      break;
                    }
                  T ? p.push(
                    ye(
                      () => {
                        let Y = "";
                        if (Array.isArray(l.changeOption))
                          for (let ce of l.changeOption) {
                            let Ae = a.value[ce.valKey];
                            if (Ae || Ae === 0 || Ae === !1)
                              Y += "&" + ce.key + "=" + Ae;
                            else if (!ce.notRequired)
                              return !1;
                          }
                        return Y;
                      },
                      (Y) => {
                        let ce = ie(s.value[l.tempKey]);
                        if (s.value[l.tempKey] = null, Y && l.optionUrl) {
                          let Ae = l.optionUrl.indexOf("?") !== -1 ? l.optionUrl : l.optionUrl + "?";
                          Se((Ae + Y).replace(/\?&/, "?"), l, ce);
                        } else
                          l.options = [], l.localOption && (l.options = [...l.localOption]), ue(ce) && x(ce, l);
                      },
                      {
                        immediate: !0
                      }
                    )
                  ) : (l.options = [], l.localOption && (l.options = [...l.localOption]));
                } else
                  typeof l.changeOption == "object" ? l.changeOption.valKey && l.changeOption.key && p.push(
                    ye(
                      () => typeof l.changeOption == "object" && !Array.isArray(l.changeOption) ? a.value[l.changeOption.valKey] : !1,
                      (T) => {
                        let Y = ie(s.value[l.tempKey]);
                        if (s.value[l.tempKey] = null, (T || T === 0 || T === !1) && l.optionUrl && typeof l.changeOption == "object" && !Array.isArray(l.changeOption)) {
                          let ce = l.optionUrl.indexOf("?") !== -1 ? l.optionUrl : l.optionUrl + "?";
                          Se((ce + "&" + l.changeOption.key + "=" + T).replace(/\?&/, "?"), l, Y);
                        } else
                          l.options = [], l.localOption && (l.options = [...l.localOption]), ue(Y) && x(Y, l);
                      },
                      { immediate: !0 }
                    )
                  ) : O(l.changeOption) === "Boolean" && p.push(
                    ye(
                      () => De(n.formData, (T) => T.key === l.key).optionUrl,
                      (T) => {
                        let Y = ie(s.value[l.tempKey]);
                        s.value[l.tempKey] = null, T ? Se(T, l, Y) : (l.options = [], l.localOption && (l.options = [...l.localOption]), ue(Y) && x(Y, l));
                      },
                      {
                        immediate: !0
                      }
                    )
                  );
              else
                l.optionUrl && Se(l.optionUrl, l);
            else
              O(l.borrowOption) === "String" && (l.options = De(u.value, (T) => T.key === l.borrowOption).options);
            const M = "opEle" + Math.floor(Math.random() * 1e8);
            l.key && (l.tempKey = M, l.type === "select" && l.multiple || l.type === "checkboxGroup" ? s.value[M] = l.defaultVal !== void 0 ? l.defaultVal : [] : l.booleanVal ? s.value[M] = l.defaultVal !== void 0 ? l.defaultVal ? 1 : 0 : null : s.value[M] = l.defaultVal !== void 0 ? l.defaultVal : null, p.push(
              ye(
                () => s.value[M],
                (T) => {
                  ae(T, l);
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
            const N = "date" + Math.floor(Math.random() * 1e8);
            l.tempKey = N, l.dateType === "date" || l.dateType === "datetime" || l.dateType === "time" || l.dateType === "year" || l.dateType === "month" ? s.value[N] = l.defaultVal || null : (l.dateType === "daterange" || l.dateType === "datetimerange" || l.dateType === "timerange" || l.type === "monthRange") && (s.value[N] = l.defaultVal && l.defaultVal2 && [l.defaultVal, l.defaultVal2] || []), p.push(
              ye(
                () => s.value[N],
                (T) => {
                  ae(T, l);
                }
              )
            );
            break;
        }
    }
    function Se(o, l, v) {
      Te.get(o).then((y) => {
        if (!l.options)
          return;
        let H = y && y.data && y.data.records || y && y.data || y || [];
        Array.isArray(H) ? (l.optionFilter && O(l.optionFilter) === "Function" && (H = l.optionFilter(H)), l.optionLabel && l.optionVal ? (l.options.length = 0, l.options.push(
          ...H.map((M) => {
            let N = {};
            if (Array.isArray(l.optionLabel)) {
              let T = "";
              l.optionLabel.forEach((Y, ce) => {
                let Ae = String(M[Y]);
                ce === 1 ? T += "（" + Ae : ce > 1 ? T += "、" + Ae : T += Ae;
              }), N = {
                label: T + "）",
                val: l.optionVal && M[l.optionVal]
              };
            } else
              N = {
                label: l.optionLabel && M[l.optionLabel],
                val: l.optionVal && M[l.optionVal]
              };
            if (l.collectLabel)
              if (Array.isArray(l.collectLabel))
                for (let T of l.collectLabel)
                  T.valKey && T.valKey !== "label" && (N[T.valKey] = M[T.valKey]);
              else
                l.collectLabel.valKey && l.collectLabel.valKey !== "label" && (N[l.collectLabel.valKey] = M[l.collectLabel.valKey]);
            if (N.val !== null && N.val !== void 0)
              return N;
          })
        )) : (l.options.length = 0, l.options.push(...H))) : l.options.length = 0, l.localOption && l.options.unshift(...l.localOption), ue(v) && x(v, l), l.disableOptionByOthers && (O(l.disableOptionByOthers) === "String" ? p.push(
          ye(
            () => a.value[l.disableOptionByOthers],
            (M) => {
              if ($(l.tempKey), !!l.options) {
                for (let N of l.options)
                  N.disabled && (N.disabled = !1);
                if (M || M === 0 || M === !1)
                  for (let N of l.options)
                    N.val === M && (N.disabled = !0);
              }
            },
            {
              immediate: !0
            }
          )
        ) : Array.isArray(l.disableOptionByOthers) && p.push(
          ye(
            () => l.disableOptionByOthers.filter((M) => M).map((M) => a.value[M]),
            (M) => {
              if ($(l.tempKey), !!l.options) {
                for (let N of l.options)
                  N.disabled && (N.disabled = !1);
                if (M) {
                  for (let N of l.options)
                    for (let T = 0; T < M.length; T++)
                      if (N.val === M[T]) {
                        N.disabled = !0, M.splice(T, 1);
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
      }).catch((y) => {
        console.warn("拉取选项出错");
      });
    }
    function x(o, l) {
      Array.isArray(l.options) && $t(l.options, { val: o }) !== -1 && (s.value[l.tempKey] = o);
    }
    function B() {
      if (a.value = {}, _.value)
        for (let o of n.formData)
          fe(o);
      else
        fe(n.formData);
    }
    function fe(o) {
      for (let l of o)
        l.key && (l.type === "checkboxGroup" || l.type === "select" && l.multiple ? a.value[l.key] = l.defaultVal !== void 0 && l.show === void 0 ? l.defaultVal : [] : l.type === "editor" || l.type === "editorPro" ? a.value[l.key] = l.defaultVal !== void 0 && l.show === void 0 ? l.defaultVal : "" : (a.value[l.key] = l.defaultVal !== void 0 && l.show === void 0 ? l.defaultVal : null, l.key2 && (a.value[l.key2] = l.defaultVal2 !== void 0 && l.show === void 0 ? l.defaultVal2 : null)));
    }
    function ae(o, l) {
      if (l.showing)
        switch (l.type) {
          case "selectInput":
            o && (o.beforeKey && delete a.value[o.beforeKey], a.value[o.key] = o.val);
            break;
          case "inputMap":
            if (!l.key || !l.key2)
              return;
            o ? (a.value[l.key] = o.lng, a.value[l.key2] = o.lat, l.key3 && (a.value[l.key3] = o.name)) : (a.value[l.key] = null, a.value[l.key2] = null, l.key3 && (a.value[l.key3] = null));
            break;
          case "input":
          case "inputNumber":
          case "textarea":
            if (!l.key)
              return;
            if (o || o === 0) {
              let H = /^-?\d+(.\d+)?$/;
              l.numberVal && H.test(o) ? a.value[l.key] = Number(o) : a.value[l.key] = o;
            } else
              a.value[l.key] = null;
            break;
          case "select":
          case "radioGroup":
          case "checkboxGroup":
            if (!l.key)
              return;
            if (l.booleanVal && !l.multiple ? a.value[l.key] = o === void 0 || o === "" || o === null ? null : !!o : l.multiple || l.type === "checkboxGroup" ? a.value[l.key] = Object.assign([], o) : a.value[l.key] = o, l.collectLabel) {
              const H = de(l, o);
              if (Array.isArray(l.collectLabel)) {
                for (let M of l.collectLabel)
                  if (M.key && M.valKey) {
                    const N = W(M.key);
                    let T = null;
                    Array.isArray(H) ? (T = H.map((ce) => ce[M.valKey]), a.value[M.key] = T, N && (s.value[N] = T)) : (H && ue(H[M.valKey]) && (T = H[M.valKey]), a.value[M.key] = T, N && (s.value[N] = T));
                    let Y = De(u.value, (ce) => ce.key === M.key);
                    Y && Y.tempKey && (s.value[Y.tempKey] = a.value[M.key]);
                  }
              } else if (typeof l.collectLabel == "object" && l.collectLabel.key && l.collectLabel.valKey) {
                const M = W(l.collectLabel.key);
                let N = null;
                Array.isArray(H) ? (N = H.map(
                  (Y) => l.collectLabel && !Array.isArray(l.collectLabel) && Y[l.collectLabel.valKey]
                ), a.value[l.collectLabel.key] = N, M && (s.value[M] = N)) : (H && ue(H[l.collectLabel.valKey]) && (N = H[l.collectLabel.valKey]), a.value[l.collectLabel.key] = N, M && (s.value[M] = N));
                let T = De(
                  u.value,
                  (Y) => l.collectLabel && !Array.isArray(l.collectLabel) && Y.key === l.collectLabel.key || !1
                );
                T && T.tempKey && (s.value[T.tempKey] = a.value[l.collectLabel.key]);
              }
            }
            break;
          case "date":
          case "time":
          case "monthRange":
            if (!l.key)
              return;
            let v = l.dateType;
            const y = {
              date: "YYYY-MM-DD",
              daterange: "YYYY-MM-DD",
              datetime: "YYYY-MM-DD HH:mm:ss",
              datetimerange: "YYYY-MM-DD HH:mm:ss",
              year: "YYYY",
              month: "MM"
            };
            if (v === "date" || v === "datetime" || v === "time" || v === "year" || v === "month")
              o ? (v === "time" ? a.value[l.key] = o : a.value[l.key] = Qe(o).format(typeof l.format == "string" ? l.format : y[v]), v === "date" && l.addTime && (a.value[l.key] += " 00:00:00")) : a.value[l.key] = null;
            else if (l.type === "monthRange" || v === "daterange" || v === "datetimerange" || v === "timerange") {
              if (!l.key2)
                return;
              o && o[0] && o[1] ? (v === "timerange" ? (a.value[l.key] = o[0], a.value[l.key2] = o[1]) : l.type === "monthRange" ? (a.value[l.key] = typeof l.format == "string" && Qe(o[0]).format(l.format) || o[0], a.value[l.key2] = typeof l.format == "string" && l.format && Qe(o[1]).format(l.format) || o[1]) : (a.value[l.key] = Qe(o[0]).format(l.format || v && y[v]), a.value[l.key2] = Qe(o[1]).format(l.format || v && y[v])), v === "daterange" && l.addTime && (a.value[l.key] += " 00:00:00", a.value[l.key2] += " 23:59:59")) : (a.value[l.key] = null, a.value[l.key2] = null);
            }
            break;
        }
    }
    function de(o, l) {
      if (o.options)
        if (o.multiple || o.type === "checkboxGroup") {
          if (l) {
            let v = [];
            for (let y of o.options)
              l.indexOf(y.val) !== -1 && v.push(y);
            return v;
          }
          return !1;
        } else {
          if (l || l === 0 || l === !1) {
            for (let v of o.options)
              if (v.val === l)
                return v;
          }
          return !1;
        }
    }
    function W(o) {
      if (_.value) {
        for (let l of u.value) {
          const v = qe(l, o);
          if (v)
            return v;
        }
        return !1;
      }
      return qe(u.value, o);
    }
    function qe(o, l) {
      for (let v of o)
        if (v.key === l)
          return v.tempKey;
      return !1;
    }
    function tl(o, l) {
      let v = {};
      for (let y in a.value)
        a.value.hasOwnProperty(y) && o[y] !== void 0 && (v[y] = o[y], delete o[y]);
      Je(v, l);
      for (let y in o)
        o.hasOwnProperty(y) && (m.indexOf(y) < 0 && m.push(y), a.value[y] = o[y]);
    }
    function al(o) {
      let l = ie(o);
      if (_.value) {
        let v = [];
        for (let y of n.formData)
          v.push(...Ye(y, l));
        return v;
      }
      return Ye(n.formData, l);
    }
    function Ye(o, l) {
      return o.filter((v) => {
        for (let y of Object.keys(l))
          if (v.key === y && Z.value.indexOf(y) > -1 && !(l[y] === null || (Array.isArray(l[y]) || O(l[y]) === "Object") && Be(l[y])))
            return delete l[y], !0;
        return !1;
      }).map((v) => v.key);
    }
    function Je(o, l = !1) {
      let v = ie(o);
      nl(o, l);
      for (let y in a.value)
        if (a.value.hasOwnProperty(y) && o[y] !== void 0 && o[y] !== "--") {
          if (Array.isArray(o[y]))
            o[y] = o[y].filter((H) => H !== "--");
          else if (O(o[y]) === "Object")
            for (let H in o[y])
              o[y].hasOwnProperty(H) && o[y][H] === "--" && (o[y][H] = null);
          a.value[y] = o[y];
        } else
          l || (a.value[y] = Array.isArray(a.value[y]) ? [] : null);
      xt(al(v));
    }
    function nl(o, l = !1) {
      if (_.value)
        for (let v of u.value)
          Xe(v, o, l);
      else
        Xe(u.value, o, l);
    }
    function Xe(o, l, v = !1) {
      for (let y of o)
        if (y.key && (v && (l[y.key] !== void 0 || y.key2 && l[y.key2] !== void 0) || !v) && y.tempKey)
          switch (y.type) {
            case "inputMap":
              if (!y.key2)
                continue;
              O(l[y.key]) === "Number" && O(l[y.key2] === "Number") ? y.key3 ? s.value[y.tempKey] = {
                lng: l[y.key],
                lat: l[y.key2],
                name: l[y.key3]
              } : s.value[y.tempKey] = {
                lng: l[y.key],
                lat: l[y.key2]
              } : y.key3 ? s.value[y.tempKey] = {
                lng: null,
                lat: null,
                name: null
              } : s.value[y.tempKey] = {
                lng: null,
                lat: null
              };
              break;
            case "input":
            case "inputNumber":
            case "textarea":
              l[y.key] && l[y.key] !== "--" || l[y.key] === 0 ? s.value[y.tempKey] = l[y.key] : s.value[y.tempKey] = null;
              break;
            case "select":
            case "radioGroup":
            case "checkboxGroup":
              l[y.key] && l[y.key] !== "--" || l[y.key] === 0 || l[y.key] === !1 ? y.multiple || y.type === "checkboxGroup" ? s.value[y.tempKey] = [...l[y.key]] : y.booleanVal ? s.value[y.tempKey] = l[y.key] ? 1 : 0 : s.value[y.tempKey] = l[y.key] : y.multiple || y.type === "checkboxGroup" ? s.value[y.tempKey] = [] : s.value[y.tempKey] = null;
              break;
            case "date":
            case "time":
              if (y.dateType === "date" || y.dateType === "datetime" || y.dateType === "year" || y.dateType === "month" || y.dateType === "time")
                s.value[y.tempKey] = l[y.key] && l[y.key] !== "--" ? l[y.key] : null;
              else if (y.dateType === "daterange" || y.dateType === "datetimerange" || y.dateType === "timerange") {
                if (!y.key2)
                  continue;
                s.value[y.tempKey] = l[y.key] && l[y.key] !== "--" && l[y.key2] && l[y.key2] !== "--" && [l[y.key], l[y.key2]] || [];
              }
              break;
          }
    }
    function ol(o) {
      if (Array.isArray(o))
        for (let l of o)
          Bl(l);
      else
        O(o) === "Object" && Bl(o);
    }
    function Bl(o) {
      const { index: l, indexB: v, key: y, val: H } = o;
      if (typeof l == "number")
        if (Array.isArray(u.value[l])) {
          if (typeof v == "number")
            if (y && (H || H !== void 0))
              u.value[l][v][y] = H;
            else
              for (let M of Object.keys(o))
                M !== "index" && y !== "indexB" && (u.value[l][v][M] = o[M]);
        } else if (y && (H || H !== void 0))
          u.value[l][y] = H;
        else
          for (let M of Object.keys(o))
            M !== "index" && (u.value[l][M] = o[M]);
    }
    function Ol({ label: o, root: l }) {
      l.key2 && (a.value[l.key2] = o), $e({
        e: o,
        root: l
      });
    }
    function Ml(o) {
      o.beforeKey && zt(c, (l) => l === o.beforeKey), o.key && (c.indexOf(o.key) === -1 && c.push(o.key), $e({
        e: null,
        root: o
      }));
    }
    function Tl({ name: o, root: l }) {
      l.key2 && (a.value[l.key2] = o), $e({
        e: o,
        root: l
      });
    }
    function Ll({ e: o, root: l }) {
      $e({
        e: o,
        root: l
      }), dl(function() {
        var v;
        (v = d.value) == null || v.validateField(l.key);
      });
    }
    function $e({ e: o, root: l }) {
      ke(() => {
        let v = {
          event: o
        };
        if (l.key && (v[l.key] = a.value[l.key]), l.key2 && (v[l.key2] = a.value[l.key2]), Array.isArray(l.collectLabel))
          for (let y of l.collectLabel)
            v[y.key] = a.value[y.key];
        else
          l.collectLabel && l.collectLabel.key && (v[l.collectLabel.key] = a.value[l.collectLabel.key]);
        e("on-item-change", v);
      }, 500);
    }
    function Ul() {
      let o = {};
      for (let l of S.value)
        o[l] = a.value[l];
      return n.trim && (o = yl(o)), o;
    }
    function _t() {
      var o;
      (o = d.value) == null || o.validate();
    }
    function It(o) {
      ke(() => {
        var l;
        (l = d.value) == null || l.validateField(o, () => {
        });
      }, 10);
    }
    function xt(o) {
      ke(() => {
        var l;
        if (Array.isArray(o))
          for (let v of o)
            (l = d.value) == null || l.validateField(v, () => {
            });
      }, 10);
    }
    function St(o) {
      o !== void 0 && (g.value = !!o);
    }
    function hl() {
      var o;
      n.disabled || (o = d.value) == null || o.validate((l) => {
        b || (b = !0, l && (g.value = !0, e("on-submit", Ul())), ke(() => {
          b = !1;
        }, 2e3));
      });
    }
    return We(() => {
      B(), Ne();
    }), i({
      resetForm: w,
      refreshFormDom: G,
      reRenderForm: U,
      setItemToValGroup: tl,
      updateValGroup: Je,
      updateFormDataT: ol,
      validate: _t,
      reValidate: It,
      changeLoading: St,
      getValGroup: Ul,
      submit: hl
    }), (o, l) => {
      const v = z("FormItem"), y = z("Button"), H = z("Form");
      return V(), D(H, {
        ref_key: "formGroupXRef",
        ref: d,
        model: f(a),
        rules: f(I),
        "label-width": n.labelWidth,
        inline: n.inline,
        "show-message": n.showMessage,
        class: "formXN",
        key: f(A)
      }, {
        default: ee(() => [
          q(v, { style: { display: "none" } }, {
            default: ee(() => [
              Fn
            ]),
            _: 1
          }),
          f(_) ? (V(!0), F(pe, { key: 0 }, ge(f(u), (M, N) => (V(), F("div", {
            class: he([o.teamClass, "formTeamBox" + N]),
            key: "formTeamBox" + N
          }, [
            (V(!0), F(pe, null, ge(M, (T, Y) => (V(), F(pe, {
              key: "formItem" + Y
            }, [
              ve(T) ? (V(), D(Hl, {
                key: 0,
                item: T,
                style: j(f(L)),
                "item-style": f(P),
                "val-group": f(a),
                "temp-keys": f(s),
                inline: n.inline,
                disabled: n.disabled,
                "label-width": n.labelWidth,
                "item-width": n.itemWidth,
                "mgr-url": f(r),
                "upload-url": f(k),
                onItemChange: $e,
                onReValidate: Ll,
                onClearTempKeyItem: $,
                onSelectInputChange: Ml,
                onAlNameChange: Tl,
                onAsyncLabelChange: Ol
              }, Fl({ _: 2 }, [
                ge(R(M), (ce) => ({
                  name: ce.slotName,
                  fn: ee((Ae) => [
                    Ie(o.$slots, ce.slotName, {
                      valGroup: Ae.valGroup
                    })
                  ])
                }))
              ]), 1032, ["item", "style", "item-style", "val-group", "temp-keys", "inline", "disabled", "label-width", "item-width", "mgr-url", "upload-url"])) : ne("", !0)
            ], 64))), 128))
          ], 2))), 128)) : ne("", !0),
          (V(!0), F(pe, null, ge(f(u), (M, N) => (V(), F(pe, {
            key: "formItem" + N
          }, [
            !f(_) && ve(M) ? (V(), D(Hl, {
              key: 0,
              item: M,
              style: j(f(L)),
              "item-style": f(P),
              "val-group": f(a),
              "temp-keys": f(s),
              inline: n.inline,
              disabled: n.disabled,
              "label-width": n.labelWidth,
              "item-width": n.itemWidth,
              "mgr-url": f(r),
              "upload-url": f(k),
              onItemChange: $e,
              onReValidate: Ll,
              onClearTempKeyItem: $,
              onSelectInputChange: Ml,
              onAlNameChange: Tl,
              onAsyncLabelChange: Ol
            }, Fl({ _: 2 }, [
              ge(R(o.formData), (T) => ({
                name: T.slotName,
                fn: ee((Y) => [
                  Ie(o.$slots, T.slotName, {
                    valGroup: Y.valGroup
                  })
                ])
              }))
            ]), 1032, ["item", "style", "item-style", "val-group", "temp-keys", "inline", "disabled", "label-width", "item-width", "mgr-url", "upload-url"])) : ne("", !0)
          ], 64))), 128)),
          n.showLongOkBt ? (V(), D(v, { key: 1 }, {
            default: ee(() => [
              q(y, {
                onClick: hl,
                style: j(f(P)),
                type: "primary",
                loading: n.btnLoading && f(g),
                disabled: n.disabled
              }, {
                default: ee(() => [
                  xe(Q(n.longOkBtTxt || f(C)("r.confirm")), 1)
                ]),
                _: 1
              }, 8, ["style", "loading", "disabled"])
            ]),
            _: 1
          })) : ne("", !0),
          E("div", Rn, [
            n.showInlineOkBt ? (V(), D(y, {
              key: 0,
              type: "primary",
              class: he({ inlineFormBtXN: n.inline, okBtnXN: !0 }),
              onClick: hl,
              loading: n.btnLoading && f(g),
              disabled: n.disabled
            }, {
              default: ee(() => [
                xe(Q(n.inlineOkBtTxt || f(C)("r.confirm")), 1)
              ]),
              _: 1
            }, 8, ["class", "loading", "disabled"])) : ne("", !0),
            n.showInlineClearBt ? (V(), D(y, {
              key: 1,
              onClick: w,
              class: he({ inlineFormBtXN: n.inline }),
              type: "dashed"
            }, {
              default: ee(() => [
                xe(Q(n.inlineClearBtTxt || f(C)("r.clear")), 1)
              ]),
              _: 1
            }, 8, ["class"])) : ne("", !0)
          ])
        ]),
        _: 3
      }, 8, ["model", "rules", "label-width", "inline", "show-message"]);
    };
  }
}), Gl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AlCascaderMC: gt,
  AsyncCascader: vt,
  BtTablePage: rn,
  EditorPro: kt,
  FormR: En,
  FullPop: da,
  HeaderBt: Ql,
  Hello: pa,
  IconTxtBtn: fa,
  InputMap: ht,
  MonthRange: wt,
  Page404: ga,
  SelectInput: mt,
  ShowHidePanel: Ha,
  ShowHidePanelB: ja,
  SideMenu: Ea,
  TableIconBtn: $a,
  TableSearch: qa,
  TableSetting: Xa,
  UploadGroup: bt
}, Symbol.toStringTag, { value: "Module" }));
function Vt(t) {
  const i = (...a) => Le.apply(this, a), e = i("r.closePreview"), n = i("r.fullImg");
  let d = "previewImg" + Math.floor(Math.random() * 1e7);
  Fe.info({
    closable: !1,
    "transition-names": ["linear", "fade"],
    render: (a) => oe(
      "div",
      {
        class: "previewModal",
        id: d
      },
      [
        oe(
          "div",
          {
            class: "previewModalInner"
          },
          [
            oe("img", {
              src: t,
              alt: n
            }),
            oe(Wt, {
              type: "md-close",
              size: 20,
              title: e,
              class: "previewModalDelete",
              onClick() {
                Fe.remove();
              }
            })
          ]
        )
      ]
    )
  }), ke(() => {
    var s, p, r, c, m, g;
    const a = (c = (r = (p = (s = document.getElementById(d)) == null ? void 0 : s.parentElement) == null ? void 0 : p.parentElement) == null ? void 0 : r.parentElement) == null ? void 0 : c.parentElement, u = (g = (m = document.getElementById(d)) == null ? void 0 : m.parentElement) == null ? void 0 : g.nextSibling;
    a && (a.style.height = "0"), a && (a.style.padding = "0"), u && (u.style.display = "none");
  }, 10);
}
let el = !1;
function At({
  height: t,
  width: i = 416,
  title: e,
  content: n,
  onOk: d,
  onCancel: a,
  okText: u,
  cancelText: s,
  noWarnIcon: p,
  footerAlign: r,
  cancelBt: c = !0
}) {
  const m = (...b) => Le.apply(this, b);
  let A = (t && Number(t) - 90 > 100 ? Number(t) - 90 + "px" : 0) || "100px", k = O(n) === "String";
  Fe.warning({
    width: i,
    footerHide: !0,
    render: () => oe(
      "div",
      {
        class: "customMessageBox",
        style: {
          height: A
        }
      },
      [
        oe(
          "div",
          {
            class: "containerN"
          },
          [
            oe(
              "div",
              {
                class: "titleN"
              },
              [
                oe("span", e || m("r.info.title")),
                oe(
                  vl,
                  {
                    class: "fr closeN",
                    type: "text",
                    onClick() {
                      el || Fe.remove();
                    }
                  },
                  () => oe("i", {
                    class: "ivu-icon ivu-icon-ios-close",
                    style: {
                      fontSize: "30px"
                    }
                  })
                )
              ]
            ),
            oe(
              "div",
              {
                class: "contentN",
                style: {
                  textAlign: k ? "center" : "left"
                }
              },
              [
                oe("i", {
                  class: k && !p ? "ivu-icon ivu-icon-ios-alert-outline" : "hide",
                  style: {
                    fontSize: "60px",
                    color: "#f8bb86"
                  }
                }),
                oe("div", { class: "msgBoxConO" }, n || m("r.info.text"))
              ]
            ),
            oe(
              "div",
              {
                class: "footerN",
                style: {
                  textAlign: r || "center"
                }
              },
              [
                oe(
                  vl,
                  {
                    class: "okBtN",
                    onClick(b) {
                      var _;
                      if (d && typeof d == "function") {
                        const L = d();
                        if (L && O(L) === "Promise") {
                          el = !0;
                          const P = b && (b.currentTarget || b.target);
                          P && (P.classList.add("ivu-btn-loading"), P.nextSibling.setAttribute("disabled", "disabled"), ((_ = P.parentElement) == null ? void 0 : _.parentElement.querySelector(".titleN .closeN")).classList.add("disabled")), Promise.resolve(L).then(() => {
                            el = !1, Fe.remove();
                          }).catch(() => {
                            el = !1, Fe.remove();
                          });
                        } else
                          Fe.remove();
                      }
                    }
                  },
                  () => [
                    oe("i", {
                      class: "ivu-load-loop ivu-icon ivu-icon-ios-loading"
                    }),
                    oe("span", u || m("r.confirm"))
                  ]
                ),
                oe(
                  vl,
                  {
                    class: ["cancelBtN", !c && "hide"],
                    onClick() {
                      el || (Fe.remove(), O(a) === "Function" && a && a());
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
function Ct(t, i, e, n) {
  const d = (...a) => Le.apply(this, a);
  Ce.call(this, {
    title: t || d("r.info.title"),
    text: i || d("r.info.text"),
    icon: e || "warning",
    onOk: n,
    buttons: [d("r.cancel")]
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
      this.title = Le("r.preview"), this.iconSvg = '<svg t="1656644788547" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12356" width="256" height="256"><path d="M512 1024H135.4C60.7 1024 0 963.3 0 888.6V135.4C0 60.7 60.7 0 135.4 0h753.2C963.3 0 1024 60.7 1024 135.4V512c0 24.9-20.1 45-45 45s-45-20.1-45-45V135.4c0-25-20.4-45.4-45.4-45.4H135.4c-25 0-45.4 20.4-45.4 45.4v753.2c0 25 20.4 45.4 45.4 45.4H512c24.9 0 45 20.1 45 45s-20.1 45-45 45z" p-id="12357"></path><path d="M512 802c-77.5 0-150.3-30.2-205.1-84.9C252.2 662.3 222 589.5 222 512s30.2-150.3 84.9-205.1S434.5 222 512 222s150.3 30.2 205.1 84.9C771.8 361.7 802 434.5 802 512s-30.2 150.3-84.9 205.1C662.3 771.8 589.5 802 512 802z m0-490c-110.3 0-200 89.7-200 200s89.7 200 200 200 200-89.7 200-200-89.7-200-200-200z" p-id="12358"></path><path d="M978.5 1023.5c-11.5 0-23-4.4-31.8-13.2L653.2 716.8c-17.6-17.6-17.6-46.1 0-63.6 17.6-17.6 46.1-17.6 63.6 0l293.5 293.5c17.6 17.6 17.6 46.1 0 63.6-8.8 8.8-20.3 13.2-31.8 13.2z" p-id="12359"></path></svg>', this.tag = "button", this.alwaysEnable = !0;
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
    exec(n) {
      const d = document.getElementById("editor-preview");
      let a = localStorage.getItem("editorPreviewW") || 300, u = localStorage.getItem("editorPreviewH") || 500;
      const s = n.getHtml();
      if (d) {
        let p = d.children[0].children[1].children[0], r = d.children[0].children[1];
        p.innerHTML = s, p.style.width = a + "px", r.style.height = u + "px", d.style.display = "block";
      } else {
        const p = document.body, r = document.createElement("div");
        r.setAttribute("id", "editor-preview"), r.setAttribute("class", "editor-preview-mask"), r.innerHTML = `<div class='editor-preview-body'><div class='editor-preview-head'><div><span>宽</span><input type='number' value='${a}' min='200'><span>高</span><input type='number' value='${u}' min='300'></div><i class='ivu-icon ivu-icon-md-close'></i></div><div class='editor-preview-out-wall'><div class='editor-preview-wall r-editor-view'></div></div></div>`;
        let c = r.children[0].children[1], m = r.children[0].children[1].children[0], g = r.children[0].children[0].children[0].children[1];
        const A = 40, k = 70, b = (I) => {
          if (I && I.type === "keyup") {
            let R = !1;
            if (I.key && (R = I.key !== "Enter"), R)
              return;
          }
          let S = I.target.value;
          if (S = Number(S), m.style && m.style.width === S + "px")
            return;
          const Z = p.clientWidth;
          S < 250 ? (S = 250, I.target.value = 250) : S > Z - A && (S = Z - A, I.target.value = Z - A), m.style.width = S + "px", localStorage.setItem("editorPreviewW", S);
        };
        g.addEventListener("blur", b), g.addEventListener("keyup", b);
        let _ = r.children[0].children[0].children[0].children[3];
        const L = (I) => {
          if (I && I.type === "keyup") {
            let R = !1;
            if (I.key && (R = I.key !== "Enter"), R)
              return;
          }
          let S = I.target.value;
          if (S = Number(S), c.style && c.style.height === S + "px")
            return;
          const Z = p.clientHeight;
          S < 300 ? (S = 300, I.target.value = 300) : S > Z - k && (S = Z - k, I.target.value = Z - k), c.style.height = S + "px", localStorage.setItem("editorPreviewH", S);
        };
        _.addEventListener("blur", L), _.addEventListener("keyup", L), r.children[0].children[0].children[1].addEventListener("click", (I) => {
          r.style.display = "none";
        }), m.innerHTML = s, m.style.width = a + "px", c.style.height = u + "px", p.append(r);
      }
    }
  }
  const i = {
    key: "previewX",
    factory() {
      return new t();
    }
  };
  ea.registerMenu(i), window.wangeditorMenuInit = !0;
})();
const jl = {
  $fetch: Te,
  fullScreenImgByDom: Ee,
  fullScreenImgPreview: Vt,
  $swal: Ce,
  $swalConfirm: Ct,
  messageBox: At,
  setInterval: pt,
  setTimeout: ke,
  ...ct
}, Nn = function(t, i = {}) {
  Te.init(i.useStore || i.store, t), i.locale && fl.use(i.locale), i.i18n && fl.i18n(i.i18n), i.router && Wa(i.router), i.amap && fn(i.amap), i.notRegistryGlobal || (Object.keys(Gl).forEach((e) => {
    t.component(e) || t.component(e, Gl[e]);
  }), Object.keys(jl).forEach((e) => {
    t.config.globalProperties[e] = jl[e];
  })), t.directive("has") || t.directive("has", (e, n) => {
    n.value && !rt(n.value) && (e.style.display = "none");
  }), t.directive("loadmore") || t.directive("loadmore", (e, n) => {
    let d;
    n.arg ? d = e.querySelector("." + n.arg) : d = e.querySelector(".ivu-select-dropdown") || e, d.addEventListener("scroll", function() {
      d.scrollTop > 0 && d.scrollHeight - d.scrollTop <= d.clientHeight && n.value();
    });
  });
}, $n = fl.use, zn = fl.i18n, to = {
  locale: $n,
  i18n: zn,
  install: Nn,
  ...ct,
  ...Aa,
  $fetch: Te,
  fullScreenImgByDom: Ee,
  fullScreenImgPreview: Vt,
  $swal: Ce,
  $swalConfirm: Ct,
  messageBox: At,
  setInterval: pt,
  setTimeout: ke
};
export {
  Te as $fetch,
  Ce as $swal,
  Ct as $swalConfirm,
  gt as AlCascaderMC,
  vt as AsyncCascader,
  rn as BtTablePage,
  kt as EditorPro,
  En as FormR,
  da as FullPop,
  Ql as HeaderBt,
  pa as Hello,
  fa as IconTxtBtn,
  ht as InputMap,
  wt as MonthRange,
  ga as Page404,
  mt as SelectInput,
  Ha as ShowHidePanel,
  ja as ShowHidePanelB,
  Ea as SideMenu,
  $a as TableIconBtn,
  qa as TableSearch,
  Xa as TableSetting,
  bt as UploadGroup,
  Vl as clearObj,
  La as dataFilterOrToUrl,
  xa as decimalDigitsLimit,
  to as default,
  ot as downloadFileByFormSubmit,
  lt as downloadFileReaderFile,
  ka as emptyInput,
  tt as fakeALinkClick,
  Sa as fileExport,
  De as findCollection,
  ml as findPath,
  Ca as formDataHeadConfig,
  Ee as fullScreenImgByDom,
  Vt as fullScreenImgPreview,
  Ba as getColumnsKeys,
  rl as getFileSrc,
  Sl as getFileTypeByName,
  kl as getFileTypeIconByName,
  at as getStringWidth,
  rt as hasPermission,
  wa as htmlDecode,
  ba as htmlEncode,
  Ua as htmlPrint,
  Ma as isEmptyValue,
  ul as isImgByFile,
  ut as isNaN,
  Oa as isNumberValue,
  ue as isValidValue,
  At as messageBox,
  O as myTypeof,
  Ia as oneOf,
  Al as removeEmptyValue,
  pt as setInterval,
  ke as setTimeout,
  st as setValByOption,
  dt as siblingElems,
  Va as stopBubbling,
  Ta as stringLength,
  _a as toFormData,
  et as toHump,
  nt as toLine,
  it as tooltipManual,
  yl as trimObj
};
//# sourceMappingURL=plugRQw.js.map
