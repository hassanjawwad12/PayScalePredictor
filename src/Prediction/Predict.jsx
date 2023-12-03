import React, { useState } from "react";

const Predict = () => {
  const [age, setAge] = useState("");
  const [education, setEducation] = useState("");
  const [occupation, setOccupation] = useState("");
  const [hours, setHours] = useState("");
  const [gender, setGender] = useState("");
  const [workClass, setWorkClass] = useState("");
  const [race,setRace] = useState("");

  const workOption = [
    "workclass_Federal-gov",
    "workclass_Local-gov",
    "workclass_Private",
    "workclass_Self-emp-inc",
    "workclass_Self-emp-not-inc",
    "workclass_State-gov",
    "workclass_Without-pay",
  ];

  const OccupationList = [
    "occupation_Adm-clerical",
    "occupation_Armed-Forces",
    "occupation_Craft-repair",
    "occupation_Exec-managerial",
    "occupation_Farming-fishing",
    "occupation_Handlers-cleaners",
    "occupation_Machine-op-inspct",
    "occupation_Other-service",
    "occupation_Priv-house-serv",
    "occupation_Prof-specialty",
    "occupation_Protective-serv",
    "occupation_Sales",
    "occupation_Tech-support",
    "occupation_Transport-moving",
  ];

  const educationOptions = [
    "education_10th",
    "education_11th",
    "education_12th",
    "education_1st-4th",
    "education_5th-6th",
    "education_7th-8th",
    "education_9th",
    "education_Assoc-acdm",
    "education_Assoc-voc",
    "education_Bachelors",
    "education_Doctorate",
    "education_HS-grad",
    "education_Masters",
    "education_Preschool",
    "education_Prof-school",
    "education_Some-college",
  ];

  const RaceList = [
    "race_Amer-Indian-Eskimo",
    "race_Asian-Pac-Islander",
    "race_Black",
    "race_Other",
    "race_White",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!age || !education || !occupation || !hours || !gender || !workClass) {
      alert("Please fill in all fields");
      return;
    }

    // Initialize the data object with default values (0)
    const formData = {
      age: Number(age),
      hours: Number(hours),
      gender_Female: gender === "Female" ? 1 : 0,
      gender_Male: gender === "Male" ? 1 : 0,
       };

    // Set selected values to 1
    formData.age = Number(age);
    formData.hours = Number(hours);
    formData.gender = gender === "Male" ? 1 : 0;
    formData.workClass = {};
    workOption.forEach((option) => {
      formData.workClass[option.replace("-", "_")] =
        option === workClass ? 1 : 0;
    });
    formData.education = {};
    educationOptions.forEach((option) => {
      formData.education[option.replace("-", "_")] =
        option === education ? 1 : 0;
    });
    formData.occupation = {};
    OccupationList.forEach((option) => {
      formData.occupation[option.replace("-", "_")] =
        option === occupation ? 1 : 0;
    });
    formData.race = {};
    RaceList.forEach((option) => {
      formData.race[option.replace("-", "_")] = option === race ? 1 : 0;
    });

    console.log("Input data:", formData);
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
            onChange={(e) => setRace(e.target.value)}
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


  
 