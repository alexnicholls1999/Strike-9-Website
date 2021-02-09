import React from 'react'
import { Container } from 'react-bootstrap'
import Wallpaper from '../Atoms/Wallpaper'
import Header from '../Organisms/Header'
import Hero from '../Organisms/Hero'


function MainLayout({children, title, paragraph }) {
    return (
        <>
            <Wallpaper>
                <Header />
                <Hero title={title} paragraph={paragraph} homepage/>
            </Wallpaper>
            


            <>
                {children}    
            </> 
        </>
    )
}

export default MainLayout
