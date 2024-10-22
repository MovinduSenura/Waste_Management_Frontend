import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

export default function Feedbacks() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [editFeedbackData, setEditFeedbackData] = useState(null);

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  // Fetch all feedback records
  const fetchFeedbacks = async () => {
    try {
      const response = await axios.get("http://localhost:8080/WasteManagement/feedbacks");
      setFeedbacks(response.data);
    } catch (error) {
      console.error("Error fetching feedbacks: ", error);
    }
  };

  // Handle the edit operation (open modal or inline form)
  const handleEditFeedback = (feedback) => {
    setEditFeedbackData(feedback); // Set the selected feedback data for editing
  };

  // Handle update submission
  const handleUpdateFeedback = async () => {
    try {
      await axios.put(
        `http://localhost:8080/WasteManagement/feedbacks?id=${editFeedbackData.feedbackId}`,
        editFeedbackData
      );
      fetchFeedbacks(); // Fetch the updated feedbacks
      setEditFeedbackData(null); // Clear the edit data
    } catch (error) {
        alert("cant edit")
      console.error("Error updating feedback: ", error);
    }
  };

  // Handle input change in the edit form
  const handleInputChange = (e) => {
    setEditFeedbackData({
      ...editFeedbackData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle the delete operation
  const handleDeleteFeedback = async (feedbackId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this feedback?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:8080/WasteManagement/feedbacks?id=${feedbackId}`);
      setFeedbacks(feedbacks.filter((feedback) => feedback.feedbackId !== feedbackId));
    } catch (error) {
      console.error("Error deleting feedback: ", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-4xl text-center font-bold text-gray-800 my-6">Feedbacks</h2>
      <table className="min-w-full border border-collapse table-auto bg-gradient-to-r from-white via-gray-100 to-white rounded-xl overflow-hidden shadow-lg">
        <thead>
          <tr className="bg-emerald-800 text-white text-sm tracking-wide">
            <th className="py-3 px-4 font-bold uppercase border">Feedback ID</th>
            <th className="py-3 px-4 font-bold uppercase border">User ID</th>
            <th className="py-3 px-4 font-bold uppercase border">Feedback Type</th>
            <th className="py-3 px-4 font-bold uppercase border">Message</th>
            <th className="py-3 px-4 font-bold uppercase border">Response Status</th>
            <th className="py-3 px-4 font-bold uppercase border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {feedbacks.length > 0 ? (
            feedbacks.map((feedback) => (
              <tr key={feedback.feedbackId} className="hover:bg-gray-200 transition-all text-center duration-300 ease-in-out">
                <td className="py-2 px-2 font-semibold border">{feedback.feedbackId}</td>
                <td className="py-2 px-2 font-semibold border">{feedback.userId}</td>
                <td className="py-2 px-2 font-semibold border">{feedback.feedbackType}</td>
                <td className="py-2 px-2 font-semibold border">{feedback.message}</td>
                <td className="py-2 px-2 font-semibold border">{feedback.responseStatus}</td>
                <td className="py-2 px-2 font-semibold border space-x-4">
                  <button onClick={() => handleEditFeedback(feedback)}>
                    <MdEdit size={27} className="text-indigo-600 hover:scale-110" />
                  </button>
                  <button onClick={() => handleDeleteFeedback(feedback.feedbackId)}>
                    <FaTrash size={27} className="text-red-600 hover:scale-110" />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="py-2 px-4 border text-center">
                No feedback found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {editFeedbackData && (
        <div className="mt-6">
          <h3 className="text-2xl mb-4">Edit Feedback</h3>
          <div className="space-y-2">
            <input
              type="text"
              name="feedbackType"
              value={editFeedbackData.feedbackType}
              onChange={handleInputChange}
              placeholder="Feedback Type"
              className="border rounded p-2 w-full"
            />
            <input
              type="text"
              name="message"
              value={editFeedbackData.message}
              onChange={handleInputChange}
              placeholder="Message"
              className="border rounded p-2 w-full"
            />
            <input
              type="text"
              name="responseStatus"
              value={editFeedbackData.responseStatus}
              onChange={handleInputChange}
              placeholder="Response Status"
              className="border rounded p-2 w-full"
            />
            <button onClick={handleUpdateFeedback} className="bg-blue-500 text-white p-2 rounded mt-2">
              Update Feedback
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
