const initState = {};

const bookReducer = (state = initState, action) => {
    switch (action.type) {
        case "BOOK_EVENT": 
            console.log("Booked Event", action.event);
            return state;
        case "BOOK_EVENT_ERROR": 
            console.log("Booked Event Error", action.err);
            return state;
        default: 
            return state;
    }
}

export default bookReducer;