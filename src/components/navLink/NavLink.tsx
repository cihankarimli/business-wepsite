"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  name: string;
  link: string;
}

interface NavLinkProps {
  item: NavItem;
  variant?: "desktop" | "mobile" | "tablet";
  onClick?: () => void;
}

function NavLink({ item, variant = "desktop", onClick }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === item.link;

  const getClassName = () => {
    if (variant === "desktop") {
      return isActive
        ? "text-[#CE7D63] bg-[#0F0F0F] w-27 text-center align-center rounded-md px-4 py-2"
        : "text-gray-50 bg-[#0F0F0F] w-27 text-center rounded-md hover:text-orange-100 px-4 py-2 align-center";
    }

    if (variant === "tablet") {
      return isActive
        ? "text-[#CE7D63] bg-[#0F0F0F] px-3 py-2 rounded-md text-sm font-medium"
        : "text-gray-50 bg-[#0F0F0F] px-3 py-2 rounded-md text-sm font-medium hover:text-orange-100";
    }

    if (variant === "mobile") {
      return `block py-4 px-8 text-lg font-medium border-b border-gray-100 transition-all duration-300 ${
        isActive
          ? "text-[#CE7D63] bg-red-50"
          : "text-gray-800 hover:bg-gray-50 hover:text-[#CE7D63]"
      }`;
    }
  };

  return (
    <Link href={item.link} className={getClassName()} onClick={onClick}>
      {item.name}
    </Link>
  );
}

export default NavLink;
