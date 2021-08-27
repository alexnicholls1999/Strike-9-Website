import PropTypes from "prop-types";
import Navbar from "./../Molecules/Navbar";

function Header({secondary, ...props}) {
    return (
        <div secondary={secondary}>
            <Navbar {...props}/>
        </div>
    )
}

Header.propTypes = { 
    secondary: PropTypes.bool
}

export default Header
