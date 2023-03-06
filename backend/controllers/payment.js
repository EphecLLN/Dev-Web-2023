const pool = require('../db');

exports.getUserPayments = (req, res, next) => {
    try {
        const query = "select * from payment where idRider = ?";
        const rows = pool.query(query, [req.params.userId]);
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).json({error});
    }
}

exports.createUserPayment = (req, res, next) => {
    try {
        const query = "insert into payments (id, idRider, paymentDate) values (?, ?, ?)";
        const rows = pool.query(query, [req.params.userId, req.body.payId, req.body.payDate]);
        res.status(201).json({message: 'Payment created'});
    } catch (error) {
        res.status(400).json({error});
    }
}

exports.updateUserPayment = (req, res, next) => {
    try {
        const query = "update payments set idRider = ?, paymentDate = ? where id = ?";
        const rows = pool.query(query, [req.params.userId, req.body.payId, req.body.payDate]);
        res.status(200).json({message: 'Payment updated'});
    } catch (error) {
        res.status(400).json({error});
    }
}

exports.deleteUserPayment = (req, res, next) => {
    try {
        const query = "delete from payments where id = ?";
        const rows = pool.query(query, [req.params.paymentId]);
        res.status(200).json({message: 'Payment deleted'});
    } catch (error) {
        res.status(400).json({error});
    }
}