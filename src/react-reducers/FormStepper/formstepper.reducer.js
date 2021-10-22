import formStepperTypes from "./formstepper.types";

export const stepReducer = (state, action) => {
    switch (action.type) {
        case formStepperTypes.NEXT_STEP: 
            return { step: state.step + 1};
        case formStepperTypes.PREVIOUS_STEP: 
            return { step: state.step - 1};
        default: 
            return state;
    }
}