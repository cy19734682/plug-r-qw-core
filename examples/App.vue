<script setup lang="ts">
  import SetLang from "./components/SetLang.vue"
  import SideMenuE from "./components/SideMenuE.vue"
  import {useRouter} from "vue-router"

  const router = useRouter()
  const routes = router.getRoutes()
  const menu = routes.map(e => ({
    name: e.name,
    path: e.path,
    desc:e.meta.desc
  }))
</script>

<template>
  <header class="appHead">
    <svg class="icon brandR" aria-hidden="true">
      <use xlink:href="#icon-letter-R"></use>
    </svg>

    <Hello />

    <SetLang class="fr" />
    <span class="fr">{{ $t("e.testTxt") }}</span>
  </header>
  <main class="appMain">
    <SideMenuE :data="menu"/>
    <div class="viewR">
      <RouterView />
    </div>
  </main>
</template>

<style lang="less" scoped>
  .appHead {
    height: 45px;
    border-bottom: 1px solid #eee;
    line-height: 45px;
    padding: 0 15px;

    .brandR {
      font-size: 28px;
      position: relative;
      top: 5px;
      margin-right: 25px;
    }

    .setLang {
      margin-left: 30px;
    }
  }

  .appMain {
    height: calc(~"100vh - 45px");
    display: flex;
    align-items: center;

    .viewR {
      flex-grow: 1;
      height: 100%;
      padding: 12px;
      background-color: #f5f7f9;
    }
  }
</style>
