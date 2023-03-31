const error_message = "Du skal udfylde feltet"

function validateForm(form) {
	//console.log(elm.firstname);

	if(!form.firstname.value) {
		showError(form.firstname)
		return false
	}

	if(!form.lastname.value) {
		showError(form.lastname)
		return false
	}	

	if(!form.email.value) {
		showError(form.email)
		return false
	}		

	alert('Formen kan sendes')
}

function showError(elm) {
	if(!elm.nextElementSibling) {
		elm.classList.add('field-error')
		elm.insertAdjacentHTML(
			'afterend',
			`<span class="text-error">${error_message}</span>`
		)
		elm.addEventListener('keypress', function() {
			if(elm.nextElementSibling) {
				elm.nextElementSibling.remove()
			}
			elm.classList.replace('field-error', 'field-success')
	
		})	
	}
}