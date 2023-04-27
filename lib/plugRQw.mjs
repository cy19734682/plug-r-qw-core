import { defineComponent as y, ref as w, openBlock as j, createElementBlock as _, toDisplayString as M, unref as O } from "vue";
const A = { class: "msg" }, x = /* @__PURE__ */ y({
  __name: "Hello",
  setup(e) {
    let n = w("Greetings from Ricky.");
    return (t, r) => (j(), _("span", A, M(O(n)), 1));
  }
}), S = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: x
}, Symbol.toStringTag, { value: "Module" })), h = {
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
};
var E = function(n) {
  return k(n) && !R(n);
};
function k(e) {
  return !!e && typeof e == "object";
}
function R(e) {
  var n = Object.prototype.toString.call(e);
  return n === "[object RegExp]" || n === "[object Date]" || $(e);
}
var T = typeof Symbol == "function" && Symbol.for, q = T ? Symbol.for("react.element") : 60103;
function $(e) {
  return e.$$typeof === q;
}
function z(e) {
  return Array.isArray(e) ? [] : {};
}
function p(e, n) {
  return n.clone !== !1 && n.isMergeableObject(e) ? s(z(e), e, n) : e;
}
function F(e, n, t) {
  return e.concat(n).map(function(r) {
    return p(r, t);
  });
}
function H(e, n, t) {
  var r = {};
  return t.isMergeableObject(e) && Object.keys(e).forEach(function(o) {
    r[o] = p(e[o], t);
  }), Object.keys(n).forEach(function(o) {
    !t.isMergeableObject(n[o]) || !e[o] ? r[o] = p(n[o], t) : r[o] = s(e[o], n[o], t);
  }), r;
}
function s(e, n, t) {
  t = t || {}, t.arrayMerge = t.arrayMerge || F, t.isMergeableObject = t.isMergeableObject || E;
  var r = Array.isArray(n), o = Array.isArray(e), i = r === o;
  return i ? r ? t.arrayMerge(e, n, t) : H(e, n, t) : p(n, t);
}
s.all = function(n, t) {
  if (!Array.isArray(n))
    throw new Error("first argument should be an array");
  return n.reduce(function(r, o) {
    return s(r, o, t);
  }, {});
};
var I = s;
const L = /(%|)\{([0-9a-zA-Z_]+)\}/g;
function D() {
  function e(t, r) {
    return Object.prototype.hasOwnProperty.call(t, r);
  }
  function n(t, ...r) {
    return r.length === 1 && typeof r[0] == "object" && (r = r[0]), (!r || !r.hasOwnProperty) && (r = {}), t === void 0 ? "" : t.replace(L, (o, i, c, a) => {
      let u;
      return t[a - 1] === "{" && t[a + o.length] === "}" ? c : (u = e(r, c) ? r[c] : null, u ?? "");
    });
  }
  return n;
}
const N = D();
let d = h;
const P = {
  zh: h
};
let v = null, b = {}, l = null, B = function() {
  if (Reflect.has(this, "$t"))
    return this.$t(...arguments);
  if (l && l.global)
    return l.global.t(...arguments);
  if (l && l.locale) {
    if (!b[l.locale] || v != l.locale) {
      b[l.locale] = !0;
      let e = l.getLocaleMessage(l.locale) || {}, n = {};
      I(n, P[l.locale], e), d = n, l.setLocaleMessage(l.locale, n), v = l.locale;
    }
    return l.hlang(...arguments);
  }
};
const C = function(e, n) {
  let t = B.apply(this, arguments);
  if (t != null)
    return t;
  const r = e.split(".");
  let o = d;
  for (let i = 0, c = r.length; i < c; i++) {
    const a = r[i];
    if (t = o[a], i === c - 1)
      return N(t, n);
    if (!t)
      return "";
    o = t;
  }
  return "";
}, V = function(e) {
  d = e || d;
}, G = function(e) {
  l = e;
}, f = {
  use: V,
  t: C,
  i18n: G
}, U = "@zhangqingcq/plug-r-qw", J = "2.0.0", Q = "A JS lib base on Vue@3.x and view-ui-plus, you can achieve some complex functions with simple code after install this lib.", Y = "/lib/plugRQw.umd.js", Z = "types/index.d.ts", K = [
  "lib",
  "src",
  "types"
], W = {
  dev: "vite",
  build: "vite build && gulp",
  preview: "vite preview",
  "node-serve": "node node-serve/index.js",
  "node-serve-dev": "nodemon node-serve/index.js"
}, X = {
  type: "git",
  url: "git+https://github.com/RickyHeaven/plug-r-qw-core.git"
}, ee = [
  "vue",
  "view-ui-plus",
  "vue-router",
  "pinia",
  "sweetalert",
  "lodash",
  "axios",
  "echarts",
  "moment",
  "wangeditor",
  "xss",
  "js-cookie",
  "iview-area",
  "ar-cascader",
  "vue-amap",
  "vue-json-viewer",
  "qw",
  "ricky",
  "zhangqingcq"
], ne = "RickyHeaven", te = "MIT", re = {
  url: "https://github.com/RickyHeaven/plug-r-qw-core/issues"
}, oe = "https://github.com/RickyHeaven/plug-r-qw-core#readme", le = {
  "@jiaminghi/data-view": "^2.10.0",
  "@wangeditor/editor": "^5.1.23",
  "@wangeditor/editor-for-vue": "^5.1.12",
  "ar-cascader": "^1.0.5",
  axios: "^0.27.1",
  echarts: "^4.9.0",
  "js-cookie": "2.1.4",
  lodash: "^4.17.21",
  moment: "^2.22.2",
  pinia: "^2.0.32",
  sweetalert: "^2.1.2",
  "view-ui-plus": "^1.3.10",
  vue: "^3.2.47",
  "vue-amap": "^0.5.10",
  "vue-i18n": "^9.2.2",
  "vue-json-viewer": "^3.0.4",
  "vue-router": "^4.1.6",
  xss: "^1.0.8"
}, ie = {
  "@types/node": "^18.14.2",
  "@vitejs/plugin-vue": "^4.1.0",
  "@vitejs/plugin-vue-jsx": "^3.0.0",
  "@vue/tsconfig": "^0.1.3",
  "china-map-data": "^1.0.4",
  deepmerge: "^2.2.1",
  del: "^6.1.1",
  express: "^4.18.2",
  "github-markdown-css": "^5.2.0",
  gulp: "^4.0.2",
  "gulp-autoprefixer": "^8.0.0",
  "gulp-clean-css": "^4.3.0",
  "gulp-less": "^5.0.0",
  "gulp-rename": "^2.0.0",
  less: "^4.1.3",
  multer: "^1.4.5-lts.1",
  nodemon: "^2.0.22",
  "npm-run-all": "^4.1.5",
  typescript: "5.0.2",
  vite: "^4.3.0",
  "vue-markdown-loader": "^2.5.0",
  "vue-tsc": "^1.2.0"
}, ce = {
  node: ">=16.20.0",
  npm: ">=8.19.4"
}, se = {
  name: U,
  version: J,
  description: Q,
  main: Y,
  typings: Z,
  files: K,
  scripts: W,
  repository: X,
  keywords: ee,
  author: ne,
  license: te,
  bugs: re,
  homepage: oe,
  dependencies: le,
  devDependencies: ie,
  engines: ce
}, g = /* @__PURE__ */ Object.assign({ "./components/Hello.vue": S });
let m = {};
for (const e in g)
  if (g.hasOwnProperty(e)) {
    const n = e.replace(/^\.\/.*\/(\w*)\/.*\.vue$|^\.\/.*\/(\w*)\.vue$/, "$1$2");
    m[n] = g[e].default;
  }
const ae = function(e, n = {}) {
  n.locale && f.use(n.locale), n.i18n && f.i18n(n.i18n), Object.keys(m).forEach((t) => {
    e.component(t, m[t]);
  });
}, ue = se.version, pe = f.use, de = f.i18n, ge = {
  version: ue,
  locale: pe,
  i18n: de,
  install: ae
};
export {
  ge as default
};
