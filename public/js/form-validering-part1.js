function validateForm(form) {
    console.log(form.firstname);
    if(!form.firstname.value) {
        alert('Udfyld');
    }
}