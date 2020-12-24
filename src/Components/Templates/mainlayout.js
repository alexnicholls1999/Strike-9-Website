import React from 'react'
import Footer from '../Organisms/Footer'
import Header from '../Organisms/Header'
import Hero from '../Organisms/Hero'


function MainLayout(props) {
    return (
        <>
            <Header/>
            <Hero />
            {props.children}
            <Footer />
        </>
    )
}

export default MainLayout;