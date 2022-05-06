// Eksempler Maj 2021

/**
 * Eksempel 1
 * Tilføjer/fjerner en css klasse med større skrifttype til alle elementer
 * Benytter metoden addEventListener til at lytte på et onclick event på knappen
 */
document.getElementById("example1").addEventListener("click", function () {
    //Henter array med alle child elementer til #contentarea
    let elements = document.querySelectorAll("#contentarea *");
    //Lopper array med elementer
    for (let element of elements) {
        //Tilføj klassen tx-big hvis den ikke eksisterer i et elements classList
        if (!elements.classList.contains("tx-big")) {
            elements.classList.add("tx-big");
        } else {
            //Ellers fjern klassen hvis den eksisterer i elementets classList
            elements.classList.remove("tx-big");
        }
    }
});

/**
 * Eksempel 2
 * Toggler en css klasse med større skrifttype til alle elementer
 * Anvender onclick metode direkte på getElementById metoden
 * Anvender forEach metode til at loope array med
 */
document.getElementById("example2").onclick = function () {
    //Henter array med alle child elementer til #contentarea og kører en foreach på arrayet
    document.querySelectorAll("#contentarea *").forEach(function (element) {
        //Toggler class tx-big til elementernes classList
        element.classList.toggle("tx-big");
    });
};

/**
 * Opgave 1
 * Skift indhold på h1 tag
 */

/**
 * Eksempel 2
 * Farver alle paragrafferrøde
 */

/**
 * Eksempel 3
 * Roter alle li tags
 */

/**
 * Eksempel 4.1
 * Fjern alle h tags
 */

/**
 * Eksempel 4.2
 * Fjern alle h tags - AVANCERET!!!
 */

/**
 * Eksempel 5
 * Skift trypografdi på alle links
 */

/**
 * Eksempel 6
 * Indsæt nyt li element efter punkt 5
 */

/**
 * Eksempel 7
 * Skift farve på hver andet li tag
 */

/**
 * Eksempel 8
 * Byt om på ul og ol elementer
 */

/**
 * Eksempel 9
 * Få Li tags til at flyve ind fra venstre
 */

/**
 * Eksempel 10
 * Fjern alle andre knapper
 */

/**
 * Eksempel 11 
 * Roter body tag
 */

