import PropTypes from "prop-types";
import styled from "styled-components";
import Container from "./../../../Grid/Container";
import Goal from "../../Molecules/Text/Goal";


const StyledGoals = styled.div`
    display: flex;
    flex-flow: column;
    background: ${({theme}) => theme.colors.primary[500]};
    padding: 2.75rem;

    @media(min-width: ${({theme}) => theme.viewport.md}) {
        flex-flow: row;
    }
`

function Goals({goals}) {
    return (
        <StyledGoals>
            {goals.map(({title, paragraph}) => {
                return <Goal goal={{title: title, paragraph: paragraph}} />
            })}
        </StyledGoals>
    )
}

Goals.propTypes = {
    goals: PropTypes.array.isRequired
}

export default Goals
