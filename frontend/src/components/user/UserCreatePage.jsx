import React, { useState } from 'react';
import axios from 'axios';
// CSS removed as per your instructions

export default function UserCreatePage() {
  const [formData, setFormData] = useState({
    userType: '',
    name: '',
    address: '',
    phoneNumber: '',
    email: '',
    username: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.userType || !formData.name || !formData.address || !formData.phoneNumber || !formData.email || !formData.username || !formData.password) {
      setError('All fields are required.');
      return;
    }
    try {
      await axios.post('http://localhost:8000/users', formData);
      alert('User created successfully!');
    } catch (error) {
      console.log(error);
      setError('Failed to create user.');
    }
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-r from-blue-50 to-white">
      <div className="w-full p-10 flex flex-col items-center bg-white shadow-lg">
        <div className="w-full max-w-md">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Create User</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="userType"
                placeholder="Enter user type"
                onChange={handleChange}
                value={formData.userType}
                className="block w-full rounded-md h-10 outline-0 ps-3 mb-5 bg-gray-200"
              />
            </div>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Enter name"
                onChange={handleChange}
                value={formData.name}
                className="block w-full rounded-md h-10 outline-0 ps-3 mb-5 bg-gray-200"
              />
            </div>
            <div>
              <input
                type="text"
                name="address"
                placeholder="Enter address"
                onChange={handleChange}
                value={formData.address}
                className="block w-full rounded-md h-10 outline-0 ps-3 mb-5 bg-gray-200"
              />
            </div>
            <div>
              <input
                type="text"
                name="phoneNumber"
                placeholder="Enter phone number"
                onChange={handleChange}
                value={formData.phoneNumber}
                className="block w-full rounded-md h-10 outline-0 ps-3 mb-5 bg-gray-200"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                onChange={handleChange}
                value={formData.email}
                className="block w-full rounded-md h-10 outline-0 ps-3 mb-5 bg-gray-200"
              />
            </div>
            <div>
              <input
                type="text"
                name="username"
                placeholder="Enter username"
                onChange={handleChange}
                value={formData.username}
                className="block w-full rounded-md h-10 outline-0 ps-3 mb-5 bg-gray-200"
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                onChange={handleChange}
                value={formData.password}
                className="block w-full rounded-md h-10 outline-0 ps-3 mb-5 bg-gray-200"
              />
            </div>
            <p className="text-red-500 my-3">{error}</p>
            <button
              type="submit"
              className="w-full h-12 font-semibold text-lg px-5 py-2 rounded-md bg-[#2F5944] text-white hover:bg-[#214131] transition-all mb-2 mt-7"
            >
              Create User
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
