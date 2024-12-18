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
                 <h1 style="text-align: center;font-weight: bold;">Check Sheet Details Details</h1>
    <p><strong>Employee ID:</strong> ${row.employeeId}</p>
    <p><strong>Name:</strong> ${row.name}</p>
    <p><strong>Department:</strong> ${row.department}</p>
    <p><strong>Status:</strong> ${leaveDetails.status}</p>
    <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
          
   <Document>
        <Page size="A4" style={styles.container}>
            <Text style={styles.title}>Raw Material Storage Questions</Text>
            <View style={styles.table}>
                {/* Table Header */}
                <View style={styles.tableRow}>
                    <Text style={styles.tableCell}>Class</Text>
                    <Text style={styles.tableCell}>Assembly/Part</Text>
                    <Text style={styles.tableCell}>Std Condition</Text>
                    <Text style={styles.tableCell}>Check Method</Text>
                    <Text style={styles.tableCell}>Check</Text>
                </View>

                {/* Question 1 */}
                <View style={styles.tableRow}>
                    <Text style={styles.tableCell}>Cleaning</Text>
                    <Text style={styles.tableCell}>Cylinder, SPK and mic</Text>
                    <Text style={styles.tableCell}>No Dirt</Text>
                    <Text style={styles.tableCell}>Visual</Text>
                    <Text style={styles.tableCell}>${leaveDetails.rawMaterialStorage?.question1 || 'Not answered'}</Text>
                </View>

                {/* Question 2 */}
                <View style={styles.tableRow}>
                    <Text style={styles.tableCell}>Change</Text>
                    <Text style={styles.tableCell}>Check the Earth (Grounding) cable</Text>
                    <Text style={styles.tableCell}>No Damage</Text>
                    <Text style={styles.tableCell}>Visual</Text>
                    <Text style={styles.tableCell}>${leaveDetails.rawMaterialStorage?.question2 || 'Not answered'}</Text>
                </View>

                {/* Question 3 */}
                <View style={styles.tableRow}>
                    <Text style={styles.tableCell}>Change</Text>
                    <Text style={styles.tableCell}>Ensure the fixture should not have any misalignment and no dust particles</Text>
                    <Text style={styles.tableCell}>Firm Contact</Text>
                    <Text style={styles.tableCell}>Lock</Text>
                    <Text style={styles.tableCell}>${leaveDetails.rawMaterialStorage?.question3 || 'Not answered'}</Text>
                </View>

                {/* Question 4 */}
                <View style={styles.tableRow}>
                    <Text style={styles.tableCell}>Check/ Change</Text>
                    <Text style={styles.tableCell}>Check the fixture position and device seating properly without movement</Text>
                    <Text style={styles.tableCell}>No abnormalities</Text>
                    <Text style={styles.tableCell}>Visual</Text>
                    <Text style={styles.tableCell}>${leaveDetails.rawMaterialStorage?.question4 || 'Not answered'}</Text>
                </View>

                {/* Question 5 */}
                <View style={styles.tableRow}>
                    <Text style={styles.tableCell}>Check</Text>
                    <Text style={styles.tableCell}>Check the correct script selected according to model requirements</Text>
                    <Text style={styles.tableCell}>No abnormalities</Text>
                    <Text style={styles.tableCell}>Visual</Text>
                    <Text style={styles.tableCell}>${leaveDetails.rawMaterialStorage?.question5 || 'Not answered'}</Text>
                </View>

            </View>
        </Page>
    </Document>

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