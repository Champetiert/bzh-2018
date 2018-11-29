// tableau qui contiendra toutes les sessions du BreizhCamp
let request = require('request-promise-native')
const promesse1$ = request('http://2018.breizhcamp.org/json/talks.json', { json: true });
const promesse2$ = request('http://2018.breizhcamp.org/json/others.json', { json: true });

class Service {
    constructor() {
        this.talks = [];
        this.tabPromesse=[promesse1$, promesse2$];   
    }
    init () {
        return Promise.all(this.tabPromesse)
            .then((tabResult) => {
                this.talks = []
                tabResult.forEach(
                    (result) => {
                        this.talks = this.talks.concat(result)
                    })
                return this.talks.length;
            })

    }
    listerSessions()  {
        console.log(this.talks);
        return this.talks;
    }


    speakers (callback){
        request('http://.2018.breizhcamp.org/conference/speakers/', {}, function (err, res, body) {
            if (err) { return console.log('Erreur', err); }

            let dom = new jsdom.JSDOM(pageHTML);
            let langs = dom.window.document.querySelectorAll(".speaker");
            console.log(body);
        });

    }
}
exports.name = new Service();