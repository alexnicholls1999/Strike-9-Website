import React, { useState, Children } from 'react';
import { Formik, Form } from "formik";
import {Container, Col, Row } from "react-bootstrap";
import styled from 'styled-components';
import { Step, Stepper, StepLabel, CircularProgress } from "@material-ui/core";
import Button from "../../Atoms/Button";
import Card from "../../Atoms/Card";

const ButtonControls = styled.div`
    width: 400px;
    float: right;
    position: relative;
    margin: 0 auto;

    button {
        margin: 0 75px;
        margin-bottom: 10px;
    }


`;


function FormikStepper({children, ...props}) {
    const childrenArray = Children.toArray(children);
    const [step, setStep] = useState(0);
    const [completed, setCompleted] = useState(false);
    const currentChild = childrenArray[step];

    const isLastStep = () => {
        return step === childrenArray.length - 1;
    };

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
            {({ isSubmitting }) => (
                <Form autoComplete="off">
                    <Card style={{marginTop: "-45px", zIndex: "1", position: "relative"}}>
                        <Stepper alternativeLabel activeStep={step}>
                            {childrenArray.map((child, index) => (
                                <Step 
                                    key={child.props.label}
                                    completed={step > index || completed}
                                >
                                    <StepLabel> {child.props.label} </StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                    </Card>

                    <Container>
                        <div className="p-2"></div>
                        <Row>
                            <Col lg={8}>
                                {currentChild}
                            </Col>
                            <Col lg={4}>
                                <ButtonControls>
                                    <Button startIcon={isSubmitting ? <CircularProgress size="1rem"/> : null} type="submit" text={isLastStep() ? "BOOK EVENT" : "CONTINUE"} /> 
                            
                                    {step > 0 && step < 3 ? (
                                        
                                            <Button disabled={isSubmitting} onClick={() => setStep((s) => s - 1)} text="PREVIOUS"/>  
                                        
                                    ) : null}
                                </ButtonControls>
                            </Col>
                        </Row>
                    </Container>



                </Form>
            )}
        </Formik>
    )
}

export default FormikStepper;
