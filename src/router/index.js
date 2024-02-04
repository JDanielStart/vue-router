import { createRouter, createWebHistory } from "vue-router";
import HomeViewVue from "@/views/HomeView.vue";
import NotFound from "@/views/404View.vue";

const router = createRouter({
    //createWebHashHistory() hace lo mismo pero nos sirve
    //para evitar errores con backend que no esten preparados
    //para rutas como hace vue router de paginas que estan en el
    //front end usando una # delante
    history: createWebHistory(),
    routes: [
        /* { path: "/home", redirect: { name: "home" } }, */
        { path: "/404", component: NotFound},
        { path: "/:catchAll(.*)", redirect: "/404" },
        {
            path: "/",
            name: "home",
            component: HomeViewVue,
            alias: ["/home"],
            meta: {
                requiresAuth: false,
            }
        },
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
            meta: {
                requiresAuth: true
            },
            children: [
                {
                    path: ":chatId(\\d+)",
                    component: () => import("../views/ChatView.vue"),
                    props: (route) => {
                        return {
                            chatId: route.params.chatId
                        }
                    }
                }
            ]
        },
    ]
});

router.beforeEach((to, from) => {
    console.log(to, from);

    /* if (to.meta?.requiresAuth) {
        return "/session";
    }

    if (to.path === "/") {
        return { name: "about" };
    }
    return true; */
});

export default router;