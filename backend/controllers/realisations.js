const db = require('../config/database');

exports.getRealisations = async (req, res) => {
    try {
      const result = await db.pool.query('select * from tb_realisations');
      console.log(result);
      res.send(result);
    } catch (err) {
      console.log(err);
    }
  };
  
exports.getIdRealisations = async (req, res) => {
    const id = req.params.id;
    try {
      const result = await db.pool.query('select * from tb_realisations where id_realisation =?', id);
      console.log(result);
      res.send(result);
    } catch (err) {
      console.log(err);
    }
  };