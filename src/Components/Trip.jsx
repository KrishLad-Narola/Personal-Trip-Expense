import React, { useState } from "react";

const Trip = () => {
    const [tripData, setTripData] = useState({
        placeName: "",
        budget: "",
    });

    const [displayField , setDisplayField] = useState(false);

    const handleChange = ({ target: { name, value } }) => {
        setTripData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { placeName, budget } = tripData;

        console.log("Place:", placeName);
        console.log("Budget:", budget);
        setDisplayField(true);
    };
     
    return (
        <div className="min-h-[90VH] w-full flex flex-col gap-10 items-center justify-center bg-cover bg-center bg-no-repeat p-4">
            <h1>PERSONAL TRIP EXPANSE</h1>

            <form 
            className="w-full max-w-sm p-8 bg-white/30 backdrop-blur-md border border-white/20 shadow-2xl rounded-2xl"
            onSubmit={handleSubmit}>

                <div className="mb-4">
                    <label className="block text-gray-800 text-sm font-semibold mb-1" htmlFor="placeName">Select Place</label>
                    <select
                        className="w-full p-2 bg-white/50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        id="placeName"
                        name="placeName"
                        value={tripData.placeName}
                        onChange={handleChange}
                    >
                        <option value="">Where We Go!</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Goa">Goa</option>
                        <option value="Manali">Manali</option>
                        <option value="Spitiwally">Spitiwally</option>
                        <option value="Kerala">Kerala</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-800 text-sm font-semibold mb-1" htmlFor="budget">Trip Budget</label>
                    <select
                        className="w-full p-2 bg-white/50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        id="budget"
                        name="budget"
                        value={tripData.budget}
                        onChange={handleChange}
                    >
                        <option value="">Trip Budget</option>
                        <option value="5000">5000</option>
                        <option value="10000">10000</option>
                        <option value="25000">25000</option>
                        <option value="35000">35000</option>
                        <option value="55000">55000</option>
                    </select>
                </div>

                <button 
                className="bg-blue-500 text-white w-full p-2 rounded-lg mt-2"
                type="submit">Let's Go!</button>
            </form>
        </div>
    );
};

export default Trip;