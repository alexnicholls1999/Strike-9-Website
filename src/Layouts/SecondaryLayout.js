import PropTypes from "prop-types";
import Footer from "../Components/Organisms/Footer";

function SecondaryLayout({children}) {
    return (
        <>
            {children}
            <div className="p-3"></div>
            <Footer /> 
        </>
    )
}

SecondaryLayout.propTypes = {
    children: PropTypes.element.isRequired
}

export default SecondaryLayout
