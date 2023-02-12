import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Vue Router imports
import router from './router/index'

// Bootstrap imports
import { BootstrapVueNext } from 'bootstrap-vue-next'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-dark-5/dist/css/bootstrap-dark-plugin.min.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

const app = createApp(App)
app.use(router)
app.use(BootstrapVueNext)
app.mount('#app')
