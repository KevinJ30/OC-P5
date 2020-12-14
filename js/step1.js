/**
 * Joudrier Kevin
 * Generator step 1
 **/
import { Quotes } from './Quotes.js';

(function() {
    let btn_generate = document.getElementById('citation-btn-generate');
    let bloc_step = document.querySelector('.bloc__step1');

    let handleClick = (event) => {
            let citation1 = Quotes.getInstance();
            let citation_text = citation1.generate(1)
            
            // Add a quote under the play button
            let citation_element = createBlocCitation(citation_text)
            
            let lastQuote = bloc_step.querySelector('.quote');
            if(lastQuote != undefined) {
                lastQuote.remove()
            }

            bloc_step.appendChild(citation_element);

            // Add a quote in the console
            console.log(citation1.generate(1))
    }

    let createBlocCitation = (text) => {
        // Add a quote under the play button
        let quote = document.createElement('q');
        let quote_text_element = document.createTextNode(text)

        quote.classList.add('quote')
        quote.classList.add('text-center')
        quote.classList.add('animated')
        quote.classList.add('fadeInLeft')

        quote.appendChild(quote_text_element);

        return quote;
    }

    btn_generate.addEventListener('click', (event) => {handleClick(event)});
})();
