import LearnmoreButton from "@/components/buttons/LearnmoreButton";
import React from "react";
import testimonialsData from "@/datas/TestimonialsData.json";
import { TestimonialsItem } from "@/types/testimonialsType";
import Image from "next/image";

function Testimonials() {
  return (
    <div className="max-w-7xl mx-auto border border-[#262626] p-3 sm:p-5 rounded-2xl ">
      {/* Header */}
      <div className="mb-8 bg-[#1A1A1A] border-[#262626] p-1 lg:p-3 rounded-2xl flex justify-between items-center">
        <h1
          className="text-white font-bold  tracking-wide p-4"
          style={{ fontSize: "clamp(1.25rem, 4vw, 2.5rem)" }}
        >
          TESTIMONIALS
        </h1>
        <LearnmoreButton style="lg:flex gap-flex items-center gap-3  justify-center    rounded-2xl3 hidden md:flex ">
          ALL Testimonials
        </LearnmoreButton>
      </div>

      {/* Testimonials Grid - Desktop/Tablet (4 columns) */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {testimonialsData.map((item: TestimonialsItem, index: number) => (
          <div
            key={index}
            className="bg-[#1F1F1F] border border-[#262626] rounded-2xl p-4 lg:p-6 flex flex-col justify-between min-h-[280px] lg:min-h-[320px]"
          >
            {/* Title */}
            <h3
              className="text-white font-bold mb-3 lg:mb-4 leading-tight"
              style={{ fontSize: "clamp(0.875rem, 1.5vw, 1.125rem)" }}
            >
              {item.title}
            </h3>

            {/* Description */}
            <p
              className="text-[#B3B3B2] mb-4 lg:mb-6 flex-grow leading-relaxed"
              style={{ fontSize: "clamp(0.75rem, 1.2vw, 0.875rem)" }}
            >
              {item.text}
            </p>

            {/* User Info */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Image
                    src={item.userImg}
                    width={40}
                    height={40}
                    alt={item.name}
                    className="rounded-full border border-[#333333]"
                  />
                </div>
                <div>
                  <p
                    className="text-white font-medium"
                    style={{ fontSize: "clamp(0.75rem, 1.2vw, 0.875rem)" }}
                  >
                    {item.name}
                  </p>
                  <p
                    className="text-[#81807E]"
                    style={{ fontSize: "clamp(0.625rem, 1vw, 0.75rem)" }}
                  >
                    {item.work}
                  </p>
                </div>
              </div>

              <div className="w-8 h-8 lg:w-10 lg:h-10 border border-[#333333] rounded-full flex items-center justify-center flex-shrink-0 hover:bg-[#262626] transition-colors cursor-pointer">
                <Image
                  src="/Vector.png"
                  width={16}
                  height={16}
                  alt="arrow"
                  className="opacity-80"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Testimonials List - Mobile (Single Column) */}
      <div className="md:hidden space-y-6">
        {testimonialsData.map((item: TestimonialsItem, index: number) => (
          <div
            key={index}
            className="bg-[#1F1F1F] border border-[#262626] rounded-2xl p-4"
          >
            {/* Title */}
            <h3
              className="text-white font-bold mb-3 leading-tight"
              style={{ fontSize: "clamp(1.125rem, 4vw, 1.25rem)" }}
            >
              {item.title}
            </h3>

            {/* Description */}
            <p
              className="text-[#B3B3B2] mb-4 leading-relaxed"
              style={{ fontSize: "clamp(0.875rem, 3vw, 1rem)" }}
            >
              {item.text}
            </p>

            {/* User Info */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Image
                    src={item.userImg}
                    width={48}
                    height={48}
                    alt={item.name}
                    className="rounded-full border border-[#333333]"
                  />
                </div>
                <div>
                  <p
                    className="text-white font-medium"
                    style={{ fontSize: "clamp(0.875rem, 4vw, 1rem)" }}
                  >
                    {item.name}
                  </p>
                  <p
                    className="text-[#81807E]"
                    style={{ fontSize: "clamp(0.75rem, 3vw, 0.875rem)" }}
                  >
                    {item.work}
                  </p>
                </div>
              </div>

              <div className="w-10 h-10 border border-[#333333] rounded-full flex items-center justify-center flex-shrink-0 hover:bg-[#262626] transition-colors cursor-pointer">
                <Image
                  src="/Vector.png"
                  width={18}
                  height={18}
                  alt="arrow"
                  className="opacity-80"
                />
              </div>
            </div>
          </div>
        ))}
        <div className="flex justify-center gap-1.5 items-center bg-[#1F1F1F] border border-[#262626] rounded-2xl p-7">
          <div className="w-10  h-10 border border-[#333333] rounded-full flex items-center justify-center bg-[#0F0F0F] flex-shrink-0 hover:bg-[#262626] transition-colors cursor-pointer">
            <Image
              src="/bootomIcon.png"
              width={18}
              height={18}
              alt="arrow"
              className="opacity-80"
            />
          </div>
          <p className="text-[#B3B3B2] font-medium whitespace-nowrap">
            ALL TESTIMONIALS
          </p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
