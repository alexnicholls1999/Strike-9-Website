import React from 'react'
import { Container } from 'react-bootstrap'
import Hero from '../Components/Organisms/Hero'

const Content = {
      title: "STRIKE 9 TRAINING",
      msg: "Do you want to bring another level to your Game? Are you tracking your progress? Are you seeking additional training outside of your club team? Football is changing."
}

function Home() {
    return (
        <>
            <Hero title={Content.title} paragraph={Content.msg}>
                <Container>

                </Container>
            </Hero>
        </>
    )
}

export default Home
