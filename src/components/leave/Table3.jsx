import React, { useEffect, useState } from 'react'
import { FaLessThanEqual } from 'react-icons/fa'
import { columns, LeaveButtons } from '../../utils/LeaveHelper3'
import DataTable from 'react-data-table-component'
import axios from 'axios'

const Table3 = () => {
    const [leaves, setLeaves] = useState(null)
    const [filteredLeaves, setFilteredLeaves] = useState(null)


    const fetchLeaves = async () => {
        try {
            const response = await axios.get('https://fatp-api.onrender.com/api/leave3', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            console.log(response.data)

            if (response.data.success) {
                let sno = 1;
                const data = await response.data.leaves.map((leave) => (
                    {
                        _id: leave._id,
                        sno: sno++,
                        employeeId: leave.employeeId.employeeId,
                        name: leave.employeeId.userId.name,
                        leaveType: leave.leaveType,
                        department: leave.employeeId.department.dep_name,
                        shift:leave.shift,
                        date:leave.date,
                        time:leave.updatedAt,
                        status: leave.status,
                        action: <LeaveButtons _id={leave._id} />,
                    }
                ))
                setLeaves(data);
                setFilteredLeaves(data)


            }
        }
        catch (error) {
            if (error.response && !error.response.data.success) {
                alert(error.response.data.error)
            }
        }
    }
    useEffect(() => {
        fetchLeaves();
    }, []);

    const filterByInput = (e) => {
        const data = leaves.filter((leave) => leave.employeeId.toLowerCase().includes(e.target.value.toLowerCase()));
        setFilteredLeaves(data);
    }
    const filterByButton = (status) => {
        const data = leaves.filter((leave) => leave.status.toLowerCase().includes(status.toLowerCase()));
        setFilteredLeaves(data);
    }

    return (
        <>
            {filteredLeaves ? (
                <div className='p-6'>
                    <div className='text-center'>
                        <h3 className='text-2xl font-bold'>Manage Checksheets</h3>
                    </div>

                    <div className='flex justify-between items-center'>
                        <input type="text"
                            placeholder='Search By Employee ID'
                            className='px-4 py-0.5 border'
                            onChange={filterByInput } />
                        <div className='space-x-3'>
                            <button className='px-2 py-1 bg-bright-yellow text-white hover:bg-yellow-600' onClick={() => filterByButton("Pending")}>Pending</button>
                            <button className='px-2 py-1 bg-neon-green text-white hover:bg-green-500' onClick={() => filterByButton("Approve")}>Approved</button>
                            <button className='px-2 py-1 bg-bright-red text-white hover:bg-red-500' onClick={() => filterByButton("Rejected")}>Rejected</button>
                        </div>
                    </div>

                    <div className='mt-3'>
                        <DataTable columns={columns} data={filteredLeaves} pagination />
                    </div>


                </div>
            ) : (
                <div>Loading...</div>
            )}
        </>
    );
};

export default Table3