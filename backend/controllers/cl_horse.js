const pool = require('../db');

exports.options = (req, res, next) => {
    pool.getConnection()
        .then(conn => {
            conn.query("CALL formOptions()")
                .then(rows => {
                    console.log("Calling  Options ---------------------------------");
                    res.status(200).json(rows[0]);
                })
                .catch(err => {
                        res.status(400).json({err});
                    }
                )
            conn.release()
        })
        .catch(err => {
            res.status(400).json({err});
        })
}

exports.addHorse = (req, res, next) => {
    pool.getConnection()
        .then(conn => {
            conn.query(`CALL newHorse(?,?,?,?,?,?,?,?,?,?);`,[req.body.hname, req.body.photo, req.body.gender, req.body.birthdate, req.body.breed, req.body.height, req.body.statut, req.body.comment, req.body.breeder, req.body.coat] )
                .then(rows => {
                    res.status(200).json();
                })
                .catch(err => {
                        console.log(err);
                        res.status(400).json({err});
                    }
                )
            conn.release();
        })
        .catch(err => {
            res.status(400).json({err});
        })
}

