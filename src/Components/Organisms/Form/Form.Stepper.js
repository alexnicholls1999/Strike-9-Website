import { useReducer, useState, Children} from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Col, Container, Row } from "react-bootstrap";
import { FormikProvider, useFormik } from "formik";
import { stepReducer } from "../../../react-reducers/FormStepper/formstepper.reducer";
import { nextStep, previousStep } from "../../../react-reducers/FormStepper/formstepper.actions";
import ProgressBar from "../../Molecules/ProgressBar";
import { Button } from "@material-ui/core";

const ButtonControls = styled.div`
    width: 100%;
    position: relative;
    margin: 0 auto;
`;

function FormStepper({ bookingform, children, ...props }) {
    const [step, dispatch] = useReducer(stepReducer, { step })
    const childrenArray = Children.toArray(children);
    const currentChild = childrenArray[step];
    const [completed, setCompleted] = useState(false);

    const formik = useFormik({
        initialValues: props.initialValues,
        validationSchema: currentChild.props.validationSchema,
        onSubmit: async (values, helpers) => {
            if (isLastStep()) {
                await props.onSubmit((values, helpers))
                setCompleted(true)
            } else {
                dispatch(nextStep());
            }
        }
    })

    function isLastStep() {
        return step === childrenArray.length - 1;
    }

    return (
        <FormikProvider value={formik}>
            <form autoComplete="off" onSubmit={formik.handleSubmit}>
                <ProgressBar 
                    step={{
                        currentStep: step,
                        completed: completed,
                        form: {
                            submit: formik.isSubmitting
                        }
                    }}
                />

                <Container>
                    <div className="py-3"></div>
                    <Row>
                        {completed === false ? (
                            <Col lg={8}>
                                {currentChild}
                            </Col>
                        ) : (
                            <Col lg={12}>
                                {currentChild}
                            </Col>
                        )}

                        {completed === false ? (
                            <Col lg={3} sm={12} className="ms-auto">
                                <Row>
                                    <Col sm={{span: 12, order: 2}}>
                                        <div className="p-3"></div>
                                        {isLastStep() ? 
                                            <p>Booking Form</p>
                                        : null}
                                    </Col>
                                    <Col sm={{span: 12, order: 1}}>
                                        <ButtonControls>
                                            <Button text={formik.isSubmitting ? "BOOKING" : isLastStep() ? "BOOK EVENT" : "CONTINUE"}/>
                                            {step > 0 && step < 3 ? <Button text="PREVIOUS" type="button" onClick={dispatch(previousStep())}/> : null}
                                        </ButtonControls>
                                    </Col>
                                </Row>
                            </Col>
                        ) : null}
                    </Row>
                    <div className="p-4"></div>
                </Container>

            </form>
        </FormikProvider>
    )
}

FormStepper.propTypes = {

}

export default FormStepper
