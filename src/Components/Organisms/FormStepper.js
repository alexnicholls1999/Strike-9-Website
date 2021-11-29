import { useState, Children, useReducer} from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import { FormikProvider, useFormik } from "formik";
import { Container, Row, Col} from 'react-bootstrap';
import stepReducer from "./../../react-reducers/FormStepper/stepper.reducer";
import { nextStepAction, prevStepAction } from '../../react-reducers/FormStepper/stepper.actions';
import Modal from "./../Organisms/Modal";

import Button from "./../Atoms/Form/Button";
import ProgressBar from "./../Molecules/ProgressBar";
import TermsAndConditions from "./../../Pages/TermsAndConditions";
import PrivacyPolicy from "./../../Pages/PrivacyPolicy";

const StyledModalWrapper = styled.div`
    display: ${({show}) => show ? "block" : "none"};
    position: fixed;
    padding: 2.5%;
    margin: 0 auto;
    top: 0;
    left: 0;
    z-index: 2;
    height: 100vh;
    width: 100vw;
`;

const ButtonControls = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column;
    gap: 1rem;

    button {
        width: 100%;
    }
`;

function FormStepper({children, onSubmit, ...props}) {
    const [step, dispatch] = useReducer(stepReducer, 0)
    const childrenArray = Children.toArray(children);
    const [completed, setCompleted] = useState(false);
    const [show, setShow] = useState(false);
    const [termsandconditions, setTermsandConditions] = useState(false);
    
    const currentChild = childrenArray[step];

    const handleShowTermsAndConditions = (e) => {
        e.preventDefault();
        setShow(!show);
        setTermsandConditions(true);
    }

    const handleShowPrivacyPolicy = (e) => {
        e.preventDefault(); 
        setShow(!show);
        setTermsandConditions(false);
    }

    const isLastStep = () => {
        return step === childrenArray.length - 1;
    }

    const formik = useFormik({
        initialValues: props.initialValues,
        validationSchema: currentChild.props.validationSchema,
        onSubmit: async(values, helpers) => {
            if (isLastStep()) { 
                await onSubmit(values, helpers)
                setCompleted(true)
            } else {
                dispatch(nextStepAction());
            }
        } 
    })

    return (

        <FormikProvider value={formik}>
            <form autoComplete="off" onSubmit={formik.handleSubmit}>
                <ProgressBar currentStep={step} completed={completed} isSubmitting={formik.isSubmitting} steps={childrenArray} />
                <Container>
                     <div className="py-3"></div>
                     <Row>
                        <Col lg={!completed ? 8 : 12}>{currentChild}</Col>

                         {completed === false ? (
                            <Col lg={3} sm={12} className="ms-auto">
                                <Row>
                                    <Col sm={{span: 12, order: 2}}>  
                                        <div className="p-3"></div>
                                        {isLastStep() ? 
                                                <p> By booking an event, you agree to Strike 9 Trainings <a href="#" onClick={(e) => handleShowTermsAndConditions(e)}>Terms and Conditions </a> and <a href="#" onClick={(e) => handleShowPrivacyPolicy(e)}>Privacy Policy </a>.</p>
                                        : null}
                                    </Col>
                                    <Col sm={{span: 12, order: 1}}>
                                        <ButtonControls>
                                            <Button disabled={!formik.dirty || !formik.isValid} type="submit" text={formik.isSubmitting ? "BOOKING" : isLastStep() ? "BOOK EVENT" : "CONTINUE"} /> 
                                            {step > 0 && step < 3 ? <Button disabled={formik.isSubmitting} type="button" onClick={() => dispatch(prevStepAction())} text="PREVIOUS"/> : null}
                                        </ButtonControls>
                                    </Col> 
                                </Row>
                            </Col>
                        ) : null}
                    </Row>
                    <div className="p-4"></div>
                </Container>
            </form>

            <StyledModalWrapper show={show}> 
                {termsandconditions === true ? (
                    <Modal onClose={handleShowTermsAndConditions} show={show}>
                        <TermsAndConditions modal />
                    </Modal>
                ) : (
                    <Modal onClose={handleShowPrivacyPolicy} show={show}>
                        <PrivacyPolicy modal />
                    </Modal>
                )}
            </StyledModalWrapper>
        </FormikProvider>
    )
}

FormStepper.propTypes = {
    children: PropTypes.array.isRequired
}

export default FormStepper;