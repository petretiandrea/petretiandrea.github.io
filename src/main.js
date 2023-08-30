import 'vuetify/styles'
import {createApp} from 'vue'
import App from './App.vue'
import {registerPlugins} from "@/plugins";

// Vue.config.ignoredElements = [
//   'codersrank-summary'
// ];


// register web component as <codersrank-summary> element
//Vue.customElement('codersrank-summary', CodersrankSummary)

//Vue.config.productionTip = false

const app = createApp(App)
registerPlugins(app)
app.mount('#app')

//createApp(App)
//    .use(router)
//    .use(vuetify)
    //.use(VueCustomElement)
//    .component('icon-svg', VueSvgIcon)
//    .mount('#app')
