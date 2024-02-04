import { createRouter, createWebHistory } from "vue-router";
import HomeViewVue from "@/views/HomeView.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        /* { path: "/home", redirect: { name: "home" } }, */
        { path: "/", name: "home", component: HomeViewVue, alias: ["/home"] },
        { path: "/about", name: "about", component: () => import("../views/AboutView.vue") },
        {
            path: "/session",
            component: () => import("../views/SessionView.vue"),
            children: [
                {
                    path: "", 
                    components: {
                        default: () => import("../views/LoginView.vue"),
                        register: () => import("../views/RegisterView.vue"),
                    }
                }
            ]
        },
        {
            path: "/chats",
            component: () => import("../views/ChatsView.vue"),
            children: [
                { path: ":chatId", component: () => import("../views/ChatView.vue") }
            ]
        },
    ]
});

export default router;