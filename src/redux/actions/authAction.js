export const signInAnonymously = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase    
            .auth()
            .signInAnonymously()
            .then(() => {
                dispatch({ type: "GUEST_LOGIN_SUCCESS"});
            })
            .catch((err) => {
                dispatch({ type: "GUEST_LOGIN_ERR", err});
            });
    }
}

export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase    
            .auth()
            .signOut()
            .then(() => {
                dispatch({type: "SIGNOUT_SUCCESS"});
            })
    } 
}