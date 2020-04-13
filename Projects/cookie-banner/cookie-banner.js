/**
 * Dette script kan vise og håndtere et cookiebanner.
 * Brugere vil blive bedt om at acceptere sitets håndtering 
 * af cookies og fjerne banneret når en bruger har accepteret 
 * det.
 */

 if(!localStorage.acceptCookie) {
   //Bygger div tags med cookie banner, text og knappe til accept
   const banner = document.createElement('div'); 
   banner.setAttribute('class', 'cookie-banner');

   const container = document.createElement('div'); //Indre div
   container.setAttribute('class', 'cookie-container');

   container.innerHTML = `
          <p><b>COOKIE INFORMATION</b></p>
          <p>På vores website bruges cookies til at huske dine indstillinger, 
          statistik og personalisering af indhold og annoncer. Denne information 
          deles med tredjepart. Ved fortsat brug af websiden godkender du cookiepolitikken.</p>
          <button id="cookie-accept">OK</button>`;      
    banner.appendChild(container);
    document.body.prepend(banner);

    //Henter accept knap 
    const button = document.querySelector('#cookie-accept');
    //Sætter click event på knap
    button.onclick = () => {
      //Sætter 'cookie' i localStorage
      localStorage.setItem("acceptCookie", true);
      //Fjerner banner
      document.querySelector('.cookie-banner').style.display = 'none';

    }
 }


