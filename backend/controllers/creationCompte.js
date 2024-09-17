const db = require('../config/database');
const bcrypt = require('bcrypt');

exports.creationCompte = async (req, res) => {
    const nom = req.body.nom;
    const mdp = req.body.mdp;
    const role = req.body.role;
    const fonction = req.body.fonction;
    const telephone = req.body.telephone;
    const nom_societe = req.body.nom_societe;
    const mail_client = req.body.mail_client;
    const prenom = req.body.prenom;

    try {
      const hashedPassword = await bcrypt.hash(mdp, 10); // Hash du mot de passe avec un coût de 10
      const result = await db.pool.query(
        'insert into tb_utilisateur (nom, mdp, role, fonction, telephone, nom_societe, mail_client, prenom) values (?, ?, ?, ?, ?, ?, ?, ?)', [nom, hashedPassword, role, fonction, telephone, nom_societe, mail_client, prenom]);
      //console.log(await db.pool.query("select * from tb_utilisateur"));
      res.send(result);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
};