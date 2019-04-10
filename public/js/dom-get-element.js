let myPinkElement = document.getElementById('myPinkButton'); 
let myGreenElement = document.getElementById('myGreenButton'); 

myPinkElement.onclick = function() {
    document.body.style.backgroundColor = '#F0F';    
};

myGreenElement.onclick = function() {
    document.body.style.backgroundColor = '#0F0';    
};