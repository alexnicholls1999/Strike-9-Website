import PropTypes from "prop-types"
import styled from "styled-components"

const StyledLabel = styled.label`

`;

function Label({name}) {
    return <StyledLabel>{name}</StyledLabel>
}

Label.propTypes = {
    name: PropTypes.string.isRequired,
}

export default Label
