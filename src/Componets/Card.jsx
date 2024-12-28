import React from "react";
import image from "../assets/image/insights (1).png";

function Card({ price, status, image }) {
  return (
    <div className="w-full h-[6rem]   bg-white   shadow-xl border border-slate-400 rounded-lg p-5 overflow-hidden relative">
      {/* Description */}
      <div className="w-full flex flex-col">
        <h2 className="font-bold font-Poppins">{price}</h2>
        <h3 className="font-medium font-Poppins text-[#767676]">{status}</h3>
      </div>

      {/* Right-side bottom image */}
      <div className="w-[2rem] h-[2rem] flex justify-center items-center absolute right-2">
        <img src={image} alt="logo" />
      </div>
    </div>
  );
}

export default Card;
