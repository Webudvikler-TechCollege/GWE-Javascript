/**
 * Funktion til form validering 
 * @param {object} html form object
 * @returns 
 */
function validateForm(form) {
  // Sætter boolean var
  let result = true;

  // Validerer fornavn
  if (!form.firstname.value) {
    // Kalder funktion til visning af fejlmeddelelse
    showError(form.firstname);
    // Sætter result til false
    result = false;
    // Breaker ud af funktionen
    return false;
  }

  // Validerer efternavn
  if (!form.lastname.value) {
    showError(form.lastname);
    result = false;
    return false;
  }

  // Validerer email
  if (!form.email.value) {
    showError(form.email);
    result = false;
    return false;
  }

  // Marker afsendelse hvis alle felter er udfyldte
  if (result) {
    alert("Formularen kan sendes :)");
    //form.submit();
  }
}

/**
 * Funktion til visning af fejlmeddelelse
 * @param {object} elm HTML element objekt
 */
function showError(elm) {
  // Tilføjer class til input objekt (rød border)
  elm.classList.add("field-error");
  // Hvis ikke der findes en next sibling
  if (!elm.nextElementSibling) {
    // Tilføj tilstødende sibling efter input element
    elm.insertAdjacentHTML(
      "afterend",
      `<span class="text-error">Du skal udfylde feltet</span>`
    );
    // Tilføj keypress event til input element
    elm.addEventListener("keypress", function () {
      // Fjern sibling hvis den er der
      if (elm.nextElementSibling) {
        elm.nextElementSibling.remove();
      }
      // Fjern class til fejl
      elm.classList.remove('field-error');
      // Tilføj class til success (grøn border)
      elm.classList.add('field-success');
    });
  }
}
