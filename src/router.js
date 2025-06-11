import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "./components/Layout/DefaultLayout.vue";
import Dashboard from "./components/Admin/Dashboard.vue";
import Reports from "./components/Admin/Reports.vue";
import Survey from "./components/Pages/Survey.vue";
import Login from "./components/Pages/Login.vue";
import NotFound from "./components/Pages/NotFound.vue";

const routes = [
    {
        path: "/",
        component: DefaultLayout,
        children:[
            {
                path:"/",
                name: "Dashboard",
                component: Dashboard
            },
            {
                path:"/report",
                name: "Report",
                component: Reports
            },
        ]
    },
    {
        path: "/survey",
        name: "Survey",
        component: Survey
    },
    {
        path: "/login",
        name: "Login",
        component: Login
    },
    {
        path: "/:pathMatch(.*)*", 
        name:"not-found", 
        component: NotFound
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;