const btn = document.querySelector('#submit2newsletter');

btn.onclick = function() {
    let result = true;

    const inputElements = document.querySelectorAll('input');
    const errorWrapper = document.querySelector('#error-wrapper');

    for(let element of inputElements) {
        if(!element.value) {
            if(element.name === "fullname") {
                errorWrapper.innerHTML = 'Du skal udfylde feltet navn';
            }
            if(element.name === "email") {
                errorWrapper.innerHTML = 'Du skal udfylde feltet email';
            }
            result = false;
            return false;
        }
    }

    if(result) {
        errorWrapper.innerHTML = 'Din formular er sendt';
    }
}