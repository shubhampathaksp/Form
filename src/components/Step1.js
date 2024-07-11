import React from 'react';

const Step1 = ({ formData, handleChange, errors }) => {
    const { name, email, phone } = formData;
    return (
        <div>
            <h2>Step1: Personal information</h2>
            <form>
                <div>
                    <label>Name:</label>
                    <input type='text' name='name' value={name} onChange={handleChange} />
                    {errors.name && <p className='error'>{errors.name}</p>}
                </div>
                <div>
                    <label>Email:</label>
                    <input type='email' name='email' value={email} onChange={handleChange} />
                    {errors.email && <p className='error'>{errors.email}</p>}
                </div>
                <div>
                    <label>Phone:</label>
                    <input type='tel' name='phone' value={phone} onChange={handleChange} />
                    {errors.phone && <p className='error'>{errors.phone}</p>}
                </div>
            </form>
        </div>
    )
}
export default Step1;