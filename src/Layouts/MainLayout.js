import PropTypes from "prop-types";
import styled from "styled-components";
import Hero from "../Components/Organisms/Hero";
import Pattern from "../Components/Atoms/Iconography/Pattern";
import Header from "../Components/Organisms/Header";
import Footer from "../Components/Organisms/Footer";

const IntroWrapper = styled.div`
    background: ${({theme}) => theme.colors.primary[500]};
`;

function MainLayout({hero, component, children, isAuthenticated, noDisplay, ...props}) {
    return (
        <>
            <IntroWrapper>
                <Header isAuthenticated={isAuthenticated} {...props}/>
                <Hero secondary content={hero.content} component={component} {...props} />
            </IntroWrapper>
            <Pattern noDisplay={noDisplay}/>

            {children}

            <Footer />
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
