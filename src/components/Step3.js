import React from 'react';

const Step3 = ({ formData }) => {
  const { name, email, phone, addressLine1, addressLine2, city, state, zip } = formData;

  return (
    <div>
      <h2>Step 3: Confirmation</h2>
      <div>
        <h3>Personal Information:</h3>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone:</strong> {phone}</p>
      </div>
      <div>
        <h3>Address Information:</h3>
        <p><strong>Address Line 1:</strong> {addressLine1}</p>
        <p><strong>Address Line 2:</strong> {addressLine2}</p>
        <p><strong>City:</strong> {city}</p>
        <p><strong>State:</strong> {state}</p>
        <p><strong>ZIP Code:</strong> {zip}</p>
      </div>
    </div>
  );
};

export default Step3;
