import PropTypes from "prop-types"
import styled from "styled-components"

const StyledQuote = styled.div`
    display: ${({active}) => active ? "block" : "none"};
`;

function Quote({quote, active}) {
    return (
        <StyledQuote active={active}>
          <p>{quote.message}</p>
          <h5>{quote.name}</h5>
          <h6>{quote.rating}</h6>  
        </StyledQuote>
    )
}

Quote.propTypes = {
    quote: PropTypes.shape({
        message: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        rating:  PropTypes.number.isRequired
    }),
    active: PropTypes.bool
}

export default Quote
