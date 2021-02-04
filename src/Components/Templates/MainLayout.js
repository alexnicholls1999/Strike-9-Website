import React from 'react'
import { Container } from 'react-bootstrap'
import Header from '../Organisms/Header'
import Hero from '../Organisms/Hero'

function MainLayout({children, title, paragraph}) {
    return (
        <div>
            <Header />
            <Container>
                {children}    
            </Container>
        </div>
    )
}

export default MainLayout
