import authReducer from "./authReducer";
import eventReducer from "./bookReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
    auth: authReducer,
    event: eventReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})


export default rootReducer;