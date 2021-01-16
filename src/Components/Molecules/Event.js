import React from 'react'
import { Link } from 'react-router-dom';
import {Row, Col, Container } from 'react-bootstrap';
import styled from 'styled-components';
import Button from './../Atoms/Button';
import Card from './../Atoms/Card'


const EventsTitle = styled.h4 `
    font-weight: 700;
    color: #5E3DB3;

`;

const EventsType = styled.p`
    margin-bottom: 0;
    font-size: clamp(12px, 1.5vw, 18px);
    font-weight: 700;
    color: #606060;

`;

const EventsAge = styled.p `
    color: #606060;

`;

const Cost = styled.h5 `
    font-weight: bold;

`;
const Date = styled.h6 `

`;
const Time = styled.p `


`;

const Description = styled.p `


`;

function Event(props) {

    const { title, type, age, cost, date, time, description, linkTo, buttonName } = props;

    return (
        <Row>
            <Card className="p-4">
                <Col sm={12}>
                    <Row>
                        <Col xs={7} className="ml-auto">
                            <EventsTitle>{title}</EventsTitle>
                            <EventsType style={{marginBottom: "0"}}>{type}</EventsType>
                            <EventsAge>{age}</EventsAge>
                        </Col>
                        <Col xs={5} className="ml-auto text-right">
                            <Cost>{cost}</Cost>
                            <Date>{date}</Date>
                            <Time>{time}</Time>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={7}>
                            <Description>{description}</Description>
                        </Col>
                    </Row>
                    <Row className="align-self-end">
                        <Col lg={3} md={3} sm={12} className="ml-auto">
                            <Link to={linkTo}>
                                <Button shadow style={{float: "right", width: "auto"}} text={buttonName}/>
                            </Link>
                        </Col>
                    </Row>
                    <div className="p-2"></div>
                </Col>
            </Card>
        </Row>
    )
}


export default Event;