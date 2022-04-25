import styled from "styled-components";
import { collection, getDocs, query, where } from "firebase/firestore";
import Event from "./../Components/Organisms/Event";

const StyledNoResults = styled.div`
    padding: 5rem 0;
    text-align: center;
    width: 100%;

    h3 {
        color: ${({theme}) => theme.colors.primary[500]};
        font-weight: bold;
    }
`;

export function NoResults(){
  return (
    <>
        <StyledNoResults>
            <h3>No events found. Please Try Again! </h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, soluta!</p>
        </StyledNoResults>
    </>
  )
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
            unavailableEvent
            event={{
                title: event.eventsTitle,
                type: event.eventsType,
                age: event.age,
                cost: event.cost,
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
  if (!events.length > 0) return <NoResults />

  return <>{searchResults(events)}</>;
}

export const handleEventsPromise = (store, state) => {
  return new Promise ((resolve, reject) => {
    const constraints = [];

    const filterQuery = (input, type) => {
      if (input !== "Any") {
        constraints.push(where(`${type}`, "==", input))
      } else {
        constraints.push(where(`${type}fltr`, "==", true))
      }
    }

    filterQuery(state.date, "date")
    filterQuery(state.time, "time")
    filterQuery(state.type, "eventsType")
    filterQuery(state.age, "age")

    if (state.isChecked === true) return constraints.push(where("slots", "!=", 0))

    const eventsRef = collection(store, "events");
    const searchQuery = query(eventsRef, ...constraints);
    getDocs(searchQuery)
        .then((snapshot) => {
          let events = [];

          snapshot.docs.forEach((doc) => {
            events.push({
              ...doc.data(),
              id: doc.id
            })
          })

          resolve(events);
        })
        .catch((err) => {
          reject(err);
        })
  })
}