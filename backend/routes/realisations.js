const express = require('express');
const router = express.Router();
const {getRealisations, getIdRealisations} = require('../controllers/realisations');

router.get('/', getRealisations);
router.get('/:id', getIdRealisations);

module.exports = router;