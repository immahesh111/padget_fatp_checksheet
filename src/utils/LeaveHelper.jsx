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
          
   <h2 style="font-weight: bold; margin-top: 20px;">Raw Material Storage Questions</h2>
<p>1. Whether Component reels as per feeder list and module based system? <strong>${leaveDetails.rawMaterialStorage?.question1 || 'Not answered'}</strong></p>
<p>2. Whether component reels are in good condition? <strong>${leaveDetails.rawMaterialStorage?.question2 || 'Not answered'}</strong></p>
<p>3. Whether component MBB puncher (MSL)? <strong>${leaveDetails.rawMaterialStorage?.question3 || 'Not answered'}</strong></p>
<p>4. Loose material should have MSL tracking label during component open from packet? <strong>${leaveDetails.rawMaterialStorage?.question4 || 'Not answered'}</strong></p>

<h2 style="font-weight: bold; margin-top: 20px;">Solder Paste Management Questions</h2>
<p>5. Is correct solder paste used (brand/model)? <strong>${leaveDetails.solderPasteManagement?.question5 || 'Not answered'}</strong></p>
<p>6. Solder paste/glue storage temperature (0–10°C)? <strong>${leaveDetails.solderPasteManagement?.question6 || 'Not answered'}</strong></p>
<p>7. Check solder paste expiry date? <strong>${leaveDetails.solderPasteManagement?.question7 ? new Date(leaveDetails.solderPasteManagement.question7).toLocaleDateString() : 'Not answered'}</strong></p>
<p>8. Check solder paste thawing time? <strong>${leaveDetails.solderPasteManagement?.question8 || 'Not answered'}</strong></p>
<p>9. Is the secondary use of solder paste used within 12 hours of the specific time? <strong>${leaveDetails.solderPasteManagement?.question9 || 'Not answered'}</strong></p>
<p>10. The solder paste consumed as per FIFO? <strong>${leaveDetails.solderPasteManagement?.question10 || 'Not answered'}</strong></p>

    <h2 style="font-weight: bold; margin-top: 20px;">Loader Management Questions</h2>
<p>11. Is PCB loading direction correct? <strong>${leaveDetails.loaderManagement?.question12 || 'Not answered'}</strong></p>
<p>12. Is PCB pallet at the front of magazine? <strong>${leaveDetails.loaderManagement?.question13 || 'Not answered'}</strong></p>
<p>13. PCB panel max 50 no. should be in a magazine? <strong>${leaveDetails.loaderManagement?.question14 || 'Not answered'}</strong></p>
<p>14. Whether each pallet is loaded in each magazine slot? <strong>${leaveDetails.loaderManagement?.question15 || 'Not answered'}</strong></p>
<p>15. Whether push position is in centre of PCB Pallet? <strong>${leaveDetails.loaderManagement?.question16 || 'Not answered'}</strong></p>

<h2 style="font-weight: bold; margin-top: 20px;">GKG Printer Management Questions</h2>
<p>16. Stencil No: <strong>${leaveDetails.gkgPrinterManagement?.question17_stencilNo || 'Not answered'}</strong></p>
<p>17. TOP: <strong>${leaveDetails.gkgPrinterManagement?.question17_top || 'Not answered'}</strong></p>
<p>18. BOTTOM: <strong>${leaveDetails.gkgPrinterManagement?.question17_bottom || 'Not answered'}</strong></p>
<p>19. Is stencil cleaning and tension checklist updated? <strong>${leaveDetails.gkgPrinterManagement?.question18 || 'Not answered'}</strong></p>

<!-- Printing Parameters -->
<h4 style="font-weight: bold; margin-top: 60px;">Printing Parameters</h4>
<h5><strong>Squeege Pressure</strong></h5>
<div style="margin-left: 20px;">
    <p>Print Speed: <strong>${leaveDetails.gkgPrinterManagement?.question19_printSpeed || 'Not answered'}</strong></p>
    <p>Print Gap: <strong>${leaveDetails.gkgPrinterManagement?.question19_printGap || 'Not answered'}</strong></p>
    <p>Clean Rate: <strong>${leaveDetails.gkgPrinterManagement?.question19_cleanRate || 'Not answered'}</strong></p>
    <p>Clean Mode: <strong>${leaveDetails.gkgPrinterManagement?.question19_cleanMode || 'Not answered'}</strong></p>
</div>

    <h2 style="font-weight: bold; margin-top: 20px;">SPI Management Questions</h2>
    <div style="margin-left: 20px;">
        <p>21. SPI m/c program name matches the actual product model? ${leaveDetails.spiManagement?.question21 || 'Not answered'}</p>
        <p>22. Whether SPI m/c detects the defects? ${leaveDetails.spiManagement?.question22 || 'Not answered'}</p>

        <!-- Volume Section -->
        <h4 style="font-weight: bold;">Volume</h4>
        <div style="display: flex; justify-content: space-between;">
            <div><strong>Minimum Volume:</strong> ${leaveDetails.spiManagement.volumeStringMinimum || 'Not answered'}</div>
            <div><strong>Highest Volume:</strong> ${leaveDetails.spiManagement.volumeStringHighest || 'Not answered'}</div>
        </div>

        <!-- Area Section -->
        <h4 style="font-weight: bold; ">Area</h4>
        <div style="display: flex; justify-content: space-between;">
            <div><strong>Minimum Area:</strong> ${leaveDetails.spiManagement.areaStringMinimum || 'Not answered'}</div>
            <div><strong>Highest Area:</strong> ${leaveDetails.spiManagement.areaStringHighest || 'Not answered'}</div>
        </div>

        <!-- Height Section -->
        <h4 style="font-weight: bold;">Height</h4>
        <div style="display: flex; justify-content: space-between; margin-bottom-10px;">
            <div><strong>Minimum Height:</strong> ${leaveDetails.spiManagement.heightStringMinimum || 'Not answered'}</div>
            <div><strong>Highest Height:</strong>${leaveDetails.spiManagement.heightStringHighest || 'Not answered'}</div>
        </div>

    </div>

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