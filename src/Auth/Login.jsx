import React from "react";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateEmail = (email) => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return regex.test(email);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      alert('Please enter a valid email.');
      return;
    }
    if (password.length < 8) {
      alert('Password must be at least 8 characters long.');
      return;
    }

    window.location.href = "/";
  };


  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen w-full"
      style={{
        backgroundColor: "rgb(67, 56, 202)",
        backgroundImage:
          "radial-gradient(at 13% 34%, rgb(156, 163, 175) 0, transparent 10%), radial-gradient(at 63% 4%, rgb(14, 116, 144) 0, transparent 18%), radial-gradient(at 95% 74%, rgb(129, 140, 248) 0, transparent 20%), radial-gradient(at 95% 75%, rgb(204, 251, 241) 0, transparent 90%), radial-gradient(at 51% 84%, rgb(23, 23, 23) 0, transparent 23%), radial-gradient(at 75% 63%, rgb(204, 251, 241) 0, transparent 63%)",
      }}
    >
      <div className="lg:w-[45%] md:w-[70%] w-[90%] flex flex-col  justify-center items-center p-6 bg-white bg-opacity-20 rounded-lg shadow-lg ml-4 mr-4">
        <h1 className="text-white text-4xl font-bold text-center py-2">
          Login!
        </h1>

        <form className="flex flex-col items-start justify-center gap-3 w-[90%]">
          <p className="text-white text-xl font-bold">Email</p>
          <input
            className="w-full p-2.5 rounded-lg focus:outline-none bg-indigo-400 text-white font-semibold"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="text-white text-xl font-bold">Password</p>
          <input
            className="w-full p-2.5 rounded-lg focus:outline-none bg-indigo-400 text-white font-semibold"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <p className="py-5 text-lg font-semibold">
            Don {"'"}t have an account ⁉{" "}
            <span
              onClick={() => {
                window.location.href = "/signup";
              }}
              className="text-blue-600 font-bold hover:font-extrabold cursor-pointer underlinev tracking-wide"
            >
              Signup
            </span>{" "}
          </p>
        </form>
        <button
        onClick={handleSignIn}
         className="w-[50%] p-2 bg-cyan-400 text-white rounded-xl mt-4 hover:font-bold hover:bg-purple-400">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
