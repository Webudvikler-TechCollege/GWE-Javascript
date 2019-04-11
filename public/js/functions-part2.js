/**
 * Funktion som opretter buttons med type og click event
 * Hver knap sætter en random baggrundsfarve på dokumentets 
 * body tag
 * @param {int} number Antal af knapper - default er 5
 */
function writeButtons(number = 5) {
    //Gammeldaws loop med i variabel
    for(let i = 0; i <= 5; i++) {
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
            //Sætter baggrundsfarve
            document.body.style.backgroundColor = '#' + randColor;
        }
        //Tilføjer knap til div element #buttonpanel
        document.getElementById('buttonpanel').appendChild(myButton);
    }
}

writeButtons();

/**
 * Funktion til at sætte baggrundsfarve med 
 * Modtager farvenavn som parameter
 * @param {string} color 
 */
function setColor(color) {
    document.body.style.backgroundColor = color;    
}