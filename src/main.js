import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
    // 将路由配置挂载
import router from './router'
new Vue({
    render: h => h(App),
    router
}).$mount('#app')