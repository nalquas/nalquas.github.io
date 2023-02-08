
import { createRouter, createWebHashHistory } from 'vue-router'

// Import route components ("Pages")
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Contact from '../components/Contact.vue'

// Define some routes
const routes = [
    {path: '/', component: Home, name: 'home'},
    {path: '/about', component: About, name: 'about'},
    {path: '/contact', component: Contact, name: 'contact'}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router
