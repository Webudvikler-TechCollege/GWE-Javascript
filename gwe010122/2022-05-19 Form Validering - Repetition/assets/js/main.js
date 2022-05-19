function validateForm(objForm) {

  if (!objForm.firstname.value) {
    showError(objForm.firstname, "Du skal udfylde dit fornavn!");
    return false;
  } else {
    if (!isValidAlpha(objForm.firstname.value)) {
      showError(
        objForm.firstname,
        "Der må ikke være tal og symboler i dit fornavn!"
      );
      return false;
    }
  }

  if (!objForm.zipcode.value) {
    showError(objForm.zipcode, "Du skal udfylde dit postnummer!");
    return false;
  } else {
    if (!isValidNumber(objForm.zipcode.value)) {
      showError(objForm.zipcode, "Postnummer er et gyldig tal!");
      return false;
    }
  }

  if (!objForm.email.value) {
    showError(objForm.email, "Du skal indtaste din email!");
    return false;
  } else {
    if (!isValidEmail(objForm.email.value)) {
      showError(objForm.email, "Du skal indtaste en gyldig email!");
      return false;
    }
  }

  if(!objForm.gender.value) {
    showError(objForm.gender, "Du skal vælge dit køn!");
    return false;
  }  

  if(!objForm.accept.value) {
    showError(objForm.accept, "Du skal acceptere vores betingelser!");
    return false;
  }   

  alert("Formen kan sendes");
}

function showError(objInput, strMessage) {

  objInput.classList.add("field-error");
  if (!objInput.nextElementSibling) {
    objInput.insertAdjacentHTML(
      "afterend",
      `<span class="text-error">${strMessage}</span>`
    );

    console.log(objInput.type);

    switch(objInput.type.toUpperCase()) {
      default:
          objInput.onkeypress = function () {
            removeError(objInput)
          };
          objInput.onchange = function () {
            removeError(objInput)
          };          
          break;
      case 'SELECT-ONE':
      case 'CHECKBOX':
          objInput.onchange = function () {
            removeError(objInput)
          };
          break;
    }
 
  }
}

function removeError(objInput) {
  if (objInput.nextElementSibling) {
    objInput.nextElementSibling.remove();
  }
  objInput.classList.remove("field-error");
}

//Validates only alphabetic characters
function isValidAlpha(value) {
  let pattern = /^[A-ZÆØÅa-zæøå ]+$/;
  return pattern.test(value);
}

// Validates only numbers
function isValidNumber(value) {
  let pattern = /^[0-9]+$/;
  return pattern.test(value);
}

// Validates an email
function isValidEmail(value) {
  let pattern =
    /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  return pattern.test(value);
}
