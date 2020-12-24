import React from 'react'
import { Link } from 'react-router-dom';
import {Row, Col, Container } from 'react-bootstrap';

import Button from './../Atoms/Button';
import Card from './../Atoms/Card'
 
function Event(props) {

    const { title, type, age, cost, date, time, description, linkTo, buttonName } = props;

    return (
        <Container>
            <Row>
                <Card>
                    <Col sm={12}>
                        <Row>
                            <Col xs={7} className="ml-auto">
                                <h4>{title}</h4>
                                <p style={{marginBottom: "0"}}>{type}</p>
                                <p>{age}</p>
                            </Col>
                            <Col xs={5} className="ml-auto text-right">
                                <h5>{cost}</h5>
                                <h6>{date}</h6>
                                <p>{time}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={7}>
                                <p>{description}</p>
                            </Col>
                        </Row>
                        <Row className="align-self-end">
                            <Col lg={3} md={3} sm={12} className="ml-auto">
                                <Link to={linkTo}>
                                    <Button shadow style={{float: "right", width: "auto"}} text={buttonName}/>
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                </Card>
            </Row>
        </Container>
    )
}


export default Event;