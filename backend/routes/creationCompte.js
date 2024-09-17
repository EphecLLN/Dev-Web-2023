const express = require('express');
const router = express.Router();
const postCreationCompte = require('../controllers/creationCompte');

router.post('/', postCreationCompte.creationCompte);

module.exports = router;