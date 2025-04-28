import React from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
  return (
    <section className=" min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <form className="flex flex-col gap-4 p-6 bg-white rounded shadow-md ">
          <div className="text-xl text-white bg-[#086FA4] max-w-fit py-3 px-8 rounded-3xl m-auto ">
            <h1>ChatApp</h1>
          </div>
          <span className="text-2xl font-bold text-center mb-">Register</span>
          <p className="text-sm text-gray-400 mt- text-center ">
            Free register and you can enjoy it
          </p>

          <label htmlFor="email" className="text-sm font-medium">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="border border-gray-300 rounded px-3 py-2"
          />

          <label htmlFor="username" className="text-sm font-medium">
            Fullname
          </label>
          <input
            type="text"
            id="username"
            name="username"
            required
            className="border border-gray-300 rounded px-3 py-2"
          />

          <label htmlFor="password" className="text-sm font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className="border border-gray-300 rounded px-3 py-2"
          />

          <Link
            to="/login"
            type="submit"
            className="w-full bg-[#086FA4]  text-white py-2 rounded-2xl hover:bg-blue-700 transition duration-200  text-center"
          >
            Register
          </Link>
          <div className="text-center mt- text-sm text-gray-400">
            Already have an account?
            <Link to="/login" className="text-blue-600 hover:underline">
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Registration;
