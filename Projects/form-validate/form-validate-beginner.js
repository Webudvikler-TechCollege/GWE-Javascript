const button = document.getElementById('send');

button.onclick = function() {

    //Tjek input:text felt firstname
    const firstname = document.getElementById('firstname');
    if(firstname.value === '') {
        alert('Feltet fornavn må ikke være tomt!');
        firstname.focus();
        return false;
    }

    //Tjek input:text felt lastname
    const lastname = document.getElementById('lastname');
    if(!lastname.value) {
        if(!lastname.nextElementSibling) {
            let message = "<span>Fejl!</span>";
            lastname.insertAdjacentHTML('afterend', message);
            //alert('Feltet efternavn må ikke være tomt!');
            lastname.focus();
            return false;
        }
    }

    //Tjek input:text felt lastname
    const email = document.getElementById('email');
    if(!email.value) {
        alert('Feltet email må ikke være tomt!');
        email.focus();
        return false;
    } else {
        if(!isValidEmail(email.value)) {
            alert('Du skal indtaste en korrekt email adresse!');
            email.focus();
            return false;    
        }
    } 

    //Tjek select felt gender
    const gender = document.getElementById('gender');
    if(gender.value === '') {
        alert('Du skal vælge et køn!');
        gender.focus();
        return false;
    }    

    //Tjek input:checkbox felt accept
    const accept = document.getElementById('accept');
    if(!accept.checked) {
        alert('Du skal acceptere vores betingelser!');
        accept.focus();
        return false;
    }

    alert('Formularen blev afsendt');
}

//Tjekker om værdi har en gyldig email syntaks
function isValidEmail(value) {
    let pattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return pattern.test(value);
}