import PropTypes from "prop-types"
import styled from "styled-components"

const StyledGoal = styled.section`
    color: ${({theme}) => theme.colors.neutral[100]};
    text-align: center;
`;

function Goal({goal}) {
    return (
        <StyledGoal>
            <h4>{goal.title}</h4>
            <p>{goal.paragraph}</p>
        </StyledGoal>
    )
}

Goal.propTypes = {
    goal: PropTypes.shape({
        title: PropTypes.string.isRequired,
        paragraph: PropTypes.string.isRequired,
    })
}

export default Goal;
