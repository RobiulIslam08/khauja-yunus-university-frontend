
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, MapPin } from "lucide-react";
import DesktopNav from "./navbar/DesktopNav";
import MobileMenu from "./navbar/MobileMenu";
import { TOP_LINKS } from "./navbar/navData";

// --- Sub-Components ---

const TopHeaderInfo = () => (
  <div className="hidden lg:flex flex-col items-end gap-2">
    <div className="flex items-center text-xs md:text-sm bg-[#020031] rounded-l-full pr-4 pl-4 py-1 shadow-sm overflow-x-auto gap-0">
      {TOP_LINKS.map((link, index) => (
        <Link
          key={index}
          to={link.path}
          className="text-gray-100 font-semibold px-3 py-1 hover:bg-green-600 hover:text-white rounded-full transition duration-200 whitespace-nowrap"
          style={{ marginRight: index !== TOP_LINKS.length - 1 ? '0.25rem' : 0 }}
        >
          {link.label}
        </Link>
      ))}
    </div>
    <div className="flex items-center gap-4 text-xs md:text-sm pr-4">
      <div className="flex items-center gap-2 text-gray-800">
        <Phone size={14} /> <span>+880 1915 477 923</span>
      </div>
      <div className="flex items-center gap-2 text-gray-700">
        <MapPin size={14} />{" "}
        <span>Enayetpur, Chouhaiti, Sirajganj - 6751, Bangladesh</span>
      </div>
    </div>
  </div>
);




// --- Logo Component ---
const LogoSection = () => (
  <Link to="/" className="flex items-center gap-3 md:gap-4">
    <div className="w-12 h-12 md:w-14 md:h-14 bg-orange-100 rounded-full flex items-center justify-center shrink-0">
      <span className="text-orange-600 font-bold text-xs md:text-sm">KYAU</span>
    </div>
    <div className="flex flex-col">
      <h1 className="text-green-600 font-bold text-sm md:text-lg leading-tight">
        KHWAJA YUNUS ALI UNIVERSITY
      </h1>
      <p className="text-gray-700 text-xs md:text-sm font-medium">
        FOUNDER: DR. M. M. AMJAD HUSSAIN
      </p>
      <p className="text-gray-600 text-xs md:text-sm italic font-semibold">
        Quest for Knowledge
      </p>
    </div>
  </Link>
);

// --- Main Navbar Component ---

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <nav className="bg-white font-sans">
      <div className="bg-white py-3 md:py-2 border-b border-gray-200">
        <div className="w-full pl-4 flex items-center justify-between">
          <LogoSection />
          <TopHeaderInfo />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-800 hover:bg-gray-100 rounded transition"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      <div className="bg-[#020031] relative shadow-md">
        <div className="w-full">
          <div className="flex items-center justify-between py-0">
            <DesktopNav />
          </div>
          <MobileMenu
            isOpen={mobileMenuOpen}
            closeMenu={() => setMobileMenuOpen(false)}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;