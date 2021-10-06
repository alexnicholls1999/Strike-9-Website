import { createContext } from "react";
import PropTypes from "prop-types";

export const RouteContext = createContext(null);

RouteProvider.propTypes = {
    values: PropTypes.any.isRequired,
    children: PropTypes.any.isRequired
}

export default function RouteProvider({ children, pages }) {
    return (
        <RouteContext.Provider value={pages}>
            {children}
        </RouteContext.Provider>
    )
}