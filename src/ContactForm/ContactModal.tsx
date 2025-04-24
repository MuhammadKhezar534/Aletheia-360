import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FaTimes, FaCheckCircle } from "react-icons/fa";
import ContactForm from "./index";
import { FormData, FormErrors } from "../types/form";
const submissionUrl = import.meta.env.VITE_FORM_SUBMISSION_URL;

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateField = (name: keyof FormData, value: string) => {
    let error = "";

    switch (name) {
      case "name":
        if (!value.trim()) error = "Name is required";
        else if (value.length < 2) error = "Name must be at least 2 characters";
        break;
      case "email":
        if (!value.trim()) error = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          error = "Invalid email format";
        break;
      case "message":
        if (!value.trim()) error = "Message is required";
        else if (value.length < 10)
          error = "Message must be at least 10 characters";
        break;
    }

    return error;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    const error = validateField(name as keyof FormData, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};
    let isValid = true;

    (Object.keys(formData) as Array<keyof FormData>).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!validateForm()) return;

    setIsSubmitting(true);
    console.log({ formData, submissionUrl });
    try {
      await fetch(submissionUrl, {
        method: "POST",
        body: JSON.stringify(formData),
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
      });

      setIsSuccess(true);

      setTimeout(() => {
        onClose();
        setIsSuccess(false);
        setIsSubmitting(false);
      }, 1500);
    } catch (error) {
      console.error("Error:", error);
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (!isOpen) {
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    }
  }, [isOpen]);

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

              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-3 bg-green-100 text-green-700 rounded-lg flex items-center"
                >
                  <FaCheckCircle className="mr-2" />
                  Message sent successfully!
                </motion.div>
              )}

              <ContactForm
                formData={formData}
                errors={errors}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                isSubmitting={isSubmitting}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
