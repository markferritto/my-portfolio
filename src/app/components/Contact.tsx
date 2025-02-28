"use client";

import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";

const ReactConfetti = dynamic(() => import("react-confetti"), {
  ssr: false,
});

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

type FormStatus = "idle" | "sending" | "success" | "error";

interface SuccessMessageProps {
  onReset: () => void;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({ onReset }) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="relative text-center p-6 bg-green-100 dark:bg-green-900 rounded-lg"
    >
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
        <ReactConfetti
          width={dimensions.width}
          height={dimensions.height}
          recycle={false}
          numberOfPieces={500}
          gravity={0.2}
          initialVelocityY={-5}
          initialVelocityX={5}
          tweenDuration={5000}
          friction={0.99}
          wind={0.05}
          colors={[
            "#2563EB", // Corporate blue
            "#1E40AF", // Deep blue
            "#3730A3", // Indigo
            "#4338CA", // Royal blue
            "#6366F1", // Bright indigo
            "#FFFFFF", // White for contraster-500
          ]}
          onConfettiComplete={(confetti) => {
            setTimeout(() => {
              confetti?.reset();
            }, 3000);
          }}
        />
      </div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2 }}
        className="text-3xl mb-2"
      >
        ✨
      </motion.div>
      <h3 className="text-green-700 dark:text-green-200 font-semibold">
        Message Sent!
      </h3>
      <p className="text-green-600 dark:text-green-300">
        I'll get back to you soon.
      </p>
      <motion.button
        onClick={(e) => {
          e.preventDefault();
          onReset();
        }}
        className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Send Another Message
      </motion.button>
    </motion.div>
  );
};

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [errorMessage, setErrorMessage] = useState<string>("");

  const validateForm = (): boolean => {
    const errors: FormErrors = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!emailPattern.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      setErrorMessage("Please fix the errors above");
      return;
    }

    setFormStatus("sending");
    setErrorMessage("");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        e.currentTarget,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setFormStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setFormErrors({});
      setErrorMessage("");
    } catch (error) {
      setFormStatus("error");
      setErrorMessage("Failed to send message. Please try again.");
      console.error("Error:", error);
    }
  };

  const validateField = (name: keyof FormData, value: string) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    switch (name) {
      case "email":
        return emailPattern.test(value) ? "" : "Please enter a valid email";
      case "name":
        return value.trim().length > 0 ? "" : "Name is required";
      case "message":
        return value.trim().length >= 10
          ? ""
          : "Message must be at least 10 characters";
      default:
        return "";
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    const error = validateField(name as keyof FormData, value);
    setFormErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleReset = () => {
    setFormStatus("idle");
    setFormData({ name: "", email: "", message: "" });
    setFormErrors({});
    setErrorMessage("");
  };
    return (
      <section id="contact" className="min-h-screen bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-900/50">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Have a question or want to work together? Feel free to reach out.
            </p>
          </div>




















          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <AnimatePresence mode="wait">
              {formStatus === "success" ? (
                <SuccessMessage onReset={handleReset} />
              ) : (
                <motion.form
                  className="space-y-8"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >



















                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                        placeholder="Your name"
                        required
                      />
                      <AnimatePresence>
                        {formErrors.name && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-red-500 text-sm mt-1"
                          >
                            {formErrors.name}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                        placeholder="your@email.com"
                        required
                      />
                      <AnimatePresence>
                        {formErrors.email && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-red-500 text-sm mt-1"
                          >
                            {formErrors.email}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >





                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white resize-none"
                      placeholder="Your message..."
                      required
                    />
                    <AnimatePresence>
                      {formErrors.message && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="text-red-500 text-sm mt-1"
                        >
                          {formErrors.message}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>





















                  {errorMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}

                      className="p-4 bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-200 rounded-lg"
                    >


                      {errorMessage}
                    </motion.div>
                  )}











































                  <motion.button
                    type="submit"
                    disabled={formStatus === "sending"}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-8 rounded-lg font-medium transition-colors duration-300"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    {formStatus === "sending" ? (
                      <span className="flex items-center justify-center">
                        <motion.div
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />
                        <span className="ml-2">Sending...</span>
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </motion.button>
                </motion.form>
              )}
































            </AnimatePresence>
          </div>
        </div>
      </section>
    );
  };

export default Contact;
