import { useState } from 'react';

export default function useBookEvent(){
    
    const [booked, setBooked] = useState('Summary');

    const handleSubmit = (values, userId) => {
        setBooked("Booked!");
        console.log(values);
        console.log(userId);
    }

    return {
        booked,
        handleSubmit
    }
}