## InputMap

带搜索框的地图组件，支持搜索地点，经纬度回显地点，缩放，移动地图，拖动标记，点击标记显示地点信息

### 属性

- modelValue 对象，组件的值，推荐用*v-model* 绑定，如：

  ```
    //vue3 SFC script setup

    const position = ref({
      name: '光电园(地铁站)',
      address: "6号线",
      district: "重庆市渝北区",
      lng: 106.499401,
      lat: 29.616077
    })

    //vue3 SFC template

    <InputMap v-model="position"/>
  ```

- width 字符串/正整数，组件宽度，默认值：`100%`

- height 字符串/正整数，组件高度

- placeholder 字符串，搜索框placeholder，默认值：`'搜索'`

- disabled 布尔对象，禁用组件（仅展示时用），默认：`false`

- showMap 布尔对象，是否展示地图，设置为`false`时，只有一个输入框，没有地图，默认：`true`

### 事件

- on-change 组件值发生改变，返回改变后的值，相当于vue-amap的select事件

### 注意

- 使用该组件需要在库安装时传入高德地图的`securityJsCode`和`key`:

  ```
    //main.js or main.ts

    import plugRQw from '@zhangqingcq/plug-r-qw'

    app.use(plugRQw,{amap:{securityJsCode:'your code',key:'your key'},...})
  ```

- v-model绑定的值必须是一个对象，没有初始值的话给绑定变量赋值`{}`

- 拖动标记只会更改组件的经纬度，不会改变搜索框的文字，因为同一个坐标对应多个中文地址，所以我也不知道你要的是哪个，输入框主要作用是搜索地点

- 该组件主要用于在地图上展示地点、选点、获取经纬度，一般配合单独收集中文地址的输入框使用，该组件放在中文地址输入框下边，具体用法参考该库的表单组件中' inputMap '类型。
