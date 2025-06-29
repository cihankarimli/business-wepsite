import React from "react";
import reasonData from "@/feutures/header/datas/ReasonsData";
import LearnmoreButton from "@/components/LearnmoreButton";

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
        <div className="grid grid-cols-1 lg:grid-cols-4  md:grid-cols-2 gap-2  lg:gap-2">
          {reasonData.map((item: ReasonItem, index: number) => (
            <div
              key={index}
              className="group bg-[#1A1A1A]  w-[100%] rounded-2xl p-2 pb-10   "
            >
              {/* Title */}
              <h3 className="text-[clamp(1rem,2.8vw,1.3rem)] font-bold mb-6 leading-tight py-3 px-3 text-[#F9EFEC] uppercase tracking-wide">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[clamp(0.9rem,1.8vw,1.125rem)] px-3 text-[#B3B3B2] leading-relaxed mb-8 lg:mb-5">
                {item.text}
              </p>

              {/* Learn More Button */}
              <div className="flex items-center gap-2 cursor-pointer group-hover:gap-6 px-3 transition-all duration-300">
                <LearnmoreButton
                  style="flex gap-flex items-center gap-3  justify-center    rounded-2xl3"
                  text="Learn More"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ReasonsSection;
