import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './ele/index'

Vue.config.productionTip = false

Vue.directive('title', {
  inserted: function (el, binding) {
    document.title = el.dataset.title
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
