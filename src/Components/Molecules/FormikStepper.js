import { Children, useState } from 'react'
import PropTypes from "prop-types";
import styled from "styled-components";
import { Col, Container, Row } from 'react-bootstrap';
import { Form, Formik } from 'formik';

import StepIcon from "./../Atoms/Iconography/StepIcon";
import { FormikConnector } from "./../Atoms/FormikConnector"; 
import { CircularProgress, Step, StepLabel, Stepper } from '@material-ui/core';
import Card from "./../Atoms/Card";
import Modal from './../Atoms/Modal';
import Button from "./../Atoms/Buttons/Button";


const ButtonControls = styled.div`
    width: 100%;
    position: relative;
    margin: 0 auto;
`;

const StyledClickWrap = styled.div`
    display: ${({show}) => (show ? "none" : "block")};
`

const StyledStepLabel = styled(StepLabel)`
    .MuiStepLabel-label {
        display: none;
    }

    @media(min-width: 768px) {
        .MuiStepLabel-label {
            display: block;
        }
    }
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

function FormikStepper({children, ...props}) {
    const childrenArray = Children.toArray(children);
    const currentChild = childrenArray[state.step];
    const [step, setStep] = useState(0);
    const [completed, setCompleted] = useState(false);
    const [show, setShow] = useState(false);
    const [termsandconditions, setTermsandConditions] = useState(false);


    const onSubmitForm = async(props, values, helpers) => {
        if(isLastStep()) {
            await props.onSubmit(values, helpers);
            setState({
                ...state,
                completed: true
            })
        }     
        setState({
            ...state,
            step: (s) => s + 1
        })   
    }

    const isLastStep = () => {
        return step === childrenArray.length - 1;
    }

    const handleShowTermsAndConditions = () => {
        setState({
            ...state,
            show: !state.show,
            termsandconditions: true
        })      
    }

    const handleShowPrivacyPolicy = () => {
        setState({
            ...state,
            show: !state.show,
            termsandconditions: false
        })
    }

    return (
        <Formik
            {...props}
            validationSchema={currentChild.props.validationSchema}
            onSubmit={async(values, helpers) => {
                if(isLastStep()) {
                    await props.onSubmit(values, helpers);
                    setState({
                        ...state,
                        completed: true
                    });
                } else {
                    setState({
                        ...state,
                        step: (s) => s + 1
                    });
                }     
                  
            }}
        >
            {({ isSubmitting, isValid, dirty }) => (
                <>
                    <Form autoComplete="off">
                        <Card style={{marginTop: "-45px", zIndex: 1, position: "relative"}}>
                            <Stepper connector={<FormikConnector />} activeStep={state.step}>
                                {childrenArray.map((child, index) => (
                                    <Step
                                        key={child.props.label}
                                        completed={state.step > index || state.completed}
                                    >
                                        <StyledStepLabel StepIconComponent={StepIcon}>{child.props.label}</StyledStepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                        </Card>

                        <Container>
                            <div className="py-3"></div>
                            <Row>
                                {state.completed === false ? (
                                    <Col lg={8}>
                                        <div>
                                            {currentChild}
                                        </div>
                                    </Col>
                                ) : (
                                    <Col lg={12}>
                                        {currentChild}
                                    </Col>
                                )}

                                {state.completed === false ? (
                                    <Col lg={3} sm={12} className="ms-auto">
                                        <Row>
                                            <Col sm={{span: 12, order: 2}}>
                                                <div className="p-3"></div>
                                                {isLastStep() ? 
                                                    <>
                                                        <StyledClickWrap show={state.show}>
                                                            <p> By booking an event, you agree to Strike 9 Trainings <a href="#" onClick={(e) => { handleShowTermsAndConditions(e);}}>Terms and Conditions </a> and <a href="#" onClick={(e) => {handleShowPrivacyPolicy(e);}}>Privacy Policy </a>.</p>
                                                        </StyledClickWrap>
                                                    </>
                                                : null}
                                            </Col>
                                            <Col sm={{span: 12, order: 1}}>
                                                <ButtonControls style={props.buttonStyle}>
                                                    <Button disabled={!dirty || !isValid} startIcon={isSubmitting ? <CircularProgress size="1rem"/> : null} type="submit" text={isLastStep() ? "BOOK EVENT" : "CONTINUE"} />
                                                    {state.step > 0 && state.step < 3 ? (
                                                        <Button disabled={isSubmitting} onClick={() => setState({
                                                            ...state,
                                                            step: (s) => s - 1
                                                        })} text="PREVIOUS" />       
                                                    ) : null}
                                                </ButtonControls>
                                            </Col>
                                        </Row>
                                    </Col>
                                ) : null }
                            </Row>
                        </Container>
                    </Form>
                    <StyledModalWrapper show={state.show}>
                        {state.termsandconditions === true ? (
                            <Modal onClose={handleShowTermsAndConditions} show={state.show}>
                                <p>Terms And Conditions</p> 
                            </Modal>
                        ) : (
                            <Modal onClose={handleShowPrivacyPolicy} show={state.show}>
                                <p>Privacy Policy</p>
                            </Modal>
                        )} 
                    </StyledModalWrapper>
                </>
            )}
        </Formik>
    )
}

export default FormikStepper
