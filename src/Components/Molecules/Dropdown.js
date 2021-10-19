import PropTypes from "prop-types";
import styled from "styled-components";
import Label from "../Atoms/Form/Label";
import Select from "../Atoms/Form/Select";


function Dropdown({title, ...props}) {
    return (
        <>
            <Label name={title} />
            <Select {...props} />  
        </>
    )
}

export default Dropdown
