import { useState } from 'react';
import { handleBookEvent, handleUpdateEventSlots } from '../react-helpers/formHelpers';
import { store } from '../firebase/utils';

export default function useBookEvent(){
    
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