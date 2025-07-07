import ScrollingText from "@/components/Carousel";
import NavLink from "@/components/NavLink";
import Image from "next/image";
import footerData from "../datas/footerData";
import Link from "next/link";
import { div } from "framer-motion/client";

function Footer() {
  return (
    <div className="w-full font-robotoflex mt-10">
      <div className="bg-[#CE7D63] px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 rounded-2xl sm:rounded-2xl">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-[#0F0F0F]  mb-4 sm:mb-6 leading-tight">
                <span className="text-[clamp(1.75rem,4.5vw,3.5rem)] uppercase tracking-tight">
                  READY TO TRANSFORM YOUR DIGITAL PRESENCE?
                </span>
              </h1>
              <p className="text-[#262626] mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                <span className="text-[clamp(0.875rem,2.5vw,1.125rem)]">
                  Take the first step towards digital success with NexGen by
                  your side. Our team of experts is eager to craft tailored
                  solutions that drive growth for your business.
                </span>
              </p>
            </div>

            {/* Button */}
            <div className="flex-shrink-0">
              <button className="group relative inline-flex items-center gap-3 sm:gap-4 bg-[#0F0F0F] hover:bg-[#262626] transition-all duration-300 rounded-full px-6 sm:px-8 py-3 sm:py-4 text-[#F3DFD8] hover:text-white shadow-lg hover:shadow-xl">
                <p className=" whitespace-nowrap text-[clamp(0.875rem,2vw,1rem)]">
                  Get in touch
                </p>
                <Image
                  src="/IconArrow.png"
                  width={20}
                  height={20}
                  alt="Arrow icon"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ScrollingText />
      </div>
      <div className="flex  lg:flex justify-between  font-robotoflex gap-2 bg-[#1A1A1A] mt-10 border-1 border-[#1A1A1A] rounded-2xl">
        {footerData.map((item, index) => (
          <div
            className="p-[clamp(0.75rem,2vw,1.25rem)] flex-row gap-5 "
            key={index}
          >
            <Link className="text-[#F3DFD8]" href={item.link}>
              <h2 className="text-[clamp(0.875rem,2.5vw,1.125rem)]">
                {item.name}
              </h2>
            </Link>
            <div className="text-[#81807E] cursor-pointer flex flex-col sm:flex-col gap-2 sm:gap-8 py-3">
              <p className="text-[clamp(0.75rem,2vw,0.875rem)]">Why Us</p>
              <p className="text-[clamp(0.75rem,2vw,0.875rem)]">About Us</p>
              <p className="text-[clamp(0.75rem,2vw,0.875rem)]">Testimonials</p>
              <p className="text-[clamp(0.75rem,2vw,0.875rem)]">FAQ's</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex   justify-between bg-[#1A1A1A] mt-5 p-[clamp(0.75rem,2vw,1.25rem)] rounded-2xl font-geistMono font-bold text-[#B3B3B2] gap-3 sm:gap-0">
        <p className="text-[clamp(0.75rem,2vw,0.875rem)]">
          © 2024 NextGen. All rights reserved.
        </p>
        <div className="flex flex-row gap-2 sm:gap-5">
          <p className="text-[clamp(0.75rem,2vw,0.875rem)]">
            Terms & Conditions
          </p>
          <p className="text-[clamp(0.75rem,2vw,0.875rem)]">Privacy Policy</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
