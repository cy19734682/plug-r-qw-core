<script setup lang="ts">
  import _proxy from '@/global/proxy'
  import ShowReadMe from "@/components/ShowReadMe.vue"

  const proxy = _proxy()

  function swalHandle(type: string) {
    proxy.$swal('哈喽', '同志，你好！', type)
  }

  function swalConfirm() {
    proxy.$swalConfirm(null, null, 'warning', () => {
      console.log('确定被点击')
    })
  }

  function swalHandleB() {
    let content = document.createElement('div')
    content.innerHTML =
      `<p style="padding: 15px 0;">请验证指纹</p><i class="ivu-icon ivu-icon-ios-finger-print" style="font-size: 50px;color: deepskyblue"></i>`
    proxy.$swal({
      text: content
    })
  }

  function swalHandleC() {
    /*这种用法和swalConfirm效果一样，就是略繁琐*/
    proxy.$swal({
      title: '提示',
      text: '确定执行该操作？',
      icon: 'warning',
      buttons: ['取消', '确定'],
      onOk() {
        console.log('确定按钮被点击')
      }
    })
  }
</script>

<template>
  <show-read-me />
  <div>
    <Button type="success" @click="swalHandle('success')">成功</Button>
    <Button type="error" @click="swalHandle('error')">失败</Button>
    <Button type="warning" @click="swalHandle('warning')">警告</Button>
    <Button type="info" @click="swalHandle('info')">提示</Button>
    <Button @click="swalConfirm">$swalConfirm对话框</Button>
    <Button type="primary" @click="swalHandleB">DOM node</Button>
    <Button @click="swalHandleC">swal对话框</Button>
  </div>
</template>

<style lang="less" scoped>

</style>