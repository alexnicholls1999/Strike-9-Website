import PropTypes from "prop-types";
import styled from "styled-components";
import Wallpaper from '../Atoms/Wallpaper'
import Footer from '../Organisms/Footer'
import Header from '../Organisms/Header'
import Hero from '../Organisms/Hero'


const IntroWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
`;

function MainLayout({children, ...props}) {
    return (
        <>
            <IntroWrapper>
                <Hero {...props}/>
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