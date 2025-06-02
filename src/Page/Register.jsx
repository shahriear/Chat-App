import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import React, { useState } from 'react';
import { authServices } from '../services/api';

const Register = () => {
  const navigate = useNavigate();
  const [regData, setRegData] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  // console.log(import.meta.env.VITE_API_BASE_URL);

  const handelReg = async e => {
    e.preventDefault();
    try {
      const res = await authServices.registration(regData);

      toast.success(res.success);
      setTimeout(() => {
        navigate(`/verify-otp/${regData.email}`);
      }, 2000);
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };
  return (
    <section className="min-h-screen flex items-center justify-center outSide">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick={false}
        rtl={false}
        theme="light"
      />
      <div className="container">
        <div className="text-xl text-white font-semibold text-center mb-4 bg-[#86cff4] py-3 px-8 rounded-b-4xl  ">
          <h1>ChatApp</h1>
        </div>
        <div className="heading">Registration</div>

        <form onSubmit={handelReg} className="form">
          <input
            onChange={e =>
              setRegData(prev => ({ ...prev, email: e.target.value }))
            }
            placeholder="Enter your Email"
            type="email"
            id="email"
            name="email"
            className="input"
          />
          <input
            onChange={e =>
              setRegData(prev => ({ ...prev, fullName: e.target.value }))
            }
            placeholder="Enter your FullName"
            type="text"
            id="username"
            name="username"
            className="input"
          />
          <input
            onChange={e =>
              setRegData(prev => ({ ...prev, password: e.target.value }))
            }
            placeholder="Enter your Password"
            type="password"
            id="password"
            name="password"
            className="input"
          />
          <span className="forgot-password">
            <a href="#">Forgot Password ?</a>
          </span>

          <button className="login-button" type="submit">
            Register
          </button>
        </form>
        <div className="social-account-container">
          <span className="title">Or Sign in with</span>
          <div className="social-accounts">
            <button className="social-button google">
              <svg
                className="svg"
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 488 512"
              >
                <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
              </svg>
            </button>
            <button className="social-button apple">
              <svg
                className="svg"
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 384 512"
              >
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path>
              </svg>
            </button>
            <button className="social-button twitter">
              <svg
                className="svg"
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
              >
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
              </svg>
            </button>
          </div>
        </div>
        <span className="agreement">
          <div className="text-center mt- text-sm text-gray-400">
            Already have an account?
            <Link to={'/log'}> Login</Link>
          </div>
        </span>
      </div>
    </section>

    // ================================

    // <section className=" min-h-screen flex items-center justify-center bg-gray-100">
    //   <ToastContainer
    //     position="top-right"
    //     autoClose={5000}
    //     hideProgressBar={false}
    //     closeOnClick={false}
    //     rtl={false}
    //     theme="dark"
    //   />
    //   <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
    //     <div className="m-auto max-w-fit text-center">
    //       <div className="text-xl text-white bg-[#086FA4] py-3 px-8 rounded-3xl  ">
    //         <h1>ChatApp</h1>
    //       </div>
    //       <p className="text-2xl font-bold text-center my-3">Register</p>
    //       <p className="text-sm text-gray-400  text-center ">
    //         Free register and you can enjoy it
    //       </p>
    //     </div>
    //     <form
    //       onSubmit={handelReg}
    //       className="flex flex-col gap-4 p-6 bg-white rounded shadow-md "
    //     >
    //       <label htmlFor="email" className="text-sm font-medium">
    //         Email Address
    //       </label>
    //       <input
    //         onChange={e =>
    //           setRegData(prev => ({ ...prev, email: e.target.value }))
    //         }
    //         placeholder="Enter your Email"
    //         type="email"
    //         id="email"
    //         name="email"
    //         className="border border-gray-300 rounded px-3 py-2"
    //       />

    //       <label htmlFor="username" className="text-sm font-medium">
    //         Fullname
    //       </label>
    //       <input
    //         onChange={e =>
    //           setRegData(prev => ({ ...prev, fullName: e.target.value }))
    //         }
    //         placeholder="Enter your FullName"
    //         type="text"
    //         id="username"
    //         name="username"
    //         className="border border-gray-300 rounded px-3 py-2"
    //       />

    //       <label htmlFor="password" className="text-sm font-medium">
    //         Password
    //       </label>
    //       <input
    //         onChange={e =>
    //           setRegData(prev => ({ ...prev, password: e.target.value }))
    //         }
    //         placeholder="Enter your Password"
    //         type="password"
    //         id="password"
    //         name="password"
    //         className="border border-gray-300 rounded px-3 py-2"
    //       />

    //       <button
    //         type="submit"
    //         className="w-full bg-[#086FA4]  text-white py-2 rounded-2xl hover:bg-blue-700 transition duration-200  text-center"
    //       >
    //         Register
    //       </button>
    //       <div className="text-center mt- text-sm text-gray-400">
    //         Already have an account?
    //         <Link to="/login" className="text-blue-600 hover:underline">
    //           Login
    //         </Link>
    //       </div>
    //     </form>
    //   </div>
    // </section>
  );
};

export default Register;

// time:56:49 cls-26
