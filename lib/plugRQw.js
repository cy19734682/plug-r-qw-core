import { getCurrentInstance as se, defineComponent as $, resolveComponent as oe, openBlock as F, createElementBlock as I, normalizeClass as ce, normalizeStyle as M, createBlock as ue, createCommentVNode as fe, renderSlot as ee, ref as te, computed as D, withDirectives as ae, createElementVNode as B, toDisplayString as z, unref as E, createVNode as de, withCtx as pe, createTextVNode as me, vShow as be } from "vue";
import ye from "deepmerge";
import R from "axios";
import y from "lodash";
import _ from "sweetalert";
import { Modal as C } from "view-ui-plus";
const ne = {
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
}, we = /(%|)\{([0-9a-zA-Z_]+)\}/g;
function he() {
  function e(t, r) {
    return Object.prototype.hasOwnProperty.call(t, r);
  }
  function n(t, ...r) {
    return r.length === 1 && typeof r[0] == "object" && (r = r[0]), (!r || !r.hasOwnProperty) && (r = {}), t === void 0 ? "" : t.replace(we, (i, l, s, o) => {
      let c;
      return t[o - 1] === "{" && t[o + i.length] === "}" ? s : (c = e(r, s) ? r[s] : null, c ?? "");
    });
  }
  return n;
}
const ge = he();
let N = ne;
const xe = {
  zh: ne
};
let V = null, U = {}, b = null, ve = function() {
  if (Reflect.has(this, "$t"))
    return this.$t(...arguments);
  if (b && b.global)
    return b.global.t(...arguments);
  if (b && b.locale) {
    if (!U[b.locale] || V != b.locale) {
      U[b.locale] = !0;
      let e = b.getLocaleMessage(b.locale) || {}, n = {};
      ye(n, xe[b.locale], e, { clone: !0 }), N = n, b.setLocaleMessage(b.locale, n), V = b.locale;
    }
    return b.hlang(...arguments);
  }
};
const k = function(e, n) {
  let t = ve.apply(this, arguments);
  if (t != null)
    return t;
  const r = e.split(".");
  let i = N;
  for (let l = 0, s = r.length; l < s; l++) {
    const o = r[l];
    if (t = i[o], l === s - 1)
      return ge(t, n);
    if (!t)
      return "";
    i = t;
  }
  return "";
}, Oe = function(e) {
  N = e || N;
}, Se = function(e) {
  b = e;
}, P = {
  use: Oe,
  t: k,
  i18n: Se
};
function W(...e) {
  const n = se().proxy;
  return k.apply(n, e);
}
const re = /* @__PURE__ */ $({
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
    return (i, l) => {
      const s = oe("Icon");
      return F(), I("div", {
        class: ce({ headerBtCTM: !0, withIconCTM: i.icon || i.withIcon, disabled: i.disabled }),
        style: M({ color: i.color, borderLeftColor: i.borderColor }),
        onClick: r
      }, [
        i.icon ? (F(), ue(s, {
          key: 0,
          size: i.iconSize,
          type: i.icon
        }, null, 8, ["size", "type"])) : fe("", !0),
        ee(i.$slots, "default")
      ], 6);
    };
  }
}), ke = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: re
}, Symbol.toStringTag, { value: "Module" })), Ae = { class: "headerTxtAM" }, _e = { class: "contentAM" }, Ce = /* @__PURE__ */ $({
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
    let i = te(!1);
    const l = D(() => typeof r.headerFontSize == "number" ? r.headerFontSize + "px" : r.headerFontSize), s = D(() => ({ zIndex: r.zIndex }));
    function o() {
      i.value = !0, t("on-open");
    }
    function c(d) {
      i.value = !1, t("on-close", d === !0);
    }
    return n({
      open: o,
      close: c
    }), (d, f) => ae((F(), I("div", {
      class: "fullScreenPopBoxAM",
      style: M(s.value)
    }, [
      B("div", {
        class: "headerAM",
        style: M({ color: d.headerColor, backgroundColor: d.headerBg, fontSize: l.value })
      }, [
        B("span", Ae, z(d.title || E(W)("r.title")), 1),
        de(re, {
          icon: "md-return-left",
          onClick: c
        }, {
          default: pe(() => [
            me(z(E(W)("r.back")), 1)
          ]),
          _: 1
        })
      ], 4),
      B("div", _e, [
        ee(d.$slots, "default")
      ])
    ], 4)), [
      [be, E(i)]
    ]);
  }
}), Te = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ce
}, Symbol.toStringTag, { value: "Module" })), Ee = { class: "msg" }, Fe = /* @__PURE__ */ $({
  __name: "Hello",
  setup(e) {
    let n = te("Greetings from Ricky.");
    return (t, r) => (F(), I("span", Ee, z(E(n)), 1));
  }
}), Ne = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Fe
}, Symbol.toStringTag, { value: "Module" }));
let O = 0, A = document.createElement("div");
A.setAttribute("class", "spinModal");
A.innerHTML = '<div class="loader"><svg class="circular" viewBox="25 25 50 50"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10" /></svg></div>';
window.onload = function() {
  document.getElementsByTagName("body")[0].append(A);
};
function q(e) {
  e ? A.classList.add("show") : A.classList.remove("show");
}
function le(e) {
  let n = O;
  e ? O++ : O > 0 && O--, n !== O && (O === 0 ? q(!1) : n === 0 && q(!0));
}
const Pe = window.location.origin;
let S = null;
const G = (...e) => k.apply(S, e);
let w = R.create({
  baseURL: Pe,
  withCredentials: !0
  // 允许携带cookie
});
function Be() {
  console.info("store为空，请在安装插件时传入store实例：Vue.use(plugRQw,{store:store})，Pinia传{store:useStore}");
}
w.interceptors.request.use(
  (e) => e,
  (e) => Promise.reject(e)
);
function X() {
  if (w.store)
    if (typeof w.store == "function") {
      const e = w.store();
      e.logout && e.logout();
    } else
      w.store.dispatch("logout");
  else
    Be();
}
w.interceptors.response.use(
  (e) => (S && e && e.data && (e.data.code === 403 || e.data.code === 409) && S.messageBox({
    content: G("r.http." + e.data.code),
    onOk: X
  }), e),
  (e) => (S && e && e.response && (e.response.status === 403 || e.response.status === 409) && S.messageBox({
    content: G("r.http." + e.response.status),
    onOk: X
  }), console.warn("请求出错：", e), Promise.reject(e))
);
function x(e, n, t, r) {
  r && r.spin && le(!1);
  let i = !0, l = e && e.data;
  if (l) {
    t = t || [];
    for (let s of t)
      l = l[s], i = i && l;
    return i ? l : (n && console.warn(n), !1);
  }
  return n && console.warn(n), !1;
}
function Le(e, n, t, r, i, l, s) {
  return new Promise((o, c) => {
    switch (e) {
      case "get":
        w.get(n, { params: t }).then((f) => {
          let p = x(f, r, i, l);
          p ? o(p) : c(f);
        }).catch((f) => {
          x({}, r, i, l), c(f);
        });
        break;
      case "delete":
        let d = s ? "params" : "data";
        w.delete(n, { [d]: t }).then((f) => {
          let p = x(f, r, i, l);
          p ? o(p) : c(f);
        }).catch((f) => {
          x({}, r, i, l), c(f);
        });
        break;
      case "post":
        w.post(n, t, l).then((f) => {
          let p = x(f, r, i, l);
          p ? o(p) : c(f);
        }).catch((f) => {
          x({}, r, i, l), c(f);
        });
        break;
      case "put":
        w.put(n, t, l).then((f) => {
          let p = x(f, r, i, l);
          p ? o(p) : c(f);
        }).catch((f) => {
          x({}, r, i, l), c(f);
        });
        break;
    }
  });
}
function T(e, n, t = {}, r, i, l, s) {
  return new Promise((o, c) => {
    if (n) {
      l && l.spin && le(!0);
      let d = n;
      if (window && window.hasOwnProperty("g")) {
        const a = window.g;
        let g = Object.keys(a).filter((h) => h.indexOf("URL") > -1).map((h) => h.replace("URL", ""));
        for (let h of g) {
          let m = new RegExp("^/" + h + "(?=/.*$)", "i");
          if (m.test(n) && a[h + "URL"]) {
            d = a[h + "URL"] + n.replace(m, "");
            break;
          }
        }
      }
      let f;
      if (l && l.headers && l.headers["Content-Type"] === "multipart/form-data")
        f = t;
      else if (t && !y.isEmpty(t))
        if (Array.isArray(t)) {
          f = [];
          for (let a of t)
            (a || a === 0 || a === !1 || a === "" && l && !l.noEmptyStr) && f.push(a);
        } else {
          f = {};
          for (let a in t)
            t.hasOwnProperty(a) && (t[a] || t[a] === 0 || t[a] === !1 || t[a] === "" && l && !l.noEmptyStr) && (f[a] = t[a]);
        }
      let p = e.toLowerCase();
      Le(p, d, f, r, i, l, s).then((a) => {
        o(a);
      }).catch((a) => {
        c(a);
      });
    } else
      console.error("没有请求地址:url"), c("没有请求地址:url");
  });
}
const ie = {
  /**
   * @description 初始化该请求插件，单独引入的话调用一次后，方可实现spin等功能，默认在该库安装时已自动化初始化了该请求插件
   * @function
   * @param {object} store 项目中vuex的store，或pinia的useStore
   * @param app 当前vue实例
   */
  init(e, n) {
    w.store = e, S = n.config.globalProperties;
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
  post(e, n, t, r, i) {
    return new Promise((l, s) => {
      T("post", e, n, t, r, i).then((o) => {
        l(o);
      }).catch((o) => {
        s(o);
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
  put(e, n, t, r, i) {
    return new Promise((l, s) => {
      T("put", e, n, t, r, i).then((o) => {
        l(o);
      }).catch((o) => {
        s(o);
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
  get(e, n, t, r, i) {
    return new Promise((l, s) => {
      T("get", e, n, t, r, i).then((o) => {
        l(o);
      }).catch((o) => {
        s(o);
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
  delete(e, n, t, r, i, l = !0) {
    return new Promise((s, o) => {
      T("delete", e, n, t, r, i, l).then((c) => {
        s(c);
      }).catch((c) => {
        o(c);
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
  all: R.all,
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
  spread: R.spread,
  /**
   * 该请求插件暴露给外界的配置对象，为axios.create创建的实例对象，使用方法见axios官方网站
   */
  config: w
};
function H(e, n, t) {
  const r = (...i) => k.apply(this, i);
  return new Promise((i, l) => {
    if (typeof e == "object" && !Array.isArray(e)) {
      let s = r("r.confirm"), o = r("r.cancel"), c = !1, d = "swalConfirmBt", f = "swalCancelBt";
      const p = /^HTML.*Element$/;
      e.type && (e.icon = e.type) && delete e.type, e.content && (e.text = e.content) && delete e.content, e.className = e.className || "swalBoxX";
      let a = "";
      e.text && p.test(u(e.text)) ? a = "content" : e.text && u(e.text) === "String" && (a = "text"), e.buttons && (typeof e.buttons == "object" && !Array.isArray(e.buttons) ? e.buttons.cancel && (e.buttons.cancel.text && (o = e.buttons.cancel.text) && (c = !0), e.buttons.cancel.className && (f = e.buttons.cancel.className), e.buttons.confirm.text && (s = e.buttons.confirm.text), e.buttons.confirm.className && (d = e.buttons.confirm.className)) : Array.isArray(e.buttons) && (e.buttons[0] && (o = e.buttons[0], c = !0), e.buttons[1] && (s = e.buttons[1]))), _({
        title: e.title,
        icon: e.icon,
        className: e.className,
        [a]: e.text,
        buttons: {
          confirm: {
            text: s,
            value: !0,
            visible: !0,
            className: d
          },
          cancel: {
            text: o,
            value: null,
            visible: c,
            className: f
          }
        }
      }).then((g) => {
        g && typeof e.onOk == "function" && e.onOk(), i(g);
      }).catch((g) => {
        l(g);
      });
    } else if (typeof e == "string") {
      let s = "";
      if (n)
        switch (typeof n) {
          case "string":
            s = "text";
            break;
          case "object":
            s = "content";
            break;
        }
      _({
        title: e,
        [s]: n || "",
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
      }).then((o) => {
        i(o);
      }).catch((o) => {
        l(o);
      });
    } else if (typeof e == "boolean")
      !e && _.close && _.close();
    else
      throw new TypeError("swal第一个参数类型有误，仅支持Object/String/false");
  });
}
function u(e) {
  return Object.prototype.toString.call(e).replace(/\[object |]/g, "");
}
function Ye(e) {
  return e.replace(/_(\w)/g, function(n, t) {
    return t.toUpperCase();
  });
}
function Ke(e) {
  return e.replace(/([A-Z])/g, "_$1").toLowerCase();
}
function Z(e) {
  let n = u(e);
  if (n === "Object") {
    for (let t in e)
      if (e.hasOwnProperty(t)) {
        let r = u(e[t]);
        r === "String" ? e[t] = e[t].trim() : (r === "Object" || r === "Array") && Z(e[t]);
      }
  } else if (n === "Array")
    for (let t = 0, r = e.length; t < r; t++) {
      let i = u(e[t]);
      i === "String" ? e[t] = e[t].trim() : (i === "Array" || i === "Object") && Z(e[t]);
    }
  return e;
}
function J(e, n = []) {
  if (u(e) === "Array")
    return e.forEach((t, r) => {
      switch (u(t)) {
        case "Array":
        case "Object":
          J(t);
          break;
        default:
          e[r] = null;
      }
    }), e;
  if (u(e) === "Object") {
    for (let t in e)
      if (e.hasOwnProperty(t)) {
        let r = !0;
        for (let i of n)
          if (i === t) {
            r = !1;
            break;
          }
        if (r)
          switch (u(e[t])) {
            case "Array":
            case "Object":
              J(e[t]);
              break;
            default:
              e[t] = null;
          }
      }
    return e;
  } else
    return e;
}
function et(e) {
  let n = document.createElement("div");
  return n.textContent !== void 0 ? n.textContent = e : n.innerText = e, n.innerHTML;
}
function tt(e) {
  let n = document.createElement("div");
  return n.innerHTML = e, n.innerText || n.textContent;
}
function nt(e) {
  return new Promise((n) => {
    let t = new FileReader();
    t.readAsDataURL(e), t.onloadend = () => {
      n(t.result);
    };
  });
}
function Me(e) {
  return e.split(".").pop().toLocaleLowerCase();
}
function rt(e) {
  return u(e) === "String" && e.indexOf("image") > -1;
}
function lt(e) {
  const n = Me(e);
  let t = "ios-document-outline";
  return ["gif", "jpg", "jpeg", "png", "bmp", "webp"].indexOf(n) > -1 ? t = "ios-image" : ["mp4", "m3u8", "rmvb", "avi", "swf", "3gp", "mkv", "flv"].indexOf(n) > -1 ? t = "ios-film" : ["mp3", "wav", "wma", "ogg", "aac", "flac"].indexOf(n) > -1 ? t = "ios-musical-notes" : ["doc", "txt", "docx", "pages", "epub", "pdf"].indexOf(n) > -1 ? t = "md-document" : ["numbers", "csv", "xls", "xlsx"].indexOf(n) > -1 ? t = "ios-stats" : ["keynote", "ppt", "pptx"].indexOf(n) > -1 && (t = "ios-videocam"), t;
}
function it(e, n) {
  let t = document.createElement("a");
  t.href = n, t.download = e, ze(t);
}
function ze(e) {
  let n = document.createEvent("MouseEvents");
  n.initMouseEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), e.dispatchEvent(n);
}
const st = {
  headers: {
    "Content-Type": "multipart/form-data"
  }
};
function ot(e) {
  let n = new FormData();
  for (let t in e)
    e.hasOwnProperty(t) && e[t] !== null && n.append(t, e[t]);
  return n;
}
function Q({
  group: e,
  condition: n,
  pathKey: t,
  childKey: r = "children",
  path: i = []
}) {
  if (e && y.isObject(e)) {
    if (y.isFunction(n)) {
      if (y.isPlainObject(e)) {
        let l = e, s = y.cloneDeep(i);
        if (n(l))
          return t && l[t] && s.push(l[t]), s;
        if (l[r] && !y.isEmpty(l[r])) {
          t && l[t] && s.push(l[t]);
          let o = Q({
            group: l[r],
            condition: n,
            pathKey: t,
            childKey: r,
            path: s
          });
          if (!y.isEmpty(o))
            return o;
        }
      } else if (Array.isArray(e))
        for (let l of e) {
          let s = y.cloneDeep(i);
          if (n(l))
            return t && l[t] ? s.push(l[t]) : s.push(String(e.indexOf(l))), s;
          if (l[r] && l[r].length > 0) {
            t && l[t] ? s.push(l[t]) : s.push(String(e.indexOf(l)));
            let o = Q({
              group: l[r],
              condition: n,
              pathKey: t,
              childKey: r,
              path: s
            });
            if (!y.isEmpty(o))
              return o;
          }
        }
    } else if (Array.isArray(e))
      for (let l of e) {
        let s = y.cloneDeep(i);
        if (l === n)
          return s.push(String(e.indexOf(l))), s;
      }
  }
  return [];
}
function ct(e, n, t = !1) {
  if (!e || !n)
    return !1;
  let r, i = "notFoundC", l = function(s, o) {
    if (Array.isArray(s)) {
      if (u(o) === "Function" && o(s))
        return i = s, [];
      for (let c of s) {
        if (i !== "notFoundC")
          break;
        if (u(o) === "Function" && o(c) || c === o)
          return i = c, [s.indexOf(c)];
        if (u(c) === "Array" || u(c) === "Object") {
          let d = l(c, o);
          if (d !== void 0)
            return [s.indexOf(c), ...d];
        }
      }
    } else if (u(s) === "Object") {
      if (u(o) === "Function" && o(s))
        return i = s, [];
      for (let c in s) {
        if (i !== "notFoundC")
          break;
        if (s.hasOwnProperty(c)) {
          if (u(o) === "Function" && o(c) || s[c] === o)
            return i = s[c], [c];
          if (u(s[c]) === "Object" || u(s[c]) === "Array") {
            let d = l(s[c], o);
            if (d !== void 0)
              return [c, ...d];
          }
        }
      }
    }
  };
  return r = l(e, n), t ? r || !1 : i === "notFoundC" ? !1 : i;
}
function ut(e, n) {
  for (let t = 0, r = n.length; t < r; t++)
    if (e === n[t])
      return !0;
  return !1;
}
function ft(e, n = 2) {
  let t = new RegExp("(^-?d+.d{" + n + "})(d+$)"), r = e && String(e) || "";
  return t.test(r) ? Number(r.replace(t, "$1")) : e;
}
function Re(e, n = {}, t = "get") {
  let r = document.createElement("form"), i = document.getElementsByTagName("body")[0];
  i.appendChild(r), r.setAttribute("style", "display:none"), r.setAttribute("target", ""), r.setAttribute("method", t);
  let l = e;
  if (window && window.hasOwnProperty("g")) {
    let s = Object.keys(window.g).filter((o) => o.indexOf("URL") > -1).map((o) => o.replace("URL", ""));
    for (let o of s) {
      let c = new RegExp("^/" + o + "(?=/.*$)", "i");
      if (c.test(e) && window.g[o + "URL"]) {
        l = window.g[o + "URL"] + e.replace(c, "");
        break;
      }
    }
  }
  if (r.setAttribute("action", l), y.isPlainObject(n)) {
    for (let o in n)
      if (n.hasOwnProperty(o) && (n[o] || n[o] === 0 || n[o] === !1 || n[o] === "")) {
        let c = document.createElement("input");
        c.setAttribute("type", "hidden"), c.setAttribute("name", o), c.setAttribute("value", n[o]), r.appendChild(c);
      }
    r.submit();
    let s = setTimeout(() => {
      i.removeChild(r), clearTimeout(s), s = null;
    }, 8e3);
  } else
    console.error("请求数据格式有误，无法下载文件");
}
function at(e, n = {}, t = "get") {
  if (n.hasOwnProperty("columns") && (n.columns === "" || n.columns === null || n.columns === void 0)) {
    H.call(this, {
      title: "需要导出的列不能为空",
      type: "warning"
    });
    return;
  }
  Re(e, n, t);
}
function dt(e, n, t = !1) {
  let r;
  if (e && u(n) === "Array") {
    let i = localStorage.getItem(e);
    if (i) {
      let l = JSON.parse(decodeURI(i));
      r = n.filter((s) => s.key && l.indexOf(s.title) !== -1).map((s) => s.key);
    } else
      r = n.map((l) => l.key);
  } else
    r = [];
  return t || (r = String(r)), r;
}
function v(e) {
  return e != null && e !== "";
}
function pt(e) {
  return /^-?\d+(.\d+)?$/.test(e);
}
function mt(e, n = !1, t = "") {
  return function(r, i) {
    let l;
    if (Array.isArray(e)) {
      let c = [];
      for (let d of e)
        v(i.row[d]) && c.push(i.row[d]);
      l = c.join(t);
    } else
      typeof e == "function" ? l = e(i) : l = i.row[e];
    let s = je(l), o = i.column._width;
    return l && s > o ? r(
      "Tooltip",
      {
        style: {
          width: "100%"
        },
        props: {
          content: l,
          maxWidth: o * 2
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
    ) : r("span", n && !v(l) ? "--" : l);
  };
}
function je(e, n = 12) {
  if (u(e) === "String" && e.length > 0) {
    let t = document.createElement("span");
    t.style.fontSize = n + "px", t.style.fontFamily = "inherit", t.innerHTML = e, t.style.opacity = "0", t.style.position = "fixed", t.style.top = "3000px", document.body.append(t);
    const r = t.clientWidth;
    return document.body.removeChild(t), r;
  }
  return 0;
}
function bt(e) {
  if (y.isPlainObject(e)) {
    for (let n in e)
      if (e.hasOwnProperty(n) && v(e[n]))
        return !1;
    return !0;
  } else if (Array.isArray(e)) {
    for (let n of e)
      if (v(n))
        return !1;
    return !0;
  }
  return !v(e);
}
function yt(e) {
  return u(e) === "String" ? e.replace(/[^\x00-\xff]/g, "01").length : u(e) === "Number" ? (e += "", e.replace(/[^\x00-\xff]/g, "01").length) : 0;
}
function $e({
  group: e,
  condition: n,
  key: t,
  val: r,
  childKey: i = "children"
}) {
  if (u(e) !== "Array" || u(n) !== "Function" || u(t) !== "String" || u(i) !== "String")
    return !1;
  e.forEach((l) => {
    n(l) && (u(r) === "Function" ? l[t] = r(l[t]) : l[t] = r), u(l[i]) === "Array" && l[i].length > 0 && $e({
      group: l[i],
      condition: n,
      key: t,
      val: r,
      childKey: i
    });
  });
}
function wt(e) {
  let n = sessionStorage.getItem("btnPermissions");
  return n ? n.split(",").indexOf(e) > -1 : !1;
}
function ht(e) {
  return e === "" ? null : e;
}
function Ie(e) {
  return u(e) === "Number" && String(e) === "NaN";
}
function gt(e, n, t) {
  if (u(e) !== "Object")
    return e;
  let r = Object.assign(e, {}), i = "";
  for (let l in r)
    if (r.hasOwnProperty(l)) {
      let s = r[l];
      s === void 0 || s === "" || u(s) === "String" && s.trim() === "" || s === null || Ie(s) ? t ? n ? i += l + "=&" : r[l] = "" : delete r[l] : n && (i += l + "=" + s + "&");
    }
  return n ? i.length > 0 ? i.substr(0, i.length - 1) : "" : r;
}
function xt(e) {
  e = e || window.Event, e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0;
}
function Y(e) {
  let n = {};
  if (Array.isArray(e)) {
    n = [];
    for (let t of e)
      Array.isArray(t) || y.isPlainObject(t) ? n.push(Y(t)) : v(t) && n.push(t);
  } else if (y.isPlainObject(e))
    for (let t in e)
      e.hasOwnProperty(t) && (Array.isArray(e[t]) || y.isPlainObject(e[t]) ? n[t] = Y(e[t]) : v(e[t]) && (n[t] = e[t]));
  return n;
}
function vt(e) {
  const n = window.open();
  if (n) {
    n.document.write(e);
    let t = setTimeout(() => {
      n.print(), window.clearTimeout(t), t = null;
    }, 10);
  }
}
function Ot(e) {
  let n = [], t = e;
  for (; e.previousSibling && (e = e.previousSibling); )
    e.nodeType === 1 && n.push(e);
  for (; t.nextSibling && (t = t.nextSibling); )
    t.nodeType === 1 && n.push(t);
  return n;
}
function He({
  height: e,
  width: n = 416,
  title: t,
  content: r,
  onOk: i,
  onCancel: l,
  okText: s,
  cancelText: o,
  noWarnIcon: c,
  footerAlign: d,
  cancelBt: f
}) {
  const p = (...m) => k.apply(this, m);
  let g = (e && Number(e) - 90 > 100 ? Number(e) - 90 + "px" : 0) || "100px";
  r = r || p("r.info.text");
  let h = u(r) === "String";
  C.warning({
    width: n,
    footerHide: !0,
    render: (m) => m(
      "div",
      {
        class: "customMessageBox",
        style: {
          height: g
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
                m("span", t || p("r.info.title")),
                m(
                  "Button",
                  {
                    class: "fr closeN ivu-btn ivu-btn-text",
                    type: "text",
                    onclick() {
                      C.remove();
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
                  textAlign: h ? "center" : "left"
                }
              },
              [
                m("i", {
                  class: h && !c ? "ivu-icon ivu-icon-ios-alert-outline" : "hide",
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
                  textAlign: d || "center"
                }
              },
              [
                m(
                  "Button",
                  {
                    class: "okBtN ivu-btn ivu-btn-default",
                    onclick() {
                      C.remove(), i && u(i) === "Function" && i();
                    }
                  },
                  [
                    m("i", {
                      class: "ivu-load-loop ivu-icon ivu-icon-ios-loading"
                    }),
                    m("span", s || p("r.confirm"))
                  ]
                ),
                m(
                  "Button",
                  {
                    class: ["cancelBtN ivu-btn ivu-btn-default", !f && "hide"],
                    onclick() {
                      C.remove(), u(l) === "Function" && l && l();
                    }
                  },
                  o || p("r.cancel")
                )
              ]
            )
          ]
        )
      ]
    )
  });
}
function De(e, n, t, r) {
  const i = (...l) => k.apply(this, l);
  H.call(this, {
    title: e || i("r.info.title"),
    text: n || i("r.info.text"),
    icon: t || "warning",
    onOk: r,
    buttons: [i("r.cancel")]
  });
}
const L = /* @__PURE__ */ Object.assign({ "./components/FullPop/FullPop.vue": Te, "./components/HeaderBt/HeaderBt.vue": ke, "./components/Hello.vue": Ne });
let j = {};
for (const e in L)
  if (L.hasOwnProperty(e)) {
    const n = e.replace(/^\.\/.*\/(\w*)\/.*\.vue$|^\.\/.*\/(\w*)\.vue$/, "$1$2");
    j[n] = L[e].default;
  }
const K = {
  $fetch: ie,
  $swal: H,
  $swalConfirm: De,
  messageBox: He
}, Ve = function(e, n = {}) {
  ie.init(n.useStore || n.store, e), n.locale && P.use(n.locale), n.i18n && P.i18n(n.i18n), Object.keys(j).forEach((t) => {
    e.component(t, j[t]);
  }), Object.keys(K).forEach((t) => {
    e.config.globalProperties[t] = K[t];
  });
}, Ue = P.use, We = P.i18n, St = {
  locale: Ue,
  i18n: We,
  install: Ve
};
export {
  J as clearObj,
  gt as dataFilterOrToUrl,
  ft as decimalDigitsLimit,
  St as default,
  Re as downloadFileByFormSubmit,
  it as downloadFileReaderFile,
  ht as emptyInput,
  ze as fakeALinkClick,
  ie as fetch,
  at as fileExport,
  ct as findCollection,
  Q as findPath,
  st as formDataHeadConfig,
  dt as getColumnsKeys,
  nt as getFileSrc,
  Me as getFileTypeByName,
  lt as getFileTypeIconByName,
  je as getStringWidth,
  wt as hasPermission,
  tt as htmlDecode,
  et as htmlEncode,
  vt as htmlPrint,
  bt as isEmptyValue,
  rt as isImgByFile,
  Ie as isNaN,
  pt as isNumberValue,
  v as isValidValue,
  He as messageBox,
  u as myTypeof,
  ut as oneOf,
  Y as removeEmptyValue,
  $e as setValByOption,
  Ot as siblingElems,
  xt as stopBubbling,
  yt as stringLength,
  H as swal,
  De as swalConfirm,
  ot as toFormData,
  Ye as toHump,
  Ke as toLine,
  mt as tooltipManual,
  Z as trimObj
};
