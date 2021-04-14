let zipcode = 3000;

if(zipcode) {
    if(zipcode >= 1000 && zipcode < 3000) {
        console.log('København');
    } else if(zipcode >= 3000 && zipcode < 3699) {
        console.log('Nordsjælland');
    } else {
        console.log('Ej Danmark');
    }
}
