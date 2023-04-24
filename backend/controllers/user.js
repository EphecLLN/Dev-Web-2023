const pool = require('../db');

exports.coat = (req, res, next) => {
    pool.getConnection()
        .then(conn => {
            conn.query("CALL coatOptions()")
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
}

exports.breed = (req, res, next) => {
    pool.getConnection()
        .then(conn => {
            conn.query("CALL breedOptions()")
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
}

exports.breeder = (req, res, next) => {
    pool.getConnection()
        .then(conn => {
            conn.query("CALL breederOptions()")
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
}


/*
exports.getAllUsers = (req, res, next) => {
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
}
*/
exports.getInfoUser = (req, res, next) => {
    pool.getConnection()
        .then(conn => {
            conn.query("call getUserInfo( " + req.params.id + ")")
                .then(rows => {
                    console.log(rows[0]);
                    res.status(200).json(rows[0]);
                })
                .catch(err => {
                        console.log(err)
                        res.status(400).json(err);
                    }
                )
        })
        .catch(err => {
            res.status(400).json({err});
        })
}
/*
exports.createUser = (req, res, next) => {
    pool.getConnection()
        .then(conn => {
            const rows = conn.query("insert into riders (name, familyName) values (?, ?)",
                [req.body.name, req.body.fname])
                .then(rows => {
                    console.log(rows)
                    res.status(201).json({message: 'User created'});
                })
                .catch(err => {
                        res.status(400).json({err});
                    }
                )
        })
        .catch(err => {
            res.status(400).json({err});
        })
}


exports.updateUser = (req, res, next) => {
    pool.getConnection()
        .then(conn => {
            conn.query("update riders set name = ?, familyName = ?, lessonCredits = ? where id = ?",
                [req.body.name, req.body.fname, req.body.lessCred, req.params.id])
                .then(rows => {
                    res.status(200).json({message: 'User updated'});
                })
                .catch(err => {
                    res.status(400).json({err});
                })
        })
        .catch(err => {
            res.status(400).json({err});
        })
}

exports.deleteUser = (req, res, next) => {
    pool.getConnection()
        .then(conn => {
            conn.query("delete from riders where id = ?",
                [req.params.id])
                .then(rows => {
                    res.status(200).json({message: 'User deleted'});
                })
                .catch(err => {
                    res.status(400).json({err});
                })
        })
        .catch(err => {
            res.status(400).json({err});
        })
}
*/

