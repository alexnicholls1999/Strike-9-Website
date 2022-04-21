import PropTypes from "prop-types";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import useContact from "./../../react-hooks/useContact";
import Button from "../Atoms/Form/Button";
import FormControl from "../Molecules/FormControl";

const StyledContactFormWrapper = styled.div`
    padding: 2rem;

    h3 {
        color: ${({theme}) => theme.colors.primary[500]};
    }
`;

function ContactForm({contactForm, onSubmit}) {

    const { formik } = useContact(onSubmit)

    const configName = {
        style: formik.errors.name ? {borderColor: "#C90808"} : null,
        type: "text",
        name: "name",
        value: formik.values.name,
        onChange: formik.handleChange,
        placeholder: "Enter Name"
    }

    const configEmail = {
        style: formik.errors.email ? {borderColor: "#C90808"} : null,
        type: "text",
        name: "email",
        value: formik.values.email,
        onChange: formik.handleChange,
        placeholder: "Enter Email"
    }

    const configMessage = {
        style: formik.errors.message ? {borderColor: "#C90808"} : null,
        type: "text",
        name: "message",
        value: formik.values.email.message,
        onChange: formik.handleChange,
        placeholder: "Enter Message"
    }


    return (
        <Col lg={8} md={12}>
                <StyledContactFormWrapper>  
                    <h3>{contactForm.title}</h3>
                    <br />
                    <form>
                        <Row>
                            <Col md={6}>
                                <FormControl 
                                    controls={{
                                        label: {
                                            style: formik.errors.name ? {color: "#C90808"} : null,
                                            name: "Name: "
                                        },
                                        errMsg: formik.errors.name
                                    }}
                                    {...configName}
                                />
                            </Col>
                            <Col md={6}>
                                <FormControl 
                                    controls={{
                                        label: {
                                            style: formik.errors.email ? {color: "#C90808"} : null,
                                            name: "Email: "
                                        },
                                        errMsg: formik.errors.email
                                    }}
                                    {...configEmail}
                                />
                            </Col>
                        </Row>
                        <div className="p-1"></div>
                        <Row>
                            <Col md={12}>
                                <FormControl 
                                    controls={{
                                        txtArea: true,
                                        label: {
                                            style: formik.errors.message ? {color: "#C90808"} : null,
                                            name: "Message: "
                                        },
                                        errMsg: formik.errors.message
                                    }}
                                    {...configMessage}
                                />
                            </Col>
                        </Row>
                        <div className="p-3"></div>
                        <Button className="ms-auto" disabled={!formik.isValid} text="SEND" type="submit" />
                    </form>
                </StyledContactFormWrapper>
        </Col>
    )
}

export default ContactForm
