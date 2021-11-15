import styled from "styled-components";
import PropTypes from "prop-types";
import { useHistory } from "react-router" 
import FormControl from "./../Molecules/FormControl";
import Button from "./../Atoms/Form/Button";
import { Row, Col } from "react-bootstrap";
import SocialMedia from "../Molecules/SocialMedia";
import useLogin from "../../react-hooks/useLogin";


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

function LoginForm({title, onSubmit}) {

    const { formik } = useLogin(onSubmit)

    const history = useHistory()
    

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
        type: "text",
        name: "password",
        value: formik.values.password,
        onChange: formik.handleChange,
        placeholder: "Enter Password"
    }

    return (
        <StyledLoginFormWrapper>
            <div className="p-3"></div>
            <SocialMedia auth />
            <div className="p-3"></div>
            <h6>{title}</h6>
            <div className="p-4"></div>
            <form autocomplete="off" onSubmit={formik.handleSubmit}>
                <Row>
                    <Col md={12}>
                        <FormControl 
                            controls={{label: {style: formik.errors.email ? {borderColor: "#C90808"} : null, name: "Email"}, errMsg: formik.errors.email ? {borderColor: "#C90808"} : null}}
                            {...configEmail}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <FormControl 
                            controls={{label: {style: formik.errors.password ? {borderColor: "#C90808"} : null, name: "Password"}, errMsg: formik.errors.password ? {borderColor: "#C90808"} : null}}
                            {...configPassword}
                        />
                        <StyledPasswordLink onClick={() => history.push('/forgotpassword')}>Forgot your password?</StyledPasswordLink>
                    </Col>
                </Row>
                <div className="p-3"></div>
                <Row className="justify-content-center">
                    <Col md={10}>
                        <Button type="submit" className="w-100" text="LOG IN WITH EMAIL" />
                    </Col>
                </Row>
                <div className="p-2"></div>
                <StyledAuthLink>
                    <p>Dont have an account?</p><p onClick={() => history.push('/createaccount')}>Create an Account </p>
                </StyledAuthLink>
            </form>
        </StyledLoginFormWrapper>
    )
}

LoginForm.propTypes = {
    login: PropTypes.shape({
        title: PropTypes.string.isRequired,
        serverErr: PropTypes.string.isRequired,
        onSubmit: PropTypes.func.isRequired
    })
}

export default LoginForm
