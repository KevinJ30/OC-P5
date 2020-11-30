import { randomNumber } from "./utils.js";

export class Quotes {

    /**
     * Constructor
     * 
     * @param {Object} fragmentsQuotes 
     **/
    constructor(fragmentsQuotes, theme) {
        if(typeof fragmentsQuotes === 'object') {
            this.FragmentsQuotes = fragmentsQuotes;
        }
        else {
            throw 'type of object passed to the argument'
        }

        this.theme = theme;
    }

    /**
     * Modifier le thème séléctionné
     * 
     * @param {theme} theme
     * @return {void}
     **/
    setTheme (theme) {
        this.theme = theme;
    }

    loadFragment(theme) {
        return this.fragmentsQuotes = this.FragmentsQuotes.getFragment(theme);
    }

    /**
     * Construit une citation
     * 
     * @param {string} theme : theme séléctionner contruire la citation
     * @return {string} : citation
     **/
    buildCitation() {
        return this.fragmentsQuotes.startQuote[randomNumber(0, this.fragmentsQuotes.startQuote.length)] + ' ' + this.fragmentsQuotes.middleQuote[randomNumber(0, this.fragmentsQuotes.middleQuote.length)] + ' ' + this.fragmentsQuotes.endQuote[randomNumber(0, this.fragmentsQuotes.endQuote.length)];
    }

    /**
     * Génére plusieur citation
     * @param {number} number 
     **/
    generate(number) {
        this.loadFragment(this.theme);

        let quotes = []
        
        for(let i = 0; i < number; i++) {
            quotes.push(this.buildCitation())
        }

        return quotes;
    }
}