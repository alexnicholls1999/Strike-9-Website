import { createElement } from "react";
import PropTypes from "prop-types";

function FormikStep({children}) {
    return <>{children}</>
}

FormikStep.defaultProps = {
    children: createElement('div')
}

FormikStep.propTypes = {
    children: PropTypes.node.isRequired
}

export default FormikStep
