"use client";
import LearnmoreButton from "@/components/LearnmoreButton";
import React, { useState } from "react";
import askQuestionsData from "@/feutures/datas/AskQuestion";
import { AskQuestionItem } from "@/types/askQuestiontype";
import Image from "next/image";
import FormComponents from "@/components/FormComponents";

function AskQuestionSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div
      className="max-w-7xl mx-auto min-h-screen px-4 sm:px-6 lg:px-8"
      style={{
        marginTop: "clamp(1rem, 3vw, 2.5rem)",
      }}
    >
      {/* Header Section */}
      <div
        className="mb-6 sm:mb-8 bg-[#1A1A1A] border border-[#262626] rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0"
        style={{ padding: "clamp(1rem, 2.5vw, 1.5rem)" }}
      >
        <h1
          className="text-white font-bold tracking-wide"
          style={{ fontSize: "clamp(1.25rem, 5vw, 2.5rem)" }}
        >
          FREQUENTLY ASKED QUESTIONS
        </h1>
        <div className="w-full sm:w-auto">
          <LearnmoreButton style="flex gap-flex items-center gap-3 justify-center rounded-2xl3">
            View All
          </LearnmoreButton>
        </div>
      </div>

      <div
        className="flex flex-col lg:flex-row"
        style={{ gap: "clamp(1.5rem, 4vw, 2rem)" }}
      >
        <div className="flex-1 space-y-3 sm:space-y-4">
          {askQuestionsData.map((item: AskQuestionItem, index: number) => (
            <div
              className="bg-[#1A1A1A] border border-[#262626] rounded-2xl overflow-hidden"
              key={index}
            >
              <div
                className="flex justify-between items-center cursor-pointer hover:bg-[#262626] transition-colors"
                onClick={() => toggleAccordion(index)}
                style={{ padding: "clamp(1rem, 3vw, 1.5rem)" }}
              >
                <p
                  className="text-[#F9EFEC] font-medium pr-4 flex-1"
                  style={{ fontSize: "clamp(0.875rem, 3vw, 1.125rem)" }}
                >
                  {item.title}
                </p>
                <div className="flex-shrink-0">
                  <div
                    className="bg-[#1F1F1F] border border-[#333333] rounded-full flex items-center justify-center transition-transform duration-200"
                    style={{
                      width: "clamp(2rem, 5vw, 2.5rem)",
                      height: "clamp(2rem, 5vw, 2.5rem)",
                      transform:
                        activeIndex === index
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                    }}
                  >
                    <Image
                      src={
                        activeIndex === index
                          ? "/minusIcon.png"
                          : "/plusIcon.png"
                      }
                      width={16}
                      height={2}
                      alt="icon"
                    />
                  </div>
                </div>
              </div>
              {activeIndex === index && (
                <div
                  className="border-t border-[#262626] animate-fadeIn"
                  style={{
                    padding: "clamp(1rem, 3vw, 1.5rem)",
                    paddingTop: "clamp(0.75rem, 2vw, 1rem)",
                  }}
                >
                  <p
                    className="text-[#B3B3B2] leading-relaxed"
                    style={{
                      fontSize: "clamp(0.8rem, 2.5vw, 1rem)",
                      lineHeight: "clamp(1.5, 1.6, 1.7)",
                    }}
                  >
                    {item.text}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Ask Question Form */}
        <div className="w-full lg:w-96 lg:max-w-sm">
          <div
            className="bg-[#1A1A1A] border border-[#262626] rounded-2xl lg:sticky lg:top-4"
            style={{ padding: "clamp(1rem, 3vw, 1.5rem)" }}
          >
            <h2
              className="text-white font-bold"
              style={{
                fontSize: "clamp(1rem, 3vw, 1.25rem)",
                marginBottom: "clamp(1rem, 3vw, 1.5rem)",
              }}
            >
              ASK YOUR QUESTION
            </h2>
            <FormComponents />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AskQuestionSection;
