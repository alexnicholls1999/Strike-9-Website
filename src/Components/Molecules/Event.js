import React from 'react';
import {Row, Col, Container} from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import styled from "styled-components";
import Button from "./../Atoms/Button";
import Card from "./../Atoms/Card";

const EventWrapper = styled.div`
    margin: 1rem;

    @media (min-width: 764px) {
        margin: 2rem;
    }
`;

const EventCardWrapper = styled.div`
    padding: 2.5rem 10px;

    @media (min-width: 764px) {
        padding: 2.5rem 2rem;
    }
`;

const EventsTitle = styled.h4 `
    font-weight: 700;
    color: #5E3DB3;
    font-size: clamp(15px, 2.5vw, 20px);
`;

const EventsType = styled.p`
    margin-bottom: 0;
    font-weight: 700;
    color: #606060;
    font-size: clamp(10px, 2.5vw, 18px);
`;

const EventsAge = styled.p`
    color: #606060;
    font-size: clamp(8px, 2vw, 15px);
`;

const Cost = styled.h5`
    font-weight: bold;
    color: black;
    font-size: clamp(15px, 2.5vw, 20px);
`;

const Date = styled.h6`
    font-size: clamp(10px, 2.5vw, 18px);
    margin-bottom: 0;
    font-weight: 700;
`;

const Time = styled.p`
    color: black;
    font-size: clamp(10px, 2.5vw, 15px);
`;

const Description = styled.p `
    color: black;
    font-size: clamp(10px, 2.5vw, 18px);
`;

function Event({title, type, age, cost, date, time, description, linkTo, buttonName}) {

    const history = useHistory();

    const handleClick = () => {
        history.push(linkTo);
    }

    return (
        <Row className="justify-content-center">
            <EventWrapper>
                <Card>
                    <EventCardWrapper>
                        <Col sm={12}>
                            <Row>
                                <Col xs={8} className="ml-auto">
                                    <EventsTitle>{title}</EventsTitle>
                                </Col>
                                <Col xs={4} className="text-right">
                                    <Cost>{cost}</Cost>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={5}>
                                    <EventsType style={{marginBottom: "0"}}>{type}</EventsType>
                                    <EventsAge>{age}</EventsAge>
                                </Col>
                                <Col xs={7} className="text-right">
                                    <Date>{date}</Date>
                                    <Time>{time}</Time>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={7}>
                                    <Description>{description}</Description>
                                </Col>
                            </Row>  
                            <Row>
                                <Col lg={2} md={3} sm={5} xs={6} className="ml-auto">
                                    <Button onClick={handleClick} shadow text={buttonName}/>
                                </Col>
                            </Row> 
                        </Col>
                        
                    </EventCardWrapper> 
                </Card>
            </EventWrapper>
        </Row>
    )
}

export default Event
