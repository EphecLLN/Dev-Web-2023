const mariadb = require('mariadb');
console.log(process.env.NODE_ENV === "test" ? process.env.test_db_config : process.env.db_config);
const pool = mariadb.createPool(
    process.env.NODE_ENV === "test" ? process.env.test_db_config : process.env.db_config
);

// Expose une méthode pour établir une connexion avec MariaDB SkySQL
module.exports = Object.freeze({
    pool: pool
}); 






