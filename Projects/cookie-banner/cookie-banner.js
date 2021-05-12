/**
 * Dette script kan vise og håndtere et cookiebanner.
 * Brugere vil blive bedt om at acceptere sitets håndtering 
 * af cookies og fjerne banneret når en bruger har accepteret 
 * det.
 */
const arrImages = getImageArray();
console.log(arrImages[Math.floor(Math.random() * arrImages.length)]);
let file = '/assets/images/gallery/' + arrImages[Math.floor(Math.random() * arrImages.length)].file;
document.body.style.backgroundImage = `url(${file})`;

if(!localStorage.acceptCookie) {
  // Opretter section element med class attribut
  const cookieBanner = document.createElement('section');
  cookieBanner.setAttribute('class', 'cookie-banner');

  // Opretter div element med class attribut
  const cookieContent = document.createElement('div'); //Indre div
  cookieContent.setAttribute('class', 'cookie-container');

  // Opretter h3 delement med innerText
  const cookieHeader = document.createElement('h3');
  cookieHeader.innerText = 'COOKIE INFORMATION';

  // Opretter paragraph med brødtekst i template string (``)
  const cookieText = document.createElement('p');
  cookieText.innerHTML = `På vores website bruges cookies til at huske dine indstillinger, 
          statistik og personalisering af indhold og annoncer. Denne information 
          deles med tredjepart. Ved fortsat brug af websiden godkender du cookiepolitikken.</p>
          <button id="cookie-accept">OK</button>`;

  // Tilføjer H3 til div element
  cookieContent.appendChild(cookieHeader);
  // Tilføjer paragraph til div element
  cookieContent.appendChild(cookieText);
  // Tilføjer div element til section element
  cookieBanner.appendChild(cookieContent);
  // Tilføjer section element til body element
  document.body.prepend(cookieBanner);

  //Henter accept knap 
  const button = document.querySelector('#cookie-accept');
  //Sætter click event på knap
  button.onclick = function() {
    //Sætter 'cookie' i localStorage
    localStorage.setItem("acceptCookie", true);
    //Fjerner banner
    document.querySelector('.cookie-banner').style.display = 'none';

  }
}


