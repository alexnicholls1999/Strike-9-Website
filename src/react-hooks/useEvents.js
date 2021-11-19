import { useState, useEffect } from "react";
import { handleFetchEvents } from "./../react-helpers/eventHelpers";

export default function useEvents(store){
    const [events, setEvents] = useState([]);
    const [state, setState] = useState({
        date: "Any",
        time: "Any",
        type: "Any",
        age: "Any",
        isChecked: false
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
            type: state.type,
            age: state.age,
            isChecked: e.target.checked
        })
    }


    useEffect(() => {
        handleFetchEvents(state, store, setEvents)
    }, [state]);


    return {
        state, 
        events,
        handleOnChangeSearch,
        handleOnChangeAvailableSlots
    }
}

