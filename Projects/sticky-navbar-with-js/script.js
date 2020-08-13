let header = document.getElementById('mainheader');

window.onscroll = function() {
   if(window.pageYOffset > 0) {
       header.classList.add('sticky');
   } else {
       header.classList.remove('sticky');
   }
};