import Image from "next/image";
import React from "react";

function LearnmoreButton() {
  return (
    <div className="flex items-center gap-3 bg-[#262626] justify-center  px-6 py-4 h-35 rounded-2xl">
      <div className="w-10 h-10 bg-[#0F0F0F] rounded-full flex items-center justify-center">
        <Image src="/IconArrow.png" width={20} height={20} alt="Arrow icon" />
      </div>
      <p className="text-white font-medium whitespace-nowrap">Know More</p>
    </div>
  );
}

export default LearnmoreButton;
