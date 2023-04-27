<!--Hello
created at 2023.04.27
@author Ricky email:zhangqingcq@foxmail.com-->

<script setup lang="ts">
  import {ref} from 'vue'

  let msg = ref('Greetings from Ricky.')
</script>

<template>
  <span class="msg">{{msg}}</span>
</template>
