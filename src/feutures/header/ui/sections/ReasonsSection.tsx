import React from "react";
import reasonData from "@/feutures/header/datas/ReasonsData";
import Image from "next/image";

interface ReasonItem {
  title: string;
  text: string;
}

function ReasonsSection() {
  return (
    <section className="bg-[#0A0A0A] font-['Roboto_Flex','Open_Sans','sans-serif'] font-semibold text-white py-16 md:py-10 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto  border-1 rounded-2xl p-5 border-[#262626]   ">
        {/* Header */}
        <div className="mb-2  md:mb-10 bg-[#1A1A1A] p-6 rounded-2xl">
          <h2 className="text-[clamp(1.875rem,4.5vw,2rem)] text-[#F9EFEC] font-bold leading-tight tracking-wide">
            REASONS TO CHOOSE NEXGEN FOR YOUR DIGITAL JOURNEY
          </h2>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-2">
          {reasonData.map((item: ReasonItem, index: number) => (
            <div
              key={index}
              className="group bg-[#1A1A1A] rounded-2xl p-2 pb-10   "
            >
              {/* Title */}
              <h3 className="text-[clamp(1rem,2.8vw,1.3rem)] font-bold mb-6 leading-tight py-3 px-3 text-[#F9EFEC] uppercase tracking-wide">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[clamp(0.9rem,1.8vw,1.125rem)] text-[#B3B3B2] leading-relaxed mb-8 lg:mb-5">
                {item.text}
              </p>

              {/* Learn More Button */}
              <div className="flex items-center gap-2 cursor-pointer group-hover:gap-6 transition-all duration-300">
                <div className="w-10 h-10 p-3 bg-[#0F0F0F] rounded-full flex items-center justify-center border border-gray-800 group-hover:bg-gray-800 transition-all duration-300">
                  <Image
                    src="/IconArrow.png"
                    width={20}
                    height={20}
                    alt="Arrow icon"
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <p className="text-[#B3B3B2] font-medium whitespace-nowrap text-[clamp(0.875rem,1.5vw,1rem)] group-hover:text-gray-200 transition-colors duration-300">
                  Learn More
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ReasonsSection;
