//Henter button element med id #myPinkButton 
let myPinkElement = document.getElementById('myPinkButton'); 
//Henter button element med id #myGreenButton 
let myGreenElement = document.getElementById('myGreenButton'); 
//Henter button element med id #myCustomButton - farve hentes fra knappens data attribut
let myButtonElement = document.getElementById('myButton'); 
//Henter button element med id #myResetButton 
let myResetElement = document.getElementById('myResetButton'); 

//Sætter onclick event på myPinkElement som kalder anonym funktion
myPinkElement.onclick = function() {
    //Log 'denne' knap når der klikkes
    //console.dir(this);
    //Farv baggrund (body) lyserød
    document.body.style.backgroundColor = '#F0F';    
};

//Sætter onclick event på myGreenElement som kalder anonym funktion
myGreenElement.onclick = function() {
    //Log dokumentets baggundsfarve
    //console.dir(document.body.style.backgroundColor);
    if(document.body.style.backgroundColor === 'green') {
        //Gør tranpsarent hvis farve er sat
        document.body.style.backgroundColor = 'transparent';    
    } else {
        //Farv baggrund (body) grøn
        document.body.style.backgroundColor = 'green';    
    }
};

//Sætter onclick event på myButton og farv baggrund med den farve der kommer fra data attributten color
myButtonElement.onclick = function() {
    //Log 'denne' knaps data attribut
    //console.dir(this.dataset.color);
    //Farv baggrund (body) lyserød
    document.body.style.backgroundColor = '#' + this.dataset.color;    
};

//Sætter onclick event på myResetElement som kalder anonym funktion
myResetElement.onclick = function() {
    //Nulstil baggrund
    document.body.style.backgroundColor = 'transparent';    
};