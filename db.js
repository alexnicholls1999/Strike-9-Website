db.collection('events').get().then(snapshot => {
    setupEvents(snapshot.docs);
});

const addBooking = () => {
    const book = {
        firstname: form.firstname.value,
        lastname: form.lastname.value,
        email: form.email.value,
        mobile: form.mobile.value,
        gender: form.gender.value,
        // dob: form.dd.value + "/" + form.dd.value + "/" + form.yyyy.value,
        // ethnicity: form.ethnicity.value,
        // addressline1: form.addressline1.value,
        // addressline2: form.addressline2.value,
        // addressline3: form.addressline3.value,
        // city: form.city.value,
        // postcode: form.postcode.value
    }

    db.collection('booking').add(book)
    .then(() => {
        form.firstname.value = "",
        form.lastname.value = "",
        form.email.value = "",
        form.mobile.value = "",
        form.gender.value = "", 
        // form.dd.value = "",
        // form.mm.value = "",
        // form.yyyy.value = "",
        // form.ethnicity.value = "",
        // form.addressline1.value = "",
        // form.addressline2.value = "",
        // form.addressline3.value = "",
        // form.city.value = "",
        // form.postcode.value = "",

        alert('Your information has been successfully added!')
    })
    .catch(err => console.log(err))
}


const searchform = document.querySelector('.searchform')
const search = document.querySelector('#search')
const isAvailable = document.querySelector('#isAvailable')

search.addEventListener("click", e => {
    e.preventDefault();

    const search = {
        date: searchform.date.value,
        time: searchform.time.value,
        eventsType: searchform.eventsType.value,
        age: searchform.age.value,
    }

    var query = db.collection("events")

    if (search.date != "Any") {
        query = query.where("date", "==", search.date)
    }  else {
        query = query.where("datefltr", "==", true)
    }

    if (search.eventsType != "Any") {
        query = query.where("eventsType", "==", search.eventsType)
    } else {
        query = query.where("eventsTypefltr", "==", true)
    }

    if (search.time != "Any") {
        query = query.where("time", "==", search.time)
    }  else {
        query = query.where("timefltr", "==", true)
    }
    
    if(search.age != "Any") {
        query = query.where("age", "==", search.age)
    } else {
        query = query.where("agefltr", "==", true)
    }

    

    query
        .get()
        .then(snapshot => {
            setupEvents(snapshot.docs);
        })
        .catch(err => console.log(err))
        // .then(function(querySnapshot){
        //     querySnapshot.forEach(function(doc){
        //         console.log(doc.id, doc.data());
        //     })
        // })
})

