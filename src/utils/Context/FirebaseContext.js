import { createContext } from "react";
import PropTypes from "prop-types";

export const FirebaseContext = createContext(null);

FirebaseProvider.propTypes = {
    store: PropTypes.any.isRequired,
    children: PropTypes.any.isRequired
}

export default function FirebaseProvider({ children, store }) {
    return (
        <FirebaseContext.Provider value={store}>
            {children}
        </FirebaseContext.Provider>
    )
}

export function FirebaseAuthProvider({ children, auth }) {
    return (
        <FirebaseContext.Provider value={auth}>
            {children}
        </FirebaseContext.Provider>
    )
}

FirebaseAuthProvider.propTypes = {
    store: PropTypes.any.isRequired,
    children: PropTypes.any.isRequired
}