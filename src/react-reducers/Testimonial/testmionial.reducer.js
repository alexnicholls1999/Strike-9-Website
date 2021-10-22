import testimonialTypes from "./testimonial.types";

export default function useTestimonialReducer(state, action) {
    switch (action.type) {
        case testimonialTypes.MOVE_DOTS:
            return { slideIndex: action.payload};
        case testimonialTypes.NEXT_SLIDE: 
            return { slideIndex: state.slideIndex + 1};
        case testimonialTypes.PREVIOUS_SLIDE: 
            return { slideIndex: state.slideIndex - 1};
        case testimonialTypes.LAST_SLIDE: 
            return { slideIndex: action.payload };
        case testimonialTypes.RESET_SLIDE: 
            return { slideIndex: 1};
        default:
            break;
    }
}