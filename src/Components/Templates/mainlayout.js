import React from 'react'
import Header from '../Organisms/Header'
import Hero from '../Organisms/Hero'


function MainLayout(props) {
    return (
        <>
            <Header/>
            <Hero />
            {props.children}
        </>
    )
}

export default MainLayout;