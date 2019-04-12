"use strict";

//writeButtons();
/**
 * Funktion som opretter buttons med type og click event
 * Hver knap sætter en random baggrundsfarve på dokumentets 
 * body tag
 * @param {int} number Antal af knapper - default er 5
 */
function writeButtons(number = 5) {
    //Gammeldaws loop med i variabel
    for(let i = 1; i <= number; i++) {
        //Opretter button element
        let myButton = document.createElement('button');
        //Sætter attribut type til button
        myButton.setAttribute('type', 'button');
        //Sætter innerText til 'Farve ' plus looprundens nummer (i)
        myButton.innerText = 'Farve ' + i;
        //Sætter click event på knappen
        myButton.onclick = function() {
            //Henter random hex kode til farve
            let randColor = Math.ceil(Math.random()*16777215).toString(16);
            console.log(randColor);
            //Sætter baggrundsfarve
            document.body.style.backgroundColor = '#' + randColor;
        }
        //Tilføjer knap til div element #buttonpanel
        document.getElementById('buttonpanel').appendChild(myButton);
    }
}

function test(min) {
    for(let i = 100; i > min; i--) {
        console.log(i);
    }
}

test(80);
