
import { createRouter, createWebHistory } from 'vue-router'

// Import route components ("Pages")
import Home from '../components/Home.vue'
import Resume from '../components/CV.vue'
import Projects from '../components/Projects.vue'
import Contact from '../components/Contact.vue'
import About from '../components/About.vue'
import NotFound from '../components/NotFound.vue'

// Define some routes
const routes = [
    {path: '/', component: Home, name: 'home'},
    {path: '/cv', component: Resume, name: 'cv'},
    {path: '/projects', component: Projects, name: 'projects'},
    {path: '/contact', component: Contact, name: 'contact'},
    {path: '/about', component: About, name: 'about'},
    {path: '/:pathMatch(.*)*', component: NotFound, name: 'notfound'}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router
