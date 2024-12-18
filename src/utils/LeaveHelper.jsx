import { useNavigate } from "react-router-dom";
import html2pdf from "html2pdf.js"

export const columns = [
    {
        name: "S No",
        selector: (row) => row.sno,
        width: "70px",
    },
    {
        name: "Emp Id",
        selector: (row) => row.employeeId,
        width: "120px",
    },
    {
        name: "Name",
        selector: (row) => row.name,
        width: "120px",
    },

    {
        name: "Department", // Added Department column
        selector: (row) => row.department,
        width: "170px",
    },
    {
        name: "Day", // Added Day column
        selector: (row) => row.date,
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
        width: "120px",
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
        navigate(`/admin-dashboard/leaves/${row._id}`);
    };

    const handleExport = async () => {
        // Fetch the leave details to export
        const response = await fetch(`https://fatp-api.onrender.com/api/leave/detail/${row._id}`, {
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
            <h1 style="text-align: center; font-weight: bold;">Check Sheet Details</h1>
            <p><strong>Employee ID:</strong> ${row.employeeId}</p>
            <p><strong>Name:</strong> ${row.name}</p>
            <p><strong>Department:</strong> ${row.department}</p>
            <p><strong>Status:</strong> ${leaveDetails.status}</p>
            <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
            
            <h2 style="font-weight: bold; margin-top: 20px;">Raw Material Storage Questions</h2>
            <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
                <thead>
                    <tr>
                        <th style="border: 1px solid #000; padding: 8px; text-align: center;">Class</th>
                        <th style="border: 1px solid #000; padding: 8px; text-align: center;">Assembly/Part</th>
                        <th style="border: 1px solid #000; padding: 8px; text-align: center;">Std Condition</th>
                        <th style="border: 1px solid #000; padding: 8px; text-align: center;">Check Method</th>
                        <th style="border: 1px solid #000; padding: 8px; text-align: center;">Check</th>
                    </tr>
                </thead>
                <tbody>
                     <tr>
                            <td style="border: 1px solid #000; padding: 8px; text-align: center;">Cleaning</td>
                            <td style="border: 1px solid #000; padding: 8px; text-align: center;">Cylinder, SPK and mic</td>
                            <td style="border: 1px solid #000; padding: 8px; text-align: center;">No Dirt</td>
                            <td style="border: 1px solid #000; padding: 8px; text-align: center;">Visual</td>
                            <td style="border: 1px solid #000; padding: 8px; text-align: center;">${leaveDetails.rawMaterialStorage?.question1 || 'Not answered'}</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 8px; text-align: center;">Change</td>
                            <td style="border: 1px solid #000; padding: 8px; text-align: center;">Check the Earth (Grounding) cable</td>
                            <td style="border: 1px solid #000; padding: 8px; text-align: center;">No Damage</td>
                            <td style="border: 1px solid #000; padding: 8px; text-align: center;">Visual</td>
                            <td style="border: 1px solid #000; padding: 8px; text-align: center;">${leaveDetails.rawMaterialStorage?.question2 || 'Not answered'}</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #000; padding: 8px; text-align: center;">Change</td>
                            <td style="border: 1px solid #000; padding: 8px; text-align: center;">Ensure the fixture should not have any misalignment and no dust particles</td>
                            <td style="border: 1px solid #000; padding: 8px; text-align: center;">Firm Contact</td>
                            <td style="border: 1px solid #000; padding: 8px; text-align: center;">Lock</td>
                            <td style="border: 1px solid #000; padding: 8px; text-align: center;">${leaveDetails.rawMaterialStorage?.question3 || 'Not answered'}</td>
                        </tr>
                        <tr>
                    <!-- Question 4 -->
                    <tr>
                        <td style="border: 1px solid #000; padding: 8px; text-align: center;">Check/ Change</td>
                        <td style="border: 1px solid #000; padding: 8px; text-align:center">Check the fixture position and device seating properly without movement</td>
                        <td style="border: 1px solid #000; padding: 8px; text-align:center">No abnormalities</td>
                        <td style="border: 1px solid #000; padding: 8px; text-align:center">Visual</td>
                        <td style="border: 1px solid #000; padding: 8px; text-align:center">${leaveDetails.rawMaterialStorage?.question4 || 'Not answered'}</td>
                    </tr>
        
                    <!-- Question 5 -->
                    <tr>
                        <td style="border: 1px solid #000; padding: 8px; text-align:center">Check</td>
                        <td style="border: 1px solid #000; padding: 8px; text-align:center">Check the correct script selected according to model requirements</td>
                        <td style="border: 1px solid #000; padding: 8px; text-align:center">No abnormalities</td>
                        <td style="border: 1px solid #000; padding: 8px; text-align:center">Visual</td>
                        <td style="border: 1px solid #000; padding: 8px; text-align:center">${leaveDetails.rawMaterialStorage?.question5 || 'Not answered'}</td>
                    </tr>
                </tbody>
            </table>
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