import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import router from '@/router'
import CodersrankSummary from '@codersrank/summary';
import VueCustomElement from 'vue-custom-element';
import '@yzfe/svgicon/lib/svgicon.css'
import { VueSvgIcon } from '@yzfe/vue-svgicon'

Vue.config.ignoredElements = [
  'codersrank-summary'
];

Vue.use(VueCustomElement)

// register web component as <codersrank-summary> element
Vue.customElement('codersrank-summary', CodersrankSummary)

Vue.config.productionTip = false

Vue.component('icon-svg', VueSvgIcon)

new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app')
