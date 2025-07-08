import Image from "next/image";
import React from "react";

function LearnmoreButton({
  style,
  children,
}: // type
{
  style: string;
  children: React.ReactNode;
}) {
  return (
    <div className={style}>
      <div className="w-10 h-10 bg-[#0F0F0F] rounded-full flex items-center justify-center">
        <Image src="/IconArrow.png" width={20} height={20} alt="Arrow icon" />
      </div>
      <p className="text-[#B3B3B2] font-medium whitespace-nowrap">{children}</p>
    </div>
  );
}

export default LearnmoreButton;
