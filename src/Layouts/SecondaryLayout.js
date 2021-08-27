import PropTypes from "prop-types";
import Footer from "../Components/Organisms/Footer";
import Header from "../Components/Organisms/Header";

function SecondaryLayout({children}) {
    return (
        <>
            <div style={{position: "relative", width: "100%"}}>
                <Header navBg="#5E3CDC" menuColor="#5E3CDC"/>
            </div>
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
