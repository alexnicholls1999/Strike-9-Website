import testimonialTypes from "./testimonial.types";

export default function useTestimonialReducer(state, action) {
    switch (action.type) {
        case "moveDots":
            return { slideIndex: action.payload};
        case "nextSlide": 
            return { slideIndex: state.slideIndex + 1};
        case "prevSlide": 
            return { slideIndex: state.slideIndex - 1};
        case "lastSlide": 
            return { slideIndex: action.payload };
        case "resetSlide": 
            return { slideIndex: 1};
        default:
            break;
    }
}