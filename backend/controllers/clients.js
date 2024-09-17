const db = require('../config/database');

exports.getClients = async (req, res) => {
  if (req.auth.role !== "admin"){
    return res.status(401).send();
  }
  try {
    const result = await db.pool.query('select * from tb_utilisateur where role = "client"');
    res.json(result)
  }
  catch (e) {
    console.error(e)
  }
};

exports.getIdClients = async (req, res) => {
  if (req.auth.role !== "admin"){
    return res.status(401).send();
  }
  const id = req.params.id;
  try {
    const result = await db.pool.query('select * from tb_utilisateur where id_client=? and role = "client"', id);
    res.json(result)
  }
  catch (e) {
    console.error(e)
  }
};
  