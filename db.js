db.collection('events').get().then(snapshot => {
    console.log(snapshot.docs)
})


// db.collection('events').onSnapshot(snapshot => {
//     const newestEvent = snapshot.docChanges()[0].doc.data()
//     const id = snapshot.docChanges()[0].doc.data()
//     showLatestEvent(newestEvent, id);

//     snapshot.docChanges().shift()

//     snapshot.docChanges().forEach(event => {
//         showEvents(event.doc.data(), event.doc.id)
//     });
// })

const addNewEvent = () => {
    const event = {
        etitle: form.etitle.value,
        etype: form.etype.value,
        edate: form.edate.value,
        description: form.description.value
    }

    db.collection('events').add(event)
    .then(() => {
        form.etitle.value = "",
        form.etype.value = "",
        form.edate.value = "",
        form.description.value = ""

        alert('Your event has been successfully added!')
    })
    .catch(err => console.log(err))
}