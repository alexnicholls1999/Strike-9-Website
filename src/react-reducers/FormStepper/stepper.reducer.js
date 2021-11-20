import stepperTypes from "./stepper.types";

export default function stepReducer(state, action) {
    switch (action.type) {
        case stepperTypes.NEXT_STEP:
          return state + 1;
        case stepperTypes.PREVIOUS_STEP:
          return state - 1;
        default:
          return state;
    }
}