"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function DreamHomePage() {
  const router = useRouter();

  const [age, setAge] = useState("");
  const [houseCost, setHouseCost] = useState("");
  const [inflation, setInflation] = useState("");
  const [goalName, setGoalName] = useState("");
  const [risk, setRisk] = useState("Conservative");

  
  const [loginOpen, setLoginOpen] = useState(false);

  const handleBuild = () => {
  if (!age || !houseCost || !inflation) {
    alert("Please fill required fields");
    return;
  }

  const q = new URLSearchParams({
    age: String(age),
    cost: String(houseCost),
    inflation: String(inflation),
    goal: goalName || "Dream Home",
    risk
  }).toString();

router.push(`/Goal_Planners/summary_goal?${q}`);



  };

  return (
    <div className="w-full">
     
      <section className="w-full bg-[#e9f4ff] pt-12 pb-8 shadow-sm mt-20">
        <h1 className="text-4xl font-semibold text-center text-gray-900">
          Dream home
        </h1>
        <p className="text-center text-gray-600 mt-2">
          Home / Goal / <span className="text-green-600 font-medium">Dream home</span>
        </p>
      </section>

   
      <section className="w-full py-16 flex justify-center">
        <div className="bg-white rounded-xl shadow-2xl p-12 max-w-6xl w-full">
          <div className="text-gray-700 text-[18px] leading-relaxed space-y-14">

            <p className="text-center">
              You are planning to buy your Dream House
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="mx-2 border-b border-gray-400 focus:border-blue-600 outline-none w-32 text-center pb-1"
                placeholder="Years"
              />
              years. The cost of this House would be around
              <input
                type="number"
                value={houseCost}
                onChange={(e) => setHouseCost(e.target.value)}
                className="mx-2 border-b border-gray-400 focus:border-blue-600 outline-none w-40 text-center pb-1"
                placeholder="Amount"
              />
              in today's value.
            </p>

            <p className="text-center">
              <input
                type="number"
                value={inflation}
                onChange={(e) => setInflation(e.target.value)}
                className="mx-2 border-b border-gray-400 focus:border-blue-600 outline-none w-24 text-center pb-1"
                placeholder="%"
              />
              % and You would like to name this goal as
              <input
                type="text"
                value={goalName}
                onChange={(e) => setGoalName(e.target.value)}
                className="mx-2 border-b border-gray-400 focus:border-blue-600 outline-none w-44 text-center pb-1"
                placeholder="Goal name"
              />
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

            <div className="text-center pt-6 flex justify-center gap-6">
              <button
                onClick={handleBuild}
                className="px-10 py-3 bg-blue-900 text-white rounded-md font-semibold hover:bg-blue-800 transition"
              >
                Build My Goal
              </button>

              
              
            </div>

          </div>
        </div>
      </section>

      
      
    </div>
  );
}
