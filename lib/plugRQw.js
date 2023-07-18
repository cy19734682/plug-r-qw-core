import { getCurrentInstance as se, defineComponent as P, resolveComponent as V, openBlock as v, createElementBlock as _, normalizeClass as I, normalizeStyle as $, createBlock as oe, createCommentVNode as ie, renderSlot as ce, ref as F, computed as z, withDirectives as ae, createElementVNode as S, toDisplayString as k, unref as A, createVNode as H, withCtx as ue, createTextVNode as fe, vShow as pe, Fragment as xe, renderList as _e, onBeforeMount as Se, watch as Oe, nextTick as ke } from "vue";
import Ae from "deepmerge";
import { useRouter as Ce, useRoute as Ne } from "vue-router";
import w from "lodash";
import L from "sweetalert";
import U from "axios";
import { Modal as M } from "view-ui-plus";
const de = {
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
}, Te = /(%|){([0-9a-zA-Z_]+)}/g;
function Pe() {
  function e(t, r) {
    return Object.prototype.hasOwnProperty.call(t, r);
  }
  function n(t, ...r) {
    let s;
    return r.length === 1 && typeof r[0] == "object" && (s = r[0]), (!s || !s.hasOwnProperty) && (s = {}), t === void 0 ? "" : t.replace(Te, (l, o, i, c) => {
      let f;
      return t[c - 1] === "{" && t[c + l.length] === "}" ? i : (f = e(s, i) ? s[i] : null, f ?? "");
    });
  }
  return n;
}
const Ee = Pe();
let j = de;
const Fe = {
  zh: de
};
let Z = null, Y = {}, h = null, Be = function(...e) {
  if (Reflect.has(this, "$t"))
    return this.$t(...e);
  if (h && h.global)
    return h.global.t(...e);
  if (h && h.locale) {
    if (!Y[h.locale] || Z != h.locale) {
      Y[h.locale] = !0;
      let n = h.getLocaleMessage(h.locale) || {}, t = Ae(Fe[h.locale], n, { clone: !0 });
      j = t, h.setLocaleMessage(h.locale, t), Z = h.locale;
    }
    return h.hlang(...e);
  }
};
const E = function(...e) {
  let n = e[0], t = e[1], r = Be.apply(this, e);
  if (r != null)
    return r;
  const s = n.split(".");
  let l = j;
  for (let o = 0, i = s.length; o < i; o++) {
    const c = s[o];
    if (r = l[c], o === i - 1)
      return Ee(r, t);
    if (!r)
      return "";
    l = r;
  }
  return "";
}, Le = function(e) {
  j = e || j;
}, Me = function(e) {
  h = e;
}, D = {
  use: Le,
  t: E,
  i18n: Me
};
function C(...e) {
  var t;
  const n = (t = se()) == null ? void 0 : t.appContext.config.globalProperties;
  return E.apply(n, e);
}
const me = /* @__PURE__ */ P({
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
  setup(e, { emit: n }) {
    const t = e;
    function r() {
      t.disabled || n("click");
    }
    return (s, l) => {
      const o = V("Icon");
      return v(), _("div", {
        class: I({ headerBtCTM: !0, withIconCTM: s.icon || s.withIcon, disabled: s.disabled }),
        style: $({ color: s.color, borderLeftColor: s.borderColor }),
        onClick: r
      }, [
        s.icon ? (v(), oe(o, {
          key: 0,
          size: s.iconSize,
          type: s.icon
        }, null, 8, ["size", "type"])) : ie("", !0),
        ce(s.$slots, "default")
      ], 6);
    };
  }
}), Re = { class: "headerTxtAM" }, Ie = { class: "contentAM" }, $e = /* @__PURE__ */ P({
  __name: "FullPop",
  props: {
    title: {},
    headerColor: {},
    headerBg: {},
    headerFontSize: { default: 12 },
    zIndex: { default: 1e3 }
  },
  emits: ["on-open", "on-close"],
  setup(e, { expose: n, emit: t }) {
    const r = e;
    let s = F(!1);
    const l = z(() => typeof r.headerFontSize == "number" ? r.headerFontSize + "px" : r.headerFontSize), o = z(() => ({ zIndex: r.zIndex }));
    function i() {
      s.value = !0, t("on-open");
    }
    function c(f) {
      s.value = !1, t("on-close", f === !0);
    }
    return n({
      open: i,
      close: c
    }), (f, a) => ae((v(), _("div", {
      class: "fullScreenPopBoxAM",
      style: $(o.value)
    }, [
      S("div", {
        class: "headerAM",
        style: $({ color: f.headerColor, backgroundColor: f.headerBg, fontSize: l.value })
      }, [
        S("span", Re, k(f.title || A(C)("r.title")), 1),
        H(me, {
          icon: "md-return-left",
          onClick: c
        }, {
          default: ue(() => [
            fe(k(A(C)("r.back")), 1)
          ]),
          _: 1
        })
      ], 4),
      S("div", Ie, [
        ce(f.$slots, "default")
      ])
    ], 4)), [
      [pe, A(s)]
    ]);
  }
}), ze = { class: "msg" }, He = /* @__PURE__ */ P({
  __name: "Hello",
  setup(e) {
    let n = F("Greetings from Ricky.");
    return (t, r) => (v(), _("span", ze, k(A(n)), 1));
  }
}), je = { class: "c404K" }, De = /* @__PURE__ */ S("div", { class: "t404" }, "404", -1), Ve = { class: "ct404" }, Ue = { class: "p404" }, qe = /* @__PURE__ */ P({
  __name: "Page404",
  setup(e) {
    const t = se().appContext.config.globalProperties.$router;
    function r() {
      t.go(-1);
    }
    return (s, l) => {
      const o = V("Button");
      return v(), _("div", je, [
        De,
        S("div", Ve, "UH OH! " + k(A(C)("r.pageNotFound")), 1),
        S("div", Ue, k(A(C)("r.notFoundMsg")), 1),
        H(o, {
          class: "bt404",
          onClick: r
        }, {
          default: ue(() => [
            fe(k(A(C)("r.back")), 1)
          ]),
          _: 1
        })
      ]);
    };
  }
});
function X(e, n, t) {
  const r = (...s) => E.apply(this, s);
  return new Promise((s, l) => {
    if (typeof e == "object" && !Array.isArray(e)) {
      let o = r("r.confirm"), i = r("r.cancel"), c = !1, f = "swalConfirmBt", a = "swalCancelBt";
      const d = /^HTML.*Element$/;
      e.type && (e.icon = e.type) && delete e.type, e.content && (e.text = e.content) && delete e.content, e.className = e.className || "swalBoxX";
      let p = "";
      e.text && d.test(u(e.text)) ? p = "content" : e.text && u(e.text) === "String" && (p = "text"), e.buttons && (typeof e.buttons == "object" && !Array.isArray(e.buttons) ? e.buttons.cancel && (e.buttons.cancel.text && (i = e.buttons.cancel.text) && (c = !0), e.buttons.cancel.className && (a = e.buttons.cancel.className), e.buttons.confirm.text && (o = e.buttons.confirm.text), e.buttons.confirm.className && (f = e.buttons.confirm.className)) : Array.isArray(e.buttons) && (e.buttons[0] && (i = e.buttons[0], c = !0), e.buttons[1] && (o = e.buttons[1]))), L({
        title: e.title,
        icon: e.icon,
        className: e.className,
        [p]: e.text,
        buttons: {
          confirm: {
            text: o,
            value: !0,
            visible: !0,
            className: f
          },
          cancel: {
            text: i,
            value: null,
            visible: c,
            className: a
          }
        }
      }).then((b) => {
        b && typeof e.onOk == "function" && e.onOk(), s(b);
      }).catch((b) => {
        l(b);
      });
    } else if (typeof e == "string") {
      let o = "";
      if (n)
        switch (typeof n) {
          case "string":
            o = "text";
            break;
          case "object":
            o = "content";
            break;
        }
      L({
        title: e,
        [o]: n || "",
        icon: t || "",
        className: "swalBoxX",
        buttons: {
          confirm: {
            text: r("r.confirm"),
            value: !0,
            visible: !0,
            className: "swalConfirmBt",
            closeModal: !0
          }
        }
      }).then((i) => {
        s(i);
      }).catch((i) => {
        l(i);
      });
    } else if (typeof e == "boolean")
      !e && L.close && L.close();
    else
      throw new TypeError("swal第一个参数类型有误，仅支持Object/String/false");
  });
}
function Lt(e) {
  return e.replace(/_(\w)/g, function(n, t) {
    return t.toUpperCase();
  });
}
function Mt(e) {
  let n = document.createElement("div");
  return n.textContent !== void 0 ? n.textContent = e : n.innerText = e, n.innerHTML;
}
function Rt(e) {
  let n = document.createElement("div");
  return n.innerHTML = e, n.innerText || n.textContent;
}
function It(e) {
  return new Promise((n) => {
    let t = new FileReader();
    t.readAsDataURL(e), t.onloadend = () => {
      n(t.result);
    };
  });
}
function We(e) {
  return e.split(".").pop().toLocaleLowerCase();
}
function $t(e) {
  return u(e) === "String" && e.indexOf("image") > -1;
}
function zt(e) {
  const n = We(e);
  let t = "ios-document-outline";
  return ["gif", "jpg", "jpeg", "png", "bmp", "webp"].indexOf(n) > -1 ? t = "ios-image" : ["mp4", "m3u8", "rmvb", "avi", "swf", "3gp", "mkv", "flv"].indexOf(n) > -1 ? t = "ios-film" : ["mp3", "wav", "wma", "ogg", "aac", "flac"].indexOf(n) > -1 ? t = "ios-musical-notes" : ["doc", "txt", "docx", "pages", "epub", "pdf"].indexOf(n) > -1 ? t = "md-document" : ["numbers", "csv", "xls", "xlsx"].indexOf(n) > -1 ? t = "ios-stats" : ["keynote", "ppt", "pptx"].indexOf(n) > -1 && (t = "ios-videocam"), t;
}
function Ht(e, n) {
  let t = document.createElement("a");
  t.href = n, t.download = e, Ge(t);
}
function Ge(e) {
  let n = document.createEvent("MouseEvents");
  n.initMouseEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), e.dispatchEvent(n);
}
function K({
  group: e,
  condition: n,
  pathKey: t,
  childKey: r = "children",
  path: s = []
}) {
  if (e && w.isObject(e)) {
    if (w.isFunction(n)) {
      if (w.isPlainObject(e)) {
        let l = e, o = w.cloneDeep(s);
        if (n(l))
          return t && l[t] && o.push(l[t]), o;
        if (l[r] && !w.isEmpty(l[r])) {
          t && l[t] && o.push(l[t]);
          let i = K({
            group: l[r],
            condition: n,
            pathKey: t,
            childKey: r,
            path: o
          });
          if (!w.isEmpty(i))
            return i;
        }
      } else if (Array.isArray(e))
        for (let l of e) {
          let o = w.cloneDeep(s);
          if (n(l))
            return t && l[t] ? o.push(l[t]) : o.push(String(e.indexOf(l))), o;
          if (l[r] && l[r].length > 0) {
            t && l[t] ? o.push(l[t]) : o.push(String(e.indexOf(l)));
            let i = K({
              group: l[r],
              condition: n,
              pathKey: t,
              childKey: r,
              path: o
            });
            if (!w.isEmpty(i))
              return i;
          }
        }
    } else if (Array.isArray(e))
      for (let l of e) {
        let o = w.cloneDeep(s);
        if (l === n)
          return o.push(String(e.indexOf(l))), o;
      }
  }
  return [];
}
function Je(e, n = 12) {
  if (u(e) === "String" && e.length > 0) {
    let t = document.createElement("span");
    t.style.fontSize = n + "px", t.style.fontFamily = "inherit", t.innerHTML = e, t.style.opacity = "0", t.style.position = "fixed", t.style.top = "3000px", document.body.append(t);
    const r = t.clientWidth;
    return document.body.removeChild(t), r;
  }
  return 0;
}
function jt(e) {
  return e === "" ? null : e;
}
function Dt(e) {
  e = e || window.Event, e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0;
}
function u(e) {
  return Object.prototype.toString.call(e).replace(/\[object |]/g, "");
}
function Qe(e) {
  return e.replace(/([A-Z])/g, "_$1").toLowerCase();
}
function q(e) {
  let n = u(e);
  if (n === "Object") {
    for (let t in e)
      if (e.hasOwnProperty(t)) {
        let r = u(e[t]);
        r === "String" ? e[t] = e[t].trim() : (r === "Object" || r === "Array") && q(e[t]);
      }
  } else if (n === "Array")
    for (let t = 0, r = e.length; t < r; t++) {
      let s = u(e[t]);
      s === "String" ? e[t] = e[t].trim() : (s === "Array" || s === "Object") && q(e[t]);
    }
  return e;
}
function W(e, n = []) {
  if (u(e) === "Array")
    return e.forEach((t, r) => {
      switch (u(t)) {
        case "Array":
        case "Object":
          W(t);
          break;
        default:
          e[r] = null;
      }
    }), e;
  if (u(e) === "Object") {
    for (let t in e)
      if (e.hasOwnProperty(t)) {
        let r = !0;
        for (let s of n)
          if (s === t) {
            r = !1;
            break;
          }
        if (r)
          switch (u(e[t])) {
            case "Array":
            case "Object":
              W(e[t]);
              break;
            default:
              e[t] = null;
          }
      }
    return e;
  } else
    return e;
}
const Xe = {
  headers: {
    "Content-Type": "multipart/form-data"
  }
};
function Ze(e) {
  let n = new FormData();
  for (let t in e)
    e.hasOwnProperty(t) && e[t] !== null && n.append(t, e[t]);
  return n;
}
function Ye(e, n, t = !1) {
  if (!e || !n)
    return !1;
  let r, s = "notFoundC", l = function(o, i) {
    if (Array.isArray(o)) {
      if (u(i) === "Function" && i(o))
        return s = o, [];
      for (let c of o) {
        if (s !== "notFoundC")
          break;
        if (u(i) === "Function" && i(c) || c === i)
          return s = c, [o.indexOf(c)];
        if (u(c) === "Array" || u(c) === "Object") {
          let f = l(c, i);
          if (f !== void 0)
            return [o.indexOf(c), ...f];
        }
      }
    } else if (u(o) === "Object") {
      if (u(i) === "Function" && i(o))
        return s = o, [];
      for (let c in o) {
        if (s !== "notFoundC")
          break;
        if (o.hasOwnProperty(c)) {
          if (u(i) === "Function" && i(c) || o[c] === i)
            return s = o[c], [c];
          if (u(o[c]) === "Object" || u(o[c]) === "Array") {
            let f = l(o[c], i);
            if (f !== void 0)
              return [c, ...f];
          }
        }
      }
    }
  };
  return r = l(e, n), t ? r || !1 : s === "notFoundC" ? !1 : s;
}
function Ke(e, n) {
  for (let t = 0, r = n.length; t < r; t++)
    if (e === n[t])
      return !0;
  return !1;
}
function et(e, n = 2) {
  let t = new RegExp(`(^-?\\d+\\.\\d{${n}})(\\d+$)`), r = e && String(e) || "";
  return t.test(r) ? Number(r.replace(t, "$1")) : e;
}
function he(e, n = {}, t = "get") {
  let r = document.createElement("form"), s = document.getElementsByTagName("body")[0];
  s.appendChild(r), r.setAttribute("style", "display:none"), r.setAttribute("target", ""), r.setAttribute("method", t);
  let l = e;
  if (window && window.hasOwnProperty("g")) {
    let o = Object.keys(window.g).filter((i) => i.indexOf("URL") > -1).map((i) => i.replace("URL", ""));
    for (let i of o) {
      let c = new RegExp("^/" + i + "(?=/.*$)", "i");
      if (c.test(e) && window.g[i + "URL"]) {
        l = window.g[i + "URL"] + e.replace(c, "");
        break;
      }
    }
  }
  if (r.setAttribute("action", l), w.isPlainObject(n)) {
    for (let i in n)
      if (n.hasOwnProperty(i) && (n[i] || n[i] === 0 || n[i] === !1 || n[i] === "")) {
        let c = document.createElement("input");
        c.setAttribute("type", "hidden"), c.setAttribute("name", i), c.setAttribute("value", n[i]), r.appendChild(c);
      }
    r.submit();
    let o = setTimeout(() => {
      s.removeChild(r), clearTimeout(o), o = null;
    }, 8e3);
  } else
    console.error("请求数据格式有误，无法下载文件");
}
function tt(e, n = {}, t = "get") {
  if (n.hasOwnProperty("columns") && (n.columns === "" || n.columns === null || n.columns === void 0)) {
    X.call(this, {
      title: "需要导出的列不能为空",
      type: "warning"
    });
    return;
  }
  he(e, n, t);
}
function nt(e, n, t = !1) {
  let r;
  if (e && u(n) === "Array") {
    let s = localStorage.getItem(e);
    if (s) {
      let l = JSON.parse(decodeURI(s));
      r = n.filter((o) => o.key && l.indexOf(o.title) !== -1).map((o) => o.key);
    } else
      r = n.map((l) => l.key);
  } else
    r = [];
  return t || (r = String(r)), r;
}
function O(e) {
  return e != null && e !== "";
}
function rt(e) {
  return /^-?\d+(.\d+)?$/.test(e);
}
function lt(e, n = !1, t = "") {
  return function(r, s) {
    let l;
    if (Array.isArray(e)) {
      let c = [];
      for (let f of e)
        O(s.row[f]) && c.push(s.row[f]);
      l = c.join(t);
    } else
      typeof e == "function" ? l = e(s) : l = s.row[e];
    let o = Je(l), i = s.column._width;
    return l && o > i ? r(
      "Tooltip",
      {
        style: {
          width: "100%"
        },
        props: {
          content: l,
          maxWidth: i * 2
        }
      },
      [
        r(
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
          l
        )
      ]
    ) : r("span", n && !O(l) ? "--" : l);
  };
}
function st(e) {
  if (w.isPlainObject(e)) {
    for (let n in e)
      if (e.hasOwnProperty(n) && O(e[n]))
        return !1;
    return !0;
  } else if (Array.isArray(e)) {
    for (let n of e)
      if (O(n))
        return !1;
    return !0;
  }
  return !O(e);
}
function ot(e) {
  return u(e) === "String" ? e.replace(/[^\x00-\xff]/g, "01").length : u(e) === "Number" ? (e += "", e.replace(/[^\x00-\xff]/g, "01").length) : 0;
}
function we({
  group: e,
  condition: n,
  key: t,
  val: r,
  childKey: s = "children"
}) {
  if (u(e) !== "Array" || u(n) !== "Function" || u(t) !== "String" || u(s) !== "String")
    return !1;
  e.forEach((l) => {
    n(l) && (u(r) === "Function" ? l[t] = r(l[t]) : l[t] = r), u(l[s]) === "Array" && l[s].length > 0 && we({
      group: l[s],
      condition: n,
      key: t,
      val: r,
      childKey: s
    });
  });
}
function it(e) {
  let n = sessionStorage.getItem("btnPermissions");
  return n ? n.split(",").indexOf(e) > -1 : !1;
}
function ye(e) {
  return u(e) === "Number" && String(e) === "NaN";
}
function ct(e, n = !1, t = !1) {
  if (u(e) !== "Object")
    return e;
  let r = Object.assign(e, {}), s = "";
  for (let l in r)
    if (r.hasOwnProperty(l)) {
      let o = r[l];
      o === void 0 || o === "" || u(o) === "String" && o.trim() === "" || o === null || ye(o) ? t ? n ? s += l + "=&" : r[l] = "" : delete r[l] : n && (s += l + "=" + o + "&");
    }
  return n ? s.length > 0 ? s.substr(0, s.length - 1) : "" : r;
}
function G(e) {
  let n = {};
  if (Array.isArray(e)) {
    n = [];
    for (let t of e)
      Array.isArray(t) || w.isPlainObject(t) ? n.push(G(t)) : O(t) && n.push(t);
  } else if (w.isPlainObject(e))
    for (let t in e)
      e.hasOwnProperty(t) && (Array.isArray(e[t]) || w.isPlainObject(e[t]) ? n[t] = G(e[t]) : O(e[t]) && (n[t] = e[t]));
  return n;
}
function at(e) {
  const n = window.open();
  if (n) {
    n.document.write(e);
    let t = setTimeout(() => {
      n.print(), window.clearTimeout(t), t = null;
    }, 10);
  }
}
function be(e) {
  let n = [], t = e;
  for (; e.previousSibling && (e = e.previousSibling); )
    e.nodeType === 1 && n.push(e);
  for (; t.nextSibling && (t = t.nextSibling); )
    t.nodeType === 1 && n.push(t);
  return n;
}
const ut = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clearObj: W,
  dataFilterOrToUrl: ct,
  decimalDigitsLimit: et,
  downloadFileByFormSubmit: he,
  fileExport: tt,
  findCollection: Ye,
  formDataHeadConfig: Xe,
  getColumnsKeys: nt,
  hasPermission: it,
  htmlPrint: at,
  isEmptyValue: st,
  isNaN: ye,
  isNumberValue: rt,
  isValidValue: O,
  myTypeof: u,
  oneOf: Ke,
  removeEmptyValue: G,
  setValByOption: we,
  siblingElems: be,
  stringLength: ot,
  toFormData: Ze,
  toLine: Qe,
  tooltipManual: lt,
  trimObj: q
}, Symbol.toStringTag, { value: "Module" })), ft = { class: "groupBoxRP" }, pt = ["onClick"], dt = /* @__PURE__ */ P({
  __name: "SideMenuGroup",
  props: {
    data: { default: () => [] },
    pathName: { default: "" }
  },
  setup(e) {
    const n = e, t = Ce();
    function r(l) {
      return l.path === n.pathName ? "active" : "";
    }
    function s(l, o) {
      l.preventDefault();
      let i = l.target;
      if (!o.children && !i.classList.contains("active")) {
        t.push(o.path);
        return;
      }
      let c = i.parentNode, f = be(c);
      for (let a of f) {
        a.classList.remove("open");
        const d = a.querySelectorAll(".open");
        for (let p of d)
          p.classList.remove("open");
      }
      c.classList.toggle("open");
    }
    return (l, o) => {
      const i = V("sideMenuGroup", !0);
      return v(), _("ul", ft, [
        (v(!0), _(xe, null, _e(n.data, (c, f) => (v(), _("li", {
          class: I({ dropItemRP: c.children }),
          key: c.path + f
        }, [
          S("div", {
            class: I(["menuTxtR", r(c)]),
            onClick: (a) => s(a, c),
            style: $({ paddingLeft: c.level * 20 + "px" })
          }, k(c.name || "-- no name --"), 15, pt),
          c.children ? (v(), oe(i, {
            key: 0,
            data: c.children,
            "path-name": n.pathName
          }, null, 8, ["data", "path-name"])) : ie("", !0)
        ], 2))), 128))
      ]);
    };
  }
}), mt = { class: "menuListR" }, ht = /* @__PURE__ */ P({
  __name: "SideMenu",
  props: {
    data: { default: () => [] }
  },
  emits: ["on-change"],
  setup(e, { emit: n }) {
    const t = e, r = Ne(), s = F(!0), l = F(), o = F(), i = z(() => s.value ? C("r.hideMenu") : C("r.showMenu")), c = z(() => s.value ? "ios-arrow-back" : "ios-arrow-forward");
    Se(() => {
      let d = localStorage.getItem("menuDisplayR") || "";
      d !== "" ? s.value = JSON.parse(d) : (s.value = !0, localStorage.setItem("menuDisplayR", JSON.stringify(!0)));
    }), console.log(r.path), Oe(
      () => r.path,
      (d) => {
        l.value = d, ke(a);
      },
      { immediate: !0 }
    );
    function f() {
      s.value = !s.value, localStorage.setItem("menuDisplayR", JSON.stringify(s.value)), n("on-change", s.value);
    }
    function a() {
      let d = o.value.querySelectorAll(".dropItemRP");
      for (let p of d)
        p.querySelector(".active") && !p.classList.contains("open") && p.classList.add("open");
    }
    return (d, p) => {
      const b = V("Icon");
      return v(), _("div", {
        ref_key: "menuRef",
        ref: o,
        class: "menuBoxRP"
      }, [
        ae(S("div", mt, [
          H(dt, {
            data: t.data,
            pathName: l.value
          }, null, 8, ["data", "pathName"])
        ], 512), [
          [pe, s.value]
        ]),
        H(b, {
          type: c.value,
          size: 25,
          class: I([{ showIco: !s.value }, "menuShowHideIco"]),
          title: i.value,
          onClick: f,
          color: s.value ? "#fff" : "#333"
        }, null, 8, ["type", "class", "title", "color"])
      ], 512);
    };
  }
}), ee = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FullPop: $e,
  HeaderBt: me,
  Hello: He,
  Page404: qe,
  SideMenu: ht
}, Symbol.toStringTag, { value: "Module" }));
let N = 0, B = document.createElement("div");
B.setAttribute("class", "spinModal");
B.innerHTML = '<div class="loader"><svg class="circular" viewBox="25 25 50 50"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10" /></svg></div>';
window.onload = function() {
  document.getElementsByTagName("body")[0].append(B);
};
function te(e) {
  e ? B.classList.add("show") : B.classList.remove("show");
}
function ge(e) {
  let n = N;
  e ? N++ : N > 0 && N--, n !== N && (N === 0 ? te(!1) : n === 0 && te(!0));
}
const wt = window.location.origin;
let T = null;
const ne = (...e) => E.apply(T, e);
let y = U.create({
  baseURL: wt,
  withCredentials: !0
  // 允许携带cookie
});
function yt() {
  console.info("store为空，请在安装插件时传入store实例：Vue.use(plugRQw,{store:store})，Pinia传{store:useStore}");
}
y.interceptors.request.use(
  (e) => e,
  (e) => Promise.reject(e)
);
function re() {
  if (y.store)
    if (typeof y.store == "function") {
      const e = y.store();
      e.logout && e.logout();
    } else
      y.store.dispatch("logout");
  else
    yt();
}
y.interceptors.response.use(
  (e) => (T && e && e.data && (e.data.code === 403 || e.data.code === 409) && T.messageBox({
    content: ne("r.http." + e.data.code),
    onOk: re
  }), e),
  (e) => (T && e && e.response && (e.response.status === 403 || e.response.status === 409) && T.messageBox({
    content: ne("r.http." + e.response.status),
    onOk: re
  }), console.warn("请求出错：", e), Promise.reject(e))
);
function x(e, n, t, r) {
  r && r.spin && ge(!1);
  let s = !0, l = e && e.data;
  if (l) {
    t = t || [];
    for (let o of t)
      l = l[o], s = s && l;
    return s ? l : (n && console.warn(n), !1);
  }
  return n && console.warn(n), !1;
}
function bt(e, n, t, r, s, l, o) {
  return new Promise((i, c) => {
    switch (e) {
      case "get":
        y.get(n, { params: t }).then((a) => {
          let d = x(a, r, s, l);
          d ? i(d) : c(a);
        }).catch((a) => {
          x({}, r, s, l), c(a);
        });
        break;
      case "delete":
        let f = o ? "params" : "data";
        y.delete(n, { [f]: t }).then((a) => {
          let d = x(a, r, s, l);
          d ? i(d) : c(a);
        }).catch((a) => {
          x({}, r, s, l), c(a);
        });
        break;
      case "post":
        y.post(n, t, l).then((a) => {
          let d = x(a, r, s, l);
          d ? i(d) : c(a);
        }).catch((a) => {
          x({}, r, s, l), c(a);
        });
        break;
      case "put":
        y.put(n, t, l).then((a) => {
          let d = x(a, r, s, l);
          d ? i(d) : c(a);
        }).catch((a) => {
          x({}, r, s, l), c(a);
        });
        break;
    }
  });
}
function R(e, n, t = {}, r, s, l, o) {
  return new Promise((i, c) => {
    if (n) {
      l && l.spin && ge(!0);
      let f = n;
      if (window && window.hasOwnProperty("g")) {
        const p = window.g;
        let b = Object.keys(p).filter((g) => g.indexOf("URL") > -1).map((g) => g.replace("URL", ""));
        for (let g of b) {
          let m = new RegExp("^/" + g + "(?=/.*$)", "i");
          if (m.test(n) && p[g + "URL"]) {
            f = p[g + "URL"] + n.replace(m, "");
            break;
          }
        }
      }
      let a;
      if (l && l.headers && l.headers["Content-Type"] === "multipart/form-data")
        a = t;
      else if (t && !w.isEmpty(t))
        if (Array.isArray(t)) {
          a = [];
          for (let p of t)
            (p || p === 0 || p === !1 || p === "" && l && !l.noEmptyStr) && a.push(p);
        } else {
          a = {};
          for (let p in t)
            t.hasOwnProperty(p) && (t[p] || t[p] === 0 || t[p] === !1 || t[p] === "" && l && !l.noEmptyStr) && (a[p] = t[p]);
        }
      let d = e.toLowerCase();
      bt(d, f, a, r, s, l, o).then((p) => {
        i(p);
      }).catch((p) => {
        c(p);
      });
    } else
      console.error("没有请求地址:url"), c("没有请求地址:url");
  });
}
const ve = {
  /**
   * @description 初始化该请求插件，单独引入的话调用一次后，方可实现spin等功能，默认在该库安装时已自动化初始化了该请求插件
   * @function
   * @param {object} store 项目中vuex的store，或pinia的useStore
   * @param app 当前vue实例
   */
  init(e, n) {
    y.store = e, T = n.config.globalProperties;
  },
  /**
   * post 请求
   * @function
   * @param {string} url 请求地址
   * @param {object} data 请求数据
   * @param {string} msg 错误信息，在控制台输出，方便调试，不用可以不传，例如：
   * @example this.$fetch.post("/getDataB",{name:'ricky'},"获取数据B失败")
   * @param {Array.<string>} rPath 请求结果提取路径，如：[data,list]表示data.list,如不需过滤可不传
   * @param {object} config 请求配置  如请求过程需要遮罩层，设置 spin:true即可
   * @return {Promise<object>}
   * @example this.$fetch.post("/getData",{id:1},null,['result','list'])
   *  .then(r=>{
   *      console.log(r)
   *      r相当于:data.result.list,data是网络请求结果
   *  })
   *
   * 注意：
   *  请求最多支持5个入参，最少一个(url)，依次为：url,data,msg,rPath,config。如果要传靠后的入参，但不想传前面的，应该这样传：
   *  this.$fetch.post("/setData",{},null,[],{
   *     headers: {
   *         'Content-Type': 'multipart/form-data'
   *       },
   *       spin:true
   *   }
   *  )
   */
  post(e, n, t, r, s) {
    return new Promise((l, o) => {
      R("post", e, n, t, r, s).then((i) => {
        l(i);
      }).catch((i) => {
        o(i);
      });
    });
  },
  /**
   * put请求
   * @param {string} url 请求地址
   * @param {object} data 请求数据
   * @param {string} msg 错误信息，在控制台输出，方便调试，不用可以不传
   * @param {Array.<string>} rPath 请求结果提取路径
   * @param {object} config 请求配置  如请求过程需要遮罩层，设置 spin:true即可
   * @return {Promise<unknown>}
   */
  put(e, n, t, r, s) {
    return new Promise((l, o) => {
      R("put", e, n, t, r, s).then((i) => {
        l(i);
      }).catch((i) => {
        o(i);
      });
    });
  },
  /**
   * get请求
   * @param {string} url 请求地址
   * @param {object} data 请求数据
   * @param {string} msg 错误信息，在控制台输出，方便调试，不用可以不传
   * @param {Array.<string>} rPath 请求结果提取路径
   * @param {object} config 请求配置  如请求过程需要遮罩层，设置 spin:true即可
   * @return {Promise<unknown>}
   * PS: get请求时(delete请求同理)，可以把请求参数写在url里，也可以写在data里，注意写在data里时，data是对象
   * 以请求'/devices',找到id=2,name=meter举例：
   *  只传url时，url = '/devices?id=2&name=meter'
   *  url和data都传时,url = '/devices',data={id:2,name:'meter'}
   */
  get(e, n, t, r, s) {
    return new Promise((l, o) => {
      R("get", e, n, t, r, s).then((i) => {
        l(i);
      }).catch((i) => {
        o(i);
      });
    });
  },
  /**
   * delete 请求
   * @param {string} url 请求地址
   * @param {object} data 请求数据
   * @param {string} msg 错误信息，在控制台输出，方便调试，不用可以不传
   * @param {Array.<string>} rPath 请求结果提取路径
   * @param {object} config 请求配置  如请求过程需要遮罩层，设置 spin:true即可
   * @param isUrlData 传参模式 true:params,false:data
   * @return {Promise<unknown>}
   */
  delete(e, n, t, r, s, l = !0) {
    return new Promise((o, i) => {
      R("delete", e, n, t, r, s, l).then((c) => {
        o(c);
      }).catch((c) => {
        i(c);
      });
    });
  },
  /**
   * 并发请求   例如：
   * @example this.$fetch.all(
   *  [
   *    this.$fetch.get("/getData"),
   *    this.$fetch.post("/getDataB",{name:'ricky'})
   *  ]
   * )
   */
  all: U.all,
  /**
   * 并发请求结果分离 例如：
   * @example this.$fetch.all(
   *  [
   *    this.$fetch.get("/getData"),
   *    this.$fetch.post("/getDataB",{name:'ricky'})
   *  ]
   * )
   *  .then(
   *    this.$fetch.spread((result1,result2)=>{
   *        console.log(result1,result2)
   *    })
   *   )
   */
  spread: U.spread,
  /**
   * 该请求插件暴露给外界的配置对象，为axios.create创建的实例对象，使用方法见axios官方网站
   */
  config: y
};
function gt({
  height: e,
  width: n = 416,
  title: t,
  content: r,
  onOk: s,
  onCancel: l,
  okText: o,
  cancelText: i,
  noWarnIcon: c,
  footerAlign: f,
  cancelBt: a
}) {
  const d = (...m) => E.apply(this, m);
  let b = (e && Number(e) - 90 > 100 ? Number(e) - 90 + "px" : 0) || "100px";
  r = r || d("r.info.text");
  let g = u(r) === "String";
  M.warning({
    width: n,
    footerHide: !0,
    render: (m) => m(
      "div",
      {
        class: "customMessageBox",
        style: {
          height: b
        }
      },
      [
        m(
          "div",
          {
            class: "containerN"
          },
          [
            m(
              "div",
              {
                class: "titleN"
              },
              [
                m("span", t || d("r.info.title")),
                m(
                  "Button",
                  {
                    class: "fr closeN ivu-btn ivu-btn-text",
                    type: "text",
                    onclick() {
                      M.remove();
                    }
                  },
                  [
                    m("i", {
                      class: "ivu-icon ivu-icon-ios-close",
                      style: {
                        fontSize: "30px"
                      }
                    })
                  ]
                )
              ]
            ),
            m(
              "div",
              {
                class: "contentN",
                style: {
                  textAlign: g ? "center" : "left"
                }
              },
              [
                m("i", {
                  class: g && !c ? "ivu-icon ivu-icon-ios-alert-outline" : "hide",
                  style: {
                    fontSize: "60px",
                    color: "#f8bb86"
                  }
                }),
                m("div", { class: "msgBoxConO" }, r)
              ]
            ),
            m(
              "div",
              {
                class: "footerN",
                style: {
                  textAlign: f || "center"
                }
              },
              [
                m(
                  "Button",
                  {
                    class: "okBtN ivu-btn ivu-btn-default",
                    onclick() {
                      M.remove(), s && u(s) === "Function" && s();
                    }
                  },
                  [
                    m("i", {
                      class: "ivu-load-loop ivu-icon ivu-icon-ios-loading"
                    }),
                    m("span", o || d("r.confirm"))
                  ]
                ),
                m(
                  "Button",
                  {
                    class: ["cancelBtN ivu-btn ivu-btn-default", !a && "hide"],
                    onclick() {
                      M.remove(), u(l) === "Function" && l && l();
                    }
                  },
                  i || d("r.cancel")
                )
              ]
            )
          ]
        )
      ]
    )
  });
}
function vt(e, n, t, r) {
  const s = (...l) => E.apply(this, l);
  X.call(this, {
    title: e || s("r.info.title"),
    text: n || s("r.info.text"),
    icon: t || "warning",
    onOk: r,
    buttons: [s("r.cancel")]
  });
}
let J = [], Q = [];
const xt = function(e) {
  e && e.beforeEach ? e.beforeEach(() => {
    J.map((n) => {
      window.clearTimeout(n);
    }), Q.map((n) => {
      window.clearInterval(n);
    }), J.length = 0, Q.length = 0;
  }) : console.warn(
    "安装库plug-r-qw时未传入router，调用该库的定时器方法产生的定时器将不能自动销毁，请传入router：Vue.use(plugRQw,{router,...})"
  );
}, _t = function(e, n) {
  let t = window.setTimeout(e, n);
  return J.push(t), t;
}, St = function(e, n) {
  let t = window.setInterval(e, n);
  return Q.push(t), t;
}, le = {
  $fetch: ve,
  $swal: X,
  $swalConfirm: vt,
  messageBox: gt,
  setInterval: St,
  setTimeout: _t,
  ...ut
}, Ot = function(e, n = {}) {
  ve.init(n.useStore || n.store, e), n.locale && D.use(n.locale), n.i18n && D.i18n(n.i18n), n.router && xt(n.router), Object.keys(ee).forEach((t) => {
    e.component(t, ee[t]);
  }), Object.keys(le).forEach((t) => {
    e.config.globalProperties[t] = le[t];
  });
}, kt = D.use, At = D.i18n, Vt = {
  locale: kt,
  i18n: At,
  install: Ot
};
export {
  $e as FullPop,
  me as HeaderBt,
  He as Hello,
  qe as Page404,
  ht as SideMenu,
  W as clearObj,
  ct as dataFilterOrToUrl,
  et as decimalDigitsLimit,
  Vt as default,
  he as downloadFileByFormSubmit,
  Ht as downloadFileReaderFile,
  jt as emptyInput,
  Ge as fakeALinkClick,
  ve as fetch,
  tt as fileExport,
  Ye as findCollection,
  K as findPath,
  Xe as formDataHeadConfig,
  nt as getColumnsKeys,
  It as getFileSrc,
  We as getFileTypeByName,
  zt as getFileTypeIconByName,
  Je as getStringWidth,
  it as hasPermission,
  Rt as htmlDecode,
  Mt as htmlEncode,
  at as htmlPrint,
  st as isEmptyValue,
  $t as isImgByFile,
  ye as isNaN,
  rt as isNumberValue,
  O as isValidValue,
  gt as messageBox,
  u as myTypeof,
  Ke as oneOf,
  G as removeEmptyValue,
  St as setInterval,
  _t as setTimeout,
  we as setValByOption,
  be as siblingElems,
  Dt as stopBubbling,
  ot as stringLength,
  X as swal,
  vt as swalConfirm,
  Ze as toFormData,
  Lt as toHump,
  Qe as toLine,
  lt as tooltipManual,
  q as trimObj
};
//# sourceMappingURL=plugRQw.js.map
