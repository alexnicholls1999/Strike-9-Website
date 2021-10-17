import PropTypes from "prop-types";
import styled from "styled-components";

import ErrorMessage from "../Atoms/Form/ErrorMessage";
import Input from "../Atoms/Form/Input";
import Label from "../Atoms/Form/Label";

const StyledFormControlGroup = styled.div`


`;

function FormControl({controls, ...props}) {
    return (
        <StyledFormControlGroup>
            <Label style={controls.label.style}>{controls.label.name}</Label>
            <div className="p-1"></div>
            <Input {...props}/>
            <ErrorMessage>{controls.errMsg}</ErrorMessage>
        </StyledFormControlGroup>
    )
}

FormControl.propTypes = {
    controls: {
        label: {
            style: PropTypes.any,
            name: PropTypes.string
        },
        errMsg: PropTypes.string
    }
}

export default FormControl;
