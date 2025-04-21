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
        className="md:hidden text-2xl z-50 bg-white"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
            className="md:hidden fixed inset-0 top-16 bg-white/95 backdrop-blur-sm z-40 px-4 py-8 h-[100vh]"
          >
            <div className="flex flex-col space-y-8">
              {links.map((link) => (
                <motion.div
                  key={link.name}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`text-lg font-medium px-4 py-2 rounded-lg ${
                    activeLink === link.name
                      ? "bg-indigo-100 text-indigo-600"
                      : "text-indigo-900 hover:bg-indigo-50"
                  }`}
                  onClick={() => handleClick(link)}
                >
                  {link.name}
                </motion.div>
              ))}

              <motion.button
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.3 }}
                onClick={() => {
                  setIsModalOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="mt-8 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-full text-lg shadow-md"
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
