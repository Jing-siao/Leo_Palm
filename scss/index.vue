


<template>
  <div id="app">
    <div class="appBg"></div>
    <div class="bg"></div>
    <!-- <header-component></header-component> -->

    <!-- <template src="./component/HeaderComponent.vue"></template> -->
    <!-- <header>
      <div class="logoWrap">
        <a href="index.html">
          <img src="./img/logo.png" alt="" />
        </a>
      </div>
      <div class="loginWrap">
        <a href="#">註冊</a>
        <a href="./login.html">登入</a>
      </div>
    </header> -->

    <div class="palmWrap">
      <img src="./img/中間手掌.png" alt="" />
    </div>
    <ul class="buttons">
      <li v-for="button in buttons" :key="button">
        <a href="#">
          <p>{{ button }}</p>
          <i><span class="light"></span></i>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
// import HeaderComponent from "./component/HeaderComponent.vue";
// import "./main";
export default {
  // components: { HeaderComponent },
  data() {
    return {
      buttons: ["新增手掌", "驗證", "識別", "管理資料", "查詢紀錄"],
    };
  },
};
</script>

<style lang="sass" scoped>
@import './vendors/css/reset.css'
@import "./scss/index.scss"
</style>


