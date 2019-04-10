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
    console.log(document.body.style.backgroundColor);
    if(document.body.style.backgroundColor === 'green') {
        //Farv baggrund (body) grøn
        document.body.style.backgroundColor = 'transparent';    
    } else {
        document.body.style.backgroundColor = 'green';    
    }
};

//Sætter onclick event på myResetElement som kalder anonym funktion
myResetElement.onclick = function() {
    //Nulstil baggrund
    document.body.style.backgroundColor = 'transparent';    
};