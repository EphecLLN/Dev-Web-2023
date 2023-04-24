const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');
const pool = require("../db");
/*
router.get('/', userCtrl.getAllUsers);
router.get('/:id', userCtrl.getInfoUser);
router.post('/', userCtrl.createUser);
router.put('/:id', userCtrl.updateUser);
router.delete('/:id', userCtrl.deleteUser);*/
router.get('/coat', userCtrl.coat);
router.get('/breed', userCtrl.breed);
router.get('/breeder', userCtrl.breeder);
router.get('/:id', userCtrl.getInfoUser)
module.exports = router;