import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaComment } from "react-icons/fa";
import { FormData, FormErrors } from "../types/form";

interface ContactFormProps {
  formData: FormData;
  errors: FormErrors;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSubmit: (e: React.FormEvent) => void;
  isSubmitting: boolean;
}

const ContactForm = ({
  formData,
  errors,
  handleChange,
  handleSubmit,
  isSubmitting,
}: ContactFormProps) => {
  const fields = [
    {
      name: "name",
      icon: <FaUser className="text-[#6689A1]" />,
      placeholder: "Your Name",
      type: "text",
      animation: { delay: 0.3, x: -20 },
    },
    {
      name: "email",
      icon: <FaEnvelope className="text-[#6689A1]" />,
      placeholder: "Your Email",
      type: "email",
      animation: { delay: 0.4, x: -20 },
    },
    {
      name: "message",
      icon: <FaComment className="text-[#6689A1]" />,
      placeholder: "Your Message",
      type: "textarea",
      animation: { delay: 0.5, x: -20 },
    },
  ];

  return (
    <form onSubmit={handleSubmit} noValidate>
      {fields.map((field) => (
        <motion.div
          key={field.name}
          initial={{ opacity: 0, x: field.animation.x }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: field.animation.delay }}
          className="relative mb-6"
        >
          <div className="relative">
            <div
              className="absolute left-0 pl-3 flex items-center pointer-events-none"
              style={
                field.name === "message"
                  ? { top: "16px" }
                  : { top: 0, bottom: 0 }
              }
            >
              {field.icon}
            </div>
            {field.type === "textarea" ? (
              <textarea
                name={field.name}
                value={formData[field.name as keyof FormData] as string}
                onChange={handleChange}
                placeholder={field.placeholder}
                rows={5}
                className={`w-full pl-10 pr-4 py-3 bg-white bg-opacity-70 rounded-lg border ${
                  errors[field.name as keyof FormErrors]
                    ? "border-red-500"
                    : "border-[#B3C9D7]"
                } text-[#4E6B7D] placeholder-[#6689A1] focus:outline-none focus:ring-2 focus:ring-[#A0B8C8] focus:border-transparent`}
              />
            ) : (
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name as keyof FormData] as string}
                onChange={handleChange}
                placeholder={field.placeholder}
                className={`w-full pl-10 pr-4 py-3 bg-white bg-opacity-70 rounded-lg border ${
                  errors[field.name as keyof FormErrors]
                    ? "border-red-500"
                    : "border-[#B3C9D7]"
                } text-[#4E6B7D] placeholder-[#6689A1] focus:outline-none focus:ring-2 focus:ring-[#A0B8C8] focus:border-transparent`}
              />
            )}
          </div>
          {errors[field.name as keyof FormErrors] && (
            <p className="mt-1 text-sm text-red-500 absolute -bottom-5 left-0">
              {errors[field.name as keyof FormErrors]}
            </p>
          )}
        </motion.div>
      ))}

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
        disabled={isSubmitting}
        className={`w-full py-3 px-6 mt-8 ${
          isSubmitting ? "bg-gray-400" : "bg-[#6689A1] hover:bg-[#4E6B7D]"
        } text-white font-bold rounded-lg transition-all`}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </motion.button>
    </form>
  );
};

export default ContactForm;
