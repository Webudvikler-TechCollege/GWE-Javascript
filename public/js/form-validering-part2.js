/**
 * Funktion til form validering - med argument og loop
 * Form sendes som objekt til funktionen og herfra trækkes input elementer ud
 * efter attributten required. Disse loopes igennem og der meldes fejl hvis de ikke har
 * en værdi.
 * @param form_object Form objekt
 * @returns {boolean} False hvis et felt er tomt
 */
function validate(form_object) {

    //Sætter var formstatus til 1 - bruges til at angive om formen kan sendes
    formstatus = 1;

    //Sætter var formstatus til 1 - bruges til at angive om formen kan sendes
    let confirm_message = "Bekræft at du vil sende følgende oplysninger:\n\n";

    //Henter alle felter i form objektet ud fra attributten required
    let input_elements = form_object.querySelectorAll(":required");

    //Looper input elementerne og tjekker value attributten
    for(let elm of input_elements) {

        //Henter tekst node fra inputfeltets label tag
        let labeltext = elm.previousElementSibling.textContent;

        //Hvis værdien er tom...
        if(!elm.value) {

            //Kald funktion til at vise/skjule fejl med
            //Kaldes med to argumenter: inputfeltet som objekt og en streng med en fejlmeddelelse til feltet
            //Fejlmeddelelsen bruger feltets navn som hentes fra tekst noden i feltets label (labeltext).
            //Denne string sættes til lowercase da første bogstav er stort i tekst noden
            display_error(elm, "Du skal udfylde feltet " + labeltext.toLocaleLowerCase() + "!");
            //Sæt formstatus til false
            formstatus = 0;
            //Bryd ud af funktionen
            return false;

        } else {

            switch(elm.dataset.validate) {
                case "onlyalpha":
                    if(!isValidAlpha(elm.value)) {
                        display_error(elm, "Der må ikke være tal i dette felt!");
                        form_status = 0;
                        return false;
                    }
                    break;
                case "onlynum":
                    if(!isValidNumber(elm.value)) {
                        display_error(elm, "Der må kun være tal i dette felt!");
                        form_status = 0;
                        return false;
                    }
                    break;
                case "validemail":
                    if(!isValidEmail(elm.value)) {
                        display_error(elm, "Email adressen er ikke gyldig!");
                        form_status = 0;
                        return false;
                    }
                    break;
            }

            //Tilføjer label tekstnode og felt værdi til confirm vindue
            confirm_message += labeltext + ": " + elm.value + "\n";
        }
    }

    //Formstatus er true hvis alle felter er korrekt udfyldt
    if(formstatus) {
        //Bekræft afsendelse med confirm og confirm_message
        if(confirm(confirm_message)) {
            //Redirect til en landingpage
            location.href = 'landingpage.html';
            //eller submit form
            //form_object.submit();
        }
    }
}

/**
 * Funktion til at vise og skjule fejl med
 * @param input_object Input elementet som javascript objekt
 * @param string Fejl Meddelelse
 */
function display_error(input_object, error_message) {

    if (!input_object.nextElementSibling.classList.contains("text-error")) {

        //Indsætter tilstødende html med fejlbesked efter input feltet
        input_object.insertAdjacentHTML('afterend', '<div class="text-error">' + error_message + '</div>');

        //Eksempel på direkte DOM manipulation med tilføjelse af klasse
        input_object.classList.add("field-error");

        //Eksempel på direkte DOM manipulation med styles
        //input_object.style = "background: #ff0";

        //Bind event onkeypress til input feltet
        input_object.onkeypress = function () {
            //Tjek om fejl er vist - altså om næste sibling har klassen text-error
            if (input_object.nextElementSibling.classList.contains("text-error")) {

                //Fjern input objektets næste sibling
                input_object.nextElementSibling.remove();

                //Nulstil baggrund til auto på input objektet
                //input_object.style = "background: auto";

                //Fjern klassen field-error fra input objektet
                input_object.classList.remove("field-error");
            }
        }
    }
}

/* RegEx & Matching functions  */

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