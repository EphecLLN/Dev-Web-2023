const express = require('express');
const router = express.Router();
const postConnexionCompte = require('../controllers/connexionCompte');

router.post('/', postConnexionCompte.connexionCompte);

module.exports = router;