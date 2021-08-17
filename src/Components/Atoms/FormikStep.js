import PropTypes from "prop-types";


function FormikStep({children}) {
    return <>{children}</>
}

FormikStep.propTypes = {
    children: PropTypes.element.isRequired
}

export default FormikStep
