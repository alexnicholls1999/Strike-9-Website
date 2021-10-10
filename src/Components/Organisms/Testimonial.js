import PropTypes from "prop-types";
import styled from "styled-components";
import Quote from "../Molecules/Quote";

import PatternA from './../../assets/PatternA.svg';
import QuotePattern from './../../assets/Testimonial/Quote.svg';

const StyledTestimonialWrapper = styled.div`
    display: flex;
    flex-flow: column;

    @media(min-width: ${({theme}) => theme.viewport.lg}){
        flex-flow: row;
    }

`;

const StyledBanner = styled.div`
    position: relative;
    background: ${({theme}) => theme.colors.neutral[800]};
    width: 100%;
    padding: 2rem;

    h2 {
        color: ${({theme}) => theme.colors.neutral[100]};
        padding: 3.5rem 1rem;

        &::before {
            content: '';
            position: absolute;
            top: 3rem;
            left: 2rem;
            opacity: 0.3;
            background: url(${PatternA});
            height: 150px;
            width: 150px;
        }
    }

    @media(min-width: ${({theme}) => theme.viewport.md}) {

        h2 {
            width: 60%;
        }
    }
`;

const StyledTestimonial = styled.div`
    width: 100%;
    padding: 1rem;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        height: 5rem;
        width: 5rem;
        top: 1rem;
        left: 1rem;
        background: url(${QuotePattern});
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat; 
        z-index: -1;
    }

    @media(min-width: ${({theme}) => theme.viewport.md}) {
        padding: 2rem;
    }
`;

function Testimonial({title, quotes}) {
    return (
        <StyledTestimonialWrapper>
            <StyledBanner>
                <h2>{title}</h2>   
            </StyledBanner>
            <StyledTestimonial>
                {quotes.map(({id, paragraph, name, rating, active}) => <Quote key={id} quote={{message: paragraph, name: name, rating: rating}} active={active}/>)}
            </StyledTestimonial>
        </StyledTestimonialWrapper>
    )
}

Testimonial.propTypes = {
    title: PropTypes.string.isRequired,
    quotes: PropTypes.object.isRequired
}

export default Testimonial
