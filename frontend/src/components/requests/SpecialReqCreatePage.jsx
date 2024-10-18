import React, { useState } from 'react';
import axios from 'axios';
// CSS removed as per your instructions

export default function SpecialReqCreatePage() {
  const [formData, setFormData] = useState({
    userId: '',
    requestDate: '',
    wasteType: '',
    requestedPickupDate: '',
    additionalDetails: '',
    status: ''
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
    if (!formData.userId || !formData.requestDate || !formData.wasteType || !formData.requestedPickupDate || !formData.status) {
      setError('All fields are required.');
      return;
    }
    try {
      await axios.post('http://localhost:8000/specialrequests', formData);
      alert('Special request submitted successfully!');
    } catch (error) {
      console.log(error);
      setError('Failed to submit special request.');
    }
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-r from-blue-50 to-white">
      <div className="w-full p-10 flex flex-col items-center bg-white shadow-lg">
        <div className="w-full max-w-md">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Submit Special Request</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="userId"
                placeholder="Enter user ID"
                onChange={handleChange}
                value={formData.userId}
                className="block w-full rounded-md h-10 outline-0 ps-3 mb-5 bg-gray-200"
              />
            </div>
            <div>
              <input
                type="date"
                name="requestDate"
                onChange={handleChange}
                value={formData.requestDate}
                className="block w-full rounded-md h-10 outline-0 ps-3 mb-5 bg-gray-200"
              />
            </div>
            <div>
              <input
                type="text"
                name="wasteType"
                placeholder="Enter waste type"
                onChange={handleChange}
                value={formData.wasteType}
                className="block w-full rounded-md h-10 outline-0 ps-3 mb-5 bg-gray-200"
              />
            </div>
            <div>
              <input
                type="date"
                name="requestedPickupDate"
                onChange={handleChange}
                value={formData.requestedPickupDate}
                className="block w-full rounded-md h-10 outline-0 ps-3 mb-5 bg-gray-200"
              />
            </div>
            <div>
              <input
                type="text"
                name="additionalDetails"
                placeholder="Enter additional details"
                onChange={handleChange}
                value={formData.additionalDetails}
                className="block w-full rounded-md h-10 outline-0 ps-3 mb-5 bg-gray-200"
              />
            </div>
            <div>
              <input
                type="text"
                name="status"
                placeholder="Enter status"
                onChange={handleChange}
                value={formData.status}
                className="block w-full rounded-md h-10 outline-0 ps-3 mb-5 bg-gray-200"
              />
            </div>
            <p className="text-red-500 my-3">{error}</p>
            <button
              type="submit"
              className="w-full h-12 font-semibold text-lg px-5 py-2 rounded-md bg-[#2F5944] text-white hover:bg-[#214131] transition-all mb-2 mt-7"
            >
              Submit Special Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
