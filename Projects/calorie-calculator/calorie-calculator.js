let amount = document.getElementById('amount');
let currency = document.getElementById('currency');
let button = document.getElementById('exchange');
let resultwrapper = document.getElementById('result');
let rate = 0;

button.onclick = function() {

    switch(currency.value) {
        default:
        case 'euro':
            rate = 0.133893;
            break;
        case 'us':
            rate = 0.151542;
            break;
        case 'rub':
            rate = 9.78014;
            break;
    }

    let result = (parseInt(amount.value) * rate).toFixed(2);

    resultwrapper.innerText = result;

}


