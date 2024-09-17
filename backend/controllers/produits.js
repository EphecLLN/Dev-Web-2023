const db = require('../config/database');
  
exports.getProduits = async (req, res) => {
  try {
    const result = await db.pool.query('select * from tb_produits');
    console.log(result);
    res.send(result);
  } catch (err) {
    console.log(err);
  }
};
  
exports.postProduits = async (req, res) => {
    const nom_produit = req.params.nom;
    try {
      const result = await db.pool.query(
        'insert into tb_produits (nom) values (?)', nom_produit);
      console.log(result);
      res.sendStatus(201);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  };
  
exports.deleteProduits = async (req, res) => {
    const id = req.params.id;
    try {
      const result = await db.pool.query('delete from tb_produits where id_produit = ?', id);
      console.log(result);
      res.sendStatus(200);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  };

exports.updateProduits = async (req, res) => {
    const id = req.params.id;
    const nom_produit = req.body.nom;
    try {
      const result = await db.pool.query(
        'update tb_produits set nom = ? where id_produit = ?',
        [nom_produit, id]
      );
      console.log(result);
      res.sendStatus(200);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
};
