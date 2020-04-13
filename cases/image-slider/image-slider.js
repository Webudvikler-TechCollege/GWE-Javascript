/**
 * Script til at lave en image slider 
 * Video Tutorial fra DevEd på Youtube
 * https://www.youtube.com/watch?v=KcdBOoK3Pfw&t=10s
 */

 //Image wrappers
const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

//Prev & Next Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//Set counter
let counter = 1;

//Set image size
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//Sæt click event på next button
nextBtn.onclick = () => {
    if(counter >= carouselImages.length-1) return;
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

//Sæt click event på next button
prevBtn.onclick = () => {
    if(counter <= 0) return;
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

carouselSlide.addEventListener('transitionend', () => {
    if(carouselImages[counter].id === 'last-clone') {
        carouselSlide.style.transistion = 'none';
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    if(carouselImages[counter].id === 'first-clone') {
        carouselSlide.style.transistion = 'none';
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }    
});