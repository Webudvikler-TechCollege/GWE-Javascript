function validateForm(form) {
  let result = true;

  let arrRequired = form.querySelectorAll(':required');

  for(let field of arrRequired) {
    if(!field.value) {
      showError(field, 'Du skal udfylde feltet')
      result = false;
      return false;
    } else {
      // Hvis der er indhold
      switch(field.dataset.validate) {
        case "onlyalpha":
          if(!isValidAlpha(field.value)) {
            showError(field, 'Feltet må ikke indeholde tal')
            return false;
          }
          break;
        case "onlynum":
          if(!isValidNumber(field.value)) {
            showError(field, 'Feltet må ikke indeholde bogstaver')
            return false;
          }
          break;
        case "isemail":
          if(!isValidEmail(field.value)) {
            showError(field, 'Du har ikke indtastet en gyldig email')
            return false;
          }
          break;
      }

    }
  }

  if(result) {
    alert('Formularen kan sendes!')
  }

}

function showError(objField, strMessage = "Du skal udfylde feltet") {
  if(!objField.nextElementSibling) {
    objField.classList.add('field-error')
    objField.insertAdjacentHTML('afterend', `<span class="text-error">${strMessage}</span>`)
    objField.onkeypress= function() {
      if(objField.nextElementSibling) {
        objField.nextElementSibling.remove();
        objField.classList.remove('field-error')
        objField.classList.add('field-success')

      }
    }
  }

}

/**
 * Regular Expressions functions
 * Regular expressions kan bruges til at matche et givent mønster i en tekststreng.
 * De er svære at læse og endnu sværere at skrive og det forventes ikke at du kan 
 * forklare dem.
*/

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