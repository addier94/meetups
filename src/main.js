import Vue from 'vue'
import App from './App.vue'
// import Example from './components/shared/AppHero'

Vue.config.productionTip = false

// Vue.component('AppHero', Example)

new Vue({
  render: h => h(App),
}).$mount('#app')
