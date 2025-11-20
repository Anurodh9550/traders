"use client";
import { useState } from "react";

export default function EmergencyGoal() {
    
    const [age, setAge] = useState("");
    const [expenses, setExpenses] = useState("");
    const [inflation, setInflation] = useState("");
    const [goalName, setGoalName] = useState("");
    const [risk, setRisk] = useState("Conservative");

    const [showPopup, setShowPopup] = useState(false);

    const handleSubmit = () => {
        if (!age || !expenses || !inflation || !goalName) {
            setShowPopup(true);
            return;
        }
        alert("Goal Submitted Successfully!");
    };

    return (
        <div className="w-full">

          
            <section className="w-full bg-[#e9f4ff] pt-10 pb-8 shadow-sm mt-20">
                <h1 className="text-4xl font-semibold text-center text-gray-800">
                    Emergency
                </h1>

                <p className="text-center text-gray-600 mt-2">
                    Home / Goal / <span className="text-green-600">Emergency</span>
                </p>
            </section>

            
            <section className="w-full py-16 flex justify-center">
                <div className="bg-white rounded-xl shadow-2xl p-12 max-w-6xl w-full">
                    
                    <div className="text-gray-700 text-[18px] leading-relaxed space-y-10">

                        
                        <p className="text-center">
                            You are 
                            <input
                                type="number"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                                className="mx-2 border-b border-gray-400 w-28 text-center pb-1 outline-none"
                            />
                            years old now and your average monthly expenses are 
                            <input
                                type="number"
                                value={expenses}
                                onChange={(e) => setExpenses(e.target.value)}
                                className="mx-2 border-b border-gray-400 w-40 text-center pb-1 outline-none"
                            />
                            .
                        </p>

                       
                        <p className="text-center">
                            You assume the inflation to be
                            <input
                                type="number"
                                value={inflation}
                                onChange={(e) => setInflation(e.target.value)}
                                className="mx-2 border-b border-gray-400 w-24 text-center pb-1 outline-none"
                            />
                            % and You would like to name this goal as
                            <input
                                type="text"
                                value={goalName}
                                onChange={(e) => setGoalName(e.target.value)}
                                className="mx-2 border-b border-gray-400 w-40 text-center pb-1 outline-none"
                            />
                            .
                        </p>

                        
                        <p className="text-center">
                            You can take
                            <select
                                value={risk}
                                onChange={(e) => setRisk(e.target.value)}
                                className="mx-2 border-b border-gray-400 pb-1 outline-none"
                            >
                                <option>Conservative</option>
                                <option>Moderate</option>
                                <option>Aggressive</option>
                            </select>
                            risk with your investments.
                        </p>

                        
                        <div className="text-center pt-6">
                            <button
                                onClick={handleSubmit}
                                className="px-12 py-3 bg-blue-900 text-white rounded-md font-semibold hover:bg-blue-800 transition"
                            >
                                Build My Goal
                            </button>
                        </div>

                       
                        {showPopup && (
                            <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
                                <div className="bg-white rounded-xl shadow-xl p-8 w-[380px] text-center">
                                    <p className="text-gray-700 text-lg mb-6">
                                        Please fill all fields correctly
                                    </p>

                                    <button
                                        onClick={() => setShowPopup(false)}
                                        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                                    >
                                        OK
                                    </button>
                                </div>
                            </div>
                        )}

                    </div>

                </div>
            </section>
        </div>
    );
}
