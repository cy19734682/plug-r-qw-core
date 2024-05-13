## timer

可自动销毁的定时器，setTimeout和setInterval，需要在安装库时传入router

### 说明

- 配置 在引入库时传入router：`Vue.use(plugRQw,{router,...})`

- 使用 两个定时器方法挂在`app.config.globalProperties`下面，组件`template`里使用`this` 调用，其他情况单独调用（推荐）或使用[proxy](../../examples/global/proxy.ts)调用，参数和`window`的定时器一样

- 注意 定时器会在路由变换时自动销毁，只管用就行，不用在定时器回调里面手动销毁定时器( 如果定时器在路由变换前生成，变换后触发，则该定时器不适用该场景)
