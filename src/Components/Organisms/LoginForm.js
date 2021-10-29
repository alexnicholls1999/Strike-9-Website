import styled from "styled-components";
import PropTypes from "prop-types";
import { useHistory } from "react-router" 
import FormControl from "./../Molecules/FormControl";
import Button from "./../Atoms/Form/Button";
import { Row, Col } from "react-bootstrap";
import SocialMedia from "../Molecules/SocialMedia";


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
        width: 40%;
    }

`;

const StyledPasswordLink = styled.p`
    font-size: .75rem;
    color: ${({theme}) => theme.colors.primary[600]};
    float: right;

    &:hover{ 
        text-decoration: underline;
        cursor: pointer;
    }
`;

const StyledAuthLink = styled.div`
    display: flex;
    flex-flow: row;
    justify-content: center;
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

function LoginForm({title}) {

    const history = useHistory()

    return (
        <StyledLoginFormWrapper>
            <div className="p-3"></div>
            <SocialMedia auth />
            <div className="p-3"></div>
            <h6>{title}</h6>
            <div className="p-4"></div>
            <Row>
                <Col md={12}>
                    <FormControl 
                        controls={{
                            label: {
                                name: "Email"
                            }
                        }}
                    />
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <FormControl 
                        controls={{
                            label: {
                                name: "Password"
                            }
                        }}
                    />
                    <StyledPasswordLink onClick={() => history.push('/forgotpassword')}>Forgot your password?</StyledPasswordLink>
                </Col>
            </Row>
            <div className="p-3"></div>
            <Row className="justify-content-center">
                <Col md={10}>
                    <Button className="w-100" text="LOG IN WITH EMAIL" />
                </Col>
            </Row>
            <div className="p-2"></div>
            <StyledAuthLink>
                <p>Dont have an account?</p><p onClick={() => history.push('/createaccount')}>Create an Account </p>
            </StyledAuthLink>
        </StyledLoginFormWrapper>
    )
}

LoginForm.propTypes = {
    title: PropTypes.string.isRequired
}

export default LoginForm
