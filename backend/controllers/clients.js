const db = require('../config/database');

exports.getClients = async (req, res) => {
    try {
      const result = await db.pool.query('select * from tb_utilisateur');
      res.json(result)
    }
    catch (e) {
      console.error(e)
    }
};

exports.getIdClients = async (req, res) => {
    const id = req.params.id;
    try {
      const result = await db.pool.query('select * from tb_utilisateur where id_client=?', id);
      res.json(result)
    }
    catch (e) {
      console.error(e)
    }
};
  