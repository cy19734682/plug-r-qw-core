<script setup lang="ts">
  import _proxy from "@/global/proxy"
  import ShowReadMe from "@/components/ShowReadMe.vue"

  const proxy = _proxy()

  function msgB() {
    proxy.messageBox({
      content: 'hello',
      onOk() {
        console.log('ok 按钮被点击了')
      }
    })
  }

  function msgC() {
    proxy.messageBox({
      onOkPromise: true,
      onOk() {
        return new Promise((r: any) => {
          console.log('ok 按钮被点击，模拟请求开始')
          window.setTimeout(() => {
            console.log('模拟请求完成')
            r()
          }, 3000)
        })
      }
    })
  }
</script>

<template>
  <show-read-me />
  <div>
    <Button type="primary" @click="msgB">对话框</Button>
    <Button @click="msgC">Promise 对话框</Button>
  </div>
</template>

<style lang="less" scoped>

</style>
