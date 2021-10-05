import testimonialTypes from "./testimonial.types";

const initState = {
    slideIndex: 1
}

const testimonialReducer = (state, action) => {
    switch (action.type) {
        case testimonialTypes.MOVE_DOTS:
            return { 
                ...state,
                slideIndex: action.payload
            }    
        case testimonialTypes.NEXT_SLIDE: 
            return {
                ...state,
                slideIndex: state.slideIndex + 1
            }
        case testimonialTypes.PREV_SLIDE: 
            return {
                ...state,
                slideIndex: state.slideIndex - 1
            }
        case testimonialTypes.LAST_SLIDE: 
            return {
                ...state,
                slideIndex: action.payload
            }
        case testimonialTypes.RESET_SLIDE: 
            return {
                ...state,
                ...initState
            }
        default:
           return state;
    }
}   

export default testimonialReducer;