/**
 * Returnerer moms værdi og valuta kode af et beløb
 * @param {number} price 
 * @param {string} currency - default er DKK
 */
function getVat(price, currency = "DKK") {
    return Math.round(price * 0.25) + ' ' + currency;
}

/* Kald af funktion med et argument */
let vat = getVat(23499.95);
//console.log(vat);

/* Kald af funktion med to argumenter */
let vat2 = getVat(995, 'EUR');
//console.log(vat2);

/**
 * Funktion til at teste for loop med
 * @param {number} max 
 */
function counter(max = 10) {
    for(let i = 1; i <= max; i++) {
        console.log(i);
    }
}

counter(5);