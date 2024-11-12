import React, { useState } from "react";
import { FaUser, FaBars, FaTimes } from "react-icons/fa";
const App = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-stone-300 relative">
      <div className="flex items-center justify-around w-[90%] mx-auto py-2">
        <div className="z-50 w-full md:w-auto items-center flex justify-between">
          <h1 className="text-xl">Logo</h1>
          <div
            onClick={() => setOpen(!open)}
            className="cursor-pointer md:hidden"
          >
            {open ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        <div className="">
          <ul className=" md:flex hidden items-center gap-4">
            <li>Home</li>
            <li>About</li>
            <li>Earn</li>
          </ul>
        </div>
        <div className="md:block hidden">
          <button className="bg-orange-500 ">Submit</button>
        </div>

        {/* Mobile view */}

        <div
          className={`absolute top-full w-full bg-blue-400 ${
            open ? "left-0" : "left-[-100%]"
          }`}
        >
          <ul className="md:hidden w-[90%] mx-auto ">
            <li>Home</li>
            <li>About</li>
            <li>Earn</li>
            <div className="">
              <button className="bg-orange-500 ">Submit</button>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default App;
