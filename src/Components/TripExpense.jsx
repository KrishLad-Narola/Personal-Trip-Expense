import { useState } from "react";

const TripExpense = ({ TripInfo, onFinalSubmit }) => {
  const [fieldData, setFieldData] = useState({
    Food: "",
    Travel: "",
    RoomRent: "",
    RemarkExpense: "",
    TotalExpenses: "",
  });

  const [showMore, setShowMore] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFieldData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onFinalSubmit(fieldData); 
  };

  const fields = ["Food", "Travel", "RoomRent"];

  return (
    <div className="w-full max-w-md p-4 bg-gray-100 rounded-xl">
      <h2 className="text-lg font-bold mb-3">
        Expenses for {TripInfo.placeName}
      </h2>

      <form onSubmit={handleSubmit}>
        {fields.map((item) => (
          <div key={item} className="mb-3">
            <input
              type="number"
              name={item}
              placeholder={`${item} Expense`}
              value={fieldData[item]}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
        ))}

        {!showMore && (
          <button
            type="button"
            onClick={() => setShowMore(true)}
            className="bg-gray-400 text-white w-full p-2 mb-3"
          >
            Add Remark & Total
          </button>
        )}

        {showMore && (
            <div>
          <div>
            <label>RemarkExpanse</label>
            <input
              type="text"
              name="RemarkExpense"
              placeholder="Remark"
              value={fieldData.RemarkExpense}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-3"
            />
            </div>

           <div>
            <label>TotalExpanse</label>
            <input
              type="number"
              name="TotalExpenses"
              placeholder="Total"
              value={fieldData.TotalExpenses}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-3"
            />
          </div>
          </div>
        )}

        <button className="bg-blue-500 text-white w-full p-2 rounded">
          Save Expense
        </button>
      </form>
    </div>
  );
};

export default TripExpense;