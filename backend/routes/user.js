const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');

router.get('/', userCtrl.getAllUsers);
router.get('/:id', userCtrl.getInfoUser);
router.post('/', userCtrl.createUser);
router.put('/:id', userCtrl.updateUser);
router.delete('/:id', userCtrl.deleteUser);


module.exports = router;