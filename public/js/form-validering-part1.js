/**
 * Funktion til validering af forms
 * @param {object} form 
 */
function validateForm(form) {
    //Hvis feltets værdi er tom...
    if(!form.firstname.value) {
        //Definer variabel med fejl meddelelse
        let msg = "Du skal udfylde feltet";
        //Indsæt msg efter det pågældende felts sluttag
        form.firstname.insertAdjacentHTML('afterend', msg);
        //Bryd ud af funktionen
        return false;
    }
}