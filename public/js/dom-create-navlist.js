/**
 * Eksempel på hvordan man laver et nav element med ren javascript
 */

//Opretter variabel med nav element
let myNav = document.createElement('nav');
//Opretter variabel med ul element
let myUl = document.createElement('ul');
//Opretter variabel med list element
let myLi = document.createElement('li');
//Opretter variabel med anchor element
let myLink = document.createElement('a');

//Tilføjer anchor element til li element
myLi.appendChild(myLink);
//Tilføjer li element til ul element
myUl.appendChild(myLi);
//Tilføjer ul element til nav element
myNav.appendChild(myUl);
//Tilføjer nav element til body element
document.body.appendChild(myNav);

