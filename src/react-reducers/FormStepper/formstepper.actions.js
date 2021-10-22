import formStepperTypes from "./formstepper.types";

export const nextStep = () => ({
    type: formStepperTypes.NEXT_STEP
});

export const previousStep = () => ({
    type: formStepperTypes.PREVIOUS_STEP
});


