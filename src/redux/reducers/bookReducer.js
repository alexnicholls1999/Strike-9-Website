const initState = {};
const eventReducer = (state = initState, action) => {
    switch (action.type) {
        case "CREATE_EVENT":
            console.log("Created Event", action.event);
            return state;
        case "CREATE_EVENT_ERROR": 
            console.log("Create Project Error", action.err);
            return state;
        default: 
            return state;
    }
};

export default eventReducer;