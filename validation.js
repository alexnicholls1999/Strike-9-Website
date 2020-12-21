const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const mobile = document.getElementById('mobile');
const gender = document.getElementById('gender');
const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');

function checkInputs() {

    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();
    const mobileValue = mobile.value.trim();
    const genderValue = gender.value.trim();
    const dayValue = day.value.trim();
    const monthValue = month.value.trim();
    const yearValue = year.value.trim();

    if(firstnameValue === '') {
        setErrorFor(firstname, 'Username cannot be blank');
    } else {
        setSuccessFor(firstname);
    }

    if(lastnameValue === '') {
        setErrorFor(lastname, 'Lastname cannot be blank');
    } else {
        setSuccessFor(lastname);
    }

    if(emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Not valid email');
    } else {
        setSuccessFor(email);
    } 

    if(mobileValue === '') {
        setErrorFor(mobile, "Mobile cannot be blank");
    } else if (isNaN(mobileValue)) {
        setErrorFor(mobile, "Mobile must be a number (Eg. 07604524208)");
    } else if ((mobileValue.length < 1) || (mobileValue.length > 11)){
        setErrorFor(mobile, "Your mobile number must be between 1 to 11 digit numbers");
    } else {
        setSuccessFor(mobile);
    }

    if(genderValue === 'Choose Gender'){
        setErrorFor(gender, "Please choose a gender");
    } else {
        setSuccessFor(gender);
    }

    if(dayValue === 'DD' || monthValue === 'MM' || yearValue === 'YYYY'){
        setErrorFor(day, "Please enter date of your birth")
        setErrorFor(month, "Please enter date of your birth")
        setErrorFor(year, "Please enter date of your birth")
    } else {
        setSuccessFor(day);
        setSuccessFor(month);
        setSuccessFor(year);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}