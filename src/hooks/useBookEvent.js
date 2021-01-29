import {useState, useEffect} from "react";
import { db } from "./../firebase/utils";

export default function useBookEvent(values){
    const [booked, setBooked] = useState("Summary");

    const handleSubmit = (values) => {
        setBooked("Booked!");
        db.collection("booking")
            .add({
                eventId: values.eventId,
                uid: values.uid,
                teamName: values.teamName,
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                mobile: values.mobile,
                gender: values.gender,
                selectedDate: new Date(values.selectedDate).toDateString(),
                ethnicity: values.ethnicity,
                billingLine1: values.billingLine1,
                billingLine2: values.billingLine2,
                billingLine3: values.billingLine3,
                location: values.location,
                postcode: values.postcode
            })
            .catch((err) => {
                console.log(err)
            });

        db.collection("events").doc(id).update({
            slots: values.slots
        })
        .catch((err) => {
            console.log(err)
        });

        console.log(values)
    }

    return {
        booked,
        setBooked,
        handleSubmit
    }
}