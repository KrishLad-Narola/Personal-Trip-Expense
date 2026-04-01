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
    <div className="bg-gray-50 p-4 rounded-xl border">
      <h2 className="text-lg font-semibold mb-3">
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
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>
        ))}

        {!showMore && (
          <button
            type="button"
            onClick={() => setShowMore(true)}
            className="bg-gray-500 hover:bg-gray-600 text-white w-full p-2 mb-3 rounded-lg">
             No Data is save ⛔
          </button>
        )}

        {showMore && (
          <div>
            <div>
              <label className="text-sm font-medium">Remark Expanse</label>
              <input
                type="text"
                name="RemarkExpense"
                placeholder="Remark"
                value={fieldData.RemarkExpense}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg mb-3"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Total Expanse</label>
              <input
                type="number"
                name="TotalExpenses"
                placeholder="Total"
                value={fieldData.TotalExpenses}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg mb-3"
              />
            </div>
          </div>
        )}

        <button className="bg-blue-500 hover:bg-blue-600 text-white w-full p-3 rounded-lg">
          Save All Expense ✅
        </button>
      </form>
    </div>
  );
};

export default TripExpense;