import React, { useState } from "react";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Star, 
  Heart, 
  ChefHat, 
  Utensils, 
  Instagram, 
  Facebook, 
  Twitter, 
  Youtube,
  Send,
  Award,
  Users
} from "lucide-react";
import { motion } from "framer-motion";

export default function FooterSection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  // const [hoveredSocial, setHoveredSocial] = useState(null);
  // const [hoveredLink, setHoveredLink] = useState(null);

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Reservations", href: "#reservations" },
    { name: "Events", href: "#events" },
    { name: "Contact", href: "#contact" },
    { name: "FAQ", href: "#faq" },
  ];

  const menuHighlights = [
    { name: "Signature Pasta", href: "#pasta" },
    { name: "Wood-Fired Pizza", href: "#pizza" },
    { name: "Fresh Seafood", href: "#seafood" },
    { name: "Premium Steaks", href: "#steaks" },
    { name: "Craft Cocktails", href: "#cocktails" },
    { name: "Dessert Menu", href: "#desserts" }
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#", color: "hover:text-blue-500" },
    { name: "Instagram", icon: Instagram, href: "#", color: "hover:text-pink-500" },
    { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-sky-500" },
    { name: "YouTube", icon: Youtube, href: "#", color: "hover:text-red-500" }
  ];

  const contactInfo = [
    { 
      icon: MapPin, 
      title: "Visit Us", 
      content: "123 Flavor Street, Culinary District, New York, NY 10001",
      link: "https://goo.gl/maps/e7UWWYT6cxHfnV8v5"
    },
    { 
      icon: Phone, 
      title: "Call Us", 
      content: "+1 (555) 123-FOOD",
      link: "tel:+91 7054375826"
    },
    { 
      icon: Mail, 
      title: "Email Us", 
      content: "hello@bellavista.com",
      link: "mailto:hello@bellavista.com"
    },
    { 
      icon: Clock, 
      title: "Hours", 
      content: "Mon-Thu: 5PM-10PM | Fri-Sun: 5PM-11PM",
      link: null
    }
  ];

  const handleNewsletterSubscribe = () => {
    if(email){
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
      }, 2000);
    }
  };

  const smoothScroll = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-gradient-to-tr from-stone-900 via-stone-950 to-black text-white overflow-hidden select-none font-sans">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-gradient-to-br from-orange-00 to-red-500 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-gradient-to-br from-yellow-500 to-red-600 blur-3xl animate-pulse delay-1500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Brand & Expressive Header */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-4 mb-6 group">
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-600 to-red-600 flex items-center justify-center drop-shadow-xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                <ChefHat className="w-8 h-8 text-white" />
                <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center">
                  <Star className="w-3 h-3 text-yellow-800 drop-shadow" />
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-4xl font-serif font-bold bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 bg-clip-text text-transparent">
                Bella Vista
              </h1>
              <p className="text-orange-300 uppercase tracking-widest font-semibold mt-1">
                RISTORANTE ITALIANO
              </p>
            </div>
          </div>
          <p className="text-gray-300 max-w-sm leading-relaxed">
            Experience authentic Italian cuisine crafted with passion, tradition, and fresh ingredients.
          </p>
          <div className="flex flex-col space-y-4 text-gray-400 text-sm leading-relaxed">
            <span>
              <Award className="inline w-5 h-5 text-yellow-400 mr-1" />
              Featured in Michelin Guide 2024
            </span>
            <span>
              <Star className="inline w-5 h-5 text-yellow-400 mr-1" />
              Rated 4.9/5 by patrons
            </span>
            <span>
              <Users className="inline w-5 h-5 text-cyan-400 mr-1" />
              50,000+ diners served
            </span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-orange-400 mb-6 border-b border-orange-600 pb-2">
            Quick Links
          </h3>
          <nav className="space-y-3 text-gray-300 text-lg">
            {quickLinks.map(({ name, href }, idx) => (
              <a
                key={idx}
                href={href}
                onClick={(e) => smoothScroll(e, href)}
                className="block hover:text-orange-400 transition-colors duration-300 cursor-pointer"
              >
                {name}
              </a>
            ))}
          </nav>
        </div>

        {/* Menu Highlights */}
        <div>
          <h3 className="text-xl font-semibold text-orange-400 mb-6 border-b border-orange-600 pb-2">
            Menu Highlights
          </h3>
          <nav className="space-y-3 text-gray-300 text-lg">
            {menuHighlights.map(({ name, href }, idx) => (
              <a
                key={idx}
                href={href}
                onClick={(e) => smoothScroll(e, href)}
                className="block hover:text-orange-400 transition-colors duration-300 cursor-pointer"
              >
                {name}
              </a>
            ))}
          </nav>
        </div>

        {/* Contact Info & Newsletter */}
        <div>
          <h3 className="text-xl font-semibold text-orange-400 mb-6 border-b border-orange-600 pb-2">
            Contact Info
          </h3>
          <ul className="space-y-5 text-gray-300 text-lg">
            {contactInfo.map(({ icon: Icon, title, content, link }, idx) => (
              <li key={idx} className="flex items-center gap-4">
                <div className="bg-red-600 p-2 rounded-lg text-white shadow-md">
                  <Icon size={24} />
                </div>
                <div>
                  {link ? (
                    <a
                      href={link}
                      target={link.startsWith("http") ? "_blank" : undefined}
                      rel={link.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="hover:text-orange-400 transition-colors"
                    >
                      {content}
                    </a>
                  ) : (
                    <span>{content}</span>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <h4 className="text-xl font-semibold text-orange-400 mb-4">
              Stay Connected
            </h4>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map(({ name, icon: Icon, href, color }, idx) => (
                <a
                  key={idx}
                  href={href}
                  aria-label={`Follow us on ${name}`}
                  className={`p-3 rounded-full border-2 border-red-600 text-red-600 ${color} hover:bg-red-600 hover:text-cream transition-all duration-300`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>

            <div className="font-medium text-gray-300">
              <p className="mb-2">Subscribe to our newsletter</p>
              <div className="flex gap-2">
                <input
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full px-3 py-2 rounded-lg text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <button
                  onClick={() => {
                    if (email) {
                      setIsSubmitted(true);
                      setTimeout(() => setIsSubmitted(false), 3000);
                      setEmail("");
                    }
                  }}
                  disabled={isSubmitted}
                  className={`px-4 py-2 rounded-lg bg-red-600 text-white font-semibold transition-transform duration-300 hover:scale-105 hover:shadow-lg ${isSubmitted ? "bg-green-600" : ""
                    }`}
                  aria-label="Subscribe to newsletter"
                >
                  {isSubmitted ? "Subscribed!" : <Send size={18} />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 py-6 text-center text-gray-400 text-sm font-mono select-none">
        © {new Date().getFullYear()} Bella Vista. All rights reserved.
      </div>
    </footer>
  );

  // function smoothScroll(e, href) {
  //   e.preventDefault();
  //   const el = document.querySelector(href);
  //   if (el) el.scrollIntoView({ behavior: "smooth" });
  // }
}
