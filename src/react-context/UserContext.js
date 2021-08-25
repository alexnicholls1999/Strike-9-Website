import { createContext } from "react";
import PropTypes from "prop-types";

export const UserContext = createContext(null);

UserContextProvider.propTypes = {
    value: PropTypes.any.isRequired,
    children: PropTypes.array.isRequired
}

export default function UserContextProvider({ value, children }) {
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}
