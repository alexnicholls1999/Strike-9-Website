import PropTypes from "prop-types";
import styled from "styled-components";
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


function HomeLayout({content, children}) {

    return (
        <>
            <IntroWrapper>
                <Hero content={content}/>
            </IntroWrapper>
            
            <>
                {children}
            </>
        </>
    )
}

HomeLayout.propTypes = {
    content: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired
}

export default HomeLayout
