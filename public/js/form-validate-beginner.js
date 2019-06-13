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
        alert('Feltet efternavn må ikke være tomt!');
        lastname.focus();
        return false;
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