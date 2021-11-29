import { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Header from "./../Components/Organisms/Header";
import Modal from "./../Components/Organisms/Modal";
import TermsAndConditions from "../Pages/TermsAndConditions";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import CookiesPolicy from "../Pages/CookiesPolicy";

const StyledModalWrapper = styled.div`
    display: ${({show}) => show ? "block" : "none"};
    position: fixed;
    padding: 2.5%;
    margin: 0 auto;
    top: 0;
    left: 0;
    z-index: 2;
    height: 100vh;
    width: 100vw;
`;

const StyledAuthWrapper = styled.div`
    position: absolute;
    top: 0;
    display: flex;
    flex-flow: column;
    height: 100vh;

    @media(min-width: ${({theme}) => theme.viewport.md}) {
        flex-flow: row;
    }
`;

const StyledAuthHeader = styled.div`
    display: flex;
    flex-flow: column;
    align-items: align-start;
    justify-content: align-start;
    background: ${({theme}) => theme.colors.primary[500]};
    color: ${({theme}) => theme.colors.neutral[100]};
    padding: 1rem;
    text-align: center;
    gap: 1rem;
    padding: 7rem 1rem 3rem;

    h2 {
        color: ${({theme}) => theme.colors.neutral[100]};
    }
    
    a {
        color: ${({theme}) => theme.colors.neutral[100]};
        z-index: 1;
    }

    @media(min-width: ${({theme}) => theme.viewport.md}) {
        width: 35%;
        height: 100%;
        padding-top: 10rem;
        text-align: left;
    }
`;

const StyledAuthContainer = styled.div`
    display: flex;
    flex-flow: column;
    align-items: align-start;
    justify-content: align-start;
    padding: 0rem 1rem;

    @media(min-width: ${({theme}) => theme.viewport.md}) {
        width: 65%;
        padding-top: 10rem;
        align-items: center;
    }
`;

function AuthLayout({authContent}) {

    const [show, setShow] = useState(false);
    const [termsandconditions, setTermsandConditions] = useState(false);
    const [cookies, setCookies] = useState(false)

    const handleShowTermsAndConditions = (e) => {
        e.preventDefault()
        setShow(!show);
        setTermsandConditions(true);
    }

    const handleShowCookiesPolicy = (e) => {
        e.preventDefault();
        setShow(!show);
        setTermsandConditions(false);
        setCookies(true);
    }

    const handleShowPrivacyPolicy = (e) => {
        e.preventDefault();
        setShow(!show);
        setTermsandConditions(false);
    }


    return (
        <>
            <Header auth secondary />
            <StyledAuthWrapper>
                <StyledAuthHeader>
                    <h2>{authContent.hero.title}</h2>
                    <p>By clicking {authContent.paragraph} you agree to our <a href="#" onClick={(e) => handleShowTermsAndConditions(e)}>Terms and Conditions</a>. Learn here how we process your data in our <a href="#" onClick={(e) => handleShowPrivacyPolicy(e)}>Privacy Policy</a> and <a href="#" onClick={(e) => handleShowCookiesPolicy(e)}>Cookies Policy</a></p>
                </StyledAuthHeader>
                <StyledAuthContainer>
                    {authContent.component}
                </StyledAuthContainer>
            </StyledAuthWrapper>

            <StyledModalWrapper show={show}> 
                {termsandconditions === true ? (
                    <Modal onClose={handleShowTermsAndConditions} show={show}>
                        <TermsAndConditions modal />
                    </Modal>
                ) : (
                    cookies ? (
                        <Modal onClose={handleShowCookiesPolicy} show={show}><CookiesPolicy modal /></Modal>
                    ) : (
                        <Modal onClose={handleShowPrivacyPolicy} show={show}><PrivacyPolicy modal /></Modal>
                    )
                )}
            </StyledModalWrapper>
        </>
    )
}

AuthLayout.propTypes = {
    authContent: PropTypes.shape({
        hero: PropTypes.shape({
            title: PropTypes.string,
            paragraph: PropTypes.string
        }),
        component: PropTypes.element
    })
}

export default AuthLayout


