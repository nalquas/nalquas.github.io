
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
    {path: '/', component: Home, name: 'home', meta: {title: 'Overview'}},
    {path: '/cv', component: Resume, name: 'cv', meta: {title: 'CV'}},
    {path: '/projects', component: Projects, name: 'projects', meta: {title: 'Projects'}},
    {path: '/contact', component: Contact, name: 'contact', meta: {title: 'Contact'}},
    {path: '/about', component: About, name: 'about', meta: {title: 'About'}},
    {path: '/:pathMatch(.*)*', component: NotFound, name: 'notfound', meta: {title: 'Not Found'}}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router
