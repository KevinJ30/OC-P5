(function() {
    let fadeOutRight = document.querySelectorAll('.fadeOutRight');
    let fadeOutLeft = document.querySelectorAll('.fadeOutLeft');

    for(let i = 0; i < fadeOutRight.length; i++) {
        fadeOutRight[i].addEventListener('animationend', (event) => { handleOutAnimation(event) })
    }

    for(let i = 0; i < fadeOutLeft.length; i++) {
        fadeOutLeft[i].addEventListener('animationend', (event) => { handleOutAnimation(event) })
    }

    let handleOutAnimation = (event) => {
        event.target.style = "display:none"
    }
})();