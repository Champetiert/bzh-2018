var service = require('./service');
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var textMenu = `************************* 
1. Rafraichir les données 
2. Lister les sessions
3. Lister les présentateurs
99. Quitter\n`

var promise1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('foo');
    }, 300);
});

exports.start = function () {
    promise1.then(rl.question(textMenu, function (saisie) {
        service.init(function (nb) {
            console.log('[init]', nb, 'sessions trouvées.')

            switch (saisie) {
                case '1':
                    service.init(function (nb) {
                        console.log('[init]', nb, 'sessions trouvées.')
                    });
                    break;
                case '2':
                    service.listerSessions(function (callback) {
                        callback.forEach(tabTalk => {
                            console.log('[talks]', tabTalk.name,"(",tabTalk.speakers,")");
                        });    
                    }
                    )
                    break;
                default:
                    break;
            }
            rl.close();
        });
    }))
};