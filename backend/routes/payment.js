const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/payment');

router.get('/:userid', userCtrl.getUserPayments);
/**
 * Ici on a toutes les requetes /api/payment et
 * on renvoie vers le controller /controllers/payment.js
 * à la fonction correspondante
 * (Ici getUserPayments)
 */
router.post('/:userid', userCtrl.createUserPayment);
router.put('/:userid', userCtrl.updateUserPayment);
router.delete('/:payid', userCtrl.deleteUserPayment);


module.exports = router;