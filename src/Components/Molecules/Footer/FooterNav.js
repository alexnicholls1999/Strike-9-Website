import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'
import {Link} from 'react-router-dom';

const IndexFooter = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 20px;

    ul {
        list-style: none;
        margin: 0 auto;
        padding: 0;
        padding-top: 25px;
        
        a {
            color: white;

            &:hover {
                text-decoration: none;
            }
            
            li {
                padding: 10px;
            }
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
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/training"><li>Training</li></Link>
                    <Link to="/coporate"><li>Coporate</li></Link>
                </ul>
                <ul>
                    <Link to="/about"><li>About Us</li></Link>
                    <Link to="/events"><li>Events</li></Link>
                    <Link to="/contact"><li>Contact</li></Link>
                </ul>
            </IndexFooter>
        </Col>
    )   
}


export default FooterNav;