import { createContext } from "react";
import PropTypes from "prop-types";

export const ContentContext = createContext(null);

ContentProvider.propTypes = {
    values: PropTypes.any.isRequired,
    children: PropTypes.any.isRequired
}

export default function ContentProvider({ children, content }) {
    return (
        <ContentContext.Provider value={content}>
            {children}
        </ContentContext.Provider>
    )
}