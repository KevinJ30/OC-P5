import { randomNumber } from './utils.js';
import { quotes } from './quotes_data.js';

export class FragmentsQuotes {

    /**
     * Generate random theme
     * 
     * @return {string} theme name
     **/
    getRandomTheme() {
        let theme = Object.keys(quotes);
        return theme[randomNumber(0, theme.length)];
    }

    /**
     * Return the fragment of the selected theme
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