const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');
const pool = require("../db");

//router.get('/', userCtrl.getAllUsers);
//router.get('/:id', userCtrl.getInfoUser);
router.post('/', userCtrl.createUser);
router.put('/:id', userCtrl.updateUser);
router.delete('/:id', userCtrl.deleteUser);

router.get('/', function (req, res, next){
    pool.getConnection()
        .then(conn => {
            conn.query("select * from riders")
                .then(rows => {
                    console.log(rows);
                    res.status(200).json(rows);
                })
                .catch(err => {
                        res.status(400).json({err});
                    }
                )
        })
        .catch(err => {
            res.status(400).json({err});
        })
});

router.get('/:id', function (req, res, next){
    pool.getConnection()
        .then(conn => {
            console.log(req.params.id);
            conn.query("select * from riders where id = ?",
                [req.params.id])
                .then(rows => {
                    res.status(200).json(rows);
                })
                .catch(err => {
                        res.status(400).json({err});
                    }
                )
        })
        .catch(err => {
            res.status(400).json({err});
        })
});

module.exports = router;