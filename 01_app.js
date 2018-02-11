const express = require('express');
const fs = require('fs')
const app = express();
const bodyParser= require('body-parser')
const MongoClient = require('mongodb').MongoClient // le pilote MongoDB
app.use(bodyParser.urlencoded({extended: true}))
/* on associe le moteur de vue au module «ejs» */
/* voici un commentaire */
app.use(express.static('public'));

let db // variable qui contiendra le lien sur la BD

MongoClient.connect('mongodb://127.0.0.1:27017', (err, database) => {
 if (err) return console.log(err)
 db = database.db('carnet_adresse')

// lancement du serveur Express sur le port 8081
 app.listen(8081, () => {
 console.log('connexion à la BD et on écoute sur le port 8081')
 })
})



app.set('view engine', 'ejs'); // générateur de template

app.get('/', function (req, res) {
   var cursor = db.collection('adresse')
                .find().toArray(function(err, resultat){
 if (err) return console.log(err)        
 res.render('gabarit_3.ejs', {adresses: resultat})  
 
  });
})



