import { createRouter, createWebHistory } from 'vue-router';
import Produits from '../views/Produits.vue';
import Accueil from "../views/Accueil";
import Realisation from "@/views/Realisation";
import Service from "@/views/Service";
import Service1 from "@/views/Service1";
import Service2 from "@/views/Service2";
import Service3 from "@/views/Service3";
import Connexion from "@/views/Connexion";
import Realisation1 from "@/views/Realisation1";
import Realisation2 from "@/views/Realisation2";
import Realisation3 from "@/views/Realisation3";
import Clients from "@/views/Clients";
import Profile from "@/views/Profile";
import Commande from "@/views/Commande";
import Industrie from "@/views/Industrie";
import Alimentaire from "@/views/Alimentaire";
import Equipement from "@/views/Equipement";
import Commerce from "@/views/Commerce";
import Catering from "@/views/Catering";

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
            path: "/realisation/1",
            component: Realisation1
        },
        {
            path: "/realisation/2",
            component: Realisation2
        },
        {
            path: "/realisation/3",
            component: Realisation3
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
            path: "/clients",
            component: Clients
        },
        {
            path: "/profile",
            component: Profile
        },
        {
            path: "/commande",
            component: Commande
        },
        {
            path: "/industrie",
            component: Industrie
        },
        {
            path: "/alimentaire",
            component: Alimentaire
        },
        {
            path: "/equipement",
            component: Equipement
        }
        ,
        {
            path: "/commerce",
            component: Commerce
        },
        {
            path: "/catering",
            component: Catering
        }
    ]
})

export default router
