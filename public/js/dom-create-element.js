//Sæt h1 element med createElement, innerText og appendChild
var h1 = document.createElement('h1'); //<h1></h1>
h1.innerText = 'Hello World'; //<h1>Hello World</h1>
document.body.appendChild(h1); //Tilføj tag til body tag

//Sæt div element med createElement og setAttribute
var myDiv = document.createElement('div'); //<div></div>
myDiv.setAttribute('id', 'wrapper'); //<div id="wrapper"></div>
myDiv.setAttribute('class', 'mainwrapper blue'); //<div id="wrapper" class="mainwrapper blue"></div>

//Sæt section element og tilføj til div element
var mySection = document.createElement('section');
mySection.innerHTML = '<p class="test">Hilsen Webudviklerne</p>'; //Indsæt html i section tag
myDiv.appendChild(mySection); //Tilføj til div element

//Tilføj div element til body element
document.body.appendChild(myDiv); 

