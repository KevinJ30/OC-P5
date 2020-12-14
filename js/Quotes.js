/**
 * Jodurier Kevin
 * Build all quotes with the given parameters
 **/

import { randomNumber } from "./utils.js";
import { FragmentsQuotes } from './FragmentQuotes.js';

export class Quotes {
    static instance = null;

    /**
     * Constructor
     * 
     * @param {Object} FragmentsQuotes
     **/
    constructor(theme) {
        this.FragmentsQuotes = new FragmentsQuotes();
        this.theme = theme;
    }

    /**
     * Declare singleton of the class
     * 
     * @return { Quotes } quotes : Instance de la class quote
     **/
    static getInstance = () => {
        if(!this.instance) {
            this.instance = new Quotes();
        }
        
        return this.instance;
    }

    /**
     * Edit selected theme
     * 
     * @param {theme} theme
     * @return {void}
     **/
    setTheme (theme) {
        this.theme = theme;
    }

    /**
     * Load quote parts for the selected theme
     * 
     * @param {string} theme 
     **/
    loadFragment(theme) {
        return this.fragmentsQuotes = this.FragmentsQuotes.getFragment(theme);
    }

    /**
     * Build quote
     * 
     * @return {string} : quote
     **/
    buildCitation() {
        return this.fragmentsQuotes.startQuote[randomNumber(0, this.fragmentsQuotes.startQuote.length)] + ' ' + this.fragmentsQuotes.middleQuote[randomNumber(0, this.fragmentsQuotes.middleQuote.length)] + ' ' + this.fragmentsQuotes.endQuote[randomNumber(0, this.fragmentsQuotes.endQuote.length)];
    }

    /**
     * Return all quotes generated for the number indicate
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