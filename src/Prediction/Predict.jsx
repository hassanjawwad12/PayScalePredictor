import React, { useState } from "react";

const Predict = () => {
  const [age, setAge] = useState("");
  const [education, setEducation] = useState("");
  const [occupation, setOccupation] = useState("");
  const [hours, setHours] = useState("");
  const [gender, setGender] = useState("");
  const [workClass, setWorkClass] = useState("");

  const workOption = [
    "Federal-gov",
    "Local-gov",
    "Private",
    "Self-emp-inc",
    "Self-emp-not-inc",
    "State-gov",
    "Without-pay",
  ];

  const OccupationList = [
    "Adm-clerical",
    "Armed-Forces",
    "Craft-repair",
    "Exec-managerial",
    "Farming-fishing",
    "Handlers-cleaners",
    "Machine-op-inspct",
    "Other-service",
    "Priv-house-serv",
    "Prof-specialty",
    "Protective-serv",
    "Sales",
    "Tech-support",
    "Transport-moving",
  ];

  const educationOptions = [
    "10th",
    "11th",
    "12th",
    "1st-4th",
    "5th-6th",
    "7th-8th",
    "9th",
    "Assoc-acdm",
    "Assoc-voc",
    "Bachelors",
    "Doctorate",
    "HS-grad",
    "Masters",
    "Preschool",
    "Prof-school",
    "Some-college",
  ];

  const RaceList = [
    "Amer-Indian-Eskimo",
    "Asian-Pac-Islander",
    "Black",
    "Other",
    "White",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!age || !education || !occupation || !hours || !gender || !workClass) {
      alert("Please fill in all fields");
      return;
    }

    console.log("Input data:", { age, education, occupation, hours, gender });
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen w-full py-10"
      style={{
        backgroundColor: "rgb(67, 56, 202)",
        backgroundImage:
          "radial-gradient(at 13% 34%, rgb(156, 163, 175) 0, transparent 10%), radial-gradient(at 63% 4%, rgb(14, 116, 144) 0, transparent 18%), radial-gradient(at 95% 74%, rgb(129, 140, 248) 0, transparent 20%), radial-gradient(at 95% 75%, rgb(204, 251, 241) 0, transparent 90%), radial-gradient(at 51% 84%, rgb(23, 23, 23) 0, transparent 23%), radial-gradient(at 75% 63%, rgb(204, 251, 241) 0, transparent 63%)",
      }}
    >
      <div className="lg:w-[45%] md:w-[70%] w-[90%] flex flex-col justify-center items-center p-6 bg-white bg-opacity-20 rounded-lg shadow-lg ml-4 mr-4 overflow-y-auto ">
        <h1 className="text-white text-4xl font-bold text-center pt-4 pb-2 mt-4">
          Enter your Information!
        </h1>

        <form className="flex flex-col items-start justify-center gap-3 w-[90%]">
          <p className="text-white text-xl font-bold">Age</p>
          <input
            className="w-full p-2.5 rounded-lg focus:outline-none bg-indigo-400 text-white font-semibold"
            type="number"
            onChange={(e) => setAge(e.target.value)}
          />

          <p className="text-white text-xl font-bold">Hours</p>
          <input
            className="w-full p-2.5 rounded-lg focus:outline-none bg-indigo-400 text-white font-semibold"
            type="number"
            onChange={(e) => setHours(e.target.value)}
          />

          <p className="text-white text-xl font-bold">Gender</p>

          <select
            className="w-full p-2.5 rounded-lg focus:outline-none bg-indigo-400 text-white font-semibold"
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          <p className="text-white text-xl font-bold">Work-Class</p>
          <select
            className=" w-full p-2.5 rounded-lg focus:outline-none bg-indigo-400 text-white font-bold"
            onChange={(e) => setWorkClass(e.target.value)}
          >
            <option value="">Select Work-class</option>
            {workOption.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <p className="text-white text-xl font-bold">Education</p>
          <select
            className=" w-full p-2.5 rounded-lg focus:outline-none bg-indigo-400 text-white font-bold"
            onChange={(e) => setEducation(e.target.value)}
          >
            <option value="">Select Education</option>
            {educationOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <p className="text-white text-xl font-bold">Occupation</p>
          <select
            className=" w-full p-2.5 rounded-lg focus:outline-none bg-indigo-400 text-white font-bold"
            onChange={(e) => setOccupation(e.target.value)}
          >
            <option value="">Select Work-class</option>
            {OccupationList.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <p className="text-white text-xl font-bold">Race</p>
          <select
            className=" w-full p-2.5 rounded-lg focus:outline-none bg-indigo-400 text-white font-bold"
            onChange={(e) => setOccupation(e.target.value)}
          >
            <option value="">Select Race/Ethnicity</option>
            {RaceList.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </form>
        <button
          className="w-[50%] p-2 bg-cyan-400 text-white rounded-xl hover:font-bold hover:bg-purple-400 mt-8 items-center"
          onClick={handleSubmit}
        >
          Predict Salary
        </button>
      </div>
    </div>
  );
};

export default Predict;