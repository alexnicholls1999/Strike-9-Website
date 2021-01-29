import { func } from "prop-types";
import { useState, useEffect } from "react";
import { db } from "./../firebase/utils";

export default function useSearch() {
    const [updateEvents, setUpdateEvents] = useState([]);
    const [state, setState] = useState({
        date: "Any",
        time: "Any",
        type: "Any",
        age: "Any",
        isChecked: false
    });
    const [date, setDate] = useState("Any");
    const [time, setTime] = useState("Any");
    const [type, setType] = useState("Any");
    const [age, setAge] = useState("Any");
    const [isChecked, setIsChecked] = useState(false);

    let ref = db.collection("events")
    

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isChecked === true) {
            ref = ref.where("slots", "!=", 0)
          }
      
        if (date !== "Any") {
        ref = ref.where("date", "==", date)
        } else {
        ref = ref.where("datefltr", "==", true)
        }
    
        if (type !== "Any") {
        ref = ref.where("eventsType", "==", type)
        } else {
        ref = ref.where("eventsTypefltr", "==", true)
        }
    
        if (time !== "Any") {
        ref = ref.where("time", "==", time)
        } else {
        ref = ref.where("timefltr", "==", true)
        }
    
        if (age !== "Any") {
        ref = ref.where("age", "==", age)
        } else {
        ref = ref.where("agefltr", "==", true)
        }

        ref.onSnapshot((snapshot) => {
            const newEvents = snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
      
            }));
      
            setUpdateEvents(newEvents);
          }); 

    }
    
    useEffect(() => {
        db.collection("events").orderBy("date").onSnapshot((snapshot) => {
        const newEvents = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }));
    
        setUpdateEvents(newEvents);
        });

    }, []);
      
    
    return {
        updateEvents,
        state,
        time,
        date,
        age,
        type,
        isChecked,
        setState,
        setUpdateEvents,
        setTime,
        setDate,
        setAge,
        setType,
        setIsChecked,
        handleSubmit
    }

}