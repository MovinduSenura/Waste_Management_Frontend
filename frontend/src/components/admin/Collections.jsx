import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

export default function Collections() {
    const navigate = useNavigate();
    const [collections, setCollections] = useState([]);
    const [editCollectionData, setEditCollectionData] = useState(null);

    useEffect(() => {
        fetchCollections();
    }, []);

    const fetchCollections = async () => {
        try {
            const response = await axios.get("http://localhost:8080/WasteManagement/collections");
            setCollections(response.data);
        } catch (error) {
            console.error("Error fetching collections: ", error);
        }
    };

    // Handle the edit operation (open modal or inline form)
    const handleEditCollection = (collection) => {
        // Set the selected collection data for editing
        setEditCollectionData(collection);
    };

    // Handle update submission
    const handleUpdateCollection = async () => {
        try {
            // Make a PUT request to update the collection
            await axios.put(
                `http://localhost:8080/WasteManagement/collections?id=${editCollectionData.collectionId}`,
                editCollectionData
            );
            // Fetch the updated collections
            fetchCollections();
            // Clear the edit data
            setEditCollectionData(null);
        } catch (error) {
            console.error("Error updating collection: ", error);
        }
    };

    // Handle input change in the edit form
    const handleInputChange = (e) => {
        setEditCollectionData({
            ...editCollectionData,
            [e.target.name]: e.target.value,
        });
    };

    // Handle the delete operation
    const handleDeleteCollection = async (collectionId) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this collection?");
        if (!confirmDelete) return;

        try {
            // Make DELETE request
            await axios.delete(`http://localhost:8080/WasteManagement/collections?id=${collectionId}`);
            // Update the UI by removing the deleted collection from state
            setCollections(collections.filter((collection) => collection.collectionId !== collectionId));
        } catch (error) {
            console.error("Error deleting collection: ", error);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-4xl text-center font-bold text-gray-800 my-6">Waste Collections</h2>
            <table className="min-w-full border border-collapse table-auto bg-gradient-to-r from-white via-gray-100 to-white rounded-xl overflow-hidden shadow-lg">
                <thead>
                    <tr className="bg-emerald-800 text-white text-sm tracking-wide">
                        <th className="py-3 px-4 font-bold uppercase border">Collection ID</th>
                        <th className="py-3 px-4 font-bold uppercase border">User ID</th>
                        <th className="py-3 px-4 font-bold uppercase border">Collection Date</th>
                        <th className="py-3 px-4 font-bold uppercase border">Waste Type</th>
                        <th className="py-3 px-4 font-bold uppercase border">Weight</th>
                        <th className="py-3 px-4 font-bold uppercase border">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {collections.length > 0 ? (
                        collections.map((collection) => (
                            <tr key={collection.collectionId} className="hover:bg-gray-200 transition-all text-center duration-300 ease-in-out">
                                <td className="py-2 px-2 font-semibold border">{collection.collectionId}</td>
                                <td className="py-2 px-2 font-semibold border">{collection.userId}</td>
                                <td className="py-2 px-2 font-semibold border">{collection.collectionDate}</td>
                                <td className="py-2 px-2 font-semibold border">{collection.wasteType}</td>
                                <td className="py-2 px-2 font-semibold border">{collection.weight}</td>
                                <td className="py-2 px-2 font-semibold border space-x-8">
                                    <button onClick={() => handleEditCollection(collection)}>
                                        <MdEdit size={25} className="text-indigo-600 hover:scale-110" />
                                    </button>
                                    <button onClick={() => handleDeleteCollection(collection.collectionId)}>
                                        <FaTrash size={20} className="text-red-600 hover:scale-110" />
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6" className="py-2 px-4 border text-center">
                                No collections found
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

            {editCollectionData && (
                <div>
                    <div></div>
                    <div className="mt-6 absolute bg-red-500 h-fit inset-0 w-8/12 m-auto p-10">
                        <h3 className="text-2xl mb-4">Edit Collection</h3>
                        <div className="space-y-2">
                            <input
                                type="text"
                                name="userId"
                                value={editCollectionData.userId}
                                onChange={handleInputChange}
                                placeholder="User ID"
                                className="border rounded p-2 w-full"
                            />
                            <input
                                type="text"
                                name="collectionDate"
                                value={editCollectionData.collectionDate}
                                onChange={handleInputChange}
                                placeholder="Collection Date"
                                className="border rounded p-2 w-full"
                            />
                            <input
                                type="text"
                                name="wasteType"
                                value={editCollectionData.wasteType}
                                onChange={handleInputChange}
                                placeholder="Waste Type"
                                className="border rounded p-2 w-full"
                            />
                            <input
                                type="number"
                                name="weight"
                                value={editCollectionData.weight}
                                onChange={handleInputChange}
                                placeholder="Weight"
                                className="border rounded p-2 w-full"
                            />
                            <button onClick={handleUpdateCollection} className="bg-blue-500 text-white p-2 rounded mt-2">
                                Update Collection
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
