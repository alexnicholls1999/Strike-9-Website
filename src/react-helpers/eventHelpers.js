import Event from "./../Components/Organisms/Event";

export const handleFetchEvents = (state, store, updateEvents) => {
    return new Promise((resolve, reject) => {
        let ref = store.collection("events");

        if (state.isChecked === true) {
          ref = ref.where("slots", "!=", 0)
        }

        if (state.date !== "Any") {
          ref = ref.where("date", "==", state.date);
        } else {
          ref = ref.where("datefltr", "==", true);
        }
    
        if (state.type !== "Any") {
          ref = ref.where("eventsType", "==", state.type);
        } else {
          ref = ref.where("eventsTypefltr", "==", true);
        }
    
        if (state.time !== "Any") {
          ref = ref.where("time", "==", state.time);
        } else {
          ref = ref.where("timefltr", "==", true);
        }
    
        if (state.age !== "Any") {
          ref = ref.where("age", "==", state.age);
        } else {
          ref = ref.where("agefltr", "==", true);
        }
        
        ref.get().then((snapshot) => {
          const data = [
            ...snapshot.docs.map((doc) => {
              return {
                id: doc.id,
                ...doc.data()
              };
            })
          ];
  
          updateEvents(data);
  
          resolve({
            data
          });
        })
        .catch((err) => {
          reject(err);
        });    
    })
}


function searchResults(events) {
  return <>
    {events.map((event, index) => (
        event.slots > 0 ? (
          <Event 
              key={index}
              event={{
                  title: event.eventsTitle,
                  type: event.eventsType,
                  age: event.age,
                  cost: event.cost,
                  date: event.date,
                  description: event.description,
                  time: event.time,
                  linkTo: "/events/" + event.id
              }}
          /> 
        ) : (
          <Event 
            key={index}
            event={{
                title: event.eventsTitle,
                type: event.eventsType,
                age: event.age,
                cost: "Booked!",
                date: event.date,
                description: event.description,
                time: event.time,
            }}
          /> 
        )
    ))}
  </>
}

export function renderSearchResults(events) {
  if (!events.length > 0) return <p>No results found</p>

  return <>{searchResults(events)}</>;
}