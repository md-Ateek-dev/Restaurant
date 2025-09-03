import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email.trim())
    ) {
      errors.email = "Invalid email address";
    }
    if (!formData.phone.trim()) errors.phone = "Phone number is required";
    if (!formData.message.trim()) errors.message = "Message is required";
    return errors;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setFormErrors((prev) => ({ ...prev, [e.target.name]: null }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    }
  };

  const socialIcons = [
    { Icon: Facebook, url: "#" },
    { Icon: Twitter, url: "#" },
    { Icon: Instagram, url: "#" },
    { Icon: Linkedin, url: "#" },
  ];

  return (
    <motion.section id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="min-h-screen bg-white p-8 md:p-16 font-sans"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Left Side - Info + Map */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex-1"
        >
          <div className="bg-cream bg-opacity-90 rounded-2xl p-10 shadow-lg text-gray-900 flex flex-col justify-between h-full">
            <div>
              <h2 className="text-4xl font-bold mb-6 font-serif text-black">
                Contact Details
              </h2>
              <ul className="space-y-6">
                {[
                  {
                    icon: MapPin,
                    label: "2 Flavor St, Lucknow, Hazratganj, 226001",
                  },
                  {
                    icon: Phone,
                    label: <a href="tel:+919621853519" className="underline">+919621853509</a>,
                  },
                  {
                    icon: Mail,
                    label: <a href="mailto:spicegarden@restaurant.com" className="underline">Spicegarden@restaurant.com</a>,
                  },
                  { icon: Clock, label: "Mon - Sun: 10 AM - 11 PM" },
                ].map(({ icon: Icon, label }, idx) => (
                  <li key={idx} className="flex items-center  gap-5">
                    <motion.a
                      key={idx}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, y: -3 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="w-10 h-10 flex items-center justify-center rounded-full text-red-600"
                      aria-hidden="true"
                      >
                    <div className="bg-white hover:bg-red-500 text-red-500 hover:text-white border-2 border-red-600 rounded-full p-2 shadow-md flex items-center justify-center">
                      
                      <Icon size={28} className="text-cream" aria-hidden="true" />
                    </div>
                      </motion.a>
                    <span className="text-lg font-medium">{label}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Icons */}
            <div className="flex gap-6 mt-10 text-red-600">
              {socialIcons.map(({ Icon, url }, idx) => (
                <motion.a
                  key={idx}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-red-600 bg-white text-red-600 shadow-md hover:bg-red-600 hover:text-white cursor-pointer"
                  aria-label={`Visit our ${Icon.displayName || "social"} page`}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>

            {/* Embedded Map below contact details */}
            <div className="mt-12 rounded-xl overflow-hidden shadow-lg h-64 md:h-80">
              <iframe
                title="Restaurant Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.837243393107!2d72.83398181488506!3d19.123664954559796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8f55c6271d1%3A0x5a9aa97f2f429a33!2sFood%20Street!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                className="border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </motion.div>

        {/* Right Side - Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex-1 bg-cream bg-opacity-90 rounded-2xl p-10 shadow-lg text-black"
          noValidate
          aria-label="Contact form"
        >
          <h2 className="text-4xl font-bold mb-6 font-serif text-black">
            Send a Message
          </h2>
          {[
            { name: "name", type: "text", label: "Name" },
            { name: "email", type: "email", label: "Email" },
            { name: "phone", type: "tel", label: "Phone" },
          ].map(({ name, type, label }) => (
            <div className="mb-5" key={name}>
              <label htmlFor={name} className="block mb-1 font-semibold">
                {label}
              </label>
              <input
                id={name}
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                className={`w-full rounded-md border-2 px-4 py-3 font-medium transition-colors duration-300 outline-none ${
                  formErrors[name]
                    ? "border-red-600 focus:border-red-700"
                    : "border-gray-300 focus:border-red-700"
                }`}
                placeholder={`Enter your ${label.toLowerCase()}`}
                aria-invalid={!!formErrors[name]}
                aria-describedby={`${name}-error`}
              />
              {formErrors[name] && (
                <p
                  id={`${name}-error`}
                  className="text-red-600 mt-1 text-sm select-none"
                >
                  {formErrors[name]}
                </p>
              )}
            </div>
          ))}
          <div className="mb-6">
            <label htmlFor="message" className="block mb-1 font-semibold">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className={`w-full rounded-md border-2 px-4 py-3 font-medium resize-none transition-colors duration-300 outline-none ${
                formErrors.message
                  ? "border-red-600 focus:border-red-700"
                  : "border-gray-300 focus:border-red-700"
              }`}
              placeholder="Write your message here"
              aria-invalid={!!formErrors.message}
              aria-describedby="message-error"
            />
            {formErrors.message && (
              <p
                id="message-error"
                className="text-red-600 mt-1 text-sm select-none"
              >
                {formErrors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-4 text-lg font-bold rounded-2xl shadow-lg hover:scale-105 hover:shadow-red-700 transition-transform duration-300"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </motion.section>
  );

  // function handleChange(e) {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({ ...prev, [name]: value }));
  //   setFormErrors((prev) => ({ ...prev, [name]: null }));
  // }
}
