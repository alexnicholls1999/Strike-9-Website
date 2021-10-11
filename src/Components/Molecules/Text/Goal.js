import PropTypes from "prop-types"
import styled from "styled-components"
import { Col } from "react-bootstrap";

const StyledGoal = styled.section`
    color: ${({theme}) => theme.colors.neutral[100]};
    margin-inline: auto;
    padding: 1.75rem;

    h4 {
        padding-bottom: .75rem;
    }

    @media(min-width: ${({theme}) => theme.viewport.md}) {
        p {
            width: 70%;
            margin: 0 auto;
        }
    }
`;

function Goal({goal}) {
    return (
        <Col md={3} sm={6}>
            <StyledGoal className="text-center">
                <h4>{goal.title}</h4>
                <p>We will {goal.paragraph}</p>
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
