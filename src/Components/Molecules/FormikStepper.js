import { Children, useState} from "react";
import styled from "styled-components";
import { Form, Formik } from 'formik';
import { CircularProgress, Step, StepLabel, Stepper } from "@material-ui/core";
import { Container, Col, Row } from "react-bootstrap";

import Card from "./../Atoms/Card";
import {FormikConnector} from "./../Atoms/FormikConnector";
import StepIcon from "./../Atoms/Iconography/StepIcon";
import Button from "./../Atoms/Buttons/Button";

const ButtonControls = styled.div`
    width: 100%;
    position: relative;
    margin: 0 auto;
`;

const StyledClickWrap = styled.div`
    display: ${({show}) => (show ? "none" : "block")};
`;

function FormikStepper({children, ...props}) {
    const childrenArray = Children.toArray(children);
    const [step, setStep] = useState(0);
    const [completed, setCompleted] = useState(false);
    const currentChild = childrenArray[step];

    const [show, setShow] = useState(false);
    const [termsandconditions, setTermsAndConditions] = useState(false);

    function isLastStep(){
        return step === childrenArray.length - 1;
    }

    return (
        <Formik
            {...props}
            validationSchema={currentChild.props.validationSchema}
            onSubmit={async (values, helpers) => {
                if (isLastStep()) {
                    await props.onSubmit(values, helpers);
                    setCompleted(true);
                } else {
                    setStep((s) => s + 1);
                }
            }}
        >
            {({ isSubmitting, isValid, dirty }) => (
                <Form autoComplete="off">
                    <Card style={{marginTop: "-45px", zIndex: 1, position: "relative"}}>                        
                        <Stepper connector={<FormikConnector/>} activeStep={step}>
                            {childrenArray.map((child, index) => (
                                <Step
                                    key={child.props.label}
                                    completed={step > index || completed}
                                >
                                    <StepLabel StepIconComponent={StepIcon}>{child.props.label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                    </Card>

                    <Container>
                        <div className="py-3"></div>
                        
                    </Container>
                    {currentChild}
                    <ButtonControls style={props.buttonStyle}>
                        {step > 0 && step < 3 ? (
                            <Button disabled={isSubmitting} onClick={() => setStep((s) => s - 1)} text="PREVIOUS" />
                        ) : null}
                        <Button disabled={!dirty || !isValid} startIcon={isSubmitting ? <CircularProgress  /> : null} type="submit" text={isSubmitting ? "BOOKING" : isLastStep() ? "BOOK EVENT" : "CONTINUE"} />
                    </ButtonControls>
                </Form>
            )}
        </Formik>
    )
}

export default FormikStepper
