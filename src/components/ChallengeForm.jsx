import React, { useState } from 'react';

const ChallengeForm = () => {
  const [formData, setFormData] = useState({
    challengeName: '',
    startDate: '',
    endDate: '',
    description: '',
    image: null,
    levelType: 'Easy',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({ ...prevData, image: file }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Challenge Created!');
    // Here, you can send the formData to your server using an API call
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6 text-black">Challenge Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="challengeName" className="block font-medium mb-2 text-black">Challenge Name</label>
          <input
            type="text"
            id="challengeName"
            name="challengeName"
            value={formData.challengeName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md text-black"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="startDate" className="block font-medium mb-2 text-black">Start Date</label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md text-black"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="endDate" className="block font-medium mb-2 text-black">End Date</label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md text-black"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block font-medium mb-2 text-black">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md text-black"
            rows="4"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="image" className="block font-medium mb-2 text-black">Image</label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleImageUpload}
            className="w-full p-2 border border-gray-300 rounded-md text-black"
            accept="image/*"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="levelType" className="block font-medium mb-2 text-black">Level Type</label>
          <select
            id="levelType"
            name="levelType"
            value={formData.levelType}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md text-black"
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full p-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
        >
          Create Challenge
        </button>
      </form>
    </div>
  );
};

export default ChallengeForm;
