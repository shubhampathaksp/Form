import React from 'react';

const Step2 = ({ formData, handleChange, errors }) => {
    const { addressLine1, addressLine2, city, state, zip } = formData;

    return (
        <div>
            <h2>Step 2: Address Information</h2>
            <form>
                <div>
                    <label>Address Line 1:</label>
                    <input
                        type="text"
                        name="addressLine1"
                        value={addressLine1}
                        onChange={handleChange}
                    />
                    {errors.addressLine1 && <p className="error">{errors.addressLine1}</p>}
                </div>
                <div>
                    <label>Address Line 2:</label>
                    <input
                        type="text"
                        name="addressLine2"
                        value={addressLine2}
                        onChange={handleChange}
                    />
                    {/* Optional field, no validation */}
                </div>
                <div>
                    <label>City:</label>
                    <input
                        type="text"
                        name="city"
                        value={city}
                        onChange={handleChange}
                    />
                    {errors.city && <p className="error">{errors.city}</p>}
                </div>
                <div>
                    <label>State:</label>
                    <input
                        type="text"
                        name="state"
                        value={state}
                        onChange={handleChange}
                    />
                    {errors.state && <p className="error">{errors.state}</p>}
                </div>
                <div>
                    <label>ZIP Code:</label>
                    <input
                        type="text"
                        name="zip"
                        value={zip}
                        onChange={handleChange}
                    />
                    {errors.zip && <p className="error">{errors.zip}</p>}
                </div>
            </form>
        </div>
    );
};

export default Step2;
