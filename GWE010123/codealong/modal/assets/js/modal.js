const modal = document.getElementById('modal');
const openModalButton = document.querySelector('#openModal');
const closeModalButton = document.querySelector('#closeModal');

openModalButton.addEventListener('click', function() {
	modal.classList.replace('hide', 'show')
})

closeModalButton.addEventListener('click', function() {
	modal.classList.replace('show', 'hide')
})

window.addEventListener('click', function(e) {
	if(e.target.id === 'modal') {
		modal.classList.replace('show', 'hide')
	}
})