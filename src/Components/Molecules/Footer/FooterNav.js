import React from 'react';
import styled from "styled-components";
import {Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";

const IndexFooter = styled.div`
    display: flex; 
    flex-direction: column;
    padding-top: 20px;

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        margin-bottom: 5%;

        h5 {
            font-size: .8rem;
        }

        a {
            color: ${({theme}) => theme.colors.neutral.White};

            &:hover {
                text-decoration: none;
            }

            li {
                font-size: 12px;
                padding: 2.5px;
                padding-left: 0;
            }
        }
    }

    @media (min-width: ${({theme}) => theme.viewport.mediumDevices}) {
        padding-top: 0;
        flex-direction: row;

        ul {
            margin-right: 50px;
            padding-left: 25px;
            
        }
        
    }

`;

function FooterNav() {
    return (
        <Col>
            <IndexFooter>
                <ul>
                    <h5>Explore</h5>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/"><li>Training</li></Link>
                    <Link to="/"><li>Corporate</li></Link>
                    <Link to="/"><li>About Us</li></Link>
                    <Link to="/"><li>Events</li></Link>
                    <Link to="/"><li>Contact</li></Link>
                </ul>
                <ul>
                    <h5>Contact</h5>
                    <Link to="/"><li>info@strike9training.co.uk</li></Link>
                </ul>
                <ul>
                    <h5>Legal</h5>
                    <Link to="/"><li>Terms & Conditions</li></Link>
                    <Link to="/"><li>Privacy Policy</li></Link>
                </ul>
            </IndexFooter>
        </Col>
    )
}

export default FooterNav
