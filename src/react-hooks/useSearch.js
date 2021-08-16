import { useState, useEffect } from "react";


export default function useSearch() {
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
            ...state,
            isChecked: e.target.checked
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(state);
    }

    return {
        state,
        handleSubmit,
        handleOnChangeSearch,
        handleOnChangeAvailableSlots
    }
}