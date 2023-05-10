import { createRouter, createWebHistory } from 'vue-router'
import Produits from '../views/Produits.vue'
import Accueil from "../views/Accueil"
import Realisation from "@/views/Realisation";
import Service from "@/views/Service";
import Service1 from "@/views/Service1";
import Service2 from "@/views/Service2";
import Service3 from "@/views/Service3";
import Connexion from "@/views/Connexion";
import Inscription from "@/views/Inscription";
import Clients from "@/views/Clients"

const router = createRouter({
    history: createWebHistory(),
    routes : [
        {
            path: "/",
            component: Accueil
        },
        {
            path: "/produits",
            component: Produits
        },
        {
            path: "/realisation",
            component: Realisation
        },
        {
            path: "/service",
            component: Service
        },
        {
            path: "/service/1",
            component: Service1
        },
        {
            path: "/service/2",
            component: Service2
        },
        {
            path: "/service/3",
            component: Service3
        },
        {
            path: "/connexion",
            component: Connexion
        },
        {
            path: "/inscription",
            component: Inscription
        },
        {
            path: "/clients",
            component: Clients
        }
    ]
})

export default router