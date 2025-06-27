import navbarData from "@/feutures/header/datas/NavbarData";
import NavLink from "@/components/NavLink";
import MobileMenuClient from "./MobileMenuClient";

function Navbar() {
  return (
    <nav className="w-full bg-[#1A1A1A] rounded-md p-2 ">
      <div className="container mx-auto px-4 rounded-md">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <h1 className="text-orange-100 font-mono text-xl">NextGen</h1>

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-5">
            {navbarData.map((item, index) => (
              <NavLink item={item} variant="desktop" />
            ))}
          </div>

          {/* Tablet Menu */}
          <div className="hidden md:flex lg:hidden gap-3">
            {navbarData.map((item: any, index: number) => (
              <NavLink item={item} variant="tablet" />
            ))}
          </div>

          {/* Desktop Contact Button */}
          <button className="hidden lg:block border-2 bg-[#CE7D63] border-[#CE7D63] hover:border-orange-100 px-6 py-2 rounded-md text-gray-50 hover:text-orange-100 transition-colors cursor-pointer">
            Contact Us
          </button>

          {/* Tablet Contact Button */}
          <button className="hidden md:block lg:hidden border-2 bg-[#CE7D63] border-[#CE7D63] hover:border-orange-100 px-4 py-1.5 rounded-md text-gray-50 hover:text-orange-100 transition-colors cursor-pointer text-sm">
            Contact
          </button>

          {/* Mobile Menu Component */}
          <MobileMenuClient navbarData={navbarData} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
