const express = require('express');
const app = express();

const cors = require('cors');
const bodyParser = require('body-parser');

const creationCompteRoutes = require('./routes/creationCompte');
const connexionCompteRoutes = require('./routes/connexionCompte');
const clientsRoutes = require('./routes/clients');
const servicesRoutes = require('./routes/services');
const realisationsRoutes = require('./routes/realisations');
const produitsRoutes = require('./routes/produits');
const { expressjwt: jwt } = require("express-jwt");
const jwtOptions = require("./config/jwt");

// Configure les options CORS
const corsOptions = {
  origin: '*', // Mettre l'origine autorisée de votre choix, ou '*' pour autoriser toutes les origines
  methods: 'GET, POST, PUT, DELETE, PATCH, OPTIONS', // Spécifie les méthodes autorisées
  allowedHeaders: 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization', // Spécifie les en-têtes autorisés
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Liste des appels API
app.use('/creationCompte', creationCompteRoutes);
app.use('/connexionCompte', connexionCompteRoutes);
app.use('/clients', jwt({ secret: jwtOptions.secret, algorithms: [jwtOptions.alg] }), clientsRoutes);
app.use('/service', servicesRoutes);
app.use('/realisation', realisationsRoutes);
app.use('/produits', produitsRoutes);

module.exports = app

