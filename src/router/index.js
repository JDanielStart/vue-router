import { createRouter, createWebHistory } from "vue-router";
import HomeViewVue from "@/views/HomeView.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        //Aquí se descarga todo
        { path: "/", component: HomeViewVue },
        //Esta es la manera para cargar solo la página que necesitamos en cada momento
        { path: "/about", component: import("../views/AboutView.vue") },
        { path: "/chats", component: import("../views/ChatsView.vue") },
        { path: "/chats/:chatId", component: import("../views/ChatsView.vue") }
    ]
});

export default router;