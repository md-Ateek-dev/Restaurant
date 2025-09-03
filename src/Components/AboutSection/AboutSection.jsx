"use client";
import React from "react";
import { motion } from "framer-motion";
import AboutImag from "../../assets/Images/Banner7.avif";
import Scene from "@/components/ui/image-ripple";
import { Link } from "react-router-dom";

const AboutUsSection = () => {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen flex items-center bg-white justify-center sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 overflow-hidden"
      aria-label="About Us section"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-amber-50/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,191,36,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(249,115,22,0.08),transparent_50%)]" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 -right-32 sm:-right-20 w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-r from-amber-200/30 to-orange-300/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -left-32 sm:-left-20 w-40 sm:w-56 h-40 sm:h-56 bg-gradient-to-r from-yellow-200/25 to-amber-300/15 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Main Container */}
      <div className="relative max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            className="order-2 lg:order-1 text-center lg:text-left space-y-6 sm:space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-block"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 text-sm font-medium rounded-full border border-amber-200/50 shadow-sm">
                <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
                Est. 2020
              </span>
            </motion.div>

            {/* Heading */}
            <div className="space-y-4">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight"
              >
                <span className="block text-orange-500">Our Story</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-lg sm:text-xl text-amber-700 font-medium tracking-wide"
              >
                Fresh Ingredients · Authentic Taste · Exceptional Dining
              </motion.p>
            </div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6 text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              <p className="text-xl sm:text-2xl font-sans text-black leading-relaxed">
                At{" "}
                <span className="font-semibold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  Bella Vista
                </span>
                , we believe food is more than a meal — it's an experience that touches the soul.
              </p>

              <div className="space-y-4">
                <p className="text-black">
                  With locally sourced ingredients and timeless culinary artistry, our chefs craft dishes that celebrate flavor, tradition, and passion.
                </p>
                <p className="text-black">
                  From the warm ambiance of our dining room to the excellence on your plate, every detail is designed to create unforgettable moments.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-amber-100">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-amber-600">5+</div>
                  <div className="text-sm text-gray-500">Years</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-amber-600">50+</div>
                  <div className="text-sm text-gray-500">Dishes</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-amber-600">1k+</div>
                  <div className="text-sm text-gray-500">Happy Customers</div>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 pt-4 max-w-screen-md mx-auto px-4"
            >
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative w-full sm:w-auto px-4 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 
                  bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold 
                  rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-amber-500/25 
                  transition-all duration-300 overflow-hidden flex justify-center items-center"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Reserve Table
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </motion.button>

              <Link to="/Menu" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-8 py-4 border-2 border-amber-500 text-amber-600 
                    font-semibold rounded-2xl hover:bg-amber-50 transition-all duration-300 flex justify-center"
                >
                  View Menu
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="order-1 lg:order-2 relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full opacity-20 blur-xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full opacity-15 blur-xl" />

            {/* Main Image Container */}
            <div className="relative group">
              {/* Image Wrapper with Perfect Mobile Fit */}
              <div className="relative aspect-[4/3] sm:aspect-[3/4] lg:aspect-[4/5] w-full max-w-lg mx-auto rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10" />

                <Scene
                  src={AboutImag}
                  alt="Chef preparing food at Bella Vista restaurant"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Overlay Content */}
                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-sm font-medium text-gray-800">Now Open</span>
                      <span className="text-sm text-gray-600">Mon-Sun 11AM-10PM</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              {/* <div className="absolute -top-4 bg-white rounded-full p-3 shadow-xl border border-amber-100">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </div>
              </div> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
