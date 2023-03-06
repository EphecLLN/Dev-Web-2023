const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/payment');

router.get('/:userid', userCtrl.getUserPayments);
router.post('/:userid', userCtrl.createUserPayment);
router.put('/:userid', userCtrl.updateUserPayment);
router.delete('/:userid', userCtrl.deleteUserPayment);


module.exports = router;