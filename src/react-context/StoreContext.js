import { createContext } from "react";
import PropTypes from "prop-types";

export const StoreContext = createContext(null);


StoreProvider.propTypes = {
    value: PropTypes.any.isRequired,
    children: PropTypes.array.isRequired
}

export default function StoreProvider({ store, children }) {
    return (
        <StoreContext.Provider value={store}>
            {children}
        </StoreContext.Provider>
    )
}
