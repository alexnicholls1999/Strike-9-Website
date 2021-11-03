import { useState, useEffect } from "react";
import { handleFetchEvents } from "./../react-helpers/eventHelpers";
import { store } from "./../firebase/utils";

export default function useEvents(){
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

    useEffect(() => {
        handleFetchEvents(state, store, setEvents)
    }, [state]);


    return {
        state, 
        events,
        handleOnChangeSearch
    }
}

