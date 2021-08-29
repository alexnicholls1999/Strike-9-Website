import { Form, Formik } from 'formik'
import { Row, Col } from 'react-bootstrap';
import styled from "styled-components";
import { faBuilding, faEnvelope } from '@fortawesome/free-solid-svg-icons';

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
    color: ${({theme}) => theme.colors.neutral.White};
    background-color: ${({theme}) => theme.colors.neutral.BlackRock};
    padding: 50px 5%;

    h2 {
        color: ${({theme}) => theme.colors.neutral.White};
    }

    ul {
        list-style-type: none;
        padding: 0;

        li {
            padding-left: 10px;
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

const StyledContactGroup = styled.div`

    display: flex;
    flex-direction: row;

    svg {
        font-size: 25px;
    }

`;

function ContactForm() {
    
    return (
        <Card style={{marginTop: "-135px", zIndex: "1", position: "relative"}}>
            <Row>
                <Col lg={8} md={12}>
                    <Formik
                        
                        initialValues={{
                            name: '',
                            email: '',
                            message: ''
                        }}
                        onSubmit={async (values) => {
                            console.log(values)
                        }}
                    >
                        {({ values, handleChange, isSubmitting}) => (
                            <StyledContactFormWrapper>
                                <h3>Send Us A Message</h3>
                                <br/>
                                <Form autoComplete="off">
                                    <Row>
                                        <Col md={6}>
                                            <label>Name</label>
                                            <div className="p-1"></div>
                                            <Input type="text" name="name" placeholder="Enter Name" value={values.name} onChange={handleChange}/>
                                            <div className="p-1"></div>
                                        </Col>
                                       
                                        <Col md={6}>
                                            <label>Email</label>
                                            <div className="p-1"></div>
                                            <Input type="text" name="email" placeholder="Enter Email" value={values.email} onChange={handleChange}/>
                                            <div className="p-1"></div>
                                        </Col>
                                    </Row>

                                    <div className="p-1"></div>

                                    <Row>
                                        <Col md={12}>
                                            <label>Message</label>
                                            <div className="p-1"></div>
                                            <TextArea style={{height: "200px"}} type="text" name="message" placeholder="Enter Message" value={values.message} onChange={handleChange}/>
                                        </Col>
                                    </Row>
                                    
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
                                    <StyledContactGroup>
                                        <Symbol symbol={faBuilding} /><li>Moseley School Sports Centre, Springfield Road, B13 9NP</li>
                                    </StyledContactGroup>
                                    <br />
                                    <StyledContactGroup>
                                        <Symbol symbol={faEnvelope}/><li>info@strike9training.co.uk</li>
                                    </StyledContactGroup>
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
