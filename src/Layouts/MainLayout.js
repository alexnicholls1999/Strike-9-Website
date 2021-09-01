import PropTypes from "prop-types";
import styled from "styled-components";
import Wallpaper from "../Components/Atoms/Wallpaper";
import Footer from "../Components/Organisms/Footer";
import Header from "../Components/Organisms/Header";
import Hero from "../Components/Organisms/Hero";


const IntroWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
`;

function MainLayout({children, heroDetails}) {
    return (
        <>
            <IntroWrapper>
                <Header variant="dark" menuColor="#190438"/>
                <Hero homepage heroDetails={heroDetails} />
                <Wallpaper />
            </IntroWrapper> 

            <>
                {children}    
            </> 

            <Footer />
        </>
    )
}

MainLayout.propTypes = {
    children: PropTypes.element.isRequired,
}

export default MainLayout