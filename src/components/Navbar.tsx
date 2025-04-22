import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaCross } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import useModalContext from "../hooks/useModalContext";
import MobileNav from "./MobileNav";

export interface Link {
  name: string;
  path: string;
}

export const links: Link[] = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about-us" },
  { name: "Life Stories", path: "/life-stories" },
];

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { setIsModalOpen } = useModalContext();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    const matchingLink = links.find((link) => link.path === currentPath);
    if (matchingLink) {
      setActiveLink(matchingLink.name);
    }
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleClick = (link: Link) => {
    setActiveLink(link.name);
    navigate(link.path);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <motion.nav
      initial={false}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed w-full top-0 left-0 z-50 px-4 py-3 backdrop-blur-md bg-amber-50/95 border-b border-amber-100 shadow-sm"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleClick(links[0])}
          className="flex items-center space-x-2 cursor-pointer"
        >
          <motion.div
            animate={{ rotate: isHovered ? 360 : 0 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="text-amber-600 text-3xl"
          >
            <FaCross />
          </motion.div>
          <motion.span
            className="text-amber-800 font-bold text-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            Aletheia<span className="text-amber-600">360</span>
          </motion.span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) => {
            const isActive = activeLink === link.name;
            return (
              <motion.span
                key={link.name}
                onClick={() => handleClick(link)}
                whileHover={{ scale: 1.05 }}
                className={`relative px-2 py-1 text-sm font-medium ${
                  isActive
                    ? "text-amber-700"
                    : "text-amber-800 hover:text-amber-600 cursor-pointer"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="navUnderline"
                    className="absolute left-0 bottom-0 w-full h-0.5 bg-amber-400"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                  />
                )}
              </motion.span>
            );
          })}

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 15px rgba(180, 83, 9, 0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 text-md bg-gradient-to-r from-amber-500 to-amber-600 text-amber-50 font-semibold rounded-full hover:from-amber-600 hover:to-amber-700 transition-all shadow-md"
          >
            Contact Us
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <MobileNav
          setIsModalOpen={setIsModalOpen}
          handleClick={handleClick}
          activeLink={activeLink}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
      </div>
    </motion.nav>
  );
};

export default Navbar;
