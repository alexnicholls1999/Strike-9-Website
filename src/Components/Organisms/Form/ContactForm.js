import { Form, Formik } from 'formik'
import { Row, Col } from 'react-bootstrap';
import styled from "styled-components";

import {} from "@fortawesome/fontawesome-svg-core";


import Button from '../../Atoms/Buttons/Button'
import Card from '../../Atoms/Card'
import Input from '../../Atoms/Form/Input'
import TextArea from '../../Atoms/Form/TextArea';
import Symbol from '../../Atoms/Iconography/Symbol';
import SocialMedia from '../../Molecules/SocialMedia';

const StyledContactWrapper = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    background-color: ${({theme}) => theme.colors.neutral.BlackRock};
    padding: 50px 5%;

    h2 {
        color: ${({theme}) => theme.colors.neutral.White};
    }

    ul {
        list-style-type: none;
        li {
            color: ${({theme}) => theme.colors.neutral.White};
        }
    }
`;

const StyledContactFormWrapper = styled.div`
    padding: 50px 5%;

    @media(min-width: 768px) {
        button {
            width: 150px;
        }
    }
`;

const SocialMediaWrapper = styled.div`
    position: absolute;
    bottom: 10%;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;

`;

function ContactForm() {
    
    return (
        <Card style={{marginTop: "-45px", zIndex: "1", position: "relative"}}>
            <Row>
                <Col lg={8} md={12}>
                    <Formik
                        
                        initialValues={{
                            email: '',
                            password: '',
                            message: ''
                        }}
                        onSubmit={async (values) => {
                            console.log(values)
                        }}
                    >
                        {({isSubmitting}) => (
                            <StyledContactFormWrapper>
                                <h3>Send Us A Message</h3>
                                <br/>
                                <Form autoComplete="off">
                                    <label>Email</label>
                                    <Input type="text" name="email" placeholder="Enter Email" />

                                    <br/>

                                    <label>Password</label>
                                    <Input type="text" name="password" placeholder="Enter Password" />
                                    
                                    <br/>

                                    <label>Message</label>
                                    <TextArea type="text" name="message" placeholder="Enter Message"/>

                                    <br/> 
                                    <Button className="ms-auto" disabled={isSubmitting} text="SEND" type="submit" />
                                </Form>
                            </StyledContactFormWrapper>
                        )}
                    </Formik>
                    <div className="p-1"></div>
                </Col>
                
                <Col lg={4} md={12}>
                    <StyledContactWrapper>
                        <Row>
                            <Col md={12}>
                                <h2>Contact Information</h2>
                            </Col>
                        </Row>
                            <div className="p-4"></div>
                        <Row>
                            <Col md={12}>
                                <ul>
                                    <Symbol><li>Moseley School Sports Centre, Springfield Road, B13 9NP</li></Symbol>
                                    <br />
                                    <li>info@strike9training.co.uk</li>
                                </ul>
                            </Col>
                        </Row>
                            <div className="p-4"></div>
                        <Row>
                            <Col md={12}>
                                <SocialMediaWrapper>
                                    <SocialMedia />
                                </SocialMediaWrapper>
                            </Col>
                        </Row>
                    </StyledContactWrapper>
                    <div className="p-1"></div>
                </Col>
            </Row>
        </Card>
    )
}

export default ContactForm
