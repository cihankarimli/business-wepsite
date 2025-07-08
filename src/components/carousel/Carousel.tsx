"use client";

import React from "react";

interface CarouselProps {
  data: Array<{ id: number; workText: string }>;
}

const Carousel: React.FC<CarouselProps> = ({ data }) => {
  return (
    <div className="w-full   sm:py-5 lg:py-3   overflow-hidden">
      <div className="flex animate-scroll whitespace-nowrap">
        <div className="flex space-x-4 sm:space-x-6 lg:space-x-8">
          {Array.from({ length: 3 }, (_, repeatIndex) => (
            <div
              key={repeatIndex}
              className="flex space-x-4 sm:space-x-6 lg:space-x-8"
            >
              {data.map((item) => (
                <span
                  key={`${repeatIndex}-${item.id}`}
                  className="flex items-center space-x-4 sm:space-x-6 lg:space-x-8"
                >
                  <span className="font-geistMono tracking-wider text-[clamp(0.6rem,1.2vw,0.875rem)] text-gray-400 uppercase">
                    {item.workText}
                  </span>
                  <span className="text-[#CE7D63] text-[clamp(0.6rem,1.2vw,0.875rem)]">
                    •
                  </span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-120.33%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        @media (max-width: 640px) {
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
        }

        @media (max-width: 480px) {
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
        }
      `}</style>
    </div>
  );
};

export default Carousel;
