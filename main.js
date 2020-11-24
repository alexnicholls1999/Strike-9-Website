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
const searchform = document.querySelector('.search')
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

const booked = () => {
    alert('Booked');
}

form.addEventListener('change', e => {

    e.preventDefault();
    checkInputs();

});

form.addEventListener('submit', e => {

    e.preventDefault();
    booked();

});




// DOB Picker

var Days = [31,28,31,30,31,30,31,31,30,31,30,31];// index => month [0-11]
$(document).ready(function(){
    var option = '<option value="day">DD</option>';
    var selectedDay="day";
    for (var i=1;i <= Days[0];i++){ //add option days
        option += '<option value="'+ i + '">' + i + '</option>';
    }
    $('#day').append(option);
    $('#day').val(selectedDay);

    var option = '<option value="month">MM</option>';
    var selectedMon ="month";
    for (var i=1;i <= 12;i++){
        option += '<option value="'+ i + '">' + i + '</option>';
    }
    $('#month').append(option);
    $('#month').val(selectedMon);
  
    var d = new Date();
    var option = '<option value="year">YYYY</option>';
    selectedYear ="year";
    for (var i=1930;i <= d.getFullYear();i++){// years start i
        option += '<option value="'+ i + '">' + i + '</option>';
    }
    $('#year').append(option);
    $('#year').val(selectedYear);
});

function isLeapYear(year) {
    year = parseInt(year);
    if (year % 4 != 0) {
	      return false;
	  } else if (year % 400 == 0) {
	      return true;
	  } else if (year % 100 == 0) {
	      return false;
	  } else {
	      return true;
	  }
}

function change_year(select)
{
    if( isLeapYear( $(select).val() ) )
	  {
		    Days[1] = 29;
		    
    }
    else {
        Days[1] = 28;
    }
    if( $("#month").val() == 2)
		    {
			       var day = $('#day');
			       var val = $(day).val();
			       $(day).empty();
			       var option = '<option value="day">day</option>';
			       for (var i=1;i <= Days[1];i++){ //add option days
				         option += '<option value="'+ i + '">' + i + '</option>';
             }
			       $(day).append(option);
			       if( val > Days[ month ] )
			       {
				          val = 1;
			       }
			       $(day).val(val);
		     }
  }


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
