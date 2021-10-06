import { useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import testimonialReducer from "../../redux/Testimonial/testimonial.reducer";
import testimonialTypes from "../../redux/Testimonial/testimonial.types";

import Quote from "../Atoms/Quote";
import Dots from "../Molecules/Dots";
import TestimonialButton from "../Atoms/TestimonialButton";

import PatternA from "../../assets/Pattern-A.svg";


const StyledTestimonialWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column;
    position: relative;

    @media (min-width: ${({theme}) => theme.viewport.md}) {
        flex-flow: row;
        height: 400px;
    }

    @media (min-width: ${({theme}) => theme.viewport.xl}) {
        height: 50vh;
    }
`;

const StyledBanner = styled.div`
    height: 100%;
    width: 100%;
    background-color: #170039;
    padding-bottom: 25%;

    h2 {
        color: white;
        padding: 10%;

        &::before {
            content: "";
            height: 150px;
            width: 150px;
            opacity: 0.2;
            position: absolute;
            left: 50px;
            top: 60px;
            background: url(${PatternA});
        }
    }

    @media (min-width: ${({theme}) => theme.viewport.md}) {
        padding-bottom: 0;
    }
`;

const StyledTestimonial = styled.div`
    display: flex;
    flex-flow: column;
    height: 100%;
    width: 100%;
    padding-bottom: 10%;

    @media (min-width: ${({theme}) => theme.viewport.md}) {
        padding-bottom: 0;
    }
`;

const StyledTestimonialContainer = styled.div`
    position: relative;
    height: 80%;
    display: flex;
    flex-flow: column;
`;



function Testimonial({quotes}) {
    const [{ slideIndex }, dispatch] = useReducer(testimonialReducer, { slideIndex: 1})

    useEffect(() => {
        const interval = setInterval(nextSlide, slideIndex * 2000);
        return () => clearInterval(interval);
      });
    
    const nextSlide = () => {
        dispatch({ type: testimonialTypes.NEXT_SLIDE });
        if (slideIndex === quotes.length) return dispatch({ type: testimonialTypes.RESET_SLIDE });
    };

    const prevSlide = () => {
        dispatch({ type: testimonialTypes.PREV_SLIDE });
        if (slideIndex === 1) return dispatch({ type: testimonialTypes.LAST_SLIDE, payload: quotes.length });
    };

    return (
        <StyledTestimonialWrapper>
            <StyledBanner>
                <h2>WHAT OUR CUSTOMERS THINK OF S9T!</h2>
            </StyledBanner>
            <StyledTestimonial>
                <StyledTestimonialContainer>
                    {quotes.map((quote, i) => {
                    return (
                        <Quote
                        key={quote.id}
                        customer={{
                            quote: quote.message,
                            name: quote.name,
                            rating: quote.rating
                        }}
                        active={slideIndex === i + 1}
                        />
                    );
                    })}
                </StyledTestimonialContainer>
                <TestimonialButton onNextClick={nextSlide} onPreviousClick={prevSlide} />
                <Dots
                    slideIndex={slideIndex}
                    moveDot={(index) => dispatch({ type: testimonialTypes.MOVE_DOTS, payload: index })}

                />
            </StyledTestimonial>
        </StyledTestimonialWrapper>
    )
}

Testimonial.propTypes = {
    quotes: PropTypes.object.isRequired
}
  
export default Testimonial;
