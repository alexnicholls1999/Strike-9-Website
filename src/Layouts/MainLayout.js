import PropTypes from "prop-types";
import styled from "styled-components";
import Hero from "../Components/Organisms/Hero";
import Pattern from "../Components/Atoms/Iconography/Pattern";

const IntroWrapper = styled.div`
    background: ${({theme}) => theme.colors.primary[500]};
    padding: 0 1rem;

    @media(min-width: ${({theme}) => theme.viewport.md}) {
        padding: 0 3rem;
    }
`;

function MainLayout({hero, children, noDisplay}) {
    return (
        <>
            <IntroWrapper>
                <Hero secondary content={hero.content} component={hero.component} />
            </IntroWrapper>
            <Pattern noDisplay={noDisplay}/>

            {children}
        </>
    )
}

MainLayout.propTypes = {
    hero: PropTypes.shape({
        content: PropTypes.object.isRequired,
        component: PropTypes.element,
    }),
    children: PropTypes.node.isRequired,
    noDisplay: PropTypes.bool
}

export default MainLayout
