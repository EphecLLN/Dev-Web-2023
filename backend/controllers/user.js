const pool = require('../db');

exports.getAllUsers = (req, res, next) => {
    try {
        const query = "select * from riders";
        const rows = pool.query(query);
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).json({error});
    }
}

exports.getInfoUser = (req, res, next) => {
    try {
        const query = "select * from riders where id = ?";
        const rows = pool.query(query, [req.params.userId]);
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).json({error});
    }
}

exports.createUser = (req, res, next) => {
    try {
        const query = "insert into riders (id, name, familyName, lessonCredits) values (?, ?, ?, ?)";
        const rows = pool.query(query, [req.body.userId, req.body.userName, req.body.userFamilyName, req.body.userLessonCredits]);
        res.status(201).json({message: 'User created'});
    } catch (error) {
        res.status(400).json({error});
    }
}

exports.updateUser = (req, res, next) => {
    try {
        const query = "update riders set name = ?, familyName = ?, lessonCredits = ? where id = ?";
        const rows = pool.query(query, [req.body.userName, req.body.userFamilyName, req.body.userLessonCredits, req.params.userId]);
        res.status(200).json({message: 'User updated'});
    } catch (error) {
        res.status(400).json({error});
    }
}

exports.deleteUser = (req, res, next) => {
    try {
        const query = "delete from riders where id = ?";
        const rows = pool.query(query, [req.params.userId]);
        res.status(200).json({message: 'User deleted'});
    } catch (error) {
        res.status(400).json({error});
    }
}