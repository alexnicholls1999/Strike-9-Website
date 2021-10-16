import PropTypes from "prop-types";
import { useEffect, useReducer } from "react";
import styled from "styled-components";
import { lastSlideAction, moveDotsAction, nextSlideAction, prevSlideAction, resetSlideAction } from "../../redux/Testimonial/testimonial.actions";
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
    padding: 2rem 1rem;

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

    @media(min-width: ${({theme}) => theme.viewport.xl}) {
        padding: 6.25vw 4.6875vw;

        h2 {
            &::before {
                top: 5vw;
                left: 4vw;
            }
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

    @media(min-width: ${({theme}) => theme.viewport.xl}) {
        padding: 6.25vw 4.6875vw;

        &::before {
            top: 5vw;
            left: 4vw;
        }
    }
`;

function Testimonial({title, quotes}) {

    const [{slideIndex}, dispatch] = useReducer(useTestimonialReducer, {slideIndex: 1});

    useEffect(() => {
        const interval = setInterval(nextSlide, slideIndex * 2000);
        return () => clearInterval(interval);
    });

    const nextSlide = () => {
        dispatch(nextSlideAction());
        if (slideIndex === quotes.length) return dispatch(resetSlideAction());
    }

    const prevSlide = () => {
        dispatch(prevSlideAction());
        if (slideIndex === 1) return dispatch(lastSlideAction(quotes.length));
    }

    return (
        <StyledTestimonialWrapper>
            <StyledBanner>
                <h2>{title}</h2>  
                <TestimonialButton onClick={{ onHandleClickNext: nextSlide, onHandleClickPrevious: prevSlide }}/> 
            </StyledBanner>
            <StyledTestimonial>
                {quotes.map(({id, paragraph, name, rating}, i) => <Quote key={id} quote={{message: paragraph, name: name, rating: rating}} active={slideIndex === i + 1}/>)}
                <Dots slideIndex={slideIndex} moveDot={(index) => dispatch(moveDotsAction(index))} /> 
            </StyledTestimonial>
        </StyledTestimonialWrapper>
    )
}

Testimonial.propTypes = {
    title: PropTypes.string.isRequired,
    quotes: PropTypes.object.isRequired
}

export default Testimonial
