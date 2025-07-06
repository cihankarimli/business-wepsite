import React from "react";
import servicesData from "@/feutures/datas/OurServices";
import Image from "next/image";
import LearnmoreButton from "@/components/LearnmoreButton";
import { ServicesItem } from "@/types/servicesType";

function OurServices() {
  return (
    <div className=" text-white font-robotoflex py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto  border-1 p-5 rounded-2xl border-[#262626]   ">
        <div className="mb-2  md:mb-10 bg-[#1A1A1A] p-6 rounded-2xl">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wide  p-4">
            OUR SERVICES
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {servicesData.map((item: ServicesItem, index: number) => (
            <div
              key={index}
              className="bg-[#1A1A1A] border animate-slideRight border-[#1A1A1A] p-6 sm:p-8 flex flex-col h-full rounded-2xl hover:border-gray-600 cursor-pointer transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <div className="flex-shrink-0 border-1 border-[#333333] bg-[#1F1F1F] rounded-2xl p-3">
                    <Image
                      src={item.image}
                      width={20}
                      height={20}
                      alt="services-image"
                      className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                    />
                  </div>
                  <h4 className="text-white font-semibold text-sm sm:text-base lg:text-lg leading-tight line-clamp-2">
                    {item.title}
                  </h4>
                </div>
                <div className="flex-shrink-0 ml-2">
                  <LearnmoreButton style="flex gap-flex items-center gap-3  justify-center    rounded-2xl3">
                    BOOK A CALL
                  </LearnmoreButton>
                </div>
              </div>
              <div className="flex-1 mb-6 sm:mb-8">
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed line-clamp-4">
                  {item.text}
                </p>
              </div>
              <div className="mt-auto">
                <p className="text-white flex justify-end font-bold text-lg sm:text-xl tracking-wide">
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurServices;
