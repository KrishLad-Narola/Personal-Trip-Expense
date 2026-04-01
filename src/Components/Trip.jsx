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

    setReports((prev) => [...prev, finalData]);

    setDisplayField(false);
    setTripData({ placeName: "", budget: "" });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        PERSONAL TRIP EXPENSE
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        
    
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">Where We Go!</h2>

          <form
           onSubmit={handleSubmit}>
            <select
              name="placeName"
              value={tripData.placeName}
              onChange={handleChange}
              className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select Destination</option>
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
              className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select Budget</option>
              <option>5000</option>
              <option>10000</option>
              <option>25000</option>
              <option>35000</option>
              <option>55000</option>
            </select>

            <button className="bg-purple-400  hover:bg-pink-100 hover:text-purple-400 text-white w-full p-3 rounded-lg transition">
              Let's Go 
            </button>
          </form>

          {displayField && (
            <div className="mt-6">
              <TripExpense
                TripInfo={tripData}
                onFinalSubmit={handleFinalSubmit}
              />
            </div>
          )}
        </div>

       
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">Final Report</h2>

          {reports.length === 0 ? (
            <p className="text-gray-500 text-center">
              No Data Is In Report ⛔
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border rounded-lg overflow-hidden">
                <thead className="bg-blue-100">
                  <tr>
                    <th className="p-2">Place</th>
                    <th className="p-2">Budget</th>
                    <th className="p-2">Food</th>
                    <th className="p-2">Travel</th>
                    <th className="p-2">Room</th>
                    <th className="p-2">Remark</th>
                    <th className="p-2">Total</th>
                  </tr>
                </thead>

                <tbody>
                  {reports.map((items, index) => (
                    <tr
                      key={index}
                      className="text-center border-t hover:bg-gray-50"
                    >
                      <td>{items.placeName}</td>
                      <td>{items.budget}</td>
                      <td>{items.Food}</td>
                      <td>{items.Travel}</td>
                      <td>{items.RoomRent}</td>
                      <td>{items.RemarkExpense}</td>
                      <td className="font-semibold text-green-600">
                        {items.TotalExpenses}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Trip;