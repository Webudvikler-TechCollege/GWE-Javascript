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
document.getElementById('ex1').onclick = function () {
    let std_text = 'Javascript - Fri Opgave - DOM Manipulation';
    // Sætter konstant med h1 element
    const h1 = document.querySelector('h1');
    // Skifter (toggler) mellem ny tekst og den oprindelige tekst
    if (h1.innerText === std_text) {
        h1.innerText = 'Testing 1234';
    } else {
        h1.innerText = std_text;
    }
}

/**
 * Eksempel 2
 * Farver alle paragrafferrøde
 */
document.getElementById('ex2').onclick = function () {
    // Sætter konstant med liste af paragraphs
    const paragraphs = document.getElementsByTagName('p');
    // Looper liste
    for (let paragraph of paragraphs) {
        // Skifter (toggler) css klasse på elementerne
        paragraph.classList.toggle('tx-color-red');
    }
}

/**
 * Eksempel 3
 * Roter alle li tags
 */
document.getElementById('ex3').onclick = function () {
    // Sætter konstant med liste af alle li elementer
    const elements = document.querySelectorAll('li');
    // Looper listen
    for (let element of elements) {
        // Skifter (toggler) css klasse på elementerne
        element.classList.toggle('tx-rotate');
    }
}

/**
 * Eksempel 4.1
 * Fjern alle h tags
 */
document.getElementById('ex4_1').onclick = function () {
    // Looper direkte på en querySelector på headline elementer
    for (let header of document.querySelectorAll('h1,h2,h3')) {
        // Skifter (toggler) css klasse på elementerne
        header.classList.toggle('hide');
    }
}

/**
 * Eksempel 4.2
 * Fjern alle h tags - AVANCERET!!!
 */
document.getElementById('ex4_2').onclick = function() {
    // Sætter konstant til tomt array
    const headers = [];
    // Looper numbers op fra 1 til 8
    for(let i = 1; i <= 8; i++) {
        // Hvis h1 til h8 har en længde (findes)
        if(document.querySelectorAll('h' + i).length) {
            // Tilføj (push) et spread (...) af listens værdier til headers array 
            headers.push(...document.querySelectorAll('h' + i));
        }
    }
    // Looper headers array
    for(let h of headers) {
        // Skifter css klasse på elementerne
        h.classList.toggle('hide');
    }
}

/**
 * Eksempel 5
 * Skift trypografdi på alle links
 */
document.getElementById('ex5').onclick = function () {
    // Looper direkte på en querySelectorAll på anchor elementer
    for (let link of document.querySelectorAll('a')) {
        // Skifter css klasse på elementerne
        link.classList.toggle('tx-color-red');
    }
}

/**
 * Eksempel 6
 * Indsæt nyt li element efter punkt 5
 */
document.getElementById('ex6').onclick = function () {
    // Opretter li element
    const li = document.createElement('li');
    // Indsætter innerText på li element
    li.innerText = "Nyt punkt";
    // Tilføjer li element efter femte li element på ol listen
    document.querySelector('ol li:nth-child(5)').insertAdjacentElement('afterend', li);
}

/**
 * Eksempel 7
 * Skift farve på hver andet li tag
 */
document.getElementById('ex7').onclick = function () {
    // Sætter konsant med liste af hver anden li element
    const elements = document.querySelectorAll('li:nth-child(odd)');
    // Looper listen
    for (let li of elements) {
        // Skifter css klasse på elementer
        li.classList.toggle('tx-color-red');
    }
}

/**
 * Eksempel 8
 * Byt om på ul og ol elementer
 */
document.getElementById('ex8').onclick = function () {
    // Sætter konstant med ul element
    const ul = document.querySelector('ul');
    // Sætter konstant med ol element
    const ol = document.querySelector('ol');
    // Sætter konstant med array af innerHTML fra ul og ol 
    const options = [ol.innerHTML, ul.innerHTML];
    // Sætter ul til ol innerHTML fra options array (0)
    ul.innerHTML = options[0];
    // Sætter ol til ul innerHTML fra options array (1)
    ol.innerHTML = options[1];
}

/**
 * Eksempel 9
 * Få Li tags til at flyve ind fra venstre
 */
document.getElementById('ex9').onclick = function () {
    // Function som kan skifte css klasse på li elementer
    function initListCSS(classname) {
        const lists = document.querySelectorAll('li');
        for (let list of lists) {
            list.classList.toggle(classname)
        }
    }

    // Kalder funktion med li elementers start position
    initListCSS("list-start-pos");
    // Kalder funktion efter 20 ms med elementers slut position
    setTimeout(initListCSS, 20, "list-end-pos");

}

/**
 * Eksempel 10
 * Fjern alle andre knapper
 */
document.getElementById('ex10').onclick = function () {
    // Sætter konstant med liste af alle button elementer
    const buttons = document.querySelectorAll('button');
    // Looper listen
    for(let button of buttons) {
        // Hvis ikke button element er lig med den vi klikker på...
        if(button != this) {
            // Skifte css klasse på element
            button.classList.toggle('hide');
        }    
    }
}

/**
 * Ex 11 
 * Roter body tag
 */
 document.getElementById("ex11").onclick = function() {
     // Skifter css klasse på bodytagget
    document.body.classList.toggle("body-rotate");
};

