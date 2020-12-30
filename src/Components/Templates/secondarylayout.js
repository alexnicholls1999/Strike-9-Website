import React from 'react'
import Header from '../Organisms/Header'
import { Container } from 'react-bootstrap';
import Footer from '../Organisms/Footer';

function SecondaryLayout(props) {
    return (
        <>
            <Header secondary={props.secondary} activeKey={props.activeKey}/>
            <div>
                {props.children}
            </div>
            <Footer />
        </>
    )
}

export default SecondaryLayout;