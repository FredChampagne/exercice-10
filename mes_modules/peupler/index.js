// Le fichier index.js utilise le module tableaux.js

const tableau = require('./tableaux')

let longTabNom = tableau.tabNom.length
let longTabPrenom = tableau.tabPrenom.length

const genere_telephone = ()=> {
  let sTel = ''
  for (let k=0 ; k<10 ; k++)
  {
    if (k== 3 || k == 6) {sTel += '-'}
    if (k== 0){
      sTel += Math.floor(Math.random()*9)+1  
    }
    else{
      sTel += Math.floor(Math.random()*10)
    }  
    }
  return sTel
  }




const peupler_json = ()=> {

   let tabMembre = []
   let nom
   let prenom
   for (let k=0 ; k<20 ; k++)
   {
     tabMembre[k] =
     {
       nom :  tableau.tabNom[Math.floor(Math.random()*longTabNom)],
       prenom :  tableau.tabPrenom[Math.floor(Math.random()*longTabPrenom)],
       telephone : genere_telephone()
     }
   }

  return tabMembre
}


// on exporte la fonction peupler_json
module.exports = peupler_json;