import PropTypes from "prop-types"
import styled from "styled-components"
import Rating from "./Rating";

const StyledQuote = styled.div`
    display: ${({active}) => active ? "block" : "none"};

    @media(min-width: ${({theme}) => theme.viewport.lg}) {        
        p {
            line-height: 1.8;
            width: 80%;
        }
    }
`;

function Quote({quote, active}) {
    return (
        <StyledQuote active={active}>
          <p>{quote.message}</p>
          <div className="p-2"></div> 
          <Rating rating={4}/>
          <div className="p-1"></div> 
          <h5>{quote.name}</h5>
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
