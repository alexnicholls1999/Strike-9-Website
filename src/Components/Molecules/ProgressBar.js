import PropTypes from "prop-types";
import { Step, Stepper } from "@material-ui/core";
import { Container } from "react-bootstrap";

import Card from "./../Atoms/Card";
import Label from "../Atoms/Form/Label";
import StepIcon from "../Atoms/Iconography/StepIcon";
import { FormikConnector } from "../../react-helpers/formHelpers";


function ProgressBar({currentStep, completed, isSubmitting, steps}) {
    return (
        <Container>
            <Card>
                <Stepper connector={<FormikConnector />} activeStep={currentStep}>
                    {steps.map((child, index) => (
                        <Step 
                            key={child.props.label}
                            completed={currentStep > index || completed}
                        >
                            <Label step StepIconComponent={StepIcon} name={index === currentStep && isSubmitting ? "Booking..." : child.props.label}  />
                        </Step>
                    ))}
                </Stepper>
            </Card>
        </Container>
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
