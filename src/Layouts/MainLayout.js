import PropTypes from "prop-types";
import styled from "styled-components";
import Hero from "../Components/Organisms/Hero";
import Pattern from "../Components/Atoms/Iconography/Pattern";
import Header from "../Components/Organisms/Header";

const IntroWrapper = styled.div`
    background: ${({theme}) => theme.colors.primary[500]};
    padding: 0 1rem;

    @media(min-width: ${({theme}) => theme.viewport.md}) {
        padding: 0 3rem;
    }
`;

function MainLayout({hero, component, children, noDisplay, ...props}) {
    return (
        <>
            <IntroWrapper>
                <Header />
                <Hero secondary content={hero.content} component={component} {...props} />
            </IntroWrapper>
            <Pattern noDisplay={noDisplay}/>

            {children}
        </>
    )
}

MainLayout.propTypes = {
    hero: PropTypes.shape({
        content: PropTypes.object.isRequired
    }),
    component: PropTypes.element,
    children: PropTypes.node.isRequired,
    noDisplay: PropTypes.bool
}

export default MainLayout
