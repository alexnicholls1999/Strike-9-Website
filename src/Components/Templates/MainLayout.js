import React from 'react'
import { Container } from 'react-bootstrap'
import Header from '../Organisms/Header'
import Hero from '../Organisms/Hero'

function MainLayout({children}) {
    return (
        <div>
            <Header />
            <>
                {children}    
            </>
        </div>
    )
}

export default MainLayout
