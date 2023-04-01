// Deklarerer konstant med html element med id modal (type object)
const modal = document.getElementById("modal")
// Deklarerer konstant med html element med id openModal (type object)
const openModal = document.querySelector("#openModal")
// Deklarerer konstant med html element med id closeModal (type object)
const closeModal = document.querySelector("#closeModal")

// Tilføjer onclick event listener på knap til at åbne modal vindue med
openModal.addEventListener("click", function () {
  // Udskifter css klasse til at vise modalet med
  modal.classList.replace("hide", "show")
})

// Tilføjer onclick event listener på knap til at lukke modal vindue med
closeModal.addEventListener("click", function () {
  // Udskifter css klasse til at skjule modalet med
  modal.classList.replace("show", "hide")
})

// Tilføjer event listener til browservindue (window) med event detaljer som parameter (event)
window.addEventListener("click", (event) => {
  // Hvis der klikkes udenfor inner_modal vinduet...
  if (event.target.id === "modal") {
    // Udskifter css klasse til at skjule modalet med
    modal.classList.replace("show", "hide")
  }
})
