import Vue from 'vue'
import App from './App.vue'
import moment from 'moment'
// import Example from './components/shared/AppHero'

Vue.config.productionTip = false

// Vue.component('AppHero', Example)

Vue.filter('capitalize', function(value) {
  if (value && typeof value === 'string') {
    return value.charAt(0).toUpperCase() + value.slice(1)
  }
  return ''
})

Vue.filter('formatDate', function(value, formatType = 'LL') {
  if (!value) return ''
  moment.updateLocale('es', {
    months : [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
        "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ]
  });
  return moment(value).format(formatType)
})

new Vue({
  render: h => h(App),
}).$mount('#app')
