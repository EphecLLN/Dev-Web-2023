const express = require('express');
const router = express.Router();
const {getClients, getIdClients} = require('../controllers/clients');

router.get('/', getClients);
router.get('/:id', getIdClients);

module.exports = router;