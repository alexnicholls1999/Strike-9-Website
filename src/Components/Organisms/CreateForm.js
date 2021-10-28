import styled from "styled-components";
import PropTypes from "prop-types";
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

function CreateForm({createForm}) {
    return (
        <StyledLoginFormWrapper>
            <SocialMedia auth />
            <h6>{createForm.title}</h6>
            <div className="p-3"></div>
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
                    <a href="">Forgot your password?</a>
                </Col>
            </Row>
            <div className="p-3"></div>
            <Row className="justify-content-center">
                <Col md={8}>
                    <Button className="w-100" text="LOG IN WITH EMAIL" />
                </Col>
            </Row>
        </StyledLoginFormWrapper>
    )
}

CreateForm.propTypes = {

}

export default CreateForm
