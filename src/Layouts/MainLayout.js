import PropTypes from "prop-types";
import styled from "styled-components";
import Hero from "../Components/Organisms/Hero";

const IntroWrapper = styled.div`
    background: ${({theme}) => theme.colors.primary[500]};
    padding: 0 1rem;

    @media(min-width: ${({theme}) => theme.viewport.md}) {
        padding: 0 3rem;
    }
`;

function MainLayout({content, component, children}) {
    return (
        <>
            <IntroWrapper>
                <Hero secondary content={content} component={component} />
            </IntroWrapper>

            {children}
        </>
    )
}

export default MainLayout
