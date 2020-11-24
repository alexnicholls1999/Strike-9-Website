db.collection('events').get().then(snapshot => {
    setupEvents(snapshot.docs);
});

const searchEvents = () => {
    const search = {
        eventsType: searchform.eventsType.value
    }

    db.collection("events")
    .where("eventsType", "==", eventsType)
    // .where("date", "==", "17th October 2020")
    // .where("age", "==", "Ages 11 to 13")
    // .where("time", "==", "12:00 - 14:00")
    .get(search)
    .then(snap => {
        snap.forEach(doc => {
            console.log(doc.data());
        });
    });

}




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