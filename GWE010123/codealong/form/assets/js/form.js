// Deklarerer global konstant med fejl besked
const error_message = "Du skal udfylde feltet"

/**
 * Function til validering
 * Viser fejlbesked hvis der ikke er indhold i et felt
 * @param {object} form HTML Form Objekt (indeholder alle input typer)
 */
function validateForm(form) {

	// Hvis feltet firstname er tomt..
	if(!form.firstname.value) {
		// Kald showError funktionen med felt html objekt (form.firstname)
		showError(form.firstname)
		// Afbryd funktionen
		return false
	}

	// Hvis feltet lastname er tomt..
	if(!form.lastname.value) {
		showError(form.lastname)
		return false
	}	

	// Hvis feltet email er tomt..
	if(!form.email.value) {
		showError(form.email)
		return false
	}		

	// Hvis alert hvis alt er godt og formen kan sendes
	alert('Formen kan sendes')
}

/**
 * Funktion til at vise fejl med
 * @param {object} elm HTML Input felt som javascript objekt
 */
function showError(elm) {
	// Tjekker om efterfølgende sibling findes (hvis der allerede er en fejlbesked)
	if(!elm.nextElementSibling) {
		// Tilføjer CSS klasse til input felt (rød border)
		elm.classList.add('field-error')
		// Indsætter tilstødende html efter input felt - span tag med fejlbesked
		elm.insertAdjacentHTML(
			'afterend',
			`<span class="text-error">${error_message}</span>`
		)
		// Tilføjer keydown event listener på input felt - lytter på om nogen skriver i feltet
		elm.addEventListener('keypress', function() {
			// Fjerner tilstødende html (span tag med fejlbesked) hvis den findes
			if(elm.nextElementSibling) {
				elm.nextElementSibling.remove()
			}
			// Udskifter css fejl klasse med success klasse
			elm.classList.replace('field-error', 'field-success')
	
		})	
	}
}