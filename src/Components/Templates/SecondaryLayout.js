import React from 'react'
import Wallpaper from '../Atoms/Wallpaper'
import Footer from '../Organisms/Footer'
import Header from '../Organisms/Header'
import Hero from '../Organisms/Hero'

function SecondaryLayout({children}) {
    return (
        <>  
            <Wallpaper secondary>
                
                <Header />
            </Wallpaper>


            {children}

            <Footer />
        </>
    )
}

export default SecondaryLayout;
