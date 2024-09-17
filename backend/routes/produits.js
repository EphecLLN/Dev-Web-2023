const express = require('express');
const {getProduits, postProduits, deleteProduits, updateProduits} = require('../controllers/produits');
const router = express.Router();

router.get('/', getProduits);
router.post('/:nom', postProduits);
router.delete('/:id', deleteProduits);
router.put('/:id', updateProduits);

module.exports = router;