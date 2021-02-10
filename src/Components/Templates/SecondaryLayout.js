import React from 'react'
import Footer from '../Organisms/Footer'
import Header from '../Organisms/Header'
import Hero from '../Organisms/Hero'

function SecondaryLayout({children}) {
    return (
        <div>
            <Header secondary/>

            {children}

            <Footer />
        </div>
    )
}

export default SecondaryLayout;
