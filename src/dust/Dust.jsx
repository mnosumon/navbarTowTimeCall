import React from "react";

const Dust = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <div className="w-4/5 grid grid-cols-3 mx-auto">
      <div className="flex items-center justify-center">
        <h2 className="text-xl text-white font-bold font-serif">Sumon</h2>
      </div>

      <div className=" flex-col md:flex md:flex-row justify-center items-center gap-4 py-4 ">
        <a
          href="#"
          className="w-12 h-12 text-white rounded-full flex items-center justify-center cursor-pointer"
        >
          <FaUser />
        </a>
        <a
          href="#"
          className="w-12 h-12 text-white rounded-full flex items-center justify-center cursor-pointer"
        >
          <FaUser />
        </a>
      </div>
      <div className=" md:flex items-center justify-center py-2">
        <button className="text-white text-base font-serif">Log Out</button>
      </div>

      <div onClick={toggleNav} className="text-white md:hidden">
        <FaBars />
      </div>
    </div>
  );
};

export default Dust;
