import testimonialReducer from "./Testimonial/testimonial.reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    testimonial: testimonialReducer
})

export default rootReducer;