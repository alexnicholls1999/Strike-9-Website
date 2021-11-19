import { useState } from 'react';
import { handleBookEvent, handleUpdateEventSlots } from '../react-helpers/formHelpers';

export default function useBookEvent(store){
    
    const [booked, setBooked] = useState('Summary');

    const handleSubmit = (values) => {
        setBooked("Booked!");
        handleBookEvent(store, values);        
        handleUpdateEventSlots(store, values);
    }

    return {
        booked,
        handleSubmit
    }
}