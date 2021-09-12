import { useState, Children} from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import {Formik, Form} from "formik";
import { Step, StepLabel, Stepper } from '@material-ui/core';
import { Container, Row, Col} from 'react-bootstrap';

import { isLastStep, FormikConnector} from '../../react-helpers/formikHelpers';
import Button from './../Atoms/Buttons/Button';
import Card from './../Atoms/Card';
import StepIcon from './../Atoms/Iconography/StepIcon';
import Modal from './../Atoms/Modal';


const ButtonControls = styled.div`
    width: 100%;
    position: relative;
    margin: 0 auto;
`;

const StyledModalWrapper = styled.div`
    display: ${({show}) => (show ? "block" : "none")};
    position: fixed;
    padding: 2.5%;
    margin: 0 auto;
    top: 0;
    left: 0;
    z-index: 2;
    height: 100vh;
    width: 100vw;
`;

const StyledStepLabel = styled(StepLabel)`
    .MuiTypography-body2 {
        font-size: 1rem !important;
        font-family: "Muli", sans-serif !important;
        font-weight: 600;
        line-height: 1.43;
        letter-spacing: 0.01071em;
    }
    .MuiStepLabel-label {
        color: #f1f1f1;
        display: none;
    }
    .MuiStepLabel-label.MuiStepLabel-completed {
        color: ${({theme}) => theme.colors.primary.RoyalPurple};
        font-weight: ${({theme}) => theme.typography.fontWeight.bold};
    }
    .MuiStepLabel-label.MuiStepLabel-active {
        color: ${({theme}) => theme.colors.primary.RoyalPurple};
        font-weight: ${({theme}) => theme.typography.fontWeight.bold};
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
    const [show, setShow] = useState(false);
    const [termsandconditions, setTermsandConditions] = useState(false);
    
    const currentChild = childrenArray[step];

    const handleShowTermsAndConditions = (e) => {
        setShow(!show);
        setTermsandConditions(true);
    }
    
    const handleShowPrivacyPolicy = (e) => { 
        setShow(!show);
        setTermsandConditions(false);
    }

    return (
        <Formik
            {...props}
            validationSchema={currentChild.props.validationSchema}
            onSubmit={async (values, helpers) => {
                if (isLastStep(step, childrenArray)) {
                    await props.onSubmit(values, helpers);
                    setCompleted(true);
                } else {
                    setStep((s) => s + 1);
                }
            }}
        >
            {({ isSubmitting, isValid, dirty }) => (
                <>
                <Form autoComplete="off">
                    <Card style={{marginTop: "-45px", zIndex: "1", position: "relative"}}>
                        <Stepper connector={<FormikConnector/>} activeStep={step}>
                            {childrenArray.map((child, index) => (
                                <Step
                                    key={child.props.label}
                                    completed={step > index || completed}
                                >
                                    <StyledStepLabel StepIconComponent={StepIcon}>{index === step && isSubmitting ? "Booking..." : child.props.label}</StyledStepLabel>
                                </Step>
                            ))}
                        </Stepper>
                    </Card>

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
                                            {isLastStep(step, childrenArray) ? 
                                                    <p> By booking an event, you agree to Strike 9 Trainings <a href="#" onClick={(e) => { handleShowTermsAndConditions(e);}}>Terms and Conditions </a> and <a href="#" onClick={(e) => {handleShowPrivacyPolicy(e);}}>Privacy Policy </a>.</p>
                                            : null}
                                        </Col>
                                        <Col sm={{span: 12, order: 1}}>
                                            <ButtonControls>
                                                <Button disabled={!dirty || !isValid} type="submit" text={isSubmitting ? "BOOKING" : isLastStep(step, childrenArray) ? "BOOK EVENT" : "CONTINUE"} /> 
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
                <StyledModalWrapper show={show}> 
                    {termsandconditions === true ? (
                        <Modal onClose={handleShowTermsAndConditions} show={show}>
                            <p>Terms And Conditions</p>  
                        </Modal>
                    ) : (
                        <Modal onClose={handleShowPrivacyPolicy} show={show}>
                            <p>Privacy Policy</p>
                        </Modal>
                    )}
                </StyledModalWrapper>
                </>
            )}
        </Formik>
    )
}

FormikStepper.propTypes = {
    children: PropTypes.array.isRequired
}

export default FormikStepper
