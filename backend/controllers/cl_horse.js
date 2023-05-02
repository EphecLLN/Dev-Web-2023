const pool = require('../db');

exports.options = (req, res, next) => {
    pool.getConnection()
        .then(conn => {
            conn.query("CALL formOptions()")
                .then(rows => {
                    console.log("Calling  formOptions");
                    res.status(200).json(rows[0]);
                })
                .catch(err => {
                        res.status(400).json({err});
                    }
                )
            conn.release()
        })
        .catch(err => {
            res.status(400).json({err});
        })
}

exports.addHorse = (req, res, next) => {

    function dataVerfication() {
        let errormsg = []
        /*
        if (req.body.photo !== null) { //Verif Photo
            let parts = req.body.photo.name.split('.');
            let fileSize = req.body.photo.size / 1024 / 1024; // in MiB
            if (fileSize > 8 || !["png", "jpg"].includes(parts[parts.length - 1])) {
                return false;
            }
        } else {}*/
        if (typeof req.body.birthdate !== "string" || new Date(req.body.birthdate) > new Date()) { //Verif Date
            errormsg.push("Date invalide: La date de naissance du cheval ne peut pas être dans le futur")
        } else {
            req.body.birthdate = new Date(req.body.birthdate).toISOString().slice(0, 19).replace('T', ' ')
        }
        if (typeof req.body.hname !== "string" || req.body.hname.length > 100 || req.body.hname.length < 1) { //Verif name
            errormsg.push("Nom invalide: Le nom du cheval doit contenir entre 1 et 100 caractères")
        } else {}
        if (!Number.isInteger(req.body.height) || req.body.height > 500 || req.body.height < 20) { //Verif height
            errormsg.push("Taille invalide: La taille du cheval ne peut être comprise qu'entre 20 et 500 cm")
        } else {}
        if (typeof req.body.comment !== "string" || req.body.comment.length > 500000) { //Verif comment
            errormsg.push("Commentaire invalide: Le commentaire ne peut pas dépasser 500000 caractères")
        } else {}
        if (!Number.isInteger(req.body.breed) && req.body.breed !== null) { //Verif breed
            errormsg.push("La valeur de la race est invalide")
        }else{}
        if (!Number.isInteger(req.body.coat) && req.body.coat !== null) { //Verif coat
            errormsg.push("La valeur de la robe est invalide")
        }else{}
        if (!Number.isInteger(req.body.breeder) && req.body.breeder !== null) { //Verif breeder
            errormsg.push("La valeur de l'éleveur est invalide")
        }else{}
        if (typeof req.body.statut !== "string" || !["elevage", "competition", "manege", "autre"].includes(req.body.statut)){ //Verif statut
            errormsg.push("La valeur du statut est invalide")
        }else{}
        if (typeof req.body.gender !== "string" || !["male", "female"].includes(req.body.gender)){
            errormsg.push("La valeur du sexe est invalide")
        } else {}
        if(!errormsg.length > 0){
            return true
        }else {
            res.status(200).json({errormsg});
            return false
        }
    }
    if(dataVerfication()){
        console.log("Vérifications ok")
    pool.getConnection()
        .then(conn => {
            conn.query(`CALL newHorse(?,?,?,?,?,?,?,?,?,?);`,[req.body.hname, req.body.photo, req.body.gender, req.body.birthdate, req.body.breed, req.body.height, req.body.statut, req.body.comment, req.body.breeder, req.body.coat] )
                .then(rows => {
                    console.log("Calling  newHorse");
                    res.status(200).json();
                })
                .catch(err => {
                        console.log(err);
                        res.status(400).json({err});
                    }
                )
            conn.release();
        })
        .catch(err => {
            res.status(400).json({err});
        })
    }
}
