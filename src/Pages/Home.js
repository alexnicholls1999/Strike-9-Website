import React from 'react'
import styled from "styled-components"
import { Col, Container, Row } from 'react-bootstrap'
import Button from '../Components/Atoms/Button'
import Hero from '../Components/Organisms/Hero'
import Wallpaper from '../Components/Atoms/Wallpaper'
import { useHistory } from 'react-router-dom'
import SocialMedia from '../Components/Molecules/SocialMedia'


const Content = {
      title: "STRIKE 9 TRAINING ACADEMY",
      msg: "Do you want to bring another level to your Game? Are you tracking your progress? Are you seeking additional training outside of your club team? Football is changing."
}


const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 300px;
`;

const SocialMediaHeroWrapper = styled.div`
    position: absolute;
    bottom: 10%;
    right: 10%;
`;

function Home() {

    const history = useHistory();
    return (
        <>
            
            <Hero title={Content.title} paragraph={Content.msg}>
                <ButtonsWrapper>
                    <Button style={{marginRight: "10px"}} onClick={() => history.push('/events')}text="Register"/>
                    <Button text="Find out more"/>
                </ButtonsWrapper>
            </Hero>
        </>
    )
}

export default Home
