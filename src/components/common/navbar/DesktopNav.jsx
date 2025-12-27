import { Link } from "react-router-dom";
import DropdownNavItem from "./DropdownNavItem";
import { MAIN_NAV_ITEMS } from "./navData";

export default function DesktopNav() {
  return (
    <div className="hidden md:flex items-center gap-1 relative">
      {MAIN_NAV_ITEMS.map((item) =>
        item.type === "dropdown" ? (
          <DropdownNavItem key={item.label} label={item.label} items={item.items} />
        ) : (
          <Link
            key={item.label}
            to={item.path}
            className="px-3 md:px-4 py-3 text-white text-xs md:text-sm font-semibold hover:bg-[#0a0040] transition duration-200 whitespace-nowrap block"
          >
            {item.label}
          </Link>
        )
      )}
    </div>
  );
}
