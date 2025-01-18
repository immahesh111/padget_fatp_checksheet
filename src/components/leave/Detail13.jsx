import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Detail13 = () => {
    const { id } = useParams();
    const [leave, setLeave] = useState(null);
    const [selectedApprover, setSelectedApprover] = useState(''); // State for selected approver
    const navigate = useNavigate();

    // Hardcoded list of approvers
    const approvers = [
        { _id: '1', name: 'Rajini' },
        { _id: '2', name: 'Kamal' },
        { _id: '3', name: 'Aarya' },
        { _id: '4', name: 'Simbu' }
    ];

    useEffect(() => {
        const fetchLeave = async () => {
            try {
                const response = await axios.get(`https://fatp-api.onrender.com/api/leave13/detail/${id}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });
        
                if (response.data.success) {
                    console.log("Fetched Leave Data:", response.data.leave); // Log fetched data
                    setLeave(response.data.leave);
                }
            } catch (error) {
                if (error.response && !error.response.data.success) {
                    alert(error.response.data.error);
                }
            }
        };

        fetchLeave();
    }, [id]);
    const changeStatus = async (id, status) => {
        try {
            const response = await axios.put(`https://fatp-api.onrender.com/api/leave13/${id}`, { status, approver: selectedApprover }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });

            if (response.data.success) {
                setLeave(prevLeave => ({
                    ...prevLeave,
                    status,
                    approver: selectedApprover // Store the selected approver's name in state
                }));

                navigate('/admin-dashboard/leaves13');
            }
        } catch (error) {
            if (error.response && !error.response.data.success) {
                alert(error.response.data.error);
            }
        }
    };

    // Function to get the approver's name based on selectedApprover ID
    const getApproverName = (approverId) => {
        const approver = approvers.find(a => a._id === approverId);
        return approver ? approver.name : '';
    };

    return (
        <>
            {leave ? (
                <div className='max-w-6xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md'>
                    <h2 className='text-2xl font-bold mb-8 text-center'>
                        PDL Tester
                    </h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        {/* Left Column */}
                        <div className='flex flex-col space-y-4'>
                            {/* Status Section */}
                            <div className='flex justify-between mb-4'>
                                <span className='text-lg font-bold'>Status:</span>
                                {leave.status === "Pending" ? (
                                    <>

                                    {/* Combobox for Approver Selection */}
                                    <select
                                            value={selectedApprover}
                                            onChange={(e) => setSelectedApprover(e.target.value)}
                                            className='border rounded p-1'
                                        >
                                            <option value="">Select Approver</option>
                                            {approvers.map((approver) => (
                                                <option key={approver._id} value={approver._id}>
                                                    {approver.name} {/* Displaying the name of the approver */}
                                                </option>
                                            ))}
                                        </select>

                                        {/* Approval and Rejection Buttons */}
                                        <button
                                            onClick={() => changeStatus(leave._id, "Approve")}
                                            className='px-4 py-1 bg-teal-600 text-white rounded hover:bg-teal-700'
                                        >
                                            Approve
                                        </button>
                                        <button
                                            onClick={() => changeStatus(leave._id, "Rejected")}
                                            className='px-4 py-1 bg-red-600 text-white rounded hover:bg-red-700'
                                        >
                                            Reject
                                        </button>
                                    </>
                                ) : (
                                    <span className='font-medium'>{leave.status}</span>
                                )}

                                {/* Display Approver Name After Approval or Rejection */}
                                {(leave.status === "Approve" || leave.status === "Rejected") && (
                                    <div className='mt-4'>
                                        <span className='text-lg font-bold'>Approved by:</span>
                                        <span className='ml-2'>{getApproverName(leave.approver)}</span> {/* Displaying the name of the approver */}
                                    </div>
                                )}
                                
                            </div>

                            {/* Display Raw Material Storage Questions and Answers */}
                            {leave.rawMaterialStorage && (
                                <div className="border-t border-b pt-4 pb-4">
                                    <h3 className="text-lg font-bold mb-4">DAILY MAINTENANCE CHECK SHEET FOR PLASMA MACHINE</h3>
                                    <table className="min-w-full border-collapse border border-gray-300">
                                        
                                        <tbody>
                                            {/* Question 1 */}
                                            <tr>
                                                <td className="border border-gray-300 p-2 text-center">Check the plasma Machine & Generator Grounding,Check the M/C 5S & cleaning.</td>
                                                
                                                <td className="border border-gray-300 p-2 text-center">
                                                    {leave.rawMaterialStorage.question1 || 'Not answered'}
                                                </td>
                                            </tr>

                                            {/* Question 2 */}
                                            <tr>
                                                <td className="border border-gray-300 p-2 text-center">Check the Emergency,Start & RST switch function , Check plasma path </td>
                                                
                                                <td className="border border-gray=300 p=2 text-center">
                                                    {leave.rawMaterialStorage.question2 || 'Not answered'}
                                                </td>
                                            </tr>

                                            {/* Question 3 */}
                                            <tr>
                                                <td className="border border-gray=300 p=2 text-center">Height of the gun 13-15mm, Plasma power supply, Plasma power supply 150-350W </td>
                                                
                                                <td className="border border-gray=300 p=2 text-center">
                                                    {leave.rawMaterialStorage.question3 || 'Not answered'}
                                                </td>
                                            </tr>

                                            {/* Question 4 */}
                                            <tr>
                                                <td className="border border-gray=300 p=2 text-center">Plasma cleaning speed 100-300mm/s,</td>
                                                
                                                <td className="border border-gray=300 p=2 text-center">
                                                    {leave.rawMaterialStorage.question4 || 'Not answered'}
                                                </td>
                                            </tr>

                                            {/* Question 5 */}
                                            <tr>
                                                <td className="border border-gray=300 p=2 text-center">Plasma temperature 20-40℃ </td>
                                                
                                                <td className="border border-gray=300 p=2 text-center">
                                                    {leave.rawMaterialStorage.question5 || 'Not answered'}
                                                </td>
                                            </tr>

                                            {/* Question 6 */}
                                            <tr>
                                                <td className="border border-gray=300 p=2 text-center">If found defective, describe the issues & Inform to Shift Incharge.</td>
                                                
                                                <td className="border border-gray=300 p=2 text-center">
                                                    {leave.rawMaterialStorage.question6 || 'Not answered'}
                                                </td>
                                            </tr> 

                                            

                                        </tbody>
                                    </table>
                                </div>
                            )}

                        </div>

                        {/* Right Column - Empty or Additional Details */}
                        <div className='flex flex-col space-y-4'>
                            {/* You can add any additional details here if needed */}
                            {/* Currently empty as per your request to remove specific details */}
                        </div>
                    </div>
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </>
    );
};

export default Detail13;