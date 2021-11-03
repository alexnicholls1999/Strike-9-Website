export const handleFetchEvents = (state, store, updateEvents) => {
    return new Promise((resolve, reject) => {
        let ref = store.collection("events");

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