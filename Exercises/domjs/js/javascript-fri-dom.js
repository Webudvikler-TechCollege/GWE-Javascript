  
/**
 * Eksempel 1
 * Tilføjer/fjerner en css klasse med større skrifttype til alle elementer
 * Benytter metoden addEventListener til at lytte på et onclick event på knappen
 */
 document.getElementById("example1").addEventListener("click", function() {
    //Henter array med alle child elementer til #contentarea
    let elements = document.querySelectorAll("#contentarea *");
    //Lopper array med elementer
    for(let element of elements) {
        //Tilføj klassen tx-big hvis den ikke eksisterer i et elements classList
        if(!elements.classList.contains("tx-big")) {
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
document.getElementById("example2").onclick = function() {
    //Henter array med alle child elementer til #contentarea og kører en foreach på arrayet
    document.querySelectorAll("#contentarea *").forEach( function(element) {
        //Toggler class tx-big til elementernes classList
        element.classList.toggle("tx-big");
    });
};

/**
 * Eksempel 3
 * Her kommer dine egne scripts til resten af knapperne...
 */
document.getElementById('ex1').onclick = function() {
    const h1 = document.querySelector('h1');
    if(h1.innerText === 'Javascript - Fri Opgave - DOM Manipulation') {
        h1.innerText = 'Testing 1234';
    } else {
        h1.innerText = 'Javascript - Fri Opgave - DOM Manipulation';
    }
}