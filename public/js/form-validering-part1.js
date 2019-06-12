  /**
 * Funktion til validering af forms
 * @param {object} form 
 */
function validateForm(form) {
    //console.dir(form.firstname.value);

    let result = true;
 
    //Hvis feltets værdi er tom...
    if(!form.firstname.value) {
        //Definer variabel med fejl meddelelse
        if(!form.firstname.nextElementSibling) {
            let msg = '<span class="text-error">Du skal udfylde feltet</span>';
            //Indsæt msg efter det pågældende felts sluttag
            form.firstname.insertAdjacentHTML('afterend', msg);
        }
        //Bryd ud af funktionen
        result = false;
        return false;
    }   

    //Hvis feltets værdi er tom...
    if(!form.lastname.value) {
        //Kalder alert boks med fejl besked
        alert('Du skal udfylde feltet!');
        //Bryd ud af funktionen
        result = false;
        return false;
    }      

    if(result) {
        form.submit();
    }
}