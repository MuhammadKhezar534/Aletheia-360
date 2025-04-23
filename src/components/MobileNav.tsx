import { motion, AnimatePresence } from "framer-motion";
import { Dispatch, Fragment, SetStateAction } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link, links } from "./Navbar";

interface props {
  mobileMenuOpen: boolean;
  activeLink: string;
  handleClick: (link: Link) => void;
  setMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

const MobileNav = ({
  mobileMenuOpen,
  setMobileMenuOpen,
  handleClick,
  activeLink,
  setIsModalOpen,
}: props) => {
  return (
    <Fragment>
      <motion.button
        className="md:hidden text-2xl z-50 bg-white text-[#4E6B7D] p-2 rounded-lg shadow"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        whileTap={{ scale: 0.9 }}
      >
        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
      </motion.button>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 top-16 bg-[#D2DFE7]/95 backdrop-blur-sm z-40 px-4 py-8 h-[100vh]"
          >
            <div className="flex flex-col space-y-6">
              {links.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`text-lg font-medium px-4 py-3 rounded-lg transition-all cursor-pointer ${
                    activeLink === link.name
                      ? "bg-[#A0B8C8] text-[#4E6B7D]"
                      : "text-[#4E6B7D] hover:bg-[#B3C9D7]/50"
                  }`}
                  onClick={() => handleClick(link)}
                >
                  {link.name}
                </motion.div>
              ))}

              <motion.button
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: links.length * 0.1, duration: 0.3 }}
                onClick={() => {
                  setIsModalOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="mt-8 px-6 py-3 bg-[#6689A1] hover:bg-[#4E6B7D] text-white font-semibold rounded-full text-lg shadow-lg transition-all"
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Fragment>
  );
};

export default MobileNav;
