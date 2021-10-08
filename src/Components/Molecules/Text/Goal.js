import PropTypes from "prop-types"
import styled from "styled-components"
import { Col } from "react-bootstrap";

const StyledGoal = styled.section`
    width: 75%;
    color: ${({theme}) => theme.colors.neutral[100]};
    margin-inline: auto;
    padding: 2rem 0;
`;

function Goal({goal}) {
    return (
        <Col md={3} sm={6}>
            <StyledGoal className="text-center">
                <h4>{goal.title}</h4>
                <p>{goal.paragraph}</p>
            </StyledGoal>
        </Col>
    )
}

Goal.propTypes = {
    goal: PropTypes.shape({
        title: PropTypes.string.isRequired,
        paragraph: PropTypes.string.isRequired,
    })
}

export default Goal;
