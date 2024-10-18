import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function FeedbackCreatePage() {
  const [formData, setFormData] = useState({
    userId: '',
    feedbackType: '',
    message: '',
    responseStatus: ''
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
    if (!formData.userId || !formData.feedbackType || !formData.message || !formData.responseStatus) {
      setError('All fields are required.');
      return;
    }
    try {
      await axios.post('http://localhost:8000/feedback', formData);
      alert('Feedback submitted successfully!');
    } catch (error) {
      console.log(error);
      setError('Failed to submit feedback.');
    }
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-r from-blue-50 to-white">
      <div className="w-full p-10 flex flex-col items-center bg-white shadow-lg">
        <div className="w-full max-w-md">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Submit Feedback</h2>
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
                type="text"
                name="feedbackType"
                placeholder="Enter feedback type"
                onChange={handleChange}
                value={formData.feedbackType}
                className="block w-full rounded-md h-10 outline-0 ps-3 mb-5 bg-gray-200"
              />
            </div>
            <div>
              <input
                type="text"
                name="message"
                placeholder="Enter message"
                onChange={handleChange}
                value={formData.message}
                className="block w-full rounded-md h-10 outline-0 ps-3 mb-5 bg-gray-200"
              />
            </div>
            <div>
              <input
                type="text"
                name="responseStatus"
                placeholder="Enter response status"
                onChange={handleChange}
                value={formData.responseStatus}
                className="block w-full rounded-md h-10 outline-0 ps-3 mb-5 bg-gray-200"
              />
            </div>
            <p className="text-red-500 my-3">{error}</p>
            <button
              type="submit"
              className="w-full h-12 font-semibold text-lg px-5 py-2 rounded-md bg-[#2F5944] text-white hover:bg-[#214131] transition-all mb-2 mt-7"
            >
              Submit Feedback
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}