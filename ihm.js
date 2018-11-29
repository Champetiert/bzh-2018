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


exports.start = ()=>
    rl.question(textMenu, (saisie)=> {
        service.init().then((taille)=>console.log(taille));

            switch (saisie) {
                case '1':
                service.init().then((taille)=>console.log(taille));
                    break;
                case '2':
                    service.listerSessions().forEach(tabTalk =>  
                        console.log(`[talks]${tabTalk.name}(${tabTalk.speakers})`)
                        );
                    break;
                default:
                    break;
            }
            rl.close();
        });

