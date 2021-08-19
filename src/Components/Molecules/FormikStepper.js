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

const StyledStepLabel = styled(StepLabel)`

    .MuiStepLabel-label {
        display: none;
    }

    .MuiStepLabel-label.MuiStepLabel-completed {
        color: ${({theme}) => theme.colors.primary.RoyalPurple};
        font-weight: bold;
    }

    .MuiStepLabel-label.MuiStepLabel-active {
        color: ${({theme}) => theme.colors.primary.RoyalPurple};
        font-weight: bold;
    }

    @media(min-width: 768px) {
        .MuiStepLabel-label {
            display: block
        }
    }
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
                                    <StyledStepLabel StepIconComponent={StepIcon}>{child.props.label}</StyledStepLabel>
                                </Step>
                            ))}
                        </Stepper>
                    </Card>

                    <Container>
                        <div className="py-3"></div>
                        <Row>
                            {!completed ? (
                                <Col lg={8}>
                                    {currentChild}
                                </Col>
                            ) : (
                                <Col lg={12}>
                                    {currentChild}
                                </Col>
                            )}
                            {!completed ? (
                                <Col lg={3} sm={12} className="ms-auto">
                                    <Row>
                                        <Col sm={{span: 12, order: 2}}>
                                            <div className="p-3"></div>
                                            {isLastStep() ? 
                                                <>
                                                    <StyledClickWrap>
                                                        By booking 
                                                    </StyledClickWrap>
                                                </>
                                            : null}
                                        </Col>
                                        <Col sm={{span: 12, order: 1}}>
                                            <ButtonControls style={props.buttonStyle}>
                                                <Button disabled={!dirty || !isValid} startIcon={isSubmitting ? <CircularProgress  /> : null} type="submit" text={isLastStep() ? "BOOK EVENT" : "CONTINUE"} />
                                                {step > 0 && step < 3 ? (
                                                    <Button disabled={isSubmitting} onClick={() => setStep((s) => s - 1)} text="PREVIOUS" />
                                                ) : null}
                                            </ButtonControls>
                                        </Col>
                                    </Row>
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
