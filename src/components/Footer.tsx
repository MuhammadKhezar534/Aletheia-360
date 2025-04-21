import { motion } from "framer-motion";
import {
  FaChurch,
  FaPrayingHands,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-gradient-to-b from-blue-900 to-purple-900 text-white pt-16 pb-8 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <FaChurch className="text-2xl text-yellow-400" />
              <h3 className="text-xl font-bold">
                Aletheia<span className="text-yellow-400">360</span>
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              A ministry of Life International Christian Fellowship, sharing the
              hope and love of Christ through real stories and biblical truth.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ y: -3 }}
                href="#"
                className="text-gray-300 hover:text-yellow-400 transition-colors"
              >
                <FaFacebook className="text-xl" />
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                href="#"
                className="text-gray-300 hover:text-yellow-400 transition-colors"
              >
                <FaTwitter className="text-xl" />
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                href="#"
                className="text-gray-300 hover:text-yellow-400 transition-colors"
              >
                <FaInstagram className="text-xl" />
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                href="#"
                className="text-gray-300 hover:text-yellow-400 transition-colors"
              >
                <FaYoutube className="text-xl" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-yellow-400 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <motion.li whileHover={{ x: 5 }}>
                <span
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                  onClick={() => navigate("/")}
                >
                  Home
                </span>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <span
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                  onClick={() => navigate("/about-us")}
                >
                  About Us
                </span>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <span
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                  onClick={() => navigate("/life-stories")}
                >
                  Life Stories
                </span>
              </motion.li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-yellow-400 mb-4">
              Contact Us
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MdLocationOn className="text-xl text-yellow-400 mt-1" />
                <p className="text-gray-300">
                  123 Faith Avenue, Spiritual City, SC 12345
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <MdPhone className="text-xl text-yellow-400" />
                <p className="text-gray-300">(123) 456-7890</p>
              </div>
              <div className="flex items-center space-x-3">
                <MdEmail className="text-xl text-yellow-400" />
                <p className="text-gray-300">info@faithhub.org</p>
              </div>
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-yellow-400 mb-4">
              Stay Connected
            </h3>
            <p className="text-gray-300">
              Subscribe to our newsletter for updates and inspiration.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 bg-white bg-opacity-10 backdrop-blur-sm rounded-lg border border-white border-opacity-20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="w-full py-2 px-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-semibold rounded-lg transition-all"
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-white border-opacity-20 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <FaPrayingHands className="text-yellow-400" />
            <p className="text-gray-300">
              © {currentYear} FaithHub. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-300 hover:text-yellow-400 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-yellow-400 transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-yellow-400 transition-colors"
            >
              Sitemap
            </a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
