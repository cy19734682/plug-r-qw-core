# plug-r-qw

* A JS lib base on Vue and View-design, you can achieve some complex functions with simple code after install this lib.

* 简介：这是一个主要基于Vue和View-design的JS库，库里面提供一些集成度较高功能较复杂的全局组件，和一些实用的但不常见（其他库可能没有）的方法，并且使用起来灵活简单。

* 安装该库后，可以用简单的几行代码实现较复杂的业务需求；对经验丰富的开发者来说，大大提高开发速度、代码质量、可读性、和可维护性；对萌新来说，将入门门槛进一步降低，让你更快上手。

## vue3: [@zhangqingcq/plug-r-qw@2.x.x](https://github.com/RickyHeaven/plug-r-qw-core.git)

## vue2: [@zhangqingcq/plug-r-qw@1.x.x](https://github.com/RickyHeaven/plug-r-qw.git)

* 你的项目使用`npm`作为包管理器时，plug-r-qw库使用了的依赖不用再次在你的项目安装；使用`pnpm`作为包管理器时，需要执行下面命令安装第三方依赖，如果仍提示缺少依赖，缺什么就安装什么。
```
  pnpm add lodash-es ar-cascader @wangeditor/editor @wangeditor/editor-for-vue moment
```

### 按需引入
* 该库支持按需引入，以实现tree-shaking
```
  // main.ts or main.js
  
  app.use(plugRQw,{notRegistryGlobal:true,...})
  
  
  // xxx.vue setup
  
  import {$fetch,Hello} from '@zhangqingcq/plug-r-qw
  
  $fetch.get(...).then()
  
  
  // xxx.vue template
  
  <Hello/>
  
```