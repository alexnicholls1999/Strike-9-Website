import PropTypes from "prop-types";
import { Col, Container, Row } from "react-bootstrap";
import Section from '.././Molecules/Text/Section';

function Topic({topic}) {
    return (
        <Container fluid>
            <Row>
                <Col md={6}>
                    <img src={topic.img.src} alt={topic.img.alt} />
                </Col>
                <Col md={6}>
                    <Section content={{ title: topic.title, paragraph: topic.paragraph}} />
                </Col>
            </Row>
        </Container>
    )
}

Topic.propTypes = {
    topic: PropTypes.shape({
        img: PropTypes.shape({
            src: PropTypes.string.isRequired,
            alt: PropTypes.string.isRequired
        }),
        title: PropTypes.string.isRequired,
        paragraph: PropTypes.string
    })
}

export default Topic
