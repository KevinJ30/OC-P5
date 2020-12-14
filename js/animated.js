/**
 * Joudrier Kevin
 * Manage the animation on the application
 **/
(function() {
    let fadeOutRight = document.querySelectorAll('.fadeOutRight');
    let fadeOutLeft = document.querySelectorAll('.fadeOutLeft');

    /**
     * Create an event on the selected animation elements
     * 
     * @param {Array} listAnimated 
     **/
    let addDisplayNone = (listAnimated) => {
        for(let i = 0; i < listAnimated.length; i++) {
            fadeOutRight[i].addEventListener('animationend', (event) => { handleOutAnimation(event) })
        }
    }

    /**
     * Add a display none at the end of the animation
     * 
     * @param {Event} event 
     **/
    let handleOutAnimation = (event) => {
        event.target.style = "display:none"
    }

    addDisplayNone(fadeOutRight);
    addDisplayNone(fadeOutLeft);
})();