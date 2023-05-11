<script setup lang="ts">
  import {ref} from 'vue'

  const fullPop = ref()

  function popF() {
    fullPop.value.open()
  }
</script>

<template>
  <Button @click="popF">全屏弹框</Button>
  <FullPop title="全屏弹框" ref="fullPop">
    <div style="padding: 12px">
      <div>我是内容巴拉巴拉巴拉~</div>
    </div>
  </FullPop>
</template>

<style lang="less" scoped>

</style>