/**
 * Joudrier Kevin
 * Manage tabs button
 **/
(function() {    
    let sectionActivated = document.querySelector('.section.active');
    let navigationButtons = document.querySelectorAll('.navigation .nav-link');
    let navigationActivated = document.querySelector('.navigation .nav-link.active');

    /**
     * On enregistre l'événement sur les boutons de la navigation
     * Register event button navigation
     **/
    for(let i = 0; i < navigationButtons.length; i++) {
        navigationButtons[i].addEventListener('click', (event) => { handleClick(event) })
    }

    /**
     * Click on the button navigation
     * 
     * @param {Event} event 
     **/
    let handleClick = (event) => {
        event.preventDefault();
        let targetElement = getTargetElement(event.target);

        // Change state on the button
        navigationChangeFocus(targetElement);
        
        // Delete class active on the active section
        sectionActivated.classList.add('hidden');
        sectionActivated.classList.remove('active');

        // Nouvelle section
        sectionActivated = document.querySelector('.' + targetElement.id);
        sectionActivated.classList.remove('hidden');
        sectionActivated.classList.add('active');
    }

    let navigationChangeFocus = (btn) => {
        // Delete class active on the current button
        navigationActivated.classList.remove('active');

        // Add the active class to the button
        navigationActivated = btn;
        btn.classList.add('active');
    }

    let getTargetElement = (element) => {
        return element.tagName === 'A' ? element : element.parentNode;
    }
})();