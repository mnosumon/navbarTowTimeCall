import React from "react";

const App = () => {
  return (
    <nav className="bg-stone-300">
      <div className="flex items-center justify-around">
        <div className="">
          <h1 className="text-xl">Logo</h1>
        </div>
        <div className="">
          <ul className=" md:flex hidden items-center gap-4">
            <li>Home</li>
            <li>About</li>
            <li>Earn</li>
          </ul>
        </div>
        <div className="">
          <button className="bg-orange-500">Submit</button>
        </div>
      </div>
    </nav>
  );
};

export default App;
