import PropTypes from "prop-types";
import Footer from "../Components/Organisms/Footer";
import Header from "../Components/Organisms/Header";

function SecondaryLayout({children, dark, variant, navBg, menuColor}) {
    return (
        <>
            <div style={{position: "relative", width: "100%"}}>
                <Header dark={dark} variant={variant} navBg={navBg} menuColor={menuColor}/>
            </div>
            {children}
            <Footer /> 
        </>
    )
}

SecondaryLayout.propTypes = {
    children: PropTypes.element.isRequired
}

export default SecondaryLayout
