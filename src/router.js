import {createRouter, createWebHistory} from 'vue-router'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Parcels from './components/Parcel.vue'

const routerHistory = createWebHistory();
const router = createRouter({
    history: routerHistory,
    routes: [
        {path: '/', component: Home},
        {path: '/login', component: Login},
        {path: '/parcels', component: Parcels}
    ]
})

export default router;