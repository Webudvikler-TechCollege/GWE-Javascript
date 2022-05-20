// Eksekver myFunction når en bruger scroller
window.onscroll = function() {
  myFunction()
};

// Hent header element
let headerElm = document.querySelector(".header");

// Tilføj sticky class til navbar når du rammer dens position. 
// Fjern "sticky" når du forlader scroll position
function myFunction() {
  if (window.pageYOffset > 0) {
      headerElm.classList.add("sticky")
  } else {
    headerElm.classList.remove("sticky");
  }
}