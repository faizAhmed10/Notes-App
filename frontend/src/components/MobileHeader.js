import React from "react";
import { Link } from "react-router-dom";
import BackButton from "./BackButton";
const MobileHeader = () => {
  return (
    <div className="flex my-4 w-[90%] mx-auto">
      <Link to="/" className="flex-1">
      <BackButton/>
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

export default MobileHeader;