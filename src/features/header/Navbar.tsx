import navbarData from "@/datas/NavbarData.json";
import NavLink from "@/components/navLink/NavLink";
import MobileMenuClient from "../mainSections/MobileMenuClient";
import ContactUsButton from "@/components/buttons/ContactUsButton";

function Navbar() {
  const tabletButtonstyle =
    "hidden md:block lg:hidden border-2 bg-[#CE7D63] border-[#CE7D63] hover:border-orange-100 px-4 py-1.5 rounded-md text-gray-50 hover:text-orange-100 transition-colors cursor-pointer text-sm";
  const desktopButtonstyle =
    "hidden lg:block  border-2 bg-[#CE7D63] border-[#CE7D63] hover:border-orange-100 px-6 py-2 rounded-md text-gray-50 hover:text-orange-100 transition-colors cursor-pointer";
  return (
    <nav className="w-full bg-[#1A1A1A] font-mono rounded-md p-2 ">
      <div className="container  px-4 rounded-md">
        <div className="flex items-center justify-around h-16">
          {/* Logo */}
          <h1 className="text-orange-100 font-mono text-xl">NextGen</h1>

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-5">
            {navbarData.map((item, index) => (
              <NavLink key={index} item={item} variant="desktop" />
            ))}
          </div>

          {/* Tablet Menu */}
          <div className="hidden md:flex lg:hidden gap-3">
            {navbarData.map((item, index) => (
              <NavLink key={index} item={item} variant="tablet" />
            ))}
          </div>

          {/* Desktop Contact Button */}
          <ContactUsButton item="Contact Us" style={desktopButtonstyle} />

          {/* Tablet Contact Button */}
          <ContactUsButton item="Contact" style={tabletButtonstyle} />

          {/* Mobile Menu Component */}
          <MobileMenuClient navbarData={navbarData} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
