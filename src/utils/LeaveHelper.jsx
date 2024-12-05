import { useNavigate } from "react-router-dom";

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
        selector:(row) => row.action, // Use LeaveButtons for action
        center: true,
    },
];

export const LeaveButtons = ({ _id }) => {
    const navigate = useNavigate();

    const handleView = () => {
        navigate(`/admin-dashboard/leaves/${_id}`);
    };
    const handleExport = () => {
        // Implement the export functionality here
        console.log(`Exporting data for ID: ${_id}`);
    };

    return (
        <div className="flex space-x-2">
            <button
                className="px-4 py-1 bg-custom-purple rounded text-white hover:bg-teal-600"
                onClick={handleView}>
                View
            </button>
            <button
                className="px-4 py-1 bg-neon-green rounded text-white hover:bg-blue-600"
                onClick={handleExport}>
                Export
            </button>
        </div>
    );
};