/**
* Joudrier Kevin
* Gets all parts for the quote
 **/

import { randomNumber } from './utils.js';
import { quotes } from './quotes_data.js';


export class FragmentsQuotes {

    /**
     * Generate a random theme
     * 
     * @return {string} theme name
     **/
    getRandomTheme() {
        let theme = Object.keys(quotes);
        return theme[randomNumber(0, theme.length)];
    }

    /**
     * Return all parts of the selected theme
     * 
     * @param {string} theme 
     **/
    getFragment(theme) {
        if(theme == undefined){
            return quotes[this.getRandomTheme()];
        }
        
        return quotes[theme];
    }
}