var ta = Object.defineProperty;
var la = (t, i, o) => i in t ? ta(t, i, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[i] = o;
var it = (t, i, o) => (la(t, typeof i != "symbol" ? i + "" : i, o), o);
import { getCurrentInstance as Ct, defineComponent as pe, resolveComponent as ee, openBlock as x, createElementBlock as N, normalizeClass as Oe, normalizeStyle as re, createBlock as Z, createCommentVNode as fe, renderSlot as Pe, ref as G, computed as E, withDirectives as ye, unref as p, createElementVNode as P, toDisplayString as H, createVNode as q, withCtx as te, createTextVNode as be, vShow as ge, resolveDirective as Wt, onMounted as De, nextTick as Ae, onUpdated as aa, onUnmounted as Cl, isRef as $e, h as Be, Fragment as we, renderList as Se, onBeforeMount as na, watch as ke, mergeModels as oa, useModel as ia, onBeforeUnmount as Sl, Teleport as sa, withModifiers as Ot, mergeProps as nt, shallowRef as ct, triggerRef as ra, createSlots as at, toRef as ua, toValue as xt } from "vue";
import da from "deepmerge";
import { debounce as jt, isPlainObject as lt, cloneDeep as ue, isObject as ca, isFunction as fa, isEmpty as Ie, isNumber as ft, isString as qt, last as gt, isEqual as pt, first as At, find as It, indexOf as il, findIndex as bt, remove as pa } from "lodash-es";
import yt from "sweetalert";
import { Tooltip as ma, Modal as qe, Button as Lt, TableColumnConfig as ha, Radio as ya, Input as va, Message as sl, Icon as ga } from "view-ui-plus";
import { useRouter as ba, useRoute as Tl } from "vue-router";
import ka from "popper.js";
import Pt from "axios";
import rl from "@amap/amap-jsapi-loader";
import wa from "ar-cascader";
import { Toolbar as _a, Editor as Va } from "@wangeditor/editor-for-vue";
import st from "moment";
import { Boot as Ca } from "@wangeditor/editor";
import Sa from "vue-json-viewer";
const Bl = {
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
    fullImg: "该文件不支持图片形式预览",
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
    notSave: "您未保存，是否保存？",
    last: "上一张",
    next: "下一张"
  }
}, Ta = /(%|){([0-9a-zA-Z_]+)}/g;
function Ba() {
  function t(o, e) {
    return Object.prototype.hasOwnProperty.call(o, e);
  }
  function i(o, ...e) {
    let a;
    return e.length === 1 && typeof e[0] == "object" && (a = e[0]), (!a || !a.hasOwnProperty) && (a = {}), o === void 0 ? "" : o.replace(Ta, (n, s, d, u) => {
      let b;
      return o[u - 1] === "{" && o[u + n.length] === "}" ? d : (b = t(a, d) ? a[d] : null, b ?? "");
    });
  }
  return i;
}
const xa = Ba();
let kt = Bl;
const La = {
  zh: Bl
};
let ul, dl = {}, Fe, Oa = function(t, i) {
  if (typeof this == "object" && Reflect.has(this, "$t"))
    return this.$t(t, i);
  if (Fe && Fe.global)
    return Fe.global.t(t, i);
  if (Fe && Fe.locale) {
    if (!dl[Fe.locale] || ul != Fe.locale) {
      dl[Fe.locale] = !0;
      let o = Fe.getLocaleMessage(Fe.locale) || {}, e = da(La[Fe.locale], o, { clone: !0 });
      kt = e, Fe.setLocaleMessage(Fe.locale, e), ul = Fe.locale;
    }
    return Fe.hlang(t, i);
  }
};
const He = function(t, i) {
  let o = Oa.apply(this, [t, i]);
  if (o != null)
    return o;
  const e = t.split(".");
  let a = kt;
  for (let n = 0, s = e.length; n < s; n++) {
    const d = e[n];
    if (o = a[d], n === s - 1)
      return xa(o, i);
    if (!o)
      return "";
    a = o;
  }
  return "";
}, Aa = function(t) {
  kt = t || kt;
}, Ia = function(t) {
  Fe = t;
}, wt = {
  use: Aa,
  t: He,
  i18n: Ia
};
function L(t, i) {
  var e, a, n;
  const o = (n = (a = (e = Ct()) == null ? void 0 : e.appContext) == null ? void 0 : a.config) == null ? void 0 : n.globalProperties;
  return He.apply(o, [t, i]);
}
const xl = /* @__PURE__ */ pe({
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
    function a() {
      o.disabled || e("click");
    }
    return (n, s) => {
      const d = ee("Icon");
      return x(), N("div", {
        class: Oe({ headerBtCTM: !0, withIconCTM: o.icon || o.withIcon, disabled: o.disabled }),
        style: re({ color: o.color, borderLeftColor: o.borderColor }),
        onClick: a
      }, [
        o.icon ? (x(), Z(d, {
          key: 0,
          size: o.iconSize,
          type: o.icon
        }, null, 8, ["size", "type"])) : fe("", !0),
        Pe(n.$slots, "default")
      ], 6);
    };
  }
});
function Ce() {
  const { appContext: t } = Ct();
  return t.config.globalProperties;
}
const Pa = { class: "headerTxtAM" }, $a = { class: "contentAM" }, Fa = /* @__PURE__ */ pe({
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
    const e = t, a = o;
    let n = G(!1);
    const s = E(() => typeof e.headerFontSize == "number" ? e.headerFontSize + "px" : e.headerFontSize), d = E(() => ({ zIndex: e.zIndex }));
    function u() {
      n.value = !0, a("on-open");
    }
    function b(m) {
      n.value = !1, a("on-close", m === !0);
    }
    return i({
      open: u,
      close: b
    }), (m, f) => ye((x(), N("div", {
      class: "fullScreenPopBoxAM",
      style: re(p(d))
    }, [
      P("div", {
        class: "headerAM",
        style: re({ color: e.headerColor, backgroundColor: e.headerBg, fontSize: p(s) })
      }, [
        P("span", Pa, H(m.title || p(L)("r.title")), 1),
        q(xl, {
          icon: "md-return-left",
          onClick: b
        }, {
          default: te(() => [
            be(H(p(L)("r.back")), 1)
          ]),
          _: 1
        })
      ], 4),
      P("div", $a, [
        Pe(m.$slots, "default")
      ])
    ], 4)), [
      [ge, p(n)]
    ]);
  }
}), Ra = { class: "msg" }, Ka = /* @__PURE__ */ pe({
  __name: "Hello",
  setup(t) {
    let i = G("Greetings from Ricky.");
    return (o, e) => (x(), N("span", Ra, H(p(i)), 1));
  }
}), $t = /* @__PURE__ */ pe({
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
    const o = t, e = i, a = E(() => {
      var s;
      return Math.floor(o.size / 17 * ((s = Ce()) == null ? void 0 : s.fontSizeBase)) + "px";
    });
    function n(s) {
      o.disabled || e("click", s);
    }
    return (s, d) => {
      const u = ee("Icon"), b = Wt("has");
      return ye((x(), N("div", {
        class: Oe(["tabTopBtnsT", { disabled: o.disabled }]),
        onClick: n,
        style: re({ "font-size": p(a) })
      }, [
        q(u, {
          type: o.icon,
          size: o.size
        }, null, 8, ["type", "size"]),
        be(" " + H(o.name || p(L)("r.button")), 1)
      ], 6)), [
        [b, s.has]
      ]);
    };
  }
}), Ma = { class: "c404K" }, za = /* @__PURE__ */ P("div", { class: "t404" }, "404", -1), Da = { class: "ct404" }, Ua = { class: "p404" }, Na = /* @__PURE__ */ pe({
  __name: "Page404",
  setup(t) {
    const o = Ct().appContext.config.globalProperties.$router;
    function e() {
      o.go(-1);
    }
    return (a, n) => {
      const s = ee("Button");
      return x(), N("div", Ma, [
        za,
        P("div", Da, "UH OH! " + H(p(L)("r.pageNotFound")), 1),
        P("div", Ua, H(p(L)("r.notFoundMsg")), 1),
        q(s, {
          class: "bt404",
          onClick: e
        }, {
          default: te(() => [
            be(H(p(L)("r.back")), 1)
          ]),
          _: 1
        })
      ]);
    };
  }
});
function Me(t, i, o, e = !0) {
  const a = (...n) => He.apply(this, n);
  return new Promise((n, s) => {
    if (typeof t == "object" && !Array.isArray(t)) {
      let d = a("r.confirm"), u = a("r.cancel"), b = !1, m = "swalConfirmBt", f = "swalCancelBt";
      const c = /^HTML.*Element$/;
      t.type && (t.icon = t.type) && delete t.type, t.content && (t.text = t.content) && delete t.content, t.className = t.className || "swalBoxX";
      let g = "";
      t.text && c.test(j(t.text)) ? g = "content" : t.text && j(t.text) === "String" && (g = "text"), t.buttons && (typeof t.buttons == "object" && !Array.isArray(t.buttons) ? t.buttons.cancel && (t.buttons.cancel.text && (u = t.buttons.cancel.text) && (b = !0), t.buttons.cancel.className && (f = t.buttons.cancel.className), t.buttons.confirm.text && (d = t.buttons.confirm.text), t.buttons.confirm.className && (m = t.buttons.confirm.className)) : Array.isArray(t.buttons) && (t.buttons[0] && (u = t.buttons[0], b = !0), t.buttons[1] && (d = t.buttons[1]))), yt({
        title: t.title,
        icon: t.icon,
        className: t.className,
        [g]: t.text,
        buttons: {
          confirm: {
            text: d,
            value: !0,
            visible: !0,
            className: m
          },
          cancel: {
            text: u,
            value: null,
            visible: b,
            className: f
          }
        },
        closeOnClickOutside: t.closeOnClickOutside ?? !0
      }).then((k) => {
        k && typeof t.onOk == "function" && t.onOk(), n(k);
      }).catch((k) => {
        s(k);
      });
    } else if (typeof t == "string") {
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
      yt({
        title: t,
        [d]: i || "",
        icon: o || "",
        className: "swalBoxX",
        closeOnClickOutside: e,
        buttons: {
          confirm: {
            text: a("r.confirm"),
            value: !0,
            visible: !0,
            className: "swalConfirmBt",
            closeModal: !0
          }
        }
      }).then((u) => {
        n(u);
      }).catch((u) => {
        s(u);
      });
    } else if (typeof t == "boolean")
      !t && yt.close && yt.close();
    else
      throw new TypeError("swal第一个参数类型有误，仅支持Object/String/false");
  });
}
const Ea = { class: "tableTooltip" }, Ga = /* @__PURE__ */ pe({
  __name: "TableTooltip",
  props: {
    content: { type: [String, Number, Boolean, null] }
  },
  setup(t) {
    const i = t, o = G(), e = G(), a = G(!0);
    let n = null;
    const s = G(200);
    function d() {
      const u = a.value ? o.value : e.value;
      if (!u)
        return;
      let b = document.createRange();
      b.setStart(u, 0), b.setEnd(u, u.childNodes.length);
      const m = b.getBoundingClientRect().width;
      s.value = u.offsetWidth * 2, a.value = m < u.offsetWidth, b = null;
    }
    return De(() => {
      d(), n = jt(() => {
        Ae(function() {
          d();
        });
      }, 200), window.addEventListener("resize", n);
    }), aa(d), Cl(() => {
      window.removeEventListener("resize", n);
    }), (u, b) => (x(), N("div", Ea, [
      p(a) ? (x(), N("span", {
        key: 0,
        ref_key: "spanRef",
        ref: o,
        class: "contentText"
      }, H(i.content), 513)) : (x(), Z(p(ma), {
        key: 1,
        content: typeof i.content == "boolean" ? String(i.content) : i.content ?? "",
        "max-width": p(s),
        transfer: ""
      }, {
        default: te(() => [
          P("span", {
            ref_key: "contentRef",
            ref: e,
            class: "contentText"
          }, H(i.content), 513)
        ]),
        _: 1
      }, 8, ["content", "max-width"]))
    ]));
  }
}), Ft = typeof window < "u";
function Ee(t, i) {
  $e(t) ? t.value = i : t = i;
}
function j(t) {
  return Object.prototype.toString.call(t).replace(/\[object |]/g, "");
}
function Ha(t) {
  return { style: { display: Jt(t) ? "unset" : "none" } };
}
function Ll(t) {
  return t.replace(/([A-Z])/g, "_$1").toLowerCase();
}
function _t(t) {
  let i = j(t);
  if (i === "Object") {
    for (let o in t)
      if (t.hasOwnProperty(o)) {
        let e = j(t[o]);
        e === "String" ? t[o] = t[o].trim() : (e === "Object" || e === "Array") && _t(t[o]);
      }
  } else if (i === "Array")
    for (let o = 0, e = t.length; o < e; o++) {
      let a = j(t[o]);
      a === "String" ? t[o] = t[o].trim() : (a === "Array" || a === "Object") && _t(t[o]);
    }
  return t;
}
function Rt(t, i = []) {
  if (j(t) === "Array")
    return t.forEach((o, e) => {
      switch (j(o)) {
        case "Array":
        case "Object":
          Rt(o);
          break;
        default:
          t[e] = null;
      }
    }), t;
  if (j(t) === "Object") {
    for (let o in t)
      if (t.hasOwnProperty(o)) {
        let e = !0;
        for (let a of i)
          if (a === o) {
            e = !1;
            break;
          }
        if (e)
          switch (j(t[o])) {
            case "Array":
            case "Object":
              Rt(t[o]);
              break;
            default:
              t[o] = null;
          }
      }
    return t;
  } else
    return t;
}
const Wa = {
  headers: {
    "Content-Type": "multipart/form-data"
  }
};
function ja(t) {
  let i = new FormData();
  for (let o in t)
    t.hasOwnProperty(o) && t[o] !== null && i.append(o, t[o]);
  return i;
}
function et(t, i, o = !1) {
  if (!t || !i)
    return !1;
  let e, a = "notFoundC", n = function(s, d) {
    if (Array.isArray(s)) {
      if (j(d) === "Function" && d(s))
        return a = s, [];
      for (let u of s) {
        if (a !== "notFoundC")
          break;
        if (j(d) === "Function" && d(u) || u === d)
          return a = u, [s.indexOf(u)];
        if (j(u) === "Array" || j(u) === "Object") {
          let b = n(u, d);
          if (b !== void 0)
            return [s.indexOf(u), ...b];
        }
      }
    } else if (j(s) === "Object") {
      if (j(d) === "Function" && d(s))
        return a = s, [];
      for (let u in s) {
        if (a !== "notFoundC")
          break;
        if (s.hasOwnProperty(u)) {
          if (j(d) === "Function" && d(u) || s[u] === d)
            return a = s[u], [u];
          if (j(s[u]) === "Object" || j(s[u]) === "Array") {
            let b = n(s[u], d);
            if (b !== void 0)
              return [u, ...b];
          }
        }
      }
    }
  };
  return e = n(t, i), o ? e || !1 : a === "notFoundC" ? !1 : a;
}
function qa(t, i) {
  for (let o = 0, e = i.length; o < e; o++)
    if (t === i[o])
      return !0;
  return !1;
}
function Ja(t, i = 2) {
  let o = new RegExp(`(^-?\\d+\\.\\d{${i}})(\\d+$)`), e = t && String(t) || "";
  return o.test(e) ? Number(e.replace(o, "$1")) : t;
}
function Ol(t, i = {}, o = "get") {
  let e = document.createElement("form"), a = document.getElementsByTagName("body")[0];
  a.appendChild(e), e.setAttribute("style", "display:none"), e.setAttribute("target", ""), e.setAttribute("method", o);
  let n = t;
  if (window && window.hasOwnProperty("g")) {
    let s = Object.keys(window.g).filter((d) => {
      var u;
      return ((u = d == null ? void 0 : d.indexOf) == null ? void 0 : u.call(d, "URL")) > -1;
    }).map((d) => {
      var u;
      return (u = d.replace) == null ? void 0 : u.call(d, "URL", "");
    });
    for (let d of s) {
      let u = new RegExp("^/" + d + "(?=/.*$)", "i");
      if (u.test(t) && window.g[d + "URL"]) {
        n = window.g[d + "URL"] + t.replace(u, "");
        break;
      }
    }
  }
  if (e.setAttribute("action", n), lt(i)) {
    for (let d in i)
      if (i.hasOwnProperty(d) && (i[d] || i[d] === 0 || i[d] === !1 || i[d] === "")) {
        let u = document.createElement("input");
        u.setAttribute("type", "hidden"), u.setAttribute("name", d), u.setAttribute("value", i[d]), e.appendChild(u);
      }
    e.submit();
    let s = setTimeout(() => {
      a.removeChild(e), clearTimeout(s), s = null;
    }, 8e3);
  } else
    console.error("请求数据格式有误，无法下载文件");
}
function Ya(t, i = {}, o = "get") {
  if (i.hasOwnProperty("columns") && (i.columns === "" || i.columns === null || i.columns === void 0)) {
    Me.call(this, {
      title: "需要导出的列不能为空",
      type: "warning"
    });
    return;
  }
  Ol(t, i, o);
}
function Xa(t, i, o = !1) {
  let e;
  if (t && j(i) === "Array") {
    let a = localStorage.getItem(t);
    if (a) {
      let n = JSON.parse(decodeURI(a));
      e = i.filter((s) => {
        var d;
        return (s == null ? void 0 : s.key) && ((d = n == null ? void 0 : n.indexOf) == null ? void 0 : d.call(n, s.title)) !== -1;
      }).map((s) => s.key);
    } else
      e = i.map((n) => n == null ? void 0 : n.key);
  } else
    e = [];
  return o || (e = String(e)), e;
}
function xe(t) {
  return t != null && t !== "";
}
function Qa(t) {
  return /^-?\d+(.\d+)?$/.test(t);
}
function Al(t, i = !1, o = "") {
  return function(e, a) {
    var s, d;
    let n;
    if (Array.isArray(t)) {
      let u = [];
      for (let b of t)
        xe((s = a.row) == null ? void 0 : s[b]) && u.push(a.row[b]);
      n = u.join(o);
    } else
      typeof t == "function" ? n = t(a) : n = (d = a.row) == null ? void 0 : d[t];
    return Be(Ga, { content: i ? n === "" ? "--" : n ?? "--" : n });
  };
}
function Za(t) {
  if (lt(t)) {
    for (let i in t)
      if (t.hasOwnProperty(i) && xe(t[i]))
        return !1;
    return !0;
  } else if (Array.isArray(t)) {
    for (let i of t)
      if (xe(i))
        return !1;
    return !0;
  }
  return !xe(t);
}
function en(t) {
  return j(t) === "String" ? t.replace(/[^\x00-\xff]/g, "01").length : j(t) === "Number" ? (t += "", t.replace(/[^\x00-\xff]/g, "01").length) : 0;
}
function tt({
  group: t,
  condition: i,
  key: o,
  val: e,
  childKey: a = "children"
}) {
  if (j(t) !== "Array" || j(i) !== "Function" || j(o) !== "String" || j(a) !== "String")
    return !1;
  t.forEach((n) => {
    i(n) && (j(e) === "Function" ? n[o] = e(n[o]) : n[o] = e), j(n[a]) === "Array" && n[a].length > 0 && tt({
      group: n[a],
      condition: i,
      key: o,
      val: e,
      childKey: a
    });
  });
}
function Jt(t) {
  let i = sessionStorage.getItem("btnPermissions");
  return i ? i.split(",").indexOf(t) > -1 : !1;
}
function Il(t) {
  return j(t) === "Number" && String(t) === "NaN";
}
function tn(t, i = !1, o = !1) {
  if (j(t) !== "Object")
    return t;
  let e = Object.assign(t, {}), a = "";
  for (let n in e)
    if (e.hasOwnProperty(n)) {
      let s = e[n];
      s === void 0 || s === "" || j(s) === "String" && s.trim() === "" || s === null || Il(s) ? o ? i ? a += n + "=&" : e[n] = "" : delete e[n] : i && (a += n + "=" + s + "&");
    }
  return i ? a.length > 0 ? a.substring(0, a.length - 1) : "" : e;
}
function Kt(t) {
  let i = {};
  if (Array.isArray(t)) {
    i = [];
    for (let o of t)
      Array.isArray(o) || lt(o) ? i.push(Kt(o)) : xe(o) && i.push(o);
  } else if (lt(t))
    for (let o in t)
      t.hasOwnProperty(o) && (Array.isArray(t[o]) || lt(t[o]) ? i[o] = Kt(t[o]) : xe(t[o]) && (i[o] = t[o]));
  return i;
}
function ln(t) {
  const i = window.open();
  if (i) {
    i.document.write(t);
    let o = setTimeout(() => {
      i.print(), window.clearTimeout(o), o = null;
    }, 10);
  }
}
function Pl(t) {
  let i = [], o = t;
  for (; t.previousSibling && (t = t.previousSibling); )
    t.nodeType === 1 && i.push(t);
  for (; o.nextSibling && (o = o.nextSibling); )
    o.nodeType === 1 && i.push(o);
  return i;
}
const an = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clearObj: Rt,
  dataFilterOrToUrl: tn,
  decimalDigitsLimit: Ja,
  downloadFileByFormSubmit: Ol,
  fileExport: Ya,
  findCollection: et,
  formDataHeadConfig: Wa,
  getColumnsKeys: Xa,
  has: Ha,
  hasPermission: Jt,
  htmlPrint: ln,
  isClient: Ft,
  isEmptyValue: Za,
  isNaN: Il,
  isNumberValue: Qa,
  isValidValue: xe,
  myTypeof: j,
  oneOf: qa,
  removeEmptyValue: Kt,
  setValByOption: tt,
  setValue: Ee,
  siblingElems: Pl,
  stringLength: en,
  toFormData: ja,
  toLine: Ll,
  tooltipManual: Al,
  trimObj: _t
}, Symbol.toStringTag, { value: "Module" })), nn = { class: "groupBoxRP" }, on = ["onClick"], sn = /* @__PURE__ */ pe({
  __name: "SideMenuGroup",
  props: {
    data: { default: () => [] },
    pathName: { default: "" }
  },
  setup(t) {
    const i = ba(), o = t;
    function e(n) {
      return (n == null ? void 0 : n.path) === o.pathName ? "active" : "";
    }
    function a(n, s) {
      var m, f, c, g, k, y, C, w;
      (m = n == null ? void 0 : n.preventDefault) == null || m.call(n);
      let d = n == null ? void 0 : n.target;
      if (s && !s.children && !d.classList.contains("active")) {
        i.push(s.path);
        return;
      }
      let u = d.parentNode, b = Pl(u);
      for (let T of b) {
        (c = (f = T == null ? void 0 : T.classList) == null ? void 0 : f.remove) == null || c.call(f, "open");
        const B = (g = T == null ? void 0 : T.querySelectorAll) == null ? void 0 : g.call(T, ".open");
        if (B && Array.isArray(B))
          for (let S of B)
            (y = (k = S == null ? void 0 : S.classList) == null ? void 0 : k.remove) == null || y.call(k, "open");
      }
      (w = (C = u == null ? void 0 : u.classList) == null ? void 0 : C.toggle) == null || w.call(C, "open");
    }
    return (n, s) => {
      const d = ee("sideMenuGroup", !0);
      return x(), N("ul", nn, [
        (x(!0), N(we, null, Se(o.data, (u, b) => (x(), N(we, {
          key: (u == null ? void 0 : u.path) + b
        }, [
          u ? (x(), N("li", {
            key: 0,
            class: Oe({ dropItemRP: u.children })
          }, [
            P("div", {
              class: Oe(["menuTxtR", e(u)]),
              onClick: (m) => a(m, u),
              style: re({ paddingLeft: u.level * 20 + "px" })
            }, H(u.name || "-- no name --"), 15, on),
            u.children ? (x(), Z(d, {
              key: 0,
              data: u.children,
              "path-name": o.pathName
            }, null, 8, ["data", "path-name"])) : fe("", !0)
          ], 2)) : fe("", !0)
        ], 64))), 128))
      ]);
    };
  }
}), rn = { class: "menuListR" }, un = /* @__PURE__ */ pe({
  __name: "SideMenu",
  props: {
    data: { default: () => [] }
  },
  emits: ["on-change"],
  setup(t, { emit: i }) {
    const o = t, e = i, a = Tl(), n = G(!0), s = G(), d = G(), u = E(() => n.value ? L("r.hideMenu") : L("r.showMenu")), b = E(() => n.value ? "ios-arrow-back" : "ios-arrow-forward");
    na(() => {
      let c = localStorage.getItem("menuDisplayR") || "";
      c !== "" ? n.value = JSON.parse(c) : (n.value = !0, localStorage.setItem("menuDisplayR", JSON.stringify(!0)));
    }), ke(
      () => a.path,
      (c) => {
        s.value = c, Ae(f);
      },
      { immediate: !0 }
    );
    function m() {
      n.value = !n.value, localStorage.setItem("menuDisplayR", JSON.stringify(n.value)), e("on-change", n.value);
    }
    function f() {
      var g, k, y, C, w;
      let c = d.value.querySelectorAll(".dropItemRP");
      for (let T of c)
        (g = T == null ? void 0 : T.querySelector) != null && g.call(T, ".active") && !((y = (k = T.classList) == null ? void 0 : k.contains) != null && y.call(k, "open")) && ((w = (C = T.classList) == null ? void 0 : C.add) == null || w.call(C, "open"));
    }
    return (c, g) => {
      const k = ee("Icon");
      return x(), N("div", {
        ref_key: "menuRef",
        ref: d,
        class: "menuBoxRP"
      }, [
        ye(P("div", rn, [
          q(sn, {
            data: o.data,
            pathName: p(s)
          }, null, 8, ["data", "pathName"])
        ], 512), [
          [ge, p(n)]
        ]),
        q(k, {
          type: p(b),
          size: 25,
          class: Oe([{ showIco: !p(n) }, "menuShowHideIco"]),
          title: p(u),
          onClick: m,
          color: p(n) ? "#fff" : "#333"
        }, null, 8, ["type", "class", "title", "color"])
      ], 512);
    };
  }
}), dn = ["title"], $l = /* @__PURE__ */ pe({
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
    function a(n) {
      e.disabled || o("click", n);
    }
    return (n, s) => {
      const d = ee("Icon"), u = Wt("has");
      return ye((x(), N("div", {
        class: Oe(["tableBtnsG", { disabled: e.disabled }]),
        onClick: a,
        title: e.title || p(L)("r.button")
      }, [
        q(d, {
          type: e.icon,
          size: e.size
        }, null, 8, ["type", "size"])
      ], 10, dn)), [
        [u, e.has]
      ]);
    };
  }
}), cn = { class: "contentX" }, fn = { class: "arrowA" }, Mt = /* @__PURE__ */ pe({
  __name: "ShowHidePanel",
  props: /* @__PURE__ */ oa({
    bg: {}
  }, {
    modelValue: { type: Boolean, default: !0 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(t) {
    const i = ia(t, "modelValue"), o = t, e = E(() => i ? "background:" + o.bg || "transparent" : "");
    return (a, n) => {
      const s = ee("Icon");
      return x(), N("div", {
        style: re(p(e))
      }, [
        ye(P("div", cn, [
          Pe(a.$slots, "default")
        ], 512), [
          [ge, i.value]
        ]),
        P("div", fn, [
          P("div", {
            class: "btA",
            onClick: n[0] || (n[0] = (d) => i.value = !i.value)
          }, [
            q(s, {
              type: i.value ? "ios-arrow-up" : "ios-arrow-down",
              size: "20"
            }, null, 8, ["type"])
          ])
        ])
      ], 4);
    };
  }
}), pn = { class: "contentZ" }, mn = /* @__PURE__ */ pe({
  __name: "ShowHidePanelB",
  props: {
    modelValue: { type: Boolean, default: !1 },
    bg: { default: "transparent" }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: i }) {
    const o = t, e = i, a = E({
      get() {
        return o.modelValue;
      },
      set(s) {
        e("update:modelValue", s);
      }
    }), n = E(() => a.value ? "background:" + o.bg : "");
    return (s, d) => (x(), N("div", {
      style: re(p(n))
    }, [
      ye(P("div", pn, [
        Pe(s.$slots, "default")
      ], 512), [
        [ge, p(a)]
      ])
    ], 4));
  }
});
let zt = [], Dt = [];
const hn = function(t) {
  t && t.beforeEach ? t.beforeEach(() => {
    zt.map((i) => {
      window.clearTimeout(i);
    }), Dt.map((i) => {
      window.clearInterval(i);
    }), zt.length = 0, Dt.length = 0;
  }) : console.warn(
    "安装库plug-r-qw时未传入router，调用该库的定时器方法产生的定时器将不能自动销毁，请传入router：Vue.use(plugRQw,{router,...})"
  );
}, Re = function(t, i) {
  let o = window.setTimeout(t, i);
  return zt.push(o), o;
}, yn = function(t, i) {
  let o = window.setInterval(t, i);
  return Dt.push(o), o;
}, vn = /* @__PURE__ */ pe({
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
    let a = !1;
    const n = E({
      get() {
        return e.modelValue;
      },
      set(b) {
        o("update:modelValue", b);
      }
    }), s = E({
      get() {
        return e.open;
      },
      set(b) {
        o("on-toggle", b);
      }
    }), d = E(() => s.value ? "ios-arrow-up" : "ios-arrow-down");
    function u() {
      a || (a = !0, o("on-search", n.value), Re(() => {
        a = !1;
      }, 2e3));
    }
    return (b, m) => {
      const f = ee("Input"), c = ee("icon");
      return x(), N("div", {
        class: "tableSearchV",
        style: re({ position: e.fixed ? "fixed" : "absolute", right: e.right, top: e.top })
      }, [
        Pe(b.$slots, "default", {}, () => [
          q(f, {
            modelValue: p(n),
            "onUpdate:modelValue": m[0] || (m[0] = (g) => $e(n) ? n.value = g : null),
            style: re({ width: e.width }),
            search: "",
            onOnSearch: u,
            class: "searchInputC",
            placeholder: e.placeholder || p(L)("r.pInput")
          }, null, 8, ["modelValue", "style", "placeholder"])
        ]),
        ye(P("span", {
          class: "sbt",
          onClick: m[1] || (m[1] = (g) => s.value = !p(s)),
          style: re({ color: e.btnColor })
        }, [
          q(c, {
            type: p(d),
            color: e.btnColor
          }, null, 8, ["type", "color"]),
          be(H(p(L)("r.adSearch")), 1)
        ], 4), [
          [ge, e.showBtn]
        ])
      ], 4);
    };
  }
}), Fl = {
  beforeMount(t, i) {
    function o(e) {
      var a;
      if (t.contains(e.target))
        return !1;
      (a = i == null ? void 0 : i.value) == null || a.call(i, e);
    }
    t.__vueClickOutside__ = o, Ft && document.addEventListener("click", o);
  },
  unmounted(t) {
    Ft && document.removeEventListener("click", t.__vueClickOutside__), delete t.__vueClickOutside__;
  }
};
function Rl(t, i, o, e, a = !1) {
  const n = (...s) => He.apply(this, s);
  Me.call(this, {
    title: t || n("r.info.title"),
    text: i || n("r.info.text"),
    icon: o || "warning",
    onOk: e,
    buttons: [n("r.cancel")],
    closeOnClickOutside: a
  });
}
const gn = { class: "tabSetF" }, bn = { class: "cannotSelect" }, kn = { class: "topCheck" }, wn = /* @__PURE__ */ P("span", { class: "iconfont icon-r-save" }, null, -1), Kl = /* @__PURE__ */ pe({
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
    var _, h, $, ae, D;
    const o = i, e = t, a = G(), n = G(), s = G(!0), d = G(!1), u = G(!1), b = G([]), m = E(() => {
      var le;
      let K = L("r.unknown");
      return ((le = e.modelValue) == null ? void 0 : le.length) > b.value.length && (b.value = ue(e.modelValue)), b.value.map((v) => {
        let M = { label: (v == null ? void 0 : v.title) || K };
        return v != null && v.disableShowSetting && (M.disabled = !0), M;
      });
    }), f = E(() => m.value.filter((K) => K == null ? void 0 : K.disabled)), c = E({
      get() {
        var K, le;
        return (le = (K = e.modelValue) == null ? void 0 : K.map) == null ? void 0 : le.call(K, (v) => (v == null ? void 0 : v.title) || L("r.unknown"));
      },
      set(K) {
        let le = b.value.filter((v) => {
          for (let M of K)
            if (M === (v == null ? void 0 : v.title))
              return !0;
          return !1;
        });
        o("update:modelValue", le);
      }
    }), g = (D = (ae = ($ = (h = (_ = Ct()) == null ? void 0 : _.appContext) == null ? void 0 : h.config) == null ? void 0 : $.globalProperties) == null ? void 0 : ae.$i18n) == null ? void 0 : D.locale;
    let k = null;
    De(() => {
      let K = L("r.unknown"), le = A();
      le ? c.value = JSON.parse(decodeURI(le)) : e.defaultCheck && (c.value = e.modelValue.filter((v) => v == null ? void 0 : v.showSettingCheck).map((v) => (v == null ? void 0 : v.title) || K)), Ae(function() {
        !a.value || !n.value || (k = new ka(a.value, n.value, {
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
          onUpdate: (v) => {
            var M;
            if (v != null && v.popper && ((M = v.instance) != null && M.popper)) {
              const J = y(v), { needChange: F } = J;
              if (F) {
                const { height: Y } = J, Q = v.instance.popper;
                Q.style && (Q.style.height = `${Y}px`);
              }
            }
          }
        }));
      }), Re(() => {
        var v;
        u.value = !0, (v = k == null ? void 0 : k.update) == null || v.call(k), Ae(function() {
          u.value = !1;
        });
      }, 0);
    }), Sl(function() {
      var K;
      (K = k == null ? void 0 : k.destroy) == null || K.call(k);
    });
    function y(K) {
      var F, Y;
      const { height: le } = K.popper, v = K.instance.popper, M = window.innerHeight;
      let J = 0;
      if ((F = v.childNodes) != null && F.length)
        for (let Q = 0; Q < v.childNodes.length; Q++)
          J += (Y = v.childNodes[Q]) == null ? void 0 : Y.offsetHeight;
      return M < le - 10 || le < J ? {
        needChange: !0,
        height: M - 10 < J ? M - 10 : J
      } : { needChange: !1 };
    }
    function C(K) {
      K.length === m.value.length ? (s.value = !1, d.value = !0) : K.length > f.value.length ? (s.value = !0, d.value = !1) : (s.value = !1, d.value = !1);
    }
    ke(() => c.value, C, {
      immediate: !0,
      deep: !0
    });
    function w() {
      u.value && (I() && Rl(L("r.notSave"), "", "warning", B), u.value = !1);
    }
    function T() {
      u.value ? w() : (u.value = !0, Ae(function() {
        var K;
        (K = k == null ? void 0 : k.update) == null || K.call(k);
      }));
    }
    function B() {
      g ? window[e.storage].setItem(e.sKey + "_" + g, encodeURI(JSON.stringify(c.value))) : window[e.storage].setItem(e.sKey, encodeURI(JSON.stringify(c.value))), w();
    }
    function S(K) {
      var le, v;
      if (u.value) {
        if (e.transfer) {
          const M = n.value;
          if (M === (K == null ? void 0 : K.target) || (le = M == null ? void 0 : M.contains) != null && le.call(M, K == null ? void 0 : K.target))
            return;
        }
        (v = K == null ? void 0 : K.preventDefault) == null || v.call(K), w();
      }
    }
    function R() {
      s.value ? d.value = !1 : d.value = !d.value, s.value = !1, d.value ? c.value = m.value.map((K) => K == null ? void 0 : K.label) : c.value = f.value.map((K) => K == null ? void 0 : K.label);
    }
    function A() {
      let K;
      return g ? K = window[e.storage].getItem(e.sKey + "_" + g) : K = window[e.storage].getItem(e.sKey), K;
    }
    function I() {
      var le;
      let K = A();
      if (K) {
        if (K = JSON.parse(decodeURI(K)), (K == null ? void 0 : K.length) !== ((le = c.value) == null ? void 0 : le.length))
          return !0;
        for (let v of K)
          if (c.value.indexOf(v) === -1)
            return !0;
      } else
        return !0;
      return !1;
    }
    return (K, le) => {
      const v = ee("Icon"), M = ee("Checkbox"), J = ee("CheckboxGroup");
      return ye((x(), N("div", gn, [
        P("div", {
          ref_key: "buttonRef",
          ref: a,
          class: "tabSetBt",
          onClick: T
        }, [
          q(v, {
            type: "md-settings",
            size: "17"
          }),
          P("span", bn, H(p(L)("r.tabSetting")), 1)
        ], 512),
        (x(), Z(sa, {
          to: "body",
          disabled: !e.transfer
        }, [
          ye(P("div", {
            ref_key: "popperRef",
            ref: n,
            class: "tabSetCard",
            style: re({ width: e.width, backgroundColor: e.bg })
          }, [
            P("div", kn, [
              q(M, {
                indeterminate: p(s),
                modelValue: p(d),
                "onUpdate:modelValue": le[0] || (le[0] = (F) => $e(d) ? d.value = F : null),
                onClick: Ot(R, ["prevent"])
              }, {
                default: te(() => [
                  be(H(p(L)("r.all")), 1)
                ]),
                _: 1
              }, 8, ["indeterminate", "modelValue"]),
              P("div", {
                class: "btnR",
                style: { float: "right", display: "inline-block" },
                onClick: B
              }, [
                wn,
                P("span", null, H(p(L)("r.save")), 1)
              ])
            ]),
            q(J, {
              modelValue: p(c),
              "onUpdate:modelValue": le[1] || (le[1] = (F) => $e(c) ? c.value = F : null)
            }, {
              default: te(() => [
                (x(!0), N(we, null, Se(p(m), (F, Y) => (x(), Z(M, {
                  class: "setItem",
                  label: F && F.label,
                  key: "tabSet_" + e.sKey + Y,
                  disabled: F && F.disabled
                }, null, 8, ["label", "disabled"]))), 128))
              ]),
              _: 1
            }, 8, ["modelValue"])
          ], 4), [
            [ge, p(u)]
          ])
        ], 8, ["disabled"]))
      ])), [
        [p(Fl), S]
      ]);
    };
  }
});
function _n(t) {
  return t.replace(/_(\w)/g, function(i, o) {
    return o.toUpperCase();
  });
}
function Ki(t) {
  let i = document.createElement("div");
  return i.textContent !== void 0 ? i.textContent = t : i.innerText = t, i.innerHTML;
}
function Mi(t) {
  let i = document.createElement("div");
  return i.innerHTML = t, i.innerText || i.textContent;
}
function cl(t) {
  return new Promise((i) => {
    let o = new FileReader();
    o.readAsDataURL(t), o.onloadend = () => {
      i(o.result);
    };
  });
}
function Ml(t) {
  return (t == null ? void 0 : t.split(".").pop().toLocaleLowerCase()) || "";
}
function rt(t) {
  return j(t) === "String" && t.indexOf("image") > -1;
}
function fl(t) {
  const i = Ml(t);
  let o = "ios-document-outline";
  return ["gif", "jpg", "jpeg", "png", "bmp", "webp"].indexOf(i) > -1 ? o = "ios-image" : ["mp4", "m3u8", "rmvb", "avi", "swf", "3gp", "mkv", "flv"].indexOf(i) > -1 ? o = "ios-film" : ["mp3", "wav", "wma", "ogg", "aac", "flac"].indexOf(i) > -1 ? o = "ios-musical-notes" : ["doc", "txt", "docx", "pages", "epub", "pdf"].indexOf(i) > -1 ? o = "md-document" : ["numbers", "csv", "xls", "xlsx"].indexOf(i) > -1 ? o = "ios-stats" : ["keynote", "ppt", "pptx"].indexOf(i) > -1 && (o = "ios-videocam"), o;
}
function Vn(t, i) {
  let o = document.createElement("a");
  o.href = i, o.download = t, Cn(o);
}
function Cn(t) {
  let i = document.createEvent("MouseEvents");
  i.initMouseEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), t.dispatchEvent(i);
}
function Ut({
  group: t,
  condition: i,
  pathKey: o,
  childKey: e = "children",
  path: a = []
}) {
  if (t && ca(t)) {
    if (fa(i)) {
      if (lt(t)) {
        let n = t, s = ue(a);
        if (i(n))
          return o && n[o] && s.push(n[o]), s;
        if (n[e] && !Ie(n[e])) {
          o && n[o] && s.push(n[o]);
          let d = Ut({
            group: n[e],
            condition: i,
            pathKey: o,
            childKey: e,
            path: s
          });
          if (!Ie(d))
            return d;
        }
      } else if (Array.isArray(t))
        for (let n of t) {
          let s = ue(a);
          if (i(n))
            return o && n[o] ? s.push(n[o]) : s.push(String(t.indexOf(n))), s;
          if (n[e] && n[e].length > 0) {
            o && n[o] ? s.push(n[o]) : s.push(String(t.indexOf(n)));
            let d = Ut({
              group: n[e],
              condition: i,
              pathKey: o,
              childKey: e,
              path: s
            });
            if (!Ie(d))
              return d;
          }
        }
    } else if (Array.isArray(t))
      for (let n of t) {
        let s = ue(a);
        if (n === i)
          return s.push(String(t.indexOf(n))), s;
      }
  }
  return [];
}
function Sn(t, i = 12) {
  if (j(t) === "String" && t.length > 0) {
    let o = document.createElement("span");
    o.style.fontSize = i + "px", o.style.fontFamily = "inherit", o.innerHTML = t, o.style.opacity = "0", o.style.position = "fixed", o.style.top = "3000px", document.body.append(o);
    const e = o.clientWidth;
    return document.body.removeChild(o), e;
  }
  return 0;
}
function zi(t) {
  return t === "" ? null : t;
}
function Di(t) {
  var i;
  t = t || window.Event, t != null && t.stopPropagation ? (i = t.stopPropagation) == null || i.call(t) : t && (t.cancelBubble = !0);
}
let ut = !1;
function Nt({
  height: t,
  width: i = 416,
  title: o,
  content: e,
  onOk: a,
  onCancel: n,
  onClose: s,
  okText: d,
  cancelText: u,
  noWarnIcon: b,
  footerAlign: m,
  cancelBt: f = !0
}) {
  const c = (...w) => He.apply(this, w);
  let k = (t && Number(t) - 90 > 100 ? Number(t) - 90 + "px" : 0) || "100px", y = j(e) === "String";
  const C = typeof e == "function";
  qe.warning({
    width: i,
    footerHide: !0,
    render: () => Be(
      "div",
      {
        class: "customMessageBox",
        style: {
          height: k
        }
      },
      [
        Be(
          "div",
          {
            class: "containerN"
          },
          [
            Be(
              "div",
              {
                class: "titleN"
              },
              [
                Be("span", o || c("r.info.title")),
                Be(
                  Lt,
                  {
                    class: "fr closeN",
                    type: "text",
                    onClick() {
                      ut || (qe.remove(), s && j(s) === "Function" && s());
                    }
                  },
                  () => Be("i", {
                    class: "ivu-icon ivu-icon-ios-close",
                    style: {
                      fontSize: "30px"
                    }
                  })
                )
              ]
            ),
            Be(
              "div",
              {
                class: "contentN",
                style: {
                  textAlign: y ? "center" : "left"
                }
              },
              [
                Be("i", {
                  class: y && !b ? "ivu-icon ivu-icon-ios-alert-outline" : "hide",
                  style: {
                    fontSize: "60px",
                    color: "#f8bb86"
                  }
                }),
                Be("div", { class: "msgBoxConO" }, C ? [e(Be)] : e || c("r.info.text"))
              ]
            ),
            Be(
              "div",
              {
                class: "footerN",
                style: {
                  textAlign: m || "center"
                }
              },
              [
                Be(
                  Lt,
                  {
                    class: "okBtN",
                    onClick(w) {
                      var T, B, S, R, A, I, _, h, $;
                      if (a && typeof a == "function") {
                        const ae = a();
                        if (ae && j(ae) === "Promise") {
                          ut = !0;
                          const D = (w == null ? void 0 : w.currentTarget) || (w == null ? void 0 : w.target);
                          D && ((B = (T = D.classList) == null ? void 0 : T.add) == null || B.call(T, "ivu-btn-loading"), (R = (S = D.nextSibling) == null ? void 0 : S.setAttribute) == null || R.call(S, "disabled", "disabled"), ($ = (h = ((_ = (I = (A = D.parentElement) == null ? void 0 : A.parentElement) == null ? void 0 : I.querySelector) == null ? void 0 : _.call(I, ".titleN .closeN")).classList) == null ? void 0 : h.add) == null || $.call(h, "disabled")), Promise.resolve(ae).then(() => {
                            ut = !1, qe.remove();
                          }).catch(() => {
                            ut = !1, qe.remove();
                          });
                        } else
                          qe.remove();
                      }
                    }
                  },
                  () => [
                    Be("i", {
                      class: "ivu-load-loop ivu-icon ivu-icon-ios-loading"
                    }),
                    Be("span", d || c("r.confirm"))
                  ]
                ),
                Be(
                  Lt,
                  {
                    class: ["cancelBtN", !f && "hide"],
                    onClick() {
                      ut || (qe.remove(), j(n) === "Function" && n && n());
                    }
                  },
                  () => u || c("r.cancel")
                )
              ]
            )
          ]
        )
      ]
    )
  });
}
let Ze = 0, mt = document.createElement("div");
mt.setAttribute("class", "spinModal");
mt.innerHTML = '<div class="loader"><svg class="circular" viewBox="25 25 50 50"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10" /></svg></div>';
window.onload = function() {
  document.getElementsByTagName("body")[0].append(mt);
};
function pl(t) {
  t ? mt.classList.add("show") : mt.classList.remove("show");
}
function zl(t) {
  let i = Ze;
  t ? Ze++ : Ze > 0 && Ze--, i !== Ze && (Ze === 0 ? pl(!1) : i === 0 && pl(!0));
}
const Tn = window.location.origin;
let Vt = null;
const ml = (...t) => He.apply(Vt, t);
let ze = Pt.create({
  baseURL: Tn,
  withCredentials: !0
  // 允许携带cookie
});
function Bn() {
  console.info(
    "store为空，请在安装插件时传入store实例，vuex：app.use(plugRQw,{store})，Pinia：app.use(plugRQw,{useStore})"
  );
}
ze.interceptors.request.use(
  (t) => t,
  (t) => Promise.reject(t)
);
function hl() {
  var t, i;
  if (ze.store)
    if (typeof ze.store == "function") {
      const o = ze.store();
      o.logout && o.logout();
    } else
      (i = (t = ze.store) == null ? void 0 : t.dispatch) == null || i.call(t, "logout");
  else
    Bn();
}
ze.interceptors.response.use(
  (t) => {
    var i, o;
    return Vt && (((i = t == null ? void 0 : t.data) == null ? void 0 : i.code) === 403 || ((o = t == null ? void 0 : t.data) == null ? void 0 : o.code) === 409) && Nt({
      content: ml("r.http." + t.data.code),
      onOk: hl
    }), t;
  },
  (t) => {
    var i, o;
    return Vt && (((i = t == null ? void 0 : t.response) == null ? void 0 : i.status) === 403 || ((o = t == null ? void 0 : t.response) == null ? void 0 : o.status) === 409) && Nt({
      content: ml("r.http." + t.response.status),
      onOk: hl
    }), console.warn("请求出错：", t), Promise.reject(t);
  }
);
function je(t, i, o, e) {
  e && e.spin && zl(!1);
  let a = !0, n = t && t.data;
  if (n) {
    o = o || [];
    for (let s of o)
      n = n[s], a = a && n;
    return a ? n : (i && console.warn(i), !1);
  }
  return i && console.warn(i), !1;
}
function xn(t, i, o, e, a, n, s) {
  return new Promise((d, u) => {
    switch (t) {
      case "get":
        ze.get(i, { params: o }).then((m) => {
          let f = je(m, e, a, n);
          f ? d(f) : u(m);
        }).catch((m) => {
          je({}, e, a, n), u(m);
        });
        break;
      case "delete":
        let b = s ? "params" : "data";
        ze.delete(i, { [b]: o }).then((m) => {
          let f = je(m, e, a, n);
          f ? d(f) : u(m);
        }).catch((m) => {
          je({}, e, a, n), u(m);
        });
        break;
      case "post":
        ze.post(i, o, n).then((m) => {
          let f = je(m, e, a, n);
          f ? d(f) : u(m);
        }).catch((m) => {
          je({}, e, a, n), u(m);
        });
        break;
      case "put":
        ze.put(i, o, n).then((m) => {
          let f = je(m, e, a, n);
          f ? d(f) : u(m);
        }).catch((m) => {
          je({}, e, a, n), u(m);
        });
        break;
    }
  });
}
function vt(t, i, o = {}, e, a, n, s) {
  return new Promise((d, u) => {
    var b;
    if (i) {
      n && n.spin && zl(!0);
      let m = i;
      if (window && window.hasOwnProperty("g")) {
        const g = window.g;
        let k = Object.keys(g).filter((y) => {
          var C;
          return ((C = y == null ? void 0 : y.indexOf) == null ? void 0 : C.call(y, "URL")) > -1;
        }).map((y) => {
          var C;
          return (C = y.replace) == null ? void 0 : C.call(y, "URL", "");
        });
        for (let y of k) {
          let C = new RegExp("^/" + y + "(?=/.*$)", "i");
          if (C.test(i) && g[y + "URL"]) {
            m = g[y + "URL"] + i.replace(C, "");
            break;
          }
        }
      }
      let f;
      if (((b = n == null ? void 0 : n.headers) == null ? void 0 : b["Content-Type"]) === "multipart/form-data")
        f = o;
      else if (o && !Ie(o))
        if (Array.isArray(o)) {
          f = [];
          for (let g of o)
            (g || g === 0 || g === !1 || g === "" && n && !n.noEmptyStr) && f.push(g);
        } else {
          f = {};
          for (let g in o)
            o.hasOwnProperty(g) && (o[g] || o[g] === 0 || o[g] === !1 || o[g] === "" && n && !n.noEmptyStr) && (f[g] = o[g]);
        }
      let c = t.toLowerCase();
      xn(c, m, f, e, a, n, s).then((g) => {
        d(g);
      }).catch((g) => {
        u(g);
      });
    } else
      console.error("没有请求地址:url"), u("没有请求地址:url");
  });
}
const Ne = {
  /**
   * @description 初始化该请求插件，单独引入的话调用一次后，方可实现spin等功能，默认在该库安装时已自动化初始化了该请求插件
   * @function
   * @param {object} store 项目中vuex的store，或pinia的useStore
   * @param app 当前vue实例
   */
  init(t, i) {
    ze.store = t, Vt = i.config.globalProperties;
  },
  post(t, i, o, e, a) {
    return new Promise((n, s) => {
      vt("post", t, i, o, e, a).then((d) => {
        n(d);
      }).catch((d) => {
        s(d);
      });
    });
  },
  put(t, i, o, e, a) {
    return new Promise((n, s) => {
      vt("put", t, i, o, e, a).then((d) => {
        n(d);
      }).catch((d) => {
        s(d);
      });
    });
  },
  get(t, i, o, e, a) {
    return new Promise((n, s) => {
      vt("get", t, i, o, e, a).then((d) => {
        n(d);
      }).catch((d) => {
        s(d);
      });
    });
  },
  delete(t, i, o, e, a, n = !0) {
    return new Promise((s, d) => {
      vt("delete", t, i, o, e, a, n).then((u) => {
        s(u);
      }).catch((u) => {
        d(u);
      });
    });
  },
  all: Pt.all,
  spread: Pt.spread,
  config: ze
}, Ln = {
  key: 0,
  class: "pageTotal"
}, On = {
  key: 1,
  class: "pageProSize"
}, Dl = /* @__PURE__ */ pe({
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
    var c;
    const o = i, e = G(), a = t, n = ((c = Ce == null ? void 0 : Ce()) == null ? void 0 : c.fontSizeBase) || 14, s = G(16), d = E({
      get() {
        return a.modelValue;
      },
      set(g) {
        o("update:modelValue", g), o("on-change", g);
      }
    }), u = E({
      get() {
        return a.pageSize;
      },
      set(g) {
        o("on-page-size-change", g), d.value !== 1 && (d.value = 1);
      }
    }), b = E(() => {
      const g = Sn(String(a.total || 0), n) + s.value + 2;
      return g < 32 ? 32 : g;
    });
    ke(
      b,
      (g) => {
        Ae(function() {
          f(g);
        });
      },
      { immediate: !0 }
    );
    function m() {
      var w, T, B;
      const g = (B = (T = (w = e.value) == null ? void 0 : w.$el) == null ? void 0 : T.querySelector) == null ? void 0 : B.call(T, "input");
      if (!g)
        return 16;
      const k = window.getComputedStyle(g), y = k == null ? void 0 : k.paddingLeft, C = k == null ? void 0 : k.paddingRight;
      return !y || !C ? 16 : Number(y.replace("px", "")) + Number(C.replace("px", ""));
    }
    function f(g) {
      var y, C, w;
      const k = (w = (C = (y = e.value) == null ? void 0 : y.$el) == null ? void 0 : C.querySelector) == null ? void 0 : w.call(C, "input");
      k != null && k.style && (k.style.width = `${g}px`);
    }
    return De(() => {
      s.value = m();
    }), (g, k) => {
      const y = ee("Page"), C = ee("Option"), w = ee("Select");
      return x(), N("div", {
        class: Oe(["pagePro", { pageProDefault: a.size === "default" }])
      }, [
        a.showTotal ? (x(), N("span", Ln, H(p(L)("r.total") + " ") + H(a.total) + H(" " + p(L)("r.items")), 1)) : fe("", !0),
        q(y, {
          ref_key: "pageRef",
          ref: e,
          modelValue: p(d),
          "onUpdate:modelValue": k[0] || (k[0] = (T) => $e(d) ? d.value = T : null),
          "page-size": p(u),
          total: a.total,
          size: a.size,
          "page-size-opts": a.pageSizeOpts,
          disabled: a.disabled,
          simple: ""
        }, null, 8, ["modelValue", "page-size", "total", "size", "page-size-opts", "disabled"]),
        a.showSizer ? (x(), N("div", On, [
          q(w, {
            modelValue: p(u),
            "onUpdate:modelValue": k[1] || (k[1] = (T) => $e(u) ? u.value = T : null),
            size: a.size,
            transfer: a.transfer,
            disabled: a.disabled
          }, {
            default: te(() => [
              (x(!0), N(we, null, Se(a.pageSizeOpts, (T) => (x(), Z(C, {
                value: T,
                key: T
              }, {
                default: te(() => [
                  be(H(T) + " " + H(p(L)("r.page")), 1)
                ]),
                _: 2
              }, 1032, ["value"]))), 128))
            ]),
            _: 1
          }, 8, ["modelValue", "size", "transfer", "disabled"])
        ])) : fe("", !0)
      ], 2);
    };
  }
}), An = {
  class: "btTablePage fullHeight flexColumnBox",
  ref: "tableBox"
}, In = { class: "topBtn" }, Pn = { class: "tableContainer growFlexItem" }, $n = { class: "fullHeight relativeBox" }, Fn = {
  ref: "tableContainerLOI",
  class: "fullFlowContent"
}, Rn = { class: "pageContainer" }, Kn = 300, Et = /* @__PURE__ */ pe({
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
    var ne;
    const e = o;
    ({ ...{
      showSettingCheck: !1,
      disableShowSetting: !1
    }, ...ha });
    const n = t, s = ((ne = Ce()) == null ? void 0 : ne.pageSizes) || [10, 20, 50, 100], d = G(n.data), u = G(
      localStorage.getItem("btPageSize") && Number(localStorage.getItem("btPageSize")) || n.pageSize
    ), b = G(1), m = G(0);
    let f = [], c, g, k = n.orderKey, y = n.orderDefault;
    const C = E(() => {
      for (let U of n.columns)
        if (U != null && U.fixed)
          return !0;
      return !1;
    }), w = E(() => n.selectionFixed || C.value), T = E(() => {
      let U = {
        ...n.searchData,
        current: b.value,
        size: u.value
      };
      return n.sortable === "custom" && (n.orderKeyFormat === "underline" ? U[y] = Ll(k) : n.orderKeyFormat === "camelcase" && (U[y] = _n(k))), U;
    }), B = E(() => {
      let U = n.columns.filter((z) => z && z.type !== "selection");
      if (n.selection || n.radio) {
        let z;
        n.radio ? z = {
          title: " ",
          width: 65,
          render: (ce, _e) => Be(ya, {
            modelValue: _e.row.btChecked
          })
        } : z = {
          type: "selection",
          width: 60
        }, n.selectionFixed && (z.fixed = n.selectionFixed), U.unshift(z);
      }
      return U.forEach((z) => {
        var ce;
        z && (n.sortable === "custom" ? z.key && z.sortable !== !0 && z.sortable !== !1 && (z.sortable = "custom") : z.sortable = !1, z.align || (z.align = ((ce = Ce()) == null ? void 0 : ce.btTablePageAlign) || "center"));
      }), U.forEach((z) => {
        z != null && z.key && z.render === void 0 && (z.tooltip ? z.render = Al(z.key, n.tableEmptyTdHandle) : z.render = (ce, _e) => {
          let Ve = "";
          return z != null && z.key && (Ve = _e.row[z.key]), n.tableEmptyTdHandle ? Be("span", Ve === "" ? "--" : Ve ?? "--") : Be("span", Ve);
        });
      }), U;
    }), S = E({
      get() {
        return d.value.map((U, z) => ({
          btKey: "bt-" + z,
          btChecked: !1,
          ...U
        }));
      },
      set(U) {
        d.value = U;
      }
    }), R = E(() => f.map((U) => U == null ? void 0 : U.id)), A = E(() => f.map((U) => U == null ? void 0 : U.btKey)), I = G();
    ke(() => n.searchData, _, { deep: !0 }), ke(
      () => n.orderDefault,
      (U) => {
        y = U;
      }
    ), ke(
      () => n.orderKey,
      (U) => {
        k = U;
      }
    );
    function _() {
      b.value = 1, Le();
    }
    function h() {
      n.initData && Le();
    }
    function $(U) {
      d.value.unshift(ue(U)), Re(() => {
        var z, ce;
        (ce = (z = I.value) == null ? void 0 : z.clickCurrentRow) == null || ce.call(z, 0);
      }, 100);
    }
    function ae(U, z, ce) {
      let _e = null;
      if (z ? _e = g : typeof z == "number" && (_e = z), _e !== null) {
        let Ve = d.value[_e];
        for (let se in U)
          U.hasOwnProperty(se) && (Ve[se] = U[se]);
        ce && Re(() => {
          var se, Ke;
          (Ke = (se = I.value) == null ? void 0 : se.clickCurrentRow) == null || Ke.call(se, _e);
        }, 10);
      }
    }
    function D(U) {
      d.value.splice(U, 1), Re(() => {
        var z, ce;
        (ce = (z = I.value) == null ? void 0 : z.clickCurrentRow) == null || ce.call(z, 0);
      }, 100);
    }
    function K(U, z) {
      var ce, _e;
      U.btChecked && n.radio || (n.selection || n.radio) && n.rowClickSelect && ((_e = (ce = I.value) == null ? void 0 : ce.toggleSelect) == null || _e.call(ce, z));
    }
    function le(U, z) {
      c = z.btKey, g = Number(z.btKey.split("-")[1]), n.radio && (d.value[g].btChecked = !0);
    }
    function v(U) {
      if (n.radio)
        for (let z of S.value)
          z != null && z.btKey && z.btKey !== c && (d.value[Number(z.btKey.split("-")[1])].btChecked = !1);
      f = U, e("on-selection-change", U);
    }
    function M() {
      return ue(f);
    }
    function J() {
      Le();
    }
    function F(U) {
      u.value = U, localStorage.setItem("btPageSize", String(U)), b.value === 1 && Le();
    }
    function Y({ key: U, order: z }) {
      y === "normal" ? (k = n.orderKey, y = n.orderDefault) : (k = U, y = z), b.value = 1, me();
    }
    function Q(U) {
      var ce, _e, Ve, se, Ke, Ye, Xe, ot;
      const z = U;
      if (typeof z == "number")
        de(), g = z, c = (_e = (ce = S.value) == null ? void 0 : ce[z]) == null ? void 0 : _e.btKey, (se = (Ve = I.value) == null ? void 0 : Ve.clickCurrentRow) == null || se.call(Ve, z);
      else if (Array.isArray(z)) {
        if (n.radio || !n.selection)
          return;
        de();
        for (let We of z)
          (Ye = (Ke = I.value) == null ? void 0 : Ke.clickCurrentRow) == null || Ye.call(Ke, We);
      } else if (typeof z == "function")
        for (let We = 0; We < S.value.length; We++) {
          const ht = S.value[We];
          z(ht) && ((ot = (Xe = I.value) == null ? void 0 : Xe.clickCurrentRow) == null || ot.call(Xe, We));
        }
    }
    function de() {
      var U, z;
      if (n.radio) {
        if (A.value.length > 0 && S.value.length > 0) {
          let ce = A.value[0].split("-")[1];
          S.value[ce].btChecked = !1;
        }
      } else
        (z = (U = I.value) == null ? void 0 : U.selectAll) == null || z.call(U, !1);
      f.length > 0 && (f = [], e("on-selection-change", [])), c = null, g = null;
    }
    function ve() {
      d.value = [], de(), b.value = 1, m.value = 0;
    }
    function me(U, z, ce) {
      return new Promise((_e) => {
        U && (y = U), z && (k = z), n.url ? Ne[n.method](n.url, T.value, "", [], { spin: n.getDataLoading }).then((Ve) => {
          var Ke, Ye;
          let se;
          ce || de(), typeof n.dataHandler == "function" ? se = n.dataHandler(Ve) : se = Ve, se.data ? (se.data.records || se.data.records === null ? d.value = se.data.records || [] : se.data.page ? (se.data.page.records || se.data.page.records === null) && (d.value = se.data.page.records || []) : se.data.data ? (se.data.data.records || se.data.data.records === null) && (d.value = se.data.data.records || []) : d.value = se.data, m.value = ((Ke = se.data.page) == null ? void 0 : Ke.total) || ((Ye = se.data.data) == null ? void 0 : Ye.total) || se.data.total || se.total || 0, m.value === 0 && b.value > 1 && d.value && d.value.length === 0 ? b.value = 1 : b.value > 1 && m.value <= (b.value - 1) * u.value && (b.value--, Ae(function() {
            me(U, z);
          })), e("on-data-change", se), _e(se)) : (console.warn("请求返回数据有误，无法使用"), ve(), e("on-data-change", se));
        }).catch((Ve) => {
          de(), ve(), e("on-data-change", Ve);
        }) : console.warn("没有有效的请求地址，无法获取表格数据");
      });
    }
    function Le(U, z, ce) {
      n.radio && (U || n.rowClickNum !== -1) ? me(z, ce, U).then(() => {
        d.value.length > 0 && Re(() => {
          var _e, Ve, se, Ke;
          U ? (Ve = (_e = I.value) == null ? void 0 : _e.clickCurrentRow) == null || Ve.call(_e, g || 0) : (Ke = (se = I.value) == null ? void 0 : se.clickCurrentRow) == null || Ke.call(se, n.rowClickNum);
        }, 10);
      }) : me();
    }
    return De(h), i({
      dataS: S,
      selectedIds: R,
      addRow: $,
      setRowData: ae,
      deleteRow: D,
      getSelected: M,
      selectRow: Q,
      clearSelect: de,
      clearTableData: ve,
      getTableData: me,
      getDataAndClickRow: Le
    }), (U, z) => {
      const ce = ee("Table"), _e = ee("Page");
      return x(), N("div", An, [
        ye(P("div", In, [
          Pe(U.$slots, "tableSetting"),
          Pe(U.$slots, "topMsg"),
          Pe(U.$slots, "topBtnGroup")
        ], 512), [
          [ge, n.showTopRow]
        ]),
        P("div", Pn, [
          P("div", $n, [
            P("div", Fn, [
              q(ce, nt({
                ref_key: "tableRef",
                ref: I
              }, U.$attrs, {
                height: p(w) && Kn || null,
                class: { noBorderTable: n.noBorderTable, fullHeightTable: !p(w), lightHeadO: n.lightHead },
                columns: p(B),
                data: p(S),
                "highlight-row": n.radio || n.highlightRow,
                onOnSelect: le,
                onOnSelectionChange: v,
                onOnSortChange: Y,
                onOnRowClick: K
              }), null, 16, ["height", "class", "columns", "data", "highlight-row"])
            ], 512)
          ])
        ]),
        ye(P("div", Rn, [
          n.usePagePro ? (x(), Z(Dl, {
            key: 0,
            modelValue: p(b),
            "onUpdate:modelValue": z[0] || (z[0] = (Ve) => $e(b) ? b.value = Ve : null),
            total: p(m),
            showTotal: n.showTotal,
            pageSize: p(u),
            showSizer: n.showSizer,
            pageSizeOpts: p(s),
            size: n.pageComponentSize,
            onOnChange: J,
            onOnPageSizeChange: F
          }, null, 8, ["modelValue", "total", "showTotal", "pageSize", "showSizer", "pageSizeOpts", "size"])) : (x(), Z(_e, {
            key: 1,
            modelValue: p(b),
            "onUpdate:modelValue": z[1] || (z[1] = (Ve) => $e(b) ? b.value = Ve : null),
            total: p(m),
            pageSize: p(u),
            pageSizeOpts: p(s),
            showSizer: n.showSizer,
            showTotal: n.showTotal,
            size: n.pageComponentSize,
            showElevator: !n.noElevator,
            onOnChange: J,
            onOnPageSizeChange: F
          }, null, 8, ["modelValue", "total", "pageSize", "pageSizeOpts", "showSizer", "showTotal", "size", "showElevator"]))
        ], 512), [
          [ge, !n.noPage]
        ])
      ], 512);
    };
  }
}), Ul = /* @__PURE__ */ pe({
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
    const o = i, e = t, a = E({
      get() {
        var m;
        return (m = e.modelValue) == null ? void 0 : m.key;
      },
      set(m) {
        let f = {
          key: m,
          val: null
        };
        a.value && a.value !== m && (f.beforeKey = a.value), o("update:modelValue", f), o("on-change", f);
      }
    }), n = E({
      get() {
        return e.modelValue && e.modelValue.val || null;
      },
      set(m) {
        o("update:modelValue", {
          key: a.value,
          val: m
        });
      }
    }), s = E(() => ({
      width: e.labelWidth + "px",
      textAlign: e.labelTextAlign
    })), d = E(() => ({
      width: typeof e.itemWidth == "number" ? e.itemWidth + "px" : e.itemWidth
    }));
    function u(m) {
      m != null && m.target && m.target.value !== void 0 && b({
        key: a.value,
        val: m.target.value
      });
    }
    const b = jt((m) => {
      o("on-change", m);
    }, 500);
    return (m, f) => {
      const c = ee("Option"), g = ee("Select"), k = ee("Input");
      return x(), N("div", null, [
        q(g, {
          modelValue: p(a),
          "onUpdate:modelValue": f[0] || (f[0] = (y) => $e(a) ? a.value = y : null),
          style: re(p(s)),
          disabled: !!e.disabled,
          transfer: ""
        }, {
          default: te(() => [
            (x(!0), N(we, null, Se(e.selectOption, (y, C) => (x(), Z(c, {
              value: y == null ? void 0 : y.val,
              label: y == null ? void 0 : y.label,
              key: "selectInputOp" + (y == null ? void 0 : y.value) + C,
              style: re({ textAlign: e.labelTextAlign })
            }, null, 8, ["value", "label", "style"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue", "style", "disabled"]),
        q(k, {
          modelValue: p(n),
          "onUpdate:modelValue": f[1] || (f[1] = (y) => $e(n) ? n.value = y : null),
          placeholder: e.placeholder || p(L)("r.pInput"),
          style: re(p(d)),
          clearable: e.clearable,
          disabled: !!e.disabled,
          onOnChange: u
        }, null, 8, ["modelValue", "placeholder", "style", "clearable", "disabled"])
      ]);
    };
  }
});
let Gt = { securityJsCode: "", key: "" };
function Mn({ securityJsCode: t, key: i }) {
  Gt.securityJsCode = t, Gt.key = i;
}
function zn(t) {
  return Gt[t];
}
const Nl = /* @__PURE__ */ pe({
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
    const o = i, e = t, a = E({
      get() {
        let S;
        return e.modelValue ? e.modelValue.name ? S = ue(e.modelValue) : S = {
          ...e.modelValue,
          name: null
        } : S = {
          name: null
        }, S;
      },
      set(S) {
        o("update:modelValue", ue(S));
      }
    }), n = E(() => ft(e.width) ? e.width + "px" : e.width), s = E(() => ft(e.height) ? e.height + "px" : e.height ? e.height : ft(e.width) ? e.width * 0.66 + "px" : "200px"), d = E(() => ({
      width: n.value,
      position: "relative"
    })), u = E(() => ({
      width: n.value,
      height: s.value,
      marginTop: "6px",
      opacity: e.showMap ? 1 : 0,
      position: e.showMap ? "relative" : "absolute",
      top: e.showMap ? 0 : "-10000px"
    }));
    ke(
      () => e.modelValue,
      (S) => {
        if (S && S.lng && S.lat) {
          if (!y || !C)
            return;
          T({
            lng: S.lng,
            lat: S.lat,
            name: S.name
          });
        }
      }
    );
    const b = "mapId" + Math.floor(Math.random() * 1e9), m = G(null), f = G(null);
    let c;
    function g() {
      f.value && f.value.clientHeight < 10 || !f.value ? Re(g, 300) : Re(w, 100);
    }
    let k, y, C;
    function w() {
      rl.load({
        key: zn("key"),
        version: "2.0",
        plugins: ["AMap.AutoComplete", "AMap.Geocoder"]
      }).then((S) => {
        k = S, y = new k.Map(b).on("complete", () => {
          var A, I, _, h;
          C = new k.Geocoder(), (A = e.modelValue) != null && A.lng && ((I = e.modelValue) != null && I.lat) && T({
            lng: e.modelValue.lng,
            lat: e.modelValue.lat,
            name: e.modelValue.name
          });
          const R = (h = (_ = m.value) == null ? void 0 : _.$el) == null ? void 0 : h.children;
          R && R.length > 1 && new k.AutoComplete({
            input: R[1]
          }).on("select", ($) => {
            var ae, D, K;
            (ae = $ == null ? void 0 : $.poi) != null && ae.name && ((D = $.poi.location) != null && D.lng && ((K = $.poi.location) != null && K.lat) ? (T({
              name: $.poi.name,
              lng: $.poi.location.lng,
              lat: $.poi.location.lat
            }), a.value = {
              name: $.poi.name,
              lng: $.poi.location.lng,
              lat: $.poi.location.lat
            }) : y == null || y.setCity($.poi.name, () => {
              let le = y.getCenter();
              T({
                name: $.poi.name,
                lng: le.lng,
                lat: le.lat
              }), a.value = {
                name: $.poi.name,
                lng: le.lng,
                lat: le.lat
              };
            })), o("on-change", a.value);
          }), y == null || y.on("hotspotclick", ($) => {
            T({
              name: $.name,
              lng: $.lnglat.lng,
              lat: $.lnglat.lat
            }), a.value = {
              name: $.name,
              lng: $.lnglat.lng,
              lat: $.lnglat.lat
            };
          });
        });
      });
    }
    function T({ lng: S, lat: R, name: A }) {
      y == null || y.clearMap();
      let I = new k.LngLat(S, R), _ = new k.Marker({
        map: y,
        position: I,
        draggable: !0
      });
      y == null || y.add(_), B(S, R), _.on("dragend", () => {
        let h = _.getPosition();
        a.value = {
          name: A || null,
          lng: h.lng,
          lat: h.lat
        }, B(S, R);
      }), _.on("click", (h) => {
        var $, ae;
        c && c.open(y, (ae = ($ = h == null ? void 0 : h.target) == null ? void 0 : $.getPosition) == null ? void 0 : ae.call($));
      }), y == null || y.setFitView();
    }
    function B(S, R) {
      C == null || C.getAddress([S, R], (A, I) => {
        A === "complete" && I.info === "OK" && I.regeocode && I.regeocode.formattedAddress ? c = new k.InfoWindow({
          //创建信息窗体
          isCustom: !0,
          content: '<div class="mapInfoWindowIKJ">' + I.regeocode.formattedAddress + "</div>",
          offset: new k.Pixel(16, -45),
          closeWhenClickMap: !0
        }) : (c = null, console.warn("地图获取位置信息失败", I));
      });
    }
    return De(g), Cl(() => {
      var S;
      y && (y.destroy(), (S = rl) == null || S.reset(), y = null, C = null, c = null);
    }), (S, R) => (x(), N("div", {
      style: re(p(d)),
      class: "containerIKJ"
    }, [
      q(p(va), {
        ref_key: "mapInputRef",
        ref: m,
        modelValue: p(a).name,
        "onUpdate:modelValue": R[0] || (R[0] = (A) => p(a).name = A),
        class: Oe({ mapInputIKJ: e.showMap }),
        placeholder: e.placeholder || p(L)("r.search"),
        disabled: e.disabled,
        icon: "ios-search"
      }, null, 8, ["modelValue", "class", "placeholder", "disabled"]),
      P("div", {
        style: re(p(u)),
        ref_key: "mapRef",
        ref: f,
        id: b
      }, null, 4)
    ], 4));
  }
});
var _l;
const El = /* @__PURE__ */ pe({
  __name: "AsyncCascader",
  props: {
    modelValue: {},
    url: { default: (_l = window == null ? void 0 : window.g) != null && _l.mgrURL ? window.g.mgrURL + "/web/v1/umc/orgs" : "" },
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
    const o = i, e = t, a = G([]), n = E({
      get() {
        let m = e.modelValue;
        return Array.isArray(m) ? ue(m) : ft(m) ? Ut({
          group: a.value,
          condition: (f) => (f == null ? void 0 : f.value) === m,
          pathKey: "value"
        }) : qt(m) ? m.split(e.separator) : [];
      },
      set(m) {
        if (e.onlyLastVal)
          Ie(m) ? (o("update:modelValue", null), o("on-label-change", null)) : o("update:modelValue", gt(m));
        else {
          if (pt(e.modelValue, m))
            return;
          o("update:modelValue", ue(m));
        }
      }
    });
    function s() {
      if (!e.url) {
        console.error("没有用于拉取级联数据的有效接口地址");
        return;
      }
      Ne.get(e.url).then((m) => {
        var c;
        let f = null;
        (c = m == null ? void 0 : m.data) != null && c.records ? f = m.data.records : m != null && m.data ? f = m.data : m && (f = m), f ? (typeof e.optionFilter == "function" && j(e.optionFilter) === "Function" && (f = e.optionFilter(f)), a.value = d(f)) : console.warn("级联数据错误，不能使用");
      }).catch(() => {
        console.warn("拉取级联数据出错");
      });
    }
    function d(m) {
      let f = [];
      for (let c of m) {
        let g = {
          value: c[e.optionVal],
          label: c[e.optionLabel]
        };
        c != null && c.children && !Ie(c.children) && (g.children = d(c.children)), f.push(g);
      }
      return f;
    }
    function u(m) {
      return e.onlyLastLabel ? gt(m) : m.join(e.separator);
    }
    function b(m, f) {
      let c = "";
      Ie(f) || (c = f.map((g) => g == null ? void 0 : g.label).join(e.separator)), o("on-label-change", c);
    }
    return De(s), (m, f) => {
      const c = ee("Cascader");
      return x(), Z(c, {
        data: p(a),
        modelValue: p(n),
        "onUpdate:modelValue": f[0] || (f[0] = (g) => $e(n) ? n.value = g : null),
        onOnChange: b,
        "change-on-select": "",
        transfer: "",
        disabled: e.disabled,
        "render-format": u,
        placeholder: e.placeholder || p(L)("r.pSelect"),
        filterable: e.filterable
      }, null, 8, ["data", "modelValue", "disabled", "placeholder", "filterable"]);
    };
  }
}), Gl = /* @__PURE__ */ pe({
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
    const o = i, e = t, a = G(), n = E({
      get() {
        if (e.modelValue && (ft(e.modelValue) || qt(e.modelValue))) {
          let d = String(e.modelValue).trim();
          if (/^\d*$/.test(d)) {
            let b = d.substring(0, 2) + "0000", m, f = s(d);
            return f.length < 7 ? m = d.substring(0, 4) + "00" : m = d.substring(0, 6), /^8\d+$/.test(d) ? [b, f] : [b, m, f];
          }
          return d.indexOf(e.separator) !== -1 ? d.split(e.separator) : [d];
        } else
          return Array.isArray(e.modelValue) ? ue(e.modelValue) : (a.value && (a.value.select = []), []);
      },
      set(d) {
        if (Ie(d))
          o("update:modelValue", null), o("on-name-change", null);
        else {
          let u = gt(d), b = "", m = "";
          if (u && (b = u.code), b && b.length < 12) {
            let f = [...b];
            for (; f.length < 12; )
              f.push(0);
            b = f.join("");
          }
          if (Array.isArray(d) && (m = d.map((f) => f == null ? void 0 : f.name).join(e.separator)), b) {
            if (b === e.modelValue)
              return;
            o("update:modelValue", b);
          }
          m && o("on-name-change", m);
        }
      }
    });
    function s(d) {
      let u = [...d];
      for (; u[u.length - 1] === "0"; )
        u.pop();
      return u.join("");
    }
    return (d, u) => (x(), Z(p(wa), nt(d.$attrs, {
      class: "alCascaderMC",
      ref_key: "alCRef",
      ref: a,
      modelValue: p(n),
      "onUpdate:modelValue": u[0] || (u[0] = (b) => $e(n) ? n.value = b : null),
      level: e.level,
      disabled: e.disabled,
      placeholder: e.placeholder || p(L)("r.pSelect"),
      transfer: e.transfer,
      searchable: e.filterable
    }), null, 16, ["modelValue", "level", "disabled", "placeholder", "transfer", "searchable"]));
  }
});
let Ge = 0;
function Hl(t, i, o, e) {
  var a, n, s;
  e && (e.innerHTML = ((a = t[i]) == null ? void 0 : a.name) ?? "", (n = t[i]) != null && n.name ? e.classList.contains("hide") && e.classList.remove("hide") : e.classList.contains("hide") || e.classList.add("hide")), o && (o.src = ((s = t[i]) == null ? void 0 : s.src) ?? t[i], Ge = i);
}
function yl(t, i, o, e) {
  if (t) {
    let a;
    Ge - 1 < 0 ? a = i.length - 1 : a = Ge - 1, Hl(i, a, o, e);
  }
}
function vl(t, i, o, e) {
  if (t) {
    let a;
    Ge + 1 > i.length - 1 ? a = 0 : a = Ge + 1, Hl(i, a, o, e);
  }
}
function dt(t, i = 0) {
  var w, T, B, S, R, A, I;
  const o = (..._) => He.apply(this, _), e = o("r.closePreview"), a = o("r.fullImg"), n = o("r.last"), s = o("r.next");
  let d, u, b;
  Ge = i;
  const m = Array.isArray(t);
  m ? (u = ((w = t[Ge]) == null ? void 0 : w.src) ?? t[Ge], b = (T = t[Ge]) == null ? void 0 : T.name) : u = t, m && t.length > 1 ? d = `${n} ： ←, ↑, A, W | ${s} ： →, ↓, D, S | ${e} ： Esc` : d = `${e} ： Esc`;
  let f = At(document.getElementsByTagName("body")), c = document.createElement("div");
  c.setAttribute("class", "fullScreenImgByDom"), c.innerHTML = `<div class='previewInner'><div class='pageFBt left${m && t.length > 1 ? "" : " hide"}'><i class='ivu-icon ivu-icon-ios-arrow-back' title='${n}' ></i></div><img src='${u}' alt='${a}' ><div class='pageFBt right${m && t.length > 1 ? "" : " hide"}'><i class='ivu-icon ivu-icon-ios-arrow-forward' title='${s}' ></i></div><i class='ivu-icon ivu-icon-md-close' title='${e}' ></i></div><p class='pNotice cannotSelect'>${d}</p><p class='pName ${b ? "" : "hide"}'>${b}</p>`;
  function g() {
    let _ = At(document.getElementsByTagName("body"));
    _ && _.removeChild(c), document.removeEventListener("keyup", C);
  }
  (S = (B = c.querySelector(".ivu-icon-md-close")) == null ? void 0 : B.addEventListener) == null || S.call(B, "click", g);
  const k = c.querySelector("img"), y = c.querySelector(".pName");
  (R = c.querySelector(".pageFBt.left")) == null || R.addEventListener("click", function() {
    yl(m, t, k, y);
  }), (A = c.querySelector(".pageFBt.right")) == null || A.addEventListener("click", function() {
    vl(m, t, k, y);
  });
  function C(_) {
    _.keyCode === 37 || _.keyCode === 38 || _.keyCode === 87 || _.keyCode === 65 ? yl(m, t, k, y) : _.keyCode === 39 || _.keyCode === 40 || _.keyCode === 83 || _.keyCode === 68 ? vl(m, t, k, y) : _.keyCode === 27 && g();
  }
  document.addEventListener("keyup", C), (I = f == null ? void 0 : f.appendChild) == null || I.call(f, c), c.focus({ preventScroll: !0 });
}
const Dn = { class: "previewBoxM" }, Un = { class: "imgLoading" }, Nn = /* @__PURE__ */ P("div", {
  "data-loader": "circle-side",
  class: "loader-div"
}, null, -1), En = [
  Nn
], Gn = ["src", "alt"], Hn = { class: "deleteModal" }, Wn = { class: "previewBoxM" }, jn = {
  key: 0,
  class: "previewImg"
}, qn = ["src", "alt"], Jn = { class: "deleteModal" }, Yn = { class: "customFileListM" }, Xn = {
  key: 0,
  class: "customFileListItem"
}, Qn = ["onClick", "title"], Zn = { class: "btBoxJ" }, eo = { class: "customFileListM" }, to = {
  key: 0,
  class: "customFileListItem"
}, lo = { class: "listLoading" }, ao = /* @__PURE__ */ P("div", {
  "data-loader": "circle-side",
  class: "loader-div"
}, null, -1), no = [
  ao
], oo = ["onClick", "title"], io = { class: "btBoxJ" };
var Vl;
const Wl = /* @__PURE__ */ pe({
  __name: "UploadGroup",
  props: {
    modelValue: { default: () => [] },
    url: { default: (Vl = window == null ? void 0 : window.g) != null && Vl.mgrURL ? window.g.mgrURL + "/web/v1/fsc/file" : "" },
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
    const o = i, e = t, a = ct([]), n = ct([]), s = ct([]);
    let d = {};
    const u = E(() => !e.manualUpload && e.showImg && c.value ? "img" : e.manualUpload && e.showImg && c.value ? "localImg" : e.manualUpload && e.showUploadList && (!e.showImg || !c.value) ? "localList" : !e.manualUpload && e.showUploadList && (!e.showImg || !c.value) ? "list" : ""), b = E(() => e.manualUpload ? "//jsonplaceholder.typicode.com/posts/" : e.url), m = E({
      //文件集合
      get() {
        return e.manualUpload ? f.value : f.value.map((v) => ({ id: v }));
      },
      set(v) {
        e.manualUpload ? f.value = v || [] : f.value = (v == null ? void 0 : v.map((M) => M == null ? void 0 : M.id)) || [];
      }
    }), f = E({
      //文件ID集合
      get() {
        switch (typeof e.modelValue) {
          case "number":
            return [e.modelValue];
          case "string":
            return e.modelValue.indexOf("--") !== -1 ? [] : /^\d*$/.test(e.modelValue) ? [Number(e.modelValue)] : [e.modelValue];
          case "object":
            return Array.isArray(e.modelValue) ? e.modelValue.filter((v) => v !== "--") : j(e.modelValue) === "File" ? [e.modelValue] : [];
          default:
            return [];
        }
      },
      set(v) {
        if (e.length === 1) {
          let M = At(v);
          o("update:modelValue", M ?? null), o("on-change", M ?? null);
        } else
          o("update:modelValue", ue(v)), o("on-change", ue(v));
      }
    }), c = E(() => {
      let v;
      if (e.manualUpload ? v = m.value : v = n.value, !v)
        return !1;
      for (let M of v) {
        let J;
        if (e.manualUpload ? J = M == null ? void 0 : M.type : J = M == null ? void 0 : M.mimeType, !J || J && !(rt(J) || J === "loading"))
          return !1;
      }
      return !0;
    }), g = E(() => n.value.filter((v) => rt(v == null ? void 0 : v.mimeType))), k = E(() => g.value.map((v) => ({
      src: e.url + "/" + (v == null ? void 0 : v.id) + "/download?preview=true",
      name: v == null ? void 0 : v.name
    }))), y = E(() => m.value.filter((v) => rt(v == null ? void 0 : v.type)));
    ke(y, async (v) => {
      s.value = await w(v);
    }), ke(
      () => m.value,
      async (v) => {
        if (u.value === "localImg")
          v != null && v.length ? a.value = await w(v) : a.value = [];
        else if (v != null && v.length && u.value !== "localList") {
          let M = ue(v);
          const J = ue(n.value);
          for (let F of M)
            if ((F == null ? void 0 : F.name) === void 0)
              if (F.id) {
                const Y = It(J, (Q) => (Q == null ? void 0 : Q.id) === F.id);
                Y ? (F.name = Y.name, F.mimeType = Y.mimeType) : d.hasOwnProperty(F.id) ? (F.name = d[F.id].name, F.mimeType = d[F.id].mimeType) : (F.mimeType = "loading", Ne.get(e.url + "/" + F.id).then((Q) => {
                  var de, ve, me, Le, ne, U;
                  F.name = ((me = (ve = (de = Q == null ? void 0 : Q.data) == null ? void 0 : de.returnValue) == null ? void 0 : ve[0]) == null ? void 0 : me.name) || L("r.file") + il(v, F), F.mimeType = ((U = (ne = (Le = Q == null ? void 0 : Q.data) == null ? void 0 : Le.returnValue) == null ? void 0 : ne[0]) == null ? void 0 : U.mimeType) || "unknown", ra(n);
                }).catch(() => {
                  F.name = L("r.file") + il(M, F);
                }));
              } else
                F.name = L("r.unknown");
          n.value = M;
        } else
          n.value = [];
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    function C(v) {
      return (v == null ? void 0 : v.name) || (v == null ? void 0 : v.split) && gt(v.split("/")) || v;
    }
    async function w(v) {
      let M = [];
      for (let J of v) {
        let F = await cl(J);
        M.push(F);
      }
      return M;
    }
    function T(v) {
      if (!e.disabled) {
        let M = m.value;
        M == null || M.splice(v, 1), m.value = M;
      }
    }
    function B(v) {
      v != null && v.id && window.open(e.url + "/" + v.id + "/download");
    }
    function S(v) {
      return e.manualUpload ? (v == null ? void 0 : v.type) && rt(v.type) : (v == null ? void 0 : v.id) && v.mimeType && rt(v.mimeType);
    }
    async function R(v) {
      if (e.manualUpload) {
        let M, J;
        if (typeof v == "number" ? (M = v, J = a.value) : v && (M = bt(y.value, (F) => F.size === v.size && F.lastModified === v.lastModified), J = s.value), !J)
          return;
        dt(
          J.map((F, Y) => {
            var Q;
            return {
              src: F,
              name: (Q = y.value[Y]) == null ? void 0 : Q.name
            };
          }),
          M
        );
      } else if (v != null && v.id) {
        const M = bt(g.value, (J) => J.id === v.id);
        dt(k.value, M);
      }
    }
    function A(v) {
      j(v) === "String" && v.indexOf("http") > -1 ? window.open(v) : j(v) === "File" && cl(v).then((M) => {
        Vn(v.name, M);
      });
    }
    function I(v) {
      var M, J;
      if (e.manualUpload) {
        if (v) {
          let F = Ml(v.name);
          if ((M = e.format) != null && M.length && e.format.indexOf(F) < 0)
            return Me(
              L("r.wrongFileType"),
              L("r.supportType") + (((J = e.format) == null ? void 0 : J.length) && String(e.format) || L("r.none")),
              "warning"
            ), !1;
          if (e.maxSize && v.size > e.maxSize * 1024)
            return Me(L("r.fileIsBig"), L("r.supportSize") + e.maxSize + "kb", "warning"), !1;
          let Y = m.value;
          Y == null || Y.push(v), m.value = Y;
        }
        return !1;
      } else
        return !0;
    }
    function _(v) {
      console.warn(v), Me(L("r.uploadError"), "", "error");
    }
    function h(v, M, J) {
      var F, Y, Q, de, ve, me;
      if ((v == null ? void 0 : v.code) === 0) {
        let Le = m.value;
        M.id = (Y = (F = v.data) == null ? void 0 : F[0]) == null ? void 0 : Y.id, M.name = (de = (Q = v.data) == null ? void 0 : Q[0]) == null ? void 0 : de.name, M.mimeType = (me = (ve = v.data) == null ? void 0 : ve[0]) == null ? void 0 : me.mimeType, d[M.id] = { name: M.name, mimeType: M.mimeType }, Le == null || Le.push(M), m.value = Le;
      } else
        Me(L("r.uploadFail"), (v == null ? void 0 : v.message) || "", "error");
    }
    function $() {
      Me(L("r.fileIsBig"), L("r.supportSize") + e.maxSize + " kb", "warning");
    }
    function ae() {
      var v;
      Me(
        L("r.wrongFileType"),
        L("r.supportType") + (((v = e.format) == null ? void 0 : v.length) && String(e.format) || L("r.none")),
        "warning"
      );
    }
    function D(v) {
      let M = v == null ? void 0 : v.id, J = v == null ? void 0 : v.mimeType;
      M && (j(J) === "String" && J.indexOf("image") > -1 ? dt(e.url + "/" + M + "/download?preview=true") : window.open(e.url + "/" + M + "/download?preview=true"));
    }
    function K(v) {
      var J, F, Y;
      let M = (Y = (F = (J = v == null ? void 0 : v.response) == null ? void 0 : J.data) == null ? void 0 : F[0]) == null ? void 0 : Y.id;
      le(null, M);
    }
    function le(v, M) {
      if (!(!M && M !== 0) && !e.disabled && f.value.indexOf(M) !== -1) {
        const J = ue(f.value);
        let F = m.value;
        F == null || F.splice(J.indexOf(M), 1), m.value = F;
      }
    }
    return (v, M) => {
      var Q, de, ve, me, Le;
      const J = ee("Button"), F = ee("Upload"), Y = ee("Icon");
      return x(), N("div", null, [
        q(F, {
          name: "files",
          action: p(b),
          "before-upload": I,
          "on-error": _,
          "on-success": h,
          "on-exceeded-size": $,
          "on-preview": D,
          "on-remove": K,
          "on-format-error": ae,
          data: e.data,
          "max-size": e.maxSize,
          "show-upload-list": !1,
          "with-credentials": e.withCredentials,
          format: e.format,
          multiple: e.multiple || !1,
          disabled: e.length > 0 && ((Q = p(m)) == null ? void 0 : Q.length) >= e.length || !!e.disabled
        }, {
          default: te(() => {
            var ne;
            return [
              q(J, {
                icon: "md-cloud-upload",
                class: Oe({
                  disabledR: e.length > 0 && ((ne = p(m)) == null ? void 0 : ne.length) >= e.length || !!e.disabled
                })
              }, {
                default: te(() => [
                  be(H(p(L)("r.selectFile")), 1)
                ]),
                _: 1
              }, 8, ["class"])
            ];
          }),
          _: 1
        }, 8, ["action", "data", "max-size", "with-credentials", "format", "multiple", "disabled"]),
        ye(P("div", Dn, [
          (x(!0), N(we, null, Se(p(n), (ne, U) => (x(), N(we, {
            key: ne == null ? void 0 : ne.id
          }, [
            !e.manualUpload && (ne == null ? void 0 : ne.id) !== null ? (x(), N("div", {
              key: 0,
              class: Oe(["previewImg", { previewLoading: ne.mimeType === "loading" }])
            }, [
              ye(P("div", Un, En, 512), [
                [ge, ne.mimeType === "loading"]
              ]),
              ye(P("img", {
                src: v.url + "/" + ne.id + "/download?preview=true",
                alt: ne.name
              }, null, 8, Gn), [
                [ge, ne.mimeType !== "loading"]
              ]),
              ye(P("div", Hn, [
                q(Y, {
                  type: "ios-expand",
                  size: "40",
                  class: "previewExpand",
                  title: p(L)("r.fView"),
                  onClick: (z) => p(dt)(p(k), U)
                }, null, 8, ["title", "onClick"]),
                q(Y, {
                  type: "ios-trash-outline",
                  size: "40",
                  class: "previewDelete",
                  onClick: (z) => le(z, ne.id),
                  title: p(L)("r.delete")
                }, null, 8, ["onClick", "title"])
              ], 512), [
                [ge, ne.mimeType !== "loading"]
              ])
            ], 2)) : fe("", !0)
          ], 64))), 128))
        ], 512), [
          [ge, p(u) === "img" && ((de = p(n)) == null ? void 0 : de.length) > 0]
        ]),
        ye(P("div", Wn, [
          (x(!0), N(we, null, Se(p(a), (ne, U) => (x(), N(we, {
            key: "manualImg" + U
          }, [
            e.manualUpload && ne !== null ? (x(), N("div", jn, [
              P("img", {
                src: ne,
                alt: "manualImg" + U
              }, null, 8, qn),
              P("div", Jn, [
                q(Y, {
                  type: "ios-expand",
                  size: "40",
                  class: "previewExpand",
                  onClick: (z) => R(U),
                  title: p(L)("r.fView")
                }, null, 8, ["onClick", "title"]),
                q(Y, {
                  type: "ios-trash-outline",
                  size: "40",
                  class: "previewDelete",
                  onClick: (z) => T(U),
                  title: p(L)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : fe("", !0)
          ], 64))), 128))
        ], 512), [
          [ge, p(u) === "localImg" && ((ve = p(a)) == null ? void 0 : ve.length) > 0]
        ]),
        ye(P("div", Yn, [
          (x(!0), N(we, null, Se(p(m), (ne, U) => (x(), N(we, {
            key: "manualItem" + U
          }, [
            e.manualUpload && ne !== null ? (x(), N("p", Xn, [
              ne.name ? (x(), Z(Y, {
                key: 0,
                class: "fileTypeIco",
                type: p(fl)(ne.name),
                size: "20"
              }, null, 8, ["type"])) : fe("", !0),
              P("span", {
                class: Oe(["upNameT", { previewName: S(ne) }]),
                onClick: (z) => A(ne),
                title: p(L)("r.download")
              }, H(C(ne)), 11, Qn),
              P("span", Zn, [
                S(ne) ? (x(), Z(Y, {
                  key: 0,
                  type: "md-qr-scanner",
                  size: "22",
                  class: "listBtH",
                  onClick: (z) => R(ne),
                  title: p(L)("r.fView")
                }, null, 8, ["onClick", "title"])) : fe("", !0),
                q(Y, {
                  type: "md-close",
                  size: "22",
                  class: "listBtH",
                  onClick: (z) => T(U),
                  title: p(L)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : fe("", !0)
          ], 64))), 128))
        ], 512), [
          [ge, p(u) === "localList" && ((me = p(m)) == null ? void 0 : me.length) > 0]
        ]),
        ye(P("div", eo, [
          (x(!0), N(we, null, Se(p(n), (ne, U) => (x(), N(we, {
            key: "defaultItem" + U
          }, [
            !e.manualUpload && ne ? (x(), N("div", to, [
              ye(P("div", lo, no, 512), [
                [ge, ne.mimeType === "loading"]
              ]),
              ye(q(Y, {
                type: p(fl)(ne.name),
                class: "fileTypeIco",
                size: "20"
              }, null, 8, ["type"]), [
                [ge, ne.mimeType !== "loading"]
              ]),
              ye(P("span", {
                class: "upNameT",
                onClick: (z) => B(ne),
                title: p(L)("r.download")
              }, H(ne.name || p(L)("r.file") + (U + 1)), 9, oo), [
                [ge, ne.mimeType !== "loading"]
              ]),
              ye(P("span", io, [
                S(ne) ? (x(), Z(Y, {
                  key: 0,
                  type: "md-qr-scanner",
                  size: "22",
                  class: "listBtH",
                  onClick: (z) => R(ne),
                  title: p(L)("r.fView")
                }, null, 8, ["onClick", "title"])) : fe("", !0),
                q(Y, {
                  type: "md-close",
                  size: "22",
                  class: "listBtH",
                  onClick: (z) => T(U),
                  title: p(L)("r.delete")
                }, null, 8, ["onClick", "title"])
              ], 512), [
                [ge, ne.mimeType !== "loading"]
              ])
            ])) : fe("", !0)
          ], 64))), 128))
        ], 512), [
          [ge, p(u) === "list" && ((Le = p(n)) == null ? void 0 : Le.length) > 0]
        ])
      ]);
    };
  }
}), so = /* @__PURE__ */ P("div", { class: "bRoot" }, null, -1), jl = /* @__PURE__ */ pe({
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
    const o = i, e = t, a = G(!1), n = G(!1), s = G(!1), d = E({
      get() {
        return e.modelValue && e.modelValue[0] || null;
      },
      set(C) {
        o("update:modelValue", [C, u.value]), o("on-change", [C, u.value]);
      }
    }), u = E({
      get() {
        return e.modelValue && e.modelValue[1] || null;
      },
      set(C) {
        o("update:modelValue", [d.value, C]), o("on-change", [d.value, C]);
      }
    }), b = E(
      () => (d.value || "") + ((d.value || u.value) && " - " || "") + (u.value || "")
    ), m = G();
    De(() => {
      m.value.querySelector(".aRoot .ivu-input-suffix").addEventListener("mouseover", () => {
        s.value = !0;
      }), m.value.querySelector(".aRoot .ivu-input-suffix").addEventListener("mouseout", () => {
        s.value = !1;
      }), m.value.querySelector(".aRoot .ivu-input-suffix").addEventListener("click", (C) => {
        var w;
        !e.disabled && (d.value || u.value) && ((w = C == null ? void 0 : C.stopPropagation) == null || w.call(C), k());
      });
    });
    function f() {
      e.disabled || (a.value = !0);
    }
    function c(C) {
      d.value = C, a.value = !1, n.value = !0;
    }
    function g(C) {
      u.value = C, n.value = !1;
    }
    function k() {
      o("update:modelValue", [null, null]), o("on-change", [null, null]);
    }
    function y() {
      a.value = !1, n.value = !1, d.value && u.value === null && (d.value = null);
    }
    return (C, w) => {
      const T = ee("DatePicker"), B = ee("Icon"), S = ee("Input");
      return x(), N("div", {
        class: "monthRangeBoxR",
        ref_key: "mPickerRef",
        ref: m
      }, [
        q(T, {
          open: p(n),
          modelValue: p(u),
          transfer: "",
          type: "month",
          placement: e.placement,
          options: e.options2,
          onOnChange: g,
          onOnClickoutside: y
        }, {
          default: te(() => [
            so
          ]),
          _: 1
        }, 8, ["open", "modelValue", "placement", "options"]),
        q(T, {
          open: p(a),
          modelValue: p(d),
          transfer: "",
          type: "month",
          placement: e.placement,
          options: e.options1,
          onOnChange: c,
          onOnClickoutside: y
        }, {
          default: te(() => [
            P("div", { onClick: f }, [
              q(S, {
                class: "aRoot",
                modelValue: p(b),
                "onUpdate:modelValue": w[0] || (w[0] = (R) => $e(b) ? b.value = R : null),
                readonly: "",
                placeholder: e.placeholder || p(L)("r.selectDate"),
                disabled: e.disabled
              }, {
                suffix: te(() => [
                  q(B, {
                    type: p(s) && (p(d) || p(u)) && !e.disabled ? "ios-close-circle" : "ios-calendar-outline"
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
}), ro = { class: "editor-pro-root" }, ql = /* @__PURE__ */ pe({
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
    const o = i, e = t, a = ct(), n = E({
      get() {
        return e.modelValue;
      },
      set(m) {
        o("update:modelValue", m), o("on-change", m);
      }
    }), s = E(
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
    ), d = E(
      () => Object.assign(
        {
          readOnly: e.disabled,
          MENU_CONF: {
            uploadImage: {
              async customUpload(m, f) {
                let c = new FormData();
                c.append("files", m);
                const g = m.name, k = e.imgUploadUrl ?? "/node-serve/file";
                Ne.post(k, c, null, [], {
                  spin: !0,
                  headers: {
                    "Content-Type": "multipart/form-data"
                  }
                }).then((y) => {
                  if (y && y.data)
                    if (Array.isArray(y.data))
                      for (let C of y.data) {
                        const w = k + "/" + (C == null ? void 0 : C.id) + "/download";
                        f(w, g, w);
                      }
                    else {
                      const C = k + "/" + y.data.id + "/download";
                      f(C, g, C);
                    }
                }).catch(() => {
                  Me(L("r.uploadFail"), "", "error");
                });
              }
            },
            uploadVideo: {
              async customUpload(m, f) {
                let c = new FormData();
                c.append("files", m);
                const g = e.videoUploadUrl ?? "/node-serve/file";
                Ne.post(g, c, null, [], {
                  spin: !0,
                  headers: {
                    "Content-Type": "multipart/form-data"
                  }
                }).then((k) => {
                  if (k && k.data)
                    if (Array.isArray(k.data))
                      for (let y of k.data) {
                        const C = g + "/" + (y == null ? void 0 : y.id) + "/download";
                        f(C);
                      }
                    else {
                      const y = g + "/" + k.data.id + "/download";
                      f(y);
                    }
                }).catch(() => {
                  Me(L("r.uploadFail"), "", "error");
                });
              }
            }
          }
        },
        e.editorConfig
      )
    ), u = E(() => ({
      height: typeof e.height == "number" ? e.height + "px" : e.height
    }));
    function b(m) {
      a.value = m;
    }
    return ke(
      () => e.disabled,
      (m) => {
        m ? a.value.disable() : a.value.enable();
      }
    ), Sl(() => {
      a.value && a.value.destroy();
    }), (m, f) => (x(), N("div", ro, [
      ye(q(p(_a), {
        class: "editor-pro-toolbar",
        editor: p(a),
        defaultConfig: p(s),
        mode: m.mode
      }, null, 8, ["editor", "defaultConfig", "mode"]), [
        [ge, !m.disabled]
      ]),
      q(p(Va), {
        class: "editor-pro-editor",
        modelValue: p(n),
        "onUpdate:modelValue": f[0] || (f[0] = (c) => $e(n) ? n.value = c : null),
        defaultConfig: p(d),
        mode: m.mode,
        onOnCreated: b,
        style: re(p(u))
      }, null, 8, ["modelValue", "defaultConfig", "mode", "style"])
    ]));
  }
}), uo = {
  key: 19,
  class: "formInfoTxtXN"
}, co = {
  key: 20,
  class: "formTitleTxtXN"
}, gl = /* @__PURE__ */ pe({
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
    const o = i, e = t, a = E(() => {
      var f;
      if (e.inline)
        return e.itemWidth;
      {
        const c = (f = e.itemStyle) == null ? void 0 : f.width;
        if (c) {
          if (c.indexOf("%") > -1) {
            const g = Number(c.replace("%", ""));
            return window.isNaN(g) ? `calc(100% - ${e.labelWidth}px)` : `calc((100% - ${e.labelWidth}px)*${g / 100})`;
          } else if (c.indexOf("px") > -1)
            return c;
          return `calc(100% - ${e.labelWidth}px)`;
        }
        return `calc(100% - ${e.labelWidth}px)`;
      }
    });
    function n(f) {
      return {
        withInfo: !!f.info,
        withTitle: !!f.title,
        inlineFormItemXN: e.inline,
        noLabel: f.type === "selectInput",
        [f.class]: f.class,
        slotInput: f.slotPosition
      };
    }
    function s(f, c) {
      o("item-change", {
        e: f,
        root: c
      });
    }
    function d(f, c) {
      o("re-validate", {
        e: f,
        root: c
      });
    }
    function u(f) {
      o("select-input-change", f);
    }
    function b(f, c) {
      o("al-name-change", {
        name: f,
        root: c
      });
    }
    function m(f, c) {
      o("async-label-change", {
        label: f,
        root: c
      });
    }
    return (f, c) => {
      const g = ee("InputNumber"), k = ee("Input"), y = ee("Option"), C = ee("Select"), w = ee("Radio"), T = ee("Icon"), B = ee("RadioGroup"), S = ee("Checkbox"), R = ee("CheckboxGroup"), A = ee("DatePicker"), I = ee("TimePicker"), _ = ee("FormItem");
      return e.item ? (x(), Z(_, {
        key: 0,
        label: e.item.type !== "radio" && e.item.type !== "checkbox" ? e.item.label : " ",
        prop: e.item.key || "",
        class: Oe(["relativeBox", n(e.item)])
      }, {
        default: te(() => [
          e.item.type === "txt" ? (x(), N("div", {
            key: 0,
            style: re([e.itemStyle, { display: "inline-block" }]),
            class: Oe({ likeInputX: e.item.likeInput, disabled: !!e.item.disabled || e.disabled })
          }, H(e.item.valKey ? e.valGroup[e.item.valKey] || "无" : e.item.val), 7)) : e.item.type === "inputNumber" ? (x(), Z(g, {
            key: 1,
            style: re(e.itemStyle),
            modelValue: e.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[0] || (c[0] = (h) => e.tempKeys[e.item.tempKey] = h),
            max: e.item.max || e.item.max === 0 ? e.item.max : 1 / 0,
            min: e.item.min || e.item.min === 0 ? e.item.min : -1 / 0,
            precision: e.item.precision,
            step: e.item.step || 1,
            placeholder: e.item.placeholder || p(L)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            readonly: !!e.item.readonly,
            editable: e.item.editable !== !1,
            onOnBlur: c[1] || (c[1] = (h) => s(h, e.item)),
            "active-change": !!e.item.activeChange,
            clearable: e.item.clearable !== !1
          }, null, 8, ["style", "modelValue", "max", "min", "precision", "step", "placeholder", "disabled", "readonly", "editable", "active-change", "clearable"])) : e.item.type === "input" ? (x(), Z(k, {
            key: 2,
            style: re(f.itemStyle),
            modelValue: e.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[2] || (c[2] = (h) => e.tempKeys[e.item.tempKey] = h),
            type: e.item.inputType ?? (e.item.password ? "password" : "text"),
            maxlength: e.item.maxLength || null,
            password: !!e.item.password,
            icon: e.item.icon,
            prefix: e.item.prefix,
            suffix: e.item.suffix,
            placeholder: e.item.placeholder || p(L)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            onOnBlur: c[3] || (c[3] = (h) => s(h, e.item)),
            clearable: !e.item.password && e.item.inputType === "text" && e.item.clearable !== !1
          }, at({ _: 2 }, [
            e.item.slotPosition && e.item.slotName ? {
              name: e.item.slotPosition,
              fn: te(() => [
                Pe(f.$slots, e.item.slotName, {
                  valGroup: e.valGroup
                })
              ]),
              key: "0"
            } : void 0,
            e.item.slotPosition !== "prepend" && e.item.prepend ? {
              name: "prepend",
              fn: te(() => [
                P("span", null, H(e.item.prepend), 1)
              ]),
              key: "1"
            } : void 0,
            e.item.slotPosition !== "append" && e.item.append ? {
              name: "append",
              fn: te(() => [
                P("span", null, H(e.item.append), 1)
              ]),
              key: "2"
            } : void 0
          ]), 1032, ["style", "modelValue", "type", "maxlength", "password", "icon", "prefix", "suffix", "placeholder", "disabled", "clearable"])) : e.item.type === "select" ? (x(), Z(C, {
            key: 3,
            modelValue: f.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[4] || (c[4] = (h) => f.tempKeys[e.item.tempKey] = h),
            style: re(f.itemStyle),
            filterable: e.item.filterable === !0 || e.item.filterable === !1 ? e.item.filterable : !1,
            disabled: !!e.item.disabled || e.disabled,
            multiple: !!e.item.multiple,
            placeholder: e.item.placeholder || p(L)("r.pSelect"),
            onOnChange: c[5] || (c[5] = (h) => s(h, e.item)),
            transfer: "",
            clearable: e.item.clearable !== !1
          }, {
            default: te(() => [
              (x(!0), N(we, null, Se(e.item.options, (h, $) => (x(), Z(y, {
                value: h.val,
                label: h.label || h.val,
                key: "option-" + e.item.key + $,
                disabled: !!h.disabled
              }, null, 8, ["value", "label", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["modelValue", "style", "filterable", "disabled", "multiple", "placeholder", "clearable"])) : e.item.type === "selectInput" ? (x(), Z(Ul, {
            key: 4,
            modelValue: f.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[6] || (c[6] = (h) => f.tempKeys[e.item.tempKey] = h),
            "label-width": f.labelWidth,
            "item-width": p(a),
            "select-option": e.item.options || [],
            placeholder: e.item.placeholder || p(L)("r.pInput"),
            clearable: e.item.clearable !== !1,
            disabled: !!e.item.disabled || e.disabled,
            onOnChange: u
          }, null, 8, ["modelValue", "label-width", "item-width", "select-option", "placeholder", "clearable", "disabled"])) : e.item.type === "alCascader" ? (x(), Z(Gl, {
            key: 5,
            style: re(f.itemStyle),
            class: "inlineBlock",
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": c[7] || (c[7] = (h) => e.valGroup[e.item.key] = h),
            level: e.item.level || e.item.level === 0 ? e.item.level : 2,
            disabled: !!e.item.disabled || e.disabled,
            filterable: e.item.filterable !== !1,
            placeholder: e.item.placeholder || p(L)("r.pSelect"),
            "change-on-select": !!e.item.changeOnSelect,
            onOnNameChange: c[8] || (c[8] = (h) => b(h, e.item))
          }, null, 8, ["style", "modelValue", "level", "disabled", "filterable", "placeholder", "change-on-select"])) : e.item.type === "asyncCascader" ? (x(), Z(El, {
            key: 6,
            style: re(f.itemStyle),
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": c[9] || (c[9] = (h) => e.valGroup[e.item.key] = h),
            url: e.item.url || f.mgrUrl + "/web/v1/umc/orgs",
            "option-val": e.item.optionVal || "id",
            "option-label": e.item.optionLabel || "name",
            "option-filter": e.item.optionFilter || null,
            "only-last-val": e.item.onlyLastVal !== !1,
            "only-last-label": e.item.onlyLastLabel !== !1,
            separator: e.item.separator || "/",
            placeholder: e.item.placeholder || p(L)("r.pSelect"),
            filterable: !!e.item.filterable,
            disabled: !!e.item.disabled || e.disabled,
            onOnLabelChange: c[10] || (c[10] = (h) => m(h, e.item))
          }, null, 8, ["style", "modelValue", "url", "option-val", "option-label", "option-filter", "only-last-val", "only-last-label", "separator", "placeholder", "filterable", "disabled"])) : e.item.type === "radio" ? (x(), Z(w, {
            key: 7,
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": c[11] || (c[11] = (h) => e.valGroup[e.item.key] = h),
            disabled: !!e.item.disabled || e.disabled,
            onOnChange: c[12] || (c[12] = (h) => s(h, e.item))
          }, {
            default: te(() => [
              be(H(e.item.label), 1)
            ]),
            _: 1
          }, 8, ["modelValue", "disabled"])) : e.item.type === "radioGroup" ? (x(), Z(B, {
            key: 8,
            style: re(f.itemStyle),
            onOnChange: c[13] || (c[13] = (h) => d(h, e.item)),
            type: e.item.buttonType ? "button" : null,
            modelValue: f.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[14] || (c[14] = (h) => f.tempKeys[e.item.tempKey] = h)
          }, {
            default: te(() => [
              (x(!0), N(we, null, Se(e.item.options, (h) => (x(), Z(w, {
                key: "radioItem" + h.val,
                label: h.val,
                border: !!e.item.itemBorder,
                disabled: !!e.item.disabled || e.disabled || h.disabled
              }, {
                default: te(() => [
                  h.icon && !e.item.buttonType ? (x(), Z(T, {
                    key: 0,
                    type: h.icon
                  }, null, 8, ["type"])) : fe("", !0),
                  P("span", null, H(h.label || h.val), 1)
                ]),
                _: 2
              }, 1032, ["label", "border", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["style", "type", "modelValue"])) : e.item.type === "checkbox" ? (x(), Z(S, {
            key: 9,
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": c[15] || (c[15] = (h) => e.valGroup[e.item.key] = h),
            disabled: !!e.item.disabled,
            onOnChange: c[16] || (c[16] = (h) => s(h, e.item))
          }, {
            default: te(() => [
              be(H(e.item.label), 1)
            ]),
            _: 1
          }, 8, ["modelValue", "disabled"])) : e.item.type === "checkboxGroup" ? (x(), Z(R, {
            key: 10,
            style: re(f.itemStyle),
            modelValue: f.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[17] || (c[17] = (h) => f.tempKeys[e.item.tempKey] = h),
            onOnChange: c[18] || (c[18] = (h) => d(h, e.item))
          }, {
            default: te(() => [
              (x(!0), N(we, null, Se(e.item.options, (h) => (x(), Z(S, {
                key: "checkItem" + h.val,
                label: h.val,
                disabled: !!e.item.disabled || e.disabled || h.disabled
              }, {
                default: te(() => [
                  h.icon ? (x(), Z(T, {
                    key: 0,
                    type: h.icon
                  }, null, 8, ["type"])) : fe("", !0),
                  P("span", null, H(h.label || h.val), 1)
                ]),
                _: 2
              }, 1032, ["label", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["style", "modelValue"])) : e.item.type === "textarea" ? (x(), Z(k, {
            key: 11,
            type: "textarea",
            modelValue: f.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[19] || (c[19] = (h) => f.tempKeys[e.item.tempKey] = h),
            autosize: e.item.autosize || { minRows: 2 },
            style: re(f.itemStyle),
            maxlength: e.item.maxLength || null,
            "show-word-limit": !!e.item.showWordLimit,
            placeholder: e.item.placeholder || p(L)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            onOnBlur: c[20] || (c[20] = (h) => s(h, e.item)),
            clearable: e.item.clearable !== !1
          }, null, 8, ["modelValue", "autosize", "style", "maxlength", "show-word-limit", "placeholder", "disabled", "clearable"])) : e.item.type === "upload" ? (x(), Z(Wl, {
            key: 12,
            style: re(f.itemStyle),
            class: "inlineBlock",
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": c[21] || (c[21] = (h) => e.valGroup[e.item.key] = h),
            url: e.item.url || f.uploadUrl,
            "manual-upload": !!e.item.manualUpload,
            format: e.item.format || [],
            data: e.item.data,
            "max-size": e.item.maxSize || 0,
            "show-img": !!e.item.showImg,
            length: e.item.length || 0,
            disabled: !!e.item.disabled || e.disabled,
            "with-credentials": e.item.withCredentials !== !1,
            onOnFileIdChange: c[22] || (c[22] = (h) => d(h, e.item))
          }, null, 8, ["style", "modelValue", "url", "manual-upload", "format", "data", "max-size", "show-img", "length", "disabled", "with-credentials"])) : e.item.type === "date" ? (x(), Z(A, {
            key: 13,
            style: re(f.itemStyle),
            modelValue: f.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[23] || (c[23] = (h) => f.tempKeys[e.item.tempKey] = h),
            type: e.item.dateType,
            disabled: !!e.item.disabled || e.disabled,
            placement: "bottom-end",
            placeholder: e.item.placeholder || p(L)("r.selectDate"),
            options: e.item.dateOptions || null,
            clearable: e.item.clearable !== !1,
            editable: !1,
            transfer: "",
            onOnChange: c[24] || (c[24] = (h) => s(h, e.item))
          }, null, 8, ["style", "modelValue", "type", "disabled", "placeholder", "options", "clearable"])) : e.item.type === "time" ? (x(), Z(I, {
            key: 14,
            style: re(f.itemStyle),
            modelValue: f.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[25] || (c[25] = (h) => f.tempKeys[e.item.tempKey] = h),
            type: e.item.dateType,
            disabled: !!e.item.disabled || e.disabled,
            placement: "bottom-end",
            placeholder: e.item.placeholder || p(L)("r.selectTime"),
            steps: e.item.steps || [],
            clearable: e.item.clearable !== !1,
            editable: !1,
            format: e.item.format || "HH:mm:ss",
            transfer: "",
            onOnChange: c[26] || (c[26] = (h) => s(h, e.item))
          }, null, 8, ["style", "modelValue", "type", "disabled", "placeholder", "steps", "clearable", "format"])) : e.item.type === "monthRange" ? (x(), Z(jl, {
            key: 15,
            style: re(f.itemStyle),
            modelValue: f.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[27] || (c[27] = (h) => f.tempKeys[e.item.tempKey] = h),
            disabled: !!e.item.disabled || e.disabled,
            placement: "bottom-end",
            placeholder: e.item.placeholder || p(L)("r.selectDate"),
            options1: e.item.dateOptions1 || null,
            options2: e.item.dateOptions2 || null,
            onOnChange: c[28] || (c[28] = (h) => s(h, e.item))
          }, null, 8, ["style", "modelValue", "disabled", "placeholder", "options1", "options2"])) : e.item.type === "editorPro" ? (x(), Z(ql, {
            key: 16,
            class: "inlineBlock",
            style: re(f.itemStyle),
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": c[29] || (c[29] = (h) => e.valGroup[e.item.key] = h),
            placeholder: e.item.placeholder || p(L)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            "toolbar-config": e.item.toolbarConfig || {},
            "editor-config": e.item.editorConfig || {},
            mode: e.item.mode || "simple",
            height: e.item.height || 300,
            onInput: c[30] || (c[30] = (h) => s(h, e.item))
          }, null, 8, ["style", "modelValue", "placeholder", "disabled", "toolbar-config", "editor-config", "mode", "height"])) : e.item.type === "inputMap" ? (x(), Z(Nl, {
            key: 17,
            modelValue: f.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[31] || (c[31] = (h) => f.tempKeys[e.item.tempKey] = h),
            style: re(f.itemStyle),
            placeholder: e.item.placeholder || p(L)("r.search"),
            disabled: !!e.item.disabled || e.disabled,
            "show-map": e.item.showMap !== !1,
            height: e.item.mapHeight || "250px",
            onOnChange: c[32] || (c[32] = (h) => s(h, e.item))
          }, null, 8, ["modelValue", "style", "placeholder", "disabled", "show-map", "height"])) : e.item.type === "custom" ? (x(), N("div", {
            key: 18,
            class: "inlineBlock",
            style: re(f.itemStyle)
          }, [
            Pe(f.$slots, e.item.slotName, {
              valGroup: e.valGroup
            })
          ], 4)) : fe("", !0),
          e.item.info ? (x(), N("div", uo, H(e.item.info), 1)) : fe("", !0),
          e.item.title ? (x(), N("div", co, H(e.item.title), 1)) : fe("", !0)
        ]),
        _: 3
      }, 8, ["label", "prop", "class"])) : fe("", !0);
    };
  }
}), fo = /* @__PURE__ */ P("input", { type: "text" }, null, -1), po = { class: "inlineBlock" }, St = /* @__PURE__ */ pe({
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
    var al, nl;
    const e = o, a = t, n = G(null), s = G({}), d = G([]), u = G({});
    let b = [];
    const m = ((al = window == null ? void 0 : window.g) == null ? void 0 : al.mgrURL) ?? "";
    let f = [], c = [];
    const g = G(!1), k = G(Math.random() * 1e8 + 1e3), y = (nl = window == null ? void 0 : window.g) != null && nl.mgrURL ? window.g.mgrURL + "/web/v1/fsc/file" : "/file";
    let C = !1;
    const w = E(() => Array.isArray(a.formData.length ? a.formData[0] : !1)), T = E(
      () => a.inline ? {
        width: a.itemWidth + a.labelWidth + "px"
      } : {}
    ), B = E(
      () => a.inline ? {
        width: "100%"
      } : { width: a.contentWidth }
    ), S = E(() => {
      let r = ue(a.formRules);
      for (let l in r)
        if (r.hasOwnProperty(l))
          if (Array.isArray(r[l]))
            for (let O of r[l])
              O && O && !(O.message || O.validator) && (O.message = L("r.required"));
          else
            j(r[l]) === "Object" && (r[l].message || r[l].validator || (r[l].message = L("r.required")));
      return r;
    }), R = E(() => {
      let r = [];
      if (w.value)
        for (let l of d.value)
          _(l, r);
      else
        _(d.value, r);
      return r.concat(f, c);
    }), A = E(() => {
      let r = [];
      if (w.value)
        for (let l of d.value)
          h(l, r);
      else
        h(d.value, r);
      return r;
    });
    function I(r) {
      return r.filter((l) => l == null ? void 0 : l.slotName);
    }
    function _(r, l) {
      for (let O of r)
        if (O.showing === !0 && O.key && O.type !== "selectInput" && (l.push(O.key), O.key2 && l.push(O.key2), O.collectLabel)) {
          if (!Array.isArray(O.collectLabel) && O.collectLabel.key)
            l.push(O.collectLabel.key);
          else if (Array.isArray(O.collectLabel))
            for (let V of O.collectLabel)
              V.key && l.push(V.key);
        }
    }
    function h(r, l) {
      for (let O of r)
        O.showing === !0 && O.key && O.type !== "selectInput" && l.push(O.key);
    }
    function $() {
      return new Promise((r) => {
        K(), D().then(() => {
          e("on-reset"), r(!0);
        });
      });
    }
    function ae() {
      return new Promise((r) => {
        for (let l of b)
          l();
        b = [], u.value = {}, U(), ve(), D().then(() => {
          e("on-re-render"), r(!0);
        });
      });
    }
    function D() {
      return new Promise((r) => {
        k.value = Math.floor(Math.random() * 1e8 + 1e3), Ae(function() {
          r(!0);
        });
      });
    }
    function K() {
      let r = M();
      for (let l in s.value)
        if (s.value.hasOwnProperty(l))
          if (xe(r[l]))
            s.value[l] = r[l];
          else if (Array.isArray(s.value[l]))
            s.value[l] = [];
          else if (j(s.value[l]) === "Boolean")
            s.value[l] = !1;
          else {
            const O = et(a.formData, (V) => (V == null ? void 0 : V.key) === l);
            O && (O.type === "editor" || O.type === "editorPro") ? s.value[l] = "" : s.value[l] = null;
          }
      le(r);
    }
    function le(r) {
      for (let l in u.value)
        u.value.hasOwnProperty(l) && (xe(r[l]) ? u.value[l] = r[l] : Array.isArray(u.value[l]) ? u.value[l] = [] : j(u.value[l]) === "Object" && u.value[l].hasOwnProperty("key") && u.value[l].hasOwnProperty("val") ? u.value[l].val = null : u.value[l] = null);
    }
    function v(r) {
      let l = M();
      xe(l[r]) ? u.value[r] = l[r] : Array.isArray(u.value[r]) ? u.value[r] = [] : u.value[r] = null;
    }
    function M() {
      let r = {};
      if (w.value)
        for (let l of d.value)
          J(l, r);
      else
        J(d.value, r);
      return r;
    }
    function J(r, l) {
      for (let O of r)
        O.tempKey && xe(O.defaultVal) && de(O, l), O.key && xe(O.defaultVal) && (l[O.key] = O.defaultVal), O.key2 && xe(O.defaultVal2) && (l[O.key2] = O.defaultVal2);
    }
    function F(r) {
      if (r.show) {
        if (j(r.show) === "Object")
          return Q(r, Y(r.show));
        if (Array.isArray(r.show))
          if (r.showOr) {
            for (let l of r.show)
              if (Y(l) === !0)
                return Q(r, !0);
            return Q(r, !1);
          } else {
            for (let l of r.show)
              if (Y(l) === !1)
                return Q(r, !1);
            return Q(r, !0);
          }
        else if (typeof r.show == "function")
          return Q(r, r.show(s.value));
      } else
        r.showing || (r.showing = !0);
      return !0;
    }
    function Y(r) {
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
    function Q(r, l) {
      return !r.showing && l && r.key ? (r.showing = l, r.defaultVal !== void 0 && (r.tempKey ? (u.value[r.tempKey] === null || u.value[r.tempKey] === void 0 || (j(u.value[r.tempKey]) === "Object" || Array.isArray(u.value[r.tempKey])) && Ie(u.value[r.tempKey])) && de(r, u.value) : (s.value[r.key] === null || s.value[r.key] === void 0) && (s.value[r.key] = r.defaultVal), r.key2 && r.deafultVal2 !== void 0 && (s.value[r.key2] === null || s.value[r.key2] === void 0) && r.type !== "inputMap" && (s.value[r.key2] = r.defaultVal2)), r.tempKey && ce(u.value[r.tempKey], r)) : r.showing = l, l;
    }
    function de(r, l) {
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
    function ve() {
      let r = ue(a.formData);
      if (w.value)
        for (let l of r)
          me(l);
      else
        me(r);
      d.value = r;
    }
    function me(r) {
      for (let l of r)
        switch (l.type) {
          case "selectInput":
            const O = "selectInput" + Math.floor(Math.random() * 1e8);
            l.tempKey = O, u.value[O] = G({
              key: l.key || null,
              val: l.defaultVal || null
            }), b.push(
              ke(
                () => u.value[O],
                (W) => {
                  ce(W, l);
                },
                { immediate: !0 }
              )
            );
            break;
          case "inputMap":
            const V = "inputMap" + Math.floor(Math.random() * 1e8);
            l.key && (l.tempKey = V, l.key3 ? u.value[V] = l.defaultVal !== void 0 && l.defaultVal2 !== void 0 ? {
              lng: l.defaultVal,
              lat: l.defaultVal2,
              name: l.defaultVal3 || ""
            } : {
              lng: null,
              lat: null,
              name: null
            } : u.value[V] = l.defaultVal !== void 0 && l.defaultVal2 !== void 0 ? {
              lng: l.defaultVal,
              lat: l.defaultVal2
            } : {
              lng: null,
              lat: null
            }, b.push(
              ke(
                () => u.value[V],
                (W) => {
                  ce(W, l);
                },
                { immediate: !0 }
              )
            ));
            break;
          case "input":
          case "inputNumber":
          case "textarea":
            const oe = "inputT" + Math.floor(Math.random() * 1e8);
            l.key && (l.tempKey = oe, u.value[oe] = l.defaultVal !== void 0 ? l.defaultVal : null, b.push(
              ke(
                () => u.value[oe],
                (W) => {
                  ce(W, l);
                },
                { immediate: !0 }
              )
            ));
            break;
          case "select":
          case "radioGroup":
          case "checkboxGroup":
            if (l.options || (l.options = []), (l.type === "checkboxGroup" || l.type === "radioGroup") && (l.options = G(ue(l.options))), l.asyncOption)
              if (l.changeOption)
                if (Array.isArray(l.changeOption)) {
                  let W = !0;
                  for (let X of l.changeOption)
                    if (!X.valKey || !X.key) {
                      W = !1;
                      break;
                    }
                  W ? b.push(
                    ke(
                      () => {
                        let X = "";
                        if (Array.isArray(l.changeOption))
                          for (let he of l.changeOption) {
                            let Ue = s.value[he.valKey];
                            if (Ue || Ue === 0 || Ue === !1)
                              X += "&" + he.key + "=" + Ue;
                            else if (!he.notRequired)
                              return !1;
                          }
                        return X;
                      },
                      (X) => {
                        let he = ue(u.value[l.tempKey]);
                        if (u.value[l.tempKey] = null, X && l.optionUrl) {
                          let Ue = l.optionUrl.indexOf("?") !== -1 ? l.optionUrl : l.optionUrl + "?";
                          Le((Ue + X).replace(/\?&/, "?"), l, he);
                        } else
                          l.localOption ? Ee(l.options, [...l.localOption]) : Ee(l.options, []), xe(he) && ne(he, l);
                      },
                      {
                        immediate: !0
                      }
                    )
                  ) : l.localOption ? Ee(l.options, [...l.localOption]) : Ee(l.options, []);
                } else
                  typeof l.changeOption == "object" ? l.changeOption.valKey && l.changeOption.key && b.push(
                    ke(
                      () => typeof l.changeOption == "object" && !Array.isArray(l.changeOption) ? s.value[l.changeOption.valKey] : !1,
                      (W) => {
                        let X = ue(u.value[l.tempKey]);
                        if (u.value[l.tempKey] = null, (W || W === 0 || W === !1) && l.optionUrl && typeof l.changeOption == "object" && !Array.isArray(l.changeOption)) {
                          let he = l.optionUrl.indexOf("?") !== -1 ? l.optionUrl : l.optionUrl + "?";
                          Le((he + "&" + l.changeOption.key + "=" + W).replace(/\?&/, "?"), l, X);
                        } else
                          l.localOption ? Ee(l.options, [...l.localOption]) : Ee(l.options, []), xe(X) && ne(X, l);
                      },
                      { immediate: !0 }
                    )
                  ) : j(l.changeOption) === "Boolean" && b.push(
                    ke(
                      () => {
                        const W = et(a.formData, (X) => (X == null ? void 0 : X.key) === l.key);
                        return W.optionUrl = ua(W.optionUrl), W.optionUrl.value;
                      },
                      (W) => {
                        let X = ue(u.value[l.tempKey]);
                        u.value[l.tempKey] = null, W ? Le(W, l, X) : (l.localOption ? Ee(l.options, [...l.localOption]) : Ee(l.options, []), xe(X) && ne(X, l));
                      },
                      {
                        immediate: !0
                      }
                    )
                  );
              else
                l.optionUrl && Le(l.optionUrl, l);
            else
              j(l.borrowOption) === "String" && Ae(function() {
                l.options = et(d.value, (W) => (W == null ? void 0 : W.key) === l.borrowOption).options;
              });
            const ie = "opEle" + Math.floor(Math.random() * 1e8);
            l.key && (l.tempKey = ie, l.type === "select" && l.multiple || l.type === "checkboxGroup" ? u.value[ie] = l.defaultVal !== void 0 ? l.defaultVal : [] : l.booleanVal ? u.value[ie] = l.defaultVal !== void 0 ? l.defaultVal ? 1 : 0 : null : u.value[ie] = l.defaultVal !== void 0 ? l.defaultVal : null, b.push(
              ke(
                () => u.value[ie],
                (W) => {
                  ce(W, l);
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
            const Te = "date" + Math.floor(Math.random() * 1e8);
            l.tempKey = Te, l.dateType === "date" || l.dateType === "datetime" || l.dateType === "time" || l.dateType === "year" || l.dateType === "month" ? u.value[Te] = l.defaultVal || null : (l.dateType === "daterange" || l.dateType === "datetimerange" || l.dateType === "timerange" || l.type === "monthRange") && (u.value[Te] = l.defaultVal && l.defaultVal2 && [l.defaultVal, l.defaultVal2] || []), b.push(
              ke(
                () => u.value[Te],
                (W) => {
                  ce(W, l);
                }
              )
            );
            break;
        }
    }
    function Le(r, l, O) {
      Ne.get(r).then((V) => {
        var Te;
        let oe;
        if ($e(l.options) ? oe = l.options.value : oe = l.options, !oe)
          return;
        let ie = ((Te = V == null ? void 0 : V.data) == null ? void 0 : Te.records) || (V == null ? void 0 : V.data) || V || [];
        Array.isArray(ie) ? (l.optionFilter && j(l.optionFilter) === "Function" && (ie = l.optionFilter(ie)), l.optionLabel && l.optionVal ? (oe.length = 0, oe.push(
          ...ie.map((W) => {
            let X;
            if (Array.isArray(l.optionLabel)) {
              let he = "";
              l.optionLabel.forEach((Ue, ol) => {
                let Bt = String(W[Ue]);
                ol === 1 ? he += "（" + Bt : ol > 1 ? he += "、" + Bt : he += Bt;
              }), X = {
                label: he + "）",
                val: l.optionVal && W[l.optionVal]
              };
            } else
              X = {
                label: l.optionLabel && W[l.optionLabel],
                val: l.optionVal && W[l.optionVal]
              };
            if (l.collectLabel)
              if (Array.isArray(l.collectLabel))
                for (let he of l.collectLabel)
                  he.valKey && he.valKey !== "label" && (X[he.valKey] = W[he.valKey]);
              else
                l.collectLabel.valKey && l.collectLabel.valKey !== "label" && (X[l.collectLabel.valKey] = W[l.collectLabel.valKey]);
            if (X.val !== null && X.val !== void 0)
              return X;
          })
        )) : (oe.length = 0, oe.push(...ie))) : oe.length = 0, l.localOption && oe.unshift(...l.localOption), xe(O) && ne(O, l), l.disableOptionByOthers && (j(l.disableOptionByOthers) === "String" ? b.push(
          ke(
            () => s.value[l.disableOptionByOthers],
            (W) => {
              if (v(l.tempKey), !!oe) {
                for (let X of oe)
                  X.disabled && (X.disabled = !1);
                if (W || W === 0 || W === !1)
                  for (let X of oe)
                    X.val === W && (X.disabled = !0);
              }
            },
            {
              immediate: !0
            }
          )
        ) : Array.isArray(l.disableOptionByOthers) && b.push(
          ke(
            () => l.disableOptionByOthers.filter((W) => W).map((W) => s.value[W]),
            (W) => {
              if (v(l.tempKey), !!oe) {
                for (let X of oe)
                  X.disabled && (X.disabled = !1);
                if (W) {
                  for (let X of oe)
                    for (let he = 0; he < W.length; he++)
                      if (X.val === W[he]) {
                        X.disabled = !0, W.splice(he, 1);
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
    function ne(r, l) {
      Array.isArray(xt(l.options)) && bt(xt(l.options), { val: r }) !== -1 && (u.value[l.tempKey] = r);
    }
    function U() {
      if (s.value = {}, w.value)
        for (let r of a.formData)
          z(r);
      else
        z(a.formData);
    }
    function z(r) {
      for (let l of r)
        l.key && (l.type === "checkboxGroup" || l.type === "select" && l.multiple ? s.value[l.key] = l.defaultVal !== void 0 && l.show === void 0 ? l.defaultVal : [] : l.type === "editor" || l.type === "editorPro" ? s.value[l.key] = l.defaultVal !== void 0 && l.show === void 0 ? l.defaultVal : "" : (s.value[l.key] = l.defaultVal !== void 0 && l.show === void 0 ? l.defaultVal : null, l.key2 && (s.value[l.key2] = l.defaultVal2 !== void 0 && l.show === void 0 ? l.defaultVal2 : null)));
    }
    function ce(r, l) {
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
              let oe = /^-?\d+(.\d+)?$/;
              l.numberVal && oe.test(r) ? s.value[l.key] = Number(r) : s.value[l.key] = r;
            } else
              s.value[l.key] = null;
            break;
          case "select":
          case "radioGroup":
          case "checkboxGroup":
            if (!l.key)
              return;
            if (l.booleanVal && !l.multiple ? s.value[l.key] = r === void 0 || r === "" || r === null ? null : !!r : l.multiple || l.type === "checkboxGroup" ? s.value[l.key] = Object.assign([], r) : s.value[l.key] = r, l.collectLabel) {
              const oe = _e(l, r);
              if (Array.isArray(l.collectLabel)) {
                for (let ie of l.collectLabel)
                  if (ie != null && ie.key && ie.valKey) {
                    const Te = Ve(ie.key);
                    let W = null;
                    Array.isArray(oe) ? (W = oe.map((he) => he[ie.valKey]), s.value[ie.key] = W, Te && (u.value[Te] = W)) : (oe && xe(oe[ie.valKey]) && (W = oe[ie.valKey]), s.value[ie.key] = W, Te && (u.value[Te] = W));
                    let X = et(d.value, (he) => (he == null ? void 0 : he.key) === ie.key);
                    X && X.tempKey && (u.value[X.tempKey] = s.value[ie.key]);
                  }
              } else if (typeof l.collectLabel == "object" && l.collectLabel.key && l.collectLabel.valKey) {
                const ie = Ve(l.collectLabel.key);
                let Te = null;
                Array.isArray(oe) ? (Te = oe.map(
                  (X) => l.collectLabel && !Array.isArray(l.collectLabel) && X[l.collectLabel.valKey]
                ), s.value[l.collectLabel.key] = Te, ie && (u.value[ie] = Te)) : (oe && xe(oe[l.collectLabel.valKey]) && (Te = oe[l.collectLabel.valKey]), s.value[l.collectLabel.key] = Te, ie && (u.value[ie] = Te));
                let W = et(
                  d.value,
                  (X) => l.collectLabel && !Array.isArray(l.collectLabel) && (X == null ? void 0 : X.key) === l.collectLabel.key || !1
                );
                W && W.tempKey && (u.value[W.tempKey] = s.value[l.collectLabel.key]);
              }
            }
            break;
          case "date":
          case "time":
          case "monthRange":
            if (!l.key)
              return;
            let O = l.dateType;
            const V = {
              date: "YYYY-MM-DD",
              daterange: "YYYY-MM-DD",
              datetime: "YYYY-MM-DD HH:mm:ss",
              datetimerange: "YYYY-MM-DD HH:mm:ss",
              year: "YYYY",
              month: "YYYY-MM"
            };
            if (O === "date" || O === "datetime" || O === "time" || O === "year" || O === "month")
              r ? (O === "time" ? s.value[l.key] = r : s.value[l.key] = st(r).format(typeof l.format == "string" ? l.format : V[O]), O === "date" && l.addTime && (s.value[l.key] += " 00:00:00")) : s.value[l.key] = null;
            else if (l.type === "monthRange" || O === "daterange" || O === "datetimerange" || O === "timerange") {
              if (!l.key2)
                return;
              r && r[0] && r[1] ? (O === "timerange" ? (s.value[l.key] = r[0], s.value[l.key2] = r[1]) : l.type === "monthRange" ? (s.value[l.key] = typeof l.format == "string" && st(r[0]).format(l.format) || r[0], s.value[l.key2] = typeof l.format == "string" && l.format && st(r[1]).format(l.format) || r[1]) : (s.value[l.key] = st(r[0]).format(l.format || O && V[O]), s.value[l.key2] = st(r[1]).format(l.format || O && V[O])), O === "daterange" && l.addTime && (s.value[l.key] += " 00:00:00", s.value[l.key2] += " 23:59:59")) : (s.value[l.key] = null, s.value[l.key2] = null);
            }
            break;
        }
    }
    function _e(r, l) {
      const O = xt(r.options);
      if (O)
        if (r != null && r.multiple || r.type === "checkboxGroup") {
          if (l) {
            let V = [];
            for (let oe of O)
              l.indexOf(oe == null ? void 0 : oe.val) !== -1 && V.push(oe);
            return V;
          }
          return !1;
        } else {
          if (l || l === 0 || l === !1) {
            for (let V of O)
              if ((V == null ? void 0 : V.val) === l)
                return V;
          }
          return !1;
        }
    }
    function Ve(r) {
      if (w.value) {
        for (let l of d.value) {
          const O = se(l, r);
          if (O)
            return O;
        }
        return !1;
      }
      return se(d.value, r);
    }
    function se(r, l) {
      for (let O of r)
        if (O.key === l)
          return O.tempKey;
      return !1;
    }
    function Ke(r, l) {
      let O = {};
      for (let V in s.value)
        s.value.hasOwnProperty(V) && r[V] !== void 0 && (O[V] = r[V], delete r[V]);
      ot(O, l);
      for (let V in r)
        r.hasOwnProperty(V) && (c.indexOf(V) < 0 && c.push(V), s.value[V] = r[V]);
    }
    function Ye(r) {
      let l = ue(r);
      if (w.value) {
        let O = [];
        for (let V of a.formData)
          O.push(...Xe(V, l));
        return O;
      }
      return Xe(a.formData, l);
    }
    function Xe(r, l) {
      return r.filter((O) => {
        for (let V of Object.keys(l))
          if ((O == null ? void 0 : O.key) === V && A.value.indexOf(V) > -1 && !(l[V] === null || (Array.isArray(l[V]) || j(l[V]) === "Object") && Ie(l[V])))
            return delete l[V], !0;
        return !1;
      }).map((O) => O == null ? void 0 : O.key);
    }
    function ot(r, l = !1) {
      let O = ue(r);
      We(r, l);
      for (let V in s.value)
        if (s.value.hasOwnProperty(V) && r[V] !== void 0 && r[V] !== "--") {
          if (Array.isArray(r[V]))
            r[V] = r[V].filter((oe) => oe !== "--");
          else if (j(r[V]) === "Object")
            for (let oe in r[V])
              r[V].hasOwnProperty(oe) && r[V][oe] === "--" && (r[V][oe] = null);
          s.value[V] = r[V];
        } else
          l || (s.value[V] = Array.isArray(s.value[V]) ? [] : null);
      Ae(function() {
        Zl(Ye(O));
      });
    }
    function We(r, l = !1) {
      if (w.value)
        for (let O of d.value)
          ht(O, r, l);
      else
        ht(d.value, r, l);
    }
    function ht(r, l, O = !1) {
      for (let V of r)
        if (V.key && (O && (l[V.key] !== void 0 || V.key2 && l[V.key2] !== void 0) || !O) && V.tempKey)
          switch (V.type) {
            case "inputMap":
              if (!V.key2)
                continue;
              j(l[V.key]) === "Number" && j(l[V.key2] === "Number") ? V.key3 ? u.value[V.tempKey] = {
                lng: l[V.key],
                lat: l[V.key2],
                name: l[V.key3]
              } : u.value[V.tempKey] = {
                lng: l[V.key],
                lat: l[V.key2]
              } : V.key3 ? u.value[V.tempKey] = {
                lng: null,
                lat: null,
                name: null
              } : u.value[V.tempKey] = {
                lng: null,
                lat: null
              };
              break;
            case "input":
            case "inputNumber":
            case "textarea":
              l[V.key] && l[V.key] !== "--" || l[V.key] === 0 ? u.value[V.tempKey] = l[V.key] : u.value[V.tempKey] = null;
              break;
            case "select":
            case "radioGroup":
            case "checkboxGroup":
              l[V.key] && l[V.key] !== "--" || l[V.key] === 0 || l[V.key] === !1 ? V.multiple || V.type === "checkboxGroup" ? u.value[V.tempKey] = [...l[V.key]] : V.booleanVal ? u.value[V.tempKey] = l[V.key] ? 1 : 0 : u.value[V.tempKey] = l[V.key] : V.multiple || V.type === "checkboxGroup" ? u.value[V.tempKey] = [] : u.value[V.tempKey] = null;
              break;
            case "date":
            case "time":
              if (V.dateType === "date" || V.dateType === "datetime" || V.dateType === "year" || V.dateType === "month" || V.dateType === "time")
                u.value[V.tempKey] = l[V.key] && l[V.key] !== "--" ? l[V.key] : null;
              else if (V.dateType === "daterange" || V.dateType === "datetimerange" || V.dateType === "timerange") {
                if (!V.key2)
                  continue;
                u.value[V.tempKey] = l[V.key] && l[V.key] !== "--" && l[V.key2] && l[V.key2] !== "--" && [l[V.key], l[V.key2]] || [];
              }
              break;
          }
    }
    function Yl(r) {
      if (Array.isArray(r))
        for (let l of r)
          Xt(l);
      else
        j(r) === "Object" && Xt(r);
    }
    function Xt(r) {
      const { index: l, indexB: O, key: V, val: oe } = r;
      if (typeof l == "number")
        if (Array.isArray(d.value[l])) {
          if (typeof O == "number")
            if (V && r.hasOwnProperty("val"))
              d.value[l][O][V] = oe;
            else
              for (let ie of Object.keys(r))
                ie !== "index" && V !== "indexB" && (d.value[l][O][ie] = r[ie]);
        } else if (V && r.hasOwnProperty("val"))
          d.value[l][V] = oe;
        else
          for (let ie of Object.keys(r))
            ie !== "index" && (d.value[l][ie] = r[ie]);
    }
    function Qt({ label: r, root: l }) {
      l.key2 && (s.value[l.key2] = r), Qe({
        e: r,
        root: l
      });
    }
    function Zt(r) {
      r.beforeKey && pa(f, (l) => l === r.beforeKey), r.key && (f.indexOf(r.key) === -1 && f.push(r.key), Qe({
        e: null,
        root: r
      }));
    }
    function el({ name: r, root: l }) {
      l.key2 && (s.value[l.key2] = r), Qe({
        e: r,
        root: l
      });
    }
    function tl({ e: r, root: l }) {
      Qe({
        e: r,
        root: l
      }), Ae(function() {
        var O, V;
        (V = (O = n.value) == null ? void 0 : O.validateField) == null || V.call(O, l.key);
      });
    }
    function Qe({ e: r, root: l }) {
      Re(() => {
        let O = {
          event: r
        };
        if (l.key && (O[l.key] = s.value[l.key]), l.key2 && (O[l.key2] = s.value[l.key2]), Array.isArray(l.collectLabel))
          for (let V of l.collectLabel)
            O[V.key] = s.value[V.key];
        else
          l.collectLabel && l.collectLabel.key && (O[l.collectLabel.key] = s.value[l.collectLabel.key]);
        e("on-item-change", O);
      }, 300);
    }
    function ll() {
      let r = {};
      for (let l of R.value)
        r[l] = s.value[l];
      return a.trim && (r = _t(r)), r;
    }
    function Xl() {
      var r, l;
      (l = (r = n.value) == null ? void 0 : r.validate) == null || l.call(r);
    }
    function Ql(r) {
      Re(() => {
        var l, O;
        (O = (l = n.value) == null ? void 0 : l.validateField) == null || O.call(l, r, () => {
        });
      }, 10);
    }
    function Zl(r) {
      Re(() => {
        var l, O;
        if (Array.isArray(r))
          for (let V of r)
            (O = (l = n.value) == null ? void 0 : l.validateField) == null || O.call(l, V, () => {
            });
      }, 10);
    }
    function ea(r) {
      r !== void 0 && (g.value = !!r);
    }
    function Tt() {
      var r, l;
      a.disabled || (l = (r = n.value) == null ? void 0 : r.validate) == null || l.call(r, (O) => {
        C || (C = !0, O && (g.value = !0, e("on-submit", ll())), Re(() => {
          C = !1;
        }, 2e3));
      });
    }
    return De(() => {
      U(), ve();
    }), i({
      resetForm: $,
      refreshFormDom: D,
      reRenderForm: ae,
      setItemToValGroup: Ke,
      updateValGroup: ot,
      updateFormDataT: Yl,
      validate: Xl,
      reValidate: Ql,
      changeLoading: ea,
      getValGroup: ll,
      submit: Tt
    }), (r, l) => {
      const O = ee("FormItem"), V = ee("Button"), oe = ee("Form");
      return x(), Z(oe, {
        ref_key: "formGroupXRef",
        ref: n,
        model: p(s),
        rules: p(S),
        "label-width": a.labelWidth,
        inline: a.inline,
        "show-message": a.showMessage,
        class: "formXN",
        key: p(k)
      }, {
        default: te(() => [
          q(O, { style: { display: "none" } }, {
            default: te(() => [
              fo
            ]),
            _: 1
          }),
          p(w) ? (x(!0), N(we, { key: 0 }, Se(p(d), (ie, Te) => (x(), N("div", {
            class: Oe([r.teamClass, "formTeamBox" + Te]),
            key: "formTeamBox" + Te
          }, [
            (x(!0), N(we, null, Se(ie, (W, X) => (x(), N(we, {
              key: "formItem" + X
            }, [
              F(W) ? (x(), Z(gl, {
                key: 0,
                item: W,
                style: re(p(T)),
                "item-style": p(B),
                "val-group": p(s),
                "temp-keys": p(u),
                inline: a.inline,
                disabled: a.disabled,
                "label-width": a.labelWidth,
                "item-width": a.itemWidth,
                "mgr-url": p(m),
                "upload-url": p(y),
                onItemChange: Qe,
                onReValidate: tl,
                onClearTempKeyItem: v,
                onSelectInputChange: Zt,
                onAlNameChange: el,
                onAsyncLabelChange: Qt
              }, at({ _: 2 }, [
                Se(I(ie), (he) => ({
                  name: he.slotName,
                  fn: te((Ue) => [
                    Pe(r.$slots, he.slotName, {
                      valGroup: Ue.valGroup
                    })
                  ])
                }))
              ]), 1032, ["item", "style", "item-style", "val-group", "temp-keys", "inline", "disabled", "label-width", "item-width", "mgr-url", "upload-url"])) : fe("", !0)
            ], 64))), 128))
          ], 2))), 128)) : fe("", !0),
          (x(!0), N(we, null, Se(p(d), (ie, Te) => (x(), N(we, {
            key: "formItem" + Te
          }, [
            !p(w) && F(ie) ? (x(), Z(gl, {
              key: 0,
              item: ie,
              style: re(p(T)),
              "item-style": p(B),
              "val-group": p(s),
              "temp-keys": p(u),
              inline: a.inline,
              disabled: a.disabled,
              "label-width": a.labelWidth,
              "item-width": a.itemWidth,
              "mgr-url": p(m),
              "upload-url": p(y),
              onItemChange: Qe,
              onReValidate: tl,
              onClearTempKeyItem: v,
              onSelectInputChange: Zt,
              onAlNameChange: el,
              onAsyncLabelChange: Qt
            }, at({ _: 2 }, [
              Se(I(r.formData), (W) => ({
                name: W.slotName,
                fn: te((X) => [
                  Pe(r.$slots, W.slotName, {
                    valGroup: X.valGroup
                  })
                ])
              }))
            ]), 1032, ["item", "style", "item-style", "val-group", "temp-keys", "inline", "disabled", "label-width", "item-width", "mgr-url", "upload-url"])) : fe("", !0)
          ], 64))), 128)),
          a.showLongOkBt ? (x(), Z(O, { key: 1 }, {
            default: te(() => [
              q(V, {
                onClick: Tt,
                style: re(p(B)),
                type: "primary",
                loading: a.btnLoading && p(g),
                disabled: a.disabled
              }, {
                default: te(() => [
                  be(H(a.longOkBtTxt || p(L)("r.confirm")), 1)
                ]),
                _: 1
              }, 8, ["style", "loading", "disabled"])
            ]),
            _: 1
          })) : fe("", !0),
          P("div", po, [
            a.showInlineOkBt ? (x(), Z(V, {
              key: 0,
              type: "primary",
              class: Oe({ inlineFormBtXN: a.inline, okBtnXN: !0 }),
              onClick: Tt,
              loading: a.btnLoading && p(g),
              disabled: a.disabled
            }, {
              default: te(() => [
                be(H(a.inlineOkBtTxt || p(L)("r.confirm")), 1)
              ]),
              _: 1
            }, 8, ["class", "loading", "disabled"])) : fe("", !0),
            a.showInlineClearBt ? (x(), Z(V, {
              key: 1,
              onClick: $,
              class: Oe({ inlineFormBtXN: a.inline }),
              type: "dashed"
            }, {
              default: te(() => [
                be(H(a.inlineClearBtTxt || p(L)("r.clear")), 1)
              ]),
              _: 1
            }, 8, ["class"])) : fe("", !0)
          ])
        ]),
        _: 3
      }, 8, ["model", "rules", "label-width", "inline", "show-message"]);
    };
  }
}), mo = /* @__PURE__ */ pe({
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
    const e = o, a = t, n = G({ width: a.with }), s = G(!1), d = G(), u = E(() => {
      var A, I;
      if (Array.isArray(a.formData))
        if (Array.isArray(a.formData[0])) {
          let _ = [];
          for (let h of a.formData)
            h && (_ = _.concat(
              h.filter(($) => ($ == null ? void 0 : $.type) === "custom" || ($ == null ? void 0 : $.type) === "input" && $.slotName && $.slotPosition)
            ));
          return _;
        } else
          return (I = (A = a.formData) == null ? void 0 : A.filter) == null ? void 0 : I.call(
            A,
            (_) => (_ == null ? void 0 : _.type) === "custom" || (_ == null ? void 0 : _.type) === "input" && _.slotName && _.slotPosition
          );
      return [];
    });
    function b() {
      return new Promise((A) => {
        var I, _;
        (_ = (I = d.value).resetForm) == null || _.call(I).then((h) => {
          A(h);
        });
      });
    }
    function m() {
      return new Promise((A) => {
        var I, _;
        (_ = (I = d.value).refreshFormDom) == null || _.call(I).then((h) => {
          A(h);
        });
      });
    }
    function f() {
      return new Promise((A) => {
        var I, _;
        (_ = (I = d.value).reRenderForm) == null || _.call(I).then((h) => {
          A(h);
        });
      });
    }
    function c(A, I) {
      var _, h;
      (h = (_ = d.value).setItemToValGroup) == null || h.call(_, A, I);
    }
    function g(A, I) {
      var _, h;
      (h = (_ = d.value).updateValGroup) == null || h.call(_, A, I);
    }
    function k(A) {
      var I, _;
      (_ = (I = d.value).updateFormDataT) == null || _.call(I, A);
    }
    function y() {
      var A, I;
      (I = (A = d.value).validate) == null || I.call(A);
    }
    function C(A) {
      var I, _;
      (_ = (I = d.value).reValidate) == null || _.call(I, A);
    }
    function w(A) {
      var I, _;
      A !== void 0 && (s.value = !!A, (_ = (I = d.value).changeLoading) == null || _.call(I, s.value));
    }
    function T() {
      var A, I;
      return (I = (A = d.value).getValGroup) == null ? void 0 : I.call(A);
    }
    function B() {
      s.value = !0;
    }
    function S() {
      var A, I;
      (I = (A = d.value).submit) == null || I.call(A);
    }
    function R() {
      e("on-cancel"), Re(() => {
        var A, I;
        s.value = !1, (I = (A = d.value).changeLoading) == null || I.call(A, !1);
      }, 1e3);
    }
    return i({
      resetForm: b,
      refreshFormDom: m,
      reRenderForm: f,
      setItemToValGroup: c,
      updateValGroup: g,
      updateFormDataT: k,
      validate: y,
      reValidate: C,
      changeLoading: w,
      getValGroup: T,
      submit: S,
      close: R
    }), (A, I) => {
      const _ = ee("Button");
      return x(), N("div", {
        style: re(p(n)),
        class: "formGroupBoxVM"
      }, [
        q(St, nt({
          ref_key: "formRRef",
          ref: d
        }, A.$attrs, {
          "form-data": a.formData,
          "label-width": a.labelWidth,
          "content-width": a.contentWidth,
          "item-width": a.itemWidth,
          btnLoading: a.btnLoading,
          onOnSubmit: B
        }), at({ _: 2 }, [
          Se(p(u), (h) => ({
            name: h.slotName,
            fn: te(({ valGroup: $ }) => [
              Pe(A.$slots, h.slotName, { valGroup: $ })
            ])
          }))
        ]), 1040, ["form-data", "label-width", "content-width", "item-width", "btnLoading"]),
        ye(P("div", {
          class: "formFooterVM",
          style: re({ marginLeft: a.labelWidth + "px" })
        }, [
          P("div", {
            style: re({ width: a.contentWidth }),
            class: "btnBoxKAL"
          }, [
            a.showOkBt ? (x(), Z(_, {
              key: 0,
              onClick: S,
              class: "form-save-btn",
              loading: a.btnLoading && p(s)
            }, {
              default: te(() => [
                be(H(a.okBtTxt || p(L)("r.confirm")), 1)
              ]),
              _: 1
            }, 8, ["loading"])) : fe("", !0),
            a.showCancelBt ? (x(), Z(_, {
              key: 1,
              onClick: R,
              class: "form-cancel-btn"
            }, {
              default: te(() => [
                be(H(a.cancelBtTxt || p(L)("r.cancel")), 1)
              ]),
              _: 1
            })) : fe("", !0)
          ], 4)
        ], 4), [
          [ge, a.showOkBt || a.showCancelBt]
        ])
      ], 4);
    };
  }
}), Ht = /* @__PURE__ */ pe({
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
    const e = o, a = t, n = G(), s = E(() => {
      var B, S;
      if (Array.isArray(a.formData[0])) {
        let R = [];
        for (let A of a.formData)
          A && (R = R.concat(
            A.filter((I) => (I == null ? void 0 : I.type) === "custom" || (I == null ? void 0 : I.type) === "input" && I.slotName && I.slotPosition)
          ));
        return R;
      }
      return (S = (B = a.formData) == null ? void 0 : B.filter) == null ? void 0 : S.call(
        B,
        (R) => (R == null ? void 0 : R.type) === "custom" || (R == null ? void 0 : R.type) === "input" && R.slotName && R.slotPosition
      );
    });
    function d() {
      return new Promise((B) => {
        var S, R;
        (R = (S = n.value).resetForm) == null || R.call(S).then(() => {
          B();
        });
      });
    }
    function u() {
      return new Promise((B) => {
        var S, R;
        (R = (S = n.value).refreshFormDom) == null || R.call(S).then(() => {
          B();
        });
      });
    }
    function b() {
      return new Promise((B) => {
        var S, R;
        (R = (S = n.value).reRenderForm) == null || R.call(S).then(() => {
          B();
        });
      });
    }
    function m(B, S) {
      var R, A;
      (A = (R = n.value).setItemToValGroup) == null || A.call(R, B, S);
    }
    function f(B, S) {
      var R, A;
      (A = (R = n.value).updateValGroup) == null || A.call(R, B, S);
    }
    function c(B) {
      var S, R;
      (R = (S = n.value).updateFormDataT) == null || R.call(S, B);
    }
    function g() {
      var B, S;
      (S = (B = n.value).validate) == null || S.call(B);
    }
    function k(B) {
      var S, R;
      (R = (S = n.value).reValidate) == null || R.call(S, B);
    }
    function y(B) {
      var S, R;
      (R = (S = n.value).changeLoading) == null || R.call(S, B === void 0 ? !1 : B);
    }
    function C() {
      var B, S;
      return (S = (B = n.value).getValGroup) == null ? void 0 : S.call(B);
    }
    function w(B) {
      e("on-search", B);
    }
    function T() {
      var B, S;
      (S = (B = n.value).submit) == null || S.call(B);
    }
    return De(() => {
      const B = n.value.$el;
      B != null && B.parentNode && B.parentNode.addEventListener("keyup", (S) => {
        (S == null ? void 0 : S.keyCode) === 13 && T();
      });
    }), i({
      resetForm: d,
      refreshFormDom: u,
      reRenderForm: b,
      setItemToValGroup: m,
      updateValGroup: f,
      updateFormDataT: c,
      validate: g,
      reValidate: k,
      changeLoading: y,
      getValGroup: C,
      submit: T
    }), (B, S) => (x(), Z(St, nt({
      ref_key: "formRRef",
      ref: n
    }, B.$attrs, {
      "form-data": a.formData,
      "label-width": a.labelWidth,
      "item-width": a.itemWidth,
      inline: "",
      "show-long-ok-bt": !1,
      "show-inline-ok-bt": a.showInlineOkBt,
      "inline-ok-bt-txt": p(L)("r.check"),
      "show-inline-clear-bt": a.showInlineClearBt,
      "show-message": !1,
      onOnSubmit: w
    }), at({ _: 2 }, [
      Se(p(s), (R) => ({
        name: R.slotName,
        fn: te(({ valGroup: A }) => [
          Pe(B.$slots, R.slotName, { valGroup: A })
        ])
      }))
    ]), 1040, ["form-data", "label-width", "item-width", "show-inline-ok-bt", "inline-ok-bt-txt", "show-inline-clear-bt"]));
  }
}), ho = /* @__PURE__ */ pe({
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
    const e = o, a = t, n = G(), s = G(!1), d = G(!1), u = E(() => {
      var _, h;
      if (Array.isArray(a.formData[0])) {
        let $ = [];
        for (let ae of a.formData)
          ae && ($ = $.concat(
            ae.filter((D) => (D == null ? void 0 : D.type) === "custom" || (D == null ? void 0 : D.type) === "input" && D.slotName && D.slotPosition)
          ));
        return $;
      }
      return (h = (_ = a.formData) == null ? void 0 : _.filter) == null ? void 0 : h.call(
        _,
        ($) => ($ == null ? void 0 : $.type) === "custom" || ($ == null ? void 0 : $.type) === "input" && $.slotName && $.slotPosition
      );
    });
    function b() {
      return new Promise((_) => {
        var h, $;
        ($ = (h = n.value).resetForm) == null || $.call(h).then(() => {
          _();
        });
      });
    }
    function m() {
      return new Promise((_) => {
        var h, $;
        ($ = (h = n.value).refreshFormDom) == null || $.call(h).then(() => {
          _();
        });
      });
    }
    function f() {
      return new Promise((_) => {
        var h, $;
        ($ = (h = n.value).reRenderForm) == null || $.call(h).then(() => {
          _();
        });
      });
    }
    function c(_, h) {
      var $, ae;
      (ae = ($ = n.value).setItemToValGroup) == null || ae.call($, _, h);
    }
    function g(_, h) {
      var $, ae;
      (ae = ($ = n.value).updateValGroup) == null || ae.call($, _, h);
    }
    function k(_) {
      var h, $;
      ($ = (h = n.value).updateFormDataT) == null || $.call(h, _);
    }
    function y() {
      var _, h;
      (h = (_ = n.value).validate) == null || h.call(_);
    }
    function C(_) {
      var h, $;
      ($ = (h = n.value).reValidate) == null || $.call(h, _);
    }
    function w(_) {
      var h, $;
      _ !== void 0 && (d.value = !!_, ($ = (h = n.value).changeLoading) == null || $.call(h, d.value));
    }
    function T() {
      var _, h;
      return (h = (_ = n.value).getValGroup) == null ? void 0 : h.call(_);
    }
    function B() {
      d.value = !0;
    }
    function S() {
      var _, h;
      a.hideCancelBt ? A() : (h = (_ = n.value).submit) == null || h.call(_);
    }
    function R() {
      s.value = !0;
    }
    function A() {
      s.value = !1, Re(() => {
        var _, h;
        d.value = !1, (h = (_ = n.value).changeLoading) == null || h.call(_, !1);
      }, 1e3);
    }
    function I(_) {
      e(_ ? "on-open" : "on-close");
    }
    return i({
      resetForm: b,
      refreshFormDom: m,
      reRenderForm: f,
      setItemToValGroup: c,
      updateValGroup: g,
      updateFormDataT: k,
      validate: y,
      reValidate: C,
      changeLoading: w,
      getValGroup: T,
      submit: S,
      open: R,
      close: A
    }), (_, h) => {
      const $ = ee("Button"), ae = ee("Modal");
      return x(), Z(ae, {
        class: Oe(["formModal", { hideFooter: a.hideFooter }]),
        title: a.title || p(L)("r.title"),
        modelValue: p(s),
        "onUpdate:modelValue": h[0] || (h[0] = (D) => $e(s) ? s.value = D : null),
        "mask-closable": !1,
        "footer-hide": a.hideFooter,
        width: a.width,
        onOnVisibleChange: I
      }, {
        footer: te(() => [
          q($, {
            onClick: S,
            class: "modal-save-btn",
            loading: a.btnLoading && p(d)
          }, {
            default: te(() => [
              be(H(a.okBtTxt || p(L)("r.confirm")), 1)
            ]),
            _: 1
          }, 8, ["loading"]),
          a.hideCancelBt ? fe("", !0) : (x(), Z($, {
            key: 0,
            onClick: A,
            class: "modal-cancel-btn"
          }, {
            default: te(() => [
              be(H(a.cancelBtTxt || p(L)("r.cancel")), 1)
            ]),
            _: 1
          }))
        ]),
        default: te(() => [
          q(St, nt({
            ref_key: "formRRef",
            ref: n
          }, _.$attrs, {
            "form-data": a.formData,
            "label-width": a.labelWidth,
            btnLoading: a.btnLoading,
            onOnSubmit: B
          }), at({ _: 2 }, [
            Se(p(u), (D) => ({
              name: D.slotName,
              fn: te(({ valGroup: K }) => [
                Pe(_.$slots, D.slotName, { valGroup: K })
              ])
            }))
          ]), 1040, ["form-data", "label-width", "btnLoading"])
        ]),
        _: 3
      }, 8, ["title", "modelValue", "footer-hide", "class", "width"]);
    };
  }
}), yo = /* @__PURE__ */ pe({
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
    const o = i, e = t, a = G(!0), n = G([]), s = "CKT" + Math.floor(Math.random() * 1e7 + 1e7);
    let d = [];
    const u = E(() => Array.isArray(e.collectVal) ? e.collectVal : typeof e.collectVal == "string" ? [e.collectVal] : []), b = E(() => Array.isArray(e.modelValue) ? e.modelValue : []);
    ke(
      () => e.data,
      (y) => {
        a.value = !1;
        let C = [];
        m(y, C), n.value = C, Ae(function() {
          a.value = !0, e.inlineLeaf && Ae(g);
        });
      },
      {
        immediate: !0,
        deep: !0
      }
    ), ke(
      () => b.value,
      (y) => {
        let C, w = "s";
        if (Array.isArray(e.collectVal) ? (C = e.collectVal[0] || "", w = "a") : C = e.collectVal, !C || JSON.stringify(y) === JSON.stringify(d)) {
          d = [];
          return;
        }
        tt({
          group: n.value,
          condition: (T) => (T == null ? void 0 : T.checked) === !0,
          key: "checked",
          val: !1
        }), tt(w === "a" ? {
          group: n.value,
          condition: (T) => bt(y, [C, T == null ? void 0 : T[C]]) !== -1,
          key: "checked",
          val: !0
        } : {
          group: n.value,
          condition: (T) => y.indexOf(T == null ? void 0 : T[C]) !== -1,
          key: "checked",
          val: !0
        });
      }
    ), ke(
      () => e.disabled,
      (y) => {
        tt({
          group: n.value,
          condition: (C) => C && C.disableCheckbox !== y,
          key: "disableCheckbox",
          val: y
        }), e.inlineLeaf && Ae(g);
      },
      { immediate: !0 }
    );
    function m(y, C = []) {
      for (let w of y) {
        let T = !1;
        u.value.length > 1 ? T = It(b.value, (S) => S[u.value[0]] === w[u.value[0]]) !== void 0 : T = u.value[0] ? b.value.indexOf(w[u.value[0]]) !== -1 : !1;
        let B = {
          name: w == null ? void 0 : w[e.label],
          expand: !!(e.expandAll || w != null && w.expand),
          checked: T,
          disableCheckbox: e.disabled
        };
        for (let S of u.value)
          B[S] = w[S];
        C.push(B), w != null && w.children && w.children.length > 0 && (B.children = [], f(w.children, B.children));
      }
    }
    function f(y, C = []) {
      for (let w of y) {
        let T = !1;
        u.value.length > 1 ? T = It(b.value, (S) => S[u.value[0]] === w[u.value[0]]) !== void 0 : T = u.value[0] ? b.value.indexOf(w[u.value[0]]) !== -1 : !1;
        let B = {
          name: w == null ? void 0 : w[e.label],
          expand: !!(e.expandAll || w != null && w.expand),
          checked: T,
          disableCheckbox: e.disabled
        };
        for (let S of u.value)
          B[S] = w[S];
        C.push(B), w != null && w.children && w.children.length > 0 && (B.children = [], m(w.children, B.children));
      }
    }
    function c(y, {
      data: C
    }) {
      let w = "", T = !0;
      if (C.children && C.children.length > 0) {
        for (let B of C.children)
          if (B.children !== void 0) {
            T = !1;
            break;
          }
        T && e.inlineLeaf && (w = "inlineChildXA");
      }
      return y(
        "div",
        {
          style: {
            display: "inline-block",
            width: "100%"
          },
          class: w
        },
        [
          y(
            "span",
            {
              style: {
                fontWeight: C.children ? "bold" : "normal"
              }
            },
            C.name
          )
        ]
      );
    }
    function g(y) {
      if (y) {
        y.expand && Ae(g);
        return;
      }
      let C = document.querySelectorAll("#" + s + " .inlineChildXA");
      if (C.length > 0)
        for (let w of C) {
          let T = w == null ? void 0 : w.parentElement, B = T == null ? void 0 : T.nextElementSibling;
          if (!B)
            return;
          if (B.tagName !== "BR") {
            let S = T == null ? void 0 : T.parentElement, R = document.createElement("br");
            S == null || S.insertBefore(R, B), B = R.nextElementSibling, (B == null ? void 0 : B.className.indexOf("inlineTreeNodeF")) === -1 && B.setAttribute("class", B.className + " inlineTreeNodeF");
          }
          for (; B != null && B.nextElementSibling; )
            B = B.nextElementSibling, B.className.indexOf("inlineTreeNodeF") === -1 && B.setAttribute("class", B.className + " inlineTreeNodeF");
        }
    }
    function k(y) {
      let C = [];
      if (e.leaf) {
        for (let w of y)
          if (!w.children)
            if (Array.isArray(e.collectVal)) {
              let T = {};
              for (let B of e.collectVal)
                T[B] = w[B];
              C.push(T);
            } else
              C.push(w[e.collectVal]);
      } else
        for (let w of y)
          if (Array.isArray(e.collectVal)) {
            let T = {};
            for (let B of e.collectVal)
              T[B] = w[B];
            C.push(T);
          } else
            C.push(w[e.collectVal]);
      d = C, o("update:modelValue", C), o("on-change", ue(C));
    }
    return (y, C) => {
      const w = ee("Tree");
      return p(a) ? (x(), Z(w, {
        key: 0,
        id: s,
        class: "checkboxTreeGA",
        data: p(n),
        render: c,
        onOnCheckChange: k,
        onOnToggleExpand: g,
        "show-checkbox": ""
      }, null, 8, ["data"])) : fe("", !0);
    };
  }
}), vo = { class: "transferBoxRL" }, go = { class: "leftBoxLLL" }, bo = { class: "fullHeight flexColumnBox" }, ko = { class: "notGrow" }, wo = { class: "titleLLL" }, _o = { class: "growFlexItem" }, Vo = { class: "middleBoxLLL" }, Co = { class: "rightBoxLLL" }, So = { class: "fullHeight flexColumnBox" }, To = { class: "notGrow" }, Bo = { class: "titleLLL" }, xo = { class: "growFlexItem" }, Lo = /* @__PURE__ */ pe({
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
    const e = o, a = t;
    let n = G({}), s = G({}), d = G([]), u = G([]), b = G(0), m = G(0);
    const f = E(() => ({ ...a.constSearchDataLeft, ...n.value })), c = E(() => ({ ...a.constSearchDataRight, ...s.value })), g = E(() => b.value < 1), k = E(() => d.value.length < 1), y = E(() => u.value.length < 1), C = E(() => m.value < 1), w = G(), T = G(), B = G(), S = G();
    function R() {
      w.value.resetForm(), T.value.resetForm(), Ie(n.value) || (n.value = {}), Ie(s.value) || (s.value = {}), B.value.clearSelect(), S.value.clearSelect();
    }
    function A() {
      B.value.search(), S.value.search();
    }
    function I(F) {
      d.value = F;
    }
    function _(F) {
      u.value = F;
    }
    function h(F) {
      var Y, Q, de, ve, me;
      b.value = ((Q = (Y = F == null ? void 0 : F.data) == null ? void 0 : Y.page) == null ? void 0 : Q.total) || ((ve = (de = F == null ? void 0 : F.data) == null ? void 0 : de.data) == null ? void 0 : ve.total) || ((me = F == null ? void 0 : F.data) == null ? void 0 : me.total) || (F == null ? void 0 : F.total) || 0, e("on-data-change-l", F);
    }
    function $(F) {
      var Y, Q, de, ve, me;
      m.value = ((Q = (Y = F == null ? void 0 : F.data) == null ? void 0 : Y.page) == null ? void 0 : Q.total) || ((ve = (de = F == null ? void 0 : F.data) == null ? void 0 : de.data) == null ? void 0 : ve.total) || ((me = F == null ? void 0 : F.data) == null ? void 0 : me.total) || (F == null ? void 0 : F.total) || 0, e("on-data-change-r", F);
    }
    function ae(F) {
      n.value = F;
    }
    function D(F) {
      s.value = F;
    }
    function K() {
      a.addUrl && J("add");
    }
    function le() {
      a.deleteUrl && J("delete");
    }
    function v() {
      a.addAllUrl && a.addUrl && J("addAll");
    }
    function M() {
      a.deleteAllUrl && J("deleteAll");
    }
    function J(F) {
      let Y, Q, de = {}, ve = "";
      switch (F) {
        case "add":
          Y = a.addMethod, Q = a.addUrl, de = a.addParamsHandle(u.value), ve = L("r.add");
          break;
        case "delete":
          Y = a.deleteMethod, Q = a.deleteUrl, de = a.deleteParamsHandle(d.value), ve = L("r.remove");
          break;
        case "addAll":
          Y = a.addAllMethod, Q = a.addAllUrl, de = a.addAllParamsHandle(c.value), ve = L("r.addAll");
          break;
        case "deleteAll":
          Y = a.deleteAllMethod, Q = a.deleteAllUrl, de = a.deleteAllParamsHandle(f.value), ve = L("r.removeAll");
          break;
      }
      Q && Y && Ne[Y](Q, de, null, [], { spin: !0 }, !1).then((me) => {
        (me == null ? void 0 : me.code) === 0 ? (Me(ve + L("r.success"), (me == null ? void 0 : me.message) || "", "success"), B.value && B.value.getTableData(), S.value && S.value.getTableData(), e("transferred")) : Me(ve + L("r.failed"), (me == null ? void 0 : me.message) || "", "error");
      }).catch(() => {
        Me(ve + L("r.error"), "", "error");
      });
    }
    return i({
      reset: R,
      search: A
    }), (F, Y) => {
      const Q = ee("Icon"), de = ee("Button");
      return x(), N("div", vo, [
        P("div", go, [
          P("div", bo, [
            P("div", ko, [
              P("div", wo, H(a.titleLeft || p(L)("r.added")), 1),
              q(Mt, null, {
                default: te(() => [
                  q(Ht, {
                    ref_key: "leftFormRef",
                    ref: w,
                    "form-data": a.formDataLeft,
                    "form-rules": a.formRulesLeft,
                    "label-width": a.searchFormLabelWith,
                    onOnSearch: ae
                  }, null, 8, ["form-data", "form-rules", "label-width"])
                ]),
                _: 1
              })
            ]),
            P("div", _o, [
              q(Et, {
                ref_key: "lTabRef",
                ref: B,
                columns: a.leftTableColumns,
                url: a.leftTableUrl,
                "search-data": p(f),
                onOnSelectionChange: I,
                onOnDataChange: h,
                "init-data": !!(p(Ie)(a.constSearchDataLeft) && a.leftTableUrl),
                "get-data-loading": "",
                selection: "",
                usePagePro: a.usePagePro,
                showTotal: a.showTotal,
                showSizer: a.showSizer
              }, null, 8, ["columns", "url", "search-data", "init-data", "usePagePro", "showTotal", "showSizer"])
            ])
          ])
        ]),
        P("div", Vo, [
          q(de, {
            class: "middleBtLLL",
            type: "default",
            onClick: M,
            disabled: p(g)
          }, {
            default: te(() => [
              be(H(p(L)("r.removeAll")) + " ", 1),
              q(Q, { type: "ios-arrow-forward" })
            ]),
            _: 1
          }, 8, ["disabled"]),
          q(de, {
            class: "middleBtLLL",
            type: "default",
            onClick: le,
            disabled: p(k)
          }, {
            default: te(() => [
              be(H(p(L)("r.remove")) + " ", 1),
              q(Q, { type: "ios-arrow-forward" })
            ]),
            _: 1
          }, 8, ["disabled"]),
          q(de, {
            class: "middleBtLLL",
            type: "primary",
            onClick: K,
            disabled: p(y)
          }, {
            default: te(() => [
              q(Q, { type: "ios-arrow-back" }),
              be(" " + H(p(L)("r.add")), 1)
            ]),
            _: 1
          }, 8, ["disabled"]),
          q(de, {
            class: "middleBtLLL",
            type: "primary",
            onClick: v,
            disabled: p(C)
          }, {
            default: te(() => [
              q(Q, { type: "ios-arrow-back" }),
              be(" " + H(p(L)("r.addAll")), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ]),
        P("div", Co, [
          P("div", So, [
            P("div", To, [
              P("div", Bo, H(a.titleRight || p(L)("r.notAdded")), 1),
              q(Mt, null, {
                default: te(() => [
                  q(Ht, {
                    ref_key: "rightFormRef",
                    ref: T,
                    "form-data": a.formDataRight,
                    "form-rules": a.formRulesRight,
                    "label-width": a.searchFormLabelWith,
                    onOnSearch: D
                  }, null, 8, ["form-data", "form-rules", "label-width"])
                ]),
                _: 1
              })
            ]),
            P("div", xo, [
              q(Et, {
                ref_key: "rTabRef",
                ref: S,
                columns: a.rightTableColumns,
                url: a.rightTableUrl,
                "search-data": p(c),
                onOnSelectionChange: _,
                onOnDataChange: $,
                "init-data": !!(p(Ie)(a.constSearchDataRight) && a.rightTableUrl),
                "get-data-loading": "",
                selection: "",
                usePagePro: a.usePagePro,
                showTotal: a.showTotal,
                showSizer: a.showSizer
              }, null, 8, ["columns", "url", "search-data", "init-data", "usePagePro", "showTotal", "showSizer"])
            ])
          ])
        ])
      ]);
    };
  }
}), Oo = { class: "boxLPA" }, Ao = { class: "headerJ" }, Io = { class: "firstT borderBoxAS" }, Po = { class: "secondT borderBoxAS" }, $o = { class: "firstCol borderBoxAS" }, Fo = { class: "secondCol borderBoxAS" }, Ro = /* @__PURE__ */ pe({
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
    const o = t, e = i, a = G([]), n = E(() => {
      var f;
      let b = ue(o.data), m = ue(a.value);
      for (let c of b) {
        let g = 0;
        if (c != null && c.children && !Ie(c.children))
          for (let k of c.children) {
            for (let y = 0, C = m == null ? void 0 : m.length; y < C; y++)
              if (Array.isArray(o.collectVal)) {
                let w = !0;
                for (let T of o.collectVal)
                  if (((f = m[y]) == null ? void 0 : f[T]) !== (k == null ? void 0 : k[T])) {
                    w = !1;
                    break;
                  }
                if (w) {
                  k.checked = !0, g++, m.splice(y, 1);
                  break;
                }
              } else if (m[y] === k[o.collectVal]) {
                k.checked = !0, g++, m.splice(y, 1);
                break;
              }
            !k.checked && (k.checked = !1);
          }
        g === 0 ? (c.checked = !1, c.indeterminate = !1) : c.children && g === c.children.length ? (c.checked = !0, c.indeterminate = !1) : (c.checked = !1, c.indeterminate = !0);
      }
      return b;
    });
    ke(
      () => o.modelValue,
      (b, m) => {
        pt(a.value, b) || pt(b, m) || (a.value = b);
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    function s(b, m) {
      if (b.children)
        for (let f of b.children)
          f.checked = m;
      d();
    }
    function d() {
      u(n.value, !0);
    }
    function u(b, m) {
      let f = [];
      for (let c of b) {
        if (!m && !o.leaf && c.checked && c.indeterminate === !1)
          if (Array.isArray(o.collectVal)) {
            let g = {};
            for (let k of o.collectVal)
              g[k] = c[k];
            f.push(g);
          } else
            j(o.collectVal) === "String" && f.push(c[o.collectVal]);
        if (c.children) {
          for (let g of c.children)
            if (g.checked)
              if (Array.isArray(o.collectVal)) {
                let k = {};
                for (let y of o.collectVal)
                  k[y] = g[y];
                f.push(k);
              } else
                j(o.collectVal) === "String" && f.push(g[o.collectVal]);
        }
      }
      m ? (a.value = f, o.leaf ? (e("update:modelValue", f), e("on-change", ue(f))) : Ae(function() {
        u(n.value);
      })) : (e("update:modelValue", f), e("on-change", ue(f)));
    }
    return (b, m) => {
      const f = ee("Checkbox");
      return x(), N("div", Oo, [
        P("div", Ao, [
          P("div", Io, H(b.firstTitle || p(L)("r.level.1")), 1),
          P("div", Po, H(b.secondTitle || p(L)("r.level.2")), 1)
        ]),
        (x(!0), N(we, null, Se(p(n), (c, g) => (x(), N("div", {
          class: "bodyJ",
          key: "checkboxJ" + g
        }, [
          P("div", $o, [
            q(f, {
              modelValue: c.checked,
              "onUpdate:modelValue": (k) => c.checked = k,
              indeterminate: c.indeterminate,
              onOnChange: (k) => s(c, k),
              disabled: b.disabled
            }, {
              default: te(() => [
                be(H(c[b.label]), 1)
              ]),
              _: 2
            }, 1032, ["modelValue", "onUpdate:modelValue", "indeterminate", "onOnChange", "disabled"])
          ]),
          P("div", Fo, [
            (x(!0), N(we, null, Se(c.children, (k, y) => (x(), N("div", {
              class: "secItem",
              key: "secItem" + y
            }, [
              q(f, {
                modelValue: k.checked,
                "onUpdate:modelValue": (C) => k.checked = C,
                onOnChange: d,
                disabled: b.disabled
              }, {
                default: te(() => [
                  be(H(k[b.label]), 1)
                ]),
                _: 2
              }, 1032, ["modelValue", "onUpdate:modelValue", "disabled"])
            ]))), 128))
          ])
        ]))), 128))
      ]);
    };
  }
}), Ko = { class: "boxLPB" }, Mo = { class: "headerF" }, zo = { class: "firstT borderBoxKa" }, Do = { class: "secondT borderBoxKa" }, Uo = { class: "thirdT borderBoxKa" }, No = { class: "firstCol borderBoxKa" }, Eo = { class: "rightBoxAL" }, Go = { class: "secondCol borderBoxKa" }, Ho = { class: "thirdCol borderBoxKa" }, Wo = /* @__PURE__ */ pe({
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
    const o = i, e = t, a = G([]), n = E(() => {
      let m = ue(e.data), f = ue(a.value);
      for (let c of m) {
        let g = 0, k = 0;
        if (c != null && c.children && !Ie(c.children))
          for (let y of c.children) {
            let C = 0;
            if (y.children && !Ie(y.children))
              for (let w of y.children) {
                for (let T = 0, B = f.length; T < B; T++)
                  if (Array.isArray(e.collectVal)) {
                    let S = !0;
                    for (let R of e.collectVal)
                      if (f[T][R] !== w[R]) {
                        S = !1;
                        break;
                      }
                    if (S) {
                      w.checked = !0, C++, f.splice(T, 1);
                      break;
                    }
                  } else if (f[T] === w[e.collectVal]) {
                    w.checked = !0, C++, f.splice(T, 1);
                    break;
                  }
                !w.checked && (w.checked = !1);
              }
            C === 0 ? (y.checked = !1, y.indeterminate = !1) : y.children && C === y.children.length ? (y.checked = !0, y.indeterminate = !1, g++) : (y.checked = !1, y.indeterminate = !0, k++);
          }
        g === 0 && k === 0 ? (c.checked = !1, c.indeterminate = !1) : c.children && g === c.children.length ? (c.checked = !0, c.indeterminate = !1) : (c.checked = !1, c.indeterminate = !0);
      }
      return m;
    });
    ke(
      () => e.modelValue,
      (m, f) => {
        pt(a.value, m) || pt(m, f) || (a.value = m);
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    function s(m, f) {
      if (m.children) {
        for (let c of m.children)
          if (c.checked = f, c.children)
            for (let g of c.children)
              g.checked = f;
      }
      u();
    }
    function d(m, f) {
      if (m.children)
        for (let c of m.children)
          c.checked = f;
      u();
    }
    function u() {
      b(n.value, !0);
    }
    function b(m, f) {
      let c = [];
      for (let g of m) {
        if (!f && !e.leaf && (g != null && g.checked) && g.indeterminate === !1)
          if (Array.isArray(e.collectVal)) {
            let k = {};
            for (let y of e.collectVal)
              k[y] = g[y];
            c.push(k);
          } else
            j(e.collectVal) === "String" && c.push(g[e.collectVal]);
        if (g != null && g.children)
          for (let k of g.children) {
            if (!f && !e.leaf && k.checked && k.indeterminate === !1)
              if (Array.isArray(e.collectVal)) {
                let y = {};
                for (let C of e.collectVal)
                  y[C] = k[C];
                c.push(y);
              } else
                j(e.collectVal) === "String" && c.push(k[e.collectVal]);
            if (k.children) {
              for (let y of k.children)
                if (y.checked)
                  if (Array.isArray(e.collectVal)) {
                    let C = {};
                    for (let w of e.collectVal)
                      C[w] = y[w];
                    c.push(C);
                  } else
                    j(e.collectVal) === "String" && c.push(y[e.collectVal]);
            }
          }
      }
      f ? (a.value = c, e.leaf ? (o("update:modelValue", c), o("on-change", ue(c))) : Ae(function() {
        b(n.value);
      })) : (o("update:modelValue", c), o("on-change", ue(c)));
    }
    return (m, f) => {
      const c = ee("Checkbox");
      return x(), N("div", Ko, [
        P("div", Mo, [
          P("div", zo, H(m.firstTitle || p(L)("r.level.1")), 1),
          P("div", Do, H(m.secondTitle || p(L)("r.level.2")), 1),
          P("div", Uo, H(m.thirdTitle || p(L)("r.level.3")), 1)
        ]),
        (x(!0), N(we, null, Se(p(n), (g, k) => (x(), N("div", {
          class: "bodyF",
          key: "checkboxJ" + k
        }, [
          P("div", No, [
            q(c, {
              modelValue: g.checked,
              "onUpdate:modelValue": (y) => g.checked = y,
              indeterminate: g.indeterminate,
              onOnChange: (y) => s(g, y),
              disabled: m.disabled
            }, {
              default: te(() => [
                be(H(g[m.label]), 1)
              ]),
              _: 2
            }, 1032, ["modelValue", "onUpdate:modelValue", "indeterminate", "onOnChange", "disabled"])
          ]),
          P("div", Eo, [
            (x(!0), N(we, null, Se(g.children, (y, C) => (x(), N("div", {
              class: "rightBoxInner",
              key: "secItem" + C
            }, [
              P("div", Go, [
                q(c, {
                  modelValue: y.checked,
                  "onUpdate:modelValue": (w) => y.checked = w,
                  indeterminate: y.indeterminate,
                  onOnChange: (w) => d(y, w),
                  disabled: m.disabled
                }, {
                  default: te(() => [
                    be(H(y[m.label]), 1)
                  ]),
                  _: 2
                }, 1032, ["modelValue", "onUpdate:modelValue", "indeterminate", "onOnChange", "disabled"])
              ]),
              P("div", Ho, [
                (x(!0), N(we, null, Se(y.children, (w, T) => (x(), N("div", {
                  class: "thirdItem",
                  key: "thirdItem" + T
                }, [
                  q(c, {
                    modelValue: w.checked,
                    "onUpdate:modelValue": (B) => w.checked = B,
                    onOnChange: u,
                    disabled: m.disabled
                  }, {
                    default: te(() => [
                      be(H(w[m.label]), 1)
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
}), jo = {
  class: "fl",
  style: { "font-weight": "bold" }
}, qo = { class: "btsF" }, Jo = { key: 0 }, Yo = {
  key: 1,
  class: "growFlexItem relativeBox"
}, Xo = { class: "fullFlowContent" }, Qo = /* @__PURE__ */ pe({
  __name: "WellCard",
  props: {
    title: {},
    fitToContent: { type: Boolean, default: !1 },
    width: { default: "100%" },
    height: { default: "100%" },
    inline: { type: Boolean, default: !1 }
  },
  setup(t) {
    const i = t, o = E(() => {
      let e = {
        width: i.fitToContent ? "fit-content" : i.width,
        height: i.fitToContent ? "fit-content" : i.height
      };
      i.inline && (e.display = "inline-block");
      for (let a in e)
        e.hasOwnProperty(a) && typeof e[a] == "number" && e[a] > 0 && (e[a] += "px");
      return e;
    });
    return (e, a) => (x(), N("div", {
      style: re(p(o))
    }, [
      P("div", {
        class: Oe(["wellCardR", { flexColumnBox: !i.fitToContent }])
      }, [
        P("div", {
          class: Oe(["panelHeader", { notGrow: !i.fitToContent }])
        }, [
          P("div", jo, H(i.title || p(L)("r.title")), 1),
          P("div", qo, [
            Pe(e.$slots, "bts")
          ])
        ], 2),
        i.fitToContent ? (x(), N("div", Jo, [
          Pe(e.$slots, "default")
        ])) : (x(), N("div", Yo, [
          P("div", Xo, [
            Pe(e.$slots, "default")
          ])
        ]))
      ], 2)
    ], 4));
  }
}), Zo = /* @__PURE__ */ pe({
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
    let a = G(1), n = 1;
    const s = G(""), d = ct([]);
    let u = {}, b = !0, m = !1;
    const f = "scm" + Math.random(), c = E(() => s.value ? L("r.searchFor") + s.value : e.placeholder || L("r.pInput")), g = E({
      get() {
        return e.modelValue ?? "";
      },
      set(A) {
        if (o("update:modelValue", A ?? ""), e.collectLabel && A !== void 0) {
          let I = {};
          for (let _ of d.value)
            if (_[e.optionsValKey] === A) {
              I = JSON.parse(JSON.stringify(_));
              break;
            }
          o("on-change", I);
        }
      }
    }), k = E(() => e.searchKey ? {
      ...e.searchData,
      current: a.value,
      [e.searchKey]: s.value
    } : {
      ...e.searchData,
      current: a.value
    });
    ke(
      () => e.getOptions,
      (A) => {
        A ? b && R() : w();
      },
      { immediate: !0 }
    ), ke(
      () => e.url,
      (A) => {
        A && (m = !0);
      }
    );
    const y = G();
    function C() {
      y.value.$el.querySelector('.ivu-select-input[type="text"]').addEventListener("keyup", B);
    }
    function w() {
      b || (g.value = "", b = !0, s.value = "", d.value = [], a.value = 1, n = 1, u = {}, m = !1);
    }
    function T(A) {
      for (let I of d.value)
        if ((I == null ? void 0 : I.label) === A)
          return !0;
      return !1;
    }
    const B = jt(function(A) {
      var _;
      const I = (_ = A == null ? void 0 : A.target) == null ? void 0 : _.value;
      T(I) || (xe(I) ? (m ? w() : (Ie(u) && (u.current = a.value, u.pages = n, u.options = ue(d.value)), xe(g.value) && (g.value = "")), s.value = String(I), d.value = [], a.value = 1, b = !0, R()) : m ? (w(), R()) : (g.value = "", s.value = "", u.current ? (a.value = u.current, n = u.pages, d.value = ue(u.options), u = {}) : R()));
    }, 600);
    function S() {
      m && w(), a.value < n ? (++a.value, Ae(function() {
        R();
      })) : sl.warning({
        background: !0,
        content: L("r.noMore")
      });
    }
    function R() {
      return new Promise((A, I) => {
        if (e.getOptions) {
          if (e.searchWordsRequired && !xe(s.value)) {
            A(!1);
            return;
          }
          Ne.get(e.url, k.value).then((_) => {
            var ae;
            b = !1;
            let h = [];
            (ae = _ == null ? void 0 : _.data) != null && ae.records ? (h = _.data.records, n = _.data.pages) : _ != null && _.data && j(_.data) === "Array" ? (h = _.data, n = _.pages) : _ != null && _.data && j(_.data) === "Object" && (h = [_.data], n = 1), typeof e.optionFilter == "function" && j(e.optionFilter) === "Function" && (h = e.optionFilter(h)), Ie(h) || (h = h.map((D, K) => {
              let le = L("r.optionLabel") + K;
              if (Array.isArray(e.optionsLabelKey)) {
                let v = [];
                for (let M = 1, J = e.optionsLabelKey.length; M < J; M++)
                  v.push(D[e.optionsLabelKey[M]]);
                le = `${D[e.optionsLabelKey[0]]}(${String(v)})`;
              } else
                qt(e.optionsLabelKey) && (le = D[e.optionsLabelKey]);
              if (e.collectLabel) {
                let v = ue(D);
                return delete v.value, delete v.label, {
                  value: D[e.optionsValKey],
                  label: le,
                  ...v
                };
              }
              return {
                value: D[e.optionsValKey],
                label: le
              };
            })), d.value.push(...h);
            let $ = {};
            d.value = d.value.filter((D) => $[D == null ? void 0 : D.value] ? !1 : ($[D == null ? void 0 : D.value] = !0, !0)), Ae(function() {
              o("update-option-finish");
            }), A(!0);
          }).catch(() => {
            sl.error(L("r.getDataError")), I(L("r.getDataError"));
          });
        } else
          A(!1);
      });
    }
    return De(C), (A, I) => {
      const _ = ee("Option"), h = ee("Select"), $ = Wt("loadmore");
      return ye((x(), Z(h, nt({
        modelValue: p(g),
        "onUpdate:modelValue": I[0] || (I[0] = (ae) => $e(g) ? g.value = ae : null),
        ref_key: "selectScrollSourceRef",
        ref: y,
        "transfer-class-name": f
      }, A.$attrs, {
        transfer: "",
        filterable: "",
        placeholder: p(c),
        disabled: A.disabled
      }), {
        default: te(() => [
          (x(!0), N(we, null, Se(p(d), (ae, D) => (x(), Z(_, {
            key: "op" + D,
            value: ae == null ? void 0 : ae.value,
            label: ae == null ? void 0 : ae.label,
            disabled: ae == null ? void 0 : ae.disabled
          }, null, 8, ["value", "label", "disabled"]))), 128))
        ]),
        _: 1
      }, 16, ["modelValue", "placeholder", "disabled"])), [
        [$, S, f]
      ]);
    };
  }
}), bl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AlCascaderMC: Gl,
  AsyncCascader: El,
  BtTablePage: Et,
  CheckboxGroupThreeClass: Wo,
  CheckboxGroupTwoClass: Ro,
  CheckboxTree: yo,
  EditorPro: ql,
  FormGroup: mo,
  FormModal: ho,
  FormR: St,
  FullPop: Fa,
  HeaderBt: xl,
  Hello: Ka,
  IconTxtBtn: $t,
  InputMap: Nl,
  MonthRange: jl,
  Page404: Na,
  PagePro: Dl,
  SearchForm: Ht,
  SelectInput: Ul,
  SelectScrollMore: Zo,
  ShowHidePanel: Mt,
  ShowHidePanelB: mn,
  SideMenu: un,
  TableIconBtn: $l,
  TableSearch: vn,
  TableSetting: Kl,
  TransferBox: Lo,
  UploadGroup: Wl,
  WellCard: Qo
}, Symbol.toStringTag, { value: "Module" })), ei = { class: "a4Line aL notPrint" }, ti = { class: "a4Line aR notPrint" }, li = { class: "a4Line bL notPrint" }, ai = { class: "a4Line bR notPrint" }, ni = { class: "topsL notPrint" }, oi = { class: "topsLTitle" }, ii = { class: "topsLBtn" }, si = { class: "topsLHelp" }, ri = { key: 0 }, ui = /* @__PURE__ */ P("span", null, "1. ", -1), di = { key: 1 }, ci = /* @__PURE__ */ P("span", null, "2. ", -1), fi = { key: 2 }, pi = /* @__PURE__ */ P("span", null, "1. ", -1), mi = ["innerHTML"], hi = /* @__PURE__ */ pe({
  __name: "PrintModal",
  setup(t) {
    const i = Tl(), o = G(), e = G(!1), a = G(!1), n = G(!1), s = G(715), d = G(!1), u = G(), b = "tablePrint_" + Date.now().toString(), m = G(""), f = G([]), c = G([]), g = G(!1), k = E(() => ({
      width: s.value + "px"
    })), y = () => {
      u.value && window.sessionStorage.removeItem("print_" + u.value), window.sessionStorage.removeItem(b), window.close();
    }, C = () => {
      d.value && (d.value = !1);
    }, w = () => {
      g.value = !0;
    }, T = (A) => {
      g.value && (s.value = (A == null ? void 0 : A.layerX) - 20);
    }, B = () => {
      g.value && (g.value = !1);
    }, S = () => {
      d.value = !1;
      let A = window.setTimeout(() => {
        window.clearTimeout(A), window.print();
      }, 100);
    }, R = () => {
      var A, I, _, h, $;
      if (u.value = (A = i == null ? void 0 : i.params) == null ? void 0 : A.isFrom, u.value) {
        let ae = window.sessionStorage.getItem("print_" + u.value);
        if (ae) {
          const D = JSON.parse(ae);
          if (!D) {
            e.value = !0;
            return;
          }
          f.value = D.columns, c.value = D.data, o.value = D.title, m.value = ((I = D == null ? void 0 : D.config) == null ? void 0 : I.customClass) || "", a.value = ((_ = D == null ? void 0 : D.config) == null ? void 0 : _.domPrint) || !1, n.value = ((h = D == null ? void 0 : D.config) == null ? void 0 : h.autoPrint) || !1, s.value = (($ = D == null ? void 0 : D.config) == null ? void 0 : $.width) || 715, document.title = (o.value || L("r.print")) + "_" + (/* @__PURE__ */ new Date()).toLocaleString();
        } else
          e.value = !0;
      }
    };
    return De(() => {
      if (n.value) {
        let A = window.setTimeout(() => {
          window.clearTimeout(A), S();
        }, 100);
      }
      document.addEventListener("click", C), document.addEventListener("mousemove", T), document.addEventListener("mouseup", B);
    }), R(), (A, I) => {
      const _ = ee("Table");
      return x(), N("div", {
        class: Oe(["tablePrintModal", [p(m)]])
      }, [
        ye(P("div", { class: "msgL notPrint" }, H(p(L)("r.printGuide.9")), 513), [
          [ge, p(e)]
        ]),
        ye(P("div", ei, [
          P("p", null, H(p(L)("r.printGuide.7")), 1),
          be(),
          P("p", null, H(p(L)("r.printGuide.5")), 1)
        ], 512), [
          [ge, !p(e)]
        ]),
        ye(P("div", ti, [
          P("p", null, H(p(L)("r.printGuide.7")), 1),
          be(),
          P("p", null, H(p(L)("r.printGuide.6")), 1)
        ], 512), [
          [ge, !p(e)]
        ]),
        ye(P("div", li, [
          P("p", null, H(p(L)("r.printGuide.8")), 1),
          be(),
          P("p", null, H(p(L)("r.printGuide.5")), 1)
        ], 512), [
          [ge, !p(e)]
        ]),
        ye(P("div", ai, [
          P("p", null, H(p(L)("r.printGuide.8")), 1),
          be(),
          P("p", null, H(p(L)("r.printGuide.6")), 1)
        ], 512), [
          [ge, !p(e)]
        ]),
        ye(P("div", ni, [
          P("div", oi, H(p(o) || p(L)("r.print")), 1),
          P("div", ii, [
            q($t, {
              icon: "md-help-circle",
              name: p(L)("r.help"),
              onClick: I[0] || (I[0] = Ot((h) => d.value = !p(d), ["stop"]))
            }, null, 8, ["name"]),
            q($t, {
              icon: "md-print",
              name: p(L)("r.preview"),
              onClick: S
            }, null, 8, ["name"]),
            p(a) ? fe("", !0) : (x(), Z(Kl, {
              key: 0,
              modelValue: p(f),
              "onUpdate:modelValue": I[1] || (I[1] = (h) => $e(f) ? f.value = h : null),
              "s-key": b,
              storage: "sessionStorage"
            }, null, 8, ["modelValue"])),
            q($l, {
              icon: "md-close",
              onClick: y,
              title: p(L)("r.close")
            }, null, 8, ["title"])
          ]),
          ye(P("div", si, [
            p(a) ? fe("", !0) : (x(), N("p", ri, [
              ui,
              P("span", null, H(p(L)("r.printGuide.1")), 1)
            ])),
            p(a) ? fe("", !0) : (x(), N("p", di, [
              ci,
              P("span", null, H(p(L)("r.printGuide.2")), 1)
            ])),
            p(a) ? (x(), N("p", fi, [
              pi,
              P("span", null, H(p(L)("r.printGuide.10")), 1)
            ])) : fe("", !0),
            P("p", null, [
              P("span", null, H(p(a) ? "2. " : "3. "), 1),
              P("span", null, H(p(L)("r.printGuide.3")), 1)
            ]),
            P("p", null, [
              P("span", null, H(p(a) ? "3. " : "4. "), 1),
              P("span", null, H(p(L)("r.printGuide.4")), 1)
            ])
          ], 512), [
            [ge, p(d)]
          ])
        ], 512), [
          [ge, !p(e)]
        ]),
        p(a) ? (x(), N("div", {
          key: 0,
          class: "domPrintSetting notPrint",
          style: re(p(k))
        }, [
          P("div", {
            class: "settingLine",
            onMousedown: Ot(w, ["stop"])
          }, null, 32)
        ], 4)) : fe("", !0),
        p(a) ? (x(), N("div", {
          key: 1,
          class: "domPrintContent",
          innerHTML: p(c),
          style: re(p(k))
        }, null, 12, mi)) : fe("", !0),
        p(a) ? fe("", !0) : ye((x(), Z(_, {
          key: 2,
          class: "tablePW",
          columns: p(f),
          data: p(c),
          border: ""
        }, null, 8, ["columns", "data"])), [
          [ge, !p(e)]
        ])
      ], 2);
    };
  }
});
let Je = null;
function kl() {
  document.documentElement.style.setProperty("overflow", "auto");
  const i = document.createElement("style");
  i.innerHTML = "body,div[data-v-app]{height:100% !important}", document.head.appendChild(i);
}
function yi(t) {
  t != null && t.addRoute && (t.hasRoute("tablePrint") || t.addRoute({
    name: "tablePrint",
    path: "/tablePrint/:isFrom",
    component: hi
  })), Je = t, location.pathname.indexOf("tablePrint") > -1 ? (Je.push(location.pathname), kl()) : location.hash.indexOf("tablePrint") > -1 && (Je.push(location.hash.replace(/^#/, "")), kl());
}
function Jl(t) {
  return j(t) === "Object" && (t.width = t.minWidth || 100, t.sortable = !1, delete t.minWidth, delete t.__id, t.resizable = !0, t.children && j(t.children) === "Array" && (t.children = t.children.map(Jl))), t;
}
function vi(t, i, o, e) {
  var b, m, f;
  if (!Je)
    return;
  let a;
  if (!(e != null && e.domPrint)) {
    let c = ue(
      t.filter((g) => (g == null ? void 0 : g.key) || (g == null ? void 0 : g.children))
    );
    c[0].type === "selection" && c.shift(), c.length ? a = c.map(Jl) : a = [];
  }
  let n = (m = (b = Je == null ? void 0 : Je.currentRoute) == null ? void 0 : b.value) == null ? void 0 : m.fullPath;
  n && (n = (f = n.replace) == null ? void 0 : f.call(n, /\//g, "_"));
  let s = {
    data: i,
    title: o,
    config: e
  };
  e != null && e.domPrint || (s.columns = a), window.sessionStorage.setItem("print_" + n, JSON.stringify(s));
  const d = Je.resolve({
    name: "tablePrint",
    params: { isFrom: n }
  });
  window.open(d == null ? void 0 : d.href, "_blank") || console.log("请不要禁用浏览器弹出窗口，否则无法正常使用该打印功能。");
}
const Yt = {
  print: vi,
  init: yi
};
function gi(t = "", i = "", o = {}) {
  o.domPrint = !0, o.width || (o.width = 715), Yt.print([], t, i, o);
}
function bi(t) {
  var n, s;
  const i = (...d) => He.apply(this, d), o = i("r.closePreview"), e = i("r.fullImg");
  let a = "previewImg" + Math.floor(Math.random() * 1e7);
  (s = (n = qe) == null ? void 0 : n.info) == null || s.call(n, {
    closable: !1,
    "transition-names": ["linear", "fade"],
    render: (d) => Be(
      "div",
      {
        class: "previewModal",
        id: a
      },
      [
        Be(
          "div",
          {
            class: "previewModalInner"
          },
          [
            Be("img", {
              src: t,
              alt: e
            }),
            Be(ga, {
              type: "md-close",
              title: o,
              class: "previewModalDelete",
              onClick() {
                var u, b;
                (b = (u = qe) == null ? void 0 : u.remove) == null || b.call(u);
              }
            })
          ]
        )
      ]
    )
  }), Re(() => {
    var b, m, f, c, g, k;
    const d = (c = (f = (m = (b = document.getElementById(a)) == null ? void 0 : b.parentElement) == null ? void 0 : m.parentElement) == null ? void 0 : f.parentElement) == null ? void 0 : c.parentElement, u = (k = (g = document.getElementById(a)) == null ? void 0 : g.parentElement) == null ? void 0 : k.nextSibling;
    d && (d.style.height = "0"), d && (d.style.padding = "0"), u && (u.style.display = "none");
  }, 10);
}
const ki = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $fetch: Ne,
  $swal: Me,
  $swalConfirm: Rl,
  domPrint: gi,
  fullScreenImgByDom: dt,
  fullScreenImgPreview: bi,
  messageBox: Nt,
  setInterval: yn,
  setTimeout: Re,
  tablePrint: Yt
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
      this.title = He("r.preview"), this.iconSvg = '<svg t="1656644788547" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12356" width="256" height="256"><path d="M512 1024H135.4C60.7 1024 0 963.3 0 888.6V135.4C0 60.7 60.7 0 135.4 0h753.2C963.3 0 1024 60.7 1024 135.4V512c0 24.9-20.1 45-45 45s-45-20.1-45-45V135.4c0-25-20.4-45.4-45.4-45.4H135.4c-25 0-45.4 20.4-45.4 45.4v753.2c0 25 20.4 45.4 45.4 45.4H512c24.9 0 45 20.1 45 45s-20.1 45-45 45z" p-id="12357"></path><path d="M512 802c-77.5 0-150.3-30.2-205.1-84.9C252.2 662.3 222 589.5 222 512s30.2-150.3 84.9-205.1S434.5 222 512 222s150.3 30.2 205.1 84.9C771.8 361.7 802 434.5 802 512s-30.2 150.3-84.9 205.1C662.3 771.8 589.5 802 512 802z m0-490c-110.3 0-200 89.7-200 200s89.7 200 200 200 200-89.7 200-200-89.7-200-200-200z" p-id="12358"></path><path d="M978.5 1023.5c-11.5 0-23-4.4-31.8-13.2L653.2 716.8c-17.6-17.6-17.6-46.1 0-63.6 17.6-17.6 46.1-17.6 63.6 0l293.5 293.5c17.6 17.6 17.6 46.1 0 63.6-8.8 8.8-20.3 13.2-31.8 13.2z" p-id="12359"></path></svg>', this.tag = "button", this.alwaysEnable = !0;
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
      var u, b, m, f, c, g, k, y, C;
      const a = document.getElementById("editor-preview");
      let n = localStorage.getItem("editorPreviewW") || 300, s = localStorage.getItem("editorPreviewH") || 500;
      const d = (u = e == null ? void 0 : e.getHtml) == null ? void 0 : u.call(e);
      if (a) {
        let w = (g = (c = (f = (m = (b = a.children) == null ? void 0 : b[0]) == null ? void 0 : m.children) == null ? void 0 : f[1]) == null ? void 0 : c.children) == null ? void 0 : g[0], T = (C = (y = (k = a.children) == null ? void 0 : k[0]) == null ? void 0 : y.children) == null ? void 0 : C[1];
        w && (w.innerHTML = d, w.style.width = n + "px"), T && (T.style.height = s + "px"), a.style.display = "block";
      } else {
        const w = document.body, T = document.createElement("div");
        T.setAttribute("id", "editor-preview"), T.setAttribute("class", "editor-preview-mask"), T.innerHTML = `<div class='editor-preview-body'><div class='editor-preview-head'><div><span>宽</span><input type='number' value='${n}' min='200'><span>高</span><input type='number' value='${s}' min='300'></div><i class='ivu-icon ivu-icon-md-close'></i></div><div class='editor-preview-out-wall'><div class='editor-preview-wall r-editor-view'></div></div></div>`;
        let B = T.children[0].children[1], S = T.children[0].children[1].children[0], R = T.children[0].children[0].children[0].children[1];
        const A = 40, I = 70, _ = (D) => {
          var v;
          if ((D == null ? void 0 : D.type) === "keyup") {
            let M = !1;
            if (D.key && (M = D.key !== "Enter"), M)
              return;
          }
          let K = (v = D == null ? void 0 : D.target) == null ? void 0 : v.value;
          if (K = Number(K), S.style && S.style.width === K + "px")
            return;
          const le = w.clientWidth;
          K < 250 ? (K = 250, D.target.value = 250) : K > le - A && (K = le - A, D.target.value = le - A), S.style.width = K + "px", localStorage.setItem("editorPreviewW", K);
        };
        R.addEventListener("blur", _), R.addEventListener("keyup", _);
        let h = T.children[0].children[0].children[0].children[3];
        const $ = (D) => {
          var v;
          if ((D == null ? void 0 : D.type) === "keyup") {
            let M = !1;
            if (D.key && (M = D.key !== "Enter"), M)
              return;
          }
          let K = (v = D == null ? void 0 : D.target) == null ? void 0 : v.value;
          if (K = Number(K), B.style && B.style.height === K + "px")
            return;
          const le = w.clientHeight;
          K < 300 ? (K = 300, D.target.value = 300) : K > le - I && (K = le - I, D.target.value = le - I), B.style.height = K + "px", localStorage.setItem("editorPreviewH", K);
        };
        h.addEventListener("blur", $), h.addEventListener("keyup", $), T.children[0].children[0].children[1].addEventListener("click", () => {
          T.style.display = "none";
        }), S.innerHTML = d, S.style.width = n + "px", B.style.height = s + "px", w.append(T);
      }
    }
  }
  const i = {
    key: "previewX",
    factory() {
      return new t();
    }
  };
  Ca.registerMenu(i), window.wangeditorMenuInit = !0;
})();
const Ui = wt.use, Ni = wt.i18n, wl = {
  ...ki,
  ...an
}, wi = function(t, i = {}) {
  Ne.init(i.useStore || i.store, t), t.use(Sa), i.locale && wt.use(i.locale), i.i18n && wt.i18n(i.i18n), i.router && (hn(i.router), Yt.init(i.router)), i.amap && Mn(i.amap), i.notRegistryGlobal || (Object.keys(bl).forEach((o) => {
    t.component(o) || t.component(o, bl[o]);
  }), Object.keys(wl).forEach((o) => {
    t.config.globalProperties[o] = wl[o];
  })), t.directive("has") || t.directive("has", (o, e) => {
    e.value && !Jt(e.value) && (o.style.display = "none");
  }), t.directive("loadmore") || t.directive("loadmore", {
    mounted(o, e) {
      var n;
      let a = o;
      e.arg && (a = (n = document.getElementsByClassName(e.arg)) == null ? void 0 : n[0]), a && a.addEventListener("scroll", function() {
        a.scrollTop > 0 && a.scrollHeight - a.scrollTop <= a.clientHeight && e.value();
      });
    }
  }), t.directive("clickOutside") || t.directive("clickOutside", Fl), t.config.globalProperties.fontSizeBase = 14, t.config.globalProperties.searchFormLabelWidth = 84, t.config.globalProperties.searchFormItemWidth = 202, t.config.globalProperties.formModalLabelWidth = 140, t.config.globalProperties.formModalWidth = 520, t.config.globalProperties.formGroupLabelWidth = 160, t.config.globalProperties.formGroupWidth = "100%", t.config.globalProperties.iconTxtBtnIconSize = 17, t.config.globalProperties.pageSizes = [10, 20, 50, 100], t.config.globalProperties.btTablePageUsePagePro = !0, t.config.globalProperties.btTablePageAlign = "center", t.config.globalProperties.pageShowTotal = !0, t.config.globalProperties.pageShowSizer = !0, t.config.globalProperties.tableSettingBg = "#fff", t.config.globalProperties.tableSettingTransfer = !0, t.config.globalProperties.tableSettingEventsEnabled = !0;
}, Ei = { install: wi };
export {
  Ne as $fetch,
  Me as $swal,
  Rl as $swalConfirm,
  Gl as AlCascaderMC,
  El as AsyncCascader,
  Et as BtTablePage,
  Wo as CheckboxGroupThreeClass,
  Ro as CheckboxGroupTwoClass,
  yo as CheckboxTree,
  ql as EditorPro,
  mo as FormGroup,
  ho as FormModal,
  St as FormR,
  Fa as FullPop,
  xl as HeaderBt,
  Ka as Hello,
  $t as IconTxtBtn,
  Nl as InputMap,
  jl as MonthRange,
  Na as Page404,
  Dl as PagePro,
  Ht as SearchForm,
  Ul as SelectInput,
  Zo as SelectScrollMore,
  Mt as ShowHidePanel,
  mn as ShowHidePanelB,
  un as SideMenu,
  $l as TableIconBtn,
  vn as TableSearch,
  Kl as TableSetting,
  Lo as TransferBox,
  Wl as UploadGroup,
  Qo as WellCard,
  Rt as clearObj,
  tn as dataFilterOrToUrl,
  Ja as decimalDigitsLimit,
  Ei as default,
  gi as domPrint,
  Ol as downloadFileByFormSubmit,
  Vn as downloadFileReaderFile,
  zi as emptyInput,
  Cn as fakeALinkClick,
  Ya as fileExport,
  et as findCollection,
  Ut as findPath,
  Wa as formDataHeadConfig,
  dt as fullScreenImgByDom,
  bi as fullScreenImgPreview,
  Xa as getColumnsKeys,
  cl as getFileSrc,
  Ml as getFileTypeByName,
  fl as getFileTypeIconByName,
  Sn as getStringWidth,
  Ha as has,
  Jt as hasPermission,
  Mi as htmlDecode,
  Ki as htmlEncode,
  ln as htmlPrint,
  Ni as i18n,
  wi as install,
  Ft as isClient,
  Za as isEmptyValue,
  rt as isImgByFile,
  Il as isNaN,
  Qa as isNumberValue,
  xe as isValidValue,
  Ui as locale,
  Nt as messageBox,
  j as myTypeof,
  qa as oneOf,
  Kt as removeEmptyValue,
  yn as setInterval,
  Re as setTimeout,
  tt as setValByOption,
  Ee as setValue,
  Pl as siblingElems,
  Di as stopBubbling,
  en as stringLength,
  Yt as tablePrint,
  ja as toFormData,
  _n as toHump,
  Ll as toLine,
  Al as tooltipManual,
  _t as trimObj
};
//# sourceMappingURL=plugRQw.js.map
