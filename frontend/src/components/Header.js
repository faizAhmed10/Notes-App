import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="flex my-4 w-[90%] mx-auto">
      <Link to="/" className="flex-1">
      <h1 className="lg:text-center text-4xl flex-1 font-serif">The Notes App</h1>
      </Link>
      <Link
        className="rounded-full bg-orange-500 
        cursor-pointer w-[40px] h-[40px] flex items-center justify-center
        "
        to="/create-note"
      >
        <h2 className="text-4xl text-black">+</h2>
      </Link>
      
      
    </div>
  );
};

export default Header;
