import styled from "styled-components";
import {Link} from "react-router-dom";
import {Col} from "react-bootstrap";

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
            font-size: 1rem;
            font-weight: 700;
        }
        a {
            color: ${({theme}) => theme.colors.neutral.White};
            text-decoration: none;
            
            li {
                font-size: 12px;
                padding: 2.5px;
                padding-left: 0;
            }
        }
    }
    @media (min-width: 768px) {
        padding-top: 0;
        flex-direction: row;
    }
`;


function FooterNav() {
    return (
        <>
            <Col md={2} sm={2}>
                <IndexFooter>
                    <ul>
                        <h5>Explore</h5>
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/aboutus"><li>About Us</li></Link>
                        <Link to="/training"><li>Training</li></Link>
                        <Link to="/events"><li>Events</li></Link>
                        <Link to="/corporate"><li>Corporate</li></Link>
                        <Link to="/contact"><li>Contact</li></Link>
                    </ul>
                </IndexFooter>
            </Col>   
            <Col md={3} sm={4}>
                <IndexFooter>
                    <ul>
                        <h5>Contact</h5>
                        <Link to="/"><li>info@strike9training.co.uk</li></Link>
                    </ul>
                </IndexFooter>
            </Col>   
            <Col md={3} sm={4}>
                <IndexFooter>
                    <ul>
                        <h5>Legal</h5>
                        <Link to="/"><li>Terms & Conditions</li></Link>
                        <Link to="/"><li>Privacy Policy</li></Link>
                    </ul>
                </IndexFooter>
            </Col>   
        </>
    )
}

export default FooterNav;