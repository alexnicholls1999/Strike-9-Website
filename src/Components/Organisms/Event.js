import PropTypes from "prop-types";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router";
import styled, {css} from "styled-components";
import Card from "./../Atoms/Card";
import Button from "./../Atoms/Form/Button";

const EventWrapper = styled.div`
    margin: 1rem;
    @media (min-width: ${({theme}) => theme.viewport.md}){
        margin: 2rem;
    }
`;

const EventCardWrapper = styled.div`
    padding: 2rem 2rem;

    @media (min-width: ${({theme}) => theme.viewport.md}){
        padding: 2.5rem 2rem 5rem;
    }

    ${({unavailableEvent}) => unavailableEvent && css`
        opacity: 0.5;
        

        ${Cost} {
            color: ${({theme}) => theme.colors.feedback.err};
        }
    `}

`;

const EventsTitle = styled.h4`
    font-weight: ${({theme}) => theme.typography.fontWeight.bold};
    color: ${({theme}) => theme.colors.primary[600]};
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
    color: ${({theme}) => theme.colors.neutral[900]};
    font-size: clamp(15px, 2.5vw, 20px); 
`;

const Date = styled.h6`
    margin-bottom: 0;
    font-weight: ${({theme}) => theme.typography.fontWeight.bold};
    font-size: clamp(10px, 2.5vw, 18px);   
`;

const Time = styled.p`
    font-size: clamp(10px, 2.5vw, 15px);
`;

const Description = styled.p`
    font-size: clamp(10px, 2.5vw, 18px);
`;

function Event({event, unavailableEvent}) {

    const navigate = useNavigate();

    return (
        <Row className="justify-content-center">
            <EventWrapper>
                <Card>
                    <EventCardWrapper unavailableEvent={unavailableEvent}>
                        <Col sm={12}>
                            <Row>
                                <Col xs={8} className="ms-auto">
                                    <EventsTitle>{event.title}</EventsTitle>
                                </Col>
                                <Col xs={4} className="text-end">
                                    <Cost>{unavailableEvent ? "Fully Booked!" : event.cost}</Cost>
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
                                <Col lg={2} md={3} sm={5} xs={6} className="ms-auto" style={{textAlign: "right"}}>
                                    <Button disabled={unavailableEvent} form onClick={() => navigate(event.linkTo) } text="BOOK"/>
                                </Col>
                            </Row>
                        </Col>
                    </EventCardWrapper>
                </Card>
            </EventWrapper>
        </Row>
    )
}

Event.propTypes = {
    event: PropTypes.shape({
        title: PropTypes.string,
        cost: PropTypes.string,
        type: PropTypes.string,
        age: PropTypes.string,
        date: PropTypes.string,
        time: PropTypes.string,
        description: PropTypes.string,
        linkTo: PropTypes.string
    }),
    unavailableEvent: PropTypes.bool
}

export default Event
