import React from "react";
import { worksData, projectCardsData } from "@/datas/OurWorksData.json";
import LearnmoreButton from "@/components/buttons/LearnmoreButton";
import Image from "next/image";
import { worksItem, TeamMember } from "@/types/workSectionType";

function OurWorksSection() {
  return (
    <div className="max-w-7xl mx-auto  border-1 p-5 rounded-2xl border-[#262626] ">
      {/* Header Section */}
      <div className="mb-8 bg-[#1A1A1A] border-[#262626] p-1 lg:p-3 rounded-2xl flex justify-between items-center ">
        <h1
          className="text-white font-bold tracking-wide p-4"
          style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}
        >
          OUR WORKS
        </h1>
        <LearnmoreButton style="flex gap-flex items-center gap-3  justify-center    rounded-2xl3">
          All works
        </LearnmoreButton>
      </div>

      {/* Works Grid Container */}
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
        {worksData.map((item: worksItem, index: number) => {
          const projectData = projectCardsData[index];

          return (
            <div
              key={index}
              className="bg-[#1A1A1A] border animate-slideRight border-[#1A1A1A] p-6 sm:p-8 flex flex-col h-full rounded-2xl hover:border-gray-600 cursor-pointer transition-all duration-300"
            >
              {/* Left Content Section */}
              <div className="p-6 lg:p-4">
                {/* Project Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 border-1 border-[#333333] bg-[#1F1F1F] rounded-2xl p-3 ">
                      <Image
                        src={item.logo}
                        width={20}
                        height={20}
                        alt={item.title}
                        className="object-cover"
                      />
                    </div>
                    <h2
                      className="text-white font-bold tracking-wide"
                      style={{ fontSize: "clamp(0.875rem, 2vw, 1.125rem)" }}
                    >
                      {item.title}
                    </h2>
                  </div>
                  <LearnmoreButton style="flex gap-flex items-center gap-3  justify-center    rounded-2xl3">
                    DETAILS
                  </LearnmoreButton>
                </div>

                {/* Project Info */}
                <div className="mb-6 space-y-2">
                  <div className="flex items-center text-gray-400 text-sm">
                    <span>Category</span>
                    <span className="text-[#CE7D63] mx-2 lg:mx-6  lg:inline">
                      •
                    </span>
                    <span className="text-white">{item.category}</span>
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <span>Time Taken</span>
                    <span className="text-[#CE7D63] mx-2 lg:mx-6  lg:inline">
                      •
                    </span>
                    <span className="text-white">{item.time}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm lg:text-base leading-relaxed mb-8">
                  {item.text}
                </p>
              </div>

              {/* Project Image */}
              <div className="px-6 lg:px-8 pb-6">
                <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-purple-200 to-purple-100 aspect-[4/3]">
                  <Image
                    src={index === 0 ? "/Ourworks1.png" : "/Ourworks2.png"}
                    width={580}
                    height={426}
                    alt={`OurworksImage${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Right Sidebar */}
              <div className="p-6 lg:p-8 bg-[#151515] space-y-8">
                {/* Technologies Section */}
                <div>
                  <h3 className="text-gray-400 text-xs font-medium tracking-widest mb-4">
                    TECHNOLOGIES USED
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {projectData.technologies.map(
                      (tech: string, techIndex: number) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-[#2A2A2A] text-white text-xs rounded-full border border-gray-700"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                </div>

                {/* Team Members Section */}
                <div>
                  <h3 className="text-gray-400 text-xs font-medium tracking-widest mb-4">
                    TEAM MEMBERS
                  </h3>
                  <div className="flex -space-x-2">
                    {projectData.teamMembers.map((member: TeamMember) => (
                      <div
                        key={member.id}
                        className="w-10 h-10 rounded-full border-2 border-[#151515] overflow-hidden bg-gray-600"
                      >
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={40}
                          height={40}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Book a Call Button */}
                <button className="w-full bg-[#CE7D63] hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 tracking-wide cursor-pointer">
                  BOOK A CALL
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OurWorksSection;
