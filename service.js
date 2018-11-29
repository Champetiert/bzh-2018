// tableau qui contiendra toutes les sessions du BreizhCamp
let request = require('request-promise-native')
let jsdom = require('jsdom');
const promesse1$ = request('http://2018.breizhcamp.org/json/talks.json', { json: true });
const promesse2$ = request('http://2018.breizhcamp.org/json/others.json', { json: true });

class Service {
    constructor() {
        this.talks = [];
        this.tabPromesse = [promesse1$, promesse2$];
    }
    init() {
        return Promise.all(this.tabPromesse)
            .then((tabResult) => {
                this.talks = [];
                tabResult.forEach(
                    (result) => {
                        this.talks = this.talks.concat(result);
                    })
                return this.talks.length;
            })
    }
    listerSessions() {
        if (this.talks.length === 0) {
            return this.init().then(nb => this.talks);
        } else {
            return Promise.resolve(this.talks);
        }
    }

    speakers() {
        return request('http://2018.breizhcamp.org/conference/speakers/', {})
            .then((pageHTML)=>{
                let dom = new jsdom.JSDOM(pageHTML);
                return dom.window.document.querySelectorAll(".speaker .media-heading");  
            })
            
    }
}    
module.exports = new Service();