
import './App.css';
import Video1 from './components/Video1.js';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import NavigationButtons from './components/NavigationButtons';
import React, { useState, useEffect } from 'react';

function App() {

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zip: '',
  });
  const [formErrors, setFormErrors] = useState({});
  // validation functions
  const validateStep1 = () => {
    let errors = {};
    if (!formData.name) {
      errors.name = 'Name is required';
    } if (!formData.email) {
       errors.name = 'Email is required';
    }else if(!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.phone) {
      errors.phone = 'Phone is required';
    }
    return errors;
  };
  const validateStep2 = () => {
    let errors = {};
    if (!formData.addressLine1) {
      errors.addressLine1 = 'Address Line 1 is required';
    } if (!formData.city) {
      errors.city = 'City is required';
    } if (!formData.State) {
      errors.State = 'State is required';
    } if (!formData.zip) {
      errors.zip = 'zip is required';
    }
    return errors;
  };
  const handleNext = () => {
    const errors = currentStep === 1 ? validateStep1() : validateStep2();
    if (Object.keys(errors).length === 0) {
      setCurrentStep(currentStep + 1);
      setFormErrors({});
    } else {
      setFormErrors(errors);
    }
  };
  const handleBack = () => {
    setCurrentStep(currentStep - 1);
    setFormErrors({});
  };
  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  useEffect(() => {
    const savedFormData = JSON.parse(localStorage.getItem('formData'));
    if (savedFormData) {
      setFormData(savedFormData);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);


  return (
    <>
     <Video1/>
    <div className='App'>
      <h1>Multi-Step Form</h1>
      {currentStep === 1 && (
        <Step1 formData={formData} handleChange={handleChange} errors={formErrors} />
      )}
      {currentStep === 2 && (
        <Step2 formData={formData} handleChange={handleChange} errors={formErrors} />
      )}
      {currentStep === 3 && <Step3 formData={formData} />}
      <NavigationButtons currentStep={currentStep} totalSteps={3} handleNext={handleNext} handleBack={handleBack} handleSubmit={handleSubmit} isLastStep={currentStep === 3} />
    </div>
    </>
  );
};

export default App;
