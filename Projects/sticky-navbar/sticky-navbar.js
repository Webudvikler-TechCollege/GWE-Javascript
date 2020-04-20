// Eksekver myFunction når en bruger scroller
window.onscroll = function() {myFunction()};

// Hent navbar
var navbar = document.getElementById("navbar");

// Hent offset position af navbar
var sticky = navbar.offsetTop;

// Tilføj sticky class til navbar når du rammer dens position. 
// Fjern "sticky" når du forlader scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}