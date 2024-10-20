import React, { useState } from 'react';
import './Login.css'
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import { jwtDecode } from 'jwt-decode';

export default function Login() {

  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
      userName: '',
      password: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
      setLoginData({
          ...loginData,
          [e.target.name]: e.target.value,
      });
      setError('');
  };

  const loginUser = async (e) => {
      e.preventDefault();

      if (!loginData.userName || !loginData.password) {
          setError('Username and Password are required.');
          return;
      }

      try {
          const response = await axios.post("http://localhost:8000/login", loginData);
          const { token, userName } = response.data;

          localStorage.setItem('token', token);
          localStorage.setItem('userName', userName);

          console.log("Saved Role : ",userName)

          alert("Login Successful!");
          navigate(`/${userName}`);//linking
      } catch (error) {
          console.log(error);
          setError(error.response?.data?.message || "Login Unsuccessful!");
          alert("Login Unsuccessful!");
      }
  };

  return (
      <div className="min-h-screen flex bg-gradient-to-r from-blue-50 to-white">
          {/* Left Side - Form */}
          <div className="w-full md:w-1/3 p-10 flex items-center justify-center bg-white shadow-lg">
              <div className="w-full max-w-md">
                  <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Login</h2>
                  <form onSubmit={loginUser}>
                      <div>
                          <input
                              type="text"
                              name="userName"
                              id="userName"
                              placeholder="Enter username"
                              onChange={handleChange}
                              value={loginData.userName}
                              className="block w-full rounded-md h-10 outline-0 ps-3 mb-5 bg-gray-200" />
                      </div>
                      <div>
                          <input
                              type="password"
                              name="password"
                              id="password"
                              placeholder="Enter password"
                              onChange={handleChange}
                              value={loginData.password}
                              className="block w-full rounded-md h-10 outline-0 ps-3 mb-0 bg-gray-200" />
                      </div>
                      <p className="text-red-500 my-3 mt-2">{error}</p>
                      <button
                          type="submit"
                          className="w-full h-12 font-semibold text-lg px-5 py-2 rounded-md bg-[#2F5944] text-white hover:bg-[#214131] transition-all mb-2 mt-7">
                          Login
                      </button>
                      <p className='text-right'>No account yet? <a className='text-[#2F5944]' href="#">Register here</a></p>
                  </form>
              </div>
          </div>
  
          {/* Right Side - Background Image */}
          <div className="hidden md:block md:w-2/3 bg-cover bg-right">
              {/* Optional content inside the illustration */}
          </div> 
      </div>
  );
  
}
