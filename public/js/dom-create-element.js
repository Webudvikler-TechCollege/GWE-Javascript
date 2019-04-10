//Sæt h1 element med createElement, innerText og appendChild
var h1 = document.createElement('h1'); //<h1></h1>
h1.innerText = 'Hello World'; //<h1>Hello World</h1>
document.body.appendChild(h1); //Tilføj tag til body tag

//Sæt div element med createElement og setAttribute
var hest = document.createElement('div'); //<div></div>
hest.setAttribute('id', 'wrapper'); //<div id="wrapper"></div>
hest.setAttribute('class', 'mainwrapper blue'); //<div id="wrapper" class="mainwrapper blue"></div>

//Sæt section element og tilføj til div element
var salut = document.createElement('section');
salut.innerHTML = '<p class="test">Hilsen Webudviklerne</p>'; //Indsæt html i section tag
hest.appendChild(salut); //Tilføj til div element

//Tilføj div element til body element
document.body.appendChild(hest); 

