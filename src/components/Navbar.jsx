import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow">
      <div className="container  px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-900">
          LOGO
        </div>
        <div>
          {/* <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition-colors">
            Contact Us
          </button> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
