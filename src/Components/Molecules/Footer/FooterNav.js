import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'

const IndexFooter = styled.div`

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