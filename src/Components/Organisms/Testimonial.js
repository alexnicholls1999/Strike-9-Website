import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import Quote from "../Molecules/Quote";

const StyledTestimonialWrapper = styled.div`

`;

const StyledBanner = styled.div`

`;

const StyledTestimonial = styled.div`

`;

function Testimonial({title, quotes}) {
    return (
        <Container fluid>
            <Row>
                <Col md={6}>
                    <StyledBanner>
                        <h2>{title}</h2>
                    </StyledBanner>
                </Col>
                <Col md={6}>
                    {quotes.map(({id, paragraph, name, rating}) => {
                        return <Quote key={id} quote={{message: paragraph, name: name, rating: rating}} />
                    })}
                </Col>
            </Row>
        </Container>
    )
}

Testimonial.propTypes = {
    title: PropTypes.string.isRequired,
    quotes: PropTypes.object.isRequired
}

export default Testimonial
