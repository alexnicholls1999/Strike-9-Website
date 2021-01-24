import React from 'react';
import Hero from '../Components/Organisms/Hero';
import SecondaryLayout from '../Components/Templates/secondarylayout';
import { Container, Row, Col } from "react-bootstrap";
import Testimonial from '../Components/Organisms/Testimonial';

import styled from "styled-components";

const Feedback = styled.div`
    padding-top: 10%;

    h2 {
        text-align: right;
        font-size: 3rem;
        color: #C2C2C2;
    }
`;

function Home() {
    return (

        // This layout is only used as a prototype for v1.2. For v1.3 use Main Layout.
        <SecondaryLayout secondary>
            <Hero title="STRIKE 9 TRAINING ACADEMY">
              <Container>
                <div className="p-5"></div>
              </Container>
            </Hero>


            <Container>
                <Row>
                    <Col md={6} className="ml-auto">
                        <Feedback>
                            <h2>FEEDBACK</h2>   
                        </Feedback>
                    </Col>
                </Row>
                <Row>
                    <Testimonial/>
                </Row>
            </Container>

        </SecondaryLayout>
    )
}

export default Home;
