import React from 'react';

const ButterflyIdentification = () => {
  const handleEdit = () => {
    console.log('Edit button clicked');
    alert('Edit button clicked');
  };

  const handleDelete = () => {
    console.log('Delete button clicked');
    alert('Delete button clicked');
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <div className="bg-white text-black rounded-lg shadow-lg w-full max-w-4xl p-8">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">
            Data Sprint 72 - Butterfly Identification
          </h1>
          <span className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg">
            Starts on 17th Jun'22 09:00 PM (India Standard Time)
          </span>
        </div>

        {/* Subheading */}
        <p className="text-xl mb-4">
          Identify the class to which each butterfly belongs to
        </p>

        {/* Difficulty Badge */}
        <div className="flex items-center mb-6">
          <span className="bg-gray-200 text-black px-3 py-1 rounded-full text-sm">
            Easy
          </span>
        </div>

        {/* Description Section */}
        <div className="border-t-2 border-gray-300 pt-4">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-gray-700 mb-4">
            Butterflies are the adult flying stage of certain insects belonging
            to an order or group called Lepidoptera. The word "Lepidoptera"
            means "scaly wings" in Greek. This name perfectly suits the insects
            in this group because their wings are covered with thousands of tiny
            scales overlapping in rows.
          </p>
          <p className="text-gray-700 mb-4">
            An agency of the Governmental Wildlife Conservation is planning to
            implement an automated system based on computer vision so that it
            can identify butterflies based on captured images. As a consultant
            for this project, you are responsible for developing an efficient
            model.
          </p>
          <p className="text-gray-700">
            Your Task is to build an Image Classification Model using CNN that
            classifies to which class of weather each image belongs to.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end mt-6 space-x-4">
          <button
            onClick={handleEdit}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg"
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ButterflyIdentification;
