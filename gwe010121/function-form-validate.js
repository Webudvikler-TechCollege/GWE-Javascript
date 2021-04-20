function formValidate(form) {
    const messageWrapper = document.getElementById('messagewrapper');
    let status = true;

    if(!form.fullname.value) {
        messageWrapper.innerText = 'Du skal udfylde feltet navn';
        status = false;
        return false;
    } else if(!isValidAlpha(form.fullname.value)) {
        messageWrapper.innerText = 'Du har ikke indtastet et gyldigt navn.';
        status = false;
        return false;
    }

    if(!form.email.value) {
        messageWrapper.innerText = 'Du skal udfylde feltet email';
        status = false;
        return false;
    } else if(!isValidEmail(form.email.value)) {
        messageWrapper.innerText = 'Du har ikke indtastet en gyldig email!';
        status = false;
        return false;
    }

    if(status) {
        messageWrapper.innerText = "Formularen kan sendes";
    }
}

//Tjekker om værdi er et nummer
function isValidNumber(value) {
    let pattern = /^[0-9]+$/;
    return pattern.test(value);
}

//Tjekker om værdi er alfabet
function isValidAlpha(value) {
    let pattern = /^[A-ZÆØÅa-zæøå ]+$/;
    return pattern.test(value);
}

//Tjekker om værdi har en gyldig email syntaks
function isValidEmail(value) {
    let pattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return pattern.test(value);
}

//Tjekker at værdi har en gyldig længde
function isValidLength(value, min, max) {
    let pattern = RegExp('^[0-9A-Za-z@#$%]{'+min+','+max+'}$');
    return pattern.test(value);
}