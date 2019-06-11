/**
 * Henter alle buttons med getElementsByClassName()
 * Denne metode returnerer en HTML collection af buttons 
 * som vi kan loope igennem og styre click event på hver 
 * enkelte button
 */

/* Henter alle buttons ind i variablen myButtons */
let myButtons = document.getElementsByClassName('colorbtn');

/**
 * Hvis du kigger på myButtons i din konsol, vil du se at den fremstår  
 * som en HTMLCollection(6). Det betyder at det er en kollektion af 4
 * buttons indekseret fra 0 - 3. Det betyder at vi kan lave et loop 
 * over kollektionen og dermed gentage det samme script for hver 
 * enkelte button.
 * */ 
console.dir(myButtons);

/**
 * Loopet kan laves med for() og kører igennem hver 
 * button - sætter et click event på den enkelte button 
 * og bruger knappens data attribut til at definere dokumentets 
 * baggrundsfarve.
 */
for(let myButton of myButtons) {
    myButton.onclick = function() {
        // Logger værdien af et af elementets data attributter
        console.log(this.dataset);  
        // this refererer til den knap der klikkes på
        document.body.style.backgroundColor = this.dataset.color;
    }
}