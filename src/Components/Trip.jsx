import React, { useState } from "react";
import TripExpense from "./TripExpense";

const Trip = () => {
    const [tripData, setTripData] = useState({
        placeName: "",
        budget: "",
    });

    const [displayField, setDisplayField] = useState(false);


    const [reports, setReports] = useState([]);

    const handleChange = ({ target: { name, value } }) => {
        setTripData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!tripData.placeName || !tripData.budget) {
            alert("Select a place name and budget");
            return;
        }

        setDisplayField(true);
    };

    const handleFinalSubmit = (ReportData) => {
        const finalData = {
            ...tripData,
            ...ReportData,
        };

        setReports((prev) =>
            [...prev, finalData]);


        setDisplayField(false);
        setTripData({ placeName: "", budget: "" });
    };

    return (
        <div className="p-6 flex flex-col items-center gap-6">
            <h1 className="text-2xl font-bold">PERSONAL TRIP EXPENSE</h1>
            <form
                className="w-full max-w-sm p-6 bg-gray-100 rounded-xl"
                onSubmit={handleSubmit}
            >
                <select
                    name="placeName"
                    value={tripData.placeName}
                    onChange={handleChange}
                    className="w-full p-2 mb-3"
                >
                    <option value="">Where is Going</option>
                    <option>Mumbai</option>
                    <option>Goa</option>
                    <option>Manali</option>
                    <option>Spiti Valley</option>
                    <option>Kerala</option>
                </select>

                <select
                    name="budget"
                    value={tripData.budget}
                    onChange={handleChange}
                    className="w-full p-2 mb-3"
                >
                    <option value="">Trip Budget</option>
                    <option>5000</option>
                    <option>10000</option>
                    <option>25000</option>
                    <option>35000</option>
                    <option>55000</option>
                </select>

                <button className="bg-blue-500 text-white w-full p-2 rounded">
                    Lets Go!
                </button>
            </form>

            {displayField && (
                <TripExpense TripInfo={tripData} onFinalSubmit={handleFinalSubmit} />
            )}

            {reports.length > 0 && (
                <div className="w-full max-w-4xl mt-6">
                    <h2 className="text-xl font-bold mb-3">Final Report</h2>

                    <table className="w-full border border-gray-300">
                        <thead className="bg-gray-200">
                            <tr>
                                <th>Place</th>
                                <th>Budget</th>
                                <th>Food</th>
                                <th>Travel</th>
                                <th>Room</th>
                                <th>Remark</th>
                                <th>Total</th>
                            </tr>
                        </thead>


                        <tbody>
                            {reports.map((items, index) => (
                                <tr key={index} className="text-center border-t">
                                    <td>{items.placeName}</td>
                                    <td>{items.budget}</td>
                                    <td>{items.Food}</td>
                                    <td>{items.Travel}</td>
                                    <td>{items.RoomRent}</td>
                                    <td>{items.RemarkExpanse}</td>
                                    <td>{items.TotalExpanse}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Trip;