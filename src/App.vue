<template>
  <div id="App">
    <div class="header">
      <Header>
        <div slot="Header_title">这是软件标题 </div>
      </Header>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
    <mainTabBar />
  </div>

</template>

<script>
import Header from 'components/Header/Header'
import mainTabBar from "components/mainTabBar/mainTabBar"
export default {
  name: 'App',
  components: {
    Header,
    mainTabBar
  }
}
</script>

<style>
@import "assets/css/base.css";
@import "assets/iconfont/iconfont.css";
#App {
  width: 100vw;
  height: 100vh;
}
</style>
