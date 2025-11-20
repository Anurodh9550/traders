"use client";

import { useState } from "react";

export default function RetirementGoalPage() {
  const [age, setAge] = useState("");
  const [retireAge, setRetireAge] = useState("");
  const [lifeExpectancy, setLifeExpectancy] = useState("");
  const [expenses, setExpenses] = useState("");
  const [inflation, setInflation] = useState("");
  const [returns, setReturns] = useState("");
  const [savedAmount, setSavedAmount] = useState("");
  const [goalName, setGoalName] = useState("");
  const [risk, setRisk] = useState("Conservative");

  return (
    <div className="w-full">

      
      <section className="w-full bg-[#e9f4ff] pt-12 pb-8 shadow-sm mt-20">
        <h1 className="text-4xl font-semibold text-center text-gray-900">
          Retirement
        </h1>

        <p className="text-center text-gray-600 mt-2">
          Home / Goal / <span className="text-green-600 font-medium">Retirement</span>
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
                className="mx-2 border-b border-gray-400 focus:border-blue-600 outline-none w-28 pb-1 text-center"
              />
              years old and want to retire at age
              <input
                type="number"
                value={retireAge}
                onChange={(e) => setRetireAge(e.target.value)}
                className="mx-2 border-b border-gray-400 focus:border-blue-600 outline-none w-28 pb-1 text-center"
              />
              years and your life expectancy is
              <input
                type="number"
                value={lifeExpectancy}
                onChange={(e) => setLifeExpectancy(e.target.value)}
                className="mx-2 border-b border-gray-400 focus:border-blue-600 outline-none w-28 pb-1 text-center"
              />
              years.
            </p>

           
            <p className="text-center">
              Your current monthly household expenses are
              <input
                type="number"
                value={expenses}
                onChange={(e) => setExpenses(e.target.value)}
                className="mx-2 border-b border-gray-400 focus:border-blue-600 outline-none w-40 pb-1 text-center"
              />
              . You assume the inflation to be
              <input
                type="number"
                value={inflation}
                onChange={(e) => setInflation(e.target.value)}
                className="mx-2 border-b border-gray-400 focus:border-blue-600 outline-none w-24 pb-1 text-center"
              />
              % and expect
              <input
                type="number"
                value={returns}
                onChange={(e) => setReturns(e.target.value)}
                className="mx-2 border-b border-gray-400 focus:border-blue-600 outline-none w-24 pb-1 text-center"
              />
              % earning on retirement corpus.
            </p>

          
            <p className="text-center">
              You have already saved
              <input
                type="number"
                value={savedAmount}
                onChange={(e) => setSavedAmount(e.target.value)}
                className="mx-2 border-b border-gray-400 focus:border-blue-600 outline-none w-40 pb-1 text-center"
              />
              for your Retirement. You would like to name this goal as
              <input
                type="text"
                value={goalName}
                onChange={(e) => setGoalName(e.target.value)}
                className="mx-2 border-b border-gray-400 focus:border-blue-600 outline-none w-40 pb-1 text-center"
              />
              .
            </p>

            
            <p className="text-center">
              You can take
              <select
                value={risk}
                onChange={(e) => setRisk(e.target.value)}
                className="mx-2 border-b border-gray-400 outline-none bg-transparent pb-1"
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
