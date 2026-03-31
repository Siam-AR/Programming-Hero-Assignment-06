import React from "react";

const CircleLogo = () => {
  return (
    <div className="flex justify-center items-center scale-[0.66]">
      {/* Outer circle */}
      <div className="flex justify-center items-center w-2 h-2 rounded-full bg-gray-300">
        {/* Middle circle */}
        <div className="flex justify-center items-center w-1.5 h-1.5 p-5 rounded-full bg-[#d8cdeb]">
          {/* Inner circle */}
          <div className="flex justify-center items-center w-1 h-1 p-4 rounded-full bg-[#b874ec]">
            {/* Core circle */}
            <div className="w-0.5 h-0.5 p-2 rounded-full bg-[#9514FA]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircleLogo;