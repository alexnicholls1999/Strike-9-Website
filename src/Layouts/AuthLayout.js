import PropTypes from "prop-types";
import styled from "styled-components";
import Header from "./../Components/Organisms/Header";

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
    return (
        <>
            <Header auth secondary/>
            <StyledAuthWrapper>
                <StyledAuthHeader>
                    <h2>{authContent.hero.title}</h2>
                    <p>{authContent.hero.paragraph}</p>
                </StyledAuthHeader>
                <StyledAuthContainer>
                    {authContent.component}
                </StyledAuthContainer>
            </StyledAuthWrapper>
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


