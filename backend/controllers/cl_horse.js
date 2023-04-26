const pool = require('../db');

exports.coat = (req, res, next) => {
    pool.getConnection()
        .then(conn => {
            conn.query("CALL coatOptions()")
                .then(rows => {
                    console.log("Calling coatOptions");
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

exports.breed = (req, res, next) => {
    pool.getConnection()
        .then(conn => {
            conn.query("CALL breedOptions()")
                .then(rows => {
                    console.log("Calling breedOptions");
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

exports.breeder = (req, res, next) => {
    pool.getConnection()
        .then(conn => {
            conn.query("CALL breederOptions()")
                .then(rows => {
                    console.log("Calling breederOptions");
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

exports.getHorses = (req, res, next) => {
    pool.getConnection()
        .then(conn => {
            conn.query("CALL getHorses()")
                .then(rows => {
                    console.log("Calling breederOptions");
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