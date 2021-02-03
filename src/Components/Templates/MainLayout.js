import React from 'react'
import { Container } from 'react-bootstrap'
import Header from '../Organisms/Header'

function MainLayout({children}) {
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
