import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'

const IndexFooter = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 20px;

    ul {
        list-style: none;
        margin: 0 auto;
        padding: 0;
        padding-top: 25px;

        li {
            padding: 10px;
        }
    }

    @media (min-width: 768px) {
        padding-top: 0px;
    }

`

function FooterNav() {
    return (
        <Col lg={4}>
            <IndexFooter>
                <ul>
                    <li>Home</li>
                    <li>Training</li>
                    <li>Coporate</li>
                </ul>
                <ul>
                    <li>About Us</li>
                    <li>Events</li>
                    <li>Contact</li>
                </ul>
            </IndexFooter>
        </Col>
    )   
}


export default FooterNav;