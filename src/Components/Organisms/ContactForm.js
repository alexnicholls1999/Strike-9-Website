import PropTypes from "prop-types";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";

import Button from "../Atoms/Form/Button";
import FormControl from "../Molecules/FormControl";

const StyledContactFormWrapper = styled.div`
    padding: 2rem;

    h3 {
        color: ${({theme}) => theme.colors.primary[500]};
    }
`;

function ContactForm({contactForm}) {
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
                                            name: "Name"
                                        }
                                    }}
                                />
                            </Col>
                            <Col md={6}>
                                <FormControl 
                                    controls={{
                                        label: {
                                            name: "Email"
                                        }
                                    }}
                                />
                            </Col>
                        </Row>
                        <div className="p-1"></div>
                        <Row>
                            <Col md={12}>
                                <FormControl 
                                    controls={{
                                        label: {
                                            name: "Message"
                                        },
                                        txtArea: true
                                    }}
                                />
                            </Col>
                        </Row>
                        <Button className="ms-auto" text="SEND" type="submit" />
                    </form>
                </StyledContactFormWrapper>
        </Col>
    )
}

export default ContactForm
