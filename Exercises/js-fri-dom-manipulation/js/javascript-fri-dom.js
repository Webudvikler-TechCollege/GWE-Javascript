const CONTENT = document.getElementById("contentarea");

/**
 * Eksempel 1
 * Tilføjer/fjerner en css klasse med større skrifttype til alle elementer
 * Benytter metoden addEventListener til at lytte på et onclick event på knappen
 */
document.getElementById("example1").addEventListener("click", function() {
    //Henter array med alle child elementer til #contentarea
    var elements = document.querySelectorAll("#contentarea *");
    //Lopper array med elementer
    for(var i = 0; i < elements.length; i++) {
        //Tilføj klassen tx-big hvis den ikke eksisterer i et elements classList
        if(!elements[i].classList.contains("tx-big")) {
            elements[i].classList.add("tx-big");
        } else {
            //Ellers fjern klassen hvis den eksisterer i elementets classList
            elements[i].classList.remove("tx-big");
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
 * Ex 1: Udskift h1 tekst med egen tekst
 */
document.getElementById("ex1").onclick = function() {
    let headers = CONTENT.getElementsByTagName("h1");
    let textnode = "HTML Ipsum Presents";
    if(headers[0].textContent === textnode) {
        headers[0].innerText = "Hello world";
    } else {
        headers[0].innerText = textnode;
    }
};

/**
 * Ex 2
 */
document.getElementById("ex2").onclick = function() {
    let p = Array.from(CONTENT.getElementsByTagName("p"));
    p.forEach( function(item) {
        item.classList.toggle("tx-color-red");
    });
};

/**
 * Ex 3
 */
document.getElementById("ex3").onclick = function() {
    let li = Array.from(CONTENT.getElementsByTagName("li"));
    li.forEach( function(item) {
        item.classList.toggle("tx-rotate");
    });
};

/**
 * Ex 4
 */
document.getElementById("ex4").onclick = function() {
    let arr_headers = [];

    for(let i = 1; i <= 8; i++) {
        let header = "h" + i;
        if(CONTENT.getElementsByTagName(header).length) {
            arr_headers = arr_headers.concat(Array.from(CONTENT.getElementsByTagName(header)));
        }
    }

    arr_headers.forEach( function(item) {
        item.classList.toggle("invisible");
    });
};

/**
 * Ex 5
 */
document.getElementById("ex5").onclick = function() {
    let anchors = Array.from(CONTENT.getElementsByTagName("a"));
    anchors.forEach( function(item) {
        item.classList.toggle("tx-color-red");
    });
};

/**
 * Ex 6
 */
document.getElementById("ex6").onclick = function() {
    let list = Array.from(CONTENT.getElementsByTagName("ol"));
    list[0].children[4].insertAdjacentHTML("afterend", "<li>Nyt punkt</li>");
};

/**
 * Ex 7
 */
document.getElementById("ex7").onclick = function() {
    let list = Array.from(CONTENT.getElementsByTagName("li"));
    for(var i = 0; i < list.length; i++) {
        if(i % 2 === 0) {
            list[i].classList.toggle("tx-color-red");
        }
    }
};

/**
 * Ex 8
 */
document.getElementById("ex8").onclick = function() {
    let ol_list = CONTENT.getElementsByTagName("ol")[0];
    let ul_list = CONTENT.getElementsByTagName("ul")[0];
    let ol_list_inner = ol_list.innerHTML;
    let ul_list_inner = ul_list.innerHTML;
    ol_list.innerHTML = ul_list_inner;
    ul_list.innerHTML = ol_list_inner;
};

/**
 * Ex 9
 */
document.getElementById("ex9").onclick = function() {
    initLiCss("list-start-pos");
    setTimeout(initLiCss, 20, "list-end-pos");
};

function initLiCss(classname) {
    let list = Array.from(CONTENT.getElementsByTagName("li"));
    list.forEach( function(elem) {
        elem.classList.toggle(classname);
    });
}

/**
 * Ex 10
 */
document.getElementById("ex10").onclick = function() {
    let curbutton = this;
    let buttons = Array.from(document.getElementsByTagName("button"));
    buttons.forEach( function(item) {
        if(item != curbutton) {
            item.classList.toggle("hide");
        }
    });
}

/**
 * Ex 11
 */
document.getElementById("ex11").onclick = function() {
    document.body.classList.toggle("body-rotate");
};
