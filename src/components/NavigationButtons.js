import React from "react";

const NavigationButtons = ({ currentStep, totalSteps, handleNext, handleBack, handleSubmit, isLastStep }) => {
    const isFirstStep = currentStep === 1;

    const handleNextClick = () => {
        if (isLastStep) {
            handleSubmit();
        } else {
            handleNext();
        }
    }
    return (
        <div>
            {!isFirstStep && <button onClick={handleBack}>Back</button>}
            <button onClick={handleNextClick}>{!isLastStep ? 'Submit' : 'Next'}</button>
        </div>
    )
}
export default NavigationButtons;
