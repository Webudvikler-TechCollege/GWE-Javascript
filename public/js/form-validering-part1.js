  /**
 * Funktion til validering af forms
 * @param {object} form 
 */
function validateForm(form) {
    let result = true;
 
    //Hvis feltets værdi er tom...
    if(!form.firstname.value) {
        //Definer variabel med fejl meddelelse
        if(!form.firstname.nextElementSibling) {
            let msg = '<span class="error">Du skal udfylde feltet</span>';
            //Indsæt msg efter det pågældende felts sluttag
            form.firstname.insertAdjacentHTML('afterend', msg);
        }
        //Bryd ud af funktionen
        result = false;
        return false;
    }   

    //Hvis feltets værdi er tom...
    if(!form.lastname.value) {
        //Definer variabel med fejl meddelelse
        if(!form.lastname.nextElementSibling) {
            let msg = '<span class="error">Du skal udfylde feltet</span>';
            //Indsæt msg efter det pågældende felts sluttag
            form.lastname.insertAdjacentHTML('afterend', msg);
        }
        //Bryd ud af funktionen
        result = false;
        return false;
    }      

    if(result) {
        form.submit();
    }
}