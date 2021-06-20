import React from 'react'
import { Row } from 'react-bootstrap'

function UnavailableEvent({title, type, age, date, time, description, linkTo, buttonName}) {
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

export default UnavailableEvent
