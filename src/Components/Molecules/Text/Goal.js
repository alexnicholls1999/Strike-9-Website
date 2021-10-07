import PropTypes from "prop-types"
import styled from "styled-components"

function Goal({goal}) {
    return (
        <>
            <h4>{goal.title}</h4>
            <p>{goal.paragraph}</p>
        </>
    )
}

Goal.propTypes = {
    goal: PropTypes.shape({
        title: PropTypes.string.isRequired,
        paragraph: PropTypes.string.isRequired,
    })
}

export default Goal;
