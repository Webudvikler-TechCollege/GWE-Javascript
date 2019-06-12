/**
 * Script til at skifte et elements css klasse med.
 * Scriptet bruger toggle funktionen som slår 
 * klassen element-active til og fra på et div element
 * Functionen bliver kaldt af et onclcik på en 
 * button
 */

 //Sætter vars til elementer
const button = document.querySelector('body button');
const element = document.querySelector('.element');

//Sætter click event på knap
button.onclick = function() {
    //Toggler klasse på div element
    element.classList.toggle('element-active');
}