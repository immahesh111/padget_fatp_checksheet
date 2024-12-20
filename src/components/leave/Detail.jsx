import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Detail = () => {
    const { id } = useParams();
    const [leave, setLeave] = useState(null);
    const [selectedApprover, setSelectedApprover] = useState(''); // State for selected approver
    const navigate = useNavigate();

    // Hardcoded list of approvers
    const approvers = [
        { _id: '1', name: 'John Doe' },
        { _id: '2', name: 'Jane Smith' },
        { _id: '3', name: 'Alice Johnson' },
        { _id: '4', name: 'Bob Brown' }
    ];

    useEffect(() => {
        const fetchLeave = async () => {
            try {
                const response = await axios.get(`https://fatp-api.onrender.com/api/leave/detail/${id}`, {
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
            const response = await axios.put(`https://fatp-api.onrender.com/api/leave/${id}`, { status, approver: selectedApprover }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });

            if (response.data.success) {
                // Update leave state with the new status and approver details
                setLeave(prevLeave => ({
                    ...prevLeave,
                    status,
                    approver: selectedApprover // Assuming you also want to store the approver ID
                }));
                navigate('/admin-dashboard/leaves');
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
                        CheckSheet Details
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
                                    <h3 className="text-lg font-bold mb-4">Raw Material Storage Questions</h3>
                                    <table className="min-w-full border-collapse border border-gray-300">
                                        <thead>
                                            <tr>
                                                <th className="border border-gray-300 p-2 text-center">Class</th>
                                                <th className="border border-gray-300 p-2 text-center">Assembly/Part</th>
                                                <th className="border border-gray-300 p-2 text-center">Std Condition</th>
                                                <th className="border border-gray-300 p-2 text-center">Check Method</th>
                                                <th className="border border-gray-300 p-2 text-center">Check</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* Question 1 */}
                                            <tr>
                                                <td className="border border-gray-300 p-2 text-center">Cleaning</td>
                                                <td className="border border-gray-300 p-2 text-center">Cylinder, SPK and mic</td>
                                                <td className="border border-gray-300 p-2 text-center">No Dirt</td>
                                                <td className="border border-gray-300 p-2 text-center">Visual</td>
                                                <td className="border border-gray-300 p-2 text-center">
                                                    {leave.rawMaterialStorage.question1 || 'Not answered'}
                                                </td>
                                            </tr>

                                            {/* Question 2 */}
                                            <tr>
                                                <td className="border border-gray-300 p-2 text-center">Change</td>
                                                <td className="border border-gray-300 p=2 text-center">Check the Earth (Grounding) cable</td>
                                                <td className="border border-gray=300 p=2 text-center">No Damage</td>
                                                <td className="border border-gray=300 p=2 text-center">Visual</td>
                                                <td className="border border-gray=300 p=2 text-center">
                                                    {leave.rawMaterialStorage.question2 || 'Not answered'}
                                                </td>
                                            </tr>

                                            {/* Question 3 */}
                                            <tr>
                                                <td className="border border-gray=300 p=2 text-center">Change</td>
                                                <td className="border border-gray=300 p=2 text-center">Ensure the fixture should not have any misalignment and no dust particles</td>
                                                <td className="border border-gray=300 p=2 text-center">Firm Contact</td>
                                                <td className="border border-gray=300 p=2 text-center">Lock</td>
                                                <td className="border border-gray=300 p=2 text-center">
                                                    {leave.rawMaterialStorage.question3 || 'Not answered'}
                                                </td>
                                            </tr>

                                            {/* Question 4 */}
                                            <tr>
                                                <td className="border border-gray=300 p=2 text-center">Check/ Change</td>
                                                <td className="border border-gray=300 p=2 text-center">Check the fixture position and device seating properly without movement</td>
                                                <td className="border border-gray=300 p=2 text-center">No abnormalities</td>
                                                <td className="border border-gray=300 p=2 text-center">Visual</td>
                                                <td className="border border-gray=300 p=2 text-center">
                                                    {leave.rawMaterialStorage.question4 || 'Not answered'}
                                                </td>
                                            </tr>

                                            {/* Question 5 */}
                                            <tr>
                                                <td className="border border-gray=300 p=2 text-center">Check</td>
                                                <td className="border border-gray=300 p=2 text-center">Check the correct script selected according to model requirements</td>
                                                <td className="border border-gray=300 p=2 text-center">No abnormalities</td>
                                                <td className="border border-gray=300 p=2 text-center">Visual</td>
                                                <td className="border border-gray=300 p=2 text-center">
                                                    {leave.rawMaterialStorage.question5 || 'Not answered'}
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

export default Detail;