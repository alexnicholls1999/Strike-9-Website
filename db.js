// db.collection('events').get().then(snapshot => {
//     setupEvents(snapshot.docs);
// });

const addBooking = () => {
    const book = {
        firstname: form.firstname.value,
        lastname: form.lastname.value,
        email: form.email.value,
        mobile: form.mobile.value,
        gender: form.gender.value,
        dob: form.dd.value + "/" + form.dd.value + "/" + form.yyyy.value
    }

    db.collection('booking').add(book)
    .then(() => {
        form.firstname.value = "",
        form.lastname.value = "",
        form.email.value = "",
        form.mobile.value = "",
        form.gender.value = "", 
        form.dd.value = "",
        form.mm.value = "",
        form.yyyy.value = ""

        alert('Your information has been successfully added!')
    })
    .catch(err => console.log(err))
}