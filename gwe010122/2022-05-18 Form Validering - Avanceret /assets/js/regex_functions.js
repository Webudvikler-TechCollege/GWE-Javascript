// Validates only numbers
function isValidNumber(value) {
  let pattern = /^[0-9]+$/;
  return pattern.test(value);
}

//Validates only alphabetic characters
function isValidAlpha(value) {
  let pattern = /^[A-ZÆØÅa-zæøå ]+$/;
  return pattern.test(value);
}

// Validates an email
function isValidEmail(value) {
  let pattern =
    /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  return pattern.test(value);
}

// Validates a given length
function isValidLength(value, min, max) {
  let pattern = RegExp("^[0-9A-Za-z@#$%]{" + min + "," + max + "}$");
  return pattern.test(value);
}
