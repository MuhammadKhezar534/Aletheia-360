// import { motion } from "framer-motion";
// import { useState } from "react";
// import { FaCross } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import useModalContext from "../hooks/useModalContext";

// interface link {
//   name: string;
//   path: string;
// }

// const Navbar = () => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [activeLink, setActiveLink] = useState("Home");
//   const { setIsModalOpen } = useModalContext();
//   const navigate = useNavigate();

//   const links = [
//     { name: "Home", path: "/" },
//     { name: "About", path: "/about-us" },
//     { name: "Life Stories", path: "/life-stories" },
//   ];

//   console.log({ activeLink });

//   const handleClick = (link: link) => {
//     setActiveLink(link.name);
//     navigate(link.path);
//   };

//   return (
//     <motion.nav
//       initial={false}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//       className="fixed w-full top-0 left-0 z-50 px-4 py-3 backdrop-blur-md bg-black border-b border-yellow-500 border-opacity-20"
//     >
//       <div className="max-w-7xl mx-auto flex items-center justify-between">
//         <motion.div
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           onClick={() => handleClick(links[0])}
//           className="flex items-center space-x-2 cursor-pointer"
//         >
//           <motion.div
//             animate={{ rotate: isHovered ? 360 : 0 }}
//             onHoverStart={() => setIsHovered(true)}
//             onHoverEnd={() => setIsHovered(false)}
//             className="text-yellow-400 text-3xl"
//           >
//             <FaCross />
//           </motion.div>
//           <motion.span
//             className="text-white font-bold text-lg"
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.2 }}
//           >
//             Aletheia<span className="text-yellow-400">360</span>
//           </motion.span>
//         </motion.div>

//         <div className="hidden md:flex items-center space-x-8">
//           {links.map((link) => (
//             <motion.span
//               key={link.name}
//               className={`relative px-2 py-1 text-sm ${
//                 activeLink === link.name
//                   ? "text-yellow-400"
//                   : "text-white hover:text-yellow-300 cursor-pointer"
//               }`}
//               onClick={() => handleClick(link)}
//               whileHover={{ scale: 1.05 }}
//             >
//               {link.name}
//               {activeLink === link.name && (
//                 <motion.span
//                   layoutId="navUnderline"
//                   className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-400"
//                   transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
//                 />
//               )}
//             </motion.span>
//           ))}

//           <motion.button
//             whileHover={{
//               scale: 1.05,
//               boxShadow: "0 0 15px rgba(255, 214, 0, 0.4)",
//             }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => setIsModalOpen(true)}
//             className="px-4 py-2 text-md bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400 transition-all"
//           >
//             Contact Us
//           </motion.button>
//         </div>

//         {/* <motion.button
//           className="md:hidden text-white text-2xl"
//           whileTap={{ scale: 0.9 }}
//         >
//           ☰
//         </motion.button> */}
//       </div>
//     </motion.nav>
//   );
// };

// export default Navbar;

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FaCross, FaTimes, FaBars } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import useModalContext from "../hooks/useModalContext";

interface Link {
  name: string;
  path: string;
}

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { setIsModalOpen } = useModalContext();
  const navigate = useNavigate();
  const location = useLocation();

  const links: Link[] = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about-us" },
    { name: "Life Stories", path: "/life-stories" },
  ];

  // Set active link based on current path
  useEffect(() => {
    const currentPath = location.pathname;
    const matchingLink = links.find((link) => link.path === currentPath);
    if (matchingLink) {
      setActiveLink(matchingLink.name);
    }
  }, [location.pathname]);

  const handleClick = (link: Link) => {
    setActiveLink(link.name);
    navigate(link.path);
    setMobileMenuOpen(false); // Close mobile menu when a link is clicked
  };

  return (
    <motion.nav
      initial={false}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed w-full top-0 left-0 z-50 px-4 py-3 backdrop-blur-md bg-white/90 border-b border-indigo-400 shadow-sm"
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
            className="text-indigo-600 text-3xl"
          >
            <FaCross />
          </motion.div>
          <motion.span
            className="text-indigo-900 font-bold text-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            Aletheia<span className="text-indigo-500">360</span>
          </motion.span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <motion.span
              key={link.name}
              className={`relative px-2 py-1 text-sm font-medium ${
                activeLink === link.name
                  ? "text-indigo-600"
                  : "text-indigo-900 hover:text-indigo-500 cursor-pointer"
              }`}
              onClick={() => handleClick(link)}
              whileHover={{ scale: 1.05 }}
            >
              {link.name}
              {activeLink === link.name && (
                <motion.span
                  layoutId="navUnderline"
                  className="absolute left-0 bottom-0 w-full h-0.5 bg-indigo-500"
                  transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                />
              )}
            </motion.span>
          ))}

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 15px rgba(79, 70, 229, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 text-md bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-full hover:from-indigo-600 hover:to-purple-600 transition-all shadow-md"
          >
            Contact Us
          </motion.button>
        </div>

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
      </div>
    </motion.nav>
  );
};

export default Navbar;
