const express = require('express');
const router = express.Router();
const {getServices, getIdServices} = require('../controllers/services');

router.get('/', getServices);
router.get('/:id', getIdServices);

module.exports = router;