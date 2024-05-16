var Jl = Object.defineProperty;
var Yl = (t, i, o) => i in t ? Jl(t, i, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[i] = o;
var it = (t, i, o) => (Yl(t, typeof i != "symbol" ? i + "" : i, o), o);
import { getCurrentInstance as wt, defineComponent as me, resolveComponent as Q, openBlock as S, createElementBlock as D, normalizeClass as xe, normalizeStyle as oe, createBlock as Z, createCommentVNode as ce, renderSlot as Le, ref as j, computed as H, withDirectives as pe, unref as p, createElementVNode as F, toDisplayString as G, createVNode as Y, withCtx as ee, createTextVNode as ge, vShow as ve, resolveDirective as Ht, isRef as Ae, h as Te, Fragment as be, renderList as _e, onBeforeMount as Xl, watch as we, nextTick as Pe, onMounted as Ne, onBeforeUnmount as gl, Teleport as Ql, withModifiers as Ot, mergeProps as nt, onUnmounted as Zl, shallowRef as ht, triggerRef as ea, createSlots as at, toRef as ta, toValue as St } from "vue";
import la from "deepmerge";
import { isObject as aa, isFunction as na, isPlainObject as lt, cloneDeep as de, isEmpty as Oe, debounce as bl, isNumber as ut, isString as Wt, last as yt, isEqual as dt, first as Lt, find as At, indexOf as al, findIndex as kl, remove as oa } from "lodash-es";
import pt from "sweetalert";
import { Tooltip as ia, Modal as We, Button as Tt, TableColumnConfig as sa, Radio as ra, Input as ua, Message as nl, Icon as da } from "view-ui-plus";
import { useRouter as ca, useRoute as wl } from "vue-router";
import fa from "popper.js";
import Pt from "axios";
import ol from "@amap/amap-jsapi-loader";
import pa from "ar-cascader";
import { Toolbar as ma, Editor as ha } from "@wangeditor/editor-for-vue";
import st from "moment";
import { Boot as ya } from "@wangeditor/editor";
import va from "vue-json-viewer";
const _l = {
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
}, ga = /(%|){([0-9a-zA-Z_]+)}/g;
function ba() {
  function t(o, e) {
    return Object.prototype.hasOwnProperty.call(o, e);
  }
  function i(o, ...e) {
    let n;
    return e.length === 1 && typeof e[0] == "object" && (n = e[0]), (!n || !n.hasOwnProperty) && (n = {}), o === void 0 ? "" : o.replace(ga, (a, s, c, u) => {
      let v;
      return o[u - 1] === "{" && o[u + a.length] === "}" ? c : (v = t(n, c) ? n[c] : null, v ?? "");
    });
  }
  return i;
}
const ka = ba();
let vt = _l;
const wa = {
  zh: _l
};
let il, sl = {}, Ie, _a = function(t, i) {
  if (typeof this == "object" && Reflect.has(this, "$t"))
    return this.$t(t, i);
  if (Ie && Ie.global)
    return Ie.global.t(t, i);
  if (Ie && Ie.locale) {
    if (!sl[Ie.locale] || il != Ie.locale) {
      sl[Ie.locale] = !0;
      let o = Ie.getLocaleMessage(Ie.locale) || {}, e = la(wa[Ie.locale], o, { clone: !0 });
      vt = e, Ie.setLocaleMessage(Ie.locale, e), il = Ie.locale;
    }
    return Ie.hlang(t, i);
  }
};
const Ee = function(t, i) {
  let o = _a.apply(this, [t, i]);
  if (o != null)
    return o;
  const e = t.split(".");
  let n = vt;
  for (let a = 0, s = e.length; a < s; a++) {
    const c = e[a];
    if (o = n[c], a === s - 1)
      return ka(o, i);
    if (!o)
      return "";
    n = o;
  }
  return "";
}, Va = function(t) {
  vt = t || vt;
}, Ca = function(t) {
  Ie = t;
}, gt = {
  use: Va,
  t: Ee,
  i18n: Ca
};
function x(t, i) {
  var e, n, a;
  const o = (a = (n = (e = wt()) == null ? void 0 : e.appContext) == null ? void 0 : n.config) == null ? void 0 : a.globalProperties;
  return Ee.apply(o, [t, i]);
}
const Vl = /* @__PURE__ */ me({
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
      const c = Q("Icon");
      return S(), D("div", {
        class: xe({ headerBtCTM: !0, withIconCTM: o.icon || o.withIcon, disabled: o.disabled }),
        style: oe({ color: o.color, borderLeftColor: o.borderColor }),
        onClick: n
      }, [
        o.icon ? (S(), Z(c, {
          key: 0,
          size: o.iconSize,
          type: o.icon
        }, null, 8, ["size", "type"])) : ce("", !0),
        Le(a.$slots, "default")
      ], 6);
    };
  }
});
function Ce() {
  const { appContext: t } = wt();
  return t.config.globalProperties;
}
const Sa = { class: "headerTxtAM" }, Ta = { class: "contentAM" }, Ba = /* @__PURE__ */ me({
  __name: "FullPop",
  props: {
    title: {},
    headerColor: {},
    headerBg: {},
    headerFontSize: { default: () => {
      var t;
      return (t = Ce()) == null ? void 0 : t.fontSizeBase;
    } },
    zIndex: { default: 1e3 }
  },
  emits: ["on-open", "on-close"],
  setup(t, { expose: i, emit: o }) {
    const e = t, n = o;
    let a = j(!1);
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
    }), (d, f) => pe((S(), D("div", {
      class: "fullScreenPopBoxAM",
      style: oe(p(c))
    }, [
      F("div", {
        class: "headerAM",
        style: oe({ color: e.headerColor, backgroundColor: e.headerBg, fontSize: p(s) })
      }, [
        F("span", Sa, G(d.title || p(x)("r.title")), 1),
        Y(Vl, {
          icon: "md-return-left",
          onClick: v
        }, {
          default: ee(() => [
            ge(G(p(x)("r.back")), 1)
          ]),
          _: 1
        })
      ], 4),
      F("div", Ta, [
        Le(d.$slots, "default")
      ])
    ], 4)), [
      [ve, p(a)]
    ]);
  }
}), xa = { class: "msg" }, Oa = /* @__PURE__ */ me({
  __name: "Hello",
  setup(t) {
    let i = j("Greetings from Ricky.");
    return (o, e) => (S(), D("span", xa, G(p(i)), 1));
  }
}), It = /* @__PURE__ */ me({
  __name: "IconTxtBtn",
  props: {
    name: {},
    icon: { default: "md-download" },
    size: { default: () => Ce().iconTxtBtnIconSize },
    disabled: { type: Boolean, default: !1 },
    has: { default: "" }
  },
  emits: ["click"],
  setup(t, { emit: i }) {
    const o = t, e = i, n = H(() => {
      var s;
      return Math.floor(o.size / 17 * ((s = Ce()) == null ? void 0 : s.fontSizeBase)) + "px";
    });
    function a(s) {
      o.disabled || e("click", s);
    }
    return (s, c) => {
      const u = Q("Icon"), v = Ht("has");
      return pe((S(), D("div", {
        class: xe(["tabTopBtnsT", { disabled: o.disabled }]),
        onClick: a,
        style: oe({ "font-size": p(n) })
      }, [
        Y(u, {
          type: o.icon,
          size: o.size
        }, null, 8, ["type", "size"]),
        ge(" " + G(o.name || p(x)("r.button")), 1)
      ], 6)), [
        [v, s.has]
      ]);
    };
  }
}), La = { class: "c404K" }, Aa = /* @__PURE__ */ F("div", { class: "t404" }, "404", -1), Pa = { class: "ct404" }, Ia = { class: "p404" }, Fa = /* @__PURE__ */ me({
  __name: "Page404",
  setup(t) {
    const o = wt().appContext.config.globalProperties.$router;
    function e() {
      o.go(-1);
    }
    return (n, a) => {
      const s = Q("Button");
      return S(), D("div", La, [
        Aa,
        F("div", Pa, "UH OH! " + G(p(x)("r.pageNotFound")), 1),
        F("div", Ia, G(p(x)("r.notFoundMsg")), 1),
        Y(s, {
          class: "bt404",
          onClick: e
        }, {
          default: ee(() => [
            ge(G(p(x)("r.back")), 1)
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
      t.text && y.test(J(t.text)) ? b = "content" : t.text && J(t.text) === "String" && (b = "text"), t.buttons && (typeof t.buttons == "object" && !Array.isArray(t.buttons) ? t.buttons.cancel && (t.buttons.cancel.text && (u = t.buttons.cancel.text) && (v = !0), t.buttons.cancel.className && (f = t.buttons.cancel.className), t.buttons.confirm.text && (c = t.buttons.confirm.text), t.buttons.confirm.className && (d = t.buttons.confirm.className)) : Array.isArray(t.buttons) && (t.buttons[0] && (u = t.buttons[0], v = !0), t.buttons[1] && (c = t.buttons[1]))), pt({
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
      pt({
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
      !t && pt.close && pt.close();
    else
      throw new TypeError("swal第一个参数类型有误，仅支持Object/String/false");
  });
}
function Ra(t) {
  return t.replace(/_(\w)/g, function(i, o) {
    return o.toUpperCase();
  });
}
function Bi(t) {
  let i = document.createElement("div");
  return i.textContent !== void 0 ? i.textContent = t : i.innerText = t, i.innerHTML;
}
function xi(t) {
  let i = document.createElement("div");
  return i.innerHTML = t, i.innerText || i.textContent;
}
function Bt(t) {
  return new Promise((i) => {
    let o = new FileReader();
    o.readAsDataURL(t), o.onloadend = () => {
      i(o.result);
    };
  });
}
function Cl(t) {
  return (t == null ? void 0 : t.split(".").pop().toLocaleLowerCase()) || "";
}
function xt(t) {
  return J(t) === "String" && t.indexOf("image") > -1;
}
function rl(t) {
  const i = Cl(t);
  let o = "ios-document-outline";
  return ["gif", "jpg", "jpeg", "png", "bmp", "webp"].indexOf(i) > -1 ? o = "ios-image" : ["mp4", "m3u8", "rmvb", "avi", "swf", "3gp", "mkv", "flv"].indexOf(i) > -1 ? o = "ios-film" : ["mp3", "wav", "wma", "ogg", "aac", "flac"].indexOf(i) > -1 ? o = "ios-musical-notes" : ["doc", "txt", "docx", "pages", "epub", "pdf"].indexOf(i) > -1 ? o = "md-document" : ["numbers", "csv", "xls", "xlsx"].indexOf(i) > -1 ? o = "ios-stats" : ["keynote", "ppt", "pptx"].indexOf(i) > -1 && (o = "ios-videocam"), o;
}
function $a(t, i) {
  let o = document.createElement("a");
  o.href = i, o.download = t, Ka(o);
}
function Ka(t) {
  let i = document.createEvent("MouseEvents");
  i.initMouseEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), t.dispatchEvent(i);
}
function Ft({
  group: t,
  condition: i,
  pathKey: o,
  childKey: e = "children",
  path: n = []
}) {
  if (t && aa(t)) {
    if (na(i)) {
      if (lt(t)) {
        let a = t, s = de(n);
        if (i(a))
          return o && a[o] && s.push(a[o]), s;
        if (a[e] && !Oe(a[e])) {
          o && a[o] && s.push(a[o]);
          let c = Ft({
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
          let s = de(n);
          if (i(a))
            return o && a[o] ? s.push(a[o]) : s.push(String(t.indexOf(a))), s;
          if (a[e] && a[e].length > 0) {
            o && a[o] ? s.push(a[o]) : s.push(String(t.indexOf(a)));
            let c = Ft({
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
        let s = de(n);
        if (a === i)
          return s.push(String(t.indexOf(a))), s;
      }
  }
  return [];
}
function Ma(t, i = 12) {
  if (J(t) === "String" && t.length > 0) {
    let o = document.createElement("span");
    o.style.fontSize = i + "px", o.style.fontFamily = "inherit", o.innerHTML = t, o.style.opacity = "0", o.style.position = "fixed", o.style.top = "3000px", document.body.append(o);
    const e = o.clientWidth;
    return document.body.removeChild(o), e;
  }
  return 0;
}
function Oi(t) {
  return t === "" ? null : t;
}
function Li(t) {
  var i;
  t = t || window.Event, t != null && t.stopPropagation ? (i = t.stopPropagation) == null || i.call(t) : t && (t.cancelBubble = !0);
}
const Rt = typeof window < "u";
function Ue(t, i) {
  Ae(t) ? t.value = i : t = i;
}
function J(t) {
  return Object.prototype.toString.call(t).replace(/\[object |]/g, "");
}
function Sl(t) {
  return t.replace(/([A-Z])/g, "_$1").toLowerCase();
}
function bt(t) {
  let i = J(t);
  if (i === "Object") {
    for (let o in t)
      if (t.hasOwnProperty(o)) {
        let e = J(t[o]);
        e === "String" ? t[o] = t[o].trim() : (e === "Object" || e === "Array") && bt(t[o]);
      }
  } else if (i === "Array")
    for (let o = 0, e = t.length; o < e; o++) {
      let n = J(t[o]);
      n === "String" ? t[o] = t[o].trim() : (n === "Array" || n === "Object") && bt(t[o]);
    }
  return t;
}
function $t(t, i = []) {
  if (J(t) === "Array")
    return t.forEach((o, e) => {
      switch (J(o)) {
        case "Array":
        case "Object":
          $t(o);
          break;
        default:
          t[e] = null;
      }
    }), t;
  if (J(t) === "Object") {
    for (let o in t)
      if (t.hasOwnProperty(o)) {
        let e = !0;
        for (let n of i)
          if (n === o) {
            e = !1;
            break;
          }
        if (e)
          switch (J(t[o])) {
            case "Array":
            case "Object":
              $t(t[o]);
              break;
            default:
              t[o] = null;
          }
      }
    return t;
  } else
    return t;
}
const za = {
  headers: {
    "Content-Type": "multipart/form-data"
  }
};
function Da(t) {
  let i = new FormData();
  for (let o in t)
    t.hasOwnProperty(o) && t[o] !== null && i.append(o, t[o]);
  return i;
}
function Ze(t, i, o = !1) {
  if (!t || !i)
    return !1;
  let e, n = "notFoundC", a = function(s, c) {
    if (Array.isArray(s)) {
      if (J(c) === "Function" && c(s))
        return n = s, [];
      for (let u of s) {
        if (n !== "notFoundC")
          break;
        if (J(c) === "Function" && c(u) || u === c)
          return n = u, [s.indexOf(u)];
        if (J(u) === "Array" || J(u) === "Object") {
          let v = a(u, c);
          if (v !== void 0)
            return [s.indexOf(u), ...v];
        }
      }
    } else if (J(s) === "Object") {
      if (J(c) === "Function" && c(s))
        return n = s, [];
      for (let u in s) {
        if (n !== "notFoundC")
          break;
        if (s.hasOwnProperty(u)) {
          if (J(c) === "Function" && c(u) || s[u] === c)
            return n = s[u], [u];
          if (J(s[u]) === "Object" || J(s[u]) === "Array") {
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
function Ua(t, i) {
  for (let o = 0, e = i.length; o < e; o++)
    if (t === i[o])
      return !0;
  return !1;
}
function Na(t, i = 2) {
  let o = new RegExp(`(^-?\\d+\\.\\d{${i}})(\\d+$)`), e = t && String(t) || "";
  return o.test(e) ? Number(e.replace(o, "$1")) : t;
}
function Tl(t, i = {}, o = "get") {
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
  if (e.setAttribute("action", a), lt(i)) {
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
function Ea(t, i = {}, o = "get") {
  if (i.hasOwnProperty("columns") && (i.columns === "" || i.columns === null || i.columns === void 0)) {
    $e.call(this, {
      title: "需要导出的列不能为空",
      type: "warning"
    });
    return;
  }
  Tl(t, i, o);
}
function Ga(t, i, o = !1) {
  let e;
  if (t && J(i) === "Array") {
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
function Be(t) {
  return t != null && t !== "";
}
function Ha(t) {
  return /^-?\d+(.\d+)?$/.test(t);
}
function Bl(t, i = !1, o = "", e = 12) {
  return function(n, a) {
    var v, d;
    let s;
    if (Array.isArray(t)) {
      let f = [];
      for (let y of t)
        Be((v = a.row) == null ? void 0 : v[y]) && f.push(a.row[y]);
      s = f.join(o);
    } else
      typeof t == "function" ? s = t(a) : s = (d = a.row) == null ? void 0 : d[t];
    let c = Ma(s, e), u = a.column._width;
    return s && c > u ? Te(
      ia,
      {
        style: {
          width: "100%"
        },
        content: s,
        maxWidth: u * 2
      },
      () => Te(
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
    ) : Te("span", i && !Be(s) ? "--" : s);
  };
}
function Wa(t) {
  if (lt(t)) {
    for (let i in t)
      if (t.hasOwnProperty(i) && Be(t[i]))
        return !1;
    return !0;
  } else if (Array.isArray(t)) {
    for (let i of t)
      if (Be(i))
        return !1;
    return !0;
  }
  return !Be(t);
}
function ja(t) {
  return J(t) === "String" ? t.replace(/[^\x00-\xff]/g, "01").length : J(t) === "Number" ? (t += "", t.replace(/[^\x00-\xff]/g, "01").length) : 0;
}
function tt({
  group: t,
  condition: i,
  key: o,
  val: e,
  childKey: n = "children"
}) {
  if (J(t) !== "Array" || J(i) !== "Function" || J(o) !== "String" || J(n) !== "String")
    return !1;
  t.forEach((a) => {
    i(a) && (J(e) === "Function" ? a[o] = e(a[o]) : a[o] = e), J(a[n]) === "Array" && a[n].length > 0 && tt({
      group: a[n],
      condition: i,
      key: o,
      val: e,
      childKey: n
    });
  });
}
function xl(t) {
  let i = sessionStorage.getItem("btnPermissions");
  return i ? i.split(",").indexOf(t) > -1 : !1;
}
function Ol(t) {
  return J(t) === "Number" && String(t) === "NaN";
}
function qa(t, i = !1, o = !1) {
  if (J(t) !== "Object")
    return t;
  let e = Object.assign(t, {}), n = "";
  for (let a in e)
    if (e.hasOwnProperty(a)) {
      let s = e[a];
      s === void 0 || s === "" || J(s) === "String" && s.trim() === "" || s === null || Ol(s) ? o ? i ? n += a + "=&" : e[a] = "" : delete e[a] : i && (n += a + "=" + s + "&");
    }
  return i ? n.length > 0 ? n.substring(0, n.length - 1) : "" : e;
}
function Kt(t) {
  let i = {};
  if (Array.isArray(t)) {
    i = [];
    for (let o of t)
      Array.isArray(o) || lt(o) ? i.push(Kt(o)) : Be(o) && i.push(o);
  } else if (lt(t))
    for (let o in t)
      t.hasOwnProperty(o) && (Array.isArray(t[o]) || lt(t[o]) ? i[o] = Kt(t[o]) : Be(t[o]) && (i[o] = t[o]));
  return i;
}
function Ja(t) {
  const i = window.open();
  if (i) {
    i.document.write(t);
    let o = setTimeout(() => {
      i.print(), window.clearTimeout(o), o = null;
    }, 10);
  }
}
function Ll(t) {
  let i = [], o = t;
  for (; t.previousSibling && (t = t.previousSibling); )
    t.nodeType === 1 && i.push(t);
  for (; o.nextSibling && (o = o.nextSibling); )
    o.nodeType === 1 && i.push(o);
  return i;
}
const Ya = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clearObj: $t,
  dataFilterOrToUrl: qa,
  decimalDigitsLimit: Na,
  downloadFileByFormSubmit: Tl,
  fileExport: Ea,
  findCollection: Ze,
  formDataHeadConfig: za,
  getColumnsKeys: Ga,
  hasPermission: xl,
  htmlPrint: Ja,
  isClient: Rt,
  isEmptyValue: Wa,
  isNaN: Ol,
  isNumberValue: Ha,
  isValidValue: Be,
  myTypeof: J,
  oneOf: Ua,
  removeEmptyValue: Kt,
  setValByOption: tt,
  setValue: Ue,
  siblingElems: Ll,
  stringLength: ja,
  toFormData: Da,
  toLine: Sl,
  tooltipManual: Bl,
  trimObj: bt
}, Symbol.toStringTag, { value: "Module" })), Xa = { class: "groupBoxRP" }, Qa = ["onClick"], Za = /* @__PURE__ */ me({
  __name: "SideMenuGroup",
  props: {
    data: { default: () => [] },
    pathName: { default: "" }
  },
  setup(t) {
    const i = ca(), o = t;
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
      let u = c.parentNode, v = Ll(u);
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
      const c = Q("sideMenuGroup", !0);
      return S(), D("ul", Xa, [
        (S(!0), D(be, null, _e(o.data, (u, v) => (S(), D(be, {
          key: (u == null ? void 0 : u.path) + v
        }, [
          u ? (S(), D("li", {
            key: 0,
            class: xe({ dropItemRP: u.children })
          }, [
            F("div", {
              class: xe(["menuTxtR", e(u)]),
              onClick: (d) => n(d, u),
              style: oe({ paddingLeft: u.level * 20 + "px" })
            }, G(u.name || "-- no name --"), 15, Qa),
            u.children ? (S(), Z(c, {
              key: 0,
              data: u.children,
              "path-name": o.pathName
            }, null, 8, ["data", "path-name"])) : ce("", !0)
          ], 2)) : ce("", !0)
        ], 64))), 128))
      ]);
    };
  }
}), en = { class: "menuListR" }, tn = /* @__PURE__ */ me({
  __name: "SideMenu",
  props: {
    data: { default: () => [] }
  },
  emits: ["on-change"],
  setup(t, { emit: i }) {
    const o = t, e = i, n = wl(), a = j(!0), s = j(), c = j(), u = H(() => a.value ? x("r.hideMenu") : x("r.showMenu")), v = H(() => a.value ? "ios-arrow-back" : "ios-arrow-forward");
    Xl(() => {
      let y = localStorage.getItem("menuDisplayR") || "";
      y !== "" ? a.value = JSON.parse(y) : (a.value = !0, localStorage.setItem("menuDisplayR", JSON.stringify(!0)));
    }), we(
      () => n.path,
      (y) => {
        s.value = y, Pe(f);
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
      const C = Q("Icon");
      return S(), D("div", {
        ref_key: "menuRef",
        ref: c,
        class: "menuBoxRP"
      }, [
        pe(F("div", en, [
          Y(Za, {
            data: o.data,
            pathName: p(s)
          }, null, 8, ["data", "pathName"])
        ], 512), [
          [ve, p(a)]
        ]),
        Y(C, {
          type: p(v),
          size: 25,
          class: xe([{ showIco: !p(a) }, "menuShowHideIco"]),
          title: p(u),
          onClick: d,
          color: p(a) ? "#fff" : "#333"
        }, null, 8, ["type", "class", "title", "color"])
      ], 512);
    };
  }
}), ln = ["title"], Al = /* @__PURE__ */ me({
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
      const c = Q("Icon"), u = Ht("has");
      return pe((S(), D("div", {
        class: xe(["tableBtnsG", { disabled: e.disabled }]),
        onClick: n,
        title: e.title || p(x)("r.button")
      }, [
        Y(c, {
          type: e.icon,
          size: e.size
        }, null, 8, ["type", "size"])
      ], 10, ln)), [
        [u, e.has]
      ]);
    };
  }
}), an = { class: "contentX" }, nn = { class: "arrowA" }, Mt = /* @__PURE__ */ me({
  __name: "ShowHidePanel",
  props: {
    bg: {}
  },
  setup(t) {
    const i = t, o = j(!0), e = H(() => o ? "background:" + i.bg || "transparent" : "");
    return (n, a) => {
      const s = Q("Icon");
      return S(), D("div", {
        style: oe(p(e))
      }, [
        pe(F("div", an, [
          Le(n.$slots, "default")
        ], 512), [
          [ve, p(o)]
        ]),
        F("div", nn, [
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
}), on = { class: "contentZ" }, sn = /* @__PURE__ */ me({
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
      style: oe(p(a))
    }, [
      pe(F("div", on, [
        Le(s.$slots, "default")
      ], 512), [
        [ve, p(n)]
      ])
    ], 4));
  }
});
let zt = [], Dt = [];
const rn = function(t) {
  t && t.beforeEach ? t.beforeEach(() => {
    zt.map((i) => {
      window.clearTimeout(i);
    }), Dt.map((i) => {
      window.clearInterval(i);
    }), zt.length = 0, Dt.length = 0;
  }) : console.warn(
    "安装库plug-r-qw时未传入router，调用该库的定时器方法产生的定时器将不能自动销毁，请传入router：Vue.use(plugRQw,{router,...})"
  );
}, Fe = function(t, i) {
  let o = window.setTimeout(t, i);
  return zt.push(o), o;
}, un = function(t, i) {
  let o = window.setInterval(t, i);
  return Dt.push(o), o;
}, dn = /* @__PURE__ */ me({
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
      n || (n = !0, o("on-search", a.value), Fe(() => {
        n = !1;
      }, 2e3));
    }
    return (v, d) => {
      const f = Q("Input"), y = Q("icon");
      return S(), D("div", {
        class: "tableSearchV",
        style: oe({ position: e.fixed ? "fixed" : "absolute", right: e.right, top: e.top })
      }, [
        Le(v.$slots, "default", {}, () => [
          Y(f, {
            modelValue: p(a),
            "onUpdate:modelValue": d[0] || (d[0] = (b) => Ae(a) ? a.value = b : null),
            style: oe({ width: e.width }),
            search: "",
            onOnSearch: u,
            class: "searchInputC",
            placeholder: e.placeholder || p(x)("r.pInput")
          }, null, 8, ["modelValue", "style", "placeholder"])
        ]),
        pe(F("span", {
          class: "sbt",
          onClick: d[1] || (d[1] = (b) => s.value = !p(s)),
          style: oe({ color: e.btnColor })
        }, [
          Y(y, {
            type: p(c),
            color: e.btnColor
          }, null, 8, ["type", "color"]),
          ge(G(p(x)("r.adSearch")), 1)
        ], 4), [
          [ve, e.showBtn]
        ])
      ], 4);
    };
  }
}), cn = {
  beforeMount(t, i) {
    function o(e) {
      var n;
      if (t.contains(e.target))
        return !1;
      (n = i == null ? void 0 : i.value) == null || n.call(i, e);
    }
    t.__vueClickOutside__ = o, Rt && document.addEventListener("click", o);
  },
  unmounted(t) {
    Rt && document.removeEventListener("click", t.__vueClickOutside__), delete t.__vueClickOutside__;
  }
};
function Pl(t, i, o, e, n = !1) {
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
const fn = { class: "tabSetF" }, pn = { class: "cannotSelect" }, mn = { class: "topCheck" }, hn = /* @__PURE__ */ F("span", { class: "iconfont icon-r-save" }, null, -1), Il = /* @__PURE__ */ me({
  __name: "TableSetting",
  props: {
    modelValue: { default: () => [] },
    sKey: {},
    width: { default: "240px" },
    bg: { default: () => Ce().tableSettingBg },
    placement: { default: "bottom-end" },
    defaultCheck: { type: Boolean, default: !1 },
    storage: { default: "localStorage" },
    transfer: { type: Boolean, default: () => Ce().tableSettingTransfer },
    eventsEnabled: { type: Boolean, default: () => Ce().tableSettingEventsEnabled }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: i }) {
    var m, R, h, $, I;
    const o = i, e = t, n = j(), a = j(), s = j(!0), c = j(!1), u = j(!1), v = j([]), d = H(() => {
      var U;
      let T = x("r.unknown");
      return ((U = e.modelValue) == null ? void 0 : U.length) > v.value.length && (v.value = de(e.modelValue)), v.value.map((M) => {
        let le = { label: (M == null ? void 0 : M.title) || T };
        return M != null && M.disableShowSetting && (le.disabled = !0), le;
      });
    }), f = H(() => d.value.filter((T) => T == null ? void 0 : T.disabled)), y = H({
      get() {
        var T, U;
        return (U = (T = e.modelValue) == null ? void 0 : T.map) == null ? void 0 : U.call(T, (M) => (M == null ? void 0 : M.title) || x("r.unknown"));
      },
      set(T) {
        let U = v.value.filter((M) => {
          for (let le of T)
            if (le === (M == null ? void 0 : M.title))
              return !0;
          return !1;
        });
        o("update:modelValue", U);
      }
    }), b = (I = ($ = (h = (R = (m = wt()) == null ? void 0 : m.appContext) == null ? void 0 : R.config) == null ? void 0 : h.globalProperties) == null ? void 0 : $.$i18n) == null ? void 0 : I.locale;
    let C = null;
    Ne(() => {
      let T = x("r.unknown"), U = A();
      U ? y.value = JSON.parse(decodeURI(U)) : e.defaultCheck && (y.value = e.modelValue.filter((M) => M == null ? void 0 : M.showSettingCheck).map((M) => (M == null ? void 0 : M.title) || T)), Pe(function() {
        !n.value || !a.value || (C = new fa(n.value, a.value, {
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
            var le;
            if (M != null && M.popper && ((le = M.instance) != null && le.popper)) {
              const ye = g(M), { needChange: W } = ye;
              if (W) {
                const { height: se } = ye, ie = M.instance.popper;
                ie.style && (ie.style.height = `${se}px`);
              }
            }
          }
        }));
      }), Fe(() => {
        var M;
        u.value = !0, (M = C == null ? void 0 : C.update) == null || M.call(C), Pe(function() {
          u.value = !1;
        });
      }, 0);
    }), gl(function() {
      var T;
      (T = C == null ? void 0 : C.destroy) == null || T.call(C);
    });
    function g(T) {
      var W, se;
      const { height: U } = T.popper, M = T.instance.popper, le = window.innerHeight;
      let ye = 0;
      if ((W = M.childNodes) != null && W.length)
        for (let ie = 0; ie < M.childNodes.length; ie++)
          ye += (se = M.childNodes[ie]) == null ? void 0 : se.offsetHeight;
      return le < U - 10 || U < ye ? {
        needChange: !0,
        height: le - 10 < ye ? le - 10 : ye
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
      u.value && (P() && Pl(x("r.notSave"), "", "warning", B), u.value = !1);
    }
    function L() {
      u.value ? w() : (u.value = !0, Pe(function() {
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
          const le = a.value;
          if (le === (T == null ? void 0 : T.target) || (U = le == null ? void 0 : le.contains) != null && U.call(le, T == null ? void 0 : T.target))
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
    function P() {
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
      const M = Q("Icon"), le = Q("Checkbox"), ye = Q("CheckboxGroup");
      return pe((S(), D("div", fn, [
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
          F("span", pn, G(p(x)("r.tabSetting")), 1)
        ], 512),
        (S(), Z(Ql, {
          to: "body",
          disabled: !e.transfer
        }, [
          pe(F("div", {
            ref_key: "popperRef",
            ref: a,
            class: "tabSetCard",
            style: oe({ width: e.width, backgroundColor: e.bg })
          }, [
            F("div", mn, [
              Y(le, {
                indeterminate: p(s),
                modelValue: p(c),
                "onUpdate:modelValue": U[0] || (U[0] = (W) => Ae(c) ? c.value = W : null),
                onClick: Ot(K, ["prevent"])
              }, {
                default: ee(() => [
                  ge(G(p(x)("r.all")), 1)
                ]),
                _: 1
              }, 8, ["indeterminate", "modelValue"]),
              F("div", {
                class: "btnR",
                style: { float: "right", display: "inline-block" },
                onClick: B
              }, [
                hn,
                F("span", null, G(p(x)("r.save")), 1)
              ])
            ]),
            Y(ye, {
              modelValue: p(y),
              "onUpdate:modelValue": U[1] || (U[1] = (W) => Ae(y) ? y.value = W : null)
            }, {
              default: ee(() => [
                (S(!0), D(be, null, _e(p(d), (W, se) => (S(), Z(le, {
                  class: "setItem",
                  label: W && W.label,
                  key: "tabSet_" + e.sKey + se,
                  disabled: W && W.disabled
                }, null, 8, ["label", "disabled"]))), 128))
              ]),
              _: 1
            }, 8, ["modelValue"])
          ], 4), [
            [ve, p(u)]
          ])
        ], 8, ["disabled"]))
      ])), [
        [p(cn), V]
      ]);
    };
  }
});
let rt = !1;
function Ut({
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
  let C = (t && Number(t) - 90 > 100 ? Number(t) - 90 + "px" : 0) || "100px", g = J(e) === "String";
  const _ = typeof e == "function";
  We.warning({
    width: i,
    footerHide: !0,
    render: () => Te(
      "div",
      {
        class: "customMessageBox",
        style: {
          height: C
        }
      },
      [
        Te(
          "div",
          {
            class: "containerN"
          },
          [
            Te(
              "div",
              {
                class: "titleN"
              },
              [
                Te("span", o || y("r.info.title")),
                Te(
                  Tt,
                  {
                    class: "fr closeN",
                    type: "text",
                    onClick() {
                      rt || (We.remove(), s && J(s) === "Function" && s());
                    }
                  },
                  () => Te("i", {
                    class: "ivu-icon ivu-icon-ios-close",
                    style: {
                      fontSize: "30px"
                    }
                  })
                )
              ]
            ),
            Te(
              "div",
              {
                class: "contentN",
                style: {
                  textAlign: g ? "center" : "left"
                }
              },
              [
                Te("i", {
                  class: g && !v ? "ivu-icon ivu-icon-ios-alert-outline" : "hide",
                  style: {
                    fontSize: "60px",
                    color: "#f8bb86"
                  }
                }),
                Te("div", { class: "msgBoxConO" }, _ ? [e(Te)] : e || y("r.info.text"))
              ]
            ),
            Te(
              "div",
              {
                class: "footerN",
                style: {
                  textAlign: d || "center"
                }
              },
              [
                Te(
                  Tt,
                  {
                    class: "okBtN",
                    onClick(w) {
                      var L, B, V, K, A, P, m, R, h;
                      if (n && typeof n == "function") {
                        const $ = n();
                        if ($ && J($) === "Promise") {
                          rt = !0;
                          const I = (w == null ? void 0 : w.currentTarget) || (w == null ? void 0 : w.target);
                          I && ((B = (L = I.classList) == null ? void 0 : L.add) == null || B.call(L, "ivu-btn-loading"), (K = (V = I.nextSibling) == null ? void 0 : V.setAttribute) == null || K.call(V, "disabled", "disabled"), (h = (R = ((m = (P = (A = I.parentElement) == null ? void 0 : A.parentElement) == null ? void 0 : P.querySelector) == null ? void 0 : m.call(P, ".titleN .closeN")).classList) == null ? void 0 : R.add) == null || h.call(R, "disabled")), Promise.resolve($).then(() => {
                            rt = !1, We.remove();
                          }).catch(() => {
                            rt = !1, We.remove();
                          });
                        } else
                          We.remove();
                      }
                    }
                  },
                  () => [
                    Te("i", {
                      class: "ivu-load-loop ivu-icon ivu-icon-ios-loading"
                    }),
                    Te("span", c || y("r.confirm"))
                  ]
                ),
                Te(
                  Tt,
                  {
                    class: ["cancelBtN", !f && "hide"],
                    onClick() {
                      rt || (We.remove(), J(a) === "Function" && a && a());
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
let Qe = 0, ct = document.createElement("div");
ct.setAttribute("class", "spinModal");
ct.innerHTML = '<div class="loader"><svg class="circular" viewBox="25 25 50 50"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10" /></svg></div>';
window.onload = function() {
  document.getElementsByTagName("body")[0].append(ct);
};
function ul(t) {
  t ? ct.classList.add("show") : ct.classList.remove("show");
}
function Fl(t) {
  let i = Qe;
  t ? Qe++ : Qe > 0 && Qe--, i !== Qe && (Qe === 0 ? ul(!1) : i === 0 && ul(!0));
}
const yn = window.location.origin;
let kt = null;
const dl = (...t) => Ee.apply(kt, t);
let Ke = Pt.create({
  baseURL: yn,
  withCredentials: !0
  // 允许携带cookie
});
function vn() {
  console.info(
    "store为空，请在安装插件时传入store实例，vuex：app.use(plugRQw,{store})，Pinia：app.use(plugRQw,{useStore})"
  );
}
Ke.interceptors.request.use(
  (t) => t,
  (t) => Promise.reject(t)
);
function cl() {
  var t, i;
  if (Ke.store)
    if (typeof Ke.store == "function") {
      const o = Ke.store();
      o.logout && o.logout();
    } else
      (i = (t = Ke.store) == null ? void 0 : t.dispatch) == null || i.call(t, "logout");
  else
    vn();
}
Ke.interceptors.response.use(
  (t) => {
    var i, o;
    return kt && (((i = t == null ? void 0 : t.data) == null ? void 0 : i.code) === 403 || ((o = t == null ? void 0 : t.data) == null ? void 0 : o.code) === 409) && Ut({
      content: dl("r.http." + t.data.code),
      onOk: cl
    }), t;
  },
  (t) => {
    var i, o;
    return kt && (((i = t == null ? void 0 : t.response) == null ? void 0 : i.status) === 403 || ((o = t == null ? void 0 : t.response) == null ? void 0 : o.status) === 409) && Ut({
      content: dl("r.http." + t.response.status),
      onOk: cl
    }), console.warn("请求出错：", t), Promise.reject(t);
  }
);
function He(t, i, o, e) {
  e && e.spin && Fl(!1);
  let n = !0, a = t && t.data;
  if (a) {
    o = o || [];
    for (let s of o)
      a = a[s], n = n && a;
    return n ? a : (i && console.warn(i), !1);
  }
  return i && console.warn(i), !1;
}
function gn(t, i, o, e, n, a, s) {
  return new Promise((c, u) => {
    switch (t) {
      case "get":
        Ke.get(i, { params: o }).then((d) => {
          let f = He(d, e, n, a);
          f ? c(f) : u(d);
        }).catch((d) => {
          He({}, e, n, a), u(d);
        });
        break;
      case "delete":
        let v = s ? "params" : "data";
        Ke.delete(i, { [v]: o }).then((d) => {
          let f = He(d, e, n, a);
          f ? c(f) : u(d);
        }).catch((d) => {
          He({}, e, n, a), u(d);
        });
        break;
      case "post":
        Ke.post(i, o, a).then((d) => {
          let f = He(d, e, n, a);
          f ? c(f) : u(d);
        }).catch((d) => {
          He({}, e, n, a), u(d);
        });
        break;
      case "put":
        Ke.put(i, o, a).then((d) => {
          let f = He(d, e, n, a);
          f ? c(f) : u(d);
        }).catch((d) => {
          He({}, e, n, a), u(d);
        });
        break;
    }
  });
}
function mt(t, i, o = {}, e, n, a, s) {
  return new Promise((c, u) => {
    var v;
    if (i) {
      a && a.spin && Fl(!0);
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
      gn(y, d, f, e, n, a, s).then((b) => {
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
    Ke.store = t, kt = i.config.globalProperties;
  },
  post(t, i, o, e, n) {
    return new Promise((a, s) => {
      mt("post", t, i, o, e, n).then((c) => {
        a(c);
      }).catch((c) => {
        s(c);
      });
    });
  },
  put(t, i, o, e, n) {
    return new Promise((a, s) => {
      mt("put", t, i, o, e, n).then((c) => {
        a(c);
      }).catch((c) => {
        s(c);
      });
    });
  },
  get(t, i, o, e, n) {
    return new Promise((a, s) => {
      mt("get", t, i, o, e, n).then((c) => {
        a(c);
      }).catch((c) => {
        s(c);
      });
    });
  },
  delete(t, i, o, e, n, a = !0) {
    return new Promise((s, c) => {
      mt("delete", t, i, o, e, n, a).then((u) => {
        s(u);
      }).catch((u) => {
        c(u);
      });
    });
  },
  all: Pt.all,
  spread: Pt.spread,
  config: Ke
}, bn = {
  key: 0,
  class: "pageTotal"
}, kn = {
  key: 1,
  class: "pageProSize"
}, Rl = /* @__PURE__ */ me({
  __name: "PagePro",
  props: {
    modelValue: { default: 1 },
    total: { default: 0 },
    pageSize: { default: 10 },
    size: { default: "default" },
    pageSizeOpts: { default: () => {
      var t;
      return ((t = Ce()) == null ? void 0 : t.pageSizes) || [10, 20, 50, 100];
    } },
    showTotal: { type: Boolean, default: () => {
      var t;
      return (t = Ce()) == null ? void 0 : t.pageShowTotal;
    } },
    showSizer: { type: Boolean, default: () => {
      var t;
      return (t = Ce()) == null ? void 0 : t.pageShowSizer;
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
      const u = Q("Page"), v = Q("Option"), d = Q("Select");
      return S(), D("div", {
        class: xe(["pagePro", { pageProDefault: e.size === "default" }])
      }, [
        e.showTotal ? (S(), D("span", bn, G(p(x)("r.total") + " ") + G(e.total) + G(" " + p(x)("r.items")), 1)) : ce("", !0),
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
        e.showSizer ? (S(), D("div", kn, [
          Y(d, {
            modelValue: p(a),
            "onUpdate:modelValue": c[1] || (c[1] = (f) => Ae(a) ? a.value = f : null),
            size: e.size,
            transfer: e.transfer,
            disabled: e.disabled
          }, {
            default: ee(() => [
              (S(!0), D(be, null, _e(e.pageSizeOpts, (f) => (S(), Z(v, {
                value: f,
                key: f
              }, {
                default: ee(() => [
                  ge(G(f) + " " + G(p(x)("r.page")), 1)
                ]),
                _: 2
              }, 1032, ["value"]))), 128))
            ]),
            _: 1
          }, 8, ["modelValue", "size", "transfer", "disabled"])
        ])) : ce("", !0)
      ], 2);
    };
  }
}), wn = {
  class: "btTablePage fullHeight flexColumnBox",
  ref: "tableBox"
}, _n = { class: "topBtn" }, Vn = { class: "tableContainer growFlexItem" }, Cn = { class: "fullHeight relativeBox" }, Sn = {
  ref: "tableContainerLOI",
  class: "fullFlowContent"
}, Tn = { class: "pageContainer" }, Bn = 300, Nt = /* @__PURE__ */ me({
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
      return (t = Ce()) == null ? void 0 : t.btTablePageUsePagePro;
    } },
    showTotal: { type: Boolean, default: () => {
      var t;
      return (t = Ce()) == null ? void 0 : t.pageShowTotal;
    } },
    showSizer: { type: Boolean, default: () => {
      var t;
      return (t = Ce()) == null ? void 0 : t.pageShowSizer;
    } },
    pageSize: { default: 10 },
    pageComponentSize: { default: "default" },
    noElevator: { type: Boolean, default: !1 }
  },
  emits: ["on-selection-change", "on-data-change"],
  setup(t, { expose: i, emit: o }) {
    var qe;
    const e = o;
    ({ ...{
      showSettingCheck: !1,
      disableShowSetting: !1
    }, ...sa });
    const a = t, s = ((qe = Ce()) == null ? void 0 : qe.pageSizes) || [10, 20, 50, 100], c = j(a.data), u = j(
      localStorage.getItem("btPageSize") && Number(localStorage.getItem("btPageSize")) || a.pageSize
    ), v = j(1), d = j(0);
    let f = [], y, b, C = a.orderKey, g = a.orderDefault;
    const _ = H(() => {
      for (let E of a.columns)
        if (E != null && E.fixed)
          return !0;
      return !1;
    }), w = H(() => a.selectionFixed || _.value), L = H(() => {
      let E = {
        ...a.searchData,
        current: v.value,
        size: u.value
      };
      return a.sortable === "custom" && (a.orderKeyFormat === "underline" ? E[g] = Sl(C) : a.orderKeyFormat === "camelcase" && (E[g] = Ra(C))), E;
    }), B = H(() => {
      let E = a.columns.filter((z) => z && z.type !== "selection");
      if (a.selection || a.radio) {
        let z;
        a.radio ? z = {
          title: " ",
          width: 65,
          render: (ue, ke) => Te(ra, {
            modelValue: ke.row.btChecked
          })
        } : z = {
          type: "selection",
          width: 60
        }, a.selectionFixed && (z.fixed = a.selectionFixed), E.unshift(z);
      }
      return E.forEach((z) => {
        var ue;
        z && (a.sortable === "custom" ? z.key && z.sortable !== !0 && z.sortable !== !1 && (z.sortable = "custom") : z.sortable = !1, z.align || (z.align = ((ue = Ce()) == null ? void 0 : ue.btTablePageAlign) || "center"));
      }), a.tableEmptyTdHandle && E.forEach((z) => {
        var ue;
        z != null && z.key && z.render === void 0 && (z.tooltip ? z.render = Bl(z.key, !0, "", (ue = Ce()) == null ? void 0 : ue.fontSizeBase) : z.render = (ke, Se) => {
          let ae = Se.row[z.key];
          return ke("span", ae === "" || ae === null || ae === void 0 ? "--" : ae);
        });
      }), E;
    }), V = H({
      get() {
        return c.value.map((E, z) => ({
          btKey: "bt-" + z,
          btChecked: !1,
          ...E
        }));
      },
      set(E) {
        c.value = E;
      }
    }), K = H(() => f.map((E) => E == null ? void 0 : E.id)), A = H(() => f.map((E) => E == null ? void 0 : E.btKey)), P = j();
    we(() => a.searchData, m, { deep: !0 }), we(
      () => a.orderDefault,
      (E) => {
        g = E;
      }
    ), we(
      () => a.orderKey,
      (E) => {
        C = E;
      }
    );
    function m() {
      v.value = 1, Me();
    }
    function R() {
      a.initData && Me();
    }
    function h(E) {
      c.value.unshift(de(E)), Fe(() => {
        var z, ue;
        (ue = (z = P.value) == null ? void 0 : z.clickCurrentRow) == null || ue.call(z, 0);
      }, 100);
    }
    function $(E, z, ue) {
      let ke = null;
      if (z ? ke = b : typeof z == "number" && (ke = z), ke !== null) {
        let Se = c.value[ke];
        for (let ae in E)
          E.hasOwnProperty(ae) && (Se[ae] = E[ae]);
        ue && Fe(() => {
          var ae, Re;
          (Re = (ae = P.value) == null ? void 0 : ae.clickCurrentRow) == null || Re.call(ae, ke);
        }, 10);
      }
    }
    function I(E) {
      c.value.splice(E, 1), Fe(() => {
        var z, ue;
        (ue = (z = P.value) == null ? void 0 : z.clickCurrentRow) == null || ue.call(z, 0);
      }, 100);
    }
    function T(E, z) {
      var ue, ke;
      E.btChecked && a.radio || (a.selection || a.radio) && a.rowClickSelect && ((ke = (ue = P.value) == null ? void 0 : ue.toggleSelect) == null || ke.call(ue, z));
    }
    function U(E, z) {
      y = z.btKey, b = Number(z.btKey.split("-")[1]), a.radio && (c.value[b].btChecked = !0);
    }
    function M(E) {
      if (a.radio)
        for (let z of V.value)
          z != null && z.btKey && z.btKey !== y && (c.value[Number(z.btKey.split("-")[1])].btChecked = !1);
      f = E, e("on-selection-change", E);
    }
    function le() {
      return de(f);
    }
    function ye() {
      Me();
    }
    function W(E) {
      u.value = E, localStorage.setItem("btPageSize", String(E)), v.value === 1 && Me();
    }
    function se({ key: E, order: z }) {
      g === "normal" ? (C = a.orderKey, g = a.orderDefault) : (C = E, g = z), v.value = 1, he();
    }
    function ie(E) {
      var ue, ke, Se, ae, Re, Je, Ye, ot;
      const z = E;
      if (typeof z == "number")
        N(), b = z, y = (ke = (ue = V.value) == null ? void 0 : ue[z]) == null ? void 0 : ke.btKey, (ae = (Se = P.value) == null ? void 0 : Se.clickCurrentRow) == null || ae.call(Se, z);
      else if (Array.isArray(z)) {
        if (a.radio || !a.selection)
          return;
        N();
        for (let Ge of z)
          (Je = (Re = P.value) == null ? void 0 : Re.clickCurrentRow) == null || Je.call(Re, Ge);
      } else if (typeof z == "function")
        for (let Ge = 0; Ge < V.value.length; Ge++) {
          const ft = V.value[Ge];
          z(ft) && ((ot = (Ye = P.value) == null ? void 0 : Ye.clickCurrentRow) == null || ot.call(Ye, Ge));
        }
    }
    function N() {
      var E, z;
      if (a.radio) {
        if (A.value.length > 0 && V.value.length > 0) {
          let ue = A.value[0].split("-")[1];
          V.value[ue].btChecked = !1;
        }
      } else
        (z = (E = P.value) == null ? void 0 : E.selectAll) == null || z.call(E, !1);
      f.length > 0 && (f = [], e("on-selection-change", [])), y = null, b = null;
    }
    function re() {
      c.value = [], N(), v.value = 1, d.value = 0;
    }
    function he(E, z, ue) {
      return new Promise((ke) => {
        E && (g = E), z && (C = z), a.url ? De[a.method](a.url, L.value, "", [], { spin: a.getDataLoading }).then((Se) => {
          var Re, Je;
          let ae;
          ue || N(), typeof a.dataHandler == "function" ? ae = a.dataHandler(Se) : ae = Se, ae.data ? (ae.data.records || ae.data.records === null ? c.value = ae.data.records || [] : ae.data.page ? (ae.data.page.records || ae.data.page.records === null) && (c.value = ae.data.page.records || []) : ae.data.data ? (ae.data.data.records || ae.data.data.records === null) && (c.value = ae.data.data.records || []) : c.value = ae.data, d.value = ((Re = ae.data.page) == null ? void 0 : Re.total) || ((Je = ae.data.data) == null ? void 0 : Je.total) || ae.data.total || ae.total || 0, d.value === 0 && v.value > 1 && c.value && c.value.length === 0 ? v.value = 1 : v.value > 1 && d.value <= (v.value - 1) * u.value && (v.value--, Pe(function() {
            he(E, z);
          })), e("on-data-change", ae), ke(ae)) : (console.warn("请求返回数据有误，无法使用"), re(), e("on-data-change", ae));
        }).catch((Se) => {
          N(), re(), e("on-data-change", Se);
        }) : console.warn("没有有效的请求地址，无法获取表格数据");
      });
    }
    function Me(E, z, ue) {
      a.radio && (E || a.rowClickNum !== -1) ? he(z, ue, E).then(() => {
        c.value.length > 0 && Fe(() => {
          var ke, Se, ae, Re;
          E ? (Se = (ke = P.value) == null ? void 0 : ke.clickCurrentRow) == null || Se.call(ke, b || 0) : (Re = (ae = P.value) == null ? void 0 : ae.clickCurrentRow) == null || Re.call(ae, a.rowClickNum);
        }, 10);
      }) : he();
    }
    return Ne(R), i({
      selectedIds: K,
      addRow: h,
      setRowData: $,
      deleteRow: I,
      getSelected: le,
      selectRow: ie,
      clearSelect: N,
      clearTableData: re,
      getTableData: he,
      getDataAndClickRow: Me
    }), (E, z) => {
      const ue = Q("Table"), ke = Q("Page");
      return S(), D("div", wn, [
        pe(F("div", _n, [
          Le(E.$slots, "tableSetting"),
          Le(E.$slots, "topMsg"),
          Le(E.$slots, "topBtnGroup")
        ], 512), [
          [ve, a.showTopRow]
        ]),
        F("div", Vn, [
          F("div", Cn, [
            F("div", Sn, [
              Y(ue, nt({
                ref_key: "tableRef",
                ref: P
              }, E.$attrs, {
                height: p(w) && Bn || null,
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
        pe(F("div", Tn, [
          a.usePagePro ? (S(), Z(Rl, {
            key: 0,
            modelValue: p(v),
            "onUpdate:modelValue": z[0] || (z[0] = (Se) => Ae(v) ? v.value = Se : null),
            total: p(d),
            showTotal: a.showTotal,
            pageSize: p(u),
            showSizer: a.showSizer,
            pageSizeOpts: p(s),
            size: a.pageComponentSize,
            onOnChange: ye,
            onOnPageSizeChange: W
          }, null, 8, ["modelValue", "total", "showTotal", "pageSize", "showSizer", "pageSizeOpts", "size"])) : (S(), Z(ke, {
            key: 1,
            modelValue: p(v),
            "onUpdate:modelValue": z[1] || (z[1] = (Se) => Ae(v) ? v.value = Se : null),
            total: p(d),
            pageSize: p(u),
            pageSizeOpts: p(s),
            showSizer: a.showSizer,
            showTotal: a.showTotal,
            size: a.pageComponentSize,
            showElevator: !a.noElevator,
            onOnChange: ye,
            onOnPageSizeChange: W
          }, null, 8, ["modelValue", "total", "pageSize", "pageSizeOpts", "showSizer", "showTotal", "size", "showElevator"]))
        ], 512), [
          [ve, !a.noPage]
        ])
      ], 512);
    };
  }
}), $l = /* @__PURE__ */ me({
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
    const v = bl((d) => {
      o("on-change", d);
    }, 500);
    return (d, f) => {
      const y = Q("Option"), b = Q("Select"), C = Q("Input");
      return S(), D("div", null, [
        Y(b, {
          modelValue: p(n),
          "onUpdate:modelValue": f[0] || (f[0] = (g) => Ae(n) ? n.value = g : null),
          style: oe(p(s)),
          disabled: !!e.disabled,
          transfer: ""
        }, {
          default: ee(() => [
            (S(!0), D(be, null, _e(e.selectOption, (g, _) => (S(), Z(y, {
              value: g == null ? void 0 : g.val,
              label: g == null ? void 0 : g.label,
              key: "selectInputOp" + (g == null ? void 0 : g.value) + _,
              style: oe({ textAlign: e.labelTextAlign })
            }, null, 8, ["value", "label", "style"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue", "style", "disabled"]),
        Y(C, {
          modelValue: p(a),
          "onUpdate:modelValue": f[1] || (f[1] = (g) => Ae(a) ? a.value = g : null),
          placeholder: e.placeholder || p(x)("r.pInput"),
          style: oe(p(c)),
          clearable: e.clearable,
          disabled: !!e.disabled,
          onOnChange: u
        }, null, 8, ["modelValue", "placeholder", "style", "clearable", "disabled"])
      ]);
    };
  }
});
let Et = { securityJsCode: "", key: "" };
function xn({ securityJsCode: t, key: i }) {
  Et.securityJsCode = t, Et.key = i;
}
function On(t) {
  return Et[t];
}
const Kl = /* @__PURE__ */ me({
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
        return e.modelValue ? e.modelValue.name ? V = de(e.modelValue) : V = {
          ...e.modelValue,
          name: null
        } : V = {
          name: null
        }, V;
      },
      set(V) {
        o("update:modelValue", de(V));
      }
    }), a = H(() => ut(e.width) ? e.width + "px" : e.width), s = H(() => ut(e.height) ? e.height + "px" : e.height ? e.height : ut(e.width) ? e.width * 0.66 + "px" : "200px"), c = H(() => ({
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
    const v = "mapId" + Math.floor(Math.random() * 1e9), d = j(null), f = j(null);
    let y;
    function b() {
      f.value && f.value.clientHeight < 10 || !f.value ? Fe(b, 300) : Fe(w, 100);
    }
    let C, g, _;
    function w() {
      ol.load({
        key: On("key"),
        version: "2.0",
        plugins: ["AMap.AutoComplete", "AMap.Geocoder"]
      }).then((V) => {
        C = V, g = new C.Map(v).on("complete", () => {
          var A, P, m, R;
          _ = new C.Geocoder(), (A = e.modelValue) != null && A.lng && ((P = e.modelValue) != null && P.lat) && L({
            lng: e.modelValue.lng,
            lat: e.modelValue.lat,
            name: e.modelValue.name
          });
          const K = (R = (m = d.value) == null ? void 0 : m.$el) == null ? void 0 : R.children;
          K && K.length > 1 && new C.AutoComplete({
            input: K[1]
          }).on("select", (h) => {
            var $, I, T;
            ($ = h == null ? void 0 : h.poi) != null && $.name && ((I = h.poi.location) != null && I.lng && ((T = h.poi.location) != null && T.lat) ? (L({
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
      let P = new C.LngLat(V, K), m = new C.Marker({
        map: g,
        position: P,
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
      _.getAddress([V, K], (A, P) => {
        A === "complete" && P.info === "OK" && P.regeocode && P.regeocode.formattedAddress ? y = new C.InfoWindow({
          //创建信息窗体
          isCustom: !0,
          content: '<div class="mapInfoWindowIKJ">' + P.regeocode.formattedAddress + "</div>",
          offset: new C.Pixel(16, -45),
          closeWhenClickMap: !0
        }) : (y = null, console.warn("地图获取位置信息失败", P));
      });
    }
    return Ne(b), Zl(() => {
      var V;
      g && (g.destroy(), (V = ol) == null || V.reset(), g = null, _ = null, y = null);
    }), (V, K) => (S(), D("div", {
      style: oe(p(c)),
      class: "containerIKJ"
    }, [
      Y(p(ua), {
        ref_key: "mapInputRef",
        ref: d,
        modelValue: p(n).name,
        "onUpdate:modelValue": K[0] || (K[0] = (A) => p(n).name = A),
        class: xe({ mapInputIKJ: e.showMap }),
        placeholder: e.placeholder || p(x)("r.search"),
        disabled: e.disabled,
        icon: "ios-search"
      }, null, 8, ["modelValue", "class", "placeholder", "disabled"]),
      F("div", {
        style: oe(p(u)),
        ref_key: "mapRef",
        ref: f,
        id: v
      }, null, 4)
    ], 4));
  }
});
var yl;
const Ml = /* @__PURE__ */ me({
  __name: "AsyncCascader",
  props: {
    modelValue: {},
    url: { default: (yl = window == null ? void 0 : window.g) != null && yl.mgrURL ? window.g.mgrURL + "/web/v1/umc/orgs" : "" },
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
    const o = i, e = t, n = j([]), a = H({
      get() {
        let d = e.modelValue;
        return Array.isArray(d) ? de(d) : ut(d) ? Ft({
          group: n.value,
          condition: (f) => (f == null ? void 0 : f.value) === d,
          pathKey: "value"
        }) : Wt(d) ? d.split(e.separator) : [];
      },
      set(d) {
        if (e.onlyLastVal)
          Oe(d) ? (o("update:modelValue", null), o("on-label-change", null)) : o("update:modelValue", yt(d));
        else {
          if (dt(e.modelValue, d))
            return;
          o("update:modelValue", de(d));
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
        (y = d == null ? void 0 : d.data) != null && y.records ? f = d.data.records : d != null && d.data ? f = d.data : d && (f = d), f ? (typeof e.optionFilter == "function" && J(e.optionFilter) === "Function" && (f = e.optionFilter(f)), n.value = c(f)) : console.warn("级联数据错误，不能使用");
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
      return e.onlyLastLabel ? yt(d) : d.join(e.separator);
    }
    function v(d, f) {
      let y = "";
      Oe(f) || (y = f.map((b) => b == null ? void 0 : b.label).join(e.separator)), o("on-label-change", y);
    }
    return Ne(s), (d, f) => {
      const y = Q("Cascader");
      return S(), Z(y, {
        data: p(n),
        modelValue: p(a),
        "onUpdate:modelValue": f[0] || (f[0] = (b) => Ae(a) ? a.value = b : null),
        onOnChange: v,
        "change-on-select": "",
        transfer: "",
        disabled: e.disabled,
        "render-format": u,
        placeholder: e.placeholder || p(x)("r.pSelect"),
        filterable: e.filterable
      }, null, 8, ["data", "modelValue", "disabled", "placeholder", "filterable"]);
    };
  }
}), zl = /* @__PURE__ */ me({
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
    const o = i, e = t, n = j(), a = H({
      get() {
        if (e.modelValue && (ut(e.modelValue) || Wt(e.modelValue))) {
          let c = String(e.modelValue).trim();
          if (/^\d*$/.test(c)) {
            let v = c.substring(0, 2) + "0000", d, f = s(c);
            return f.length < 7 ? d = c.substring(0, 4) + "00" : d = c.substring(0, 6), /^8\d+$/.test(c) ? [v, f] : [v, d, f];
          }
          return c.indexOf(e.separator) !== -1 ? c.split(e.separator) : [c];
        } else
          return Array.isArray(e.modelValue) ? de(e.modelValue) : (n.value && (n.value.select = []), []);
      },
      set(c) {
        if (Oe(c))
          o("update:modelValue", null), o("on-name-change", null);
        else {
          let u = yt(c), v = "", d = "";
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
    return (c, u) => (S(), Z(p(pa), nt(c.$attrs, {
      class: "alCascaderMC",
      ref_key: "alCRef",
      ref: n,
      modelValue: p(a),
      "onUpdate:modelValue": u[0] || (u[0] = (v) => Ae(a) ? a.value = v : null),
      level: e.level,
      disabled: e.disabled,
      placeholder: e.placeholder || p(x)("r.pSelect"),
      transfer: e.transfer,
      searchable: e.filterable
    }), null, 16, ["modelValue", "level", "disabled", "placeholder", "transfer", "searchable"]));
  }
});
function et(t) {
  var s, c, u;
  const i = (...v) => Ee.apply(this, v), o = i("r.closePreview"), e = i("r.fullImg");
  let n = Lt(document.getElementsByTagName("body")), a = document.createElement("div");
  a.setAttribute("class", "fullScreenImgByDom"), a.innerHTML = `<div class='previewInner'><img src='${t}' alt='${e}' ><i class='ivu-icon ivu-icon-md-close' title='${o}' ></i></div>`, (c = (s = a.querySelector(".ivu-icon-md-close")) == null ? void 0 : s.addEventListener) == null || c.call(s, "click", function() {
    var d;
    let v = Lt(document.getElementsByTagName("body"));
    (d = v == null ? void 0 : v.removeChild) == null || d.call(v, a);
  }), (u = n == null ? void 0 : n.appendChild) == null || u.call(n, a);
}
const Ln = { class: "previewBoxM" }, An = { class: "imgLoading" }, Pn = /* @__PURE__ */ F("div", {
  "data-loader": "circle-side",
  class: "loader-div"
}, null, -1), In = [
  Pn
], Fn = ["src", "alt"], Rn = { class: "deleteModal" }, $n = { class: "previewBoxM" }, Kn = {
  key: 0,
  class: "previewImg"
}, Mn = ["src", "alt"], zn = { class: "deleteModal" }, Dn = { class: "customFileListM" }, Un = {
  key: 0,
  class: "customFileListItem"
}, Nn = ["onClick", "title"], En = { class: "btBoxJ" }, Gn = { class: "customFileListM" }, Hn = {
  key: 0,
  class: "customFileListItem"
}, Wn = { class: "listLoading" }, jn = /* @__PURE__ */ F("div", {
  "data-loader": "circle-side",
  class: "loader-div"
}, null, -1), qn = [
  jn
], Jn = ["onClick", "title"], Yn = { class: "btBoxJ" };
var vl;
const Dl = /* @__PURE__ */ me({
  __name: "UploadGroup",
  props: {
    modelValue: { default: () => [] },
    url: { default: (vl = window == null ? void 0 : window.g) != null && vl.mgrURL ? window.g.mgrURL + "/web/v1/fsc/file" : "" },
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
    const o = i, e = t, n = ht([]), a = ht([]), s = H(() => !e.manualUpload && e.showImg && d.value ? "img" : e.manualUpload && e.showImg && d.value ? "localImg" : e.manualUpload && e.showUploadList && (!e.showImg || !d.value) ? "localList" : !e.manualUpload && e.showUploadList && (!e.showImg || !d.value) ? "list" : ""), c = H(() => e.manualUpload ? "//jsonplaceholder.typicode.com/posts/" : e.url), u = H({
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
            return Array.isArray(e.modelValue) ? e.modelValue.filter((h) => h !== "--") : J(e.modelValue) === "File" ? [e.modelValue] : [];
          default:
            return [];
        }
      },
      set(h) {
        if (e.length === 1) {
          let $ = Lt(h);
          o("update:modelValue", $ ?? null), o("on-change", $ ?? null);
        } else
          o("update:modelValue", de(h)), o("on-change", de(h));
      }
    }), d = H(() => {
      let h;
      if (e.manualUpload ? h = u.value : h = a.value, !h)
        return !1;
      for (let $ of h) {
        let I;
        if (e.manualUpload ? I = $ == null ? void 0 : $.type : I = $ == null ? void 0 : $.mimeType, !I || I && !(xt(I) || I === "loading"))
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
          let $ = de(h);
          const I = de(a.value);
          for (let T of $)
            if ((T == null ? void 0 : T.name) === void 0)
              if (T.id) {
                const U = At(I, (M) => (M == null ? void 0 : M.id) === T.id);
                U ? (T.name = U.name, T.mimeType = U.mimeType) : (T.mimeType = "loading", De.get(e.url + "/" + T.id).then((M) => {
                  var le, ye, W, se, ie, N;
                  T.name = ((W = (ye = (le = M == null ? void 0 : M.data) == null ? void 0 : le.returnValue) == null ? void 0 : ye[0]) == null ? void 0 : W.name) || x("r.file") + al(h, T), T.mimeType = ((N = (ie = (se = M == null ? void 0 : M.data) == null ? void 0 : se.returnValue) == null ? void 0 : ie[0]) == null ? void 0 : N.mimeType) || "unknown", ea(a);
                }).catch(() => {
                  T.name = x("r.file") + al($, T);
                }));
              } else
                T.name = x("r.unknown");
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
      return (h == null ? void 0 : h.name) || (h == null ? void 0 : h.split) && yt(h.split("/")) || h;
    }
    async function y(h) {
      let $ = [];
      for (let I of h) {
        let T = await Bt(I);
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
      return e.manualUpload ? (h == null ? void 0 : h.type) && xt(h.type) : (h == null ? void 0 : h.id) && h.mimeType && xt(h.mimeType);
    }
    function _(h) {
      if (e.manualUpload) {
        if (!h)
          return;
        Bt(h).then(($) => {
          et($);
        });
      } else
        h != null && h.id && et(e.url + "/" + h.id + "/download?preview=true");
    }
    function w(h) {
      J(h) === "String" && h.indexOf("http") > -1 ? window.open(h) : J(h) === "File" && Bt(h).then(($) => {
        $a(h.name, $);
      });
    }
    function L(h) {
      var $, I;
      if (e.manualUpload) {
        if (h) {
          let T = Cl(h.name);
          if (($ = e.format) != null && $.length && e.format.indexOf(T) < 0)
            return $e(
              x("r.wrongFileType"),
              x("r.supportType") + (((I = e.format) == null ? void 0 : I.length) && String(e.format) || x("r.none")),
              "warning"
            ), !1;
          if (e.maxSize && h.size > e.maxSize * 1024)
            return $e(x("r.fileIsBig"), x("r.supportSize") + e.maxSize + "kb", "warning"), !1;
          let U = u.value;
          U == null || U.push(h), u.value = U;
        }
        return !1;
      } else
        return !0;
    }
    function B(h) {
      console.warn(h), $e(x("r.uploadError"), "", "error");
    }
    function V(h, $, I) {
      var T, U, M, le, ye, W;
      if ((h == null ? void 0 : h.code) === 0) {
        let se = u.value;
        $.id = (U = (T = h.data) == null ? void 0 : T[0]) == null ? void 0 : U.id, $.name = (le = (M = h.data) == null ? void 0 : M[0]) == null ? void 0 : le.name, $.mimeType = (W = (ye = h.data) == null ? void 0 : ye[0]) == null ? void 0 : W.mimeType, se == null || se.push($), u.value = se;
      } else
        $e(x("r.uploadFail"), (h == null ? void 0 : h.message) || "", "error");
    }
    function K() {
      $e(x("r.fileIsBig"), x("r.supportSize") + e.maxSize + " kb", "warning");
    }
    function A() {
      var h;
      $e(
        x("r.wrongFileType"),
        x("r.supportType") + (((h = e.format) == null ? void 0 : h.length) && String(e.format) || x("r.none")),
        "warning"
      );
    }
    function P(h) {
      let $ = h == null ? void 0 : h.id, I = h == null ? void 0 : h.mimeType;
      $ && (J(I) === "String" && I.indexOf("image") > -1 ? et(e.url + "/" + $ + "/download?preview=true") : window.open(e.url + "/" + $ + "/download?preview=true"));
    }
    function m(h) {
      var I, T, U;
      let $ = (U = (T = (I = h == null ? void 0 : h.response) == null ? void 0 : I.data) == null ? void 0 : T[0]) == null ? void 0 : U.id;
      R(null, $);
    }
    function R(h, $) {
      if (!(!$ && $ !== 0) && !e.disabled && v.value.indexOf($) !== -1) {
        const I = de(v.value);
        let T = u.value;
        T == null || T.splice(I.indexOf($), 1), u.value = T;
      }
    }
    return (h, $) => {
      var M, le, ye, W, se, ie;
      const I = Q("Button"), T = Q("Upload"), U = Q("Icon");
      return S(), D("div", null, [
        Y(T, {
          name: "files",
          action: p(c),
          "before-upload": L,
          "on-error": B,
          "on-success": V,
          "on-exceeded-size": K,
          "on-preview": P,
          "on-remove": m,
          "on-format-error": A,
          data: e.data,
          "max-size": e.maxSize,
          "show-upload-list": !1,
          "with-credentials": e.withCredentials,
          format: e.format,
          multiple: e.multiple || !1,
          disabled: e.length && ((M = p(u)) == null ? void 0 : M.length) && ((le = p(u)) == null ? void 0 : le.length) >= e.length || !!e.disabled
        }, {
          default: ee(() => {
            var N, re;
            return [
              Y(I, {
                icon: "ios-cloud-upload-outline",
                class: xe({
                  disabledR: e.length && ((N = p(u)) == null ? void 0 : N.length) && ((re = p(u)) == null ? void 0 : re.length) >= e.length || !!e.disabled
                })
              }, {
                default: ee(() => [
                  ge(G(p(x)("r.selectFile")), 1)
                ]),
                _: 1
              }, 8, ["class"])
            ];
          }),
          _: 1
        }, 8, ["action", "data", "max-size", "with-credentials", "format", "multiple", "disabled"]),
        pe(F("div", Ln, [
          (S(!0), D(be, null, _e(p(a), (N) => (S(), D(be, {
            key: N == null ? void 0 : N.id
          }, [
            !e.manualUpload && N && N.id !== null ? (S(), D("div", {
              key: 0,
              class: xe(["previewImg", { previewLoading: N.mimeType === "loading" }])
            }, [
              pe(F("div", An, In, 512), [
                [ve, N.mimeType === "loading"]
              ]),
              pe(F("img", {
                src: h.url + "/" + N.id + "/download?preview=true",
                alt: N.name
              }, null, 8, Fn), [
                [ve, N.mimeType !== "loading"]
              ]),
              pe(F("div", Rn, [
                Y(U, {
                  type: "ios-expand",
                  size: "40",
                  class: "previewExpand",
                  title: p(x)("r.fView"),
                  onClick: (re) => p(et)(e.url + "/" + N.id + "/download?preview=true")
                }, null, 8, ["title", "onClick"]),
                Y(U, {
                  type: "ios-trash-outline",
                  size: "40",
                  class: "previewDelete",
                  onClick: (re) => R(re, N.id),
                  title: p(x)("r.delete")
                }, null, 8, ["onClick", "title"])
              ], 512), [
                [ve, N.mimeType !== "loading"]
              ])
            ], 2)) : ce("", !0)
          ], 64))), 128))
        ], 512), [
          [ve, p(s) === "img" && ((ye = p(a)) == null ? void 0 : ye.length)]
        ]),
        pe(F("div", $n, [
          (S(!0), D(be, null, _e(p(n), (N, re) => (S(), D(be, {
            key: "manualImg" + re
          }, [
            e.manualUpload && N ? (S(), D("div", Kn, [
              F("img", {
                src: N,
                alt: "manualImg" + re
              }, null, 8, Mn),
              F("div", zn, [
                Y(U, {
                  type: "ios-expand",
                  size: "40",
                  class: "previewExpand",
                  onClick: (he) => p(et)(N),
                  title: p(x)("r.fView")
                }, null, 8, ["onClick", "title"]),
                Y(U, {
                  type: "ios-trash-outline",
                  size: "40",
                  class: "previewDelete",
                  onClick: (he) => b(re),
                  title: p(x)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : ce("", !0)
          ], 64))), 128))
        ], 512), [
          [ve, p(s) === "localImg" && ((W = p(n)) == null ? void 0 : W.length)]
        ]),
        pe(F("div", Dn, [
          (S(!0), D(be, null, _e(p(u), (N, re) => (S(), D(be, {
            key: "manualItem" + re
          }, [
            e.manualUpload && N ? (S(), D("p", Un, [
              N.name ? (S(), Z(U, {
                key: 0,
                type: p(rl)(N.name)
              }, null, 8, ["type"])) : ce("", !0),
              F("span", {
                class: xe(["upNameT", { previewName: g(N) }]),
                onClick: (he) => w(N),
                title: p(x)("r.download")
              }, G(f(N)), 11, Nn),
              F("span", En, [
                g(N) ? (S(), Z(U, {
                  key: 0,
                  type: "md-qr-scanner",
                  size: "14",
                  class: "listBtH",
                  onClick: (he) => _(N),
                  title: p(x)("r.fView")
                }, null, 8, ["onClick", "title"])) : ce("", !0),
                Y(U, {
                  type: "ios-close",
                  size: "22",
                  class: "listBtH",
                  onClick: (he) => b(re),
                  title: p(x)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : ce("", !0)
          ], 64))), 128))
        ], 512), [
          [ve, p(s) === "localList" && ((se = p(u)) == null ? void 0 : se.length)]
        ]),
        pe(F("div", Gn, [
          (S(!0), D(be, null, _e(p(a), (N, re) => (S(), D(be, {
            key: "defaultItem" + re
          }, [
            !e.manualUpload && N ? (S(), D("div", Hn, [
              pe(F("div", Wn, qn, 512), [
                [ve, N.mimeType === "loading"]
              ]),
              pe(Y(U, {
                type: p(rl)(N.name)
              }, null, 8, ["type"]), [
                [ve, N.mimeType !== "loading"]
              ]),
              pe(F("span", {
                class: xe(["upNameT", { previewName: g(N) }]),
                onClick: (he) => C(N),
                title: p(x)("r.download")
              }, G(N.name || p(x)("r.file") + (re + 1)), 11, Jn), [
                [ve, N.mimeType !== "loading"]
              ]),
              pe(F("span", Yn, [
                g(N) ? (S(), Z(U, {
                  key: 0,
                  type: "md-qr-scanner",
                  size: "14",
                  class: "listBtH",
                  onClick: (he) => _(N),
                  title: p(x)("r.fView")
                }, null, 8, ["onClick", "title"])) : ce("", !0),
                Y(U, {
                  type: "ios-close",
                  size: "22",
                  class: "listBtH",
                  onClick: (he) => b(re),
                  title: p(x)("r.delete")
                }, null, 8, ["onClick", "title"])
              ], 512), [
                [ve, N.mimeType !== "loading"]
              ])
            ])) : ce("", !0)
          ], 64))), 128))
        ], 512), [
          [ve, p(s) === "list" && ((ie = p(a)) == null ? void 0 : ie.length)]
        ])
      ]);
    };
  }
}), Xn = /* @__PURE__ */ F("div", { class: "bRoot" }, null, -1), Ul = /* @__PURE__ */ me({
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
    const o = i, e = t, n = j(!1), a = j(!1), s = j(!1), c = H({
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
    ), d = j();
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
      const L = Q("DatePicker"), B = Q("Icon"), V = Q("Input");
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
          default: ee(() => [
            Xn
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
          default: ee(() => [
            F("div", { onClick: f }, [
              Y(V, {
                class: "aRoot",
                modelValue: p(v),
                "onUpdate:modelValue": w[0] || (w[0] = (K) => Ae(v) ? v.value = K : null),
                readonly: "",
                placeholder: e.placeholder || p(x)("r.selectDate"),
                disabled: e.disabled
              }, {
                suffix: ee(() => [
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
}), Qn = { class: "editor-pro-root" }, Nl = /* @__PURE__ */ me({
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
    const o = i, e = t, n = ht(), a = H({
      get() {
        return e.modelValue;
      },
      set(d) {
        o("update:modelValue", d), o("on-change", d);
      }
    }), s = H(
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
                  $e(x("r.uploadFail"), "", "error");
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
                  $e(x("r.uploadFail"), "", "error");
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
    ), gl(() => {
      n.value && n.value.destroy();
    }), (d, f) => (S(), D("div", Qn, [
      pe(Y(p(ma), {
        class: "editor-pro-toolbar",
        editor: p(n),
        defaultConfig: p(s),
        mode: d.mode
      }, null, 8, ["editor", "defaultConfig", "mode"]), [
        [ve, !d.disabled]
      ]),
      Y(p(ha), {
        class: "editor-pro-editor",
        modelValue: p(a),
        "onUpdate:modelValue": f[0] || (f[0] = (y) => Ae(a) ? a.value = y : null),
        defaultConfig: p(c),
        mode: d.mode,
        onOnCreated: v,
        style: oe(p(u))
      }, null, 8, ["modelValue", "defaultConfig", "mode", "style"])
    ]));
  }
}), Zn = {
  key: 19,
  class: "formInfoTxtXN"
}, eo = {
  key: 20,
  class: "formTitleTxtXN"
}, fl = /* @__PURE__ */ me({
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
      const y = Q("InputNumber"), b = Q("Input"), C = Q("Option"), g = Q("Select"), _ = Q("Radio"), w = Q("Icon"), L = Q("RadioGroup"), B = Q("Checkbox"), V = Q("CheckboxGroup"), K = Q("DatePicker"), A = Q("TimePicker"), P = Q("FormItem");
      return e.item ? (S(), Z(P, {
        key: 0,
        label: e.item.type !== "radio" && e.item.type !== "checkbox" ? e.item.label : " ",
        prop: e.item.key || "",
        class: xe(["relativeBox", n(e.item)])
      }, {
        default: ee(() => [
          e.item.type === "txt" ? (S(), D("div", {
            key: 0,
            style: oe([e.itemStyle, { display: "inline-block" }]),
            class: xe({ likeInputX: e.item.likeInput, disabled: !!e.item.disabled || e.disabled })
          }, G(e.item.valKey ? e.valGroup[e.item.valKey] || "无" : e.item.val), 7)) : e.item.type === "inputNumber" ? (S(), Z(y, {
            key: 1,
            style: oe(e.itemStyle),
            modelValue: e.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": f[0] || (f[0] = (m) => e.tempKeys[e.item.tempKey] = m),
            max: e.item.max || e.item.max === 0 ? e.item.max : 1 / 0,
            min: e.item.min || e.item.min === 0 ? e.item.min : -1 / 0,
            precision: e.item.precision,
            step: e.item.step || 1,
            placeholder: e.item.placeholder || p(x)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            readonly: !!e.item.readonly,
            editable: e.item.editable !== !1,
            onOnBlur: f[1] || (f[1] = (m) => a(m, e.item)),
            "active-change": !!e.item.activeChange,
            clearable: e.item.clearable !== !1
          }, null, 8, ["style", "modelValue", "max", "min", "precision", "step", "placeholder", "disabled", "readonly", "editable", "active-change", "clearable"])) : e.item.type === "input" ? (S(), Z(b, {
            key: 2,
            style: oe(d.itemStyle),
            modelValue: e.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": f[2] || (f[2] = (m) => e.tempKeys[e.item.tempKey] = m),
            type: e.item.inputType ?? (e.item.password ? "password" : "text"),
            maxlength: e.item.maxLength || null,
            password: !!e.item.password,
            icon: e.item.icon,
            prefix: e.item.prefix,
            suffix: e.item.suffix,
            placeholder: e.item.placeholder || p(x)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            onOnBlur: f[3] || (f[3] = (m) => a(m, e.item)),
            clearable: !e.item.password && e.item.inputType === "text" && e.item.clearable !== !1
          }, at({ _: 2 }, [
            e.item.slotPosition && e.item.slotName ? {
              name: e.item.slotPosition,
              fn: ee(() => [
                Le(d.$slots, e.item.slotName, {
                  valGroup: e.valGroup
                })
              ]),
              key: "0"
            } : void 0,
            e.item.slotPosition !== "prepend" && e.item.prepend ? {
              name: "prepend",
              fn: ee(() => [
                F("span", null, G(e.item.prepend), 1)
              ]),
              key: "1"
            } : void 0,
            e.item.slotPosition !== "append" && e.item.append ? {
              name: "append",
              fn: ee(() => [
                F("span", null, G(e.item.append), 1)
              ]),
              key: "2"
            } : void 0
          ]), 1032, ["style", "modelValue", "type", "maxlength", "password", "icon", "prefix", "suffix", "placeholder", "disabled", "clearable"])) : e.item.type === "select" ? (S(), Z(g, {
            key: 3,
            modelValue: d.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": f[4] || (f[4] = (m) => d.tempKeys[e.item.tempKey] = m),
            style: oe(d.itemStyle),
            filterable: e.item.filterable === !0 || e.item.filterable === !1 ? e.item.filterable : !1,
            disabled: !!e.item.disabled || e.disabled,
            multiple: !!e.item.multiple,
            placeholder: e.item.placeholder || p(x)("r.pSelect"),
            onOnChange: f[5] || (f[5] = (m) => a(m, e.item)),
            transfer: "",
            clearable: e.item.clearable !== !1
          }, {
            default: ee(() => [
              (S(!0), D(be, null, _e(e.item.options, (m, R) => (S(), Z(C, {
                value: m.val,
                label: m.label || m.val,
                key: "option-" + e.item.key + R,
                disabled: !!m.disabled
              }, null, 8, ["value", "label", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["modelValue", "style", "filterable", "disabled", "multiple", "placeholder", "clearable"])) : e.item.type === "selectInput" ? (S(), Z($l, {
            key: 4,
            modelValue: d.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": f[6] || (f[6] = (m) => d.tempKeys[e.item.tempKey] = m),
            "label-width": d.labelWidth,
            "item-width": d.itemWidth,
            "select-option": e.item.options || [],
            placeholder: e.item.placeholder || p(x)("r.pInput"),
            clearable: e.item.clearable !== !1,
            disabled: !!e.item.disabled || e.disabled,
            onOnChange: c
          }, null, 8, ["modelValue", "label-width", "item-width", "select-option", "placeholder", "clearable", "disabled"])) : e.item.type === "alCascader" ? (S(), Z(zl, {
            key: 5,
            style: oe(d.itemStyle),
            class: "inlineBlock",
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": f[7] || (f[7] = (m) => e.valGroup[e.item.key] = m),
            level: e.item.level || e.item.level === 0 ? e.item.level : 2,
            disabled: !!e.item.disabled || e.disabled,
            filterable: e.item.filterable !== !1,
            placeholder: e.item.placeholder || p(x)("r.pSelect"),
            "change-on-select": !!e.item.changeOnSelect,
            onOnNameChange: f[8] || (f[8] = (m) => u(m, e.item))
          }, null, 8, ["style", "modelValue", "level", "disabled", "filterable", "placeholder", "change-on-select"])) : e.item.type === "asyncCascader" ? (S(), Z(Ml, {
            key: 6,
            style: oe(d.itemStyle),
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": f[9] || (f[9] = (m) => e.valGroup[e.item.key] = m),
            url: e.item.url || d.mgrUrl + "/web/v1/umc/orgs",
            "option-val": e.item.optionVal || "id",
            "option-label": e.item.optionLabel || "name",
            "option-filter": e.item.optionFilter || null,
            "only-last-val": e.item.onlyLastVal !== !1,
            "only-last-label": e.item.onlyLastLabel !== !1,
            separator: e.item.separator || "/",
            placeholder: e.item.placeholder || p(x)("r.pSelect"),
            filterable: !!e.item.filterable,
            disabled: !!e.item.disabled || e.disabled,
            onOnLabelChange: f[10] || (f[10] = (m) => v(m, e.item))
          }, null, 8, ["style", "modelValue", "url", "option-val", "option-label", "option-filter", "only-last-val", "only-last-label", "separator", "placeholder", "filterable", "disabled"])) : e.item.type === "radio" ? (S(), Z(_, {
            key: 7,
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": f[11] || (f[11] = (m) => e.valGroup[e.item.key] = m),
            disabled: !!e.item.disabled || e.disabled,
            onOnChange: f[12] || (f[12] = (m) => a(m, e.item))
          }, {
            default: ee(() => [
              ge(G(e.item.label), 1)
            ]),
            _: 1
          }, 8, ["modelValue", "disabled"])) : e.item.type === "radioGroup" ? (S(), Z(L, {
            key: 8,
            style: oe(d.itemStyle),
            onOnChange: f[13] || (f[13] = (m) => s(m, e.item)),
            type: e.item.buttonType ? "button" : null,
            modelValue: d.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": f[14] || (f[14] = (m) => d.tempKeys[e.item.tempKey] = m)
          }, {
            default: ee(() => [
              (S(!0), D(be, null, _e(e.item.options, (m) => (S(), Z(_, {
                key: "radioItem" + m.val,
                label: m.val,
                border: !!e.item.itemBorder,
                disabled: !!e.item.disabled || e.disabled || m.disabled
              }, {
                default: ee(() => [
                  m.icon && !e.item.buttonType ? (S(), Z(w, {
                    key: 0,
                    type: m.icon
                  }, null, 8, ["type"])) : ce("", !0),
                  F("span", null, G(m.label || m.val), 1)
                ]),
                _: 2
              }, 1032, ["label", "border", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["style", "type", "modelValue"])) : e.item.type === "checkbox" ? (S(), Z(B, {
            key: 9,
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": f[15] || (f[15] = (m) => e.valGroup[e.item.key] = m),
            disabled: !!e.item.disabled,
            onOnChange: f[16] || (f[16] = (m) => a(m, e.item))
          }, {
            default: ee(() => [
              ge(G(e.item.label), 1)
            ]),
            _: 1
          }, 8, ["modelValue", "disabled"])) : e.item.type === "checkboxGroup" ? (S(), Z(V, {
            key: 10,
            style: oe(d.itemStyle),
            modelValue: d.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": f[17] || (f[17] = (m) => d.tempKeys[e.item.tempKey] = m),
            onOnChange: f[18] || (f[18] = (m) => s(m, e.item))
          }, {
            default: ee(() => [
              (S(!0), D(be, null, _e(e.item.options, (m) => (S(), Z(B, {
                key: "checkItem" + m.val,
                label: m.val,
                disabled: !!e.item.disabled || e.disabled || m.disabled
              }, {
                default: ee(() => [
                  m.icon ? (S(), Z(w, {
                    key: 0,
                    type: m.icon
                  }, null, 8, ["type"])) : ce("", !0),
                  F("span", null, G(m.label || m.val), 1)
                ]),
                _: 2
              }, 1032, ["label", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["style", "modelValue"])) : e.item.type === "textarea" ? (S(), Z(b, {
            key: 11,
            type: "textarea",
            modelValue: d.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": f[19] || (f[19] = (m) => d.tempKeys[e.item.tempKey] = m),
            autosize: e.item.autosize || { minRows: 2 },
            style: oe(d.itemStyle),
            maxlength: e.item.maxLength || null,
            "show-word-limit": !!e.item.showWordLimit,
            placeholder: e.item.placeholder || p(x)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            onOnBlur: f[20] || (f[20] = (m) => a(m, e.item)),
            clearable: e.item.clearable !== !1
          }, null, 8, ["modelValue", "autosize", "style", "maxlength", "show-word-limit", "placeholder", "disabled", "clearable"])) : e.item.type === "upload" ? (S(), Z(Dl, {
            key: 12,
            style: oe(d.itemStyle),
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
          }, null, 8, ["style", "modelValue", "url", "manual-upload", "format", "data", "max-size", "show-img", "length", "disabled", "with-credentials"])) : e.item.type === "date" ? (S(), Z(K, {
            key: 13,
            style: oe(d.itemStyle),
            modelValue: d.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": f[23] || (f[23] = (m) => d.tempKeys[e.item.tempKey] = m),
            type: e.item.dateType,
            disabled: !!e.item.disabled || e.disabled,
            placement: "bottom-end",
            placeholder: e.item.placeholder || p(x)("r.selectDate"),
            options: e.item.dateOptions || null,
            clearable: e.item.clearable !== !1,
            editable: !1,
            transfer: "",
            onOnChange: f[24] || (f[24] = (m) => a(m, e.item))
          }, null, 8, ["style", "modelValue", "type", "disabled", "placeholder", "options", "clearable"])) : e.item.type === "time" ? (S(), Z(A, {
            key: 14,
            style: oe(d.itemStyle),
            modelValue: d.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": f[25] || (f[25] = (m) => d.tempKeys[e.item.tempKey] = m),
            type: e.item.dateType,
            disabled: !!e.item.disabled || e.disabled,
            placement: "bottom-end",
            placeholder: e.item.placeholder || p(x)("r.selectTime"),
            steps: e.item.steps || [],
            clearable: e.item.clearable !== !1,
            editable: !1,
            format: e.item.format || "HH:mm:ss",
            transfer: "",
            onOnChange: f[26] || (f[26] = (m) => a(m, e.item))
          }, null, 8, ["style", "modelValue", "type", "disabled", "placeholder", "steps", "clearable", "format"])) : e.item.type === "monthRange" ? (S(), Z(Ul, {
            key: 15,
            style: oe(d.itemStyle),
            modelValue: d.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": f[27] || (f[27] = (m) => d.tempKeys[e.item.tempKey] = m),
            disabled: !!e.item.disabled || e.disabled,
            placement: "bottom-end",
            placeholder: e.item.placeholder || p(x)("r.selectDate"),
            options1: e.item.dateOptions1 || null,
            options2: e.item.dateOptions2 || null,
            onOnChange: f[28] || (f[28] = (m) => a(m, e.item))
          }, null, 8, ["style", "modelValue", "disabled", "placeholder", "options1", "options2"])) : e.item.type === "editorPro" ? (S(), Z(Nl, {
            key: 16,
            class: "inlineBlock",
            style: oe(d.itemStyle),
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": f[29] || (f[29] = (m) => e.valGroup[e.item.key] = m),
            placeholder: e.item.placeholder || p(x)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            "toolbar-config": e.item.toolbarConfig || {},
            "editor-config": e.item.editorConfig || {},
            mode: e.item.mode || "simple",
            height: e.item.height || 300,
            onInput: f[30] || (f[30] = (m) => a(m, e.item))
          }, null, 8, ["style", "modelValue", "placeholder", "disabled", "toolbar-config", "editor-config", "mode", "height"])) : e.item.type === "inputMap" ? (S(), Z(Kl, {
            key: 17,
            modelValue: d.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": f[31] || (f[31] = (m) => d.tempKeys[e.item.tempKey] = m),
            style: oe(d.itemStyle),
            placeholder: e.item.placeholder || p(x)("r.search"),
            disabled: !!e.item.disabled || e.disabled,
            "show-map": e.item.showMap !== !1,
            height: e.item.mapHeight || "250px",
            onOnChange: f[32] || (f[32] = (m) => a(m, e.item))
          }, null, 8, ["modelValue", "style", "placeholder", "disabled", "show-map", "height"])) : e.item.type === "custom" ? (S(), D("div", {
            key: 18,
            class: "inlineBlock",
            style: oe(d.itemStyle)
          }, [
            Le(d.$slots, e.item.slotName, {
              valGroup: e.valGroup
            })
          ], 4)) : ce("", !0),
          e.item.info ? (S(), D("div", Zn, G(e.item.info), 1)) : ce("", !0),
          e.item.title ? (S(), D("div", eo, G(e.item.title), 1)) : ce("", !0)
        ]),
        _: 3
      }, 8, ["label", "prop", "class"])) : ce("", !0);
    };
  }
}), to = /* @__PURE__ */ F("input", { type: "text" }, null, -1), lo = { class: "inlineBlock" }, _t = /* @__PURE__ */ me({
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
    var el, tl;
    const e = o, n = t, a = j(null), s = j({}), c = j([]), u = j({});
    let v = [];
    const d = ((el = window == null ? void 0 : window.g) == null ? void 0 : el.mgrURL) ?? "";
    let f = [], y = [];
    const b = j(!1), C = j(Math.random() * 1e8 + 1e3), g = (tl = window == null ? void 0 : window.g) != null && tl.mgrURL ? window.g.mgrURL + "/web/v1/fsc/file" : "/file";
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
      let r = de(n.formRules);
      for (let l in r)
        if (r.hasOwnProperty(l))
          if (Array.isArray(r[l]))
            for (let O of r[l])
              O && O && !(O.message || O.validator) && (O.message = x("r.required"));
          else
            J(r[l]) === "Object" && (r[l].message || r[l].validator || (r[l].message = x("r.required")));
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
    function P(r) {
      return r.filter((l) => l == null ? void 0 : l.slotName);
    }
    function m(r, l) {
      for (let O of r)
        if (O.showing === !0 && O.key && O.type !== "selectInput" && (l.push(O.key), O.key2 && l.push(O.key2), O.collectLabel)) {
          if (!Array.isArray(O.collectLabel) && O.collectLabel.key)
            l.push(O.collectLabel.key);
          else if (Array.isArray(O.collectLabel))
            for (let k of O.collectLabel)
              k.key && l.push(k.key);
        }
    }
    function R(r, l) {
      for (let O of r)
        O.showing === !0 && O.key && O.type !== "selectInput" && l.push(O.key);
    }
    function h() {
      return new Promise((r) => {
        T(), I().then(() => {
          e("on-reset"), r(!0);
        });
      });
    }
    function $() {
      return new Promise((r) => {
        for (let l of v)
          l();
        v = [], u.value = {}, E(), re(), I().then(() => {
          e("on-re-render"), r(!0);
        });
      });
    }
    function I() {
      return new Promise((r) => {
        C.value = Math.floor(Math.random() * 1e8 + 1e3), Pe(function() {
          r(!0);
        });
      });
    }
    function T() {
      let r = le();
      for (let l in s.value)
        if (s.value.hasOwnProperty(l))
          if (Be(r[l]))
            s.value[l] = r[l];
          else if (Array.isArray(s.value[l]))
            s.value[l] = [];
          else if (J(s.value[l]) === "Boolean")
            s.value[l] = !1;
          else {
            const O = Ze(n.formData, (k) => (k == null ? void 0 : k.key) === l);
            O && (O.type === "editor" || O.type === "editorPro") ? s.value[l] = "" : s.value[l] = null;
          }
      U(r);
    }
    function U(r) {
      for (let l in u.value)
        u.value.hasOwnProperty(l) && (Be(r[l]) ? u.value[l] = r[l] : Array.isArray(u.value[l]) ? u.value[l] = [] : J(u.value[l]) === "Object" && u.value[l].hasOwnProperty("key") && u.value[l].hasOwnProperty("val") ? u.value[l].val = null : u.value[l] = null);
    }
    function M(r) {
      let l = le();
      Be(l[r]) ? u.value[r] = l[r] : Array.isArray(u.value[r]) ? u.value[r] = [] : u.value[r] = null;
    }
    function le() {
      let r = {};
      if (w.value)
        for (let l of c.value)
          ye(l, r);
      else
        ye(c.value, r);
      return r;
    }
    function ye(r, l) {
      for (let O of r)
        O.tempKey && Be(O.defaultVal) && N(O, l), O.key && Be(O.defaultVal) && (l[O.key] = O.defaultVal), O.key2 && Be(O.defaultVal2) && (l[O.key2] = O.defaultVal2);
    }
    function W(r) {
      if (r.show) {
        if (J(r.show) === "Object")
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
      return !r.showing && l && r.key ? (r.showing = l, r.defaultVal !== void 0 && (r.tempKey ? (u.value[r.tempKey] === null || u.value[r.tempKey] === void 0 || (J(u.value[r.tempKey]) === "Object" || Array.isArray(u.value[r.tempKey])) && Oe(u.value[r.tempKey])) && N(r, u.value) : (s.value[r.key] === null || s.value[r.key] === void 0) && (s.value[r.key] = r.defaultVal), r.key2 && r.deafultVal2 !== void 0 && (s.value[r.key2] === null || s.value[r.key2] === void 0) && r.type !== "inputMap" && (s.value[r.key2] = r.defaultVal2)), r.tempKey && ue(u.value[r.tempKey], r)) : r.showing = l, l;
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
    function re() {
      let r = de(n.formData);
      if (w.value)
        for (let l of r)
          he(l);
      else
        he(r);
      c.value = r;
    }
    function he(r) {
      for (let l of r)
        switch (l.type) {
          case "selectInput":
            const O = "selectInput" + Math.floor(Math.random() * 1e8);
            l.tempKey = O, u.value[O] = {
              key: l.key || null,
              val: l.defaultVal || null
            }, v.push(
              we(
                () => u.value[O],
                (q) => {
                  ue(q, l);
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
                (q) => {
                  ue(q, l);
                },
                { immediate: !0 }
              )
            ));
            break;
          case "input":
          case "inputNumber":
          case "textarea":
            const te = "inputT" + Math.floor(Math.random() * 1e8);
            l.key && (l.tempKey = te, u.value[te] = l.defaultVal !== void 0 ? l.defaultVal : null, v.push(
              we(
                () => u.value[te],
                (q) => {
                  ue(q, l);
                },
                { immediate: !0 }
              )
            ));
            break;
          case "select":
          case "radioGroup":
          case "checkboxGroup":
            if (l.options || (l.options = []), (l.type === "checkboxGroup" || l.type === "radioGroup") && (l.options = j(de(l.options))), l.asyncOption)
              if (l.changeOption)
                if (Array.isArray(l.changeOption)) {
                  let q = !0;
                  for (let X of l.changeOption)
                    if (!X.valKey || !X.key) {
                      q = !1;
                      break;
                    }
                  q ? v.push(
                    we(
                      () => {
                        let X = "";
                        if (Array.isArray(l.changeOption))
                          for (let fe of l.changeOption) {
                            let ze = s.value[fe.valKey];
                            if (ze || ze === 0 || ze === !1)
                              X += "&" + fe.key + "=" + ze;
                            else if (!fe.notRequired)
                              return !1;
                          }
                        return X;
                      },
                      (X) => {
                        let fe = de(u.value[l.tempKey]);
                        if (u.value[l.tempKey] = null, X && l.optionUrl) {
                          let ze = l.optionUrl.indexOf("?") !== -1 ? l.optionUrl : l.optionUrl + "?";
                          Me((ze + X).replace(/\?&/, "?"), l, fe);
                        } else
                          l.localOption ? Ue(l.options, [...l.localOption]) : Ue(l.options, []), Be(fe) && qe(fe, l);
                      },
                      {
                        immediate: !0
                      }
                    )
                  ) : l.localOption ? Ue(l.options, [...l.localOption]) : Ue(l.options, []);
                } else
                  typeof l.changeOption == "object" ? l.changeOption.valKey && l.changeOption.key && v.push(
                    we(
                      () => typeof l.changeOption == "object" && !Array.isArray(l.changeOption) ? s.value[l.changeOption.valKey] : !1,
                      (q) => {
                        let X = de(u.value[l.tempKey]);
                        if (u.value[l.tempKey] = null, (q || q === 0 || q === !1) && l.optionUrl && typeof l.changeOption == "object" && !Array.isArray(l.changeOption)) {
                          let fe = l.optionUrl.indexOf("?") !== -1 ? l.optionUrl : l.optionUrl + "?";
                          Me((fe + "&" + l.changeOption.key + "=" + q).replace(/\?&/, "?"), l, X);
                        } else
                          l.localOption ? Ue(l.options, [...l.localOption]) : Ue(l.options, []), Be(X) && qe(X, l);
                      },
                      { immediate: !0 }
                    )
                  ) : J(l.changeOption) === "Boolean" && v.push(
                    we(
                      () => {
                        const q = Ze(n.formData, (X) => (X == null ? void 0 : X.key) === l.key);
                        return q.optionUrl = ta(q.optionUrl), q.optionUrl.value;
                      },
                      (q) => {
                        let X = de(u.value[l.tempKey]);
                        u.value[l.tempKey] = null, q ? Me(q, l, X) : (l.localOption ? Ue(l.options, [...l.localOption]) : Ue(l.options, []), Be(X) && qe(X, l));
                      },
                      {
                        immediate: !0
                      }
                    )
                  );
              else
                l.optionUrl && Me(l.optionUrl, l);
            else
              J(l.borrowOption) === "String" && Pe(function() {
                l.options = Ze(c.value, (q) => (q == null ? void 0 : q.key) === l.borrowOption).options;
              });
            const ne = "opEle" + Math.floor(Math.random() * 1e8);
            l.key && (l.tempKey = ne, l.type === "select" && l.multiple || l.type === "checkboxGroup" ? u.value[ne] = l.defaultVal !== void 0 ? l.defaultVal : [] : l.booleanVal ? u.value[ne] = l.defaultVal !== void 0 ? l.defaultVal ? 1 : 0 : null : u.value[ne] = l.defaultVal !== void 0 ? l.defaultVal : null, v.push(
              we(
                () => u.value[ne],
                (q) => {
                  ue(q, l);
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
            const Ve = "date" + Math.floor(Math.random() * 1e8);
            l.tempKey = Ve, l.dateType === "date" || l.dateType === "datetime" || l.dateType === "time" || l.dateType === "year" || l.dateType === "month" ? u.value[Ve] = l.defaultVal || null : (l.dateType === "daterange" || l.dateType === "datetimerange" || l.dateType === "timerange" || l.type === "monthRange") && (u.value[Ve] = l.defaultVal && l.defaultVal2 && [l.defaultVal, l.defaultVal2] || []), v.push(
              we(
                () => u.value[Ve],
                (q) => {
                  ue(q, l);
                }
              )
            );
            break;
        }
    }
    function Me(r, l, O) {
      De.get(r).then((k) => {
        var Ve;
        let te;
        if (Ae(l.options) ? te = l.options.value : te = l.options, !te)
          return;
        let ne = ((Ve = k == null ? void 0 : k.data) == null ? void 0 : Ve.records) || (k == null ? void 0 : k.data) || k || [];
        Array.isArray(ne) ? (l.optionFilter && J(l.optionFilter) === "Function" && (ne = l.optionFilter(ne)), l.optionLabel && l.optionVal ? (te.length = 0, te.push(
          ...ne.map((q) => {
            let X;
            if (Array.isArray(l.optionLabel)) {
              let fe = "";
              l.optionLabel.forEach((ze, ll) => {
                let Ct = String(q[ze]);
                ll === 1 ? fe += "（" + Ct : ll > 1 ? fe += "、" + Ct : fe += Ct;
              }), X = {
                label: fe + "）",
                val: l.optionVal && q[l.optionVal]
              };
            } else
              X = {
                label: l.optionLabel && q[l.optionLabel],
                val: l.optionVal && q[l.optionVal]
              };
            if (l.collectLabel)
              if (Array.isArray(l.collectLabel))
                for (let fe of l.collectLabel)
                  fe.valKey && fe.valKey !== "label" && (X[fe.valKey] = q[fe.valKey]);
              else
                l.collectLabel.valKey && l.collectLabel.valKey !== "label" && (X[l.collectLabel.valKey] = q[l.collectLabel.valKey]);
            if (X.val !== null && X.val !== void 0)
              return X;
          })
        )) : (te.length = 0, te.push(...ne))) : te.length = 0, l.localOption && te.unshift(...l.localOption), Be(O) && qe(O, l), l.disableOptionByOthers && (J(l.disableOptionByOthers) === "String" ? v.push(
          we(
            () => s.value[l.disableOptionByOthers],
            (q) => {
              if (M(l.tempKey), !!te) {
                for (let X of te)
                  X.disabled && (X.disabled = !1);
                if (q || q === 0 || q === !1)
                  for (let X of te)
                    X.val === q && (X.disabled = !0);
              }
            },
            {
              immediate: !0
            }
          )
        ) : Array.isArray(l.disableOptionByOthers) && v.push(
          we(
            () => l.disableOptionByOthers.filter((q) => q).map((q) => s.value[q]),
            (q) => {
              if (M(l.tempKey), !!te) {
                for (let X of te)
                  X.disabled && (X.disabled = !1);
                if (q) {
                  for (let X of te)
                    for (let fe = 0; fe < q.length; fe++)
                      if (X.val === q[fe]) {
                        X.disabled = !0, q.splice(fe, 1);
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
    function qe(r, l) {
      Array.isArray(St(l.options)) && kl(St(l.options), { val: r }) !== -1 && (u.value[l.tempKey] = r);
    }
    function E() {
      if (s.value = {}, w.value)
        for (let r of n.formData)
          z(r);
      else
        z(n.formData);
    }
    function z(r) {
      for (let l of r)
        l.key && (l.type === "checkboxGroup" || l.type === "select" && l.multiple ? s.value[l.key] = l.defaultVal !== void 0 && l.show === void 0 ? l.defaultVal : [] : l.type === "editor" || l.type === "editorPro" ? s.value[l.key] = l.defaultVal !== void 0 && l.show === void 0 ? l.defaultVal : "" : (s.value[l.key] = l.defaultVal !== void 0 && l.show === void 0 ? l.defaultVal : null, l.key2 && (s.value[l.key2] = l.defaultVal2 !== void 0 && l.show === void 0 ? l.defaultVal2 : null)));
    }
    function ue(r, l) {
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
              let te = /^-?\d+(.\d+)?$/;
              l.numberVal && te.test(r) ? s.value[l.key] = Number(r) : s.value[l.key] = r;
            } else
              s.value[l.key] = null;
            break;
          case "select":
          case "radioGroup":
          case "checkboxGroup":
            if (!l.key)
              return;
            if (l.booleanVal && !l.multiple ? s.value[l.key] = r === void 0 || r === "" || r === null ? null : !!r : l.multiple || l.type === "checkboxGroup" ? s.value[l.key] = Object.assign([], r) : s.value[l.key] = r, l.collectLabel) {
              const te = ke(l, r);
              if (Array.isArray(l.collectLabel)) {
                for (let ne of l.collectLabel)
                  if (ne != null && ne.key && ne.valKey) {
                    const Ve = Se(ne.key);
                    let q = null;
                    Array.isArray(te) ? (q = te.map((fe) => fe[ne.valKey]), s.value[ne.key] = q, Ve && (u.value[Ve] = q)) : (te && Be(te[ne.valKey]) && (q = te[ne.valKey]), s.value[ne.key] = q, Ve && (u.value[Ve] = q));
                    let X = Ze(c.value, (fe) => (fe == null ? void 0 : fe.key) === ne.key);
                    X && X.tempKey && (u.value[X.tempKey] = s.value[ne.key]);
                  }
              } else if (typeof l.collectLabel == "object" && l.collectLabel.key && l.collectLabel.valKey) {
                const ne = Se(l.collectLabel.key);
                let Ve = null;
                Array.isArray(te) ? (Ve = te.map(
                  (X) => l.collectLabel && !Array.isArray(l.collectLabel) && X[l.collectLabel.valKey]
                ), s.value[l.collectLabel.key] = Ve, ne && (u.value[ne] = Ve)) : (te && Be(te[l.collectLabel.valKey]) && (Ve = te[l.collectLabel.valKey]), s.value[l.collectLabel.key] = Ve, ne && (u.value[ne] = Ve));
                let q = Ze(
                  c.value,
                  (X) => l.collectLabel && !Array.isArray(l.collectLabel) && (X == null ? void 0 : X.key) === l.collectLabel.key || !1
                );
                q && q.tempKey && (u.value[q.tempKey] = s.value[l.collectLabel.key]);
              }
            }
            break;
          case "date":
          case "time":
          case "monthRange":
            if (!l.key)
              return;
            let O = l.dateType;
            const k = {
              date: "YYYY-MM-DD",
              daterange: "YYYY-MM-DD",
              datetime: "YYYY-MM-DD HH:mm:ss",
              datetimerange: "YYYY-MM-DD HH:mm:ss",
              year: "YYYY",
              month: "YYYY-MM"
            };
            if (O === "date" || O === "datetime" || O === "time" || O === "year" || O === "month")
              r ? (O === "time" ? s.value[l.key] = r : s.value[l.key] = st(r).format(typeof l.format == "string" ? l.format : k[O]), O === "date" && l.addTime && (s.value[l.key] += " 00:00:00")) : s.value[l.key] = null;
            else if (l.type === "monthRange" || O === "daterange" || O === "datetimerange" || O === "timerange") {
              if (!l.key2)
                return;
              r && r[0] && r[1] ? (O === "timerange" ? (s.value[l.key] = r[0], s.value[l.key2] = r[1]) : l.type === "monthRange" ? (s.value[l.key] = typeof l.format == "string" && st(r[0]).format(l.format) || r[0], s.value[l.key2] = typeof l.format == "string" && l.format && st(r[1]).format(l.format) || r[1]) : (s.value[l.key] = st(r[0]).format(l.format || O && k[O]), s.value[l.key2] = st(r[1]).format(l.format || O && k[O])), O === "daterange" && l.addTime && (s.value[l.key] += " 00:00:00", s.value[l.key2] += " 23:59:59")) : (s.value[l.key] = null, s.value[l.key2] = null);
            }
            break;
        }
    }
    function ke(r, l) {
      const O = St(r.options);
      if (O)
        if (r != null && r.multiple || r.type === "checkboxGroup") {
          if (l) {
            let k = [];
            for (let te of O)
              l.indexOf(te == null ? void 0 : te.val) !== -1 && k.push(te);
            return k;
          }
          return !1;
        } else {
          if (l || l === 0 || l === !1) {
            for (let k of O)
              if ((k == null ? void 0 : k.val) === l)
                return k;
          }
          return !1;
        }
    }
    function Se(r) {
      if (w.value) {
        for (let l of c.value) {
          const O = ae(l, r);
          if (O)
            return O;
        }
        return !1;
      }
      return ae(c.value, r);
    }
    function ae(r, l) {
      for (let O of r)
        if (O.key === l)
          return O.tempKey;
      return !1;
    }
    function Re(r, l) {
      let O = {};
      for (let k in s.value)
        s.value.hasOwnProperty(k) && r[k] !== void 0 && (O[k] = r[k], delete r[k]);
      ot(O, l);
      for (let k in r)
        r.hasOwnProperty(k) && (y.indexOf(k) < 0 && y.push(k), s.value[k] = r[k]);
    }
    function Je(r) {
      let l = de(r);
      if (w.value) {
        let O = [];
        for (let k of n.formData)
          O.push(...Ye(k, l));
        return O;
      }
      return Ye(n.formData, l);
    }
    function Ye(r, l) {
      return r.filter((O) => {
        for (let k of Object.keys(l))
          if ((O == null ? void 0 : O.key) === k && A.value.indexOf(k) > -1 && !(l[k] === null || (Array.isArray(l[k]) || J(l[k]) === "Object") && Oe(l[k])))
            return delete l[k], !0;
        return !1;
      }).map((O) => O == null ? void 0 : O.key);
    }
    function ot(r, l = !1) {
      let O = de(r);
      Ge(r, l);
      for (let k in s.value)
        if (s.value.hasOwnProperty(k) && r[k] !== void 0 && r[k] !== "--") {
          if (Array.isArray(r[k]))
            r[k] = r[k].filter((te) => te !== "--");
          else if (J(r[k]) === "Object")
            for (let te in r[k])
              r[k].hasOwnProperty(te) && r[k][te] === "--" && (r[k][te] = null);
          s.value[k] = r[k];
        } else
          l || (s.value[k] = Array.isArray(s.value[k]) ? [] : null);
      Pe(function() {
        jl(Je(O));
      });
    }
    function Ge(r, l = !1) {
      if (w.value)
        for (let O of c.value)
          ft(O, r, l);
      else
        ft(c.value, r, l);
    }
    function ft(r, l, O = !1) {
      for (let k of r)
        if (k.key && (O && (l[k.key] !== void 0 || k.key2 && l[k.key2] !== void 0) || !O) && k.tempKey)
          switch (k.type) {
            case "inputMap":
              if (!k.key2)
                continue;
              J(l[k.key]) === "Number" && J(l[k.key2] === "Number") ? k.key3 ? u.value[k.tempKey] = {
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
    function Gl(r) {
      if (Array.isArray(r))
        for (let l of r)
          qt(l);
      else
        J(r) === "Object" && qt(r);
    }
    function qt(r) {
      const { index: l, indexB: O, key: k, val: te } = r;
      if (typeof l == "number")
        if (Array.isArray(c.value[l])) {
          if (typeof O == "number")
            if (k && r.hasOwnProperty("val"))
              c.value[l][O][k] = te;
            else
              for (let ne of Object.keys(r))
                ne !== "index" && k !== "indexB" && (c.value[l][O][ne] = r[ne]);
        } else if (k && r.hasOwnProperty("val"))
          c.value[l][k] = te;
        else
          for (let ne of Object.keys(r))
            ne !== "index" && (c.value[l][ne] = r[ne]);
    }
    function Jt({ label: r, root: l }) {
      l.key2 && (s.value[l.key2] = r), Xe({
        e: r,
        root: l
      });
    }
    function Yt(r) {
      r.beforeKey && oa(f, (l) => l === r.beforeKey), r.key && (f.indexOf(r.key) === -1 && f.push(r.key), Xe({
        e: null,
        root: r
      }));
    }
    function Xt({ name: r, root: l }) {
      l.key2 && (s.value[l.key2] = r), Xe({
        e: r,
        root: l
      });
    }
    function Qt({ e: r, root: l }) {
      Xe({
        e: r,
        root: l
      }), Pe(function() {
        var O, k;
        (k = (O = a.value) == null ? void 0 : O.validateField) == null || k.call(O, l.key);
      });
    }
    function Xe({ e: r, root: l }) {
      Fe(() => {
        let O = {
          event: r
        };
        if (l.key && (O[l.key] = s.value[l.key]), l.key2 && (O[l.key2] = s.value[l.key2]), Array.isArray(l.collectLabel))
          for (let k of l.collectLabel)
            O[k.key] = s.value[k.key];
        else
          l.collectLabel && l.collectLabel.key && (O[l.collectLabel.key] = s.value[l.collectLabel.key]);
        e("on-item-change", O);
      }, 500);
    }
    function Zt() {
      let r = {};
      for (let l of K.value)
        r[l] = s.value[l];
      return n.trim && (r = bt(r)), r;
    }
    function Hl() {
      var r, l;
      (l = (r = a.value) == null ? void 0 : r.validate) == null || l.call(r);
    }
    function Wl(r) {
      Fe(() => {
        var l, O;
        (O = (l = a.value) == null ? void 0 : l.validateField) == null || O.call(l, r, () => {
        });
      }, 10);
    }
    function jl(r) {
      Fe(() => {
        var l, O;
        if (Array.isArray(r))
          for (let k of r)
            (O = (l = a.value) == null ? void 0 : l.validateField) == null || O.call(l, k, () => {
            });
      }, 10);
    }
    function ql(r) {
      r !== void 0 && (b.value = !!r);
    }
    function Vt() {
      var r, l;
      n.disabled || (l = (r = a.value) == null ? void 0 : r.validate) == null || l.call(r, (O) => {
        _ || (_ = !0, O && (b.value = !0, e("on-submit", Zt())), Fe(() => {
          _ = !1;
        }, 2e3));
      });
    }
    return Ne(() => {
      E(), re();
    }), i({
      resetForm: h,
      refreshFormDom: I,
      reRenderForm: $,
      setItemToValGroup: Re,
      updateValGroup: ot,
      updateFormDataT: Gl,
      validate: Hl,
      reValidate: Wl,
      changeLoading: ql,
      getValGroup: Zt,
      submit: Vt
    }), (r, l) => {
      const O = Q("FormItem"), k = Q("Button"), te = Q("Form");
      return S(), Z(te, {
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
        default: ee(() => [
          Y(O, { style: { display: "none" } }, {
            default: ee(() => [
              to
            ]),
            _: 1
          }),
          p(w) ? (S(!0), D(be, { key: 0 }, _e(p(c), (ne, Ve) => (S(), D("div", {
            class: xe([r.teamClass, "formTeamBox" + Ve]),
            key: "formTeamBox" + Ve
          }, [
            (S(!0), D(be, null, _e(ne, (q, X) => (S(), D(be, {
              key: "formItem" + X
            }, [
              W(q) ? (S(), Z(fl, {
                key: 0,
                item: q,
                style: oe(p(L)),
                "item-style": p(B),
                "val-group": p(s),
                "temp-keys": p(u),
                inline: n.inline,
                disabled: n.disabled,
                "label-width": n.labelWidth,
                "item-width": n.itemWidth,
                "mgr-url": p(d),
                "upload-url": p(g),
                onItemChange: Xe,
                onReValidate: Qt,
                onClearTempKeyItem: M,
                onSelectInputChange: Yt,
                onAlNameChange: Xt,
                onAsyncLabelChange: Jt
              }, at({ _: 2 }, [
                _e(P(ne), (fe) => ({
                  name: fe.slotName,
                  fn: ee((ze) => [
                    Le(r.$slots, fe.slotName, {
                      valGroup: ze.valGroup
                    })
                  ])
                }))
              ]), 1032, ["item", "style", "item-style", "val-group", "temp-keys", "inline", "disabled", "label-width", "item-width", "mgr-url", "upload-url"])) : ce("", !0)
            ], 64))), 128))
          ], 2))), 128)) : ce("", !0),
          (S(!0), D(be, null, _e(p(c), (ne, Ve) => (S(), D(be, {
            key: "formItem" + Ve
          }, [
            !p(w) && W(ne) ? (S(), Z(fl, {
              key: 0,
              item: ne,
              style: oe(p(L)),
              "item-style": p(B),
              "val-group": p(s),
              "temp-keys": p(u),
              inline: n.inline,
              disabled: n.disabled,
              "label-width": n.labelWidth,
              "item-width": n.itemWidth,
              "mgr-url": p(d),
              "upload-url": p(g),
              onItemChange: Xe,
              onReValidate: Qt,
              onClearTempKeyItem: M,
              onSelectInputChange: Yt,
              onAlNameChange: Xt,
              onAsyncLabelChange: Jt
            }, at({ _: 2 }, [
              _e(P(r.formData), (q) => ({
                name: q.slotName,
                fn: ee((X) => [
                  Le(r.$slots, q.slotName, {
                    valGroup: X.valGroup
                  })
                ])
              }))
            ]), 1032, ["item", "style", "item-style", "val-group", "temp-keys", "inline", "disabled", "label-width", "item-width", "mgr-url", "upload-url"])) : ce("", !0)
          ], 64))), 128)),
          n.showLongOkBt ? (S(), Z(O, { key: 1 }, {
            default: ee(() => [
              Y(k, {
                onClick: Vt,
                style: oe(p(B)),
                type: "primary",
                loading: n.btnLoading && p(b),
                disabled: n.disabled
              }, {
                default: ee(() => [
                  ge(G(n.longOkBtTxt || p(x)("r.confirm")), 1)
                ]),
                _: 1
              }, 8, ["style", "loading", "disabled"])
            ]),
            _: 1
          })) : ce("", !0),
          F("div", lo, [
            n.showInlineOkBt ? (S(), Z(k, {
              key: 0,
              type: "primary",
              class: xe({ inlineFormBtXN: n.inline, okBtnXN: !0 }),
              onClick: Vt,
              loading: n.btnLoading && p(b),
              disabled: n.disabled
            }, {
              default: ee(() => [
                ge(G(n.inlineOkBtTxt || p(x)("r.confirm")), 1)
              ]),
              _: 1
            }, 8, ["class", "loading", "disabled"])) : ce("", !0),
            n.showInlineClearBt ? (S(), Z(k, {
              key: 1,
              onClick: h,
              class: xe({ inlineFormBtXN: n.inline }),
              type: "dashed"
            }, {
              default: ee(() => [
                ge(G(n.inlineClearBtTxt || p(x)("r.clear")), 1)
              ]),
              _: 1
            }, 8, ["class"])) : ce("", !0)
          ])
        ]),
        _: 3
      }, 8, ["model", "rules", "label-width", "inline", "show-message"]);
    };
  }
}), ao = /* @__PURE__ */ me({
  __name: "FormGroup",
  props: {
    formData: { default: () => [] },
    with: { default: () => Ce().formGroupWidth },
    labelWidth: { default: () => Ce().formGroupLabelWidth },
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
    const e = o, n = t, a = j({ width: n.with }), s = j(!1), c = j(), u = H(() => {
      var A, P;
      if (Array.isArray(n.formData))
        if (Array.isArray(n.formData[0])) {
          let m = [];
          for (let R of n.formData)
            R && (m = m.concat(
              R.filter((h) => (h == null ? void 0 : h.type) === "custom" || (h == null ? void 0 : h.type) === "input" && h.slotName && h.slotPosition)
            ));
          return m;
        } else
          return (P = (A = n.formData) == null ? void 0 : A.filter) == null ? void 0 : P.call(
            A,
            (m) => (m == null ? void 0 : m.type) === "custom" || (m == null ? void 0 : m.type) === "input" && m.slotName && m.slotPosition
          );
      return [];
    });
    function v() {
      return new Promise((A) => {
        var P, m;
        (m = (P = c.value).resetForm) == null || m.call(P).then((R) => {
          A(R);
        });
      });
    }
    function d() {
      return new Promise((A) => {
        var P, m;
        (m = (P = c.value).refreshFormDom) == null || m.call(P).then((R) => {
          A(R);
        });
      });
    }
    function f() {
      return new Promise((A) => {
        var P, m;
        (m = (P = c.value).reRenderForm) == null || m.call(P).then((R) => {
          A(R);
        });
      });
    }
    function y(A, P) {
      var m, R;
      (R = (m = c.value).setItemToValGroup) == null || R.call(m, A, P);
    }
    function b(A, P) {
      var m, R;
      (R = (m = c.value).updateValGroup) == null || R.call(m, A, P);
    }
    function C(A) {
      var P, m;
      (m = (P = c.value).updateFormDataT) == null || m.call(P, A);
    }
    function g() {
      var A, P;
      (P = (A = c.value).validate) == null || P.call(A);
    }
    function _(A) {
      var P, m;
      (m = (P = c.value).reValidate) == null || m.call(P, A);
    }
    function w(A) {
      var P, m;
      A !== void 0 && (s.value = !!A, (m = (P = c.value).changeLoading) == null || m.call(P, s.value));
    }
    function L() {
      var A, P;
      return (P = (A = c.value).getValGroup) == null ? void 0 : P.call(A);
    }
    function B() {
      s.value = !0;
    }
    function V() {
      var A, P;
      (P = (A = c.value).submit) == null || P.call(A);
    }
    function K() {
      e("on-cancel"), Fe(() => {
        var A, P;
        s.value = !1, (P = (A = c.value).changeLoading) == null || P.call(A, !1);
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
    }), (A, P) => {
      const m = Q("Button");
      return S(), D("div", {
        style: oe(p(a)),
        class: "formGroupBoxVM"
      }, [
        Y(_t, nt({
          ref_key: "formRRef",
          ref: c
        }, A.$attrs, {
          "form-data": n.formData,
          "label-width": n.labelWidth,
          "content-width": n.contentWidth,
          "item-width": n.itemWidth,
          btnLoading: n.btnLoading,
          onOnSubmit: B
        }), at({ _: 2 }, [
          _e(p(u), (R) => ({
            name: R.slotName,
            fn: ee(({ valGroup: h }) => [
              Le(A.$slots, R.slotName, { valGroup: h })
            ])
          }))
        ]), 1040, ["form-data", "label-width", "content-width", "item-width", "btnLoading"]),
        pe(F("div", {
          class: "formFooterVM",
          style: oe({ marginLeft: n.labelWidth + "px" })
        }, [
          F("div", {
            style: oe({ width: n.contentWidth }),
            class: "btnBoxKAL"
          }, [
            n.showOkBt ? (S(), Z(m, {
              key: 0,
              onClick: V,
              class: "form-save-btn",
              loading: n.btnLoading && p(s)
            }, {
              default: ee(() => [
                ge(G(n.okBtTxt || p(x)("r.confirm")), 1)
              ]),
              _: 1
            }, 8, ["loading"])) : ce("", !0),
            n.showCancelBt ? (S(), Z(m, {
              key: 1,
              onClick: K,
              class: "form-cancel-btn"
            }, {
              default: ee(() => [
                ge(G(n.cancelBtTxt || p(x)("r.cancel")), 1)
              ]),
              _: 1
            })) : ce("", !0)
          ], 4)
        ], 4), [
          [ve, n.showOkBt || n.showCancelBt]
        ])
      ], 4);
    };
  }
}), Gt = /* @__PURE__ */ me({
  __name: "SearchForm",
  props: {
    formData: { default: () => [] },
    labelWidth: { default: () => Ce().searchFormLabelWidth },
    itemWidth: { default: () => Ce().searchFormItemWidth },
    showInlineOkBt: { type: Boolean, default: !0 },
    showInlineClearBt: { type: Boolean, default: !0 }
  },
  emits: ["on-search"],
  setup(t, { expose: i, emit: o }) {
    const e = o, n = t, a = j(), s = H(() => {
      var B, V;
      if (Array.isArray(n.formData[0])) {
        let K = [];
        for (let A of n.formData)
          A && (K = K.concat(
            A.filter((P) => (P == null ? void 0 : P.type) === "custom" || (P == null ? void 0 : P.type) === "input" && P.slotName && P.slotPosition)
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
    }), (B, V) => (S(), Z(_t, nt({
      ref_key: "formRRef",
      ref: a
    }, B.$attrs, {
      "form-data": n.formData,
      "label-width": n.labelWidth,
      "item-width": n.itemWidth,
      inline: "",
      "show-long-ok-bt": !1,
      "show-inline-ok-bt": n.showInlineOkBt,
      "inline-ok-bt-txt": p(x)("r.check"),
      "show-inline-clear-bt": n.showInlineClearBt,
      "show-message": !1,
      onOnSubmit: w
    }), at({ _: 2 }, [
      _e(p(s), (K) => ({
        name: K.slotName,
        fn: ee(({ valGroup: A }) => [
          Le(B.$slots, K.slotName, { valGroup: A })
        ])
      }))
    ]), 1040, ["form-data", "label-width", "item-width", "show-inline-ok-bt", "inline-ok-bt-txt", "show-inline-clear-bt"]));
  }
}), no = /* @__PURE__ */ me({
  __name: "FormModal",
  props: {
    title: {},
    formData: { default: () => [] },
    width: { default: () => Ce().formModalWidth },
    labelWidth: { default: () => Ce().formModalLabelWidth },
    okBtTxt: {},
    cancelBtTxt: {},
    hideCancelBt: { type: Boolean, default: !1 },
    hideFooter: { type: Boolean, default: !1 },
    btnLoading: { type: Boolean, default: !1 }
  },
  emits: ["on-close", "on-open"],
  setup(t, { expose: i, emit: o }) {
    const e = o, n = t, a = j(), s = j(!1), c = j(!1), u = H(() => {
      var m, R;
      if (Array.isArray(n.formData[0])) {
        let h = [];
        for (let $ of n.formData)
          $ && (h = h.concat(
            $.filter((I) => (I == null ? void 0 : I.type) === "custom" || (I == null ? void 0 : I.type) === "input" && I.slotName && I.slotPosition)
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
      s.value = !1, Fe(() => {
        var m, R;
        c.value = !1, (R = (m = a.value).changeLoading) == null || R.call(m, !1);
      }, 1e3);
    }
    function P(m) {
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
      const h = Q("Button"), $ = Q("Modal");
      return S(), Z($, {
        class: xe(["formModal", { hideFooter: n.hideFooter }]),
        title: n.title || p(x)("r.title"),
        modelValue: p(s),
        "onUpdate:modelValue": R[0] || (R[0] = (I) => Ae(s) ? s.value = I : null),
        "mask-closable": !1,
        "footer-hide": n.hideFooter,
        width: n.width,
        onOnVisibleChange: P
      }, {
        footer: ee(() => [
          Y(h, {
            onClick: V,
            class: "modal-save-btn",
            loading: n.btnLoading && p(c)
          }, {
            default: ee(() => [
              ge(G(n.okBtTxt || p(x)("r.confirm")), 1)
            ]),
            _: 1
          }, 8, ["loading"]),
          n.hideCancelBt ? ce("", !0) : (S(), Z(h, {
            key: 0,
            onClick: A,
            class: "modal-cancel-btn"
          }, {
            default: ee(() => [
              ge(G(n.cancelBtTxt || p(x)("r.cancel")), 1)
            ]),
            _: 1
          }))
        ]),
        default: ee(() => [
          Y(_t, nt({
            ref_key: "formRRef",
            ref: a
          }, m.$attrs, {
            "form-data": n.formData,
            "label-width": n.labelWidth,
            btnLoading: n.btnLoading,
            onOnSubmit: B
          }), at({ _: 2 }, [
            _e(p(u), (I) => ({
              name: I.slotName,
              fn: ee(({ valGroup: T }) => [
                Le(m.$slots, I.slotName, { valGroup: T })
              ])
            }))
          ]), 1040, ["form-data", "label-width", "btnLoading"])
        ]),
        _: 3
      }, 8, ["title", "modelValue", "footer-hide", "class", "width"]);
    };
  }
}), oo = /* @__PURE__ */ me({
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
    const o = i, e = t, n = j(!0), a = j([]), s = "CKT" + Math.floor(Math.random() * 1e7 + 1e7);
    let c = [];
    const u = H(() => Array.isArray(e.collectVal) ? e.collectVal : typeof e.collectVal == "string" ? [e.collectVal] : []), v = H(() => Array.isArray(e.modelValue) ? e.modelValue : []);
    we(
      () => e.data,
      (g) => {
        n.value = !1;
        let _ = [];
        d(g, _), a.value = _, Pe(function() {
          n.value = !0, e.inlineLeaf && Pe(b);
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
        tt({
          group: a.value,
          condition: (L) => (L == null ? void 0 : L.checked) === !0,
          key: "checked",
          val: !1
        }), tt(w === "a" ? {
          group: a.value,
          condition: (L) => kl(g, [_, L == null ? void 0 : L[_]]) !== -1,
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
        tt({
          group: a.value,
          condition: (_) => _ && _.disableCheckbox !== g,
          key: "disableCheckbox",
          val: g
        }), e.inlineLeaf && Pe(b);
      },
      { immediate: !0 }
    );
    function d(g, _ = []) {
      for (let w of g) {
        let L = !1;
        u.value.length > 1 ? L = At(v.value, (V) => V[u.value[0]] === w[u.value[0]]) !== void 0 : L = u.value[0] ? v.value.indexOf(w[u.value[0]]) !== -1 : !1;
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
        u.value.length > 1 ? L = At(v.value, (V) => V[u.value[0]] === w[u.value[0]]) !== void 0 : L = u.value[0] ? v.value.indexOf(w[u.value[0]]) !== -1 : !1;
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
        g.expand && Pe(b);
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
      c = _, o("update:modelValue", _), o("on-change", de(_));
    }
    return (g, _) => {
      const w = Q("Tree");
      return p(n) ? (S(), Z(w, {
        key: 0,
        id: s,
        class: "checkboxTreeGA",
        data: p(a),
        render: y,
        onOnCheckChange: C,
        onOnToggleExpand: b,
        "show-checkbox": ""
      }, null, 8, ["data"])) : ce("", !0);
    };
  }
}), io = { class: "transferBoxRL" }, so = { class: "leftBoxLLL" }, ro = { class: "fullHeight flexColumnBox" }, uo = { class: "notGrow" }, co = { class: "titleLLL" }, fo = { class: "growFlexItem" }, po = { class: "middleBoxLLL" }, mo = { class: "rightBoxLLL" }, ho = { class: "fullHeight flexColumnBox" }, yo = { class: "notGrow" }, vo = { class: "titleLLL" }, go = { class: "growFlexItem" }, bo = /* @__PURE__ */ me({
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
      return (t = Ce()) == null ? void 0 : t.btTablePageUsePagePro;
    } },
    showTotal: { type: Boolean, default: () => {
      var t;
      return (t = Ce()) == null ? void 0 : t.pageShowTotal;
    } },
    showSizer: { type: Boolean, default: () => {
      var t;
      return (t = Ce()) == null ? void 0 : t.pageShowSizer;
    } }
  },
  emits: ["transferred", "on-data-change-l", "on-data-change-r"],
  setup(t, { expose: i, emit: o }) {
    const e = o, n = t;
    let a = j({}), s = j({}), c = j([]), u = j([]), v = j(0), d = j(0);
    const f = H(() => ({ ...n.constSearchDataLeft, ...a.value })), y = H(() => ({ ...n.constSearchDataRight, ...s.value })), b = H(() => v.value < 1), C = H(() => c.value.length < 1), g = H(() => u.value.length < 1), _ = H(() => d.value < 1), w = j(), L = j(), B = j(), V = j();
    function K() {
      w.value.resetForm(), L.value.resetForm(), Oe(a.value) || (a.value = {}), Oe(s.value) || (s.value = {}), B.value.clearSelect(), V.value.clearSelect();
    }
    function A() {
      B.value.search(), V.value.search();
    }
    function P(W) {
      c.value = W;
    }
    function m(W) {
      u.value = W;
    }
    function R(W) {
      var se, ie, N, re, he;
      v.value = ((ie = (se = W == null ? void 0 : W.data) == null ? void 0 : se.page) == null ? void 0 : ie.total) || ((re = (N = W == null ? void 0 : W.data) == null ? void 0 : N.data) == null ? void 0 : re.total) || ((he = W == null ? void 0 : W.data) == null ? void 0 : he.total) || (W == null ? void 0 : W.total) || 0, e("on-data-change-l", W);
    }
    function h(W) {
      var se, ie, N, re, he;
      d.value = ((ie = (se = W == null ? void 0 : W.data) == null ? void 0 : se.page) == null ? void 0 : ie.total) || ((re = (N = W == null ? void 0 : W.data) == null ? void 0 : N.data) == null ? void 0 : re.total) || ((he = W == null ? void 0 : W.data) == null ? void 0 : he.total) || (W == null ? void 0 : W.total) || 0, e("on-data-change-r", W);
    }
    function $(W) {
      a.value = W;
    }
    function I(W) {
      s.value = W;
    }
    function T() {
      n.addUrl && ye("add");
    }
    function U() {
      n.deleteUrl && ye("delete");
    }
    function M() {
      n.addAllUrl && n.addUrl && ye("addAll");
    }
    function le() {
      n.deleteAllUrl && ye("deleteAll");
    }
    function ye(W) {
      let se, ie, N = {}, re = "";
      switch (W) {
        case "add":
          se = n.addMethod, ie = n.addUrl, N = n.addParamsHandle(u.value), re = x("r.add");
          break;
        case "delete":
          se = n.deleteMethod, ie = n.deleteUrl, N = n.deleteParamsHandle(c.value), re = x("r.remove");
          break;
        case "addAll":
          se = n.addAllMethod, ie = n.addAllUrl, N = n.addAllParamsHandle(y.value), re = x("r.addAll");
          break;
        case "deleteAll":
          se = n.deleteAllMethod, ie = n.deleteAllUrl, N = n.deleteAllParamsHandle(f.value), re = x("r.removeAll");
          break;
      }
      ie && se && De[se](ie, N, null, [], { spin: !0 }, !1).then((he) => {
        (he == null ? void 0 : he.code) === 0 ? ($e(re + x("r.success"), (he == null ? void 0 : he.message) || "", "success"), B.value && B.value.getTableData(), V.value && V.value.getTableData(), e("transferred")) : $e(re + x("r.failed"), (he == null ? void 0 : he.message) || "", "error");
      }).catch(() => {
        $e(re + x("r.error"), "", "error");
      });
    }
    return i({
      reset: K,
      search: A
    }), (W, se) => {
      const ie = Q("Icon"), N = Q("Button");
      return S(), D("div", io, [
        F("div", so, [
          F("div", ro, [
            F("div", uo, [
              F("div", co, G(n.titleLeft || p(x)("r.added")), 1),
              Y(Mt, null, {
                default: ee(() => [
                  Y(Gt, {
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
            F("div", fo, [
              Y(Nt, {
                ref_key: "lTabRef",
                ref: B,
                columns: n.leftTableColumns,
                url: n.leftTableUrl,
                "search-data": p(f),
                onOnSelectionChange: P,
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
        F("div", po, [
          Y(N, {
            class: "middleBtLLL",
            size: "large",
            type: "default",
            onClick: le,
            disabled: p(b)
          }, {
            default: ee(() => [
              ge(G(p(x)("r.removeAll")) + " ", 1),
              Y(ie, { type: "ios-arrow-forward" })
            ]),
            _: 1
          }, 8, ["disabled"]),
          Y(N, {
            class: "middleBtLLL",
            size: "large",
            type: "default",
            onClick: U,
            disabled: p(C)
          }, {
            default: ee(() => [
              ge(G(p(x)("r.remove")) + " ", 1),
              Y(ie, { type: "ios-arrow-forward" })
            ]),
            _: 1
          }, 8, ["disabled"]),
          Y(N, {
            class: "middleBtLLL",
            size: "large",
            type: "primary",
            onClick: T,
            disabled: p(g)
          }, {
            default: ee(() => [
              Y(ie, { type: "ios-arrow-back" }),
              ge(" " + G(p(x)("r.add")), 1)
            ]),
            _: 1
          }, 8, ["disabled"]),
          Y(N, {
            class: "middleBtLLL",
            size: "large",
            type: "primary",
            onClick: M,
            disabled: p(_)
          }, {
            default: ee(() => [
              Y(ie, { type: "ios-arrow-back" }),
              ge(" " + G(p(x)("r.addAll")), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ]),
        F("div", mo, [
          F("div", ho, [
            F("div", yo, [
              F("div", vo, G(n.titleRight || p(x)("r.notAdded")), 1),
              Y(Mt, null, {
                default: ee(() => [
                  Y(Gt, {
                    ref_key: "rightFormRef",
                    ref: L,
                    "form-data": n.formDataRight,
                    "form-rules": n.formRulesRight,
                    "label-width": n.searchFormLabelWith,
                    onOnSearch: I
                  }, null, 8, ["form-data", "form-rules", "label-width"])
                ]),
                _: 1
              })
            ]),
            F("div", go, [
              Y(Nt, {
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
}), ko = { class: "boxLPA" }, wo = { class: "headerJ" }, _o = { class: "firstT borderBoxAS" }, Vo = { class: "secondT borderBoxAS" }, Co = { class: "firstCol borderBoxAS" }, So = { class: "secondCol borderBoxAS" }, To = /* @__PURE__ */ me({
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
    const o = t, e = i, n = j([]), a = H(() => {
      var f;
      let v = de(o.data), d = de(n.value);
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
        dt(n.value, v) || dt(v, d) || (n.value = v);
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
            J(o.collectVal) === "String" && f.push(y[o.collectVal]);
        if (y.children) {
          for (let b of y.children)
            if (b.checked)
              if (Array.isArray(o.collectVal)) {
                let C = {};
                for (let g of o.collectVal)
                  C[g] = b[g];
                f.push(C);
              } else
                J(o.collectVal) === "String" && f.push(b[o.collectVal]);
        }
      }
      d ? (n.value = f, o.leaf ? (e("update:modelValue", f), e("on-change", de(f))) : Pe(function() {
        u(a.value);
      })) : (e("update:modelValue", f), e("on-change", de(f)));
    }
    return (v, d) => {
      const f = Q("Checkbox");
      return S(), D("div", ko, [
        F("div", wo, [
          F("div", _o, G(v.firstTitle || p(x)("r.level.1")), 1),
          F("div", Vo, G(v.secondTitle || p(x)("r.level.2")), 1)
        ]),
        (S(!0), D(be, null, _e(p(a), (y, b) => (S(), D("div", {
          class: "bodyJ",
          key: "checkboxJ" + b
        }, [
          F("div", Co, [
            Y(f, {
              modelValue: y.checked,
              "onUpdate:modelValue": (C) => y.checked = C,
              indeterminate: y.indeterminate,
              onOnChange: (C) => s(y, C),
              disabled: v.disabled
            }, {
              default: ee(() => [
                ge(G(y[v.label]), 1)
              ]),
              _: 2
            }, 1032, ["modelValue", "onUpdate:modelValue", "indeterminate", "onOnChange", "disabled"])
          ]),
          F("div", So, [
            (S(!0), D(be, null, _e(y.children, (C, g) => (S(), D("div", {
              class: "secItem",
              key: "secItem" + g
            }, [
              Y(f, {
                modelValue: C.checked,
                "onUpdate:modelValue": (_) => C.checked = _,
                onOnChange: c,
                disabled: v.disabled
              }, {
                default: ee(() => [
                  ge(G(C[v.label]), 1)
                ]),
                _: 2
              }, 1032, ["modelValue", "onUpdate:modelValue", "disabled"])
            ]))), 128))
          ])
        ]))), 128))
      ]);
    };
  }
}), Bo = { class: "boxLPB" }, xo = { class: "headerF" }, Oo = { class: "firstT borderBoxKa" }, Lo = { class: "secondT borderBoxKa" }, Ao = { class: "thirdT borderBoxKa" }, Po = { class: "firstCol borderBoxKa" }, Io = { class: "rightBoxAL" }, Fo = { class: "secondCol borderBoxKa" }, Ro = { class: "thirdCol borderBoxKa" }, $o = /* @__PURE__ */ me({
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
    const o = i, e = t, n = j([]), a = H(() => {
      let d = de(e.data), f = de(n.value);
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
        dt(n.value, d) || dt(d, f) || (n.value = d);
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
            J(e.collectVal) === "String" && y.push(b[e.collectVal]);
        if (b != null && b.children)
          for (let C of b.children) {
            if (!f && !e.leaf && C.checked && C.indeterminate === !1)
              if (Array.isArray(e.collectVal)) {
                let g = {};
                for (let _ of e.collectVal)
                  g[_] = C[_];
                y.push(g);
              } else
                J(e.collectVal) === "String" && y.push(C[e.collectVal]);
            if (C.children) {
              for (let g of C.children)
                if (g.checked)
                  if (Array.isArray(e.collectVal)) {
                    let _ = {};
                    for (let w of e.collectVal)
                      _[w] = g[w];
                    y.push(_);
                  } else
                    J(e.collectVal) === "String" && y.push(g[e.collectVal]);
            }
          }
      }
      f ? (n.value = y, e.leaf ? (o("update:modelValue", y), o("on-change", de(y))) : Pe(function() {
        v(a.value);
      })) : (o("update:modelValue", y), o("on-change", de(y)));
    }
    return (d, f) => {
      const y = Q("Checkbox");
      return S(), D("div", Bo, [
        F("div", xo, [
          F("div", Oo, G(d.firstTitle || p(x)("r.level.1")), 1),
          F("div", Lo, G(d.secondTitle || p(x)("r.level.2")), 1),
          F("div", Ao, G(d.thirdTitle || p(x)("r.level.3")), 1)
        ]),
        (S(!0), D(be, null, _e(p(a), (b, C) => (S(), D("div", {
          class: "bodyF",
          key: "checkboxJ" + C
        }, [
          F("div", Po, [
            Y(y, {
              modelValue: b.checked,
              "onUpdate:modelValue": (g) => b.checked = g,
              indeterminate: b.indeterminate,
              onOnChange: (g) => s(b, g),
              disabled: d.disabled
            }, {
              default: ee(() => [
                ge(G(b[d.label]), 1)
              ]),
              _: 2
            }, 1032, ["modelValue", "onUpdate:modelValue", "indeterminate", "onOnChange", "disabled"])
          ]),
          F("div", Io, [
            (S(!0), D(be, null, _e(b.children, (g, _) => (S(), D("div", {
              class: "rightBoxInner",
              key: "secItem" + _
            }, [
              F("div", Fo, [
                Y(y, {
                  modelValue: g.checked,
                  "onUpdate:modelValue": (w) => g.checked = w,
                  indeterminate: g.indeterminate,
                  onOnChange: (w) => c(g, w),
                  disabled: d.disabled
                }, {
                  default: ee(() => [
                    ge(G(g[d.label]), 1)
                  ]),
                  _: 2
                }, 1032, ["modelValue", "onUpdate:modelValue", "indeterminate", "onOnChange", "disabled"])
              ]),
              F("div", Ro, [
                (S(!0), D(be, null, _e(g.children, (w, L) => (S(), D("div", {
                  class: "thirdItem",
                  key: "thirdItem" + L
                }, [
                  Y(y, {
                    modelValue: w.checked,
                    "onUpdate:modelValue": (B) => w.checked = B,
                    onOnChange: u,
                    disabled: d.disabled
                  }, {
                    default: ee(() => [
                      ge(G(w[d.label]), 1)
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
}), Ko = {
  class: "fl",
  style: { "font-weight": "bold" }
}, Mo = { class: "btsF" }, zo = { key: 0 }, Do = {
  key: 1,
  class: "growFlexItem relativeBox"
}, Uo = { class: "fullFlowContent" }, No = /* @__PURE__ */ me({
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
      style: oe(p(o))
    }, [
      F("div", {
        class: xe(["wellCardR", { flexColumnBox: !i.fitToContent }])
      }, [
        F("div", {
          class: xe(["panelHeader", { notGrow: !i.fitToContent }])
        }, [
          F("div", Ko, G(i.title || p(x)("r.title")), 1),
          F("div", Mo, [
            Le(e.$slots, "bts")
          ])
        ], 2),
        i.fitToContent ? (S(), D("div", zo, [
          Le(e.$slots, "default")
        ])) : (S(), D("div", Do, [
          F("div", Uo, [
            Le(e.$slots, "default")
          ])
        ]))
      ], 2)
    ], 4));
  }
}), Eo = /* @__PURE__ */ me({
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
    let n = j(1), a = 1;
    const s = j(""), c = ht([]);
    let u = {}, v = !0, d = !1;
    const f = "scm" + Math.random(), y = H(() => s.value ? x("r.searchFor") + s.value : e.placeholder || x("r.pInput")), b = H({
      get() {
        return e.modelValue ?? "";
      },
      set(A) {
        if (o("update:modelValue", A ?? ""), e.collectLabel && A !== void 0) {
          let P = {};
          for (let m of c.value)
            if (m[e.optionsValKey] === A) {
              P = JSON.parse(JSON.stringify(m));
              break;
            }
          o("on-change", P);
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
    const g = j();
    function _() {
      g.value.$el.querySelector('.ivu-select-input[type="text"]').addEventListener("keyup", B);
    }
    function w() {
      v || (b.value = "", v = !0, s.value = "", c.value = [], n.value = 1, a = 1, u = {}, d = !1);
    }
    function L(A) {
      for (let P of c.value)
        if ((P == null ? void 0 : P.label) === A)
          return !0;
      return !1;
    }
    const B = bl(function(A) {
      var m;
      const P = (m = A == null ? void 0 : A.target) == null ? void 0 : m.value;
      L(P) || (Be(P) ? (d ? w() : (Oe(u) && (u.current = n.value, u.pages = a, u.options = de(c.value)), Be(b.value) && (b.value = "")), s.value = String(P), c.value = [], n.value = 1, v = !0, K()) : d ? (w(), K()) : (b.value = "", s.value = "", u.current ? (n.value = u.current, a = u.pages, c.value = de(u.options), u = {}) : K()));
    }, 600);
    function V() {
      d && w(), n.value < a ? (++n.value, Pe(function() {
        K();
      })) : nl.warning({
        background: !0,
        content: x("r.noMore")
      });
    }
    function K() {
      return new Promise((A, P) => {
        if (e.getOptions) {
          if (e.searchWordsRequired && !Be(s.value)) {
            A(!1);
            return;
          }
          De.get(e.url, C.value).then((m) => {
            var $;
            v = !1;
            let R = [];
            ($ = m == null ? void 0 : m.data) != null && $.records ? (R = m.data.records, a = m.data.pages) : m != null && m.data && J(m.data) === "Array" ? (R = m.data, a = m.pages) : m != null && m.data && J(m.data) === "Object" && (R = [m.data], a = 1), typeof e.optionFilter == "function" && J(e.optionFilter) === "Function" && (R = e.optionFilter(R)), Oe(R) || (R = R.map((I, T) => {
              let U = x("r.optionLabel") + T;
              if (Array.isArray(e.optionsLabelKey)) {
                let M = [];
                for (let le = 1, ye = e.optionsLabelKey.length; le < ye; le++)
                  M.push(I[e.optionsLabelKey[le]]);
                U = `${I[e.optionsLabelKey[0]]}(${String(M)})`;
              } else
                Wt(e.optionsLabelKey) && (U = I[e.optionsLabelKey]);
              if (e.collectLabel) {
                let M = de(I);
                return delete M.value, delete M.label, {
                  value: I[e.optionsValKey],
                  label: U,
                  ...M
                };
              }
              return {
                value: I[e.optionsValKey],
                label: U
              };
            })), c.value.push(...R);
            let h = {};
            c.value = c.value.filter((I) => h[I == null ? void 0 : I.value] ? !1 : (h[I == null ? void 0 : I.value] = !0, !0)), Pe(function() {
              o("update-option-finish");
            }), A(!0);
          }).catch(() => {
            nl.error(x("r.getDataError")), P(x("r.getDataError"));
          });
        } else
          A(!1);
      });
    }
    return Ne(_), (A, P) => {
      const m = Q("Option"), R = Q("Select"), h = Ht("loadmore");
      return pe((S(), Z(R, nt({
        modelValue: p(b),
        "onUpdate:modelValue": P[0] || (P[0] = ($) => Ae(b) ? b.value = $ : null),
        ref_key: "selectScrollSourceRef",
        ref: g,
        "transfer-class-name": f
      }, A.$attrs, {
        transfer: "",
        filterable: "",
        placeholder: p(y),
        disabled: A.disabled
      }), {
        default: ee(() => [
          (S(!0), D(be, null, _e(p(c), ($, I) => (S(), Z(m, {
            key: "op" + I,
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
}), pl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AlCascaderMC: zl,
  AsyncCascader: Ml,
  BtTablePage: Nt,
  CheckboxGroupThreeClass: $o,
  CheckboxGroupTwoClass: To,
  CheckboxTree: oo,
  EditorPro: Nl,
  FormGroup: ao,
  FormModal: no,
  FormR: _t,
  FullPop: Ba,
  HeaderBt: Vl,
  Hello: Oa,
  IconTxtBtn: It,
  InputMap: Kl,
  MonthRange: Ul,
  Page404: Fa,
  PagePro: Rl,
  SearchForm: Gt,
  SelectInput: $l,
  SelectScrollMore: Eo,
  ShowHidePanel: Mt,
  ShowHidePanelB: sn,
  SideMenu: tn,
  TableIconBtn: Al,
  TableSearch: dn,
  TableSetting: Il,
  TransferBox: bo,
  UploadGroup: Dl,
  WellCard: No
}, Symbol.toStringTag, { value: "Module" })), Go = { class: "a4Line aL notPrint" }, Ho = { class: "a4Line aR notPrint" }, Wo = { class: "a4Line bL notPrint" }, jo = { class: "a4Line bR notPrint" }, qo = { class: "topsL notPrint" }, Jo = { class: "topsLTitle" }, Yo = { class: "topsLBtn" }, Xo = { class: "topsLHelp" }, Qo = { key: 0 }, Zo = /* @__PURE__ */ F("span", null, "1. ", -1), ei = { key: 1 }, ti = /* @__PURE__ */ F("span", null, "2. ", -1), li = { key: 2 }, ai = /* @__PURE__ */ F("span", null, "1. ", -1), ni = ["innerHTML"], oi = /* @__PURE__ */ me({
  __name: "PrintModal",
  setup(t) {
    const i = wl(), o = j(), e = j(!1), n = j(!1), a = j(!1), s = j(715), c = j(!1), u = j(), v = "tablePrint_" + Date.now().toString(), d = j(""), f = j([]), y = j([]), b = j(!1), C = H(() => ({
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
      var A, P, m, R, h;
      if (u.value = (A = i == null ? void 0 : i.params) == null ? void 0 : A.isFrom, u.value) {
        let $ = window.sessionStorage.getItem("print_" + u.value);
        if ($) {
          const I = JSON.parse($);
          if (!I) {
            e.value = !0;
            return;
          }
          f.value = I.columns, y.value = I.data, o.value = I.title, d.value = ((P = I == null ? void 0 : I.config) == null ? void 0 : P.customClass) || "", n.value = ((m = I == null ? void 0 : I.config) == null ? void 0 : m.domPrint) || !1, a.value = ((R = I == null ? void 0 : I.config) == null ? void 0 : R.autoPrint) || !1, s.value = ((h = I == null ? void 0 : I.config) == null ? void 0 : h.width) || 715, document.title = (o.value || x("r.print")) + "_" + (/* @__PURE__ */ new Date()).toLocaleString();
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
    }), K(), (A, P) => {
      const m = Q("Table");
      return S(), D("div", {
        class: xe(["tablePrintModal", [p(d)]])
      }, [
        pe(F("div", { class: "msgL notPrint" }, G(p(x)("r.printGuide.9")), 513), [
          [ve, p(e)]
        ]),
        pe(F("div", Go, [
          F("p", null, G(p(x)("r.printGuide.7")), 1),
          ge(),
          F("p", null, G(p(x)("r.printGuide.5")), 1)
        ], 512), [
          [ve, !p(e)]
        ]),
        pe(F("div", Ho, [
          F("p", null, G(p(x)("r.printGuide.7")), 1),
          ge(),
          F("p", null, G(p(x)("r.printGuide.6")), 1)
        ], 512), [
          [ve, !p(e)]
        ]),
        pe(F("div", Wo, [
          F("p", null, G(p(x)("r.printGuide.8")), 1),
          ge(),
          F("p", null, G(p(x)("r.printGuide.5")), 1)
        ], 512), [
          [ve, !p(e)]
        ]),
        pe(F("div", jo, [
          F("p", null, G(p(x)("r.printGuide.8")), 1),
          ge(),
          F("p", null, G(p(x)("r.printGuide.6")), 1)
        ], 512), [
          [ve, !p(e)]
        ]),
        pe(F("div", qo, [
          F("div", Jo, G(p(o) || p(x)("r.print")), 1),
          F("div", Yo, [
            Y(It, {
              icon: "md-help-circle",
              name: p(x)("r.help"),
              onClick: P[0] || (P[0] = Ot((R) => c.value = !p(c), ["stop"]))
            }, null, 8, ["name"]),
            Y(It, {
              icon: "md-print",
              name: p(x)("r.preview"),
              onClick: V
            }, null, 8, ["name"]),
            p(n) ? ce("", !0) : (S(), Z(Il, {
              key: 0,
              modelValue: p(f),
              "onUpdate:modelValue": P[1] || (P[1] = (R) => Ae(f) ? f.value = R : null),
              "s-key": v,
              storage: "sessionStorage"
            }, null, 8, ["modelValue"])),
            Y(Al, {
              icon: "md-close",
              onClick: g,
              title: p(x)("r.close")
            }, null, 8, ["title"])
          ]),
          pe(F("div", Xo, [
            p(n) ? ce("", !0) : (S(), D("p", Qo, [
              Zo,
              F("span", null, G(p(x)("r.printGuide.1")), 1)
            ])),
            p(n) ? ce("", !0) : (S(), D("p", ei, [
              ti,
              F("span", null, G(p(x)("r.printGuide.2")), 1)
            ])),
            p(n) ? (S(), D("p", li, [
              ai,
              F("span", null, G(p(x)("r.printGuide.10")), 1)
            ])) : ce("", !0),
            F("p", null, [
              F("span", null, G(p(n) ? "2. " : "3. "), 1),
              F("span", null, G(p(x)("r.printGuide.3")), 1)
            ]),
            F("p", null, [
              F("span", null, G(p(n) ? "3. " : "4. "), 1),
              F("span", null, G(p(x)("r.printGuide.4")), 1)
            ])
          ], 512), [
            [ve, p(c)]
          ])
        ], 512), [
          [ve, !p(e)]
        ]),
        p(n) ? (S(), D("div", {
          key: 0,
          class: "domPrintSetting notPrint",
          style: oe(p(C))
        }, [
          F("div", {
            class: "settingLine",
            onMousedown: Ot(w, ["stop"])
          }, null, 32)
        ], 4)) : ce("", !0),
        p(n) ? (S(), D("div", {
          key: 1,
          class: "domPrintContent",
          innerHTML: p(y),
          style: oe(p(C))
        }, null, 12, ni)) : ce("", !0),
        p(n) ? ce("", !0) : pe((S(), Z(m, {
          key: 2,
          class: "tablePW",
          columns: p(f),
          data: p(y),
          border: ""
        }, null, 8, ["columns", "data"])), [
          [ve, !p(e)]
        ])
      ], 2);
    };
  }
});
let je = null;
function ml() {
  document.documentElement.style.setProperty("overflow", "auto");
  const i = document.createElement("style");
  i.innerHTML = "body,div[data-v-app]{height:100% !important}", document.head.appendChild(i);
}
function ii(t) {
  t != null && t.addRoute && (t.hasRoute("tablePrint") || t.addRoute({
    name: "tablePrint",
    path: "/tablePrint/:isFrom",
    component: oi
  })), je = t, location.pathname.indexOf("tablePrint") > -1 ? (je.push(location.pathname), ml()) : location.hash.indexOf("tablePrint") > -1 && (je.push(location.hash.replace(/^#/, "")), ml());
}
function El(t) {
  return J(t) === "Object" && (t.width = t.minWidth || 100, t.sortable = !1, delete t.minWidth, delete t.__id, t.resizable = !0, t.children && J(t.children) === "Array" && (t.children = t.children.map(El))), t;
}
function si(t, i, o, e) {
  var v, d, f;
  if (!je)
    return;
  let n;
  if (!(e != null && e.domPrint)) {
    let y = de(
      t.filter((b) => (b == null ? void 0 : b.key) || (b == null ? void 0 : b.children))
    );
    y[0].type === "selection" && y.shift(), y.length ? n = y.map(El) : n = [];
  }
  let a = (d = (v = je == null ? void 0 : je.currentRoute) == null ? void 0 : v.value) == null ? void 0 : d.fullPath;
  a && (a = (f = a.replace) == null ? void 0 : f.call(a, /\//g, "_"));
  let s = {
    data: i,
    title: o,
    config: e
  };
  e != null && e.domPrint || (s.columns = n), window.sessionStorage.setItem("print_" + a, JSON.stringify(s));
  const c = je.resolve({
    name: "tablePrint",
    params: { isFrom: a }
  });
  window.open(c == null ? void 0 : c.href, "_blank") || console.log("请不要禁用浏览器弹出窗口，否则无法正常使用该打印功能。");
}
const jt = {
  print: si,
  init: ii
};
function ri(t = "", i = "", o = {}) {
  o.domPrint = !0, o.width || (o.width = 715), jt.print([], t, i, o);
}
function ui(t) {
  const i = (...a) => Ee.apply(this, a), o = i("r.closePreview"), e = i("r.fullImg");
  let n = "previewImg" + Math.floor(Math.random() * 1e7);
  We.info({
    closable: !1,
    "transition-names": ["linear", "fade"],
    render: (a) => Te(
      "div",
      {
        class: "previewModal",
        id: n
      },
      [
        Te(
          "div",
          {
            class: "previewModalInner"
          },
          [
            Te("img", {
              src: t,
              alt: e
            }),
            Te(da, {
              type: "md-close",
              size: 20,
              title: o,
              class: "previewModalDelete",
              onClick() {
                We.remove();
              }
            })
          ]
        )
      ]
    )
  }), Fe(() => {
    var c, u, v, d, f, y;
    const a = (d = (v = (u = (c = document.getElementById(n)) == null ? void 0 : c.parentElement) == null ? void 0 : u.parentElement) == null ? void 0 : v.parentElement) == null ? void 0 : d.parentElement, s = (y = (f = document.getElementById(n)) == null ? void 0 : f.parentElement) == null ? void 0 : y.nextSibling;
    a && (a.style.height = "0"), a && (a.style.padding = "0"), s && (s.style.display = "none");
  }, 10);
}
const di = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $fetch: De,
  $swal: $e,
  $swalConfirm: Pl,
  domPrint: ri,
  fullScreenImgByDom: et,
  fullScreenImgPreview: ui,
  messageBox: Ut,
  setInterval: un,
  setTimeout: Fe,
  tablePrint: jt
}, Symbol.toStringTag, { value: "Module" }));
(() => {
  if (window.wangeditorMenuInit)
    return;
  class t {
    constructor() {
      it(this, "title");
      it(this, "iconSvg");
      it(this, "tag");
      it(this, "alwaysEnable");
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
        const A = 40, P = 70, m = (I) => {
          var M;
          if ((I == null ? void 0 : I.type) === "keyup") {
            let le = !1;
            if (I.key && (le = I.key !== "Enter"), le)
              return;
          }
          let T = (M = I == null ? void 0 : I.target) == null ? void 0 : M.value;
          if (T = Number(T), V.style && V.style.width === T + "px")
            return;
          const U = w.clientWidth;
          T < 250 ? (T = 250, I.target.value = 250) : T > U - A && (T = U - A, I.target.value = U - A), V.style.width = T + "px", localStorage.setItem("editorPreviewW", T);
        };
        K.addEventListener("blur", m), K.addEventListener("keyup", m);
        let R = L.children[0].children[0].children[0].children[3];
        const h = (I) => {
          var M;
          if ((I == null ? void 0 : I.type) === "keyup") {
            let le = !1;
            if (I.key && (le = I.key !== "Enter"), le)
              return;
          }
          let T = (M = I == null ? void 0 : I.target) == null ? void 0 : M.value;
          if (T = Number(T), B.style && B.style.height === T + "px")
            return;
          const U = w.clientHeight;
          T < 300 ? (T = 300, I.target.value = 300) : T > U - P && (T = U - P, I.target.value = U - P), B.style.height = T + "px", localStorage.setItem("editorPreviewH", T);
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
  ya.registerMenu(i), window.wangeditorMenuInit = !0;
})();
const Ai = gt.use, Pi = gt.i18n, hl = {
  ...di,
  ...Ya
}, ci = function(t, i = {}) {
  De.init(i.useStore || i.store, t), t.use(va), i.locale && gt.use(i.locale), i.i18n && gt.i18n(i.i18n), i.router && (rn(i.router), jt.init(i.router)), i.amap && xn(i.amap), i.notRegistryGlobal || (Object.keys(pl).forEach((o) => {
    t.component(o) || t.component(o, pl[o]);
  }), Object.keys(hl).forEach((o) => {
    t.config.globalProperties[o] = hl[o];
  })), t.directive("has") || t.directive("has", (o, e) => {
    e.value && !xl(e.value) && (o.style.display = "none");
  }), t.directive("loadmore") || t.directive("loadmore", {
    mounted(o, e) {
      var a;
      let n = o;
      e.arg && (n = (a = document.getElementsByClassName(e.arg)) == null ? void 0 : a[0]), n && n.addEventListener("scroll", function() {
        n.scrollTop > 0 && n.scrollHeight - n.scrollTop <= n.clientHeight && e.value();
      });
    }
  }), t.config.globalProperties.fontSizeBase = 14, t.config.globalProperties.searchFormLabelWidth = 84, t.config.globalProperties.searchFormItemWidth = 202, t.config.globalProperties.formModalLabelWidth = 140, t.config.globalProperties.formModalWidth = 520, t.config.globalProperties.formGroupLabelWidth = 160, t.config.globalProperties.formGroupWidth = "100%", t.config.globalProperties.iconTxtBtnIconSize = 17, t.config.globalProperties.pageSizes = [10, 20, 50, 100], t.config.globalProperties.btTablePageUsePagePro = !0, t.config.globalProperties.btTablePageAlign = "center", t.config.globalProperties.pageShowTotal = !0, t.config.globalProperties.pageShowSizer = !0, t.config.globalProperties.tableSettingBg = "#fff", t.config.globalProperties.tableSettingTransfer = !0, t.config.globalProperties.tableSettingEventsEnabled = !0;
}, Ii = { install: ci };
export {
  De as $fetch,
  $e as $swal,
  Pl as $swalConfirm,
  zl as AlCascaderMC,
  Ml as AsyncCascader,
  Nt as BtTablePage,
  $o as CheckboxGroupThreeClass,
  To as CheckboxGroupTwoClass,
  oo as CheckboxTree,
  Nl as EditorPro,
  ao as FormGroup,
  no as FormModal,
  _t as FormR,
  Ba as FullPop,
  Vl as HeaderBt,
  Oa as Hello,
  It as IconTxtBtn,
  Kl as InputMap,
  Ul as MonthRange,
  Fa as Page404,
  Rl as PagePro,
  Gt as SearchForm,
  $l as SelectInput,
  Eo as SelectScrollMore,
  Mt as ShowHidePanel,
  sn as ShowHidePanelB,
  tn as SideMenu,
  Al as TableIconBtn,
  dn as TableSearch,
  Il as TableSetting,
  bo as TransferBox,
  Dl as UploadGroup,
  No as WellCard,
  $t as clearObj,
  qa as dataFilterOrToUrl,
  Na as decimalDigitsLimit,
  Ii as default,
  ri as domPrint,
  Tl as downloadFileByFormSubmit,
  $a as downloadFileReaderFile,
  Oi as emptyInput,
  Ka as fakeALinkClick,
  Ea as fileExport,
  Ze as findCollection,
  Ft as findPath,
  za as formDataHeadConfig,
  et as fullScreenImgByDom,
  ui as fullScreenImgPreview,
  Ga as getColumnsKeys,
  Bt as getFileSrc,
  Cl as getFileTypeByName,
  rl as getFileTypeIconByName,
  Ma as getStringWidth,
  xl as hasPermission,
  xi as htmlDecode,
  Bi as htmlEncode,
  Ja as htmlPrint,
  Pi as i18n,
  ci as install,
  Rt as isClient,
  Wa as isEmptyValue,
  xt as isImgByFile,
  Ol as isNaN,
  Ha as isNumberValue,
  Be as isValidValue,
  Ai as locale,
  Ut as messageBox,
  J as myTypeof,
  Ua as oneOf,
  Kt as removeEmptyValue,
  un as setInterval,
  Fe as setTimeout,
  tt as setValByOption,
  Ue as setValue,
  Ll as siblingElems,
  Li as stopBubbling,
  ja as stringLength,
  jt as tablePrint,
  Da as toFormData,
  Ra as toHump,
  Sl as toLine,
  Bl as tooltipManual,
  bt as trimObj
};
//# sourceMappingURL=plugRQw.js.map
