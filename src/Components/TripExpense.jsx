import { useState } from "react";

const TripExpense = () => {

    const [FiledData , setFieldData] = useState({
        Food:"",
        Travel:"",
        RoomRent:"",
    });

       const handleChange = ({ target: { name, value } }) => {
        setFieldData((prevData) => ({
            ...prevData,
            [name]: value
        }));

        const handleSubmit = (e) => {
        e.preventDefault();
        // const { Food , Travel ,RoomRent } = FiledData;

        //   console.log("FoodExpanse:", Food);
        //   console.log("TravelExpanse", Travel);
        //   console.log("RoomRentExpanse:",RoomRent);
        console,log("Final Expanses:",FiledData);
        alert("Expanse is save");
    };

  return (
    <div className="min-h-[90VH] w-full flex flex-col gap-10 items-center justify-center bg-cover bg-center bg-no-repeat p-4">
        <h1>Expanse Amounts Add</h1>

        <div className="mb-4">
            <label className="block text-gray-800 text-sm font-semibold mb-1" htmlFor="Food">Food Expanse</label>
            <input
            type="text"
            name="Food Expanse"
            placeholder="Enter Your Expanse"
            value={FiledData.Food}
            onChange={handleChange}
            />
        </div>

        <div className="mb- 4">
            <label className="block text-gray-800 text-sm font-semibold mb-1" htmlFor="Travel">Travel Expanse </label>
            <input 
            className="w-full p-2 bg-white/50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            name="Travel Expanse"
            placeholder="Enter your travel Expanse"
            value={FiledData.Travel}
            onChange={handleChange}
            />
        </div>

        <div className="mb-4">
            <label className="block text-gray-800 text-sm font-semibold mb-1" htmlFor="RoomRent">RoomRent Expanse</label>
            <input
             className="w-full bg/white50 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
             type="text"
             name="RoomRent Expanse"
             placeholder="Enter your RoomRent"
             value={FiledData.RoomRent}
             onChange={handleChange}
             />
        </div>
         <button onClick={handleSubmit}
                className="bg-blue-500 text-white w-full p-2 rounded-lg mt-2">
                Save Expanses
                </button>
    </div>
  );
};
}

export default TripExpense;