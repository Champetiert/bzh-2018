// tableau qui contiendra toutes les sessions du BreizhCamp
talks = 0;
var request = require('request')

exports.init = function (callback) {

    var varListJSON = ['http://2018.breizhcamp.org/json/talks.json', 'http://2018.breizhcamp.org/json/others.json']


    for (let index = 0; index < varListJSON.length; index++) {


        request(varListJSON[index], { json: true }, function (err, res, body) {
            if (err) { return console.log('Erreur', err); }

            // body contient les données récupérées
            //console.log('Ok', body);
            // TODO     => une fois les données récupérées, alimenter la variable talks
            talks += body.length;
            // TODO         => invoquer la callback avec le nombre de sessions récupérées
            if(index==varListJSON.length-1){
                callback(talks);
            }
        });

    }

    
};