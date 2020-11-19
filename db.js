// db.collection('events').get().then(snapshot => {
//     setupEvents(snapshot.docs);
// });

const addBooking = () => {
    const book = {
        firstname: form.firstname.value,
        lastname: form.lastname.value,
        email: form.email.value,
        mobile: form.mobile.value,
        gender: form.gender.value
    }

    db.collection('booking').add(book)
    .then(() => {
        form.firstname.value = "",
        form.lastname.value = "",
        form.email.value = "",
        form.mobile.value = "",
        form.gender.value = ""

        alert('Your information has been successfully added!')
    })
    .catch(err => console.log(err))
}