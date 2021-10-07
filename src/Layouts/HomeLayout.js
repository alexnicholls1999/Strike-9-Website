import PropTypes from "prop-types";
import styled from "styled-components";
import Hero from "../Components/Organisms/Hero";
import Container from "../Grid/Container";

const IntroWrapper = styled.div`
    position: relative;
    width: 100%;
    // height: 100vh;
`;


function HomeLayout({content, children}) {

    return (
        <>
            <IntroWrapper>
                <Hero content={content}/>
            </IntroWrapper>
            
            <Container>
                {children}
            </Container>
        </>
    )
}

HomeLayout.propTypes = {
    content: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired
}

export default HomeLayout
