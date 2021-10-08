import PropTypes from "prop-types";
import { Container, Row } from "react-bootstrap";
import styled from "styled-components";
import Goal from "../../Molecules/Text/Goal";


const StyledGoals = styled.div`
    padding: 3rem 0;
    background-color: ${({theme}) => theme.colors.primary[500]}
`

function Goals({goals}) {
    return (
        <StyledGoals>
            <Container fluid>
                <Row>
                    {goals.map(({title, paragraph}) => {
                        return <Goal goal={{title: title, paragraph: paragraph}} />
                    })}
                </Row>
            </Container>
        </StyledGoals>
    )
}

Goals.propTypes = {
    goals: PropTypes.array.isRequired
}

export default Goals
