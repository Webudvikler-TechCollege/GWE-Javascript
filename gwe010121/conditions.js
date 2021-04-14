let zipcode = 1000;
let district;

if(zipcode >= 1000 && zipcode < 3000) {
    district = `Københavns Kommune, Frederiksberg og omegn`;
} else if(zipcode >= 3000 && zipcode < 3700) {
    district = `Nordsjælland`;
} else if(zipcode >= 3700 && zipcode < 3800) {
    district = `Bornholm`;
} else {
    district = `Ugyldigt postnummer`;
}

let region = 'Nordsjælland';
let zips = '';

switch(region) {
    case 'Københavns Kommune, Frederiksberg og omegn':
        zips = '1000-2999';
        break;
    case 'Nordsjælland':
        zips = '3000-3699';
        break;
}

console.log(zips);

