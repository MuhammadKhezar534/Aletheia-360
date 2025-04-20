import { motion } from "framer-motion";
import { useState } from "react";
import { FaCross } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface link {
  name: string;
  path: string;
}

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const navigate = useNavigate();

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about-us" },
    { name: "Life Stories", path: "/life-stories" },
  ];

  console.log({ activeLink });

  const handleClick = (link: link) => {
    setActiveLink(link.name);
    navigate(link.path);
  };

  return (
    <motion.nav
      initial={false}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed w-full top-0 left-0 z-50 px-4 py-3 backdrop-blur-md bg-black bg-opacity-50 border-b border-yellow-500 border-opacity-20"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
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
            className="text-yellow-400 text-3xl"
          >
            <FaCross />
          </motion.div>
          <motion.span
            className="text-white font-bold text-xl"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            Aletheia<span className="text-yellow-400">360</span>
          </motion.span>
        </motion.div>

        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <motion.span
              key={link.name}
              className={`relative px-2 py-1 text-lg ${
                activeLink === link.name
                  ? "text-yellow-400"
                  : "text-white hover:text-yellow-300 cursor-pointer"
              }`}
              onClick={() => handleClick(link)}
              whileHover={{ scale: 1.05 }}
            >
              {link.name}
              {activeLink === link.name && (
                <motion.span
                  layoutId="navUnderline"
                  className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-400"
                  transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                />
              )}
            </motion.span>
          ))}

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 15px rgba(255, 214, 0, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400 transition-all"
          >
            Contact Us
          </motion.button>
        </div>

        <motion.button
          className="md:hidden text-white text-2xl"
          whileTap={{ scale: 0.9 }}
        >
          ☰
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
