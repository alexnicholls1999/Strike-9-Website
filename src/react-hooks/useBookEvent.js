import {useState} from "react"

export default function useBookEvent(){
    const [booked, setBooked] = useState("Summary");

    const handleSubmit = (values) => {
        console.log(values)
    }

    return {
        booked,
        setBooked,
        handleSubmit
    }
}