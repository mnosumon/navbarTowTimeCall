import React, { useEffect, useState } from "react";
import { FaUser, FaBars, FaTimes } from "react-icons/fa";
const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-stone-300 relative">
      <div className="flex items-center justify-around w-[90%] mx-auto py-4">
        {/* Logo and Mobile Menu Toggle */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <h1 className="text-2xl font-semibold">Logo</h1>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
            className="text-2xl md:hidden z-50"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-6 text-lg">
          <li className="hover:text-orange-500 cursor-pointer">Home</li>
          <li className="hover:text-orange-500 cursor-pointer">About</li>
          <li className="hover:text-orange-500 cursor-pointer">Earn</li>
        </ul>
        <button className="hidden md:block bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600">
          Submit
        </button>

        {/* Mobile Navigation */}
        <div
          className={`absolute top-full w-full bg-blue-400 transition-transform duration-500 transform ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <ul className="md:hidden w-[90%] mx-auto py-4 space-y-4 text-lg">
            <li className="hover:text-orange-500 cursor-pointer">Home</li>
            <li className="hover:text-orange-500 cursor-pointer">About</li>
            <li className="hover:text-orange-500 cursor-pointer">Earn</li>
            <div>
              <button className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600">
                Submit
              </button>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default App;
