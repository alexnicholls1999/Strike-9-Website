// const menuBtn = document.querySelector('.hamburger');
// const nav = document.querySelector('.navbar');

// let menuOpen = false;

// menuBtn.addEventListener('click', () => {
//     if(!menuOpen){
//         menuBtn.classList.add('open');
//         nav.classList.add('open');
//         menuOpen = true;
//     } else {
//         menuBtn.classList.remove('open');
//         nav.classList.remove('open');
//         menuOpen = false;
//     }
// });


const form = document.querySelector('.form')
const eventsList = document.querySelector('.events-list')

const setupEvents = (data) => {

    let html = '';
    data.forEach(doc => {
        const event = doc.data();
        const output = `
            <div class="row">
                <div class="card col-sm-12 p-4">
                    <div class="row">
                        <div class="col-7 ml-auto">
                            <h4 class="events-title">${event.eventsTitle}</h4>
                            <p class="session-type">${event.eventsType}</p>
                            <p class="age-label">${event.age}</p>
                        </div>
                        <div class="col-5 text-right">
                            <h5>${event.cost}</h5>
                            <h6>${event.date}</h6>
                            <p>${event.time}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-7">
                            <p class="events-description">${event.description}</p>
                        </div>
                    </div>
                    <div class="row align-self-end">
                        <div class="col-lg-3 col-md-3 col-sm-12 mr-auto">
                            <a href="book.html"><button type="button" class="btn btn-primary">Book</button></a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="p-3"></div>
        `;
        html += output
    });

    eventsList.innerHTML = html;
}

form.addEventListener('submit', e => {
    e.preventDefault()
    addBooking()
})


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
