import PropTypes from "prop-types";
import { Container, Row } from "react-bootstrap";
import styled from "styled-components";
import Goal from "../../Molecules/Text/Goal";

const StyledGoalsWrapper = styled.div`
    background-color: ${({theme}) => theme.colors.primary[500]};
    padding: 3rem;
`;

function Goals({goals}) {
    return (
        <StyledGoalsWrapper>
            <Container fluid>
                <Row>
                    {goals.map((goals, index) => <Goal key={index} goal={{title: goals.title, paragraph: goals.paragraph}}/>)}
                </Row>
            </Container>
        </StyledGoalsWrapper>
    )
}

Goals.propTypes = {
    goals: PropTypes.array.isRequired
}

export default Goals
