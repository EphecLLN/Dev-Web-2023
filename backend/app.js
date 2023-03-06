const express = require('express');
const mariadb = require('mariadb');
const userRoutes = require('./routes/user');
const paymentsRoutes = require('./routes/payment');
const pool = require('./db');

require('dotenv').config({path :'.env-local'});
console.log(process.env.BRUH)


const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use("/", (req, res)=>{
    pool.getConnection()
        .then(conn => {
        conn.query("select * from riders")
            .then(rows => {
                console.log(rows);
                res.status(200).json(rows);
            })
    })
})

app.use("/api/payments", paymentsRoutes);
/**
 * Si requete /api/payment renvoie vers le routeur /routes/payment.js
 * Voir la suite des explications dans le fichier /routes/payment.js
 */
app.use("/api/user", userRoutes);
/**
 * Tout ce que j'ai noté dans celui du dessus qui renvoie à payments
 * est similaire à celui ci mais celui ci renvoie au
 * routeur /routes/user.js
 * et derrière au controller /controllers/user.js
 */

module.exports = app;

