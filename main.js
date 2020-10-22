const menuBtn = document.querySelector('.hamburger');
const nav = document.querySelector('.navbar');

let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if(!menuOpen){
        menuBtn.classList.add('open');
        nav.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        nav.classList.remove('open');
        menuOpen = false;
    }
});

// slider

const next = document.querySelector('.next');
const previous = document.querySelector('.previous');
const slides = document.querySelectorAll('.slide');
const image = document.getElementById('slide');

let index = 0;
display(index);
function display(index, slide) {
    slides.forEach((slide) => {
        slide.style.display = 'none'; 
    });
    slides[index].style.display = 'flex';
    
}

// function fadeIn(el){
//     slides.classList.add('show');
//     slides.classList.remove('hide');  
// }
  
// function fadeOut(el){
//     slides.classList.add('hide');
//     slides.classList.remove('show');
// }

function nextSlide() {
    index++;
    if (index > slides.length - 1) {
        index = 0;
    } 

    display(index);
}


function previousSlide () {
    index--;
    if (index < 0) {
        index = slides.length - 1;
    }
    display(index);
}


next.addEventListener('click', nextSlide);
previous.addEventListener('click', previousSlide);
