<template>
  <Tabbar>
    <div slot="Tabbar">
      <Tabitem path="/home"
               :activeColor="activeColor">
        <span class="iconfont icon-home"
              slot="Tabitem_icon"></span>
        <span slot="Tabitem_sign">首页</span>
      </Tabitem>
      <Tabitem path="/sort"
               :activeColor="activeColor">
        <span class="iconfont icon-leimupinleifenleileibie2"
              slot="Tabitem_icon"></span>
        <span slot="Tabitem_sign">分类</span>
      </Tabitem>
      <Tabitem path="/shop"
               :activeColor="activeColor">
        <span class="iconfont icon-gouwucheman"
              slot="Tabitem_icon"></span>
        <span slot="Tabitem_sign">购物车</span>
      </Tabitem>
      <Tabitem path="/profile"
               :activeColor="activeColor">
        <span class="iconfont icon-wode"
              slot="Tabitem_icon"></span>
        <span slot="Tabitem_sign">我的</span>
      </Tabitem>
    </div>
  </Tabbar>
</template>
<script>
import Tabbar from "../tabbar/Tabbar"
import Tabitem from "../tabbar/Tabitem"
export default {
  name: "mainTabBar",
  data () {
    return {
      activeColor: "#cf2d28"
    }
  },
  components: {
    Tabitem,
    Tabbar
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
</style>
