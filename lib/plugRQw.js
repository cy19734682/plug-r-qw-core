var Ol = Object.defineProperty;
var Ml = (l, i, e) => i in l ? Ol(l, i, { enumerable: !0, configurable: !0, writable: !0, value: e }) : l[i] = e;
var Ze = (l, i, e) => (Ml(l, typeof i != "symbol" ? i + "" : i, e), e);
import { getCurrentInstance as xt, defineComponent as oe, resolveComponent as D, openBlock as V, createElementBlock as P, normalizeClass as ge, normalizeStyle as H, createBlock as z, createCommentVNode as le, renderSlot as Ce, ref as Y, computed as K, withDirectives as ve, unref as f, createElementVNode as E, toDisplayString as Z, createVNode as W, withCtx as J, createTextVNode as Ae, vShow as Ve, resolveDirective as Jt, h as ie, Fragment as pe, renderList as he, onBeforeMount as Tl, watch as ye, nextTick as dt, isRef as Oe, onMounted as We, withModifiers as Ll, mergeProps as St, onUnmounted as Ul, shallowRef as gt, onBeforeUnmount as Kl, createSlots as bt } from "vue";
import Pl from "deepmerge";
import { isObject as Fl, isFunction as Rl, isPlainObject as Ge, cloneDeep as se, isEmpty as Se, isBoolean as El, isNumber as je, debounce as Nl, isString as Xt, last as ct, isEqual as $l, first as wt, indexOf as Et, findIndex as zl, remove as Dl } from "lodash-es";
import it from "sweetalert";
import { Tooltip as Hl, TableColumnConfig as Gl, Radio as jl, Input as Wl, Modal as Fe, Icon as ql, Button as vt } from "view-ui-plus";
import { useRouter as Yl, useRoute as Jl } from "vue-router";
import { useI18n as Xl } from "vue-i18n";
import kt from "axios";
import Zl from "ar-cascader";
import { Toolbar as Ql, Editor as ea } from "@wangeditor/editor-for-vue";
import Qe from "moment";
import { Boot as ta } from "@wangeditor/editor";
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
}, la = /(%|){([0-9a-zA-Z_]+)}/g;
function aa() {
  function l(e, n) {
    return Object.prototype.hasOwnProperty.call(e, n);
  }
  function i(e, ...n) {
    let u;
    return n.length === 1 && typeof n[0] == "object" && (u = n[0]), (!u || !u.hasOwnProperty) && (u = {}), e === void 0 ? "" : e.replace(la, (a, d, s, p) => {
      let r;
      return e[p - 1] === "{" && e[p + a.length] === "}" ? s : (r = l(u, s) ? u[s] : null, r ?? "");
    });
  }
  return i;
}
const na = aa();
let pt = Zt;
const oa = {
  zh: Zt
};
let Nt, $t = {}, me, ia = function(l, i) {
  if (typeof this == "object" && Reflect.has(this, "$t"))
    return this.$t(l, i);
  if (me && me.global)
    return me.global.t(l, i);
  if (me && me.locale) {
    if (!$t[me.locale] || Nt != me.locale) {
      $t[me.locale] = !0;
      let e = me.getLocaleMessage(me.locale) || {}, n = Pl(oa[me.locale], e, { clone: !0 });
      pt = n, me.setLocaleMessage(me.locale, n), Nt = me.locale;
    }
    return me.hlang(l, i);
  }
};
const Le = function(l, i) {
  let e = ia.apply(this, [l, i]);
  if (e != null)
    return e;
  const n = l.split(".");
  let u = pt;
  for (let a = 0, d = n.length; a < d; a++) {
    const s = n[a];
    if (e = u[s], a === d - 1)
      return na(e, i);
    if (!e)
      return "";
    u = e;
  }
  return "";
}, sa = function(l) {
  pt = l || pt;
}, ra = function(l) {
  me = l;
}, ft = {
  use: sa,
  t: Le,
  i18n: ra
};
function C(l, i) {
  var n;
  const e = (n = xt()) == null ? void 0 : n.appContext.config.globalProperties;
  return Le.apply(e, [l, i]);
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
    function n() {
      e.disabled || i("click");
    }
    return (u, a) => {
      const d = D("Icon");
      return V(), P("div", {
        class: ge({ headerBtCTM: !0, withIconCTM: e.icon || e.withIcon, disabled: e.disabled }),
        style: H({ color: e.color, borderLeftColor: e.borderColor }),
        onClick: n
      }, [
        e.icon ? (V(), z(d, {
          key: 0,
          size: e.iconSize,
          type: e.icon
        }, null, 8, ["size", "type"])) : le("", !0),
        Ce(u.$slots, "default")
      ], 6);
    };
  }
}), ua = { class: "headerTxtAM" }, da = { class: "contentAM" }, ca = /* @__PURE__ */ oe({
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
    const n = l;
    let u = Y(!1);
    const a = K(() => typeof n.headerFontSize == "number" ? n.headerFontSize + "px" : n.headerFontSize), d = K(() => ({ zIndex: n.zIndex }));
    function s() {
      u.value = !0, e("on-open");
    }
    function p(r) {
      u.value = !1, e("on-close", r === !0);
    }
    return i({
      open: s,
      close: p
    }), (r, c) => ve((V(), P("div", {
      class: "fullScreenPopBoxAM",
      style: H(f(d))
    }, [
      E("div", {
        class: "headerAM",
        style: H({ color: n.headerColor, backgroundColor: n.headerBg, fontSize: f(a) })
      }, [
        E("span", ua, Z(r.title || f(C)("r.title")), 1),
        W(Qt, {
          icon: "md-return-left",
          onClick: p
        }, {
          default: J(() => [
            Ae(Z(f(C)("r.back")), 1)
          ]),
          _: 1
        })
      ], 4),
      E("div", da, [
        Ce(r.$slots, "default")
      ])
    ], 4)), [
      [Ve, f(u)]
    ]);
  }
}), pa = { class: "msg" }, fa = /* @__PURE__ */ oe({
  __name: "Hello",
  setup(l) {
    let i = Y("Greetings from Ricky.");
    return (e, n) => (V(), P("span", pa, Z(f(i)), 1));
  }
}), ma = /* @__PURE__ */ oe({
  __name: "IconTxtBtn",
  props: {
    name: {},
    icon: { default: "md-download" },
    size: { default: 17 },
    disabled: { type: Boolean, default: !1 },
    has: { default: "" }
  },
  emits: ["click"],
  setup(l, { emit: i }) {
    const e = l, n = K(() => Math.floor(e.size / 17 * 12) + "px");
    function u(a) {
      e.disabled || i("click", a);
    }
    return (a, d) => {
      const s = D("Icon"), p = Jt("has");
      return ve((V(), P("div", {
        class: ge(["tabTopBtnsT", { disabled: e.disabled }]),
        onClick: u,
        style: H({ "font-size": f(n) })
      }, [
        W(s, {
          type: e.icon,
          size: e.size
        }, null, 8, ["type", "size"]),
        Ae(" " + Z(e.name || f(C)("r.button")), 1)
      ], 6)), [
        [p, a.has]
      ]);
    };
  }
}), ya = { class: "c404K" }, ha = /* @__PURE__ */ E("div", { class: "t404" }, "404", -1), va = { class: "ct404" }, ga = { class: "p404" }, ba = /* @__PURE__ */ oe({
  __name: "Page404",
  setup(l) {
    const e = xt().appContext.config.globalProperties.$router;
    function n() {
      e.go(-1);
    }
    return (u, a) => {
      const d = D("Button");
      return V(), P("div", ya, [
        ha,
        E("div", va, "UH OH! " + Z(f(C)("r.pageNotFound")), 1),
        E("div", ga, Z(f(C)("r.notFoundMsg")), 1),
        W(d, {
          class: "bt404",
          onClick: n
        }, {
          default: J(() => [
            Ae(Z(f(C)("r.back")), 1)
          ]),
          _: 1
        })
      ]);
    };
  }
});
function Be(l, i, e) {
  const n = (...u) => Le.apply(this, u);
  return new Promise((u, a) => {
    if (typeof l == "object" && !Array.isArray(l)) {
      let d = n("r.confirm"), s = n("r.cancel"), p = !1, r = "swalConfirmBt", c = "swalCancelBt";
      const m = /^HTML.*Element$/;
      l.type && (l.icon = l.type) && delete l.type, l.content && (l.text = l.content) && delete l.content, l.className = l.className || "swalBoxX";
      let g = "";
      l.text && m.test(O(l.text)) ? g = "content" : l.text && O(l.text) === "String" && (g = "text"), l.buttons && (typeof l.buttons == "object" && !Array.isArray(l.buttons) ? l.buttons.cancel && (l.buttons.cancel.text && (s = l.buttons.cancel.text) && (p = !0), l.buttons.cancel.className && (c = l.buttons.cancel.className), l.buttons.confirm.text && (d = l.buttons.confirm.text), l.buttons.confirm.className && (r = l.buttons.confirm.className)) : Array.isArray(l.buttons) && (l.buttons[0] && (s = l.buttons[0], p = !0), l.buttons[1] && (d = l.buttons[1]))), it({
        title: l.title,
        icon: l.icon,
        className: l.className,
        [g]: l.text,
        buttons: {
          confirm: {
            text: d,
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
        A && typeof l.onOk == "function" && l.onOk(), u(A);
      }).catch((A) => {
        a(A);
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
      it({
        title: l,
        [d]: i || "",
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
        u(s);
      }).catch((s) => {
        a(s);
      });
    } else if (typeof l == "boolean")
      !l && it.close && it.close();
    else
      throw new TypeError("swal第一个参数类型有误，仅支持Object/String/false");
  });
}
function el(l) {
  return l.replace(/_(\w)/g, function(i, e) {
    return e.toUpperCase();
  });
}
function wa(l) {
  let i = document.createElement("div");
  return i.textContent !== void 0 ? i.textContent = l : i.innerText = l, i.innerHTML;
}
function ka(l) {
  let i = document.createElement("div");
  return i.innerHTML = l, i.innerText || i.textContent;
}
function rt(l) {
  return new Promise((i) => {
    let e = new FileReader();
    e.readAsDataURL(l), e.onloadend = () => {
      i(e.result);
    };
  });
}
function Ot(l) {
  return l.split(".").pop().toLocaleLowerCase();
}
function ut(l) {
  return O(l) === "String" && l.indexOf("image") > -1;
}
function Vt(l) {
  const i = Ot(l);
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
function mt({
  group: l,
  condition: i,
  pathKey: e,
  childKey: n = "children",
  path: u = []
}) {
  if (l && Fl(l)) {
    if (Rl(i)) {
      if (Ge(l)) {
        let a = l, d = se(u);
        if (i(a))
          return e && a[e] && d.push(a[e]), d;
        if (a[n] && !Se(a[n])) {
          e && a[e] && d.push(a[e]);
          let s = mt({
            group: a[n],
            condition: i,
            pathKey: e,
            childKey: n,
            path: d
          });
          if (!Se(s))
            return s;
        }
      } else if (Array.isArray(l))
        for (let a of l) {
          let d = se(u);
          if (i(a))
            return e && a[e] ? d.push(a[e]) : d.push(String(l.indexOf(a))), d;
          if (a[n] && a[n].length > 0) {
            e && a[e] ? d.push(a[e]) : d.push(String(l.indexOf(a)));
            let s = mt({
              group: a[n],
              condition: i,
              pathKey: e,
              childKey: n,
              path: d
            });
            if (!Se(s))
              return s;
          }
        }
    } else if (Array.isArray(l))
      for (let a of l) {
        let d = se(u);
        if (a === i)
          return d.push(String(l.indexOf(a))), d;
      }
  }
  return [];
}
function al(l, i = 12) {
  if (O(l) === "String" && l.length > 0) {
    let e = document.createElement("span");
    e.style.fontSize = i + "px", e.style.fontFamily = "inherit", e.innerHTML = l, e.style.opacity = "0", e.style.position = "fixed", e.style.top = "3000px", document.body.append(e);
    const n = e.clientWidth;
    return document.body.removeChild(e), n;
  }
  return 0;
}
function Va(l) {
  return l === "" ? null : l;
}
function Aa(l) {
  l = l || window.Event, l.stopPropagation ? l.stopPropagation() : l.cancelBubble = !0;
}
const Ca = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  downloadFileReaderFile: tl,
  emptyInput: Va,
  fakeALinkClick: ll,
  findPath: mt,
  getFileSrc: rt,
  getFileTypeByName: Ot,
  getFileTypeIconByName: Vt,
  getStringWidth: al,
  htmlDecode: ka,
  htmlEncode: wa,
  isImgByFile: ut,
  stopBubbling: Aa,
  toHump: el
}, Symbol.toStringTag, { value: "Module" }));
function O(l) {
  return Object.prototype.toString.call(l).replace(/\[object |]/g, "");
}
function nl(l) {
  return l.replace(/([A-Z])/g, "_$1").toLowerCase();
}
function yt(l) {
  let i = O(l);
  if (i === "Object") {
    for (let e in l)
      if (l.hasOwnProperty(e)) {
        let n = O(l[e]);
        n === "String" ? l[e] = l[e].trim() : (n === "Object" || n === "Array") && yt(l[e]);
      }
  } else if (i === "Array")
    for (let e = 0, n = l.length; e < n; e++) {
      let u = O(l[e]);
      u === "String" ? l[e] = l[e].trim() : (u === "Array" || u === "Object") && yt(l[e]);
    }
  return l;
}
function At(l, i = []) {
  if (O(l) === "Array")
    return l.forEach((e, n) => {
      switch (O(e)) {
        case "Array":
        case "Object":
          At(e);
          break;
        default:
          l[n] = null;
      }
    }), l;
  if (O(l) === "Object") {
    for (let e in l)
      if (l.hasOwnProperty(e)) {
        let n = !0;
        for (let u of i)
          if (u === e) {
            n = !1;
            break;
          }
        if (n)
          switch (O(l[e])) {
            case "Array":
            case "Object":
              At(l[e]);
              break;
            default:
              l[e] = null;
          }
      }
    return l;
  } else
    return l;
}
const _a = {
  headers: {
    "Content-Type": "multipart/form-data"
  }
};
function Ba(l) {
  let i = new FormData();
  for (let e in l)
    l.hasOwnProperty(e) && l[e] !== null && i.append(e, l[e]);
  return i;
}
function De(l, i, e = !1) {
  if (!l || !i)
    return !1;
  let n, u = "notFoundC", a = function(d, s) {
    if (Array.isArray(d)) {
      if (O(s) === "Function" && s(d))
        return u = d, [];
      for (let p of d) {
        if (u !== "notFoundC")
          break;
        if (O(s) === "Function" && s(p) || p === s)
          return u = p, [d.indexOf(p)];
        if (O(p) === "Array" || O(p) === "Object") {
          let r = a(p, s);
          if (r !== void 0)
            return [d.indexOf(p), ...r];
        }
      }
    } else if (O(d) === "Object") {
      if (O(s) === "Function" && s(d))
        return u = d, [];
      for (let p in d) {
        if (u !== "notFoundC")
          break;
        if (d.hasOwnProperty(p)) {
          if (O(s) === "Function" && s(p) || d[p] === s)
            return u = d[p], [p];
          if (O(d[p]) === "Object" || O(d[p]) === "Array") {
            let r = a(d[p], s);
            if (r !== void 0)
              return [p, ...r];
          }
        }
      }
    }
  };
  return n = a(l, i), e ? n || !1 : u === "notFoundC" ? !1 : u;
}
function Ia(l, i) {
  for (let e = 0, n = i.length; e < n; e++)
    if (l === i[e])
      return !0;
  return !1;
}
function xa(l, i = 2) {
  let e = new RegExp(`(^-?\\d+\\.\\d{${i}})(\\d+$)`), n = l && String(l) || "";
  return e.test(n) ? Number(n.replace(e, "$1")) : l;
}
function ol(l, i = {}, e = "get") {
  let n = document.createElement("form"), u = document.getElementsByTagName("body")[0];
  u.appendChild(n), n.setAttribute("style", "display:none"), n.setAttribute("target", ""), n.setAttribute("method", e);
  let a = l;
  if (window && window.hasOwnProperty("g")) {
    let d = Object.keys(window.g).filter((s) => s.indexOf("URL") > -1).map((s) => s.replace("URL", ""));
    for (let s of d) {
      let p = new RegExp("^/" + s + "(?=/.*$)", "i");
      if (p.test(l) && window.g[s + "URL"]) {
        a = window.g[s + "URL"] + l.replace(p, "");
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
    let d = setTimeout(() => {
      u.removeChild(n), clearTimeout(d), d = null;
    }, 8e3);
  } else
    console.error("请求数据格式有误，无法下载文件");
}
function Sa(l, i = {}, e = "get") {
  if (i.hasOwnProperty("columns") && (i.columns === "" || i.columns === null || i.columns === void 0)) {
    Be.call(this, {
      title: "需要导出的列不能为空",
      type: "warning"
    });
    return;
  }
  ol(l, i, e);
}
function Oa(l, i, e = !1) {
  let n;
  if (l && O(i) === "Array") {
    let u = localStorage.getItem(l);
    if (u) {
      let a = JSON.parse(decodeURI(u));
      n = i.filter((d) => d.key && a.indexOf(d.title) !== -1).map((d) => d.key);
    } else
      n = i.map((a) => a.key);
  } else
    n = [];
  return e || (n = String(n)), n;
}
function ue(l) {
  return l != null && l !== "";
}
function Ma(l) {
  return /^-?\d+(.\d+)?$/.test(l);
}
function il(l, i = !1, e = "") {
  return function(n, u) {
    let a;
    if (Array.isArray(l)) {
      let p = [];
      for (let r of l)
        ue(u.row[r]) && p.push(u.row[r]);
      a = p.join(e);
    } else
      typeof l == "function" ? a = l(u) : a = u.row[l];
    let d = al(a), s = u.column._width;
    return a && d > s ? ie(
      Hl,
      {
        style: {
          width: "100%"
        },
        content: a,
        maxWidth: s * 2
      },
      () => ie(
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
    ) : ie("span", i && !ue(a) ? "--" : a);
  };
}
function Ta(l) {
  if (Ge(l)) {
    for (let i in l)
      if (l.hasOwnProperty(i) && ue(l[i]))
        return !1;
    return !0;
  } else if (Array.isArray(l)) {
    for (let i of l)
      if (ue(i))
        return !1;
    return !0;
  }
  return !ue(l);
}
function La(l) {
  return O(l) === "String" ? l.replace(/[^\x00-\xff]/g, "01").length : O(l) === "Number" ? (l += "", l.replace(/[^\x00-\xff]/g, "01").length) : 0;
}
function sl({
  group: l,
  condition: i,
  key: e,
  val: n,
  childKey: u = "children"
}) {
  if (O(l) !== "Array" || O(i) !== "Function" || O(e) !== "String" || O(u) !== "String")
    return !1;
  l.forEach((a) => {
    i(a) && (O(n) === "Function" ? a[e] = n(a[e]) : a[e] = n), O(a[u]) === "Array" && a[u].length > 0 && sl({
      group: a[u],
      condition: i,
      key: e,
      val: n,
      childKey: u
    });
  });
}
function rl(l) {
  let i = sessionStorage.getItem("btnPermissions");
  return i ? i.split(",").indexOf(l) > -1 : !1;
}
function ul(l) {
  return O(l) === "Number" && String(l) === "NaN";
}
function Ua(l, i = !1, e = !1) {
  if (O(l) !== "Object")
    return l;
  let n = Object.assign(l, {}), u = "";
  for (let a in n)
    if (n.hasOwnProperty(a)) {
      let d = n[a];
      d === void 0 || d === "" || O(d) === "String" && d.trim() === "" || d === null || ul(d) ? e ? i ? u += a + "=&" : n[a] = "" : delete n[a] : i && (u += a + "=" + d + "&");
    }
  return i ? u.length > 0 ? u.substring(0, u.length - 1) : "" : n;
}
function Ct(l) {
  let i = {};
  if (Array.isArray(l)) {
    i = [];
    for (let e of l)
      Array.isArray(e) || Ge(e) ? i.push(Ct(e)) : ue(e) && i.push(e);
  } else if (Ge(l))
    for (let e in l)
      l.hasOwnProperty(e) && (Array.isArray(l[e]) || Ge(l[e]) ? i[e] = Ct(l[e]) : ue(l[e]) && (i[e] = l[e]));
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
  clearObj: At,
  dataFilterOrToUrl: Ua,
  decimalDigitsLimit: xa,
  downloadFileByFormSubmit: ol,
  fileExport: Sa,
  findCollection: De,
  formDataHeadConfig: _a,
  getColumnsKeys: Oa,
  hasPermission: rl,
  htmlPrint: Ka,
  isEmptyValue: Ta,
  isNaN: ul,
  isNumberValue: Ma,
  isValidValue: ue,
  myTypeof: O,
  oneOf: Ia,
  removeEmptyValue: Ct,
  setValByOption: sl,
  siblingElems: dl,
  stringLength: La,
  toFormData: Ba,
  toLine: nl,
  tooltipManual: il,
  trimObj: yt
}, Symbol.toStringTag, { value: "Module" })), Pa = { class: "groupBoxRP" }, Fa = ["onClick"], Ra = /* @__PURE__ */ oe({
  __name: "SideMenuGroup",
  props: {
    data: { default: () => [] },
    pathName: { default: "" }
  },
  setup(l) {
    const i = l, e = Yl();
    function n(a) {
      return a.path === i.pathName ? "active" : "";
    }
    function u(a, d) {
      a.preventDefault();
      let s = a.target;
      if (!d.children && !s.classList.contains("active")) {
        e.push(d.path);
        return;
      }
      let p = s.parentNode, r = dl(p);
      for (let c of r) {
        c.classList.remove("open");
        const m = c.querySelectorAll(".open");
        for (let g of m)
          g.classList.remove("open");
      }
      p.classList.toggle("open");
    }
    return (a, d) => {
      const s = D("sideMenuGroup", !0);
      return V(), P("ul", Pa, [
        (V(!0), P(pe, null, he(i.data, (p, r) => (V(), P("li", {
          class: ge({ dropItemRP: p.children }),
          key: p.path + r
        }, [
          E("div", {
            class: ge(["menuTxtR", n(p)]),
            onClick: (c) => u(c, p),
            style: H({ paddingLeft: p.level * 20 + "px" })
          }, Z(p.name || "-- no name --"), 15, Fa),
          p.children ? (V(), z(s, {
            key: 0,
            data: p.children,
            "path-name": i.pathName
          }, null, 8, ["data", "path-name"])) : le("", !0)
        ], 2))), 128))
      ]);
    };
  }
}), Ea = { class: "menuListR" }, Na = /* @__PURE__ */ oe({
  __name: "SideMenu",
  props: {
    data: { default: () => [] }
  },
  emits: ["on-change"],
  setup(l, { emit: i }) {
    const e = l, n = Jl(), u = Y(!0), a = Y(), d = Y(), s = K(() => u.value ? C("r.hideMenu") : C("r.showMenu")), p = K(() => u.value ? "ios-arrow-back" : "ios-arrow-forward");
    Tl(() => {
      let m = localStorage.getItem("menuDisplayR") || "";
      m !== "" ? u.value = JSON.parse(m) : (u.value = !0, localStorage.setItem("menuDisplayR", JSON.stringify(!0)));
    }), ye(
      () => n.path,
      (m) => {
        a.value = m, dt(c);
      },
      { immediate: !0 }
    );
    function r() {
      u.value = !u.value, localStorage.setItem("menuDisplayR", JSON.stringify(u.value)), i("on-change", u.value);
    }
    function c() {
      let m = d.value.querySelectorAll(".dropItemRP");
      for (let g of m)
        g.querySelector(".active") && !g.classList.contains("open") && g.classList.add("open");
    }
    return (m, g) => {
      const A = D("Icon");
      return V(), P("div", {
        ref_key: "menuRef",
        ref: d,
        class: "menuBoxRP"
      }, [
        ve(E("div", Ea, [
          W(Ra, {
            data: e.data,
            pathName: f(a)
          }, null, 8, ["data", "pathName"])
        ], 512), [
          [Ve, f(u)]
        ]),
        W(A, {
          type: f(p),
          size: 25,
          class: ge([{ showIco: !f(u) }, "menuShowHideIco"]),
          title: f(s),
          onClick: r,
          color: f(u) ? "#fff" : "#333"
        }, null, 8, ["type", "class", "title", "color"])
      ], 512);
    };
  }
}), $a = ["title"], za = /* @__PURE__ */ oe({
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
    function n(u) {
      e.disabled || i("click", u);
    }
    return (u, a) => {
      const d = D("Icon"), s = Jt("has");
      return ve((V(), P("div", {
        class: ge(["tableBtnsG", { disabled: e.disabled }]),
        onClick: n,
        title: e.title || f(C)("r.button")
      }, [
        W(d, {
          type: e.icon,
          size: e.size
        }, null, 8, ["type", "size"])
      ], 10, $a)), [
        [s, e.has]
      ]);
    };
  }
}), Da = { class: "contentX" }, Ha = { class: "arrowA" }, Ga = /* @__PURE__ */ oe({
  __name: "ShowHidePanel",
  props: {
    bg: {}
  },
  setup(l) {
    const i = l, e = Y(!0), n = K(() => e ? "background:" + i.bg || "transparent" : "");
    return (u, a) => {
      const d = D("Icon");
      return V(), P("div", {
        style: H(f(n))
      }, [
        ve(E("div", Da, [
          Ce(u.$slots, "default")
        ], 512), [
          [Ve, f(e)]
        ]),
        E("div", Ha, [
          E("div", {
            class: "btA",
            onClick: a[0] || (a[0] = (s) => e.value = !f(e))
          }, [
            W(d, {
              type: f(e) ? "ios-arrow-up" : "ios-arrow-down",
              size: "20"
            }, null, 8, ["type"])
          ])
        ])
      ], 4);
    };
  }
}), ja = { class: "contentZ" }, Wa = /* @__PURE__ */ oe({
  __name: "ShowHidePanelB",
  props: {
    modelValue: { type: Boolean, default: !1 },
    bg: { default: "transparent" }
  },
  emits: ["update:modelValue"],
  setup(l, { emit: i }) {
    const e = l, n = K({
      get() {
        return e.modelValue;
      },
      set(a) {
        i("update:modelValue", a);
      }
    }), u = K(() => n.value ? "background:" + e.bg : "");
    return (a, d) => (V(), P("div", {
      style: H(f(u))
    }, [
      ve(E("div", ja, [
        Ce(a.$slots, "default")
      ], 512), [
        [Ve, f(n)]
      ])
    ], 4));
  }
});
let _t = [], Bt = [];
const qa = function(l) {
  l && l.beforeEach ? l.beforeEach(() => {
    _t.map((i) => {
      window.clearTimeout(i);
    }), Bt.map((i) => {
      window.clearInterval(i);
    }), _t.length = 0, Bt.length = 0;
  }) : console.warn(
    "安装库plug-r-qw时未传入router，调用该库的定时器方法产生的定时器将不能自动销毁，请传入router：Vue.use(plugRQw,{router,...})"
  );
}, we = function(l, i) {
  let e = window.setTimeout(l, i);
  return _t.push(e), e;
}, pl = function(l, i) {
  let e = window.setInterval(l, i);
  return Bt.push(e), e;
}, Ya = /* @__PURE__ */ oe({
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
    let n = !1;
    const u = K({
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
    }), d = K(() => a.value ? "ios-arrow-up" : "ios-arrow-down");
    function s() {
      n || (n = !0, i("on-search", u.value), we(() => {
        n = !1;
      }, 2e3));
    }
    return (p, r) => {
      const c = D("Input"), m = D("icon");
      return V(), P("div", {
        class: "tableSearchV",
        style: H({ position: e.fixed ? "fixed" : "absolute", right: e.right, top: e.top })
      }, [
        Ce(p.$slots, "default", {}, () => [
          W(c, {
            modelValue: f(u),
            "onUpdate:modelValue": r[0] || (r[0] = (g) => Oe(u) ? u.value = g : null),
            style: H({ width: e.width }),
            search: "",
            onOnSearch: s,
            class: "searchInputC",
            placeholder: e.placeholder || f(C)("r.pInput")
          }, null, 8, ["modelValue", "style", "placeholder"])
        ]),
        ve(E("span", {
          class: "sbt",
          onClick: r[1] || (r[1] = (g) => a.value = !f(a)),
          style: H({ color: e.btnColor })
        }, [
          W(m, {
            type: f(d),
            color: e.btnColor
          }, null, 8, ["type", "color"]),
          Ae(Z(f(C)("r.adSearch")), 1)
        ], 4), [
          [Ve, e.showBtn]
        ])
      ], 4);
    };
  }
}), Ja = { class: "tabSetF" }, Xa = { class: "topCheck" }, Za = /* @__PURE__ */ oe({
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
    const e = l, n = Y(!0), u = Y(!1), a = Y(!1), d = Y([]), s = K(() => {
      let b = C("r.unknown");
      return e.modelValue.length > d.value.length && (d.value = se(e.modelValue)), d.value.map((_) => {
        let L = { label: _ && _.title || b };
        return _ && _.disableShowSetting && (L.disabled = !0), L;
      });
    }), p = K(() => s.value.filter((b) => b.disabled)), r = K({
      get() {
        return e.modelValue.map((b) => b && b.title || C("r.unknown"));
      },
      set(b) {
        let _ = d.value.filter((L) => {
          for (let F of b)
            if (F === L.title)
              return !0;
          return !1;
        });
        i("update:modelValue", _);
      }
    }), { locale: c } = Xl();
    We(() => {
      let b = C("r.unknown"), _;
      c.value ? _ = localStorage.getItem(e.sKey + "_" + c.value) : _ = localStorage.getItem(e.sKey), _ ? r.value = JSON.parse(decodeURI(_)) : e.defaultCheck && (r.value = e.modelValue.filter((L) => L.showSettingCheck).map((L) => L && L.title || b));
    });
    function m(b) {
      b.length === s.value.length ? (n.value = !1, u.value = !0) : b.length > p.value.length ? (n.value = !0, u.value = !1) : (n.value = !1, u.value = !1);
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
    function w() {
      n.value ? u.value = !1 : u.value = !u.value, n.value = !1, u.value ? r.value = s.value.map((b) => b.label) : r.value = p.value.map((b) => b.label);
    }
    return (b, _) => {
      const L = D("Icon"), F = D("Checkbox"), B = D("CheckboxGroup");
      return V(), P("div", Ja, [
        E("div", {
          class: "tabSetBt",
          onClick: g
        }, [
          W(L, {
            type: "md-settings",
            size: "17"
          }),
          E("span", null, Z(f(C)("r.tabSetting")), 1)
        ]),
        ve(E("div", {
          class: "tabSetCard",
          style: H({ top: e.top, right: e.right, width: e.width, backgroundColor: e.bg })
        }, [
          E("div", Xa, [
            W(F, {
              indeterminate: f(n),
              modelValue: f(u),
              "onUpdate:modelValue": _[0] || (_[0] = (x) => Oe(u) ? u.value = x : null),
              onClick: Ll(w, ["prevent"])
            }, {
              default: J(() => [
                Ae(Z(f(C)("r.all")), 1)
              ]),
              _: 1
            }, 8, ["indeterminate", "modelValue", "onClick"]),
            E("span", {
              style: { cursor: "pointer", float: "right" },
              onClick: A
            }, Z(f(C)("r.confirm")), 1)
          ]),
          W(B, {
            modelValue: f(r),
            "onUpdate:modelValue": _[1] || (_[1] = (x) => Oe(r) ? r.value = x : null)
          }, {
            default: J(() => [
              (V(!0), P(pe, null, he(f(s), (x, ee) => (V(), z(F, {
                class: "setItem",
                label: x && x.label,
                key: "tabSet_" + e.sKey + ee,
                disabled: x && x.disabled
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
let ze = 0, tt = document.createElement("div");
tt.setAttribute("class", "spinModal");
tt.innerHTML = '<div class="loader"><svg class="circular" viewBox="25 25 50 50"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10" /></svg></div>';
window.onload = function() {
  document.getElementsByTagName("body")[0].append(tt);
};
function zt(l) {
  l ? tt.classList.add("show") : tt.classList.remove("show");
}
function fl(l) {
  let i = ze;
  l ? ze++ : ze > 0 && ze--, i !== ze && (ze === 0 ? zt(!1) : i === 0 && zt(!0));
}
const Qa = window.location.origin;
let He = null;
const Dt = (...l) => Le.apply(He, l);
let Ie = kt.create({
  baseURL: Qa,
  withCredentials: !0
  // 允许携带cookie
});
function en() {
  console.info("store为空，请在安装插件时传入store实例：Vue.use(plugRQw,{store:store})，Pinia传{store:useStore}");
}
Ie.interceptors.request.use(
  (l) => l,
  (l) => Promise.reject(l)
);
function Ht() {
  if (Ie.store)
    if (typeof Ie.store == "function") {
      const l = Ie.store();
      l.logout && l.logout();
    } else
      Ie.store.dispatch("logout");
  else
    en();
}
Ie.interceptors.response.use(
  (l) => (He && l && l.data && (l.data.code === 403 || l.data.code === 409) && He.messageBox({
    content: Dt("r.http." + l.data.code),
    onOk: Ht
  }), l),
  (l) => (He && l && l.response && (l.response.status === 403 || l.response.status === 409) && He.messageBox({
    content: Dt("r.http." + l.response.status),
    onOk: Ht
  }), console.warn("请求出错：", l), Promise.reject(l))
);
function Pe(l, i, e, n) {
  n && n.spin && fl(!1);
  let u = !0, a = l && l.data;
  if (a) {
    e = e || [];
    for (let d of e)
      a = a[d], u = u && a;
    return u ? a : (i && console.warn(i), !1);
  }
  return i && console.warn(i), !1;
}
function tn(l, i, e, n, u, a, d) {
  return new Promise((s, p) => {
    switch (l) {
      case "get":
        Ie.get(i, { params: e }).then((c) => {
          let m = Pe(c, n, u, a);
          m ? s(m) : p(c);
        }).catch((c) => {
          Pe({}, n, u, a), p(c);
        });
        break;
      case "delete":
        let r = d ? "params" : "data";
        Ie.delete(i, { [r]: e }).then((c) => {
          let m = Pe(c, n, u, a);
          m ? s(m) : p(c);
        }).catch((c) => {
          Pe({}, n, u, a), p(c);
        });
        break;
      case "post":
        Ie.post(i, e, a).then((c) => {
          let m = Pe(c, n, u, a);
          m ? s(m) : p(c);
        }).catch((c) => {
          Pe({}, n, u, a), p(c);
        });
        break;
      case "put":
        Ie.put(i, e, a).then((c) => {
          let m = Pe(c, n, u, a);
          m ? s(m) : p(c);
        }).catch((c) => {
          Pe({}, n, u, a), p(c);
        });
        break;
    }
  });
}
function st(l, i, e = {}, n, u, a, d) {
  return new Promise((s, p) => {
    if (i) {
      a && a.spin && fl(!0);
      let r = i;
      if (window && window.hasOwnProperty("g")) {
        const g = window.g;
        let A = Object.keys(g).filter((w) => w.indexOf("URL") > -1).map((w) => w.replace("URL", ""));
        for (let w of A) {
          let b = new RegExp("^/" + w + "(?=/.*$)", "i");
          if (b.test(i) && g[w + "URL"]) {
            r = g[w + "URL"] + i.replace(b, "");
            break;
          }
        }
      }
      let c;
      if (a && a.headers && a.headers["Content-Type"] === "multipart/form-data")
        c = e;
      else if (e && !Se(e))
        if (Array.isArray(e)) {
          c = [];
          for (let g of e)
            (g || g === 0 || g === !1 || g === "" && a && !a.noEmptyStr) && c.push(g);
        } else {
          c = {};
          for (let g in e)
            e.hasOwnProperty(g) && (e[g] || e[g] === 0 || e[g] === !1 || e[g] === "" && a && !a.noEmptyStr) && (c[g] = e[g]);
        }
      let m = l.toLowerCase();
      tn(m, r, c, n, u, a, d).then((g) => {
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
  init(l, i) {
    Ie.store = l, He = i.config.globalProperties;
  },
  post(l, i, e, n, u) {
    return new Promise((a, d) => {
      st("post", l, i, e, n, u).then((s) => {
        a(s);
      }).catch((s) => {
        d(s);
      });
    });
  },
  put(l, i, e, n, u) {
    return new Promise((a, d) => {
      st("put", l, i, e, n, u).then((s) => {
        a(s);
      }).catch((s) => {
        d(s);
      });
    });
  },
  get(l, i, e, n, u) {
    return new Promise((a, d) => {
      st("get", l, i, e, n, u).then((s) => {
        a(s);
      }).catch((s) => {
        d(s);
      });
    });
  },
  delete(l, i, e, n, u, a = !0) {
    return new Promise((d, s) => {
      st("delete", l, i, e, n, u, a).then((p) => {
        d(p);
      }).catch((p) => {
        s(p);
      });
    });
  },
  all: kt.all,
  spread: kt.spread,
  config: Ie
}, ln = {
  class: "btTablePage fullHeight",
  ref: "tableBox"
}, an = { class: "topBtn" }, nn = { class: "fullHeight relativeBox" }, on = {
  ref: "tableContainerLOI",
  class: "fullFlowContent"
}, sn = { class: "pageContainer" }, rn = 300, un = /* @__PURE__ */ oe({
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
    const n = l, { globalProperties: u } = xt().appContext.config;
    ({ ...{
      showSettingCheck: !1,
      disableShowSetting: !1
    }, ...Gl });
    const d = u.pageSizes || [10, 20, 30, 40], s = Y(n.data), p = Y(
      localStorage.getItem("btPageSize") && Number(localStorage.getItem("btPageSize")) || n.pageSize
    ), r = Y(1), c = Y(0);
    let m = [], g, A, w = n.orderKey, b = n.orderDefault;
    const _ = K(() => {
      for (let I of n.columns)
        if (I.fixed)
          return !0;
      return !1;
    }), L = K(() => n.selectionFixed || _.value), F = K(() => {
      let I = {
        ...n.searchData,
        current: r.value,
        size: p.value
      };
      return n.sortable === "custom" && (n.orderKeyFormat === "underline" ? I[b] = nl(w) : n.orderKeyFormat === "camelcase" && (I[b] = el(w))), I;
    }), B = K(() => {
      let I = n.columns.filter((S) => S.type !== "selection");
      if (n.selection || n.radio) {
        let S;
        n.radio ? S = {
          title: " ",
          width: 65,
          render: (fe, ne) => ie(jl, {
            value: ne.row.btChecked
          })
        } : S = {
          type: "selection",
          width: 60
        }, n.selectionFixed && (S.fixed = n.selectionFixed), I.unshift(S);
      }
      return I.forEach((S) => {
        n.sortable === "custom" ? S.key && S.sortable !== !0 && S.sortable !== !1 && (S.sortable = "custom") : S.sortable = !1, S.align || (S.align = "center");
      }), n.tableEmptyTdHandle && I.forEach((S) => {
        S.key && S.render === void 0 && (S.tooltip ? S.render = il(S.key, !0) : S.render = (fe, ne) => {
          let de = ne.row[S.key];
          return fe("span", de === "" || de === null || de === void 0 ? "--" : de);
        });
      }), I;
    }), x = K({
      get() {
        return s.value.map((I, S) => ({
          btKey: "bt-" + S,
          btChecked: !1,
          ...I
        }));
      },
      set(I) {
        s.value = I;
      }
    }), ee = K(() => m.map((I) => I.id)), R = K(() => m.map((I) => I.btKey)), h = Y();
    ye(() => n.searchData, ke, { deep: !0 });
    function ke() {
      r.value = 1, xe();
    }
    function k() {
      n.initData && xe();
    }
    function U(I) {
      s.value.unshift(se(I)), we(() => {
        var S;
        (S = h.value) == null || S.clickCurrentRow(0);
      }, 100);
    }
    function j(I, S, fe) {
      let ne = null;
      if (El(S) && S ? ne = A : je(S) && (ne = S), ne !== null) {
        let de = s.value[ne];
        for (let q in I)
          I.hasOwnProperty(q) && (de[q] = I[q]);
        fe && we(() => {
          var q;
          (q = h.value) == null || q.clickCurrentRow(ne);
        }, 10);
      }
    }
    function Q(I) {
      s.value.splice(I, 1), we(() => {
        var S;
        (S = h.value) == null || S.clickCurrentRow(0);
      }, 100);
    }
    function re(I, S) {
      var fe;
      I.btChecked && n.radio || (n.selection || n.radio) && n.rowClickSelect && ((fe = h.value) == null || fe.toggleSelect(S));
    }
    function $(I, S) {
      g = S.btKey, A = Number(S.btKey.split("-")[1]), n.radio && (s.value[A].btChecked = !0);
    }
    function te(I) {
      if (n.radio)
        for (let S of x.value)
          S.btKey !== g && (s.value[Number(S.btKey.split("-")[1])].btChecked = !1);
      m = I, e("on-selection-change", I);
    }
    function ae() {
      return se(m);
    }
    function be(I) {
      r.value = I, xe();
    }
    function Me(I) {
      p.value = I, localStorage.setItem("btPageSize", String(I)), r.value === 1 && xe();
    }
    function Ue({ key: I, order: S }) {
      b === "normal" ? (w = n.orderKey, b = n.orderDefault) : (w = I, b = S), r.value = 1, Ke();
    }
    function Re() {
      var I;
      if (n.radio) {
        if (R.value.length > 0 && x.value.length > 0) {
          let S = R.value[0].split("-")[1];
          x.value[S].btChecked = !1;
        }
      } else
        (I = h.value) == null || I.selectAll(!1);
      m.length > 0 && (m = [], e("on-selection-change", [])), g = null, A = null;
    }
    function Ne() {
      s.value = [], Re(), r.value = 1, c.value = 0;
    }
    function Ke(I, S, fe) {
      return new Promise((ne) => {
        I && (b = I), S && (w = S), n.url ? Te.get(n.url, F.value, "", [], { spin: n.getDataLoading }).then((de) => {
          var qe, lt, at, Ye, Je, nt, Xe, ot;
          let q;
          fe || Re(), typeof n.dataHandler == "function" ? q = n.dataHandler(de) : q = de, q.data ? ((qe = q.data) != null && qe.records || ((lt = q.data) == null ? void 0 : lt.records) === null ? s.value = ((at = q.data) == null ? void 0 : at.records) || [] : q.data.page ? ((Ye = q.data.page) != null && Ye.records || ((Je = q.data.page) == null ? void 0 : Je.records) === null) && (s.value = q.data.page.records || []) : q.data.data ? ((nt = q.data.data) != null && nt.records || ((Xe = q.data.data) == null ? void 0 : Xe.records) === null) && (s.value = ((ot = q.data.data) == null ? void 0 : ot.records) || []) : s.value = q.data, c.value = q.data.page && q.data.page.total || q.data.data && q.data.data.total || q.data.total || q.total || 0, c.value === 0 && r.value > 1 && s.value && s.value.length === 0 ? r.value = 1 : r.value > 1 && c.value <= (r.value - 1) * p.value && (r.value--, dt(function() {
            Ke(I, S);
          })), e("on-data-change", q), ne(q)) : (console.warn("请求返回数据有误，无法使用"), Ne(), e("on-data-change", q));
        }).catch((de) => {
          console.warn(de), Re(), Ne(), e("on-data-change", de);
        }) : console.warn("没有有效的请求地址，无法获取表格数据");
      });
    }
    function xe(I, S, fe) {
      n.radio && (I || n.rowClickNum !== -1) ? Ke(S, fe, I).then(() => {
        s.value.length > 0 && we(() => {
          var ne, de;
          I ? (ne = h.value) == null || ne.clickCurrentRow(A || 0) : (de = h.value) == null || de.clickCurrentRow(n.rowClickNum);
        }, 10);
      }) : Ke();
    }
    return We(k), i({
      selectedIds: ee,
      addRow: U,
      setRowData: j,
      deleteRow: Q,
      getSelected: ae,
      clearSelect: Re,
      clearTableData: Ne,
      getTableData: Ke,
      getDataAndClickRow: xe
    }), (I, S) => {
      const fe = D("Table"), ne = D("Page");
      return V(), P("div", ln, [
        ve(E("div", an, [
          Ce(I.$slots, "tableSetting"),
          Ce(I.$slots, "topMsg"),
          Ce(I.$slots, "topBtnGroup")
        ], 512), [
          [Ve, n.showTopRow]
        ]),
        E("div", {
          class: ge(["tableContainer fullHeight", { noTop: !n.showTopRow, noPage: n.noPage }])
        }, [
          E("div", nn, [
            E("div", on, [
              W(fe, St({
                ref_key: "tableRef",
                ref: h
              }, I.$attrs, {
                height: f(L) && rn || null,
                class: { noBorderTable: n.noBorderTable, fullHeightTable: !f(L), lightHeadO: n.lightHead },
                columns: f(B),
                data: f(x),
                "highlight-row": n.radio || n.highlightRow,
                onOnSelect: $,
                onOnSelectionChange: te,
                onOnSortChange: Ue,
                onOnRowClick: re
              }), null, 16, ["height", "class", "columns", "data", "highlight-row"])
            ], 512)
          ])
        ], 2),
        ve(E("div", sn, [
          W(ne, {
            modelValue: f(r),
            "onUpdate:modelValue": S[0] || (S[0] = (de) => Oe(r) ? r.value = de : null),
            "page-size-opts": f(d),
            total: f(c),
            "page-size": f(p),
            "show-sizer": "",
            "show-total": "",
            showElevator: !n.noElevator,
            size: n.pageComponentSize,
            onOnChange: be,
            onOnPageSizeChange: Me
          }, null, 8, ["modelValue", "page-size-opts", "total", "page-size", "showElevator", "size"])
        ], 512), [
          [Ve, !n.noPage]
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
    const e = l, n = K({
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
    }), u = K({
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
    })), d = K(() => ({ width: e.itemWidth + "px" }));
    function s(r) {
      r && r.target && r.target.value !== void 0 && p({
        key: n.value,
        val: r.target.value
      });
    }
    const p = Nl((r) => {
      i("on-change", r);
    }, 500);
    return (r, c) => {
      const m = D("Option"), g = D("Select"), A = D("Input");
      return V(), P("div", null, [
        W(g, {
          modelValue: f(n),
          "onUpdate:modelValue": c[0] || (c[0] = (w) => Oe(n) ? n.value = w : null),
          style: H(f(a)),
          disabled: !!e.disabled,
          transfer: ""
        }, {
          default: J(() => [
            (V(!0), P(pe, null, he(e.selectOption, (w, b) => (V(), z(m, {
              value: w.val,
              key: "selectInputOp" + w.value + b,
              style: H({ textAlign: e.labelTextAlign })
            }, {
              default: J(() => [
                Ae(Z(w.label), 1)
              ]),
              _: 2
            }, 1032, ["value", "style"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue", "style", "disabled"]),
        W(A, {
          modelValue: f(u),
          "onUpdate:modelValue": c[1] || (c[1] = (w) => Oe(u) ? u.value = w : null),
          placeholder: e.placeholder || f(C)("r.pInput"),
          style: H(f(d)),
          clearable: e.clearable,
          disabled: !!e.disabled,
          onOnChange: s
        }, null, 8, ["modelValue", "placeholder", "style", "clearable", "disabled"])
      ]);
    };
  }
});
var dn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function cn(l) {
  return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default") ? l.default : l;
}
var yl = { exports: {} };
(function(l, i) {
  (function(e, n) {
    l.exports = n();
  })(dn, function() {
    function e(m) {
      var g = [];
      return m.AMapUI && g.push(n(m.AMapUI)), m.Loca && g.push(u(m.Loca)), Promise.all(g);
    }
    function n(m) {
      return new Promise(function(g, A) {
        var w = [];
        if (m.plugins)
          for (var b = 0; b < m.plugins.length; b += 1)
            d.AMapUI.plugins.indexOf(m.plugins[b]) == -1 && w.push(m.plugins[b]);
        if (s.AMapUI === a.failed)
          A("前次请求 AMapUI 失败");
        else if (s.AMapUI === a.notload) {
          s.AMapUI = a.loading, d.AMapUI.version = m.version || d.AMapUI.version, b = d.AMapUI.version;
          var _ = document.body || document.head, L = document.createElement("script");
          L.type = "text/javascript", L.src = "https://webapi.amap.com/ui/" + b + "/main.js", L.onerror = function(F) {
            s.AMapUI = a.failed, A("请求 AMapUI 失败");
          }, L.onload = function() {
            if (s.AMapUI = a.loaded, w.length)
              window.AMapUI.loadUI(w, function() {
                for (var F = 0, B = w.length; F < B; F++) {
                  var x = w[F].split("/").slice(-1)[0];
                  window.AMapUI[x] = arguments[F];
                }
                for (g(); p.AMapUI.length; )
                  p.AMapUI.splice(0, 1)[0]();
              });
            else
              for (g(); p.AMapUI.length; )
                p.AMapUI.splice(0, 1)[0]();
          }, _.appendChild(L);
        } else
          s.AMapUI === a.loaded ? m.version && m.version !== d.AMapUI.version ? A("不允许多个版本 AMapUI 混用") : w.length ? window.AMapUI.loadUI(w, function() {
            for (var F = 0, B = w.length; F < B; F++) {
              var x = w[F].split("/").slice(-1)[0];
              window.AMapUI[x] = arguments[F];
            }
            g();
          }) : g() : m.version && m.version !== d.AMapUI.version ? A("不允许多个版本 AMapUI 混用") : p.AMapUI.push(function(F) {
            F ? A(F) : w.length ? window.AMapUI.loadUI(w, function() {
              for (var B = 0, x = w.length; B < x; B++) {
                var ee = w[B].split("/").slice(-1)[0];
                window.AMapUI[ee] = arguments[B];
              }
              g();
            }) : g();
          });
      });
    }
    function u(m) {
      return new Promise(function(g, A) {
        if (s.Loca === a.failed)
          A("前次请求 Loca 失败");
        else if (s.Loca === a.notload) {
          s.Loca = a.loading, d.Loca.version = m.version || d.Loca.version;
          var w = d.Loca.version, b = d.AMap.version.startsWith("2"), _ = w.startsWith("2");
          if (b && !_ || !b && _)
            A("JSAPI 与 Loca 版本不对应！！");
          else {
            b = d.key, _ = document.body || document.head;
            var L = document.createElement("script");
            L.type = "text/javascript", L.src = "https://webapi.amap.com/loca?v=" + w + "&key=" + b, L.onerror = function(F) {
              s.Loca = a.failed, A("请求 AMapUI 失败");
            }, L.onload = function() {
              for (s.Loca = a.loaded, g(); p.Loca.length; )
                p.Loca.splice(0, 1)[0]();
            }, _.appendChild(L);
          }
        } else
          s.Loca === a.loaded ? m.version && m.version !== d.Loca.version ? A("不允许多个版本 Loca 混用") : g() : m.version && m.version !== d.Loca.version ? A("不允许多个版本 Loca 混用") : p.Loca.push(function(F) {
            F ? A(F) : A();
          });
      });
    }
    if (!window)
      throw Error("AMap JSAPI can only be used in Browser.");
    var a;
    (function(m) {
      m.notload = "notload", m.loading = "loading", m.loaded = "loaded", m.failed = "failed";
    })(a || (a = {}));
    var d = { key: "", AMap: { version: "1.4.15", plugins: [] }, AMapUI: { version: "1.1", plugins: [] }, Loca: { version: "1.3.2" } }, s = { AMap: a.notload, AMapUI: a.notload, Loca: a.notload }, p = { AMap: [], AMapUI: [], Loca: [] }, r = [], c = function(m) {
      typeof m == "function" && (s.AMap === a.loaded ? m(window.AMap) : r.push(m));
    };
    return { load: function(m) {
      return new Promise(function(g, A) {
        if (s.AMap == a.failed)
          A("");
        else if (s.AMap == a.notload) {
          var w = m.key, b = m.version, _ = m.plugins;
          w ? (window.AMap && location.host !== "lbs.amap.com" && A("禁止多种API加载方式混用"), d.key = w, d.AMap.version = b || d.AMap.version, d.AMap.plugins = _ || d.AMap.plugins, s.AMap = a.loading, b = document.body || document.head, window.___onAPILoaded = function(F) {
            if (delete window.___onAPILoaded, F)
              s.AMap = a.failed, A(F);
            else
              for (s.AMap = a.loaded, e(m).then(function() {
                g(window.AMap);
              }).catch(A); r.length; )
                r.splice(0, 1)[0]();
          }, _ = document.createElement("script"), _.type = "text/javascript", _.src = "https://webapi.amap.com/maps?callback=___onAPILoaded&v=" + d.AMap.version + "&key=" + w + "&plugin=" + d.AMap.plugins.join(","), _.onerror = function(F) {
            s.AMap = a.failed, A(F);
          }, b.appendChild(_)) : A("请填写key");
        } else if (s.AMap == a.loaded)
          if (m.key && m.key !== d.key)
            A("多个不一致的 key");
          else if (m.version && m.version !== d.AMap.version)
            A("不允许多个版本 JSAPI 混用");
          else {
            if (w = [], m.plugins)
              for (b = 0; b < m.plugins.length; b += 1)
                d.AMap.plugins.indexOf(m.plugins[b]) == -1 && w.push(m.plugins[b]);
            w.length ? window.AMap.plugin(w, function() {
              e(m).then(function() {
                g(window.AMap);
              }).catch(A);
            }) : e(m).then(function() {
              g(window.AMap);
            }).catch(A);
          }
        else if (m.key && m.key !== d.key)
          A("多个不一致的 key");
        else if (m.version && m.version !== d.AMap.version)
          A("不允许多个版本 JSAPI 混用");
        else {
          var L = [];
          if (m.plugins)
            for (b = 0; b < m.plugins.length; b += 1)
              d.AMap.plugins.indexOf(m.plugins[b]) == -1 && L.push(m.plugins[b]);
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
      delete window.AMap, delete window.AMapUI, delete window.Loca, d = { key: "", AMap: { version: "1.4.15", plugins: [] }, AMapUI: { version: "1.1", plugins: [] }, Loca: { version: "1.3.2" } }, s = {
        AMap: a.notload,
        AMapUI: a.notload,
        Loca: a.notload
      }, p = { AMap: [], AMapUI: [], Loca: [] };
    } };
  });
})(yl);
var pn = yl.exports;
const fn = /* @__PURE__ */ cn(pn);
let It = { securityJsCode: "", key: "" };
function mn({ securityJsCode: l, key: i }) {
  It.securityJsCode = l, It.key = i;
}
function yn(l) {
  return It[l];
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
    const e = l, n = K({
      get() {
        let B;
        return e.modelValue ? e.modelValue.name ? B = se(e.modelValue) : B = {
          ...e.modelValue,
          name: null
        } : B = {
          name: null
        }, B;
      },
      set(B) {
        i("update:modelValue", se(B));
      }
    }), u = K(() => je(e.width) ? e.width + "px" : e.width), a = K(() => je(e.height) ? e.height + "px" : e.height ? e.height : je(e.width) ? e.width * 0.66 + "px" : "200px"), d = K(() => ({
      width: u.value,
      position: "relative"
    })), s = K(() => ({
      width: u.value,
      height: a.value,
      marginTop: "6px",
      opacity: e.showMap ? 1 : 0,
      position: e.showMap ? "relative" : "absolute",
      top: e.showMap ? 0 : "-10000px"
    }));
    ye(
      () => e.modelValue,
      (B) => {
        if (B && B.lng && B.lat) {
          if (!w || !b)
            return;
          L({
            lng: B.lng,
            lat: B.lat,
            name: B.name
          });
        }
      }
    );
    const p = "mapId" + Math.floor(Math.random() * 1e9), r = Y(null), c = Y(null);
    let m;
    function g() {
      c.value && c.value.clientHeight < 10 || !c.value ? we(g, 300) : we(_, 100);
    }
    let A, w, b;
    function _() {
      fn.load({
        key: yn("key"),
        version: "2.0",
        plugins: ["AMap.AutoComplete", "AMap.Geocoder"]
      }).then((B) => {
        A = B, w = new A.Map(p).on("complete", () => {
          var x, ee;
          b = new A.Geocoder(), e.modelValue && e.modelValue.lng && e.modelValue.lat && L({
            lng: e.modelValue.lng,
            lat: e.modelValue.lat,
            name: e.modelValue.name
          }), new A.AutoComplete({
            input: (ee = (x = r.value) == null ? void 0 : x.$el) == null ? void 0 : ee.children[1]
          }).on("select", (R) => {
            R && R.poi && R.poi.name && (R.poi.location && R.poi.location.lng && R.poi.location.lat ? (L({
              name: R.poi.name,
              lng: R.poi.location.lng,
              lat: R.poi.location.lat
            }), n.value = {
              name: R.poi.name,
              lng: R.poi.location.lng,
              lat: R.poi.location.lat
            }) : w.setCity(R.poi.name, () => {
              let h = w.getCenter();
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
          }), w.on("hotspotclick", (R) => {
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
    function L({ lng: B, lat: x, name: ee }) {
      w.clearMap();
      let R = new A.LngLat(B, x), h = new A.Marker({
        map: w,
        position: R,
        draggable: !0
      });
      w.add(h), F(B, x), h.on("dragend", () => {
        let ke = h.getPosition();
        n.value = {
          name: ee || null,
          lng: ke.lng,
          lat: ke.lat
        }, F(B, x);
      }), h.on("click", (ke) => {
        m && m.open(w, ke.target.getPosition());
      }), w.setFitView();
    }
    function F(B, x) {
      b.getAddress([B, x], (ee, R) => {
        ee === "complete" && R.info === "OK" && R.regeocode && R.regeocode.formattedAddress ? m = new A.InfoWindow({
          //创建信息窗体
          isCustom: !0,
          content: '<div class="mapInfoWindowIKJ">' + R.regeocode.formattedAddress + "</div>",
          offset: new A.Pixel(16, -45),
          closeWhenClickMap: !0
        }) : (m = null, console.warn("地图获取位置信息失败", R));
      });
    }
    return We(g), Ul(() => {
      w && (w.destroy(), w = null, b = null, m = null);
    }), (B, x) => (V(), P("div", {
      style: H(f(d)),
      class: "containerIKJ"
    }, [
      W(f(Wl), {
        ref_key: "mapInputRef",
        ref: r,
        modelValue: f(n).name,
        "onUpdate:modelValue": x[0] || (x[0] = (ee) => f(n).name = ee),
        class: ge({ mapInputIKJ: e.showMap }),
        placeholder: e.placeholder || f(C)("r.search"),
        disabled: e.disabled,
        icon: "ios-search"
      }, null, 8, ["modelValue", "class", "placeholder", "disabled"]),
      E("div", {
        style: H(f(s)),
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
    const e = l, n = Y([]), u = K({
      get() {
        let r = e.modelValue;
        return Array.isArray(r) ? se(r) : je(r) ? mt({
          group: n.value,
          condition: (c) => c.value === r,
          pathKey: "value"
        }) : Xt(r) ? r.split(e.separator) : [];
      },
      set(r) {
        if (e.onlyLastVal)
          Se(r) ? (i("update:modelValue", null), i("on-label-change", null)) : i("update:modelValue", ct(r));
        else {
          if ($l(e.modelValue, r))
            return;
          i("update:modelValue", se(r));
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
        r && r.data && r.data.records ? c = r.data.records : r && r.data ? c = r.data : r && (c = r), c ? (typeof e.optionFilter == "function" && O(e.optionFilter) === "Function" && (c = e.optionFilter(c)), n.value = d(c)) : console.warn("级联数据错误，不能使用");
      }).catch(() => {
        console.warn("拉取级联数据出错");
      });
    }
    function d(r) {
      let c = [];
      for (let m of r) {
        let g = {
          value: m[e.optionVal],
          label: m[e.optionLabel]
        };
        m.children && !Se(m.children) && (g.children = d(m.children)), c.push(g);
      }
      return c;
    }
    function s(r, c) {
      return e.onlyLastLabel ? ct(r) : r.join(e.separator);
    }
    function p(r, c) {
      let m = "";
      Se(c) || (m = c.map((g) => g.label).join(e.separator)), i("on-label-change", m);
    }
    return We(a), (r, c) => {
      const m = D("Cascader");
      return V(), z(m, {
        data: f(n),
        modelValue: f(u),
        "onUpdate:modelValue": c[0] || (c[0] = (g) => Oe(u) ? u.value = g : null),
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
    const e = l, n = Y(), u = K({
      get() {
        if (e.modelValue && (je(e.modelValue) || Xt(e.modelValue))) {
          let d = String(e.modelValue).trim();
          if (/^\d*$/.test(d)) {
            let p = d.substring(0, 2) + "0000", r, c = a(d);
            return c.length < 7 ? r = d.substring(0, 4) + "00" : r = d.substring(0, 6), /^8\d+$/.test(d) ? [p, c] : [p, r, c];
          }
          return d.indexOf(e.separator) !== -1 ? d.split(e.separator) : [d];
        } else
          return Array.isArray(e.modelValue) ? se(e.modelValue) : (n.value && (n.value.select = []), []);
      },
      set(d) {
        if (Se(d))
          i("update:modelValue", null), i("on-name-change", null);
        else {
          let s = ct(d), p = "", r = "";
          if (s && (p = s.code), p && p.length < 12) {
            let c = [...p];
            for (; c.length < 12; )
              c.push(0);
            p = c.join("");
          }
          if (Array.isArray(d) && (r = d.map((c) => c.name).join(e.separator)), p) {
            if (p === e.modelValue)
              return;
            i("update:modelValue", p);
          }
          r && i("on-name-change", r);
        }
      }
    });
    function a(d) {
      let s = [...d];
      for (; s[s.length - 1] === "0"; )
        s.pop();
      return s.join("");
    }
    return (d, s) => (V(), z(f(Zl), St(d.$attrs, {
      class: "alCascaderMC",
      ref_key: "alCRef",
      ref: n,
      modelValue: f(u),
      "onUpdate:modelValue": s[0] || (s[0] = (p) => Oe(u) ? u.value = p : null),
      level: e.level,
      disabled: e.disabled,
      placeholder: e.placeholder || f(C)("r.pSelect"),
      transfer: e.transfer,
      searchable: e.filterable
    }), null, 16, ["modelValue", "level", "disabled", "placeholder", "transfer", "searchable"]));
  }
});
function Ee(l) {
  var d;
  const i = (...s) => Le.apply(this, s), e = i("r.closePreview"), n = i("r.fullImg");
  let u = wt(document.getElementsByTagName("body")), a = document.createElement("div");
  a.setAttribute("class", "fullScreenImgByDom"), a.innerHTML = `<div class='previewInner'><img src='${l}' alt='${n}' ><i class='ivu-icon ivu-icon-md-close' title='${e}' ></i></div>`, (d = a.querySelector(".ivu-icon-md-close")) == null || d.addEventListener("click", function() {
    let s = wt(document.getElementsByTagName("body"));
    s && s.removeChild(a);
  }), u == null || u.appendChild(a);
}
const hn = { class: "previewBoxM" }, vn = {
  key: 0,
  class: "previewImg"
}, gn = ["src", "alt"], bn = { class: "deleteModal" }, wn = { class: "previewBoxM" }, kn = {
  key: 0,
  class: "previewImg"
}, Vn = ["src", "alt"], An = { class: "deleteModal" }, Cn = { class: "customFileListM" }, _n = {
  key: 0,
  class: "customFileListItem"
}, Bn = ["onClick", "title"], In = { class: "btBoxJ" }, xn = { class: "customFileListM" }, Sn = {
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
    const e = l, n = gt([]), u = gt([]), a = K(() => !e.manualUpload && e.showImg && r.value ? "img" : e.manualUpload && e.showImg && r.value ? "localImg" : e.manualUpload && e.showUploadList && (!e.showImg || !r.value) ? "localList" : !e.manualUpload && e.showUploadList && (!e.showImg || !r.value) ? "list" : ""), d = K(() => e.manualUpload ? "//jsonplaceholder.typicode.com/posts/" : e.url), s = K({
      get() {
        if (e.manualUpload)
          return p.value;
        {
          let k = [];
          for (let U of p.value)
            typeof U == "object" && O(U) === "File" ? k.push(U) : (typeof U == "number" || typeof U == "string") && k.push({
              response: {
                data: [
                  {
                    id: U
                  }
                ]
              }
            });
          return k;
        }
      },
      set(k) {
        var U;
        if (e.manualUpload)
          p.value = k;
        else {
          let j = [];
          for (let Q of k)
            (U = Q == null ? void 0 : Q.response) != null && U.data && Q.response.data[0] && Q.response.data[0].id && j.push(Q.response.data[0].id);
          p.value = j;
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
            return Array.isArray(e.modelValue) ? e.modelValue.filter((k) => k !== "--") : O(e.modelValue) === "File" ? [e.modelValue] : [];
          default:
            return [];
        }
      },
      set(k) {
        if (e.length === 1) {
          let U = wt(k);
          i("update:modelValue", U ?? null), i("on-change", U ?? null);
        } else
          i("update:modelValue", se(k)), i("on-change", se(k));
      }
    }), r = K(() => {
      let k;
      e.manualUpload ? k = s.value : k = u.value;
      for (let U of k) {
        let j;
        if (e.manualUpload ? j = U && U.type : j = U && U.mimeType, !j || j && !ut(j))
          return !1;
      }
      return !0;
    });
    ye(
      () => s.value,
      async (k) => {
        var U, j, Q, re, $;
        if (a.value === "localImg")
          k && k.length > 0 ? n.value = await m(k) : n.value = [];
        else if (k && k.length > 0 && a.value !== "localList") {
          let te = [];
          for (let ae of k)
            if (ae.name === void 0)
              if ((U = ae == null ? void 0 : ae.response) != null && U.data && ae.response.data[0] && ae.response.data[0].id) {
                let be = await Te.get(e.url + "/" + ae.response.data[0].id).catch(() => {
                  te.push({ name: C("r.file") + Et(k, ae) });
                }), Me = se(ae);
                Me.name = ((j = be == null ? void 0 : be.data) == null ? void 0 : j.returnValue) && be.data.returnValue[0] && ((Q = be.data.returnValue[0]) == null ? void 0 : Q.name) || C("r.file") + Et(k, ae), Me.mimeType = ((re = be == null ? void 0 : be.data) == null ? void 0 : re.returnValue) && be.data.returnValue[0] && (($ = be.data.returnValue[0]) == null ? void 0 : $.mimeType) || "unknown", te.push(Me);
              } else
                te.push({ name: C("r.unknown") });
            else
              te.push(ae);
          u.value = te;
        } else
          u.value = [];
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    function c(k) {
      return k.name || k.split && ct(k.split("/")) || k;
    }
    async function m(k) {
      let U = [];
      for (let j of k) {
        let Q = await rt(j);
        U.push(Q);
      }
      return U;
    }
    function g(k) {
      if (!e.disabled) {
        let U = s.value;
        U.splice(k, 1), s.value = U;
      }
    }
    function A(k) {
      k && k.response && k.response.data && k.response.data[0] && k.response.data[0].id && window.open(e.url + "/" + k.response.data[0].id + "/download");
    }
    function w(k) {
      var U, j;
      return e.manualUpload ? k.type && ut(k.type) : ((U = k == null ? void 0 : k.response) == null ? void 0 : U.data) && ((j = k.response.data[0]) == null ? void 0 : j.id) && k.mimeType && ut(k.mimeType);
    }
    function b(k) {
      e.manualUpload ? rt(k).then((U) => {
        Ee(U);
      }) : Ee(e.url + "/" + k.response.data[0].id + "/download?preview=true");
    }
    function _(k) {
      O(k) === "String" && k.indexOf("http") > -1 ? window.open(k) : O(k) === "File" && rt(k).then((U) => {
        tl(k.name, U);
      });
    }
    function L(k) {
      if (e.manualUpload) {
        if (k) {
          let U = Ot(k.name);
          if (e.format.length > 0 && e.format.indexOf(U) < 0)
            return Be(
              C("r.wrongFileType"),
              C("r.supportType") + (e.format.length > 0 && String(e.format) || C("r.none")),
              "warning"
            ), !1;
          if (e.maxSize && k.size > e.maxSize * 1024)
            return Be(C("r.fileIsBig"), C("r.supportSize") + e.maxSize + "kb", "warning"), !1;
          let j = s.value;
          j.push(k), s.value = j;
        }
        return !1;
      } else
        return !0;
    }
    function F(k) {
      console.warn(k), Be(C("r.uploadError"), "", "error");
    }
    function B(k, U, j) {
      if (k && k.code === 0) {
        let Q = s.value;
        Q.push(U), s.value = Q;
      } else
        Be(C("r.uploadFail"), k && k.message || "", "error");
    }
    function x() {
      Be(C("r.fileIsBig"), C("r.supportSize") + e.maxSize + " kb", "warning");
    }
    function ee() {
      Be(
        C("r.wrongFileType"),
        C("r.supportType") + (e.format.length > 0 && String(e.format) || C("r.none")),
        "warning"
      );
    }
    function R(k) {
      var Q, re, $, te;
      let U = ((Q = k == null ? void 0 : k.response) == null ? void 0 : Q.data) && ((re = k.response.data[0]) == null ? void 0 : re.id), j = (($ = k == null ? void 0 : k.response) == null ? void 0 : $.data) && ((te = k.response.data[0]) == null ? void 0 : te.mimeType);
      U && (O(j) === "String" && j.indexOf("image") > -1 ? Ee(e.url + "/" + U + "/download?preview=true") : window.open(e.url + "/" + U + "/download?preview=true"));
    }
    function h(k) {
      var j, Q;
      let U = ((j = k == null ? void 0 : k.response) == null ? void 0 : j.data) && ((Q = k.response.data[0]) == null ? void 0 : Q.id);
      ke(null, U);
    }
    function ke(k, U) {
      if (!e.disabled && p.value.indexOf(U) !== -1) {
        const j = se(p.value);
        let Q = s.value;
        Q.splice(j.indexOf(U), 1), s.value = Q;
      }
    }
    return (k, U) => {
      const j = D("Button"), Q = D("Upload"), re = D("Icon");
      return V(), P("div", null, [
        W(Q, {
          name: "files",
          action: f(d),
          "before-upload": L,
          "on-error": F,
          "on-success": B,
          "on-exceeded-size": x,
          "on-preview": R,
          "on-remove": h,
          "on-format-error": ee,
          data: e.data,
          "max-size": e.maxSize,
          "show-upload-list": !1,
          "with-credentials": e.withCredentials,
          format: e.format,
          multiple: e.multiple || !1,
          disabled: e.length > 0 && f(s).length >= e.length || !!e.disabled
        }, {
          default: J(() => [
            W(j, {
              icon: "ios-cloud-upload-outline",
              class: ge({ disabledR: e.length > 0 && f(s).length >= e.length || !!e.disabled })
            }, {
              default: J(() => [
                Ae(Z(f(C)("r.selectFile")), 1)
              ]),
              _: 1
            }, 8, ["class"])
          ]),
          _: 1
        }, 8, ["action", "data", "max-size", "with-credentials", "format", "multiple", "disabled"]),
        ve(E("div", hn, [
          (V(!0), P(pe, null, he(f(p), ($) => (V(), P(pe, { key: $ }, [
            !e.manualUpload && $ !== null ? (V(), P("div", vn, [
              E("img", {
                src: k.url + "/" + $ + "/download?preview=true",
                alt: $
              }, null, 8, gn),
              E("div", bn, [
                W(re, {
                  type: "ios-expand",
                  size: "40",
                  class: "previewExpand",
                  title: f(C)("r.fView"),
                  onClick: (te) => f(Ee)(e.url + "/" + $ + "/download?preview=true")
                }, null, 8, ["title", "onClick"]),
                W(re, {
                  type: "ios-trash-outline",
                  size: "40",
                  class: "previewDelete",
                  onClick: (te) => ke(te, $),
                  title: f(C)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : le("", !0)
          ], 64))), 128))
        ], 512), [
          [Ve, f(a) === "img" && f(p).length > 0]
        ]),
        ve(E("div", wn, [
          (V(!0), P(pe, null, he(f(n), ($, te) => (V(), P(pe, {
            key: "manualImg" + te
          }, [
            e.manualUpload && $ !== null ? (V(), P("div", kn, [
              E("img", {
                src: $,
                alt: "manualImg" + te
              }, null, 8, Vn),
              E("div", An, [
                W(re, {
                  type: "ios-expand",
                  size: "40",
                  class: "previewExpand",
                  onClick: (ae) => f(Ee)($),
                  title: f(C)("r.fView")
                }, null, 8, ["onClick", "title"]),
                W(re, {
                  type: "ios-trash-outline",
                  size: "40",
                  class: "previewDelete",
                  onClick: (ae) => g(te),
                  title: f(C)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : le("", !0)
          ], 64))), 128))
        ], 512), [
          [Ve, f(a) === "localImg" && f(n).length > 0]
        ]),
        ve(E("div", Cn, [
          (V(!0), P(pe, null, he(f(s), ($, te) => (V(), P(pe, {
            key: "manualItem" + te
          }, [
            e.manualUpload && $ !== null ? (V(), P("p", _n, [
              $.name ? (V(), z(re, {
                key: 0,
                type: f(Vt)($.name)
              }, null, 8, ["type"])) : le("", !0),
              E("span", {
                class: ge(["upNameT", { previewName: w($) }]),
                onClick: (ae) => _($),
                title: f(C)("r.download")
              }, Z(c($)), 11, Bn),
              E("span", In, [
                w($) ? (V(), z(re, {
                  key: 0,
                  type: "md-qr-scanner",
                  size: "14",
                  class: "listBtH",
                  onClick: (ae) => b($),
                  title: f(C)("r.fView")
                }, null, 8, ["onClick", "title"])) : le("", !0),
                W(re, {
                  type: "ios-close",
                  size: "22",
                  class: "listBtH",
                  onClick: (ae) => g(te),
                  title: f(C)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : le("", !0)
          ], 64))), 128))
        ], 512), [
          [Ve, f(a) === "localList" && f(s).length > 0]
        ]),
        ve(E("div", xn, [
          (V(!0), P(pe, null, he(f(u), ($, te) => (V(), P(pe, {
            key: "defaultItem" + te
          }, [
            !e.manualUpload && $ !== null ? (V(), P("p", Sn, [
              W(re, {
                type: f(Vt)($.name)
              }, null, 8, ["type"]),
              E("span", {
                class: ge(["upNameT", { previewName: w($) }]),
                onClick: (ae) => A($),
                title: f(C)("r.download")
              }, Z($.name || f(C)("r.file") + (te + 1)), 11, On),
              E("span", Mn, [
                w($) ? (V(), z(re, {
                  key: 0,
                  type: "md-qr-scanner",
                  size: "14",
                  class: "listBtH",
                  onClick: (ae) => b($),
                  title: f(C)("r.fView")
                }, null, 8, ["onClick", "title"])) : le("", !0),
                W(re, {
                  type: "ios-close",
                  size: "22",
                  class: "listBtH",
                  onClick: (ae) => g(te),
                  title: f(C)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : le("", !0)
          ], 64))), 128))
        ], 512), [
          [Ve, f(a) === "list" && f(u).length > 0]
        ])
      ]);
    };
  }
}), Tn = /* @__PURE__ */ E("div", { class: "bRoot" }, null, -1), wl = /* @__PURE__ */ oe({
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
    const e = l, n = Y(!1), u = Y(!1), a = Y(!1), d = K({
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
        i("update:modelValue", [d.value, b]), i("on-change", [d.value, b]);
      }
    }), p = K(
      () => (d.value || "") + ((d.value || s.value) && " - " || "") + (s.value || "")
    ), r = Y();
    We(() => {
      r.value.querySelector(".aRoot .ivu-input-suffix").addEventListener("mouseover", () => {
        a.value = !0;
      }), r.value.querySelector(".aRoot .ivu-input-suffix").addEventListener("mouseout", () => {
        a.value = !1;
      }), r.value.querySelector(".aRoot .ivu-input-suffix").addEventListener("click", (b) => {
        !e.disabled && (d.value || s.value) && (b.stopPropagation(), A());
      });
    });
    function c() {
      e.disabled || (n.value = !0);
    }
    function m(b) {
      d.value = b, n.value = !1, u.value = !0;
    }
    function g(b) {
      s.value = b, u.value = !1;
    }
    function A() {
      i("update:modelValue", [null, null]), i("on-change", [null, null]);
    }
    function w() {
      n.value = !1, u.value = !1, d.value && s.value === null && (d.value = null);
    }
    return (b, _) => {
      const L = D("DatePicker"), F = D("Icon"), B = D("Input");
      return V(), P("div", {
        class: "monthRangeBoxR",
        ref_key: "mPickerRef",
        ref: r
      }, [
        W(L, {
          open: f(u),
          modelValue: f(s),
          transfer: "",
          type: "month",
          placement: e.placement,
          options: e.options2,
          onOnChange: g,
          onOnClickoutside: w
        }, {
          default: J(() => [
            Tn
          ]),
          _: 1
        }, 8, ["open", "modelValue", "placement", "options"]),
        W(L, {
          open: f(n),
          modelValue: f(d),
          transfer: "",
          type: "month",
          placement: e.placement,
          options: e.options1,
          onOnChange: m,
          onOnClickoutside: w
        }, {
          default: J(() => [
            E("div", { onClick: c }, [
              W(B, {
                class: "aRoot",
                modelValue: f(p),
                "onUpdate:modelValue": _[0] || (_[0] = (x) => Oe(p) ? p.value = x : null),
                readonly: "",
                placeholder: e.placeholder || f(C)("r.selectDate"),
                disabled: e.disabled
              }, {
                suffix: J(() => [
                  W(F, {
                    type: f(a) && (f(d) || f(s)) && !e.disabled ? "ios-close-circle" : "ios-calendar-outline"
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
}), Ln = { class: "editor-pro-root" }, kl = /* @__PURE__ */ oe({
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
    const e = l, n = gt(), u = K({
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
    ), d = K(
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
                }).then((w) => {
                  if (w && w.data)
                    if (Array.isArray(w.data))
                      for (let b of w.data) {
                        const _ = A + "/" + b.id + "/download";
                        c(_, g, _);
                      }
                    else {
                      const b = A + "/" + w.data.id + "/download";
                      c(b, g, b);
                    }
                }).catch(() => {
                  Be(C("r.uploadFail"), "", "error");
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
                      for (let w of A.data) {
                        const b = g + "/" + w.id + "/download";
                        c(b);
                      }
                    else {
                      const w = g + "/" + A.data.id + "/download";
                      c(w);
                    }
                }).catch(() => {
                  Be(C("r.uploadFail"), "", "error");
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
    ), Kl(() => {
      n.value && n.value.destroy();
    }), (r, c) => (V(), P("div", Ln, [
      ve(W(f(Ql), {
        class: "editor-pro-toolbar",
        editor: f(n),
        defaultConfig: f(a),
        mode: r.mode
      }, null, 8, ["editor", "defaultConfig", "mode"]), [
        [Ve, !r.disabled]
      ]),
      W(f(ea), {
        class: "editor-pro-editor",
        modelValue: f(u),
        "onUpdate:modelValue": c[0] || (c[0] = (m) => Oe(u) ? u.value = m : null),
        defaultConfig: f(d),
        mode: r.mode,
        onOnCreated: p,
        style: H(f(s))
      }, null, 8, ["modelValue", "defaultConfig", "mode", "style"])
    ]));
  }
}), Un = { key: 1 }, Kn = { key: 2 }, Pn = {
  key: 19,
  class: "formInfoTxtXN"
}, Fn = {
  key: 20,
  class: "formTitleTxtXN"
}, Gt = /* @__PURE__ */ oe({
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
    function u(r, c) {
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
    function d(r) {
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
      const m = D("InputNumber"), g = D("Input"), A = D("Option"), w = D("Select"), b = D("Radio"), _ = D("Icon"), L = D("RadioGroup"), F = D("Checkbox"), B = D("CheckboxGroup"), x = D("DatePicker"), ee = D("TimePicker"), R = D("FormItem");
      return V(), z(R, {
        label: e.item.type !== "radio" && e.item.type !== "checkbox" ? e.item.label : " ",
        prop: e.item.key || "",
        class: ge(["relativeBox", n(e.item)])
      }, {
        default: J(() => [
          e.item.type === "txt" ? (V(), P("div", {
            key: 0,
            style: H([e.itemStyle, { display: "inline-block" }]),
            class: ge({ likeInputX: e.item.likeInput, disabled: !!e.item.disabled || e.disabled })
          }, Z(e.item.valKey ? e.valGroup[e.item.valKey] || "无" : e.item.val), 7)) : e.item.type === "inputNumber" ? (V(), z(m, {
            key: 1,
            style: H(e.itemStyle),
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
            onOnBlur: c[1] || (c[1] = (h) => u(h, e.item)),
            "active-change": !!e.item.activeChange,
            clearable: e.item.clearable !== !1
          }, null, 8, ["style", "modelValue", "max", "min", "precision", "step", "placeholder", "disabled", "readonly", "editable", "active-change", "clearable"])) : e.item.type === "input" ? (V(), z(g, {
            key: 2,
            style: H(r.itemStyle),
            modelValue: e.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[2] || (c[2] = (h) => e.tempKeys[e.item.tempKey] = h),
            maxlength: e.item.maxLength || null,
            password: !!e.item.password,
            icon: e.item.icon,
            prefix: e.item.prefix,
            suffix: e.item.suffix,
            placeholder: e.item.placeholder || f(C)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            onOnBlur: c[3] || (c[3] = (h) => u(h, e.item)),
            clearable: e.item.clearable !== !1
          }, {
            default: J(() => [
              e.item.slotPosition && e.item.slotName ? Ce(r.$slots, e.item.slotName, { key: 0 }) : le("", !0),
              e.item.slotPosition !== "prepend" && e.item.prepend ? (V(), P("span", Un, Z(e.item.prepend), 1)) : le("", !0),
              e.item.slotPosition !== "append" && e.item.append ? (V(), P("span", Kn, Z(e.item.append), 1)) : le("", !0)
            ]),
            _: 3
          }, 8, ["style", "modelValue", "maxlength", "password", "icon", "prefix", "suffix", "placeholder", "disabled", "clearable"])) : e.item.type === "select" ? (V(), z(w, {
            key: 3,
            modelValue: r.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[4] || (c[4] = (h) => r.tempKeys[e.item.tempKey] = h),
            style: H(r.itemStyle),
            filterable: e.item.filterable === !0 || e.item.filterable === !1 ? e.item.filterable : !1,
            disabled: !!e.item.disabled || e.disabled,
            multiple: !!e.item.multiple,
            placeholder: e.item.placeholder || f(C)("r.pSelect"),
            onOnChange: c[5] || (c[5] = (h) => u(h, e.item)),
            transfer: "",
            clearable: e.item.clearable !== !1
          }, {
            default: J(() => [
              (V(!0), P(pe, null, he(e.item.options, (h, ke) => (V(), z(A, {
                value: h.val,
                label: h.label || h.val,
                key: "option-" + e.item.key + ke,
                disabled: !!h.disabled
              }, null, 8, ["value", "label", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["modelValue", "style", "filterable", "disabled", "multiple", "placeholder", "clearable"])) : e.item.type === "selectInput" ? (V(), z(ml, {
            key: 4,
            modelValue: r.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[6] || (c[6] = (h) => r.tempKeys[e.item.tempKey] = h),
            "label-width": r.labelWidth,
            "item-width": r.itemWidth,
            "select-option": e.item.options || [],
            placeholder: e.item.placeholder || f(C)("r.pInput"),
            clearable: e.item.clearable !== !1,
            disabled: !!e.item.disabled || e.disabled,
            onOnChange: d
          }, null, 8, ["modelValue", "label-width", "item-width", "select-option", "placeholder", "clearable", "disabled"])) : e.item.type === "alCascader" ? (V(), z(gl, {
            key: 5,
            style: H(r.itemStyle),
            class: "inlineBlock",
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": c[7] || (c[7] = (h) => e.valGroup[e.item.key] = h),
            level: e.item.level || e.item.level === 0 ? e.item.level : 2,
            disabled: !!e.item.disabled || e.disabled,
            filterable: e.item.filterable !== !1,
            placeholder: e.item.placeholder || f(C)("r.pSelect"),
            "change-on-select": !!e.item.changeOnSelect,
            onOnNameChange: c[8] || (c[8] = (h) => s(h, e.item))
          }, null, 8, ["style", "modelValue", "level", "disabled", "filterable", "placeholder", "change-on-select"])) : e.item.type === "asyncCascader" ? (V(), z(vl, {
            key: 6,
            style: H(r.itemStyle),
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
          }, null, 8, ["style", "modelValue", "url", "option-val", "option-label", "option-filter", "only-last-val", "only-last-label", "separator", "placeholder", "filterable", "disabled"])) : e.item.type === "radio" ? (V(), z(b, {
            key: 7,
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": c[11] || (c[11] = (h) => e.valGroup[e.item.key] = h),
            disabled: !!e.item.disabled || e.disabled,
            onOnChange: c[12] || (c[12] = (h) => u(h, e.item))
          }, {
            default: J(() => [
              Ae(Z(e.item.label), 1)
            ]),
            _: 1
          }, 8, ["modelValue", "disabled"])) : e.item.type === "radioGroup" ? (V(), z(L, {
            key: 8,
            style: H(r.itemStyle),
            onOnChange: c[13] || (c[13] = (h) => a(h, e.item)),
            type: e.item.buttonType ? "button" : null,
            modelValue: r.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[14] || (c[14] = (h) => r.tempKeys[e.item.tempKey] = h)
          }, {
            default: J(() => [
              (V(!0), P(pe, null, he(e.item.options, (h) => (V(), z(b, {
                key: "radioItem" + h.val,
                label: h.val,
                border: !!e.item.itemBorder,
                disabled: !!e.item.disabled || e.disabled || h.disabled
              }, {
                default: J(() => [
                  h.icon && !e.item.buttonType ? (V(), z(_, {
                    key: 0,
                    type: h.icon
                  }, null, 8, ["type"])) : le("", !0),
                  E("span", null, Z(h.label || h.val), 1)
                ]),
                _: 2
              }, 1032, ["label", "border", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["style", "type", "modelValue"])) : e.item.type === "checkbox" ? (V(), z(F, {
            key: 9,
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": c[15] || (c[15] = (h) => e.valGroup[e.item.key] = h),
            disabled: !!e.item.disabled,
            onOnChange: c[16] || (c[16] = (h) => u(h, e.item))
          }, {
            default: J(() => [
              Ae(Z(e.item.label), 1)
            ]),
            _: 1
          }, 8, ["modelValue", "disabled"])) : e.item.type === "checkboxGroup" ? (V(), z(B, {
            key: 10,
            style: H(r.itemStyle),
            modelValue: r.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[17] || (c[17] = (h) => r.tempKeys[e.item.tempKey] = h),
            onOnChange: c[18] || (c[18] = (h) => a(h, e.item))
          }, {
            default: J(() => [
              (V(!0), P(pe, null, he(e.item.options, (h) => (V(), z(F, {
                key: "checkItem" + h.val,
                label: h.val,
                disabled: !!e.item.disabled || e.disabled || h.disabled
              }, {
                default: J(() => [
                  h.icon ? (V(), z(_, {
                    key: 0,
                    type: h.icon
                  }, null, 8, ["type"])) : le("", !0),
                  E("span", null, Z(h.label || (h == null ? void 0 : h.val)), 1)
                ]),
                _: 2
              }, 1032, ["label", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["style", "modelValue"])) : e.item.type === "textarea" ? (V(), z(g, {
            key: 11,
            type: "textarea",
            modelValue: r.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[19] || (c[19] = (h) => r.tempKeys[e.item.tempKey] = h),
            autosize: e.item.autosize || { minRows: 2 },
            style: H(r.itemStyle),
            maxlength: e.item.maxLength || null,
            "show-word-limit": !!e.item.showWordLimit,
            placeholder: e.item.placeholder || f(C)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            onOnBlur: c[20] || (c[20] = (h) => u(h, e.item)),
            clearable: e.item.clearable !== !1
          }, null, 8, ["modelValue", "autosize", "style", "maxlength", "show-word-limit", "placeholder", "disabled", "clearable"])) : e.item.type === "upload" ? (V(), z(bl, {
            key: 12,
            style: H(r.itemStyle),
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
          }, null, 8, ["style", "modelValue", "url", "manual-upload", "format", "data", "max-size", "show-img", "length", "disabled", "with-credentials"])) : e.item.type === "date" ? (V(), z(x, {
            key: 13,
            style: H(r.itemStyle),
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
            onOnChange: c[24] || (c[24] = (h) => u(h, e.item))
          }, null, 8, ["style", "modelValue", "type", "disabled", "placeholder", "options", "clearable"])) : e.item.type === "time" ? (V(), z(ee, {
            key: 14,
            style: H(r.itemStyle),
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
            onOnChange: c[26] || (c[26] = (h) => u(h, e.item))
          }, null, 8, ["style", "modelValue", "type", "disabled", "placeholder", "steps", "clearable", "format"])) : e.item.type === "monthRange" ? (V(), z(wl, {
            key: 15,
            style: H(r.itemStyle),
            modelValue: r.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[27] || (c[27] = (h) => r.tempKeys[e.item.tempKey] = h),
            disabled: !!e.item.disabled || e.disabled,
            placement: "bottom-end",
            placeholder: e.item.placeholder || f(C)("r.selectDate"),
            options1: e.item.dateOptions1 || null,
            options2: e.item.dateOptions2 || null,
            onOnChange: c[28] || (c[28] = (h) => u(h, e.item))
          }, null, 8, ["style", "modelValue", "disabled", "placeholder", "options1", "options2"])) : e.item.type === "editorPro" ? (V(), z(kl, {
            key: 16,
            class: "inlineBlock",
            style: H(r.itemStyle),
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": c[29] || (c[29] = (h) => e.valGroup[e.item.key] = h),
            placeholder: e.item.placeholder || f(C)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            "toolbar-config": e.item.toolbarConfig || {},
            "editor-config": e.item.editorConfig || {},
            mode: e.item.mode || "simple",
            height: e.item.height || 300,
            onInput: c[30] || (c[30] = (h) => u(h, e.item))
          }, null, 8, ["style", "modelValue", "placeholder", "disabled", "toolbar-config", "editor-config", "mode", "height"])) : e.item.type === "inputMap" ? (V(), z(hl, {
            key: 17,
            modelValue: r.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[31] || (c[31] = (h) => r.tempKeys[e.item.tempKey] = h),
            style: H(r.itemStyle),
            placeholder: e.item.placeholder || f(C)("r.search"),
            disabled: !!e.item.disabled || e.disabled,
            "show-map": e.item.showMap !== !1,
            height: e.item.mapHeight || "250px",
            onOnChange: c[32] || (c[32] = (h) => u(h, e.item))
          }, null, 8, ["modelValue", "style", "placeholder", "disabled", "show-map", "height"])) : e.item.type === "custom" ? (V(), P("div", {
            key: 18,
            class: "inlineBlock",
            style: H(r.itemStyle)
          }, [
            Ce(r.$slots, e.item.slotName, {
              valGroup: e.valGroup
            })
          ], 4)) : le("", !0),
          e.item.info ? (V(), P("div", Pn, Z(e.item.info), 1)) : le("", !0),
          e.item.title ? (V(), P("div", Fn, Z(e.item.title), 1)) : le("", !0)
        ]),
        _: 3
      }, 8, ["label", "prop", "class"]);
    };
  }
}), Rn = /* @__PURE__ */ E("input", { type: "text" }, null, -1), En = { class: "inlineBlock" }, Vl = /* @__PURE__ */ oe({
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
    var Ft, Rt;
    const n = l, u = Y(null), a = Y({}), d = Y([]), s = Y({});
    let p = [];
    const r = ((Ft = window == null ? void 0 : window.g) == null ? void 0 : Ft.mgrURL) ?? null;
    let c = [], m = [];
    const g = Y(!1), A = Y(Math.random() * 1e8 + 1e3), w = (Rt = window == null ? void 0 : window.g) != null && Rt.mgrURL ? window.g.mgrURL + "/web/v1/fsc/file" : "/file";
    let b = !1;
    const _ = K(() => Array.isArray(n.formData.length ? n.formData[0] : !1)), L = K(
      () => n.inline ? {
        width: n.itemWidth + n.labelWidth + "px"
      } : {}
    ), F = K(
      () => n.inline ? {
        width: "100%"
      } : { width: n.contentWidth }
    ), B = K(() => {
      let o = se(n.formRules);
      for (let t in o)
        if (o.hasOwnProperty(t))
          if (Array.isArray(o[t]))
            for (let v of o[t])
              v.message || v.validator || (v.message = C("r.required"));
          else
            O(o[t]) === "Object" && (o[t].message || o[t].validator || (o[t].message = C("r.required")));
      return o;
    }), x = K(() => {
      let o = [];
      if (_.value)
        for (let t of d.value)
          h(t, o);
      else
        h(d.value, o);
      return o.concat(c, m);
    }), ee = K(() => {
      let o = [];
      if (_.value)
        for (let t of d.value)
          ke(t, o);
      else
        ke(d.value, o);
      return o;
    });
    function R(o) {
      return o.filter((t) => t.slotName);
    }
    function h(o, t) {
      for (let v of o)
        if (v.showing === !0 && v.key && v.type !== "selectInput" && (t.push(v.key), v.key2 && t.push(v.key2), v.collectLabel)) {
          if (!Array.isArray(v.collectLabel) && v.collectLabel.key)
            t.push(v.collectLabel.key);
          else if (Array.isArray(v.collectLabel))
            for (let y of v.collectLabel)
              y.key && t.push(y.key);
        }
    }
    function ke(o, t) {
      for (let v of o)
        v.showing === !0 && v.key && v.type !== "selectInput" && t.push(v.key);
    }
    function k() {
      return new Promise((o) => {
        Q(), j().then(() => {
          e("on-reset"), o(!0);
        });
      });
    }
    function U() {
      return new Promise((o) => {
        for (let t of p)
          t();
        p = [], s.value = {}, S(), Ne(), j().then(() => {
          e("on-re-render"), o(!0);
        });
      });
    }
    function j() {
      return new Promise((o) => {
        A.value = Math.floor(Math.random() * 1e8 + 1e3), dt(function() {
          o(!0);
        });
      });
    }
    function Q() {
      let o = te();
      for (let t in a.value)
        if (a.value.hasOwnProperty(t))
          if (ue(o[t]))
            a.value[t] = o[t];
          else if (Array.isArray(a.value[t]))
            a.value[t] = [];
          else if (O(a.value[t]) === "Boolean")
            a.value[t] = !1;
          else {
            const v = De(n.formData, (y) => y.key === t);
            v && (v.type === "editor" || v.type === "editorPro") ? a.value[t] = "" : a.value[t] = null;
          }
      re(o);
    }
    function re(o) {
      for (let t in s.value)
        s.value.hasOwnProperty(t) && (ue(o[t]) ? s.value[t] = o[t] : Array.isArray(s.value[t]) ? s.value[t] = [] : O(s.value[t]) === "Object" && s.value[t].hasOwnProperty("key") && s.value[t].hasOwnProperty("val") ? s.value[t].val = null : s.value[t] = null);
    }
    function $(o) {
      let t = te();
      ue(t[o]) ? s.value[o] = t[o] : Array.isArray(s.value[o]) ? s.value[o] = [] : s.value[o] = null;
    }
    function te() {
      let o = {};
      if (_.value)
        for (let t of d.value)
          ae(t, o);
      else
        ae(d.value, o);
      return o;
    }
    function ae(o, t) {
      for (let v of o)
        v.tempKey && ue(v.defaultVal) && Re(v, t), v.key && ue(v.defaultVal) && (t[v.key] = v.defaultVal), v.key2 && ue(v.defaultVal2) && (t[v.key2] = v.defaultVal2);
    }
    function be(o) {
      if (o.show) {
        if (O(o.show) === "Object")
          return Ue(o, Me(o.show));
        if (Array.isArray(o.show))
          if (o.showOr) {
            for (let t of o.show)
              if (Me(t) === !0)
                return Ue(o, !0);
            return Ue(o, !1);
          } else {
            for (let t of o.show)
              if (Me(t) === !1)
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
        for (let t of o.val) {
          if ((a.value[o.key] || a.value[o.key] === 0 || a.value[o.key] === !1) && t === ".")
            return !0;
          if (a.value[o.key] === t)
            return !0;
        }
        return !1;
      } else
        return !1;
    }
    function Ue(o, t) {
      return !o.showing && t && o.key ? (o.showing = t, o.defaultVal !== void 0 && (o.tempKey ? (s.value[o.tempKey] === null || s.value[o.tempKey] === void 0 || (O(s.value[o.tempKey]) === "Object" || Array.isArray(s.value[o.tempKey])) && Se(s.value[o.tempKey])) && Re(o, s.value) : (a.value[o.key] === null || a.value[o.key] === void 0) && (a.value[o.key] = o.defaultVal), o.key2 && o.deafultVal2 !== void 0 && (a.value[o.key2] === null || a.value[o.key2] === void 0) && o.type !== "inputMap" && (a.value[o.key2] = o.defaultVal2)), o.tempKey && ne(s.value[o.tempKey], o)) : o.showing = t, t;
    }
    function Re(o, t) {
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
    function Ne() {
      let o = se(n.formData);
      if (_.value)
        for (let t of o)
          Ke(t);
      else
        Ke(o);
      d.value = o;
    }
    function Ke(o) {
      for (let t of o)
        switch (t.type) {
          case "selectInput":
            const v = "selectInput" + Math.floor(Math.random() * 1e8);
            t.tempKey = v, s.value[v] = {
              key: t.key || null,
              val: t.defaultVal || null
            }, p.push(
              ye(
                () => s.value[v],
                (T) => {
                  ne(T, t);
                },
                { immediate: !0 }
              )
            );
            break;
          case "inputMap":
            const y = "inputMap" + Math.floor(Math.random() * 1e8);
            t.key && (t.tempKey = y, t.key3 ? s.value[y] = t.defaultVal !== void 0 && t.defaultVal2 !== void 0 ? {
              lng: t.defaultVal,
              lat: t.defaultVal2,
              name: t.defaultVal3 || ""
            } : {
              lng: null,
              lat: null,
              name: null
            } : s.value[y] = t.defaultVal !== void 0 && t.defaultVal2 !== void 0 ? {
              lng: t.defaultVal,
              lat: t.defaultVal2
            } : {
              lng: null,
              lat: null
            }, p.push(
              ye(
                () => s.value[y],
                (T) => {
                  ne(T, t);
                },
                { immediate: !0 }
              )
            ));
            break;
          case "input":
          case "inputNumber":
          case "textarea":
            const G = "inputT" + Math.floor(Math.random() * 1e8);
            t.key && (t.tempKey = G, s.value[G] = t.defaultVal !== void 0 ? t.defaultVal : null, p.push(
              ye(
                () => s.value[G],
                (T) => {
                  ne(T, t);
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
                  let T = !0;
                  for (let X of t.changeOption)
                    if (!X.valKey || !X.key) {
                      T = !1;
                      break;
                    }
                  T ? p.push(
                    ye(
                      () => {
                        let X = "";
                        if (Array.isArray(t.changeOption))
                          for (let ce of t.changeOption) {
                            let _e = a.value[ce.valKey];
                            if (_e || _e === 0 || _e === !1)
                              X += "&" + ce.key + "=" + _e;
                            else if (!ce.notRequired)
                              return !1;
                          }
                        return X;
                      },
                      (X) => {
                        let ce = se(s.value[t.tempKey]);
                        if (s.value[t.tempKey] = null, X && t.optionUrl) {
                          let _e = t.optionUrl.indexOf("?") !== -1 ? t.optionUrl : t.optionUrl + "?";
                          xe((_e + X).replace(/\?&/, "?"), t, ce);
                        } else
                          t.options = [], t.localOption && (t.options = [...t.localOption]), ue(ce) && I(ce, t);
                      },
                      {
                        immediate: !0
                      }
                    )
                  ) : (t.options = [], t.localOption && (t.options = [...t.localOption]));
                } else
                  typeof t.changeOption == "object" ? t.changeOption.valKey && t.changeOption.key && p.push(
                    ye(
                      () => typeof t.changeOption == "object" && !Array.isArray(t.changeOption) ? a.value[t.changeOption.valKey] : !1,
                      (T) => {
                        let X = se(s.value[t.tempKey]);
                        if (s.value[t.tempKey] = null, (T || T === 0 || T === !1) && t.optionUrl && typeof t.changeOption == "object" && !Array.isArray(t.changeOption)) {
                          let ce = t.optionUrl.indexOf("?") !== -1 ? t.optionUrl : t.optionUrl + "?";
                          xe((ce + "&" + t.changeOption.key + "=" + T).replace(/\?&/, "?"), t, X);
                        } else
                          t.options = [], t.localOption && (t.options = [...t.localOption]), ue(X) && I(X, t);
                      },
                      { immediate: !0 }
                    )
                  ) : O(t.changeOption) === "Boolean" && p.push(
                    ye(
                      () => De(n.formData, (T) => T.key === t.key).optionUrl,
                      (T) => {
                        let X = se(s.value[t.tempKey]);
                        s.value[t.tempKey] = null, T ? xe(T, t, X) : (t.options = [], t.localOption && (t.options = [...t.localOption]), ue(X) && I(X, t));
                      },
                      {
                        immediate: !0
                      }
                    )
                  );
              else
                t.optionUrl && xe(t.optionUrl, t);
            else
              O(t.borrowOption) === "String" && (t.options = De(d.value, (T) => T.key === t.borrowOption).options);
            const M = "opEle" + Math.floor(Math.random() * 1e8);
            t.key && (t.tempKey = M, t.type === "select" && t.multiple || t.type === "checkboxGroup" ? s.value[M] = t.defaultVal !== void 0 ? t.defaultVal : [] : t.booleanVal ? s.value[M] = t.defaultVal !== void 0 ? t.defaultVal ? 1 : 0 : null : s.value[M] = t.defaultVal !== void 0 ? t.defaultVal : null, p.push(
              ye(
                () => s.value[M],
                (T) => {
                  ne(T, t);
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
            t.tempKey = N, t.dateType === "date" || t.dateType === "datetime" || t.dateType === "time" || t.dateType === "year" || t.dateType === "month" ? s.value[N] = t.defaultVal || null : (t.dateType === "daterange" || t.dateType === "datetimerange" || t.dateType === "timerange" || t.type === "monthRange") && (s.value[N] = t.defaultVal && t.defaultVal2 && [t.defaultVal, t.defaultVal2] || []), p.push(
              ye(
                () => s.value[N],
                (T) => {
                  ne(T, t);
                }
              )
            );
            break;
        }
    }
    function xe(o, t, v) {
      Te.get(o).then((y) => {
        if (!t.options)
          return;
        let G = y && y.data && y.data.records || y && y.data || y || [];
        Array.isArray(G) ? (t.optionFilter && O(t.optionFilter) === "Function" && (G = t.optionFilter(G)), t.optionLabel && t.optionVal ? (t.options.length = 0, t.options.push(
          ...G.map((M) => {
            let N = {};
            if (Array.isArray(t.optionLabel)) {
              let T = "";
              t.optionLabel.forEach((X, ce) => {
                let _e = String(M[X]);
                ce === 1 ? T += "（" + _e : ce > 1 ? T += "、" + _e : T += _e;
              }), N = {
                label: T + "）",
                val: t.optionVal && M[t.optionVal]
              };
            } else
              N = {
                label: t.optionLabel && M[t.optionLabel],
                val: t.optionVal && M[t.optionVal]
              };
            if (t.collectLabel)
              if (Array.isArray(t.collectLabel))
                for (let T of t.collectLabel)
                  T.valKey && T.valKey !== "label" && (N[T.valKey] = M[T.valKey]);
              else
                t.collectLabel.valKey && t.collectLabel.valKey !== "label" && (N[t.collectLabel.valKey] = M[t.collectLabel.valKey]);
            if (N.val !== null && N.val !== void 0)
              return N;
          })
        )) : (t.options.length = 0, t.options.push(...G))) : t.options.length = 0, t.localOption && t.options.unshift(...t.localOption), ue(v) && I(v, t), t.disableOptionByOthers && (O(t.disableOptionByOthers) === "String" ? p.push(
          ye(
            () => a.value[t.disableOptionByOthers],
            (M) => {
              if ($(t.tempKey), !!t.options) {
                for (let N of t.options)
                  N.disabled && (N.disabled = !1);
                if (M || M === 0 || M === !1)
                  for (let N of t.options)
                    N.val === M && (N.disabled = !0);
              }
            },
            {
              immediate: !0
            }
          )
        ) : Array.isArray(t.disableOptionByOthers) && p.push(
          ye(
            () => t.disableOptionByOthers.filter((M) => M).map((M) => a.value[M]),
            (M) => {
              if ($(t.tempKey), !!t.options) {
                for (let N of t.options)
                  N.disabled && (N.disabled = !1);
                if (M) {
                  for (let N of t.options)
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
    function I(o, t) {
      Array.isArray(t.options) && zl(t.options, { val: o }) !== -1 && (s.value[t.tempKey] = o);
    }
    function S() {
      if (a.value = {}, _.value)
        for (let o of n.formData)
          fe(o);
      else
        fe(n.formData);
    }
    function fe(o) {
      for (let t of o)
        t.key && (t.type === "checkboxGroup" || t.type === "select" && t.multiple ? a.value[t.key] = t.defaultVal !== void 0 && t.show === void 0 ? t.defaultVal : [] : t.type === "editor" || t.type === "editorPro" ? a.value[t.key] = t.defaultVal !== void 0 && t.show === void 0 ? t.defaultVal : "" : (a.value[t.key] = t.defaultVal !== void 0 && t.show === void 0 ? t.defaultVal : null, t.key2 && (a.value[t.key2] = t.defaultVal2 !== void 0 && t.show === void 0 ? t.defaultVal2 : null)));
    }
    function ne(o, t) {
      if (t.showing)
        switch (t.type) {
          case "selectInput":
            o && (o.beforeKey && delete a.value[o.beforeKey], a.value[o.key] = o.val);
            break;
          case "inputMap":
            if (!t.key || !t.key2)
              return;
            o ? (a.value[t.key] = o.lng, a.value[t.key2] = o.lat, t.key3 && (a.value[t.key3] = o.name)) : (a.value[t.key] = null, a.value[t.key2] = null, t.key3 && (a.value[t.key3] = null));
            break;
          case "input":
          case "inputNumber":
          case "textarea":
            if (!t.key)
              return;
            if (o || o === 0) {
              let G = /^-?\d+(.\d+)?$/;
              t.numberVal && G.test(o) ? a.value[t.key] = Number(o) : a.value[t.key] = o;
            } else
              a.value[t.key] = null;
            break;
          case "select":
          case "radioGroup":
          case "checkboxGroup":
            if (!t.key)
              return;
            if (t.booleanVal && !t.multiple ? a.value[t.key] = o === void 0 || o === "" || o === null ? null : !!o : t.multiple || t.type === "checkboxGroup" ? a.value[t.key] = Object.assign([], o) : a.value[t.key] = o, t.collectLabel) {
              const G = de(t, o);
              if (Array.isArray(t.collectLabel)) {
                for (let M of t.collectLabel)
                  if (M.key && M.valKey) {
                    const N = q(M.key);
                    let T = null;
                    Array.isArray(G) ? (T = G.map((ce) => ce[M.valKey]), a.value[M.key] = T, N && (s.value[N] = T)) : (G && ue(G[M.valKey]) && (T = G[M.valKey]), a.value[M.key] = T, N && (s.value[N] = T));
                    let X = De(d.value, (ce) => ce.key === M.key);
                    X && X.tempKey && (s.value[X.tempKey] = a.value[M.key]);
                  }
              } else if (typeof t.collectLabel == "object" && t.collectLabel.key && t.collectLabel.valKey) {
                const M = q(t.collectLabel.key);
                let N = null;
                Array.isArray(G) ? (N = G.map(
                  (X) => t.collectLabel && !Array.isArray(t.collectLabel) && X[t.collectLabel.valKey]
                ), a.value[t.collectLabel.key] = N, M && (s.value[M] = N)) : (G && ue(G[t.collectLabel.valKey]) && (N = G[t.collectLabel.valKey]), a.value[t.collectLabel.key] = N, M && (s.value[M] = N));
                let T = De(
                  d.value,
                  (X) => t.collectLabel && !Array.isArray(t.collectLabel) && X.key === t.collectLabel.key || !1
                );
                T && T.tempKey && (s.value[T.tempKey] = a.value[t.collectLabel.key]);
              }
            }
            break;
          case "date":
          case "time":
          case "monthRange":
            if (!t.key)
              return;
            let v = t.dateType;
            const y = {
              date: "YYYY-MM-DD",
              daterange: "YYYY-MM-DD",
              datetime: "YYYY-MM-DD HH:mm:ss",
              datetimerange: "YYYY-MM-DD HH:mm:ss",
              year: "YYYY",
              month: "MM"
            };
            if (v === "date" || v === "datetime" || v === "time" || v === "year" || v === "month")
              o ? (v === "time" ? a.value[t.key] = o : a.value[t.key] = Qe(o).format(typeof t.format == "string" ? t.format : y[v]), v === "date" && t.addTime && (a.value[t.key] += " 00:00:00")) : a.value[t.key] = null;
            else if (t.type === "monthRange" || v === "daterange" || v === "datetimerange" || v === "timerange") {
              if (!t.key2)
                return;
              o && o[0] && o[1] ? (v === "timerange" ? (a.value[t.key] = o[0], a.value[t.key2] = o[1]) : t.type === "monthRange" ? (a.value[t.key] = typeof t.format == "string" && Qe(o[0]).format(t.format) || o[0], a.value[t.key2] = typeof t.format == "string" && t.format && Qe(o[1]).format(t.format) || o[1]) : (a.value[t.key] = Qe(o[0]).format(t.format || v && y[v]), a.value[t.key2] = Qe(o[1]).format(t.format || v && y[v])), v === "daterange" && t.addTime && (a.value[t.key] += " 00:00:00", a.value[t.key2] += " 23:59:59")) : (a.value[t.key] = null, a.value[t.key2] = null);
            }
            break;
        }
    }
    function de(o, t) {
      if (o.options)
        if (o.multiple || o.type === "checkboxGroup") {
          if (t) {
            let v = [];
            for (let y of o.options)
              t.indexOf(y.val) !== -1 && v.push(y);
            return v;
          }
          return !1;
        } else {
          if (t || t === 0 || t === !1) {
            for (let v of o.options)
              if (v.val === t)
                return v;
          }
          return !1;
        }
    }
    function q(o) {
      if (_.value) {
        for (let t of d.value) {
          const v = qe(t, o);
          if (v)
            return v;
        }
        return !1;
      }
      return qe(d.value, o);
    }
    function qe(o, t) {
      for (let v of o)
        if (v.key === t)
          return v.tempKey;
      return !1;
    }
    function lt(o, t) {
      let v = {};
      for (let y in a.value)
        a.value.hasOwnProperty(y) && o[y] !== void 0 && (v[y] = o[y], delete o[y]);
      Je(v, t);
      for (let y in o)
        o.hasOwnProperty(y) && (m.indexOf(y) < 0 && m.push(y), a.value[y] = o[y]);
    }
    function at(o) {
      let t = se(o);
      if (_.value) {
        let v = [];
        for (let y of n.formData)
          v.push(...Ye(y, t));
        return v;
      }
      return Ye(n.formData, t);
    }
    function Ye(o, t) {
      return o.filter((v) => {
        for (let y of Object.keys(t))
          if (v.key === y && ee.value.indexOf(y) > -1 && !(t[y] === null || (Array.isArray(t[y]) || O(t[y]) === "Object") && Se(t[y])))
            return delete t[y], !0;
        return !1;
      }).map((v) => v.key);
    }
    function Je(o, t = !1) {
      let v = se(o);
      nt(o, t);
      for (let y in a.value)
        if (a.value.hasOwnProperty(y) && o[y] !== void 0 && o[y] !== "--") {
          if (Array.isArray(o[y]))
            o[y] = o[y].filter((G) => G !== "--");
          else if (O(o[y]) === "Object")
            for (let G in o[y])
              o[y].hasOwnProperty(G) && o[y][G] === "--" && (o[y][G] = null);
          a.value[y] = o[y];
        } else
          t || (a.value[y] = Array.isArray(a.value[y]) ? [] : null);
      xl(at(v));
    }
    function nt(o, t = !1) {
      if (_.value)
        for (let v of d.value)
          Xe(v, o, t);
      else
        Xe(d.value, o, t);
    }
    function Xe(o, t, v = !1) {
      for (let y of o)
        if (y.key && (v && (t[y.key] !== void 0 || y.key2 && t[y.key2] !== void 0) || !v) && y.tempKey)
          switch (y.type) {
            case "inputMap":
              if (!y.key2)
                continue;
              O(t[y.key]) === "Number" && O(t[y.key2] === "Number") ? y.key3 ? s.value[y.tempKey] = {
                lng: t[y.key],
                lat: t[y.key2],
                name: t[y.key3]
              } : s.value[y.tempKey] = {
                lng: t[y.key],
                lat: t[y.key2]
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
              t[y.key] && t[y.key] !== "--" || t[y.key] === 0 ? s.value[y.tempKey] = t[y.key] : s.value[y.tempKey] = null;
              break;
            case "select":
            case "radioGroup":
            case "checkboxGroup":
              t[y.key] && t[y.key] !== "--" || t[y.key] === 0 || t[y.key] === !1 ? y.multiple || y.type === "checkboxGroup" ? s.value[y.tempKey] = [...t[y.key]] : y.booleanVal ? s.value[y.tempKey] = t[y.key] ? 1 : 0 : s.value[y.tempKey] = t[y.key] : y.multiple || y.type === "checkboxGroup" ? s.value[y.tempKey] = [] : s.value[y.tempKey] = null;
              break;
            case "date":
            case "time":
              if (y.dateType === "date" || y.dateType === "datetime" || y.dateType === "year" || y.dateType === "month" || y.dateType === "time")
                s.value[y.tempKey] = t[y.key] && t[y.key] !== "--" ? t[y.key] : null;
              else if (y.dateType === "daterange" || y.dateType === "datetimerange" || y.dateType === "timerange") {
                if (!y.key2)
                  continue;
                s.value[y.tempKey] = t[y.key] && t[y.key] !== "--" && t[y.key2] && t[y.key2] !== "--" && [t[y.key], t[y.key2]] || [];
              }
              break;
          }
    }
    function ot(o) {
      if (Array.isArray(o))
        for (let t of o)
          Mt(t);
      else
        O(o) === "Object" && Mt(o);
    }
    function Mt(o) {
      const { index: t, indexB: v, key: y, val: G } = o;
      if (typeof t == "number")
        if (Array.isArray(d.value[t])) {
          if (typeof v == "number")
            if (y && (G || G !== void 0))
              d.value[t][v][y] = G;
            else
              for (let M of Object.keys(o))
                M !== "index" && y !== "indexB" && (d.value[t][v][M] = o[M]);
        } else if (y && (G || G !== void 0))
          d.value[t][y] = G;
        else
          for (let M of Object.keys(o))
            M !== "index" && (d.value[t][M] = o[M]);
    }
    function Tt({ label: o, root: t }) {
      t.key2 && (a.value[t.key2] = o), $e({
        e: o,
        root: t
      });
    }
    function Lt(o) {
      o.beforeKey && Dl(c, (t) => t === o.beforeKey), o.key && (c.indexOf(o.key) === -1 && c.push(o.key), $e({
        e: null,
        root: o
      }));
    }
    function Ut({ name: o, root: t }) {
      t.key2 && (a.value[t.key2] = o), $e({
        e: o,
        root: t
      });
    }
    function Kt({ e: o, root: t }) {
      $e({
        e: o,
        root: t
      }), dt(function() {
        var v;
        (v = u.value) == null || v.validateField(t.key);
      });
    }
    function $e({ e: o, root: t }) {
      we(() => {
        let v = {
          event: o
        };
        if (t.key && (v[t.key] = a.value[t.key]), t.key2 && (v[t.key2] = a.value[t.key2]), Array.isArray(t.collectLabel))
          for (let y of t.collectLabel)
            v[y.key] = a.value[y.key];
        else
          t.collectLabel && t.collectLabel.key && (v[t.collectLabel.key] = a.value[t.collectLabel.key]);
        e("on-item-change", v);
      }, 500);
    }
    function Pt() {
      let o = {};
      for (let t of x.value)
        o[t] = a.value[t];
      return n.trim && (o = yt(o)), o;
    }
    function Bl() {
      var o;
      (o = u.value) == null || o.validate();
    }
    function Il(o) {
      we(() => {
        var t;
        (t = u.value) == null || t.validateField(o, () => {
        });
      }, 10);
    }
    function xl(o) {
      we(() => {
        var t;
        if (Array.isArray(o))
          for (let v of o)
            (t = u.value) == null || t.validateField(v, () => {
            });
      }, 10);
    }
    function Sl(o) {
      o !== void 0 && (g.value = !!o);
    }
    function ht() {
      var o;
      n.disabled || (o = u.value) == null || o.validate((t) => {
        b || (b = !0, t && (g.value = !0, e("on-submit", Pt())), we(() => {
          b = !1;
        }, 2e3));
      });
    }
    return We(() => {
      S(), Ne();
    }), i({
      resetForm: k,
      refreshFormDom: j,
      reRenderForm: U,
      setItemToValGroup: lt,
      updateValGroup: Je,
      updateFormDataT: ot,
      validate: Bl,
      reValidate: Il,
      changeLoading: Sl,
      getValGroup: Pt,
      submit: ht
    }), (o, t) => {
      const v = D("FormItem"), y = D("Button"), G = D("Form");
      return V(), z(G, {
        ref_key: "formGroupXRef",
        ref: u,
        model: f(a),
        rules: f(B),
        "label-width": n.labelWidth,
        inline: n.inline,
        "show-message": n.showMessage,
        class: "formXN",
        key: f(A)
      }, {
        default: J(() => [
          W(v, { style: { display: "none" } }, {
            default: J(() => [
              Rn
            ]),
            _: 1
          }),
          f(_) ? (V(!0), P(pe, { key: 0 }, he(f(d), (M, N) => (V(), P("div", {
            class: ge([o.teamClass, "formTeamBox" + N]),
            key: "formTeamBox" + N
          }, [
            (V(!0), P(pe, null, he(M, (T, X) => (V(), P(pe, {
              key: "formItem" + X
            }, [
              be(T) ? (V(), z(Gt, {
                key: 0,
                item: T,
                style: H(f(L)),
                "item-style": f(F),
                "val-group": f(a),
                "temp-keys": f(s),
                inline: n.inline,
                disabled: n.disabled,
                "label-width": n.labelWidth,
                "item-width": n.itemWidth,
                "mgr-url": f(r),
                "upload-url": f(w),
                onItemChange: $e,
                onReValidate: Kt,
                onClearTempKeyItem: $,
                onSelectInputChange: Lt,
                onAlNameChange: Ut,
                onAsyncLabelChange: Tt
              }, bt({ _: 2 }, [
                he(R(M), (ce) => ({
                  name: ce.slotName,
                  fn: J((_e) => [
                    Ce(o.$slots, ce.slotName, {
                      valGroup: _e.valGroup
                    })
                  ])
                }))
              ]), 1032, ["item", "style", "item-style", "val-group", "temp-keys", "inline", "disabled", "label-width", "item-width", "mgr-url", "upload-url"])) : le("", !0)
            ], 64))), 128))
          ], 2))), 128)) : le("", !0),
          (V(!0), P(pe, null, he(f(d), (M, N) => (V(), P(pe, {
            key: "formItem" + N
          }, [
            !f(_) && be(M) ? (V(), z(Gt, {
              key: 0,
              item: M,
              style: H(f(L)),
              "item-style": f(F),
              "val-group": f(a),
              "temp-keys": f(s),
              inline: n.inline,
              disabled: n.disabled,
              "label-width": n.labelWidth,
              "item-width": n.itemWidth,
              "mgr-url": f(r),
              "upload-url": f(w),
              onItemChange: $e,
              onReValidate: Kt,
              onClearTempKeyItem: $,
              onSelectInputChange: Lt,
              onAlNameChange: Ut,
              onAsyncLabelChange: Tt
            }, bt({ _: 2 }, [
              he(R(o.formData), (T) => ({
                name: T.slotName,
                fn: J((X) => [
                  Ce(o.$slots, T.slotName, {
                    valGroup: X.valGroup
                  })
                ])
              }))
            ]), 1032, ["item", "style", "item-style", "val-group", "temp-keys", "inline", "disabled", "label-width", "item-width", "mgr-url", "upload-url"])) : le("", !0)
          ], 64))), 128)),
          n.showLongOkBt ? (V(), z(v, { key: 1 }, {
            default: J(() => [
              W(y, {
                onClick: ht,
                style: H(f(F)),
                type: "primary",
                loading: n.btnLoading && f(g),
                disabled: n.disabled
              }, {
                default: J(() => [
                  Ae(Z(n.longOkBtTxt || f(C)("r.confirm")), 1)
                ]),
                _: 1
              }, 8, ["style", "loading", "disabled"])
            ]),
            _: 1
          })) : le("", !0),
          E("div", En, [
            n.showInlineOkBt ? (V(), z(y, {
              key: 0,
              type: "primary",
              class: ge({ inlineFormBtXN: n.inline, okBtnXN: !0 }),
              onClick: ht,
              loading: n.btnLoading && f(g),
              disabled: n.disabled
            }, {
              default: J(() => [
                Ae(Z(n.inlineOkBtTxt || f(C)("r.confirm")), 1)
              ]),
              _: 1
            }, 8, ["class", "loading", "disabled"])) : le("", !0),
            n.showInlineClearBt ? (V(), z(y, {
              key: 1,
              onClick: k,
              class: ge({ inlineFormBtXN: n.inline }),
              type: "dashed"
            }, {
              default: J(() => [
                Ae(Z(n.inlineClearBtTxt || f(C)("r.clear")), 1)
              ]),
              _: 1
            }, 8, ["class"])) : le("", !0)
          ])
        ]),
        _: 3
      }, 8, ["model", "rules", "label-width", "inline", "show-message"]);
    };
  }
}), Nn = /* @__PURE__ */ oe({
  __name: "FormGroup",
  props: {
    formData: { default: () => [] },
    with: { default: "100%" },
    labelWidth: { default: 160 },
    contentWidth: { default: "70%" },
    itemWidth: { default: 200 },
    showOkBt: { type: Boolean, default: !0 },
    showCancelBt: { type: Boolean, default: !0 },
    okBtTxt: {},
    cancelBtTxt: {},
    btnLoading: { type: Boolean, default: !1 }
  },
  emits: ["on-cancel"],
  setup(l, { emit: i }) {
    const e = l, n = Y({ width: e.with }), u = Y(!1), a = Y(), d = K(() => {
      if (Array.isArray(e.formData))
        if (Array.isArray(e.formData[0])) {
          let c = [];
          for (let m of e.formData)
            c = c.concat(m.filter((g) => g.type === "custom"));
          return c;
        } else
          return e.formData.filter((c) => c.type === "custom");
      return [];
    });
    function s() {
      u.value = !0;
    }
    function p() {
      a.value.submit();
    }
    function r() {
      i("on-cancel"), we(() => {
        u.value = !1, a.value.changeLoading(!1);
      }, 1e3);
    }
    return (c, m) => {
      const g = D("Button");
      return V(), P("div", {
        style: H(f(n)),
        class: "formGroupBoxVM"
      }, [
        W(Vl, St({
          ref_key: "formRRef",
          ref: a
        }, c.$attrs, {
          "form-data": e.formData,
          "label-width": e.labelWidth,
          "content-width": e.contentWidth,
          "item-width": e.itemWidth,
          btnLoading: e.btnLoading,
          onOnSubmit: s
        }), bt({ _: 2 }, [
          he(f(d), (A) => ({
            name: A.slotName,
            fn: J(({ valGroup: w }) => [
              Ce(c.$slots, A.slotName, { valGroup: w })
            ])
          }))
        ]), 1040, ["form-data", "label-width", "content-width", "item-width", "btnLoading"]),
        ve(E("div", {
          class: "formFooterVM",
          style: H({ marginLeft: e.labelWidth + "px" })
        }, [
          E("div", {
            style: H({ width: e.contentWidth }),
            class: "btnBoxKAL"
          }, [
            e.showOkBt ? (V(), z(g, {
              key: 0,
              onClick: p,
              class: "form-save-btn",
              loading: e.btnLoading && f(u)
            }, {
              default: J(() => [
                Ae(Z(e.okBtTxt || f(C)("r.confirm")), 1)
              ]),
              _: 1
            }, 8, ["loading"])) : le("", !0),
            e.showCancelBt ? (V(), z(g, {
              key: 1,
              onClick: r,
              class: "form-cancel-btn"
            }, {
              default: J(() => [
                Ae(Z(e.cancelBtTxt || f(C)("r.cancel")), 1)
              ]),
              _: 1
            })) : le("", !0)
          ], 4)
        ], 4), [
          [Ve, e.showOkBt || e.showCancelBt]
        ])
      ], 4);
    };
  }
}), jt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AlCascaderMC: gl,
  AsyncCascader: vl,
  BtTablePage: un,
  EditorPro: kl,
  FormGroup: Nn,
  FormR: Vl,
  FullPop: ca,
  HeaderBt: Qt,
  Hello: fa,
  IconTxtBtn: ma,
  InputMap: hl,
  MonthRange: wl,
  Page404: ba,
  SelectInput: ml,
  ShowHidePanel: Ga,
  ShowHidePanelB: Wa,
  SideMenu: Na,
  TableIconBtn: za,
  TableSearch: Ya,
  TableSetting: Za,
  UploadGroup: bl
}, Symbol.toStringTag, { value: "Module" }));
function Al(l) {
  const i = (...a) => Le.apply(this, a), e = i("r.closePreview"), n = i("r.fullImg");
  let u = "previewImg" + Math.floor(Math.random() * 1e7);
  Fe.info({
    closable: !1,
    "transition-names": ["linear", "fade"],
    render: (a) => ie(
      "div",
      {
        class: "previewModal",
        id: u
      },
      [
        ie(
          "div",
          {
            class: "previewModalInner"
          },
          [
            ie("img", {
              src: l,
              alt: n
            }),
            ie(ql, {
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
  }), we(() => {
    var s, p, r, c, m, g;
    const a = (c = (r = (p = (s = document.getElementById(u)) == null ? void 0 : s.parentElement) == null ? void 0 : p.parentElement) == null ? void 0 : r.parentElement) == null ? void 0 : c.parentElement, d = (g = (m = document.getElementById(u)) == null ? void 0 : m.parentElement) == null ? void 0 : g.nextSibling;
    a && (a.style.height = "0"), a && (a.style.padding = "0"), d && (d.style.display = "none");
  }, 10);
}
let et = !1;
function Cl({
  height: l,
  width: i = 416,
  title: e,
  content: n,
  onOk: u,
  onCancel: a,
  okText: d,
  cancelText: s,
  noWarnIcon: p,
  footerAlign: r,
  cancelBt: c = !0
}) {
  const m = (...b) => Le.apply(this, b);
  let A = (l && Number(l) - 90 > 100 ? Number(l) - 90 + "px" : 0) || "100px", w = O(n) === "String";
  Fe.warning({
    width: i,
    footerHide: !0,
    render: () => ie(
      "div",
      {
        class: "customMessageBox",
        style: {
          height: A
        }
      },
      [
        ie(
          "div",
          {
            class: "containerN"
          },
          [
            ie(
              "div",
              {
                class: "titleN"
              },
              [
                ie("span", e || m("r.info.title")),
                ie(
                  vt,
                  {
                    class: "fr closeN",
                    type: "text",
                    onClick() {
                      et || Fe.remove();
                    }
                  },
                  () => ie("i", {
                    class: "ivu-icon ivu-icon-ios-close",
                    style: {
                      fontSize: "30px"
                    }
                  })
                )
              ]
            ),
            ie(
              "div",
              {
                class: "contentN",
                style: {
                  textAlign: w ? "center" : "left"
                }
              },
              [
                ie("i", {
                  class: w && !p ? "ivu-icon ivu-icon-ios-alert-outline" : "hide",
                  style: {
                    fontSize: "60px",
                    color: "#f8bb86"
                  }
                }),
                ie("div", { class: "msgBoxConO" }, n || m("r.info.text"))
              ]
            ),
            ie(
              "div",
              {
                class: "footerN",
                style: {
                  textAlign: r || "center"
                }
              },
              [
                ie(
                  vt,
                  {
                    class: "okBtN",
                    onClick(b) {
                      var _;
                      if (u && typeof u == "function") {
                        const L = u();
                        if (L && O(L) === "Promise") {
                          et = !0;
                          const F = b && (b.currentTarget || b.target);
                          F && (F.classList.add("ivu-btn-loading"), F.nextSibling.setAttribute("disabled", "disabled"), ((_ = F.parentElement) == null ? void 0 : _.parentElement.querySelector(".titleN .closeN")).classList.add("disabled")), Promise.resolve(L).then(() => {
                            et = !1, Fe.remove();
                          }).catch(() => {
                            et = !1, Fe.remove();
                          });
                        } else
                          Fe.remove();
                      }
                    }
                  },
                  () => [
                    ie("i", {
                      class: "ivu-load-loop ivu-icon ivu-icon-ios-loading"
                    }),
                    ie("span", d || m("r.confirm"))
                  ]
                ),
                ie(
                  vt,
                  {
                    class: ["cancelBtN", !c && "hide"],
                    onClick() {
                      et || (Fe.remove(), O(a) === "Function" && a && a());
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
function _l(l, i, e, n) {
  const u = (...a) => Le.apply(this, a);
  Be.call(this, {
    title: l || u("r.info.title"),
    text: i || u("r.info.text"),
    icon: e || "warning",
    onOk: n,
    buttons: [u("r.cancel")]
  });
}
(() => {
  if (window.wangeditorMenuInit)
    return;
  class l {
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
      const u = document.getElementById("editor-preview");
      let a = localStorage.getItem("editorPreviewW") || 300, d = localStorage.getItem("editorPreviewH") || 500;
      const s = n.getHtml();
      if (u) {
        let p = u.children[0].children[1].children[0], r = u.children[0].children[1];
        p.innerHTML = s, p.style.width = a + "px", r.style.height = d + "px", u.style.display = "block";
      } else {
        const p = document.body, r = document.createElement("div");
        r.setAttribute("id", "editor-preview"), r.setAttribute("class", "editor-preview-mask"), r.innerHTML = `<div class='editor-preview-body'><div class='editor-preview-head'><div><span>宽</span><input type='number' value='${a}' min='200'><span>高</span><input type='number' value='${d}' min='300'></div><i class='ivu-icon ivu-icon-md-close'></i></div><div class='editor-preview-out-wall'><div class='editor-preview-wall r-editor-view'></div></div></div>`;
        let c = r.children[0].children[1], m = r.children[0].children[1].children[0], g = r.children[0].children[0].children[0].children[1];
        const A = 40, w = 70, b = (B) => {
          if (B && B.type === "keyup") {
            let R = !1;
            if (B.key && (R = B.key !== "Enter"), R)
              return;
          }
          let x = B.target.value;
          if (x = Number(x), m.style && m.style.width === x + "px")
            return;
          const ee = p.clientWidth;
          x < 250 ? (x = 250, B.target.value = 250) : x > ee - A && (x = ee - A, B.target.value = ee - A), m.style.width = x + "px", localStorage.setItem("editorPreviewW", x);
        };
        g.addEventListener("blur", b), g.addEventListener("keyup", b);
        let _ = r.children[0].children[0].children[0].children[3];
        const L = (B) => {
          if (B && B.type === "keyup") {
            let R = !1;
            if (B.key && (R = B.key !== "Enter"), R)
              return;
          }
          let x = B.target.value;
          if (x = Number(x), c.style && c.style.height === x + "px")
            return;
          const ee = p.clientHeight;
          x < 300 ? (x = 300, B.target.value = 300) : x > ee - w && (x = ee - w, B.target.value = ee - w), c.style.height = x + "px", localStorage.setItem("editorPreviewH", x);
        };
        _.addEventListener("blur", L), _.addEventListener("keyup", L), r.children[0].children[0].children[1].addEventListener("click", (B) => {
          r.style.display = "none";
        }), m.innerHTML = s, m.style.width = a + "px", c.style.height = d + "px", p.append(r);
      }
    }
  }
  const i = {
    key: "previewX",
    factory() {
      return new l();
    }
  };
  ta.registerMenu(i), window.wangeditorMenuInit = !0;
})();
const Wt = {
  $fetch: Te,
  fullScreenImgByDom: Ee,
  fullScreenImgPreview: Al,
  $swal: Be,
  $swalConfirm: _l,
  messageBox: Cl,
  setInterval: pl,
  setTimeout: we,
  ...cl
}, $n = function(l, i = {}) {
  Te.init(i.useStore || i.store, l), i.locale && ft.use(i.locale), i.i18n && ft.i18n(i.i18n), i.router && qa(i.router), i.amap && mn(i.amap), i.notRegistryGlobal || (Object.keys(jt).forEach((e) => {
    l.component(e) || l.component(e, jt[e]);
  }), Object.keys(Wt).forEach((e) => {
    l.config.globalProperties[e] = Wt[e];
  })), l.directive("has") || l.directive("has", (e, n) => {
    n.value && !rl(n.value) && (e.style.display = "none");
  }), l.directive("loadmore") || l.directive("loadmore", (e, n) => {
    let u;
    n.arg ? u = e.querySelector("." + n.arg) : u = e.querySelector(".ivu-select-dropdown") || e, u.addEventListener("scroll", function() {
      u.scrollTop > 0 && u.scrollHeight - u.scrollTop <= u.clientHeight && n.value();
    });
  });
}, zn = ft.use, Dn = ft.i18n, ao = {
  locale: zn,
  i18n: Dn,
  install: $n,
  ...cl,
  ...Ca,
  $fetch: Te,
  fullScreenImgByDom: Ee,
  fullScreenImgPreview: Al,
  $swal: Be,
  $swalConfirm: _l,
  messageBox: Cl,
  setInterval: pl,
  setTimeout: we
};
export {
  Te as $fetch,
  Be as $swal,
  _l as $swalConfirm,
  gl as AlCascaderMC,
  vl as AsyncCascader,
  un as BtTablePage,
  kl as EditorPro,
  Nn as FormGroup,
  Vl as FormR,
  ca as FullPop,
  Qt as HeaderBt,
  fa as Hello,
  ma as IconTxtBtn,
  hl as InputMap,
  wl as MonthRange,
  ba as Page404,
  ml as SelectInput,
  Ga as ShowHidePanel,
  Wa as ShowHidePanelB,
  Na as SideMenu,
  za as TableIconBtn,
  Ya as TableSearch,
  Za as TableSetting,
  bl as UploadGroup,
  At as clearObj,
  Ua as dataFilterOrToUrl,
  xa as decimalDigitsLimit,
  ao as default,
  ol as downloadFileByFormSubmit,
  tl as downloadFileReaderFile,
  Va as emptyInput,
  ll as fakeALinkClick,
  Sa as fileExport,
  De as findCollection,
  mt as findPath,
  _a as formDataHeadConfig,
  Ee as fullScreenImgByDom,
  Al as fullScreenImgPreview,
  Oa as getColumnsKeys,
  rt as getFileSrc,
  Ot as getFileTypeByName,
  Vt as getFileTypeIconByName,
  al as getStringWidth,
  rl as hasPermission,
  ka as htmlDecode,
  wa as htmlEncode,
  Ka as htmlPrint,
  Ta as isEmptyValue,
  ut as isImgByFile,
  ul as isNaN,
  Ma as isNumberValue,
  ue as isValidValue,
  Cl as messageBox,
  O as myTypeof,
  Ia as oneOf,
  Ct as removeEmptyValue,
  pl as setInterval,
  we as setTimeout,
  sl as setValByOption,
  dl as siblingElems,
  Aa as stopBubbling,
  La as stringLength,
  Ba as toFormData,
  el as toHump,
  nl as toLine,
  il as tooltipManual,
  yt as trimObj
};
//# sourceMappingURL=plugRQw.js.map
