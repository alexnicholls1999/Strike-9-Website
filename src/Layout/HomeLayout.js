import styled from "styled-components";
import Footer from "../Components/Organisms/Footer";
import Header from "../Components/Organisms/Header";
import Hero from "../Components/Organisms/Hero";
import Strike9Wallpaper from "./../assets/Strike-9-Cover-Page.jpg";

const IntroWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
`;

const Wallpaper = styled.div`
    position: absolute;
    height: 100vh;
    width: 100vw;
    background: url(${Strike9Wallpaper});
    background-size: cover;
    background-position: center;
    box-shadow: inset 0 0 0 100vmax rgb(5 10 43 / 84%);
    top: 0;
    right: 0;
    z-index: -1;    
`

function HomeLayout({children}) {
    return (
        <>  
            <IntroWrapper>
                <Header />
                <Hero secondary heroDetails={{title: "STRIKE 9 TRAINING ACADEMY", paragraph: "Do you want to bring another level to your Game? Are you tracking your progress? Are you seeking additional training outside of your club team? Football is changing."}}/>
                <Wallpaper />
            </IntroWrapper>

            {children}
            
            {/* <Footer /> */}
        </>
    )
}

export default HomeLayout
