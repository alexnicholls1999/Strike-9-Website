import React, { useState, Children } from 'react';
import PropTypes from "prop-types";
import { Formik, Form } from "formik";
import {Container, Col, Row } from "react-bootstrap";
import styled from 'styled-components';
import { Step, Stepper, StepLabel, CircularProgress} from "@material-ui/core";
import StepConnector from "@material-ui/core/StepConnector";
import Check from "@material-ui/icons/Check";
import Button from "../../Atoms/Button";
import Card from "../../Atoms/Card";
import { makeStyles, withStyles } from "@material-ui/core/styles"; 
import clsx from "clsx";


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

const StepBody = styled.div`
    padding-left: 25px;

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

const Strike9StepIconStyles = makeStyles({
    root: {
        color: "#eaeaf0",
        display: "flex",
        height: 22,
        alignItems: "center"
    },
    active: {
        color: "#5e3d83",
        opacity: "100%"
    },
    completed: {
        color: "#5E3D83",
        zIndex: 1,
        opacity: "100%"
    }
});

function StepIcon(props) {
    const classes = Strike9StepIconStyles();
    const { active, completed } = props;

    return (
        <div className={clsx(classes.root, {
            [classes.active]: active
        })}>
            {completed ? <Check className={classes.completed}/> : <Check />}
        </div>
    )
}

StepIcon.propTypes = {
    active: PropTypes.bool,
    completed: PropTypes.bool
}

function FormikStepper({children, leftlg, rightlg, ...props}) {
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
                        <div className="p-2"></div>
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
                                <Col lg={4}>
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

export default FormikStepper;
