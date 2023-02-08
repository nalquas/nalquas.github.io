
import { createRouter, createWebHashHistory } from 'vue-router'

// Import route components ("Pages")
import Home from '../components/Home.vue'
import About from '../components/About.vue'

// Define some routes
const routes = [
    {path: '/', component: Home, name: 'home'},
    {path: '/about', component: About, name: 'about'}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router
