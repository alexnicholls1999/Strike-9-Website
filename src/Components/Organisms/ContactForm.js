import PropTypes from "prop-types";
import styled from "styled-components";
import FormControl from "../Molecules/FormControl";
import SocialMedia from "../Molecules/SocialMedia";
import Card from "./../Atoms/Card";

const StyledContactFormWrapper = styled.div`
    display: flex;
    flex-flow: column;


    @media(min-width: ${({theme}) => theme.viewport.md}) {
        flex-flow: row;
    }
`;

const StyledContactForm = styled.div`
    padding: 2rem 1rem;
`;

const StyledContactFormContainer = styled.div`

    width: 80%;

`;

const StyledContactInformation = styled.div`
    padding: 1rem;
    background-color: ${({theme}) => theme.colors.neutral[800]};
`;

const StyledContactInformationContainer = styled.div`
    display: flex;
    flex-flow: column;
`;

const StyledContactInformationTitle = styled.div`

`;

const StyledContactInfo = styled.div`

`;

const StyledContactSocialMedia = styled.div`

`;

const StyledContactFormTitle = styled.div`

`;

function ContactForm() {
    return (
        <Card>
            <StyledContactFormWrapper>
                <StyledContactForm>
                    <StyledContactFormContainer>
                        <StyledContactFormTitle>
                            <h3>Send Us A Message</h3>
                        </StyledContactFormTitle>
                        <div className="p-3"></div>
                        <FormControl 
                            controls={{
                                label: {
                                    name: "Name"
                                }
                            }}
                            placeholder="Enter Name"
                        />
                        <FormControl 
                            controls={{
                                label: {
                                    name: "Email"
                                }
                            }}
                            placeholder="Enter Email"
                        />
                        <FormControl 
                            controls={{
                                txtArea: true,
                                label: {
                                    name: "Message"
                                }
                            }}
                            placeholder="Enter Message"
                        />
                    </StyledContactFormContainer>
                </StyledContactForm>
                <StyledContactInformation>
                    <StyledContactInformationContainer>
                        <StyledContactInformationTitle>
                            <h3>Contact Information</h3>
                        </StyledContactInformationTitle>
                        <StyledContactInfo>
                            <ul>
                                <li>Mosley School Sports Centre, <br/> Springfield Road, B13 9NP</li>
                                <li>079341234113</li>
                                <li>info@strike9training.co.uk</li>
                            </ul>
                        </StyledContactInfo>
                        <StyledContactSocialMedia>
                            <SocialMedia />
                        </StyledContactSocialMedia>
                    </StyledContactInformationContainer>
                </StyledContactInformation>
            </StyledContactFormWrapper>
        </Card>
    )
}

export default ContactForm
