import React, { useState, Children} from 'react';
import styled from "styled-components";
import {Formik, Form} from "formik";
import Card from '../../Atoms/Card';
import { CircularProgress, Step, StepLabel, Stepper } from '@material-ui/core';
import { Container, Row, Col} from 'react-bootstrap';
import {withStyles} from "@material-ui/core/styles";
import StepConnector from "@material-ui/core/StepConnector";
import Button from '../../Atoms/Button';
import StepIcon from '../../Atoms/Forms/StepIcon';

const ButtonControls = styled.div`
    width: 100%;
    position: relative;
    margin: 0 auto;

`;

const StepBody = styled.div`


`;


const FormikConnector = withStyles({
    active: {
        "& $line": {
            borderColor: "#5e3d83"
        }
    },
    completed: {
        "& $line": {
            borderColor: "#5e3d83"
        }
    },
    line: {
        borderColor: "#F1F1F1",
        borderTopWidth: 3,
        width: "75%",
        borderRadius: 10,
        margin: "0 auto"
    }
})(StepConnector);

function FormikStepper({children, ...props}) {
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
                } else {
                    setStep((s) => s + 1);
                }
            }}
        >
            {({ isSubmitting, isValid, dirty }) => (
                <Form autoComplete="off">
                    <Card style={{marginTop: "-45px", zIndex: "1", position: "relative"}}>
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
                        <Row>
                            {completed === false ? (
                                <Col lg={8}>
                                    <StepBody>
                                        {currentChild}
                                    </StepBody>
                                </Col>
                                ) : (
                                <Col lg={12}>
                                    {currentChild}
                                </Col>
                            )}

                            {completed === false ? (
                                <Col lg={3} sm={12} className="ml-auto">
                                    <ButtonControls style={props.buttonStyle}>
                                        <Button disabled={!dirty || !isValid} startIcon={isSubmitting ? <CircularProgress size="1rem"/> : null} type="submit" text={isLastStep() ? "BOOK EVENT" : "CONTINUE"} /> 
                                
                                        {step > 0 && step < 3 ? (
                                            
                                                <Button disabled={isSubmitting} onClick={() => setStep((s) => s - 1)} text="PREVIOUS"/>  
                                            
                                        ) : null}
                                    </ButtonControls>
                                </Col>
                            ) : null}
                        </Row>
                    </Container>
                </Form>
            )}
        </Formik>
    )
}

export default FormikStepper
