import { createStore } from 'vuex'

const axios = require('axios');

const instance = axios.create({
    baseURL: 'http://localhost:3000'
});

let utilisateur = localStorage.getItem('utilisateur');
if (!utilisateur) {
    utilisateur = {
        id_client: -1,
        //token: '',
    };
}
else {
    try {
        utilisateur = JSON.parse(utilisateur);
        //instance.defaults.headers.common['Authorization'] = utilisateur.token;
    } catch (ex) {
        utilisateur = {
            id_client: -1,
            //token: '',
        };
    }
}
const store = createStore({
    state: {
        statut: '',
        utilisateur: utilisateur,
        utilisateurInfos: {
            nom: '',
            prenom: '',
            nom_societe: '',
            fonction: '',
            telephone: '',
            mdp: '',
            mail_client: '',
        }
    },
    mutations:{
        initStatut: function(state, statut){
            state.statut = statut;
        },
        connexionUtilisateur: function(state, utilisateur){
            //instance.defaults.headers.common['Authorization'] = utilisateur.token;
            localStorage.setItem('utilisateur', JSON.stringify(utilisateur));
            state.utilisateur = utilisateur;
        },
        utilisateurInfos: function (state, utilisateurInfos){
            state.utilisateurInfos = utilisateurInfos;
        },
        deconnexion: function(state){
            state.utilisateur = {
                id_client: -1,
                //token: '',
            }
            localStorage.removeItem('utilisateur');
        }
    },
    actions: {
        connexionCompte: ({commit}, utilisateurInfos) => {
            commit('initStatut', 'chargement');
            return new Promise((resolve, reject) => {
                instance.post('/connexionCompte', utilisateurInfos)
                .then(function (response){
                    commit('initStatut','');
                    commit('connexionUtilisateur', response.data);
                    resolve(response);
                })
                .catch(function (error){
                    commit('initStatut','erreur_connexion');
                    reject(error);
                });
            });
        },
        creationCompte: ({commit}, utilisateurInfos) => {
            commit('initStatut', 'chargement');
            return new Promise((resolve, reject) => {        
                commit;
                instance.post('/creationCompte', utilisateurInfos)
                .then(function (response){
                    commit('initStatut','creation')
                    resolve(response);
                })
                .catch(function (error){
                    commit('initStatut','erreur_creation')
                    reject(error);
                });
            });
        },
        recevoirUtilisateurInfos: ({commit}) => {
            instance.post('/infos')
            .then(function (response){
                commit('utilisateurInfos', response.data);
            })
            .catch(function (){
            });
        }
    }
})

export default store;