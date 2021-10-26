import { useState, Children} from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import {Formik, Form} from "formik";
import { Step,  Stepper } from '@material-ui/core';
import { Container, Row, Col} from 'react-bootstrap';
import { FormikConnector } from "./../../react-helpers/formHelpers"

import Card from "./../Atoms/Card";
import StepIcon from "./../Atoms/Iconography/StepIcon";
import Button from "./../Atoms/Form/Button";
import Label from "./../Atoms/Form/Label";


const ButtonControls = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column;
    gap: 1rem;

    button {
        width: 100%;
    }
`;

function FormStepper({children, ...props}) {
    const childrenArray = Children.toArray(children);
    const [step, setStep] = useState(0);
    const [completed, setCompleted] = useState(false);
    
    const currentChild = childrenArray[step];

    const isLastStep = () => {
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
                } else if (step === 0) {
                    setStep((s) => s + 2)
                } else {
                    setStep((s) => s + 1);
                }
           }}
        >
            {({ isSubmitting, isValid, dirty }) => (
                <>
                    <Form autoComplete="off">
                        <Container>
                            <Card style={{marginTop: "-45px", zIndex: "1", position: "relative"}}>
                                <Stepper connector={<FormikConnector/>} activeStep={step}>
                                    {childrenArray.map((child, index) => (
                                        <Step
                                            key={child.props.label}
                                            completed={step > index || completed}
                                        >
                                            <Label step StepIconComponent={StepIcon} name={index === step && isSubmitting ? "Booking..." : child.props.label} />
                                        </Step>
                                    ))}
                                </Stepper>
                            </Card>
                        </Container>

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
                                                        <p> By booking an event, you agree to Strike 9 Trainings <a href="#">Terms and Conditions </a> and <a href="#">Privacy Policy </a>.</p>
                                                : null}
                                            </Col>
                                            <Col sm={{span: 12, order: 1}}>
                                                <ButtonControls>
                                                    <Button disabled={!dirty || !isValid} type="submit" text={isSubmitting ? "BOOKING" : isLastStep() ? "BOOK EVENT" : "CONTINUE"} /> 
                                                    {step > 0 && step < 3 ? <Button disabled={isSubmitting} type="button" onClick={() => setStep((s) => s - 1)} text="PREVIOUS"/> : null}
                                                </ButtonControls>
                                            </Col> 
                                        </Row>
                                    </Col>
                                ) : null}
                            </Row>
                            <div className="p-4"></div>
                        </Container>
                    </Form>
                </>
            )}
        </Formik>
    )
}

FormStepper.propTypes = {
    children: PropTypes.array.isRequired
}

export default FormStepper;