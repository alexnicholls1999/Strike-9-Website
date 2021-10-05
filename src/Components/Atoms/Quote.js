import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";
import PatternB from "./../../assets/Slider/pattern-quotes.svg";

const fadeIn = keyframes`
    from {
        opacity: 0;
    } 

    to {
        opacity: 1;
    }
`;

const fadeOut = keyframes`
    from {
        opacity: 0;
    } 

    to {
        opacity: 1;
    }
`;

const StyledQuote = styled.div`
    display: ${({active}) => (active ? "block" : "none")};
    animation: ${(active) => (active ? fadeOut : fadeIn)} 1s ease-in-out;
    height: 100%;
    padding: 0 10%;
`;

const StyledQuoteInfo = styled.div`
    padding-top: 1rem;
    text-align: center;

    &::before {
        content: "";
        position: absolute;
        left: 25px;
        top: 10px;
        height: 75px;
        width: 75px;
        background: no-repeat center contain url(${PatternB});
        z-index: -1;
    }

    @media(min-width: ${({theme}) => theme.viewport.sm}) {
        text-align: left;
    }
`;


function Quote({customer, active}) {
    return (
        <StyledQuote active={active}>
            <StyledQuoteInfo>
                <p>{customer.quote}</p>
                <h5>{customer.name}</h5>
                <h6>{customer.rating}</h6>
            </StyledQuoteInfo>
        </StyledQuote>
    )
}

Quote.defaultProps = {
    quote: "Quote",
    name: "Name",
    rating: 0
}

Quote.propTypes = {
    customer: PropTypes.shape({
        quote: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired
    })
}

export default Quote
