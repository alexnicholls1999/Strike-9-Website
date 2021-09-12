import React, { useState } from 'react';

export default function useBookEvent(store){
    
    const [booked, setBooked] = useState('Summary');

    const handleSubmit = (values, userId) => {
        setBooked("Booked!");
        console.log(values);
        console.log(userId);
        store.collection("booking")
            .add({
                eventId: values.eventId,
                uid: userId,
                teamName: values.teamName,
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                mobile: values.mobile,
                gender: values.gender,
                selectedDate: new Date(values.selectedDate).toDateString(),
                ethnicity: values.ethnicity,
                billingAddressLine1: values.billingAddressLine1,
                billingAddressLine2: values.billingAddressLine2,
                billingAddressLine3: values.billingAddressLine3,
                location: values.location,
                postcode: values.postcode
            })
    }

    return {
        booked,
        handleSubmit
    }
}
