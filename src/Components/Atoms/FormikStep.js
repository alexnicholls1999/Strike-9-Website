import PropTypes from "prop-types";
import styled from "styled-components";

const FormikWrapper = styled.div`
    padding: 0 0.5rem;
`;

function FormikStep({children}) {
    return <FormikWrapper>{children}</FormikWrapper>
}

FormikStep.propTypes = {
    children: PropTypes.element.isRequired
}

export default FormikStep
