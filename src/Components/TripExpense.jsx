import { useState } from "react";

const TripExpense = ({ TripInfo }) => {
  const [fieldData, setFieldData] = useState({
    Food: "",
    Travel: "",
    RoomRent: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFieldData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Final Expenses:", fieldData);
    alert("Expense is saved");
  };

  const fields = ["Food", "Travel", "RoomRent"];

  return (
    <div className="min-h-[90VH] w-full flex flex-col gap-10 items-center justify-center bg-cover bg-center bg-no-repeat p-4">
      <h1 className="text-xl font-bold"> Expense Amounts Add for {TripInfo?.placeName}</h1>
      <form className="w-full max-w-md" onSubmit={handleSubmit}>

        {fields.map((Data) => (
          <div key={Data} className="mb-4">
            <label className="block text-gray-800 text-sm font-semibold mb-1">
              {Data} Total Expenses 
            </label>

            <input
              type="number"
              name={Data}
              placeholder={"Enter a Expanse"}
              value={fieldData[Data]}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        ))}

        <button type="submit" className="bg-blue-500 text-white w-full p-2 rounded-lg mt-2">Save All Expenses
        </button>
      </form>
    </div>
  );
};

export default TripExpense;