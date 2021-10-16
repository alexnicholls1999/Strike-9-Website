import testimonialTypes from "./testimonial.types";

export const moveDotsAction = (dotsIndex) => ({
    type: testimonialTypes.MOVE_DOTS,
    payload: dotsIndex
});

export const lastSlideAction = (quotes) => ({
    type: testimonialTypes.LAST_SLIDE,
    payload: quotes
})

export const nextSlideAction = () => ({
    type: testimonialTypes.NEXT_SLIDE
});

export const prevSlideAction = () => ({
    type: testimonialTypes.PREVIOUS_SLIDE
});

export const resetSlideAction = () => ({
    type: testimonialTypes.RESET_SLIDE
})