const button = document.getElementById('send');

button.onclick = function() {
    //Tjek felt firstname
    const firstname = document.getElementById('firstname');
    if(firstname.value === '') {
        alert('Feltet fornavn må ikke være tomt!');
        firstname.focus();
        return false;
    }

    //Tjek felt lastname
    const lastname = document.getElementById('lastname');
    if(lastname.value === '') {
        alert('Feltet efternavn må ikke være tomt!');
        lastname.focus();
    }
}