import PropTypes from "prop-types";
import styled from "styled-components";

const StyledCard = styled.div`
    border-radius: 0;
    border: none;
    box-shadow: 0 5px 29px 0 hsla(240, 18%, 77%, 0.52);
`;

function Card({children, ...props}) {
    return <StyledCard {...props}>{children}</StyledCard>
}

Card.propTypes = {
    children: PropTypes.element.isRequired
}

export default Card
