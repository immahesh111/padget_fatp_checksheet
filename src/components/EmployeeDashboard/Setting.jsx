import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Setting = () => {
    const navigate = useNavigate()
    const [setting, setSetting] = useState({
        oldPassword: "",
        newPassword:"", 
        confirmPassword: "",
    })

    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setSetting({...setting, [name]:value})
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        if(setting.newPassword !== setting.confirmPassword){
            setError("Password not matched");
        } else {
            setError("Password change functionality disabled in public view")
        }
    }

    return (
        <div className='max-w-3xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md w-96'>
            <h2 className='text-2xl font-bold mb-6'>Change Password</h2>
            <p className='text-red-500'>{error}</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className='text-sm font-medium text-gray-700'>
                        Old password
                    </label>
                    <input
                    type='password'
                    name='oldPassword'
                    placeholder='Change Password'
                    onChange={handleChange}
                    className='mt-1 w-full p-2 border border-gray-300 rounded-md'
                    required/>
                </div>

                <div>
                    <label className='text-sm font-medium text-gray-700'>
                        New password
                    </label>
                    <input
                    type='password'
                    name='newPassword'
                    placeholder='New Password'
                    onChange={handleChange}
                    className='mt-1 w-full p-2 border border-gray-300 rounded-md'
                    required/>
                </div>

                <div>
                    <label className='text-sm font-medium text-gray-700'>
                        Confirm password
                    </label>
                    <input
                    type='password'
                    name='confirmPassword'
                    placeholder='Confirm Password'
                    onChange={handleChange}
                    className='mt-1 w-full p-2 border border-gray-300 rounded-md'
                    required/>
                </div>

                <button
                 type= "submit"
                 className='w-full mt-6 bg-custom-purple hover:bg-teal-700 text-white font-bold py-2 px-4 rounded'
                >
                    Change Password
                </button>
            </form>
        </div>
    )
}

export default Setting