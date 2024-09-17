const jwtOptions = require("./../config/jwt");
const db = require('../config/database');
const bcrypt = require('bcrypt');
const jose = require('jose');

exports.connexionCompte = async (req, res) => {
    const mail = req.body.mail_client;
    const mdp = req.body.mdp;
    try {
      const result = await db.pool.query(
        'select id_client, mail_client, prenom, nom, role, nom_societe, telephone, mdp from tb_utilisateur where mail_client =?', mail
      );//rajouter dans le select
      if (result.length > 0){
        const utilisateur = result[0];
        const hashedPassword = utilisateur.mdp;
        const passwordMatch = await bcrypt.compare(mdp, hashedPassword);
              
        if (passwordMatch) {
              
          const jwt = await new jose.SignJWT({ 'role': utilisateur.role }) //mettre à droite de rôle : result[0].role
            .setProtectedHeader({ alg: jwtOptions.alg })
            .setIssuedAt()
            .setSubject(utilisateur.id_client)
            .setExpirationTime('2h')
            .sign(jwtOptions.secret)
    
                
            return res.status(201).json({utilisateur:utilisateur, token:jwt})
        }
      } 
        res.sendStatus(401);// non authorisée
      
    } catch (err) {
        console.log(err);
        res.sendStatus(500)// erreur dans le processus;
      }
  };