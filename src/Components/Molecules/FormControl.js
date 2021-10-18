import PropTypes from "prop-types";
import styled from "styled-components";

import ErrorMessage from "../Atoms/Form/ErrorMessage";
import Input from "../Atoms/Form/Input";
import Label from "../Atoms/Form/Label";
import TextArea from "../Atoms/Form/TextArea";

const StyledFormControlGroup = styled.div`



`;

function FormControl({controls, ...props}) {
    return (
        <StyledFormControlGroup>
            <Label style={controls.label.style} name={controls.label.name}/>
            <div className="p-1"></div>
            {controls.txtArea ? (
                <TextArea {...props} txtArea={controls.txtArea}/>
            ) : (
                <Input {...props} txtArea={controls.txtArea}/>
            )}
            <ErrorMessage>{controls.errMsg}</ErrorMessage>
        </StyledFormControlGroup>
    )
}

FormControl.propTypes = {
    controls: {
        txtArea: PropTypes.bool,
        label: {
            style: PropTypes.any,
            name: PropTypes.string
        },
        errMsg: PropTypes.string
    }
}

export default FormControl;
