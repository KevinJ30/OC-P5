import { Quotes } from './Quotes.js';

(function() {
    let form_element = document.getElementById('form-configuration');
    let btn_reset_element = document.getElementById('form-configuration-reset');
    let inputQuoteNumber_element = document.getElementById('quote-number');
    let inputQuoteType_element = document.getElementById('quote-type');
    let quoteContent_element = document.getElementById('quote-content');
    let drawQuoteNumber_element = document.getElementById('draw-quote-number');

    let citation = Quotes.getInstance();

    /**
     * Reset le contenu des citations
     * @return { void }
     **/
    let clearContent = () => {
        document.querySelector('.slick-track').innerHTML = "";
        updateNumberCitation(0);
    }

    /**
     * Mise à jour de l'élément nombre de citation
     * 
     * @param {number} number : Nombre de citation
     * @return { void }
     **/
    let updateNumberCitation = (number) => {
        if(number > 1) {
            drawQuoteNumber_element.innerHTML = number + ' citations générées';
        }
        else {
            drawQuoteNumber_element.innerHTML = number + ' citation générée';
        }
    }

    /**
     * Valide les informations du formulaire
     * 
     * @param {Event} event
     **/
    let handleFormSubmit = (event) => {
        event.preventDefault();

        let content = quoteContent_element;
        let quoteType =  inputQuoteType_element.value;
        let quoteNumber =  inputQuoteNumber_element.value;

        citation.setTheme(quoteType);

        // Si le nombre est supperieure a 0 ou si le nombre est inférieure 5
        if(quoteNumber > 0 && quoteNumber <= 5) {
            
            if(quoteType !== "placeholder") {
                // on vide les ancienne informations
                clearContent();
                let i = 0;
                for(i = 0; i < quoteNumber; i++) {
                    let citations = citation.generate(1)
                    createBlocCitation(citations);
                }
                
                // Affichage du nombre de quote
                updateNumberCitation(i);
            }
            else {
                alert("Vous devez séléctionner une catégorie !");
            }

        }
        else {
            alert("Vous devez choisir un nombre de citation 0 à 5 !");
        }

        
    }

    let createBlocCitation = (text) => {
        // Ajoute un element a slick
        $carroussel.slick('slickAdd', '<q class="quote text-center animated fadeInLeft">' + text + '</q>')
    }

    let handleReset = (event) => {
        event.preventDefault();
        /**orm_element.querySelector('#form-configuration-select-default').selected = true**/
        inputQuoteType_element.querySelector('#quote-type-default').selected = true;
        inputQuoteNumber_element.value = 1;
        clearContent();
    }

    /**
     * Events
     **/
    form_element.addEventListener('submit', (event) => {handleFormSubmit(event)})
    btn_reset_element.addEventListener('click', (event) => {handleReset(event)})
})();