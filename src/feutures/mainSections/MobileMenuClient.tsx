"use client";
import { useState } from "react";
import NavLink from "@/components/navLink/NavLink";

interface NavItem {
  name: string;
  link: string;
}

interface MobileMenuClientProps {
  navbarData: NavItem[];
}

function MobileMenuClient({ navbarData }: MobileMenuClientProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden cursor-pointer text-gray-50"
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-0 left-0 h-full w-80 bg-white shadow-2xl transform translate-x-0 transition-transform duration-300 ease-in-out z-50 md:hidden">
          {/* Mobile Menu Header */}
          <div className="flex justify-end p-4 border-b border-gray-200">
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-600 hover:bg-gray-100 p-2 rounded-full transition-colors duration-300 text-xl"
            >
              ✕
            </button>
          </div>

          {/* Mobile Menu Items */}
          <nav className="flex flex-col">
            {navbarData.map((item, index) => (
              <NavLink
                key={index}
                item={item}
                variant="mobile"
                onClick={() => setIsOpen(false)}
              />
            ))}

            <button className="w-70 bg-[#CE7D63] hover:bg-red-600 text-white py-3 px-6 rounded-lg font-semibold text-lg transition-colors duration-300  mx-5 mt-4">
              Contact Us
            </button>

            <div className="p-8"></div>
          </nav>
        </div>
      )}
    </>
  );
}

export default MobileMenuClient;
