import PropTypes from "prop-types";
import { Step, Stepper } from "@material-ui/core";

import Card from "./../Atoms/Card";
import Label from "../Atoms/Form/Label";
import StepIcon from "../Atoms/Iconography/StepIcon";
import { FormikConnector } from "../../react-helpers/formHelpers";


function ProgressBar({step}) {
    return (
        <Card>
            <Stepper connector={<FormikConnector />} activeStep={step.currentStep}>
                {step.steps.map((child, index) => (
                    <Step 
                        key={child.props.label}
                        completed={step.currentStep > index || step.completed}
                    >
                        <Label step={{component: StepIcon}} name={index === step.currentStep && step.form.submit ? "Booking..." : child.props.label} />
                    </Step>
                ))}
            </Stepper>
        </Card>
    )
}

ProgressBar.propTypes = {
    step: PropTypes.shape({
        currentStep: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        form: PropTypes.shape({
            submit: PropTypes.any.isRequired
        })
    })
}

export default ProgressBar
