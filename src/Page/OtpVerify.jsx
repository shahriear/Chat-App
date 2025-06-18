import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Log from './Log';
import { authServices } from '../services/api';
import { toast, ToastContainer } from 'react-toastify';

const OtpVerify = () => {
  const params = useParams().email;
  const navigate = useNavigate();
  const [otp, setOtp] = useState(Array(4).fill(''));

  const handelInputs = (item, i) => {
    let newOtp = [...otp];
    newOtp[i] = item;
    setOtp(newOtp);
  };

  const handelVerify = async e => {
    e.preventDefault();
    try {
      const res = await authServices.verifyOtp(params, otp.join(''));
      toast.success(res.success);
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };

  return (
    <div className="verify-otp-main">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick={false}
        rtl={false}
        theme="dark"
      />
      <form className="otp-Form">
        <span className="mainHeading">Enter OTP</span>
        <p className="otpSubheading">
          We have sent a verification code to your mobile number
        </p>
        <div className="inputContainer">
          {otp.map((item, i) => (
            <input
              key={i}
              onChange={e => handelInputs(e.target.value, i)}
              required="required"
              maxLength="1"
              type="text"
              className="otp-input"
              id="otp-input"
            />
          ))}
        </div>
        <button onClick={handelVerify} className="verifyButton" type="submit">
          Verify
        </button>
        {/* <button className="exitBtn">×</button> */}
        <p className="resendNote">
          Didn't receive the code?{' '}
          <button className="resendBtn">Resend Code</button>
        </p>
      </form>
    </div>
  );
};

export default OtpVerify;

// time:1:27:37
