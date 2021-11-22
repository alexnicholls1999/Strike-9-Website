import styled from "styled-components";
import PropTypes from "prop-types";
import FormControl from "./../Molecules/FormControl";
import Button from "./../Atoms/Form/Button";
import { Row, Col } from "react-bootstrap";
import { useHistory } from "react-router";
import useCreateAccount from "./../../react-hooks/useCreateAccount";
import ErrorMessage from "../Atoms/Form/ErrorMessage";
import Logo from "../Atoms/Iconography/Logo";


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

    svg {
        margin-top: 1rem;
        margin-inline: auto;
    }

    @media(min-width: ${({theme}) => theme.viewport.md}) {
        width: 40%;
    }

`;

const StyledAuthLink = styled.div`
    display: flex;
    flex-flow: row;
    gap: .5rem;
    justify-content: center;
    
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

function CreateForm({title, serverError, onSubmit}) {

    const history = useHistory()

    const { formik } = useCreateAccount(onSubmit)

    const configEmail = { 
        style: formik.errors.email ? {borderColor: "#C90808"} : null,
        type: "text",
        name: "email",
        value: formik.values.email,
        onChange: formik.handleChange,
        placeholder: "Enter Email"
    }

    const configPassword = { 
        style: formik.errors.password ? {borderColor: "#C90808"} : null,
        type: "password",
        name: "password",
        value: formik.values.password,
        onChange: formik.handleChange,
        placeholder: "Enter Password"
    }

    return (
        <StyledLoginFormWrapper>
            <Logo auth />
            <div className="p-3"></div>
            <form autoComplete="off" onSubmit={formik.handleSubmit}>
                <Row>
                    <Col md={12}>
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
                                label: {
                                    style: formik.errors.password ? {color: "#C90808"} : null,
                                    name: "Password: "
                                },
                                errMsg: formik.errors.password
                            }}
                            {...configPassword}
                        />
                    </Col>
                </Row>
                <div className="p-3"></div>
                <Row className="justify-content-center">
                    <Col md={10}>
                        <Button type="submit" disabled={!formik.isValid} className="w-100" text="CREATE ACCOUNT" />
                    </Col>
                </Row>
                <div className="p-2"></div>
                <ErrorMessage>{serverError}</ErrorMessage>
                <StyledAuthLink>
                    <p>Already have an account?</p><p onClick={() => history.push('/login')}>Login to Account</p>
                </StyledAuthLink>
            </form>
            
        </StyledLoginFormWrapper>
    )
}

CreateForm.propTypes = {
    title: PropTypes.string.isRequired
}

export default CreateForm
