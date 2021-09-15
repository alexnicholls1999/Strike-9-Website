import styled from "styled-components";
import Header from "../Components/Organisms/Header";
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
                <Wallpaper />
            </IntroWrapper>

            {children}



        </>
    )
}

export default HomeLayout
