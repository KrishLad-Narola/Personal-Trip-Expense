import { useState } from "react";

const TripExpense = ({ TripInfo }) => {
    const [fieldData, setFieldData] = useState({
        Food: "",
        Travel: "",
        RoomRent: "",
        RemarkExpense: "",
        TotalExpenses: "",
    });

    const [ShowMore, setShowMore] = useState(false);


    const handleClick = () => {
        setShowMore(true);
    }

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
                {/* </form>
         <h1 className="text-xl font-bold"> Add Extra Field For Hide Expanse {TripInfo?.placeName}</h1>
         <form className="w-full max-w-md" onSubmit={handleSubmit}>
         
         {MoreField.map((Data) => (
            <div key={Data} className="mb-4">
            <label className="block text-gray-800 text-sm font-semibold mb-1">
            {Data} Total Expenses 
            </label>
            
            <input
            type="Text"
            name={Data}
            placeholder={"Enter a Expanse"}
            value={fieldData[Data]}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            </div>
            ))} */}

                {!ShowMore && (
                    <div className="border-t pt-4 mt-2">
                        <div className="mt-4">
                            <label className="block text-gray-800 text-sm font-semibold mb-1">Remark Expanse</label>
                            <input
                                className="w-full p-2 bg-white/50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                type="text"
                                name="RemarkExpense"
                                placeholder="Enter your Extra Expanse Reason"
                                value={fieldData.RemarkExpense}
                                onChange={handleChange}
                                />
                        </div>

                        <div className="mt-4">
                            <label className="block text-gray-800 text-sm font-semibold mb-1">Total Expanse</label>
                            <input
                                className="w-full p-2 bg-white/50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                type="number"
                                name="TotalExpenses"
                                placeholder="Enter your Extra Expanse"
                                value={fieldData.TotalExpenses}
                                onChange={handleChange}
                                />
                        </div>
                        {!ShowMore && (
                            <button
                                className="bg-blue-500 text-white w-full p-2 rounded-lg mt-2"
                                onClick={handleClick}>
                                Add Remark & Total Expanse
                            </button>
                        )}
                    </div>
                )}

                <button type="submit" className="bg-blue-500 text-white w-full p-2 rounded-lg mt-2">Save All Expense</button>

            </form>
        </div>
    );
};

export default TripExpense;