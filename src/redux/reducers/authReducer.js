const initState = {
    authError: null
};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case "GUEST_LOGIN_ERR":
            console.log("Login Failed");
            return {
                ...state,
                authError: "Login Failed"
            }
        case "GUEST_LOGIN_SUCCESS": 
            return {
                ...state,
                authError: null
            };
        case "SIGNOUT_SUCCESS": 
            console.log("Signed Out!");
            return state;
        
        default: 
            return state;
    }
}

export default authReducer;