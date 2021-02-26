import React from 'react';
import styled from "styled-components";
import { Container } from 'react-bootstrap'
import Wallpaper from '../Atoms/Wallpaper'
import Footer from '../Organisms/Footer'
import Header from '../Organisms/Header'
import Hero from '../Organisms/Hero'


const IntroWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;

`;

function MainLayout({children, title, paragraph }) {
    return (
        <>
            <IntroWrapper>
                <Header menuColor="#190438" />
                <Hero title={title} paragraph={paragraph} homepage/>
                <Wallpaper />
            </IntroWrapper> 

            <>
                {children}    
            </> 

            <Footer /> 
        </>
    )
}

export default MainLayout
