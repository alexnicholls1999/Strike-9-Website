import stepperTypes from "./stepper.types";

export const nextStepAction = () => ({
    type: stepperTypes.NEXT_STEP
});

export const prevStepAction = () => ({
    type: stepperTypes.PREVIOUS_STEP
});

export const firstStepAction = () => ({
    type: stepperTypes.FIRST_STEP
});