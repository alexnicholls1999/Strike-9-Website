import PropTypes from "prop-types"
import styled from "styled-components";

const StyledContainer = styled.div`
    margin-inline: auto;
    width: 95%;
`;

function Container({children}) {
    return <StyledContainer>{children}</StyledContainer>
}

Container.propTypes = {
    children: PropTypes.node.isRequired
}

export default Container
