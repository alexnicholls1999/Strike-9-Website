import { Children, useState } from "react";

export default function useFormikStepper(children, onSubmit) {
    const [state, setState] = useState({
        step: 0,
        completed: false,
        show: false,
        termsandconditions: false
    });
    const childrenArray = Children.toArray(children);

    const {step, show} = state;

    const currentChild = childrenArray[step];

    const isLastStep = () => {
        return step === childrenArray.length - 1;
    }
    
    const handleShowTermsAndConditions = (e) => {
        setState({
            ...state,
            show: !show,
            termsandconditions: true
        })
    }
    
    
    const handleShowPrivacyPolicy = (e) => { 
            setState({
                ...state,
                show: !show,
                termsandconditions: false
            })
    }

    const handlePreviousStep = () => {
        setState({step: (s) => s - 1})
    }
    
    const handleSubmitForm = async(values, helpers) => {
        if (isLastStep()) {
            await onSubmit(values, helpers);
            setState({completed: true});
        } 
        
        setState({step: (s) => s + 1});
    }

    
    
    return {
        state,
        childrenArray,
        currentChild,
        isLastStep, 
        handlePreviousStep,
        handleShowTermsAndConditions,
        handleShowPrivacyPolicy,
        handleSubmitForm
    }
}
