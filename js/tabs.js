(function() {    
    let sectionActivated = document.querySelector('.section.active');
    let navigationButtons = document.querySelectorAll('.navigation .nav-link');
    let navigationActivated = document.querySelector('.navigation .nav-link.active');

    /**
     * On enregistre l'événement sur les boutons de la navigation
     **/
    for(let i = 0; i < navigationButtons.length; i++) {
        navigationButtons[i].addEventListener('click', (event) => { handleClick(event) })
    }

    /**
     * Click sur le bouton de la navigation
     * 
     * @param {Event} event 
     **/
    let handleClick = (event) => {
        event.preventDefault();
        let targetElement = getTargetElement(event.target);

        // Change le state du bouton
        navigationChangeFocus(targetElement);

        // On recherche la section qui correspond au bouton cliqué
        
        // On supprime la class ative sur la section activé
        sectionActivated.classList.add('hidden');
        sectionActivated.classList.remove('active');

        // Nouvelle section
        sectionActivated = document.querySelector('.' + targetElement.id);
        sectionActivated.classList.remove('hidden');
        sectionActivated.classList.add('active');
    }

    let navigationChangeFocus = (btn) => {
        // Suppression de la class active sur le bouton actuel
        navigationActivated.classList.remove('active');

        // Ajoute la class active au bouton
        navigationActivated = btn;
        btn.classList.add('active');
    }

    let getTargetElement = (element) => {
        return element.tagName === 'A' ? element : element.parentNode;
    }
})();