import Image from "next/image";
import React from "react";
import SolitonsWorks from "@/feutures/datas/DigitalSolitionsWorks";
import SolitionsPresentation from "@/feutures/datas/DigitalSolitionsPresentations";
import LearnmoreButton from "@/components/LearnmoreButton";
import { WorksItem, PresentationItem } from "@/types/digitalSolitiontype";

function DigitalSolition() {
  return (
    <div className=" text-white w-full font-robotoflex ">
      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 lg:gap-6 p-3 sm:p-4 lg:p-8 max-w-7xl mx-auto">
        {/* Left Section - Main Content */}
        <div className="flex-1 bg-[#1A1A1A] rounded-lg overflow-hidden">
          {/* Header Content */}
          <div className="p-3 sm:p-4 lg:p-6">
            <div className="flex flex-col lg:flex-row lg:justify-between items-start mb-4 sm:mb-6 gap-3 sm:gap-4">
              <h1
                className=" text-white leading-tight "
                style={{ fontSize: "clamp(1.5rem, 5vw, 4rem)" }}
              >
                DIGITAL SOLUTIONS
                <br />
                THAT DRIVE SUCCESS
              </h1>
              <button
                className="flex items-center gap-2 sm:gap-3 text-[#CE7D63]  whitespace-nowrap self-start lg:self-auto mt-2 lg:mt-0"
                style={{ fontSize: "clamp(0.7rem, 1.5vw, 0.875rem)" }}
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-[#CE7D63] rounded-full flex items-center justify-center flex-shrink-0">
                  <span
                    className="text-black "
                    style={{ fontSize: "clamp(0.7rem, 1.5vw, 0.875rem)" }}
                  >
                    <Image src="/Icon.png" width={20} height={20} alt="arrow" />
                  </span>
                </div>
                <span className="hidden sm:inline">START A PROJECT</span>
                <span className="sm:hidden">START</span>
              </button>
            </div>

            <p
              className="text-gray-400 leading-relaxed max-w-2xl"
              style={{ fontSize: "clamp(0.8rem, 2vw, 1rem)" }}
            >
              At NexGen, we believe in the transformative power of digital
              solutions. Our team of experts is dedicated to helping businesses
              like yours thrive in the fast-paced digital landscape.
            </p>
          </div>

          {/* Services Bar */}
          <div className="bg-[#0F0F0F] px-3 sm:px-4 lg:px-8 py-3 sm:py-4 lg:py-6">
            <div
              className="flex flex-wrap justify-center lg:justify-between gap-2 sm:gap-4 lg:gap-6 text-gray-400 uppercase tracking-wider"
              style={{ fontSize: "clamp(0.6rem, 1.2vw, 0.875rem)" }}
            >
              {SolitonsWorks.map((item: WorksItem, index: number) => (
                <span key={index} className="flex items-center">
                  {index > 0 && (
                    <span className="text-[#CE7D63] mx-2 lg:mx-6 hidden lg:inline">
                      •
                    </span>
                  )}
                  <span className="text-center">{item.workText}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section - Project Showcase */}
        <div className="w-full lg:w-80 xl:w-96 bg-[#1A1A1A] rounded-lg overflow-hidden">
          <div className="relative">
            <Image
              src="/SolitionsImage.png"
              width={500}
              height={350}
              alt="Project showcase"
              className="w-full h-40 sm:h-48 lg:h-80 object-cover"
            />
            <div className="absolute top-3 sm:top-4 lg:top-3 right-3 sm:right-4 lg:right-[3]">
              <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-20 lg:h-20  bg-[#CE7D63] rounded-full flex items-center justify-center">
                <span
                  className="text-black "
                  style={{ fontSize: "clamp(0.7rem, 1.5vw, 0.875rem)" }}
                >
                  <Image
                    src="/IconArrow.png"
                    width={30}
                    height={30}
                    alt="arrow"
                  />
                </span>
              </div>
            </div>
          </div>
          <div className="p-3 sm:p-4 lg:p-6">
            <h3
              className="text-white font-black mb-2"
              style={{ fontSize: "clamp(0.9rem, 2.5vw, 1.125rem)" }}
            >
              ESTATEIN REAL ESTATE
            </h3>
            <p
              className="text-gray-400"
              style={{ fontSize: "clamp(0.7rem, 1.5vw, 0.875rem)" }}
            >
              Web Development.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Statistics Section */}
      <div className="font-robotoflex  border border-[#1F1F1F] max-w-7xl mx-auto my-4 sm:my-6 lg:my-8 rounded-2xl sm:rounded-3xl py-4 sm:py-6 lg:py-8 px-3 sm:px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-4 sm:gap-6">
          {/* Statistics Cards */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 lg:gap-6 w-full lg:w-auto">
            {SolitionsPresentation.map(
              (item: PresentationItem, index: number) => (
                <div
                  key={index}
                  className="flex flex-col text-center rounded-xl sm:rounded-2xl bg-[#262626] p-3 sm:p-4 justify-center items-center min-w-[100px] sm:min-w-[120px] lg:min-w-[140px] flex-1 sm:flex-none"
                >
                  <p
                    className="text-gray-400 uppercase tracking-wider mb-1 sm:mb-2"
                    style={{ fontSize: "clamp(0.6rem, 1.2vw, 0.875rem)" }}
                  >
                    {item.text}
                  </p>
                  <div
                    className="font-black text-[#CE7D63]"
                    style={{ fontSize: "clamp(1.2rem, 3vw, 2.5rem)" }}
                  >
                    {item.number}
                    <span style={{ fontSize: "clamp(0.8rem, 2vw, 1.25rem)" }}>
                      {item.value}
                    </span>
                  </div>
                </div>
              )
            )}
            <div className="flex-shrink-0 w-full sm:w-auto flex justify-center lg:justify-end mt-4 lg:mt-0 items-center gap-3 bg-[#262626]   px-6 py-4 h-35 rounded-2xl p-3">
              <div>
                <LearnmoreButton style="flex items-center gap-3 bg-[#262626] justify-center  px-6 py-4 h-35 rounded-2xl">
                  Know More
                </LearnmoreButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DigitalSolition;
