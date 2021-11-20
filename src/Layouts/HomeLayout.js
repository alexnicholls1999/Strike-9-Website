import PropTypes from "prop-types";
import styled from "styled-components";
import Footer from "../Components/Organisms/Footer";
import Header from "../Components/Organisms/Header";
import Hero from "../Components/Organisms/Hero";

import Strike9Wallpaper from "./../assets/Strike-9-Cover-Page.jpg";

const IntroWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    background: url(${Strike9Wallpaper});
    background-size: cover;
    background-position: center;
    box-shadow: inset 0 0 0 100vmax rgb(5 10 43 / 84%);
`;

function HomeLayout({content, children, isAuthenticated, signOut, ...props}) {

    return (
        <>
            <IntroWrapper >
                <Header isAuthenticated={isAuthenticated} signOut={signOut} {...props} />
                <Hero content={content}/>
            </IntroWrapper>
            
            <>
                {children}
            </>

            <Footer />
        </>
    )
}

HomeLayout.propTypes = {
    content: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired
}

export default HomeLayout
