const db = require('../config/database');

exports.getServices = async (req, res) => {
    try {
      const result = await db.pool.query('select * from tb_services');
      console.log(result);
      res.send(result);
    } catch (err) {
      console.log(err);
    }
  };
  
  exports.getIdServices = async (req, res) => {
    const id = req.params.id;
    try {
      const result = await db.pool.query('select * from tb_services where id_service =?', id);
      console.log(result);
      res.send(result);
    } catch (err) {
      console.log(err);
    }
  };