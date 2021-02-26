import React from 'react'
import styled from "styled-components"
import Wallpaper from '../Atoms/Wallpaper'
import Footer from '../Organisms/Footer'
import Header from '../Organisms/Header'
import Hero from '../Organisms/Hero'

const IntroWrapper = styled.div`
    position: relative;
    width: 100%;
`;

function SecondaryLayout({children}) {
    return (
        <>  
            <IntroWrapper>
                <Header navBg="#5E3DB3" menuColor="#5E3DB3" />
                
            </IntroWrapper>
            


            {children}

            <Footer />
        </>
    )
}

export default SecondaryLayout;
