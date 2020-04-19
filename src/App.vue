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

    <Tabbar>
      <div slot="Tabbar">
        <Tabitem path="/home">
          <span class="iconfont icon-home"
                slot="Tabitem_icon"></span>
          <span slot="Tabitem_sign">首页</span>
        </Tabitem>
        <Tabitem path="/sort">
          <span class="iconfont icon-leimupinleifenleileibie2"
                slot="Tabitem_icon"></span>
          <span slot="Tabitem_sign">分类</span>
        </Tabitem>
        <Tabitem path="/shop">
          <span class="iconfont icon-gouwucheman"
                slot="Tabitem_icon"></span>
          <span slot="Tabitem_sign">购物车</span>
        </Tabitem>
        <Tabitem path="/profile">
          <span class="iconfont icon-wode"
                slot="Tabitem_icon"></span>
          <span slot="Tabitem_sign">我的</span>
        </Tabitem>

      </div>
    </Tabbar>

  </div>
</template>

<script>
import Header from './components/Header/Header'
import Tabbar from './components/tabbar/Tabbar'
import Tabitem from './components/tabbar/Tabitem'
export default {
  name: 'App',
  data: {
    // 在这里设置tabitem 激活颜色
    activeColor: "#cf2d28"
  },
  components: {
    Header,
    Tabbar,
    Tabitem
  },
  methods: {
    homeclick () {
      this.$router.push("/home");
      console.log("跳转到首页")
    },
    sortclick () {
      this.$router.push("/sort");
    },
    shopclick () {
      this.$router.push("/shop");
    },
    profileclick () {
      this.$router.push("/profile");
    }
  },
}
</script>

<style>
@import "./assets/css/base.css";
@import "./assets/iconfont/iconfont.css";
#App {
  width: 100vw;
  height: 100vh;
}
</style>
