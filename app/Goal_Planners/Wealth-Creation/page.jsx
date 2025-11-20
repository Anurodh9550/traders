"use client";

import { useState } from "react";

export default function WealthCreationPage() {
    const [age, setAge] = useState("");
    const [amount, setAmount] = useState("");
    const [afterYears, setAfterYears] = useState("");
    const [inflation, setInflation] = useState("");
    const [returns, setReturns] = useState("");
    const [risk, setRisk] = useState("Conservative");

    return (
        <div className="w-full">

            
            
            <section className="w-full bg-[#e9f4ff] pt-12 pb-8 shadow-sm mt-20">
                <h1 className="text-4xl font-semibold text-center text-gray-900">
                    Wealth Creation
                </h1>

                <p className="text-center text-gray-600 mt-2">
                    Home / Goal / <span className="text-green-600 font-medium">Wealth Creation</span>
                </p>
            </section>

          
            <section className="w-full py-16 flex justify-center">
                <div className="bg-white rounded-xl shadow-2xl p-12 max-w-6xl w-full">
                    <div className="text-gray-700 text-[18px] leading-relaxed space-y-14">

                        
                        <p className="text-center">
                            You are
                            <input
                                type="number"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                                className="mx-2 border-b border-gray-400 focus:border-blue-600 outline-none w-24 text-center pb-1"
                            />
                            years old now you require Rs
                            <input
                                type="number"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                className="mx-2 border-b border-gray-400 focus:border-blue-600 outline-none w-40 text-center pb-1"
                            />
                            at today's value after
                            <input
                                type="number"
                                value={afterYears}
                                onChange={(e) => setAfterYears(e.target.value)}
                                className="mx-2 border-b border-gray-400 focus:border-blue-600 outline-none w-20 text-center pb-1"
                            />
                            years
                        </p>

                       
                        <p className="text-center">
                            for becoming wealthy. You assume the inflation to be
                            <input
                                type="number"
                                value={inflation}
                                onChange={(e) => setInflation(e.target.value)}
                                className="mx-2 border-b border-gray-400 focus:border-blue-600 outline-none w-20 text-center pb-1"
                            />
                            % and expect
                            <input
                                type="number"
                                value={returns}
                                onChange={(e) => setReturns(e.target.value)}
                                className="mx-2 border-b border-gray-400 focus:border-blue-600 outline-none w-20 text-center pb-1"
                            />
                            % return on your investments.
                        </p>

                        
                        <p className="text-center">
                            You can take
                            <select
                                value={risk}
                                onChange={(e) => setRisk(e.target.value)}
                                className="mx-2 border-b border-gray-400 focus:border-blue-600 outline-none pb-1 bg-transparent text-center"
                            >
                                <option value="Conservative">Conservative</option>
                                <option value="Moderate">Moderate</option>
                                <option value="Aggressive">Aggressive</option>
                            </select>
                            risk with your investments.
                        </p>

                      
                        <div className="text-center pt-6">
                            <button className="px-12 py-3 bg-blue-900 text-white rounded-md font-semibold hover:bg-blue-800 transition">
                                Build My Goal
                            </button>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
}
