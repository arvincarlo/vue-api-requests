import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "./components/Dashboard.vue";
import First from "./components/First.vue";
import Second from "./components/Second.vue";

const routes = [
    {
        path: '/',
        name: "Dashboard",
        component: Dashboard
    },
    {
        path: '/first',
        name: "First",
        component: First
    },
    {
        path: '/second',
        name: "Second",
        component: Second
    },
]

const router = createRouter({
    history: createWebHistory(),
    // history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;