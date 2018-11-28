var request = require('request');

request('http://.2018.breizhcamp.org/conference/speakers/', {}, function(err, res, body) {
    if (err) { return console.log('Erreur', err); }

    console.log(body);
});