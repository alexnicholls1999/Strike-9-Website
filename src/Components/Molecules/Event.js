import PropTypes from "prop-types";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import Button from "../Atoms/Buttons/Button";
import Card from "../Atoms/Card";

const EventWrapper = styled.div`
    margin: 1rem;

    @media (min-width: 764px){
        margin: 2rem;
    }
`;

const EventCardWrapper = styled.div`
    padding: 2rem 2rem;

    @media (min-width: 764px){
        padding: 2.5rem 2rem;
    }
`;

const EventsTitle = styled.h4`
    font-weight: ${({theme}) => theme.typography.fontWeight.bold};
    color: ${({theme}) => theme.colors.primary.RoyalPurple};
    font-size: clamp(15px, 2.5vw, 20px);
`;

const EventsType = styled.p`
    margin-bottom: 0;
    font-weight: ${({theme}) => theme.typography.fontWeight.bold};
    color: #606060;
    font-size: clamp(10px, 2.5vw, 18px);
`;

const EventsAge = styled.p`
    color: #606060;
    font-size: clamp(8px, 2vw, 15px);
`;

const Cost = styled.h5`
    font-weight: ${({theme}) => theme.typography.fontWeight.bold};
    color: ${({theme}) => theme.colors.neutral.Black};
    font-size: clamp(15px, 2.5vw, 20px); 
`;

const Date = styled.h6`
    margin-bottom: 0;
    font-weight: ${({theme}) => theme.typography.fontWeight.bold};
    font-size: clamp(10px, 2.5vw, 18px);   
`;

const Time = styled.p`
    color: ${({theme}) => theme.colors.neutral.Black};
    font-size: clamp(10px, 2.5vw, 15px);
`;

const Description = styled.p`
    color: ${({theme}) => theme.colors.neutral.Black};
    font-size: clamp(10px, 2.5vw, 18px);
`;

function Event({event}) {

    const history = useHistory();

    const handleClick = () => {
        history.push(event.linkTo)
    }

    return (
        <Row className="justify-content-center">
            <EventWrapper>
                <Card>
                    <EventCardWrapper>
                        <Col sm={12}>
                            <Row>
                                <Col xs={8} className="ms-auto">
                                    <EventsTitle>{event.title}</EventsTitle>
                                </Col>
                                <Col xs={4} className="text-end">
                                    <Cost>{event.cost}</Cost>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={5}>
                                    <EventsType>{event.type}</EventsType>
                                    <EventsAge>{event.age}</EventsAge>
                                </Col>
                                <Col xs={7} className="text-end">
                                    <Date>{event.date}</Date>
                                    <Time>{event.time}</Time>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={7}>
                                    <Description>{event.description}</Description>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={2} md={3} sm={5} xs={6} className="ms-auto">
                                    <Button onClick={handleClick} text="BOOK" />
                                </Col>
                            </Row>
                        </Col>
                    </EventCardWrapper>
                </Card>
            </EventWrapper>
        </Row>
    )
}

Event.defaultProps = {
    event: {
        title: 'Event Title',
        type: 'Type',
        age: 'Age',
        cost: 'Cost',
        date: 'DD-MM',
        time: '00:00 - 00:00',
        description: 'Description',
        linkTo: 'linkTo'
    }
}

Event.propTypes = {
    event: PropTypes.shape({
        title: PropTypes.string,
        type: PropTypes.string,
        age: PropTypes.string,
        cost: PropTypes.string,
        date: PropTypes.string,
        time: PropTypes.string,
        description: PropTypes.string,
        linkTo: PropTypes.string
    })
}

export default Event
