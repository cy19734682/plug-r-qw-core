import { getCurrentInstance as ee, defineComponent as P, resolveComponent as te, openBlock as T, createElementBlock as R, normalizeClass as le, normalizeStyle as F, createBlock as ne, createCommentVNode as oe, renderSlot as X, ref as Q, computed as I, withDirectives as se, createElementVNode as O, toDisplayString as $, unref as C, createVNode as re, withCtx as ce, createTextVNode as ae, vShow as ie } from "vue";
import ue from "deepmerge";
import { Modal as S } from "view-ui-plus";
import fe from "lodash";
import B from "sweetalert";
import E from "axios";
const Y = {
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
}, de = /(%|)\{([0-9a-zA-Z_]+)\}/g;
function pe() {
  function e(t, n) {
    return Object.prototype.hasOwnProperty.call(t, n);
  }
  function l(t, ...n) {
    return n.length === 1 && typeof n[0] == "object" && (n = n[0]), (!n || !n.hasOwnProperty) && (n = {}), t === void 0 ? "" : t.replace(de, (o, s, c, r) => {
      let i;
      return t[r - 1] === "{" && t[r + o.length] === "}" ? c : (i = e(n, c) ? n[c] : null, i ?? "");
    });
  }
  return l;
}
const me = pe();
let z = Y;
const be = {
  zh: Y
};
let j = null, H = {}, m = null, he = function() {
  if (Reflect.has(this, "$t"))
    return this.$t(...arguments);
  if (m && m.global)
    return m.global.t(...arguments);
  if (m && m.locale) {
    if (!H[m.locale] || j != m.locale) {
      H[m.locale] = !0;
      let e = m.getLocaleMessage(m.locale) || {}, l = {};
      ue(l, be[m.locale], e, { clone: !0 }), z = l, m.setLocaleMessage(m.locale, l), j = m.locale;
    }
    return m.hlang(...arguments);
  }
};
const _ = function(e, l) {
  let t = he.apply(this, arguments);
  if (t != null)
    return t;
  const n = e.split(".");
  let o = z;
  for (let s = 0, c = n.length; s < c; s++) {
    const r = n[s];
    if (t = o[r], s === c - 1)
      return me(t, l);
    if (!t)
      return "";
    o = t;
  }
  return "";
}, ye = function(e) {
  z = e || z;
}, we = function(e) {
  m = e;
}, M = {
  use: ye,
  t: _,
  i18n: we
};
function V(...e) {
  const l = ee().proxy;
  return _.apply(l, e);
}
const Z = /* @__PURE__ */ P({
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
  setup(e, { emit: l }) {
    const t = e;
    function n() {
      t.disabled || l("click");
    }
    return (o, s) => {
      const c = te("Icon");
      return T(), R("div", {
        class: le({ headerBtCTM: !0, withIconCTM: o.icon || o.withIcon, disabled: o.disabled }),
        style: F({ color: o.color, borderLeftColor: o.borderColor }),
        onClick: n
      }, [
        o.icon ? (T(), ne(c, {
          key: 0,
          size: o.iconSize,
          type: o.icon
        }, null, 8, ["size", "type"])) : oe("", !0),
        X(o.$slots, "default")
      ], 6);
    };
  }
}), ve = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Z
}, Symbol.toStringTag, { value: "Module" })), ge = { class: "headerTxtAM" }, _e = { class: "contentAM" }, xe = /* @__PURE__ */ P({
  __name: "FullPop",
  props: {
    title: {},
    headerColor: {},
    headerBg: {},
    headerFontSize: { default: 12 },
    zIndex: { default: 1e3 }
  },
  emits: ["on-open", "on-close"],
  setup(e, { expose: l, emit: t }) {
    const n = e;
    let o = Q(!1);
    const s = I(() => typeof n.headerFontSize == "number" ? n.headerFontSize + "px" : n.headerFontSize), c = I(() => ({ zIndex: n.zIndex }));
    function r() {
      o.value = !0, t("on-open");
    }
    function i(p) {
      o.value = !1, t("on-close", p === !0);
    }
    return l({
      open: r,
      close: i
    }), (p, a) => se((T(), R("div", {
      class: "fullScreenPopBoxAM",
      style: F(c.value)
    }, [
      O("div", {
        class: "headerAM",
        style: F({ color: p.headerColor, backgroundColor: p.headerBg, fontSize: s.value })
      }, [
        O("span", ge, $(p.title || C(V)("r.title")), 1),
        re(Z, {
          icon: "md-return-left",
          onClick: i
        }, {
          default: ce(() => [
            ae($(C(V)("r.back")), 1)
          ]),
          _: 1
        })
      ], 4),
      O("div", _e, [
        X(p.$slots, "default")
      ])
    ], 4)), [
      [ie, C(o)]
    ]);
  }
}), ke = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: xe
}, Symbol.toStringTag, { value: "Module" })), Se = { class: "msg" }, Be = /* @__PURE__ */ P({
  __name: "Hello",
  setup(e) {
    let l = Q("Greetings from Ricky.");
    return (t, n) => (T(), R("span", Se, $(C(l)), 1));
  }
}), Ne = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Be
}, Symbol.toStringTag, { value: "Module" }));
function J(e, l, t) {
  const n = (...o) => _.apply(this, o);
  return new Promise((o, s) => {
    if (typeof e == "object" && !Array.isArray(e)) {
      let c = n("r.confirm"), r = n("r.cancel"), i = !1, p = "swalConfirmBt", a = "swalCancelBt";
      const f = /^HTML.*Element$/;
      e.type && (e.icon = e.type) && delete e.type, e.content && (e.text = e.content) && delete e.content, e.className = e.className || "swalBoxX";
      let u = "";
      e.text && f.test(x(e.text)) ? u = "content" : e.text && x(e.text) === "String" && (u = "text"), e.buttons && (typeof e.buttons == "object" && !Array.isArray(e.buttons) ? e.buttons.cancel && (e.buttons.cancel.text && (r = e.buttons.cancel.text) && (i = !0), e.buttons.cancel.className && (a = e.buttons.cancel.className), e.buttons.confirm.text && (c = e.buttons.confirm.text), e.buttons.confirm.className && (p = e.buttons.confirm.className)) : Array.isArray(e.buttons) && (e.buttons[0] && (r = e.buttons[0], i = !0), e.buttons[1] && (c = e.buttons[1]))), B({
        title: e.title,
        icon: e.icon,
        className: e.className,
        [u]: e.text,
        buttons: {
          confirm: {
            text: c,
            value: !0,
            visible: !0,
            className: p
          },
          cancel: {
            text: r,
            value: null,
            visible: i,
            className: a
          }
        }
      }).then((y) => {
        y && typeof e.onOk == "function" && e.onOk(), o(y);
      }).catch((y) => {
        s(y);
      });
    } else if (typeof e == "string") {
      let c = "";
      if (l)
        switch (typeof l) {
          case "string":
            c = "text";
            break;
          case "object":
            c = "content";
            break;
        }
      B({
        title: e,
        [c]: l || "",
        icon: t || "",
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
      }).then((r) => {
        o(r);
      }).catch((r) => {
        s(r);
      });
    } else if (typeof e == "boolean")
      !e && B.close && B.close();
    else
      throw new TypeError("swal第一个参数类型有误，仅支持Object/String/false");
  });
}
function x(e) {
  return Object.prototype.toString.call(e).replace(/\[object |]/g, "");
}
function Ce({
  height: e,
  width: l = 416,
  title: t,
  content: n,
  onOk: o,
  onCancel: s,
  okText: c,
  cancelText: r,
  noWarnIcon: i,
  footerAlign: p,
  cancelBt: a
}) {
  const f = (...d) => _.apply(this, d);
  let y = (e && Number(e) - 90 > 100 ? Number(e) - 90 + "px" : 0) || "100px";
  n = n || f("r.info.text");
  let h = x(n) === "String";
  S.warning({
    width: l,
    footerHide: !0,
    render: (d) => d(
      "div",
      {
        class: "customMessageBox",
        style: {
          height: y
        }
      },
      [
        d(
          "div",
          {
            class: "containerN"
          },
          [
            d(
              "div",
              {
                class: "titleN"
              },
              [
                d("span", t || f("r.info.title")),
                d(
                  "Button",
                  {
                    class: "fr closeN ivu-btn ivu-btn-text",
                    type: "text",
                    onclick() {
                      S.remove();
                    }
                  },
                  [
                    d("i", {
                      class: "ivu-icon ivu-icon-ios-close",
                      style: {
                        fontSize: "30px"
                      }
                    })
                  ]
                )
              ]
            ),
            d(
              "div",
              {
                class: "contentN",
                style: {
                  textAlign: h ? "center" : "left"
                }
              },
              [
                d("i", {
                  class: h && !i ? "ivu-icon ivu-icon-ios-alert-outline" : "hide",
                  style: {
                    fontSize: "60px",
                    color: "#f8bb86"
                  }
                }),
                d("div", { class: "msgBoxConO" }, n)
              ]
            ),
            d(
              "div",
              {
                class: "footerN",
                style: {
                  textAlign: p || "center"
                }
              },
              [
                d(
                  "Button",
                  {
                    class: "okBtN ivu-btn ivu-btn-default",
                    onclick() {
                      S.remove(), o && x(o) === "Function" && o();
                    }
                  },
                  [
                    d("i", {
                      class: "ivu-load-loop ivu-icon ivu-icon-ios-loading"
                    }),
                    d("span", c || f("r.confirm"))
                  ]
                ),
                d(
                  "Button",
                  {
                    class: ["cancelBtN ivu-btn ivu-btn-default", !a && "hide"],
                    onclick() {
                      S.remove(), x(s) === "Function" && s && s();
                    }
                  },
                  r || f("r.cancel")
                )
              ]
            )
          ]
        )
      ]
    )
  });
}
let v = 0, k = document.createElement("div");
k.setAttribute("class", "spinModal");
k.innerHTML = '<div class="loader"><svg class="circular" viewBox="25 25 50 50"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10" /></svg></div>';
window.onload = function() {
  document.getElementsByTagName("body")[0].append(k);
};
function U(e) {
  e ? k.classList.add("show") : k.classList.remove("show");
}
function K(e) {
  let l = v;
  e ? v++ : v > 0 && v--, l !== v && (v === 0 ? U(!1) : l === 0 && U(!0));
}
const Te = window.location.origin;
let g = null;
const q = (...e) => _.apply(g, e);
let b = E.create({
  baseURL: Te,
  withCredentials: !0
  // 允许携带cookie
});
function ze() {
  console.info("store为空，请在安装插件时传入store实例：Vue.use(plugRQw,{store:store})，Pinia传{store:useStore}");
}
b.interceptors.request.use(
  (e) => e,
  (e) => Promise.reject(e)
);
function D() {
  if (b.store)
    if (typeof b.store == "function") {
      const e = b.store();
      e.logout && e.logout();
    } else
      b.store.dispatch("logout");
  else
    ze();
}
b.interceptors.response.use(
  (e) => (g && e && e.data && (e.data.code === 403 || e.data.code === 409) && g.messageBox({
    content: q("r.http." + e.data.code),
    onOk: D
  }), e),
  (e) => (g && e && e.response && (e.response.status === 403 || e.response.status === 409) && g.messageBox({
    content: q("r.http." + e.response.status),
    onOk: D
  }), console.warn("请求出错：", e), Promise.reject(e))
);
function w(e, l, t, n) {
  n && n.spin && K(!1);
  let o = !0, s = e && e.data;
  if (s) {
    t = t || [];
    for (let c of t)
      s = s[c], o = o && s;
    return o ? s : (l && console.warn(l), !1);
  }
  return l && console.warn(l), !1;
}
function Me(e, l, t, n, o, s, c) {
  return new Promise((r, i) => {
    switch (e) {
      case "get":
        b.get(l, { params: t }).then((a) => {
          let f = w(a, n, o, s);
          f ? r(f) : i(a);
        }).catch((a) => {
          w({}, n, o, s), i(a);
        });
        break;
      case "delete":
        let p = c ? "params" : "data";
        b.delete(l, { [p]: t }).then((a) => {
          let f = w(a, n, o, s);
          f ? r(f) : i(a);
        }).catch((a) => {
          w({}, n, o, s), i(a);
        });
        break;
      case "post":
        b.post(l, t, s).then((a) => {
          let f = w(a, n, o, s);
          f ? r(f) : i(a);
        }).catch((a) => {
          w({}, n, o, s), i(a);
        });
        break;
      case "put":
        b.put(l, t, s).then((a) => {
          let f = w(a, n, o, s);
          f ? r(f) : i(a);
        }).catch((a) => {
          w({}, n, o, s), i(a);
        });
        break;
    }
  });
}
function N(e, l, t = {}, n, o, s, c) {
  return new Promise((r, i) => {
    if (l) {
      s && s.spin && K(!0);
      let p = l;
      if (window && window.hasOwnProperty("g")) {
        const u = window.g;
        let y = Object.keys(u).filter((h) => h.indexOf("URL") > -1).map((h) => h.replace("URL", ""));
        for (let h of y) {
          let d = new RegExp("^/" + h + "(?=/.*$)", "i");
          if (d.test(l) && u[h + "URL"]) {
            p = u[h + "URL"] + l.replace(d, "");
            break;
          }
        }
      }
      let a;
      if (s && s.headers && s.headers["Content-Type"] === "multipart/form-data")
        a = t;
      else if (t && !fe.isEmpty(t))
        if (Array.isArray(t)) {
          a = [];
          for (let u of t)
            (u || u === 0 || u === !1 || u === "" && s && !s.noEmptyStr) && a.push(u);
        } else {
          a = {};
          for (let u in t)
            t.hasOwnProperty(u) && (t[u] || t[u] === 0 || t[u] === !1 || t[u] === "" && s && !s.noEmptyStr) && (a[u] = t[u]);
        }
      let f = e.toLowerCase();
      Me(f, p, a, n, o, s, c).then((u) => {
        r(u);
      }).catch((u) => {
        i(u);
      });
    } else
      console.error("没有请求地址:url"), i("没有请求地址:url");
  });
}
const W = {
  /**
   * @description 初始化该请求插件，单独引入的话调用一次后，方可实现spin等功能，默认在该库安装时已自动化初始化了该请求插件
   * @function
   * @param {object} store 项目中vuex的store，或pinia的useStore
   * @param app 当前vue实例
   */
  init(e, l) {
    b.store = e, g = l.config.globalProperties;
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
  post(e, l, t, n, o) {
    return new Promise((s, c) => {
      N("post", e, l, t, n, o).then((r) => {
        s(r);
      }).catch((r) => {
        c(r);
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
  put(e, l, t, n, o) {
    return new Promise((s, c) => {
      N("put", e, l, t, n, o).then((r) => {
        s(r);
      }).catch((r) => {
        c(r);
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
  get(e, l, t, n, o) {
    return new Promise((s, c) => {
      N("get", e, l, t, n, o).then((r) => {
        s(r);
      }).catch((r) => {
        c(r);
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
  delete(e, l, t, n, o, s = !0) {
    return new Promise((c, r) => {
      N("delete", e, l, t, n, o, s).then((i) => {
        c(i);
      }).catch((i) => {
        r(i);
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
  all: E.all,
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
  spread: E.spread,
  /**
   * 该请求插件暴露给外界的配置对象，为axios.create创建的实例对象，使用方法见axios官方网站
   */
  config: b
};
function Oe(e, l, t, n) {
  const o = (...s) => _.apply(this, s);
  J.call(this, {
    title: e || o("r.info.title"),
    text: l || o("r.info.text"),
    icon: t || "warning",
    onOk: n,
    buttons: [o("r.cancel")]
  });
}
const A = /* @__PURE__ */ Object.assign({ "./components/FullPop/FullPop.vue": ke, "./components/HeaderBt/HeaderBt.vue": ve, "./components/Hello.vue": Ne });
let L = {};
for (const e in A)
  if (A.hasOwnProperty(e)) {
    const l = e.replace(/^\.\/.*\/(\w*)\/.*\.vue$|^\.\/.*\/(\w*)\.vue$/, "$1$2");
    L[l] = A[e].default;
  }
const G = {
  $fetch: W,
  $swal: J,
  $swalConfirm: Oe,
  messageBox: Ce
}, Ae = function(e, l = {}) {
  W.init(l.useStore || l.store, e), l.locale && M.use(l.locale), l.i18n && M.i18n(l.i18n), Object.keys(L).forEach((t) => {
    e.component(t, L[t]);
  }), Object.keys(G).forEach((t) => {
    e.config.globalProperties[t] = G[t];
  });
}, Fe = M.use, $e = M.i18n, He = {
  locale: Fe,
  i18n: $e,
  install: Ae
};
export {
  He as default,
  W as fetch,
  Ce as messageBox,
  J as swal,
  Oe as swalConfirm
};
