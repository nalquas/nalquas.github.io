import { createApp } from 'vue'
import App from './App.vue'

// Bootstrap imports
import { BootstrapVueNext } from 'bootstrap-vue-next'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

const app = createApp(App)
app.use(BootstrapVueNext)
app.mount('#app')