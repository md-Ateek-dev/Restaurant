import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

// Modern, expanded FAQ content
const faqs = [
  {
    question: "What are your opening hours?",
    answer:
      "We welcome guests every day from 10 AM to 11 PM, including weekends and public holidays. Our team ensures a vibrant atmosphere throughout the day, whether you're joining us for brunch, a late lunch, or a cozy dinner. If you have special schedule requirements for a group event, please contact us to discuss flexible arrangements.",
  },
  {
    question: "Do you offer vegan options?",
    answer:
      "Absolutely! Our menu features a diverse selection of vegan dishes, clearly labeled for easy browsing. From hearty salads to creative mains, each vegan offering is crafted with fresh, local ingredients. We believe plant-based meals should be satisfying and delicious—you'll find options for every palate, whether you're a committed vegan or just looking to try something new.",
  },
  {
    question: "Can I make a reservation?",
    answer:
      "Yes, reservations are encouraged for groups and busy evenings. You can easily book a table through our website, where you’ll receive instant confirmation, or by calling our front desk during operating hours. For special occasions, private dining, or events, reach out by email and our manager will ensure a tailored experience for you.",
  },
  {
    question: "Do you provide catering services?",
    answer:
      "We offer full-service catering for events of all sizes, from intimate gatherings to corporate parties. Our chefs will collaborate with you to create a custom menu that fits your taste and dietary restrictions. Services include setup, on-site staff, and flexible pricing packages—contact us for a personalized quote and consultation.",
  },
  {
    question: "Is parking available nearby?",
    answer:
      "Yes, there's a dedicated customer parking lot adjacent to our entrance, available at no extra cost. Additional street parking and paid lots are also located within walking distance. For guests with accessibility needs, reserved spaces and ramp access are available, and our team is happy to assist upon request.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <section
      id="faq"
      className="min-h-screen py-16 px-4 bg-gradient-to-b from-white to-gray-100"
      aria-label="Frequently Asked Questions"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center mb-12"
      >
        <h2 className="text-4xl font-bold font-serif text-gray-900 mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 text-lg font-medium">
          Everything you want to know about our restaurant experience.
        </p>
      </motion.div>

      <div className="max-w-2xl mx-auto space-y-7">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <motion.div
              key={index}
              layout
              initial={{ borderRadius: 18 }}
              className={`bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 transition-colors ${
                isOpen ? "border-indigo-500" : ""
              }`}
            >
              <button
                type="button"
                onClick={() => toggleIndex(index)}
                className="w-full flex items-center justify-between px-7 py-5 focus:outline-none"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
                aria-labelledby={`faq-question-${index}`}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") toggleIndex(index);
                }}
              >
                <span
                  id={`faq-question-${index}`}
                  className="text-xl font-semibold text-gray-900 select-none text-left"
                >
                  {faq.question}
                </span>
                <span className="ml-4 text-indigo-600">
                  {isOpen ? <Minus size={28} /> : <Plus size={28} />}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    id={`faq-answer-${index}`}
                    aria-labelledby={`faq-question-${index}`}
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { opacity: 1, height: "auto" },
                      collapsed: { opacity: 0, height: 0 },
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="px-7 pb-6 text-base text-gray-800 leading-relaxed bg-gray-50 border-t border-gray-200"
                    style={{ overflow: "hidden" }}
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
