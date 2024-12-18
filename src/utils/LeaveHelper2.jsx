import { useNavigate } from "react-router-dom";
import html2pdf from "html2pdf.js"

import { base64Image } from "../assets/base64image";

// Function to format the date
const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0]; // Returns date in YYYY-MM-DD format
};

// Function to format the time
const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toTimeString().split(' ')[0]; // Returns time in HH:MM:SS format
};

export const columns = [
    {
        name: "S No",
        selector: (row) => row.sno,
        width: "40px",
    },
    {
        name: "Emp Id",
        selector: (row) => row.employeeId,
        width: "100px",
    },
    {
        name: "Name",
        selector: (row) => row.name,
        width: "100px",
    },
    {
        name: "Department", // Added Department column
        selector: (row) => row.department,
        width: "120px",
    },
    {
        name: "Date", // Added Date column
        selector: (row) => formatDate(row.date), // Format the date here
        width: "120px",
    },
    {
        name: "Time", // Added Time column
        selector: (row) => formatTime(row.time), // Format the time here
        width: "80px",
    },
    {
        name: "Shift", // Added Shift column
        selector: (row) => row.shift,
        width: "80px",
    },
    {
        name: "Status",
        selector: (row) => row.status,
        width: "100px",
    },
    {
        name: "Action",
        cell: (row) => <LeaveButtons row={row} />, // Pass entire row to LeaveButtons
        center: true,
    },
];

export const LeaveButtons = ({ row }) => {
    const navigate = useNavigate();

    const handleView = () => {
        navigate(`/admin-dashboard/leaves2/${row._id}`);
    };

    const handleExport = async () => {
        // Fetch the leave details to export
        const response = await fetch(`https://fatp-api.onrender.com/api/leave2/detail/${row._id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });

        if (response.ok) {
            const data = await response.json();
            const leaveDetails = data.leave;

            // Check if leaveDetails is defined
            if (!leaveDetails) {
                console.error("Leave details not found");
                return;
            }

            // Create a new HTML element to render the leave details
            const element = document.createElement('div');
            element.innerHTML = `
            <img src="${base64Image}" alt="Description of Image" style="display: block; margin: 0 auto; width: 150px; height: auto;" />
                 <h1 style="text-align: center;font-weight: bold;">Check Sheet Details Details</h1>
    <p><strong>Employee ID:</strong> ${row.employeeId}</p>
    <p><strong>Name:</strong> ${row.name}</p>
    <p><strong>Department:</strong> ${row.department}</p>
    <p><strong>Status:</strong> ${leaveDetails.status}</p>
     <p><strong>Date:</strong> ${formatDate(row.date)}</p>
            <p><strong>Time:</strong> ${formatTime(row.time)}</p>
          
   <h2 style="font-weight: bold; margin-top: 20px;">Raw Material Storage Questions</h2>
<p>1. Whether Component reels as per feeder list and module based system? <strong>${leaveDetails.rawMaterialStorage?.question1 || 'Not answered'}</strong></p>
<p>2. Whether component reels are in good condition? <strong>${leaveDetails.rawMaterialStorage?.question2 || 'Not answered'}</strong></p>
<p>3. Whether component MBB puncher (MSL)? <strong>${leaveDetails.rawMaterialStorage?.question3 || 'Not answered'}</strong></p>
<p>4. Loose material should have MSL tracking label during component open from packet? <strong>${leaveDetails.rawMaterialStorage?.question4 || 'Not answered'}</strong></p>

    <!-- Add other management sections as needed -->

            `;

            // Set options for html2pdf
            const options = {
                margin: 1,
                filename: `${row.department}-${new Date().toISOString().slice(0, 10)}.pdf`,
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };

            // Generate PDF from the HTML element
            html2pdf()
                .from(element)
                .set(options)
                .save();
        } else {
            console.error("Failed to fetch leave details");
        }
    };

    return (
        <div className="flex flex-col md:flex-row space-x-0 md:space-x-2">
            <button
                className="px-3 py-1 bg-custom-purple rounded text-white hover:bg-purple-600 mb-2 md:mb-0"
                onClick={handleView}>
                View
            </button>
            <button
                className="px-3 py-1 bg-electric-blue rounded text-white hover:bg-blue-600"
                onClick={handleExport}>
                Export
            </button>
        </div>
    );
};