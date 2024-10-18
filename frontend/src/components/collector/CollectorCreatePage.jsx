import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function CollectorCreatePage() {
  const [formData, setFormData] = useState({
    routeName: '',
    startLocation: '',
    endLocation: '',
    assignedTruck: '',
    collectionDate: ''
  });
  const [routes, setRoutes] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchRoutes();
  }, []);

  const fetchRoutes = async () => {
    try {
      const response = await axios.get('http://localhost:8000/collectionroutes');
      setRoutes(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.routeName || !formData.startLocation || !formData.endLocation || !formData.assignedTruck || !formData.collectionDate) {
      setError('All fields are required.');
      return;
    }
    try {
      await axios.post('http://localhost:8000/collectionroutes', formData);
      alert('Route added successfully!');
      fetchRoutes();
    } catch (error) {
      console.log(error);
      setError('Failed to add route.');
    }
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-r from-blue-50 to-white">
      <div className="w-full p-10 flex flex-col items-center bg-white shadow-lg">
        <div className="w-full max-w-md">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Add Collection Route</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="routeName"
                placeholder="Enter route name"
                onChange={handleChange}
                value={formData.routeName}
                className="block w-full rounded-md h-10 outline-0 ps-3 mb-5 bg-gray-200"
              />
            </div>
            <div>
              <input
                type="text"
                name="startLocation"
                placeholder="Enter start location"
                onChange={handleChange}
                value={formData.startLocation}
                className="block w-full rounded-md h-10 outline-0 ps-3 mb-5 bg-gray-200"
              />
            </div>
            <div>
              <input
                type="text"
                name="endLocation"
                placeholder="Enter end location"
                onChange={handleChange}
                value={formData.endLocation}
                className="block w-full rounded-md h-10 outline-0 ps-3 mb-5 bg-gray-200"
              />
            </div>
            <div>
              <input
                type="text"
                name="assignedTruck"
                placeholder="Enter assigned truck"
                onChange={handleChange}
                value={formData.assignedTruck}
                className="block w-full rounded-md h-10 outline-0 ps-3 mb-5 bg-gray-200"
              />
            </div>
            <div>
              <input
                type="date"
                name="collectionDate"
                onChange={handleChange}
                value={formData.collectionDate}
                className="block w-full rounded-md h-10 outline-0 ps-3 mb-5 bg-gray-200"
              />
            </div>
            <p className="text-red-500 my-3">{error}</p>
            <button
              type="submit"
              className="w-full h-12 font-semibold text-lg px-5 py-2 rounded-md bg-[#2F5944] text-white hover:bg-[#214131] transition-all mb-2 mt-7"
            >
              Add Route
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
