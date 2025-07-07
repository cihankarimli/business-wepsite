"use client";
const ScrollingText = () => {
  const scrollingText = "FOLLOW US ON SOCIAL MEDIA";

  return (
    <div className="w-full mt-5 bg-[#1A1A1A] py-3 sm:py-4 overflow-hidden rounded-2xl">
      <div className="flex animate-scroll whitespace-nowrap ">
        <div className="flex space-x-4 sm:space-x-6 lg:space-x-8">
          {Array.from({ length: 20 }, (_, i) => (
            <span
              key={i}
              className="flex items-center space-x-4 sm:space-x-6 lg:space-x-8 "
            >
              <span className="font-geistMono tracking-wider text-[clamp(0.75rem,2vw,0.875rem)] text-[#676665] uppercase">
                {scrollingText}
              </span>
              <span className="text-[#CE7D63] text-[clamp(0.75rem,2vw,0.875rem)]">
                •
              </span>
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        @media (max-width: 640px) {
          .animate-scroll {
            animation: scroll 20s linear infinite;
          }
        }
      `}</style>
    </div>
  );
};
export default ScrollingText;
