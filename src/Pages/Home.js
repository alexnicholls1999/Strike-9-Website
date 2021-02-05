import React from 'react'
import styled from "styled-components"
import { Col, Container, Row } from 'react-bootstrap'
import Button from '../Components/Atoms/Button'
import Hero from '../Components/Organisms/Hero'
import Wallpaper from '../Components/Atoms/Wallpaper'
<<<<<<< HEAD
import SocialMedia from '../Components/Molecules/SocialMedia'
=======
import { useHistory } from 'react-router-dom'
import SocialMedia from '../Components/Molecules/SocialMedia'

>>>>>>> 3b0bcafff5df06b9dfbfbe01f164ea7a678f9b14

const Content = {
      title: "STRIKE 9 TRAINING ACADEMY",
      msg: "Do you want to bring another level to your Game? Are you tracking your progress? Are you seeking additional training outside of your club team? Football is changing."
}


const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 300px;
`;

<<<<<<< HEAD
const SocialMediaWrapper = styled.div`
    bottom: 10%;
    right: 10%;

=======
const SocialMediaHeroWrapper = styled.div`
    position: absolute;
    bottom: 10%;
    right: 10%;
`;

const Sponsors = styled.div`
    background-color: black;
    height: 250px;
    padding: 10%;

    h2 {
        color: ${({theme}) => theme.colors.neutral.White};
    }
>>>>>>> 3b0bcafff5df06b9dfbfbe01f164ea7a678f9b14
`;

function Home() {

    const history = useHistory();
    return (
        <>
            <Hero title={Content.title} paragraph={Content.msg}>
                <ButtonsWrapper>
<<<<<<< HEAD
                    <Button style={{marginRight: "10px"}}text="Register"/>
                    <Button text="Find out more"/>        
                </ButtonsWrapper>   
            </Hero>
            <SocialMediaWrapper>
                <SocialMedia />
            </SocialMediaWrapper>
            <Wallpaper/>
            <Container>
                <Row>
                    <h2>SPONSORS</h2>   
                </Row>
                <Row>
                    <img src="" alt="" srcset=""/>
                </Row>
            </Container>
=======
                    <Button style={{marginRight: "10px"}} onClick={() => history.push('/events')}text="Register"/>
                    <Button text="Find out more"/>
                </ButtonsWrapper>
                <SocialMediaHeroWrapper>
                    <SocialMedia/>
                </SocialMediaHeroWrapper>
            </Hero>

            <Sponsors>
                <Container>
                    <h2 className="text-center">Test</h2>
                </Container>
            </Sponsors> 

            <Wallpaper />

>>>>>>> 3b0bcafff5df06b9dfbfbe01f164ea7a678f9b14
        </>
    )
}

export default Home
