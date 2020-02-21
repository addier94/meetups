import Vue from 'vue'
import App from './App.vue'
// import Example from './components/shared/AppHero'

Vue.config.productionTip = false

// Vue.component('AppHero', Example)

Vue.filter('capitalize', function(value) {
  if (value && typeof value === 'string') {
    return value.charAt(0).toUpperCase() + value.slice(1)
  }
  return ''
})

new Vue({
  render: h => h(App),
}).$mount('#app')
