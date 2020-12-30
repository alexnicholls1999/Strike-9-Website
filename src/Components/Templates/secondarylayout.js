import React from 'react'
import Header from '../Organisms/Header'
import { Container } from 'react-bootstrap';
import Footer from '../Organisms/Footer';
import styled from "styled-components";

const Padding = styled.div`

    padding: 3.5rem;

`;


function SecondaryLayout(props) {
    return (
        <>
            <Header secondary={props.secondary} activeKey={props.activeKey}/>
            <div>
                {props.children}
            </div>
            <Padding/>
            <Footer />
        </>
    )
}

export default SecondaryLayout;