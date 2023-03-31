const modal = document.getElementById('modal');
const openModal = document.querySelector('#openModal');
const closeModal = document.querySelector('#closeModal');

openModal.addEventListener('click', function() {
	modal.classList.replace('hide', 'show')
})

closeModal.addEventListener('click', function() {
	modal.classList.replace('show', 'hide')
})

window.addEventListener('click', (event) => {
	if(event.target.id === "modal") {
		modal.classList.replace('show', 'hide')
	}
})