import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 ">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="text-xl text-white bg-[#086FA4] max-w-fit py-3 px-8 rounded-3xl m-auto">
          <h1>ChatApp</h1>
        </div>
        <form className="space-y-6 bg-white shadow-md p-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 text-center pt-3">
              Login
            </h2>
            <p className="text-sm text-gray-400 mt-1 text-center ">
              Free register and you can enjoy it
            </p>
          </div>

          <div className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#086FA4]  text-white py-2 rounded-2xl hover:bg-blue-700 transition duration-200 "
          >
            Sign up
          </button>
          <div className="text-center mt- text-sm text-gray-400">
            Register Now ?
            <Link to="/registration" className="text-blue-600 hover:underline">
              Sign In
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
