/**
 * Funktion til at slide navigation med 
 * Video Tutorial fra DevEd på Youtube
 * https://www.youtube.com/watch?v=gXkqy0b4M5g
 */
const navSlider = function() {
    
    //Henter elementer der skal bruges
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    //Sætter click event på burger menu
    burger.onclick = function() {
        //Toggler class nav-active til nav elementet
        nav.classList.toggle('nav-active');

        //Looper listen af nav links 
        navLinks.forEach((link, index) => {
            //Nulstil animation hvis linket har en 
            if(link.style.animation) {
                link.style.animation = '';
            } else {
                //Ellers sæt animation på linket så links fader langsom ind
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`;
            }
        });        
        //Toggle class toggle på burger ikon så den animerer mellem tre streger og et kryds
        burger.classList.toggle('toggle');
    }
}

//Kalder funktionen navSlider()
navSlider();