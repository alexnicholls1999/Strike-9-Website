import PropTypes from "prop-types";
import styled from "styled-components";
import { checkFormControlInputTypes } from "../../react-helpers/formHelpers";
import ErrorMessage from "../Atoms/Form/ErrorMessage";
import Label from "../Atoms/Form/Label";

const StyledFormControlGroup = styled.div`



`;

function FormControl({controls, ...props}) {

    return (
        <StyledFormControlGroup>
            <Label style={controls.label.style} name={controls.label.name}/>
            <div className="p-1"></div>  
            {checkFormControlInputTypes(controls, props)}
            <ErrorMessage>{controls.errMsg}</ErrorMessage>
        </StyledFormControlGroup>
    )
}

FormControl.propTypes = {
    controls: {
        txtArea: PropTypes.bool,
        dropdown: PropTypes.bool,
        calendar: PropTypes.bool,
        label: {
            style: PropTypes.any,
            name: PropTypes.string
        },
        errMsg: PropTypes.string
    }
}

export default FormControl;
