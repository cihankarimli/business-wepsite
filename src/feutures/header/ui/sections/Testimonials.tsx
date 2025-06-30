import LearnmoreButton from "@/components/LearnmoreButton";
import React from "react";

function Testimonials() {
  return (
    <div className="max-w-7xl mx-auto  border-1 p-5 rounded-2xl border-[#262626] ">
      <div className="mb-8 bg-[#1A1A1A] border-[#262626] p-1 lg:p-3 rounded-2xl flex justify-between items-center ">
        <h1
          className="text-white font-bold tracking-wide p-4"
          style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}
        >
          TESTIMONIALS
        </h1>
        <LearnmoreButton
          text="ALL TESTIMONIALS"
          style="flex gap-flex items-center gap-3  justify-center    rounded-2xl3"
        />
      </div>
    </div>
  );
}

export default Testimonials;
