// tableau qui contiendra toutes les sessions du BreizhCamp
//talks = 0;
talks=[]
var request = require('request')

exports.init = function (callback) {

    request('http://2018.breizhcamp.org/json/talks.json', { json: true }, function (err, res, body) {
        if (err) { return console.log('Erreur', err); }

        //une fois les données récupérées, alimenter la variable talks
        //talks += body.length;
        talks=talks.concat(body)
        //invoquer la callback avec le nombre de sessions récupérées
        request('http://2018.breizhcamp.org/json/others.json', { json: true }, function (err, res, body) {
            if (err) { return console.log('Erreur', err); }
            // une fois les données récupérées, alimenter la variable talks
            //talks += body.length;
            talks=talks.concat(body)

            //invoquer la callback avec le nombre de sessions récupérées
           //callback(talks);
           callback(talks.length)
        });
    });

};

exports.listerSessions=function (callback) {
    callback(talks)
};    