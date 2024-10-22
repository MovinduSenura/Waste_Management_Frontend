import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";
// CSS removed as per your instructions

export default function SchedulesCreatePage() {


  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userId: '',
    pickupDate: '',
    wasteType: '',
    collectionArea: ''
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
    if (!formData.userId || !formData.pickupDate || !formData.wasteType || !formData.collectionArea) {
      setError('All fields are required.');
      return;
    }
    try {
      await axios.post('http://localhost:8080/WasteManagement/schedules?action=create', formData);
      alert('Schedule created successfully!');

      navigate('/admindash')
    } catch (error) {
      console.log(error);
      setError('Failed to create schedule.');
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center">
      <div className="w-full h-full p-10 flex flex-col items-center">
        <div className="w-full max-w-md">
          <div className='bg-red-00 inline-flex justify-between w-full'>
            <button className="mb-6" onClick={() => navigate('/admindash')}>
              <IoMdArrowRoundBack className="text-emerald-800 size-7" />
            </button>
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Create Schedule</h2>
          </div>
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
                name="pickupDate"
                onChange={handleChange}
                value={formData.pickupDate}
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
                type="text"
                name="collectionArea"
                placeholder="Enter collection area"
                onChange={handleChange}
                value={formData.collectionArea}
                className="block w-full rounded-md h-10 outline-0 ps-3 mb-5 bg-gray-200"
              />
            </div>
            <p className="text-red-500 my-3">{error}</p>
            <button
              type="submit"
              className="w-full h-12 font-semibold text-lg px-5 py-2 rounded-md bg-[#2F5944] text-white hover:bg-[#214131] transition-all mb-2 mt-7"
            >
              Create Schedule
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
