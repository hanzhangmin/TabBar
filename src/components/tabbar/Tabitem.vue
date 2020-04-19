<template>
  <div class="Tabitem"
       @click="itemclick">
    <div :style="activeStyle">
      <slot name="Tabitem_icon"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="Tabitem_sign"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "Tabitem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "#cf2d28"
    }
  },
  data () {
    return {
      // isActive: true
    }
  },
  computed: {
    isActive () {
      console.log(this.$route.path)
      // return this.$route.path === this.path 可行，但是下面有更加稳妥的方法
      return !this.$route.path.indexOf(this.path)
      // indexOf(item ,num) item 要找的字符串 num 检索开始位置下标 存在则返回第一次存在的下标，不存在返回 -1 
    },
    activeStyle () {
      return this.isActive ? {        'color': this.activeColor, 'animation': 'myactive 0.3s',
        '-moz-animation': ' myactive 0.3s',
        '-webkit-animation': ' myactive 0.3s',
        '-o-animation': 'myactive 0.3s'      } : {}
    }
  },
  methods: {
    itemclick () {
      this.$router.push(this.path)
    }
  },
}
</script>
<style>
.Tabitem {
  flex: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
}

.Tabitem div {
  flex: 1;
  display: inline-block;
}
.Tabitem div:last-child {
  font-size: 16px;
}

/* .active {
  color: #cf2d28;
  animation: myactive 0.3s;
  -moz-animation: myactive 0.3s;
  -webkit-animation: myactive 0.3s;
  -o-animation: myactive 0.3s;
} */
/* @keyframes myactive {
  0% {
    transform: scale(0.5);
  }
  75% {
    transform: scale(1.2);
  }
  90% {
    transform: scale(0.9);
  }
  95% {
    transform: scale(1.1);
  }
  97% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1.05);
  }
} */
</style>