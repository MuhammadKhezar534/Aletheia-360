import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaTimes, FaUser, FaEnvelope, FaComment } from "react-icons/fa";

const url =
  "https://script.google.com/macros/s/AKfycbzISGZG8jHyQuNfh7lC7GrLeQ7iBv8GnYVRDfjhHYdjTEUrzXLiZLXY8tUO_yK_lLZr/exec";
interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(formData),
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log({ response });
      onClose();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm"
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md bg-gradient-to-br from-[#A0B8C8] via-[#D2DFE7] to-[#B3C9D7] rounded-xl shadow-2xl overflow-hidden border border-[#B3C9D7]"
          >
            <motion.button
              whileHover={{ rotate: 90, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="absolute top-4 right-4 text-[#4E6B7D] hover:text-[#2d3c4a] z-10"
            >
              <FaTimes className="text-2xl" />
            </motion.button>

            <div className="p-8">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl font-bold text-[#4E6B7D] mb-2 text-center"
              >
                Contact Us
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-[#6689A1] text-center mb-8"
              >
                We'd love to hear from you!
              </motion.p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="relative"
                >
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUser className="text-[#6689A1]" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full pl-10 pr-4 py-3 bg-white bg-opacity-70 rounded-lg border border-[#B3C9D7] text-[#4E6B7D] placeholder-[#6689A1] focus:outline-none focus:ring-2 focus:ring-[#A0B8C8] focus:border-transparent"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="relative"
                >
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaEnvelope className="text-[#6689A1]" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full pl-10 pr-4 py-3 bg-white bg-opacity-70 rounded-lg border border-[#B3C9D7] text-[#4E6B7D] placeholder-[#6689A1] focus:outline-none focus:ring-2 focus:ring-[#A0B8C8] focus:border-transparent"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="relative"
                >
                  <div className="absolute top-3 left-3">
                    <FaComment className="text-[#6689A1]" />
                  </div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    required
                    rows={4}
                    className="w-full pl-10 pr-4 py-3 bg-white bg-opacity-70 rounded-lg border border-[#B3C9D7] text-[#4E6B7D] placeholder-[#6689A1] focus:outline-none focus:ring-2 focus:ring-[#A0B8C8] focus:border-transparent"
                  />
                </motion.div>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 0 10px rgba(102, 137, 161, 0.3)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="w-full py-3 px-6 bg-[#6689A1] hover:bg-[#4E6B7D] text-white font-bold rounded-lg transition-all"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
