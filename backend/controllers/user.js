const pool = require('../db');

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

exports.getInfoUser = (req, res, next) => {
    pool.getConnection()
        .then(conn => {
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
}

exports.createUser = (req, res, next) => {
    pool.getConnection()
        .then(conn => {
            conn.query("insert into riders (id, name, familyName, lessonCredits) values (?, ?, ?, ?)",
                [req.body.id, req.body.userName, req.body.userFamilyName, req.body.userLessonCredits])
                .then(rows => {
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
                [req.body.userName, req.body.userFamilyName, req.body.userLessonCredits, req.params.id])
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
