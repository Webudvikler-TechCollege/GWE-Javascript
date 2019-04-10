//Henter button element med id #myPinkButton 
let myPinkElement = document.getElementById('myPinkButton'); 
//Henter button element med id #myGreenButton 
let myGreenElement = document.getElementById('myGreenButton'); 
//Henter button element med id #myResetButton 
let myResetElement = document.getElementById('myResetButton'); 

//Sætter onclick event på myPinkElement som kalder anonym funktion
myPinkElement.onclick = function() {
    //Farv baggrund (body) lyserød
    document.body.style.backgroundColor = '#F0F';    
};

//Sætter onclick event på myGreenElement som kalder anonym funktion
myGreenElement.onclick = function() {
    //Farv baggrund (body) grøn
    document.body.style.backgroundColor = '#0F0';    
};

//Sætter onclick event på myResetElement som kalder anonym funktion
myResetElement.onclick = function() {
    //Nulstil baggrund
    document.body.style.backgroundColor = 'transparent';    
};