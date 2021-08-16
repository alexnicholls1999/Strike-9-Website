import PropTypes from "prop-types";
import Select from "../Atoms/Form/Select";

function Dropdown({title, ...props}) {
    return (
        <>
            <label style={{color: "white"}}>{title}</label> 
            <Select {...props} />
        </>
    )
}

Dropdown.propTypes = {
    title: PropTypes.string.isRequired
}

export default Dropdown
