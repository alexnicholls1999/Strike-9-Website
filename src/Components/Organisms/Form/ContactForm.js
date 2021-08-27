import { Form, Formik } from 'formik'
import styled from "styled-components";

import Button from '../../Atoms/Buttons/Button'
import Card from '../../Atoms/Card'
import Input from '../../Atoms/Form/Input'
import TextArea from '../../Atoms/Form/TextArea';
import SocialMedia from '../../Molecules/SocialMedia';

const StyledContactWrapper = styled.div`
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
`;

function ContactForm() {
    
    return (
        <Card style={{marginTop: "-45px", zIndex: "1", position: "relative"}}>
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
                            <Button disabled={isSubmitting} text="SEND" type="submit" />
                        </Form>
                    </StyledContactFormWrapper>
                )}
            </Formik>
            <StyledContactWrapper>
                    <h2>Contact Information</h2>
                    <ul>
                        <li>Moseley School Sports Centre, Springfield Road, B13 9NP</li>
                        <li>info@strike9training.co.uk</li>
                    </ul>
                    <SocialMedia />
            </StyledContactWrapper>
        </Card>
    )
}

export default ContactForm
