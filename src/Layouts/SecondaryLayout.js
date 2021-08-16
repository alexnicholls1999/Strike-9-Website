import PropTypes from "prop-types";

function SecondaryLayout({children}) {
    return (
        <>
            {children}
        </>
    )
}

SecondaryLayout.propTypes = {
    children: PropTypes.element.isRequired
}

export default SecondaryLayout
