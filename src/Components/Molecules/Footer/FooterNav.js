import React from 'react';
import styled from "styled-components";
import {Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";

const IndexFooter = styled.div`
    display: flex; 
    flex-direction: row;
    padding-top: 20px;

    ul {
        list-style: none;
        margin: 0 auto;
        padding: 0 25px;

        a {
            color: ${({theme}) => theme.colors.neutral.White};

            &:hover {
                text-decoration: none;
            }

            li {
                padding: 10px;
            }
        }
    }

    @media (min-width: ${({theme}) => theme.viewport.mediumDevices}) {
        padding-top: 0;
    }

`;

function FooterNav() {
    return (
        <Col>
            <IndexFooter>
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/"><li>Training</li></Link>
                    <Link to="/"><li>Corporate</li></Link>
                </ul>
                <ul>
                    <Link to="/"><li>About Us</li></Link>
                    <Link to="/"><li>Events</li></Link>
                    <Link to="/"><li>Contact</li></Link>
                </ul>
            </IndexFooter>
        </Col>
    )
}

export default FooterNav
