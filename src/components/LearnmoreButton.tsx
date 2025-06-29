import Image from "next/image";
import React from "react";

function LearnmoreButton({ style, text }) {
  return (
    <div className={style}>
      <div className="w-10 h-10 bg-[#0F0F0F] rounded-full flex items-center justify-center">
        <Image src="/IconArrow.png" width={20} height={20} alt="Arrow icon" />
      </div>
      <p className="text-white font-medium whitespace-nowrap">{text}</p>
    </div>
  );
}

export default LearnmoreButton;
