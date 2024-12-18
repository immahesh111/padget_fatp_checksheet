//////////////////////// Printer Machine //////////////////////////////////
import axios from 'axios';
import React, { useState } from 'react';
import { useAuth } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';

const Add2 = () => {
    const { user } = useAuth();

    const [leave, setLeave] = useState({
        userId: user._id,
        date: new Date().toISOString().split('T')[0],
        shift: '',
        rawMaterialStorage: {
            question1: '',
            question2: '',
            question3: '',
            question4: '',
        },
    });

    const [showRawMaterialStorage, setShowRawMaterialStorage] = useState(false); // State to toggle Raw Material Storage questions
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;

        console.log(`Input Name: ${name}, Input Value: ${value}`);  // Debugging log

        if (name.includes('.')) {
            const [subdivision, key, subKey] = name.split('.');

            if (subKey) {
                setLeave((prevState) => ({
                    ...prevState,
                    [subdivision]: {
                        ...prevState[subdivision],
                        [key]: {
                            ...prevState[subdivision][key],
                            [subKey]: value  // Update nested field directly.
                        }
                    }
                }));
            } else {
                setLeave((prevState) => ({
                    ...prevState,
                    [subdivision]: {
                        ...prevState[subdivision],
                        [key]: value  // Update non-nested field.
                    }
                }));
            }
        } else {
            setLeave((prevState) => ({
                ...prevState,
                [name]: value  // Update top-level field.
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Submitting leave data:", leave); // Log leave data before submission

        try {
            const response = await axios.post(`https://fatp-api.onrender.com/api/leave1/add`, leave, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });

            if (response.data.success) {
                navigate(`/employee-dashboard/leaves1/${user._id}`);
            }
        } catch (error) {
            if (error.response && !error.response.data.success) {
                alert(error.response.data.error);
            }
        }
    };

    return (
        <div className='max-w-4xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md'>
            <h2 className='text-2xl font-bold mb-6'>Printer Machine</h2>

            <form onSubmit={handleSubmit}>
                <div className='flex flex-col space-y-4'>
                    {/* Common Date Field */}
                    <div>
                        <label className='block text-sm font-medium text-gray-700'>
                            Date:
                        </label>
                        <input
                            type='date'
                            name='date'
                            value={leave.date}
                            onChange={handleChange}
                            className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
                            required
                        />
                    </div>

                    {/* Common Shift Selection */}
                    <div>
                        <label className='block text-sm font-medium text-gray-700'>
                            Shift:
                        </label>
                        <select
                            name='shift'
                            onChange={handleChange}
                            className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
                            required
                        >
                            <option value="">Select Shift</option>
                            <option value="Day">Day</option>
                            <option value="Night">Night</option>
                        </select>
                    </div>

                    {/* Raw Material Storage Subdivision */}
                    <h3 className='text-lg font-bold cursor-pointer mt-4 p-2 border border-teal-500 bg-teal-100 rounded' onClick={() => setShowRawMaterialStorage(!showRawMaterialStorage)}>
                        Printer Machine
                    </h3>

                    {showRawMaterialStorage && (
                        <>
                            {/* Question 1 */}
                            <div>
                                <label className='block text-sm font-medium text-gray-700'>
                                    1. Clean the Outer body of machine?
                                </label>
                                <div className="mt-2">
                                    <label className="inline-flex items-center mr-4">
                                        <input
                                            type="radio"
                                            name="rawMaterialStorage.question1"
                                            value="Yes"
                                            onChange={handleChange}
                                            className="form-radio h-4 w-4 text-blue-600"
                                            required
                                        />
                                        <span className="ml-2 text-gray-700">Yes</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            name="rawMaterialStorage.question1"
                                            value="No"
                                            onChange={handleChange}
                                            className="form-radio h-4 w-4 text-blue-600"
                                            required
                                        />
                                        <span className="ml-2 text-gray-700">No</span>
                                    </label>
                                </div>
                            </div>

                            {/* Question 2 */}
                            <div>
                                <label className='block text-sm font-medium text-gray-700'>
                                    2. Check the Emergency switch. should be tight properly?
                                </label>
                                <div className="mt-2">
                                    <label className="inline-flex items-center mr-4">
                                        <input
                                            type="radio"
                                            name="rawMaterialStorage.question2"
                                            value="Yes"
                                            onChange={handleChange}
                                            className="form-radio h-4 w-4 text-blue-600"
                                            required
                                        />
                                        <span className="ml-2 text-gray-700">Yes</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            name="rawMaterialStorage.question2"
                                            value="No"
                                            onChange={handleChange}
                                            className="form-radio h-4 w-4 text-blue-600"
                                            required
                                        />
                                        <span className="ml-2 text-gray-700">No</span>
                                    </label>
                                </div>
                            </div>

                            {/* Question 3 */}
                            <div>
                                <label className='block text-sm font-medium text-gray-700'>
                                    3. Check the Air supply of machine (0.4 too 0.6 mpa)?
                                </label>
                                <div className="mt-2">
                                    <label className="inline-flex items-center mr-4">
                                        <input
                                            type="radio"
                                            name="rawMaterialStorage.question3"
                                            value="Yes"
                                            onChange={handleChange}
                                            className="form-radio h-4 w-4 text-blue-600"
                                            required
                                        />
                                        <span className="ml-2 text-gray-700">Yes</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            name="rawMaterialStorage.question3"
                                            value="No"
                                            onChange={handleChange}
                                            className="form-radio h-4 w-4 text-blue-600"
                                            required
                                        />
                                        <span className="ml-2 text-gray-700">No</span>
                                    </label>
                                </div>
                            </div>

                            {/* Question 4 */}
                            <div>
                                <label className='block text-sm font-medium text-gray-700'>
                                    4.Clean the water from Mini support cooler?
                                </label>
                                <div className="mt-2">
                                    <label className="inline-flex items-center mr-4">
                                        <input
                                            type="radio"
                                            name="rawMaterialStorage.question4"
                                            value="Yes"
                                            onChange={handleChange}
                                            className="form-radio h-4 w-4 text-blue-600"
                                            required
                                        />
                                        <span className="ml-2 text-gray-700">Yes</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            name="rawMaterialStorage.question4"
                                            value="No"
                                            onChange={handleChange}
                                            className="form-radio h-4 w-4 text-blue-600"
                                            required
                                        />
                                        <span className="ml-2 text-gray-700">No</span>
                                    </label>
                                </div>
                            </div>
                        </>
                    )}
                    
                    {/* Submit Button */}
                    <button
                        type='submit'
                        className='w-full mt-6 bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded'
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Add2;