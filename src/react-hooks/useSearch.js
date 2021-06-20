import { useState, useEffect } from "react";
import { db } from "./../firebase/utils";

let ref = db.collection("events");

function SearchResults(ref, updateEvents){
    ref.orderBy("date").onSnapshot((snapshot) => {
        const newEvents = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }));

        updateEvents(newEvents);
    })
}

export default function useSearch() {
    const [updateEvents, setUpdateEvents] = useState([]);
    const [state, setState] = useState({
        date: "Any",
        time: "Any",
        type: "Any",
        age: "Any"
    })


    const handleOnChangeSearch = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleOnChangeAvailableSlots = (e) => {

        setState({
            date: state.date,
            time: state.time,
            type: state.time,
            age: state.age,
            isChecked: e.target.checked,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (state.isChecked === true) {
            ref = ref.where("slots", "!=", 0)
        }

        if (state.date !== "Any") {
            ref = ref.where("date", "==", state.date)
        } else {
            ref = ref.where("datefltr", "==", true)
        }

        if (state.type !== "Any") {
            ref = ref.where("eventsType", "==", state.type)
        } else {
            ref = ref.where("eventsTypefltr", "==", true) 
        }
    
        if (state.type !== "Any") {
            ref = ref.where("eventsType", "==", state.type)
        } else {
            ref = ref.where("eventsTypefltr", "==", true)
        }
    
        if (state.time !== "Any") {
            ref = ref.where("time", "==", state.time)
        } else {
            ref = ref.where("timefltr", "==", true)
        }
    
        if (state.age !== "Any") {
            ref = ref.where("age", "==", state.age)
        } else {
            ref = ref.where("agefltr", "==", true)
        }

        SearchResults(ref, setUpdateEvents);

    }
    


    useEffect(() => {
        SearchResults(ref, setUpdateEvents)
    }, []);
      
    
    return {
        updateEvents,
        state,
        handleOnChangeAvailableSlots,
        handleOnChangeSearch,
        handleSubmit
    }

}