const button = document.querySelector('.searchbutton');

button.onclick = function() {
    const zipcode = document.querySelector('#zipcode').value;
    const resultwrapper = document.querySelector('#resultwrapper');
    let district;

    if(zipcode > 999 && zipcode < 3000) {
        district = `Københavns Kommune, Frederiksberg og omegn`;
    } else if(zipcode >= 3000 && zipcode < 3700) {
        district = `Nordsjælland`;
    } else if(zipcode >= 3700 && zipcode < 3800) {
        district = `Bornholm`;
    } else {
        district = "Kunne ikke finde et distrikt."
    }  
    
    resultwrapper.innerText = district;

}