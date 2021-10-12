import PropTypes from "prop-types";
import { useEffect, useReducer } from "react";
import styled from "styled-components";
import testimonialTypes from "../../redux/Testimonial/testimonial.types";
import useTestimonialReducer from "../../redux/Testimonial/testmionial.reducer";
import TestimonialButton from "../Atoms/TestimonialButton";
import Dots from "../Molecules/Dots";
import Quote from "../Molecules/Quote";

import PatternA from './../../assets/PatternA.svg';
import QuotePattern from './../../assets/Testimonial/Quote.svg';

const StyledTestimonialWrapper = styled.div`
    position: relative;
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
        padding: 3.5rem .75rem;

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
            width: 90%;
            padding: 3.5rem 2rem;
        }
    }
`;

const StyledTestimonial = styled.div`
    width: 100%;
    padding: 3rem 1rem;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        height: 5rem;
        width: 5rem;
        top: 1rem;
        left: 1.75rem;
        background: url(${QuotePattern});
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat; 
        z-index: -1;
    }

    @media(min-width: ${({theme}) => theme.viewport.md}) {
        padding: 3rem;
    }
`;

function Testimonial({title, quotes}) {

    const [{slideIndex}, dispatch] = useReducer(useTestimonialReducer, {slideIndex: 1});

    useEffect(() => {
        const interval = setInterval(nextSlide, slideIndex * 2000);
        return () => clearInterval(interval);
    });

    const nextSlide = () => {
        dispatch({ type: "nextSlide" });
        if (slideIndex === quotes.length) return dispatch({type: "resetSlide"});
    }

    const prevSlide = () => {
        dispatch({ type: "prevSlide"});
        if (slideIndex === 1) return dispatch({type: "lastSlide", payload: quotes.length});
    }

    return (
        <StyledTestimonialWrapper>
            <StyledBanner>
                <h2>{title}</h2>   
            </StyledBanner>
            <TestimonialButton />
            <StyledTestimonial>
                {quotes.map(({id, paragraph, name, rating}, i) => <Quote key={id} quote={{message: paragraph, name: name, rating: rating}} active={slideIndex === i + 1}/>)}
                <Dots slideIndex={slideIndex} moveDot={(index) => dispatch({type: "moveDots", payload: index})} /> 
            </StyledTestimonial>
        </StyledTestimonialWrapper>
    )
}

Testimonial.propTypes = {
    title: PropTypes.string.isRequired,
    quotes: PropTypes.object.isRequired
}

export default Testimonial
