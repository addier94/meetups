import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import moment from 'moment'
import AppHero from './components/shared/AppHero'
import AppSpinner from './components/shared/AppSpinner'

Vue.config.productionTip = false

Vue.component('AppHero', AppHero)
Vue.component('AppSpinner', AppSpinner)

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
  router,
  store,
  render: h => h(App),
}).$mount('#app')
