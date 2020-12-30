import React from 'react'
import Footer from '../Organisms/Footer'
import Header from '../Organisms/Header'
import Hero from '../Organisms/Hero'


function MainLayout(props) {
    return (
        <>
            <Header activeKey={props.activeKey}/>
            <Hero title={props.title}/>
            <div>
                {props.children}
            </div>
            <Footer />
        </>
    )
}

export default MainLayout;