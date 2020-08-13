let header = document.querySelector('.header-main');
let affix = document.querySelector('.header-affix');

setNav();

window.onscroll = function() {
    setNav();
};

function setNav() {
    if(window.pageYOffset > 0) {
        affix.innerHTML = header.innerHTML;
        affix.classList.add('sticky');
        header.classList.add('hide');
    } else {
        affix.classList.remove('sticky');
        header.classList.remove('hide');
    }
}