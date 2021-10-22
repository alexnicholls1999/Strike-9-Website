import PropTypes from "prop-types";

function FormStep({children}) {
    return <>{children}</>
}

FormStep.propTypes = {
    children: PropTypes.element.isRequired
}

export default FormStep
