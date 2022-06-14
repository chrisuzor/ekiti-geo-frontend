import {createRouter, createWebHistory} from 'vue-router'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Parcels from './components/Parcel.vue'
import HelloWorld from './components/HelloWorld.vue'

const routerHistory = createWebHistory();
const router = createRouter({
    history: routerHistory,
    routes: [
        {path: '/', component: Home},
        {path: '/login', component: Login},
        {path: '/parcels', component: Parcels},
        {path: '/buildings', component: HelloWorld}
    ]
})

export default router;