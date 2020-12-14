/**
 * Joudrier Kevin
 * Contains all utility functions  
 */

/**
 * 
 * @param { number } min : valeur minimum 
 * @param {*} max : valeur maximum
 **/
export let randomNumber = (min, max) => {
    return Math.trunc(Math.random() * ((max) - min) + min);
}