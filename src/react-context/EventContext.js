import { createContext } from "react";
import PropTypes from "prop-types";

export const EventContext = createContext(null);


EventContextProvider.propTypes = {
    value: PropTypes.any.isRequired,
    children: PropTypes.array.isRequired
}

export default function EventContextProvider({ value, children }) {
    return (
        <EventContext.Provider value={value}>
            {children}
        </EventContext.Provider>
    )
}
