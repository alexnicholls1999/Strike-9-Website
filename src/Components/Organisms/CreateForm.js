import styled from "styled-components";
import PropTypes from "prop-types";
import FormControl from "./../Molecules/FormControl";
import Button from "./../Atoms/Form/Button";
import { Row, Col } from "react-bootstrap";
import SocialMedia from "../Molecules/SocialMedia";
import { useHistory } from "react-router";


const StyledLoginFormWrapper = styled.div`
    display: flex;
    flex-flow: column;
    width: 100%;
    
    h6 {
        text-align: center;
        color: ${({theme}) => theme.colors.neutral[300]};
    }

    a {
        text-decoration: none;
        font-size: .75rem;
        font-weight: ${({theme}) => theme.typography.fontWeight.regular};
        color: ${({theme}) => theme.colors.primary[600]};
        float: right;

    }

    @media(min-width: ${({theme}) => theme.viewport.md}) {
        width: 60%;
    }

`;

const StyledAuthLink = styled.div`
    display: flex;
    flex-flow: row;
    gap: .5rem;
    
    p {
        font-size: .75rem;

        &:nth-child(2) {
            color: ${({theme}) => theme.colors.primary[600]};

            &:hover{ 
                text-decoration: underline;
                cursor: pointer;
            }
        }
    }
`;

function CreateForm({title}) {

    const history = useHistory()

    return (
        <StyledLoginFormWrapper>
            <div className="p-3"></div>
            <SocialMedia auth />
            <div className="p-3"></div>
            <h6>{title}</h6>
            <div className="p-4"></div>
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
                <Col md={6}>
                    <FormControl 
                        controls={{
                            label: {
                                name: "Password"
                            }
                        }}
                    />
                </Col>
                <Col md={6}>
                    <FormControl 
                        controls={{
                            label: {
                                name: "Confirm Password"
                            }
                        }}
                    />
                </Col>
            </Row>
            <div className="p-3"></div>
            <Row>
                <Col md={7}>
                    <Button className="w-100" text="CREATE ACCOUNT" />
                </Col>
            </Row>
            <div className="p-2"></div>
            <StyledAuthLink>
                <p>Already have an account?</p><p onClick={() => history.push('/login')}>Login to Account </p>
            </StyledAuthLink>
        </StyledLoginFormWrapper>
    )
}

CreateForm.propTypes = {
    title: PropTypes.string.isRequired
}

export default CreateForm
