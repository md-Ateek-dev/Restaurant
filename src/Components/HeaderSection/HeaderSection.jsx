// import React, { useState, useEffect } from "react";
// import Swal from "sweetalert2";
// // import { Menu, X, ShoppingCart, ArrowRight } from "lucide-react";
// import { useCart } from "../CartContextSection/CartContext";

// import {
//   Menu,
//   X,
//   ShoppingCart,
//   Sparkles,
//   Star,
//   ChefHat,
//   MapPin,
//   Clock,
//   ArrowRight,
// } from "lucide-react";

// const HeaderSection = () => {

//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [activeNav, setActiveNav] = useState("home");
//  const { getTotalItems, cartItems = []  } = useCart(); // ✅ Cart hook से count
// //  const { getTotalItems, cart = [] } = useCart();

//      const [open, setOpen] = useState(false);
//   // const { cartItems = [] } = useCart(); // ✅ default fallback

//     // return cartItems.reduce((total, item) => total + item.quantity, 0);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navItems = [
//     { name: "Home", href: "#home", id: "home" },
//     { name: "About", href: "#about", id: "about" },
//     { name: "Menu", href: "#menu", id: "menu" },
//     { name: "SpecialDishes", href: "#specialdishes", id: "specialdishes" },
//     { name: "Services", href: "#services", id: "services" },
//     { name: "Contact", href: "#contact", id: "contact" },
//   ];

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//     document.body.style.overflow = !isMobileMenuOpen ? "hidden" : "auto";
//   };

//   const scrollToSection = (href) => {
//     const element = document.querySelector(href);
//     if (element) {
//       const offset = 80;
//       const top = element.offsetTop - offset;
//       window.scrollTo({ top, behavior: "smooth" });
//       setActiveNav(href.replace("#", ""));
//     }
//     if (isMobileMenuOpen) toggleMobileMenu();
//   };

//   // SweetAlert Booking Handler
//   const handleOrderConfirm = () => {
//     setIsModalOpen(false);
//     Swal.fire({
//       icon: "success",
//       title: "Order Booked!",
//       text: "Your order has been placed successfully.",
//       timer: 3000,
//       showConfirmButton: false,
//       toast: true,
//       position: "top",
//       background: "#fff7ed",
//       color: "#dc2626",
//     });
//   };

//   return (
//     <>
//       {/* Header */}
//       <header
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
//           isScrolled
//             ? "bg-red-800/85 backdrop-blur-xl shadow-2xl border-b border-red-500/50"
//             : "bg-red-900 backdrop-blur-xl"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto flex items-center justify-between h-18">
//           {/* Logo + Brand */}
//           <div className="flex items-center space-x-4 group cursor-pointer">
//             <div className="relative w-12 h-12 bg-gradient-to-br from-orange-600 via-red-600 to-rose-600 rounded-2xl flex items-center justify-center shadow-xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 hover:shadow-orange-500/30">
//               <ChefHat className="w-6 h-6  text-white drop-shadow-lg" />
//               <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center animate-pulse">
//                 <Sparkles className=" w-2.5 h-2.5 text-orange-600" />
//               </div>
//               <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-2xl"></div>
//             </div>
//             <div className="group-hover:translate-x-1 transition-transform duration-300">
//               <h1 className="text-xl font-bold bg-gradient-to-r from-orange-400 via-red-600 to-rose-500 bg-clip-text text-transparent">
//                 Spice Garden
//               </h1>
//               <div className="flex items-center space-x-1">
//                 {[...Array(5)].map((_, i) => (
//                   <Star
//                     key={i}
//                     className="w-2.5 h-2.5 text-yellow-400 fill-current"
//                   />
//                 ))}
//                 <span className="text-xs text-orange-200 ml-2 font-medium">
//                   4.9
//                 </span>
//               </div>
//             </div>
//           </div>
//           {/* Desktop Nav */}
//           <nav className="hidden lg:flex items-center space-x-8">
//             {navItems.map((item) => (
//               <button
//                 key={item.href}
//                 onClick={() => scrollToSection(item.href)}
//                 className={`relative px-4 py-2.5 text-lg font-medium transition-all duration-300 rounded-xl group overflow-hidden ${
//                   activeNav === item.id
//                     ? "text-orange-300 bg-orange-900/30"
//                     : "text-white hover:text-orange-300"
//                 }`}
//               >
//                 <span className="relative z-10">{item.name}</span>
//                 <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-xl"></div>
//                 {activeNav === item.id && (
//                   <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-orange-400 to-red-400 rounded-full"></div>
//                 )}
//               </button>
//             ))}
//              <div className="relative">
//       {/* ✅ Cart Icon Button */}
//       <button
//         onClick={() => setOpen(!open)}
//         className="relative p-3 rounded-xl bg-slate-800/60 hover:bg-slate-700/60 transition-all duration-300 hover:scale-105 shadow-lg"
//       >
//         <ShoppingCart className="w-6 h-6 text-orange-400" />
//         {getTotalItems() > 0 && (
//           <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
//             {getTotalItems()}
//           </span>
//         )}
//       </button>

//       {/* ✅ Cart Dropdown */}
//       {open && (
//         <div className="absolute right-0 mt-3 w-72 bg-white shadow-2xl rounded-xl p-4 z-50">
//           <div className="flex justify-between items-center mb-3">
//             <h2 className="font-semibold text-gray-800">Your Cart</h2>
//             <button onClick={() => setOpen(false)}>
//               <X className="w-5 h-5 text-gray-500 hover:text-red-500" />
//             </button>
//           </div>

//           {Array.isArray(cartItems) && cartItems.length > 0 ? (
//             <ul className="space-y-2 max-h-60 overflow-y-auto">
//               {cartItems.map((item, index) => (
//                 <li
//                   key={index}
//                   className="flex justify-between items-center border-b pb-2"
//                 >
//                           {item.name} - {item.quantity} × ₹{item.price}

//                   <div>
//                     <p className="text-sm font-medium text-gray-700">
//                       {item.name}
//                     </p>
//                     <p className="text-xs text-gray-500">
//                       {item.quantity} × ₹{item.price}
//                     </p>
//                   </div>
//                   <p className="text-sm font-semibold text-gray-800">
//                     ₹{item.quantity * item.price}
//                   </p>
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p className="text-gray-500 text-sm">Your cart is empty</p>
//           )}

//           {cartItems.length > 0 && (
//             <div className="mt-3">
//               <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 rounded-lg shadow">
//                 Checkout
//               </button>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//             {/* ✅ Cart Icon Button */}
//           {/* <button className="relative p-3 rounded-xl bg-slate-800/60 hover:bg-slate-700/60 transition-all duration-300 hover:scale-105 shadow-lg">
//             <ShoppingCart className="w-6 h-6 text-orange-400" />
//             {getTotalItems() > 0 && (
//               <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
//                 {getTotalItems()}
//               </span>
//             )}
//           </button> */}
//             <button
//               onClick={() => setIsModalOpen(true)}
//               className="ml-6 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-xl shadow-xl hover:shadow-orange-500/30 hover:scale-105 transition-all duration-300 transform hover:-translate-y-0.5 relative overflow-hidden group"
//             >
//               <span className="relative z-10 flex items-center space-x-2">
//                 <span>Book Order</span>
//                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
//               </span>
//               <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right"></div>
//             </button>
//           </nav>
//           {/* Mobile Menu Button */}
//           <button
//             onClick={toggleMobileMenu}
//             className="lg:hidden p-3 rounded-xl text-slate-300 bg-slate-800/60 shadow-lg backdrop-blur-sm hover:bg-slate-700/60 transition-all duration-300 hover:scale-105"
//           >
//             <div className="relative w-5 h-5">
//               <Menu
//                 className={`absolute inset-0 transition-all duration-300 ${
//                   isMobileMenuOpen ? "opacity-0 rotate-180" : "opacity-100 rotate-0"
//                 }`}
//               />
//               <X
//                 className={`absolute inset-0 transition-all duration-300 ${
//                   isMobileMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-180"
//                 }`}
//               />
//             </div>
//           </button>
//         </div>
//       </header>
//       {/* Mobile Drawer Overlay */}
//       <div
//         className={`lg:hidden fixed inset-0 bg-slate-900/70 backdrop-blur-sm z-40 transition-opacity duration-500 ${
//           isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
//         }`}
//         onClick={toggleMobileMenu}
//       />
//       {/* Mobile Drawer */}
//       <div
//         className={`lg:hidden fixed inset-y-0 right-0 w-80 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 z-50 transform transition-all duration-500 ease-out border-l border-slate-700/50 ${
//           isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         <div className="flex justify-between items-center p-6 border-b border-slate-700/50">
//           <div className="flex items-center space-x-3">
//             <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center shadow-lg">
//               <ChefHat className="w-5 h-5 text-white" />
//             </div>
//             <h2 className="text-xl font-bold text-white">Spice Garden</h2>
//           </div>
//           <button
//             onClick={toggleMobileMenu}
//             className="text-slate-300 p-2 hover:bg-slate-700/50 rounded-lg transition-colors duration-200"
//           >
//             <X className="w-5 h-5" />
//           </button>
//         </div>
//         <nav className="flex flex-col p-6 space-y-2">
//           {navItems.map((item) => (
//             <button
//               key={item.href}
//               onClick={() => scrollToSection(item.href)}
//               className={`text-left p-4 rounded-xl transition-all duration-300 group relative overflow-hidden ${
//                 activeNav === item.id
//                   ? "text-orange-400 bg-orange-900/30"
//                   : "text-slate-300 hover:text-orange-400 hover:bg-orange-900/20"
//               }`}
//             >
//               <span className="relative z-10 font-medium">{item.name}</span>
//               <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-orange-400 to-red-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top rounded-r-full"></div>
//             </button>
//           ))}
          
//           {/* ✅ Cart Icon Button Mobile */}
//           <button className="relative flex items-center space-x-2 p-3 rounded-xl bg-slate-800/60 hover:bg-slate-700/60 transition">
//             <ShoppingCart className="w-6 h-6 text-orange-400" />
//             {getTotalItems() > 0 && (
//               <span className="absolute -top-1 left-6 bg-red-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
//                 {getTotalItems()}
//               </span>
//             )}
//             <span className="text-slate-200">Cart</span>
//           </button>
          
          
//           <button
//             onClick={() => {
//               setIsModalOpen(true);
//               toggleMobileMenu();
//             }}
//             className="mt-6 p-4 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-xl shadow-xl hover:shadow-orange-500/30 hover:scale-105 transition-all duration-300 font-semibold relative overflow-hidden group"
//           >
//             <span className="relative z-10 flex items-center justify-center space-x-2">
//               <span>Book Order</span>
//               <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
//             </span>
//             <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
//           </button>
//         </nav>
//         {/* Mobile Menu Footer */}
//         <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-slate-700/50 bg-slate-900/60">
//           <div className="flex items-center justify-center space-x-6 text-slate-400 text-sm">
//             <div className="flex items-center space-x-2 bg-slate-800/50 px-3 py-2 rounded-full">
//               <MapPin className="w-3.5 h-3.5 text-orange-400" />
//               <span>Lucknow</span>
//             </div>
//             <div className="flex items-center space-x-2 bg-slate-800/50 px-3 py-2 rounded-full">
//               <Clock className="w-3.5 h-3.5 text-red-400" />
//               <span>9AM - 11PM</span>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Book Order Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur-2xl p-4">
//           <div
//             className={`bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative transform transition-all duration-500 ${
//               isModalOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
//             }`}
//             style={{
//               background:
//                 "linear-gradient(135deg, #ffffff 0%, #fef7f0 50%, #ffffff 100%)",
//               boxShadow:
//                 "0 25px 50px -12px rgba(0,0,0,0.25), 0 0 0 1px rgba(251,146,60,0.1)",
//             }}
//           >
//             <button
//               onClick={() => setIsModalOpen(false)}
//               className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 p-2 hover:bg-orange-50 rounded-xl transition-all duration-300 hover:scale-110 z-10"
//             >
//               <X className="w-5 h-5" />
//             </button>
//             {/* Modal Header */}
//             <div className="text-center pt-10 pb-8 px-8">
//               <div className="relative w-16 h-16 bg-gradient-to-br from-orange-400 via-red-500 to-rose-600 flex items-center justify-center mx-auto mb-6 shadow-xl transform hover:scale-110 transition-all duration-500 rounded-2xl">
//                 <ChefHat className="w-8 h-8 text-white drop-shadow-lg" />
//                 <div className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center animate-pulse">
//                   <Sparkles className="w-3 h-3 text-orange-700" />
//                 </div>
//                 <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-2xl"></div>
//               </div>
//               <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-600 via-red-500 to-rose-600 bg-clip-text text-transparent mb-2">
//                 Book Your Order
//               </h2>
//               <p className="text-slate-600 text-base">
//                 Enjoy the flavors of Spice Garden with a simple order!
//               </p>
//             </div>
//             {/* Form Container */}
//             <div className="px-8 pb-8">
//               <div className="bg-gradient-to-br from-orange-50/90 to-red-50/80 backdrop-blur-sm rounded-2xl p-8 border border-orange-200/40 shadow-inner relative overflow-hidden">
//                 <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-orange-50/30 opacity-80"></div>
//                 <div className="relative z-10">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                     {/* Customer Information */}
//                     <div className="space-y-5">
//                       <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
//                         <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 animate-pulse"></div>
//                         Your Details
//                       </h3>
//                       <div className="relative group">
//                         <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                         <input
//                           type="text"
//                           placeholder="Full Name"
//                           className="relative w-full p-4 border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all duration-300 bg-white/90 backdrop-blur-sm group-hover:shadow-lg hover:border-orange-400 placeholder-slate-500 hover:bg-white"
//                         />
//                       </div>
//                       <div className="relative group">
//                         <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                         <input
//                           type="tel"
//                           placeholder="Phone Number"
//                           className="relative w-full p-4 border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all duration-300 bg-white/90 backdrop-blur-sm group-hover:shadow-lg hover:border-orange-400 placeholder-slate-500 hover:bg-white"
//                         />
//                       </div>
//                       <div className="relative group">
//                         <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                         <input
//                           type="email"
//                           placeholder="Email Address"
//                           className="relative w-full p-4 border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all duration-300 bg-white/90 backdrop-blur-sm group-hover:shadow-lg hover:border-orange-400 placeholder-slate-500 hover:bg-white"
//                         />
//                       </div>
//                     </div>
//                     {/* Order Details */}
//                     <div className="space-y-5">
//                       <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
//                         <div className="w-2 h-2 bg-red-500 rounded-full mr-3 animate-pulse"></div>
//                         Order Details
//                       </h3>
//                       <div className="relative group">
//                         <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                         <input
//                           type="date"
//                           className="relative w-full p-4 border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all duration-300 bg-white/90 backdrop-blur-sm group-hover:shadow-lg hover:border-orange-400 text-slate-700 hover:bg-white"
//                         />
//                       </div>
//                       <div className="relative group">
//                         <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                         <select className="relative w-full p-4 border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all duration-300 bg-white/90 backdrop-blur-sm group-hover:shadow-lg hover:border-orange-400 appearance-none cursor-pointer text-slate-700 hover:bg-white">
//                           <option value="">Preferred Time</option>
//                           <option>Breakfast (9am - 11am)</option>
//                           <option>Lunch (12pm - 3pm)</option>
//                           <option>Snacks (4pm - 7pm)</option>
//                           <option>Dinner (7pm - 11pm)</option>
//                         </select>
//                         <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
//                           <div className="w-0 h-0 border-l-2 border-r-2 border-t-2 border-l-transparent border-r-transparent border-t-orange-500"></div>
//                         </div>
//                       </div>
//                       <div className="relative group">
//                         <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                         <input
//                           type="text"
//                           placeholder="Order Items (e.g. Paneer Tikka, Butter Naan)"
//                           className="relative w-full p-4 border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all duration-300 bg-white/90 backdrop-blur-sm group-hover:shadow-lg hover:border-orange-400 placeholder-slate-500 hover:bg-white"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                   {/* Additional Instructions */}
//                   <div className="mt-8 relative group">
//                     <label className=" text-lg font-semibold text-slate-800 mb-3 flex items-center">
//                       <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 animate-pulse"></div>
//                       Notes / Preferences
//                     </label>
//                     <div className="relative">
//                       <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                       <textarea
//                         placeholder="Allergies, spice level, delivery/pickup requests, etc."
//                         rows="4"
//                         className="relative w-full p-4 border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all duration-300 bg-white/90 backdrop-blur-sm resize-none group-hover:shadow-lg hover:border-orange-400 placeholder-slate-500 hover:bg-white"
//                       />
//                     </div>
//                   </div>
//                   {/* Action Buttons */}
//                   <div className="flex space-x-4 mt-8">
//                     <button
//                       onClick={() => setIsModalOpen(false)}
//                       className="flex-1 py-4 px-6 border-2 border-orange-200 text-slate-700 font-semibold rounded-xl hover:bg-orange-50 hover:border-orange-300 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
//                     >
//                       Cancel
//                     </button>
//                     <button
//                       type="button"
//                       onClick={handleOrderConfirm}
//                       className="flex-1 py-4 px-6 bg-gradient-to-r from-orange-500 via-red-500 to-rose-600 text-white font-bold rounded-xl shadow-xl hover:shadow-orange-500/40 hover:scale-105 transition-all duration-300 transform hover:-translate-y-0.5 relative overflow-hidden group"
//                     >
//                       <span className="relative z-10 flex items-center justify-center space-x-2">
//                         <span>Book Order</span>
//                         <Sparkles className="w-4 h-4 animate-pulse" />
//                       </span>
//                       <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
//                       <div className="absolute inset-0 bg-white/10 transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-xl"></div>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//               {/* Modal Footer */}
//               <div className="mt-6 pt-6 border-t border-orange-200/60">
//                 <div className="flex items-center justify-center space-x-8 text-slate-500">
//                   <div className="flex items-center space-x-2 bg-orange-100/80 px-4 py-2 rounded-full border border-orange-200/50">
//                     <MapPin className="w-4 h-4 text-orange-500" />
//                     <span className="font-medium text-slate-700">
//                       Lucknow, UP
//                     </span>
//                   </div>
//                   <div className="flex items-center space-x-2 bg-red-100/80 px-4 py-2 rounded-full border border-red-200/50">
//                     <Clock className="w-4 h-4 text-red-500" />
//                     <span className="font-medium text-slate-700">
//                       9AM - 11PM
//                     </span>
//                   </div>
//                 </div>
//                 <p className="text-center text-sm text-slate-400 mt-4">
//                   Confirmation within 30 minutes via email or SMS
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//       {/* Custom Styles */}
//       <style>{`
//         /* Custom scrollbar */
//         ::-webkit-scrollbar {
//           width: 6px;
//         }
//         ::-webkit-scrollbar-track {
//           background: rgba(251,146,60,0.1);
//           border-radius: 10px;
//         }
//         ::-webkit-scrollbar-thumb {
//           background: linear-gradient(to bottom, #f97316, #dc2626);
//           border-radius: 10px;
//         }
//         ::-webkit-scrollbar-thumb:hover {
//           background: linear-gradient(to bottom, #ea580c, #b91c1c);
//         }
//         /* Smooth animations */
//         * {
//           -webkit-font-smoothing: antialiased;
//           -moz-osx-font-smoothing: grayscale;
//         }
//         /* Enhanced form focus effects */
//         input:focus, select:focus, textarea:focus {
//           transform: translateY(-1px);
//           box-shadow: 0 10px 25px rgba(249, 115, 22, 0.15);
//         }
//       `}</style>
//     </>
//   );
// };

// export default HeaderSection;




// import React, { useState, useEffect } from "react";
// import Swal from "sweetalert2";
// import {
//   Menu,
//   X,
//   ShoppingCart,
//   Sparkles,
//   Star,
//   ChefHat,
//   MapPin,
//   Clock,
//   ArrowRight,
// } from "lucide-react";
// import { useCart } from "../CartContextSection/CartContext";

// const HeaderSection = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [activeNav, setActiveNav] = useState("home");
//   const { getTotalItems, cartItems = [] } = useCart();
//   // Cart dropdown state works for both desktop and mobile now
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navItems = [
//     { name: "Home", href: "#home", id: "home" },
//     { name: "About", href: "#about", id: "about" },
//     { name: "Menu", href: "#menu", id: "menu" },
//     { name: "SpecialDishes", href: "#specialdishes", id: "specialdishes" },
//     { name: "Services", href: "#services", id: "services" },
//     { name: "Contact", href: "#contact", id: "contact" },
//   ];

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//     document.body.style.overflow = !isMobileMenuOpen ? "hidden" : "auto";
//     setOpen(false); // Close cart dropdown when opening/closing mobile menu
//   };

//   const scrollToSection = (href) => {
//     const element = document.querySelector(href);
//     if (element) {
//       const offset = 80;
//       const top = element.offsetTop - offset;
//       window.scrollTo({ top, behavior: "smooth" });
//       setActiveNav(href.replace("#", ""));
//     }
//     if (isMobileMenuOpen) toggleMobileMenu();
//   };

//   const handleOrderConfirm = () => {
//     setIsModalOpen(false);
//     Swal.fire({
//       icon: "success",
//       title: "Order Booked!",
//       text: "Your order has been placed successfully.",
//       timer: 3000,
//       showConfirmButton: false,
//       toast: true,
//       position: "top",
//       background: "#fff7ed",
//       color: "#dc2626",
//     });
//   };

//   return (
//     <>
//       {/* Header */}
//       <header
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
//           isScrolled
//             ? "bg-red-800/85 backdrop-blur-xl shadow-2xl border-b border-red-500/50"
//             : "bg-red-900 backdrop-blur-xl"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto flex items-center justify-between lg:h-21 h-16 px-4 sm:px-6">
//           {/* Logo + Brand */}
//           <div className="items-center cursor-pointer">
//             <div className="relative sm:space-x-4 w-10 right-20 top-5 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-orange-600 via-red-600 to-rose-600 rounded-2xl flex items-center shadow-xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 hover:shadow-orange-500/30">
//               <ChefHat className="w-5 absolute left-3 sm:w-6 h-5 sm:h-6 text-white drop-shadow-lg" />
//               <div className="absolute -top-1 -right-5 w-3.5 sm:w-4 h-3.5 sm:h-4 bg-yellow-400 rounded-full flex items-center justify-center animate-pulse">
//                 <Sparkles className=" w-2 h-2 sm:w-2.5 sm:h-2.5 text-orange-600" />
//               </div>
//               <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-2xl"></div>
//             </div>
//             <div className="group-hover:translate-x-1 flex transition-transform duration-300 ml-2">
//               <h1 className="text-xl sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-orange-400 via-red-600 to-rose-500 bg-clip-text text-transparent leading-tight">
//                 Spice Garden
//               </h1>
//               <div className="flex items-center space-x-1">
//                 {[...Array(5)].map((_, i) => (
//                   <Star
//                     key={i}
//                     className="w-2.5 h-2.5 sm:w-2.5 sm:h-2.5 text-yellow-400 fill-current"
//                   />
//                 ))}
//                 <span className="text-xs sm:text-sm text-orange-200 ml-2 font-medium">
//                   4.9
//                 </span>
//               </div>
//             </div>
//           </div>
//           {/* Desktop Nav */}
//           <nav className="hidden lg:flex items-center space-x-3 xl:space-x-8">
//             {navItems.map((item) => (
//               <button
//                 key={item.href}
//                 onClick={() => scrollToSection(item.href)}
//                 className={`relative px-2 py-2 sm:px-4 sm:py-2.5 text-base sm:text-lg font-medium transition-all duration-300 rounded-xl group overflow-hidden ${
//                   activeNav === item.id
//                     ? "text-orange-300 bg-orange-900/30"
//                     : "text-white hover:text-orange-300"
//                 }`}
//               >
//                 <span className="relative z-10">{item.name}</span>
//                 <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-xl"></div>
//                 {activeNav === item.id && (
//                   <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-orange-400 to-red-400 rounded-full"></div>
//                 )}
//               </button>
//             ))}
//             {/* Cart Button */}
//             <div className="relative">
//               <button
//                 onClick={() => setOpen(!open)}
//                 className="relative p-2 sm:p-3 rounded-xl bg-slate-800/60 hover:bg-slate-700/60 transition-all duration-300 hover:scale-105 shadow-lg"
//               >
//                 <ShoppingCart className="w-5 sm:w-6 h-5 sm:h-6 text-orange-400" />
//                 {getTotalItems() > 0 && (
//                   <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold px-1 py-0.5 rounded-full">
//                     {getTotalItems()}
//                   </span>
//                 )}
//               </button>
//               {/* Cart Dropdown - Desktop only */}
//               {open && (
//                 <div className="absolute right-0 mt-3 w-60 sm:w-72 bg-white shadow-2xl rounded-xl p-3 sm:p-4 z-50">
//                   <div className="flex justify-between items-center mb-3">
//                     <h2 className="font-semibold text-gray-800">Your Cart</h2>
//                     <button onClick={() => setOpen(false)}>
//                       <X className="w-5 h-5 text-gray-500 hover:text-red-500" />
//                     </button>
//                   </div>
//                   {Array.isArray(cartItems) && cartItems.length > 0 ? (
//                     <ul className="space-y-2 max-h-40 sm:max-h-60 overflow-y-auto">
//                       {cartItems.map((item, index) => (
//                         <li
//                           key={index}
//                           className="flex justify-between items-center border-b pb-2"
//                         >
//                           <div>
//                             <p className="text-sm font-medium text-gray-700">
//                               {item.name}
//                             </p>
//                             <p className="text-xs text-gray-500">
//                               {item.quantity} × ₹{item.price}
//                             </p>
//                           </div>
//                           <p className="text-sm font-semibold text-gray-800">
//                             ₹{item.quantity * item.price}
//                           </p>
//                         </li>
//                       ))}
//                     </ul>
//                   ) : (
//                     <p className="text-gray-500 text-sm">Your cart is empty</p>
//                   )}
//                   {cartItems.length > 0 && (
//                     <div className="mt-3">
//                       <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 rounded-lg shadow">
//                         Checkout
//                       </button>
//                     </div>
//                   )}
//                 </div>
//               )}
//             </div>
//             {/* Book Order Button */}
//             <button
//               onClick={() => setIsModalOpen(true)}
//               className="ml-3 sm:ml-6 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-xl shadow-xl hover:shadow-orange-500/30 hover:scale-105 transition-all duration-300 flex item-center space-x-2 transform hover:-translate-y-0.5 relative overflow-hidden group"
//             >
//               <span className="relative z-10 flex items-center space-x-2">
//                 <span>Book Order</span>
//                 <ArrowRight className="w-3 sm:w-4 h-3 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" />
//               </span>
//               <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right"></div>
//             </button>
//           </nav>
//           {/* Mobile Menu Button */}
//           <button
//             onClick={toggleMobileMenu}
//             className="lg:hidden p-2 sm:p-3 rounded-xl text-slate-300 bg-slate-800/60 shadow-lg backdrop-blur-sm hover:bg-slate-700/60 transition-all duration-300 hover:scale-105"
//           >
//             <div className="relative w-5 h-5">
//               <Menu
//                 className={`absolute inset-0 transition-all duration-300 ${
//                   isMobileMenuOpen ? "opacity-0 rotate-180" : "opacity-100 rotate-0"
//                 }`}
//               />
//               <X
//                 className={`absolute inset-0 transition-all duration-300 ${
//                   isMobileMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-180"
//                 }`}
//               />
//             </div>
//           </button>
//         </div>
//       </header>
//       {/* Mobile Drawer Overlay */}
//       <div
//         className={`lg:hidden fixed inset-0 bg-slate-900/70 backdrop-blur-sm z-40 transition-opacity duration-500 ${
//           isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
//         }`}
//         onClick={toggleMobileMenu}
//       />
//       {/* Mobile Drawer */}
//       <div
//         className={`lg:hidden fixed inset-y-0 right-0 w-64 sm:w-80 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 z-50 transform transition-all duration-500 ease-out border-l border-slate-700/50 ${
//           isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         <div className="flex justify-between items-center p-4 sm:p-6 border-b border-slate-700/50">
//           <div className="flex items-center space-x-2 sm:space-x-3">
//             <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center shadow-lg">
//               <ChefHat className="w-5 h-5 text-white" />
//             </div>
//             <h2 className="text-lg sm:text-xl font-bold text-white">Spice Garden</h2>
//           </div>
//           <button
//             onClick={toggleMobileMenu}
//             className="text-slate-300 p-2 hover:bg-slate-700/50 rounded-lg transition-colors duration-200"
//           >
//             <X className="w-5 h-5" />
//           </button>
//         </div>
//         <nav className="flex flex-col p-4 sm:p-6 space-y-2 relative">
//           {navItems.map((item) => (
//             <button
//               key={item.href}
//               onClick={() => scrollToSection(item.href)}
//               className={`text-left p-3 sm:p-4 rounded-xl transition-all duration-300 group relative overflow-hidden ${
//                 activeNav === item.id
//                   ? "text-orange-400 bg-orange-900/30"
//                   : "text-slate-300 hover:text-orange-400 hover:bg-orange-900/20"
//               }`}
//             >
//               <span className="relative z-10 font-medium">{item.name}</span>
//               <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-orange-400 to-red-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top rounded-r-full"></div>
//             </button>
//           ))}
//           {/* Cart Icon Button Mobile */}
//           <button 
//             className="relative flex items-center space-x-2 p-3 rounded-xl bg-slate-800/60 hover:bg-slate-700/60 transition"
//             onClick={() => setOpen(!open)}
//           >
//             <ShoppingCart className="w-5 sm:w-6 h-5 sm:h-6 text-orange-400" />
//             {getTotalItems() > 0 && (
//               <span className="absolute -top-1 left-6 bg-red-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
//                 {getTotalItems()}
//               </span>
//             )}
//             <span className="text-slate-200">Cart</span>
//           </button>
//           {/* Cart Dropdown Mobile */}
//           {open && (
//             <div className="fixed bottom-0 left-0 w-full sm:w-80 mx-auto bg-white shadow-2xl rounded-t-xl p-4 z-50">
//               <div className="flex justify-between items-center mb-3">
//                 <h2 className="font-semibold text-gray-800">Your Cart</h2>
//                 <button onClick={() => setOpen(false)}>
//                   <X className="w-5 h-5 text-gray-500 hover:text-red-500" />
//                 </button>
//               </div>
//               {Array.isArray(cartItems) && cartItems.length > 0 ? (
//                 <ul className="space-y-2 max-h-52 overflow-y-auto">
//                   {cartItems.map((item, index) => (
//                     <li
//                       key={index}
//                       className="flex justify-between items-center border-b pb-2"
//                     >
//                       <div>
//                         <p className="text-sm font-medium text-gray-700">
//                           {item.name}
//                         </p>
//                         <p className="text-xs text-gray-500">
//                           {item.quantity} × ₹{item.price}
//                         </p>
//                       </div>
//                       <p className="text-sm font-semibold text-gray-800">
//                         ₹{item.quantity * item.price}
//                       </p>
//                     </li>
//                   ))}
//                 </ul>
//               ) : (
//                 <p className="text-gray-500 text-sm">Your cart is empty</p>
//               )}
//               {cartItems.length > 0 && (
//                 <div className="mt-3">
//                   <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 rounded-lg shadow">
//                     Checkout
//                   </button>
//                 </div>
//               )}
//             </div>
//           )}
//           {/* Book Order Button */}
//           <button
//             onClick={() => {
//               setIsModalOpen(true);
//               toggleMobileMenu();
//             }}
//             className="mt-4 sm:mt-6 p-3 sm:p-4 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-xl shadow-xl hover:shadow-orange-500/30 hover:scale-105 transition-all duration-300 font-semibold relative overflow-hidden group"
//           >
//             <span className="relative z-10 flex items-center justify-center space-x-2">
//               <span>Book Order</span>
//               <ArrowRight className="w-3 sm:w-4 h-3 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" />
//             </span>
//             <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
//           </button>
//         </nav>
//         {/* Mobile Menu Footer */}
//         <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 border-t border-slate-700/50 bg-slate-900/60">
//           <div className="flex items-center justify-center space-x-4 sm:space-x-6 text-slate-400 text-sm">
//             <div className="flex items-center space-x-2 bg-slate-800/50 px-3 py-2 rounded-full">
//               <MapPin className="w-3 h-3.5 text-orange-400" />
//               <span>Lucknow</span>
//             </div>
//             <div className="flex items-center space-x-2 bg-slate-800/50 px-3 py-2 rounded-full">
//               <Clock className="w-3 h-3.5 text-red-400" />
//               <span>9AM - 11PM</span>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Book Order Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur-2xl p-2 sm:p-4">
//           <div
//             className={`bg-white rounded-3xl shadow-2xl w-full max-w-lg sm:max-w-xl md:max-w-2xl max-h-[90vh] overflow-y-auto relative transform transition-all duration-500 ${
//               isModalOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
//             }`}
//             style={{
//               background:
//                 "linear-gradient(135deg, #ffffff 0%, #fef7f0 50%, #ffffff 100%)",
//               boxShadow:
//                 "0 25px 50px -12px rgba(0,0,0,0.25), 0 0 0 1px rgba(251,146,60,0.1)",
//             }}
//           >
//             <button
//               onClick={() => setIsModalOpen(false)}
//               className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 p-2 hover:bg-orange-50 rounded-xl transition-all duration-300 hover:scale-110 z-10"
//             >
//               <X className="w-5 h-5" />
//             </button>
//             {/* Modal Header */}
//             <div className="text-center pt-8 pb-6 sm:pt-10 sm:pb-8 px-4 sm:px-8">
//               <div className="relative w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-orange-400 via-red-500 to-rose-600 flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-xl transition-all duration-500 rounded-2xl">
//                 <ChefHat className="w-7 sm:w-8 h-7 sm:h-8 text-white drop-shadow-lg" />
//                 <div className="absolute -top-1 -right-1 w-4 sm:w-5 h-4 sm:h-5 bg-yellow-400 rounded-full flex items-center justify-center animate-pulse">
//                   <Sparkles className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-orange-700" />
//                 </div>
//                 <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-2xl"></div>
//               </div>
//               <h2 className="text-xl sm:text-3xl font-bold bg-gradient-to-r from-orange-600 via-red-500 to-rose-600 bg-clip-text text-transparent mb-2">
//                 Book Your Order
//               </h2>
//               <p className="text-slate-600 text-base">
//                 Enjoy the flavors of Spice Garden with a simple order!
//               </p>
//             </div>
//             {/* Form Container */}
//             <div className="px-4 sm:px-8 pb-6 sm:pb-8">
//               <div className="bg-gradient-to-br from-orange-50/90 to-red-50/80 backdrop-blur-sm rounded-2xl p-4 sm:p-8 border border-orange-200/40 shadow-inner relative overflow-hidden">
//                 <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-orange-50/30 opacity-80"></div>
//                 <div className="relative z-10">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
//                     {/* Customer Information */}
//                     <div className="space-y-5">
//                       <h3 className="text-base sm:text-lg font-semibold text-slate-800 mb-3 sm:mb-4 flex items-center">
//                         <div className="w-2 h-2 bg-orange-500 rounded-full mr-2 sm:mr-3 animate-pulse"></div>
//                         Your Details
//                       </h3>
//                       <div className="relative group">
//                         <input
//                           type="text"
//                           placeholder="Full Name"
//                           className="relative w-full p-3 sm:p-4 border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all duration-300 bg-white/90 backdrop-blur-sm group-hover:shadow-lg hover:border-orange-400 placeholder-slate-500 hover:bg-white text-sm sm:text-base"
//                         />
//                       </div>
//                       <div className="relative group">
//                         <input
//                           type="tel"
//                           placeholder="Phone Number"
//                           className="relative w-full p-3 sm:p-4 border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all duration-300 bg-white/90 backdrop-blur-sm group-hover:shadow-lg hover:border-orange-400 placeholder-slate-500 hover:bg-white text-sm sm:text-base"
//                         />
//                       </div>
//                       <div className="relative group">
//                         <input
//                           type="email"
//                           placeholder="Email Address"
//                           className="relative w-full p-3 sm:p-4 border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all duration-300 bg-white/90 backdrop-blur-sm group-hover:shadow-lg hover:border-orange-400 placeholder-slate-500 hover:bg-white text-sm sm:text-base"
//                         />
//                       </div>
//                     </div>
//                     {/* Order Details */}
//                     <div className="space-y-5">
//                       <h3 className="text-base sm:text-lg font-semibold text-slate-800 mb-3 sm:mb-4 flex items-center">
//                         <div className="w-2 h-2 bg-red-500 rounded-full mr-2 sm:mr-3 animate-pulse"></div>
//                         Order Details
//                       </h3>
//                       <div className="relative group">
//                         <input
//                           type="date"
//                           className="relative w-full p-3 sm:p-4 border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all duration-300 bg-white/90 backdrop-blur-sm group-hover:shadow-lg hover:border-orange-400 text-slate-700 hover:bg-white text-sm sm:text-base"
//                         />
//                       </div>
//                       <div className="relative group">
//                         <select className="relative w-full p-3 sm:p-4 border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all duration-300 bg-white/90 backdrop-blur-sm group-hover:shadow-lg hover:border-orange-400 appearance-none cursor-pointer text-slate-700 hover:bg-white text-sm sm:text-base">
//                           <option value="">Preferred Time</option>
//                           <option>Breakfast (9am - 11am)</option>
//                           <option>Lunch (12pm - 3pm)</option>
//                           <option>Snacks (4pm - 7pm)</option>
//                           <option>Dinner (7pm - 11pm)</option>
//                         </select>
//                         <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
//                           <div className="w-0 h-0 border-l-2 border-r-2 border-t-2 border-l-transparent border-r-transparent border-t-orange-500"></div>
//                         </div>
//                       </div>
//                       <div className="relative group">
//                         <input
//                           type="text"
//                           placeholder="Order Items (e.g. Paneer Tikka, Butter Naan)"
//                           className="relative w-full p-3 sm:p-4 border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all duration-300 bg-white/90 backdrop-blur-sm group-hover:shadow-lg hover:border-orange-400 placeholder-slate-500 hover:bg-white text-sm sm:text-base"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                   {/* Additional Instructions */}
//                   <div className="mt-4 sm:mt-8 relative group">
//                     <label className=" text-base sm:text-lg font-semibold text-slate-800 mb-2 sm:mb-3 flex items-center">
//                       <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2 sm:mr-3 animate-pulse"></div>
//                       Notes / Preferences
//                     </label>
//                     <div className="relative">
//                       <textarea
//                         placeholder="Allergies, spice level, delivery/pickup requests, etc."
//                         rows="3"
//                         className="relative w-full p-3 sm:p-4 border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all duration-300 bg-white/90 backdrop-blur-sm resize-none group-hover:shadow-lg hover:border-orange-400 placeholder-slate-500 hover:bg-white text-sm sm:text-base"
//                       />
//                     </div>
//                   </div>
//                   {/* Action Buttons */}
//                   <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mt-4 sm:mt-8">
//                     <button
//                       onClick={() => setIsModalOpen(false)}
//                       className="flex-1 py-3 sm:py-4 px-4 sm:px-6 border-2 border-orange-200 text-slate-700 font-semibold rounded-xl hover:bg-orange-50 hover:border-orange-300 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
//                     >
//                       Cancel
//                     </button>
//                     <button
//                       type="button"
//                       onClick={handleOrderConfirm}
//                       className="flex-1 py-3 sm:py-4 px-4 sm:px-6 bg-gradient-to-r from-orange-500 via-red-500 to-rose-600 text-white font-bold rounded-xl shadow-xl hover:shadow-orange-500/40 hover:scale-105 transition-all duration-300 transform hover:-translate-y-0.5 relative overflow-hidden group"
//                     >
//                       <span className="relative z-10 flex items-center justify-center space-x-2">
//                         <span>Book Order</span>
//                         <Sparkles className="w-3 sm:w-4 h-3 sm:h-4 animate-pulse" />
//                       </span>
//                       <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
//                       <div className="absolute inset-0 bg-white/10 transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-xl"></div>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//               {/* Modal Footer */}
//               <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-orange-200/60">
//                 <div className="flex items-center justify-center space-x-5 sm:space-x-8 text-slate-500">
//                   <div className="flex items-center space-x-2 bg-orange-100/80 px-3 sm:px-4 py-2 rounded-full border border-orange-200/50">
//                     <MapPin className="w-4 h-4 text-orange-500" />
//                     <span className="font-medium text-slate-700">
//                       Lucknow, UP
//                     </span>
//                   </div>
//                   <div className="flex items-center space-x-2 bg-red-100/80 px-3 sm:px-4 py-2 rounded-full border border-red-200/50">
//                     <Clock className="w-4 h-4 text-red-500" />
//                     <span className="font-medium text-slate-700">
//                       9AM - 11PM
//                     </span>
//                   </div>
//                 </div>
//                 <p className="text-center text-xs sm:text-sm text-slate-400 mt-2 sm:mt-4">
//                   Confirmation within 30 minutes via email or SMS
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//       {/* Custom Styles */}
//       <style>{`
//         /* Custom scrollbar */
//         ::-webkit-scrollbar { width: 6px; }
//         ::-webkit-scrollbar-track { background: rgba(251,146,60,0.1); border-radius: 10px;}
//         ::-webkit-scrollbar-thumb { background: linear-gradient(to bottom, #f97316, #dc2626); border-radius: 10px;}
//         ::-webkit-scrollbar-thumb:hover { background: linear-gradient(to bottom, #ea580c, #b91c1c);}
//         * { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;}
//         input:focus, select:focus, textarea:focus {
//           transform: translateY(-1px);
//           box-shadow: 0 10px 25px rgba(249, 115, 22, 0.15);
//         }
//       `}</style>
//     </>
//   );
// };

// export default HeaderSection;
 



// import React, { useState, useEffect } from "react";
// import Swal from "sweetalert2";
// import {
//   Menu,
//   X,
//   ShoppingCart,
//   Sparkles,
//   Star,
//   ChefHat,
//   MapPin,
//   Clock,
//   ArrowRight,
// } from "lucide-react";
// import { useCart } from "../CartContextSection/CartContext";

// const HeaderSection = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [activeNav, setActiveNav] = useState("home");
//   const { getTotalItems, cartItems = [] } = useCart();
//   const [cartOpen, setCartOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navItems = [
//     { name: "Home", href: "#home", id: "home" },
//     { name: "About", href: "#about", id: "about" },
//     { name: "Menu", href: "#menu", id: "menu" },
//     { name: "SpecialDishes", href: "#specialdishes", id: "specialdishes" },
//     { name: "Services", href: "#services", id: "services" },
//     { name: "Contact", href: "#contact", id: "contact" },
//   ];

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//     document.body.style.overflow = !isMobileMenuOpen ? "hidden" : "auto";
//     setCartOpen(false);
//   };

//   const scrollToSection = (href) => {
//     const element = document.querySelector(href);
//     if (element) {
//       const offset = 80;
//       window.scrollTo({ top: element.offsetTop - offset, behavior: "smooth" });
//       setActiveNav(href.replace("#", ""));
//     }
//     if (isMobileMenuOpen) toggleMobileMenu();
//   };

//   const handleOrderConfirm = () => {
//     setIsModalOpen(false);
//     Swal.fire({
//       icon: "success",
//       title: "Order Booked!",
//       text: "Your order has been placed successfully.",
//       timer: 3000,
//       showConfirmButton: false,
//       toast: true,
//       position: "top",
//       background: "#fff7ed",
//       color: "#dc2626",
//     });
//   };

//   return (
//     <>
//       {/* Header */}
//       <header
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
//           isScrolled
//             ? "bg-red-800/85 backdrop-blur-xl shadow-2xl border-b border-red-500/50"
//             : "bg-red-900 backdrop-blur-xl"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 sm:px-6">
//           {/* Logo + Brand Left */}
//           <div className="flex items-center cursor-pointer flex-shrink-0">
//             <div className="relative w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-orange-600 via-red-600 to-rose-600 rounded-2xl flex items-center justify-center shadow-xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 hover:shadow-orange-500/30">
//               <ChefHat className="w-5 sm:w-6 h-5 sm:h-6 text-white drop-shadow-lg" />
//               <div className="absolute -top-1 -right-2 w-3.5 sm:w-4 h-3.5 sm:h-4 bg-yellow-400 rounded-full flex items-center justify-center animate-pulse">
//                 <Sparkles className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-orange-600" />
//               </div>
//               <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-2xl"></div>
//             </div>

//             <div className="ml-3 group-hover:translate-x-1 transition-transform duration-300">
//               <h1 className="text-xl sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-orange-400 via-red-600 to-rose-500 bg-clip-text text-transparent leading-tight">
//                 Spice Garden
//               </h1>
//               <div className="flex items-center space-x-1">
//                 {[...Array(5)].map((_, i) => (
//                   <Star
//                     key={i}
//                     className="w-2.5 h-2.5 sm:w-2.5 sm:h-2.5 text-yellow-400 fill-current"
//                   />
//                 ))}
//                 <span className="text-xs sm:text-sm text-orange-200 ml-2 font-medium">
//                   4.9
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* Nav Center */}
//           <nav className="hidden lg:flex items-center space-x-6 flex-1 justify-center">
//             {navItems.map((item) => (
//               <button
//                 key={item.href}
//                 onClick={() => scrollToSection(item.href)}
//                 className={`relative px-3 py-2 text-base font-medium rounded-lg transition-all duration-300 group ${
//                   activeNav === item.id
//                     ? "text-orange-300 bg-orange-900/30"
//                     : "text-white hover:text-orange-300"
//                 }`}
//               >
//                 <span className="relative z-10">{item.name}</span>
//                 <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
//                 {activeNav === item.id && (
//                   <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-7 h-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-full"></div>
//                 )}
//               </button>
//             ))}
//           </nav>

//           {/* Right controls: Cart + Book Order */}
//           <div className="flex items-center space-x-3">
//             {/* Cart */}
//             <div className="relative">
//               <button
//                 onClick={() => setCartOpen(!cartOpen)}
//                 className="relative p-2 sm:p-3 rounded-xl bg-slate-800/60 hover:bg-slate-700/60 transition-all duration-300 hover:scale-105 shadow-lg"
//                 aria-label="Toggle cart dropdown"
//               >
//                 <ShoppingCart className="w-5 sm:w-6 h-5 sm:h-6 text-orange-400" />
//                 {getTotalItems() > 0 && (
//                   <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold px-1 py-0.5 rounded-full">
//                     {getTotalItems()}
//                   </span>
//                 )}
//               </button>
//               {cartOpen && (
//                 <div className="absolute right-0 mt-3 w-64 sm:w-72 bg-white shadow-2xl rounded-xl p-4 z-50">
//                   <div className="flex justify-between items-center mb-3">
//                     <h2 className="font-semibold text-gray-800">Your Cart</h2>
//                     <button
//                       onClick={() => setCartOpen(false)}
//                       aria-label="Close cart dropdown"
//                     >
//                       <X className="w-5 h-5 text-gray-500 hover:text-red-500" />
//                     </button>
//                   </div>
//                   {cartItems.length > 0 ? (
//                     <ul className="space-y-2 max-h-56 overflow-y-auto">
//                       {cartItems.map((item, i) => (
//                         <li
//                           key={i}
//                           className="flex justify-between items-center border-b pb-2"
//                         >
//                           <div>
//                             <p className="text-sm font-medium text-gray-700">
//                               {item.name}
//                             </p>
//                             <p className="text-xs text-gray-500">
//                               {item.quantity} × ₹{item.price}
//                             </p>
//                           </div>
//                           <p className="text-sm font-semibold text-gray-800">
//                             ₹{item.quantity * item.price}
//                           </p>
//                         </li>
//                       ))}
//                     </ul>
//                   ) : (
//                     <p className="text-gray-500 text-sm">Your cart is empty</p>
//                   )}
//                   {cartItems.length > 0 && (
//                     <div className="mt-3">
//                       <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 rounded-lg shadow">
//                         Checkout
//                       </button>
//                     </div>
//                   )}
//                 </div>
//               )}
//             </div>

//             {/* Book Order */}
//             <button
//               onClick={() => setIsModalOpen(true)}
//               className="ml-1 sm:ml-3 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-xl shadow-xl hover:shadow-orange-500/30 transition-transform duration-300 hover:-translate-y-0.5 flex items-center group relative overflow-hidden"
//             >
//               <span className="relative z-10 flex items-center space-x-2">
//                 <span>Book Order</span>
//                 <ArrowRight className="w-3 sm:w-4 h-3 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" />
//               </span>
//               <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-xl"></div>
//             </button>

//             {/* Mobile menu toggle button */}
//             <button
//               onClick={toggleMobileMenu}
//               className="lg:hidden p-2 sm:p-3 rounded-xl text-slate-300 bg-slate-800/60 shadow-lg backdrop-blur-sm hover:bg-slate-700/60 transition-all duration-300 hover:scale-105 ml-2"
//               aria-label="Toggle mobile menu"
//             >
//               <div className="relative w-5 h-5">
//                 <Menu
//                   className={`absolute inset-0 transition-all duration-300 ${
//                     isMobileMenuOpen ? "opacity-0 rotate-180" : "opacity-100 rotate-0"
//                   }`}
//                 />
//                 <X
//                   className={`absolute inset-0 transition-all duration-300 ${
//                     isMobileMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-180"
//                   }`}
//                 />
//               </div>
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* Mobile Navigation Overlay */}
//       <div
//         className={`lg:hidden fixed inset-0 bg-slate-900/70 backdrop-blur-sm z-40 transition-opacity duration-500 ${
//           isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
//         }`}
//         onClick={toggleMobileMenu}
//       />

//       {/* Mobile Navigation Drawer */}
//       <div
//         className={`lg:hidden fixed inset-y-0 right-0 w-64 sm:w-80 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 z-50 transform transition-transform duration-500 ease-out border-l border-slate-700/50 ${
//           isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         <div className="flex justify-between items-center p-4 sm:p-6 border-b border-slate-700/50">
//           <div className="flex items-center space-x-3">
//             <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center shadow-lg">
//               <ChefHat className="w-6 h-6 text-white" />
//             </div>
//             <h2 className="text-xl font-bold text-white">Spice Garden</h2>
//           </div>
//           <button
//             onClick={toggleMobileMenu}
//             className="text-slate-300 p-2 hover:bg-slate-700/50 rounded-lg transition-colors duration-200"
//             aria-label="Close mobile menu"
//           >
//             <X className="w-5 h-5" />
//           </button>
//         </div>

//         <nav className="flex flex-col p-4 sm:p-6 space-y-2">
//           {navItems.map((item) => (
//             <button
//               key={item.href}
//               onClick={() => scrollToSection(item.href)}
//               className={`text-left p-3 sm:p-4 rounded-xl transition-all duration-300 group relative overflow-hidden ${
//                 activeNav === item.id
//                   ? "text-orange-400 bg-orange-900/30"
//                   : "text-slate-300 hover:text-orange-400 hover:bg-orange-900/20"
//               }`}
//             >
//               <span className="relative z-10 font-medium">{item.name}</span>
//               <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-orange-400 to-red-500 rounded-r-full transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
//             </button>
//           ))}

//           {/* Mobile Cart button */}
//           <button
//             onClick={() => setCartOpen(!cartOpen)}
//             className="relative flex items-center space-x-2 p-3 rounded-xl bg-slate-800/60 hover:bg-slate-700/60 transition"
//             aria-label="Toggle cart dropdown mobile"
//           >
//             <ShoppingCart className="w-6 h-6 text-orange-400" />
//             {getTotalItems() > 0 && (
//               <span className="absolute -top-1 left-7 bg-red-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
//                 {getTotalItems()}
//               </span>
//             )}
//             <span className="text-slate-200">Cart</span>
//           </button>

//           {/* Mobile Cart Dropdown */}
//           {cartOpen && (
//             <div className="bg-white rounded-xl shadow-2xl p-4 mt-2 max-h-56 overflow-y-auto">
//               <div className="flex justify-between items-center mb-3">
//                 <h2 className="font-semibold text-gray-800">Your Cart</h2>
//                 <button
//                   onClick={() => setCartOpen(false)}
//                   aria-label="Close mobile cart dropdown"
//                 >
//                   <X className="w-5 h-5 text-gray-500 hover:text-red-500" />
//                 </button>
//               </div>
//               {cartItems.length > 0 ? (
//                 <ul className="space-y-2">
//                   {cartItems.map((item, i) => (
//                     <li
//                       key={i}
//                       className="flex justify-between items-center border-b pb-2"
//                     >
//                       <div>
//                         <p className="text-sm font-medium text-gray-700">
//                           {item.name}
//                         </p>
//                         <p className="text-xs text-gray-500">
//                           {item.quantity} × ₹{item.price}
//                         </p>
//                       </div>
//                       <p className="text-sm font-semibold text-gray-800">
//                         ₹{item.quantity * item.price}
//                       </p>
//                     </li>
//                   ))}
//                 </ul>
//               ) : (
//                 <p className="text-gray-500 text-sm">Your cart is empty</p>
//               )}
//               {cartItems.length > 0 && (
//                 <div className="mt-3">
//                   <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 rounded-lg shadow">
//                     Checkout
//                   </button>
//                 </div>
//               )}
//             </div>
//           )}

//           {/* Mobile Book Order */}
//           <button
//             onClick={() => {
//               setIsModalOpen(true);
//               toggleMobileMenu();
//             }}
//             className="mt-4 sm:mt-6 p-3 sm:p-4 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-xl shadow-xl hover:shadow-orange-500/30 hover:scale-105 transition-all duration-300 font-semibold relative overflow-hidden group"
//           >
//             <span className="relative z-10 sm flex items-center justify-center space-x-2">
//               <span>Book Order</span>
//               <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
//             </span>
//             <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-xl"></div>
//           </button>
//         </nav>

//         {/* Mobile footer */}
//         <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 border-t border-slate-700/50 bg-slate-900/60">
//           <div className="flex items-center justify-center space-x-4 sm:space-x-6 text-slate-400 text-sm">
//             <div className="flex items-center space-x-2 bg-slate-800/50 px-3 py-2 rounded-full">
//               <MapPin className="w-3 h-3.5 text-orange-400" />
//               <span>Lucknow</span>
//             </div>
//             <div className="flex items-center space-x-2 bg-slate-800/50 px-3 py-2 rounded-full">
//               <Clock className="w-3 h-3.5 text-red-400" />
//               <span>9AM - 11PM</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Book Order Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur-2xl p-2 sm:p-4">
//           <div
//             className={`bg-white rounded-3xl shadow-2xl w-full max-w-lg sm:max-w-xl md:max-w-2xl max-h-[90vh] overflow-y-auto relative transform transition-all duration-500 scale-100 opacity-100`}
//             style={{
//               background:
//                 "linear-gradient(135deg, #ffffff 0%, #fef7f0 50%, #ffffff 100%)",
//               boxShadow:
//                 "0 25px 50px -12px rgba(0,0,0,0.25), 0 0 0 1px rgba(251,146,60,0.1)",
//             }}
//           >
//             <button
//               onClick={() => setIsModalOpen(false)}
//               className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 p-2 hover:bg-orange-50 rounded-xl transition-all duration-300 hover:scale-110 z-10"
//               aria-label="Close Book Order Modal"
//             >
//               <X className="w-5 h-5" />
//             </button>

//             {/* Mobile Menu Footer */}
//         <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 border-t border-slate-700/50 bg-slate-900/60">
//           <div className="flex items-center justify-center space-x-4 sm:space-x-6 text-slate-400 text-sm">
//             <div className="flex items-center space-x-2 bg-slate-800/50 px-3 py-2 rounded-full">
//               <MapPin className="w-3 h-3.5 text-orange-400" />
//               <span>Lucknow</span>
//             </div>
//             <div className="flex items-center space-x-2 bg-slate-800/50 px-3 py-2 rounded-full">
//               <Clock className="w-3 h-3.5 text-red-400" />
//               <span>9AM - 11PM</span>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Book Order Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur-2xl p-2 sm:p-4">
//           <div
//             className={`bg-white rounded-3xl shadow-2xl w-full max-w-lg sm:max-w-xl md:max-w-2xl max-h-[90vh] overflow-y-auto relative transform transition-all duration-500 ${
//               isModalOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
//             }`}
//             style={{
//               background:
//                 "linear-gradient(135deg, #ffffff 0%, #fef7f0 50%, #ffffff 100%)",
//               boxShadow:
//                 "0 25px 50px -12px rgba(0,0,0,0.25), 0 0 0 1px rgba(251,146,60,0.1)",
//             }}
//           >
//             <button
//               onClick={() => setIsModalOpen(false)}
//               className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 p-2 hover:bg-orange-50 rounded-xl transition-all duration-300 hover:scale-110 z-10"
//             >
//               <X className="w-5 h-5" />
//             </button>
//             {/* Modal Header */}
//             <div className="text-center pt-8 pb-6 sm:pt-10 sm:pb-8 px-4 sm:px-8">
//               <div className="relative w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-orange-400 via-red-500 to-rose-600 flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-xl transition-all duration-500 rounded-2xl">
//                 <ChefHat className="w-7 sm:w-8 h-7 sm:h-8 text-white drop-shadow-lg" />
//                 <div className="absolute -top-1 -right-1 w-4 sm:w-5 h-4 sm:h-5 bg-yellow-400 rounded-full flex items-center justify-center animate-pulse">
//                   <Sparkles className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-orange-700" />
//                 </div>
//                 <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-2xl"></div>
//               </div>
//               <h2 className="text-xl sm:text-3xl font-bold bg-gradient-to-r from-orange-600 via-red-500 to-rose-600 bg-clip-text text-transparent mb-2">
//                 Book Your Order
//               </h2>
//               <p className="text-slate-600 text-base">
//                 Enjoy the flavors of Spice Garden with a simple order!
//               </p>
//             </div>
//             {/* Form Container */}
//             <div className="px-4 sm:px-8 pb-6 sm:pb-8">
//               <div className="bg-gradient-to-br from-orange-50/90 to-red-50/80 backdrop-blur-sm rounded-2xl p-4 sm:p-8 border border-orange-200/40 shadow-inner relative overflow-hidden">
//                 <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-orange-50/30 opacity-80"></div>
//                 <div className="relative z-10">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
//                     {/* Customer Information */}
//                     <div className="space-y-5">
//                       <h3 className="text-base sm:text-lg font-semibold text-slate-800 mb-3 sm:mb-4 flex items-center">
//                         <div className="w-2 h-2 bg-orange-500 rounded-full mr-2 sm:mr-3 animate-pulse"></div>
//                         Your Details
//                       </h3>
//                       <div className="relative group">
//                         <input
//                           type="text"
//                           placeholder="Full Name"
//                           className="relative w-full p-3 sm:p-4 border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all duration-300 bg-white/90 backdrop-blur-sm group-hover:shadow-lg hover:border-orange-400 placeholder-slate-500 hover:bg-white text-sm sm:text-base"
//                         />
//                       </div>
//                       <div className="relative group">
//                         <input
//                           type="tel"
//                           placeholder="Phone Number"
//                           className="relative w-full p-3 sm:p-4 border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all duration-300 bg-white/90 backdrop-blur-sm group-hover:shadow-lg hover:border-orange-400 placeholder-slate-500 hover:bg-white text-sm sm:text-base"
//                         />
//                       </div>
//                       <div className="relative group">
//                         <input
//                           type="email"
//                           placeholder="Email Address"
//                           className="relative w-full p-3 sm:p-4 border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all duration-300 bg-white/90 backdrop-blur-sm group-hover:shadow-lg hover:border-orange-400 placeholder-slate-500 hover:bg-white text-sm sm:text-base"
//                         />
//                       </div>
//                     </div>
//                     {/* Order Details */}
//                     <div className="space-y-5">
//                       <h3 className="text-base sm:text-lg font-semibold text-slate-800 mb-3 sm:mb-4 flex items-center">
//                         <div className="w-2 h-2 bg-red-500 rounded-full mr-2 sm:mr-3 animate-pulse"></div>
//                         Order Details
//                       </h3>
//                       <div className="relative group">
//                         <input
//                           type="date"
//                           className="relative w-full p-3 sm:p-4 border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all duration-300 bg-white/90 backdrop-blur-sm group-hover:shadow-lg hover:border-orange-400 text-slate-700 hover:bg-white text-sm sm:text-base"
//                         />
//                       </div>
//                       <div className="relative group">
//                         <select className="relative w-full p-3 sm:p-4 border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all duration-300 bg-white/90 backdrop-blur-sm group-hover:shadow-lg hover:border-orange-400 appearance-none cursor-pointer text-slate-700 hover:bg-white text-sm sm:text-base">
//                           <option value="">Preferred Time</option>
//                           <option>Breakfast (9am - 11am)</option>
//                           <option>Lunch (12pm - 3pm)</option>
//                           <option>Snacks (4pm - 7pm)</option>
//                           <option>Dinner (7pm - 11pm)</option>
//                         </select>
//                         <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
//                           <div className="w-0 h-0 border-l-2 border-r-2 border-t-2 border-l-transparent border-r-transparent border-t-orange-500"></div>
//                         </div>
//                       </div>
//                       <div className="relative group">
//                         <input
//                           type="text"
//                           placeholder="Order Items (e.g. Paneer Tikka, Butter Naan)"
//                           className="relative w-full p-3 sm:p-4 border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all duration-300 bg-white/90 backdrop-blur-sm group-hover:shadow-lg hover:border-orange-400 placeholder-slate-500 hover:bg-white text-sm sm:text-base"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                   {/* Additional Instructions */}
//                   <div className="mt-4 sm:mt-8 relative group">
//                     <label className=" text-base sm:text-lg font-semibold text-slate-800 mb-2 sm:mb-3 flex items-center">
//                       <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2 sm:mr-3 animate-pulse"></div>
//                       Notes / Preferences
//                     </label>
//                     <div className="relative">
//                       <textarea
//                         placeholder="Allergies, spice level, delivery/pickup requests, etc."
//                         rows="3"
//                         className="relative w-full p-3 sm:p-4 border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all duration-300 bg-white/90 backdrop-blur-sm resize-none group-hover:shadow-lg hover:border-orange-400 placeholder-slate-500 hover:bg-white text-sm sm:text-base"
//                       />
//                     </div>
//                   </div>
//                   {/* Action Buttons */}
//                   <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mt-4 sm:mt-8">
//                     <button
//                       onClick={() => setIsModalOpen(false)}
//                       className="flex-1 py-3 sm:py-4 px-4 sm:px-6 border-2 border-orange-200 text-slate-700 font-semibold rounded-xl hover:bg-orange-50 hover:border-orange-300 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
//                     >
//                       Cancel
//                     </button>
//                     <button
//                       type="button"
//                       onClick={handleOrderConfirm}
//                       className="flex-1 py-3 sm:py-4 px-4 sm:px-6 bg-gradient-to-r from-orange-500 via-red-500 to-rose-600 text-white font-bold rounded-xl shadow-xl hover:shadow-orange-500/40 hover:scale-105 transition-all duration-300 transform hover:-translate-y-0.5 relative overflow-hidden group"
//                     >
//                       <span className="relative z-10 flex items-center justify-center space-x-2">
//                         <span>Book Order</span>
//                         <Sparkles className="w-3 sm:w-4 h-3 sm:h-4 animate-pulse" />
//                       </span>
//                       <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
//                       <div className="absolute inset-0 bg-white/10 transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-xl"></div>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//               {/* Modal Footer */}
//               <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-orange-200/60">
//                 <div className="flex items-center justify-center space-x-5 sm:space-x-8 text-slate-500">
//                   <div className="flex items-center space-x-2 bg-orange-100/80 px-3 sm:px-4 py-2 rounded-full border border-orange-200/50">
//                     <MapPin className="w-4 h-4 text-orange-500" />
//                     <span className="font-medium text-slate-700">
//                       Lucknow, UP
//                     </span>
//                   </div>
//                   <div className="flex items-center space-x-2 bg-red-100/80 px-3 sm:px-4 py-2 rounded-full border border-red-200/50">
//                     <Clock className="w-4 h-4 text-red-500" />
//                     <span className="font-medium text-slate-700">
//                       9AM - 11PM
//                     </span>
//                   </div>
//                 </div>
//                 <p className="text-center text-xs sm:text-sm text-slate-400 mt-2 sm:mt-4">
//                   Confirmation within 30 minutes via email or SMS
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//       {/* Custom Styles */}
//       <style>{`
//         /* Custom scrollbar */
//         ::-webkit-scrollbar { width: 6px; }
//         ::-webkit-scrollbar-track { background: rgba(251,146,60,0.1); border-radius: 10px;}
//         ::-webkit-scrollbar-thumb { background: linear-gradient(to bottom, #f97316, #dc2626); border-radius: 10px;}
//         ::-webkit-scrollbar-thumb:hover { background: linear-gradient(to bottom, #ea580c, #b91c1c);}
//         * { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;}
//         input:focus, select:focus, textarea:focus {
//           transform: translateY(-1px);
//           box-shadow: 0 10px 25px rgba(249, 115, 22, 0.15);
//         }
//       `}</style>
//           </div>

//       )}

      
//     </>
//   );
// };

// export default HeaderSection;
// const navigate = useNavigate()
// const handleclick = ()=>{
//   navigate("/menu")
// }

{/* <button onClick={handleclick}/> */}


import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { Link, useNavigate} from 'react-router-dom';

import {
  Menu,
  X,
  ShoppingCart,
  Sparkles,
  Star,
  ChefHat,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-react";
import { useCart } from "../CartContextSection/CartContext";

const HeaderSection = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("home");
  const { getTotalItems, cartItems = [] } = useCart();
  const [cartOpen, setCartOpen] = useState(false);
const navigate = useNavigate()
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", link: '/', id: "home" },
    { name: "About", link: "/about", id: "about" },
    
    { name: "Menu", link: "/menu", id: "menu" },
    { name: "Special Dishes", link: "/specialdish", id: "specialdishes" },
    { name: "Services", link: "/services", id: "services" },
    { name: "Contact", link: "/contact", id: "contact" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = !isMobileMenuOpen ? "hidden" : "auto";
    setCartOpen(false);
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      window.scrollTo({ top: element.offsetTop - offset, behavior: "smooth" });
      setActiveNav(href.replace("#", ""));
    }
    if (isMobileMenuOpen) toggleMobileMenu();
  };

  const handleOrderConfirm = () => {
    setIsModalOpen(false);
    Swal.fire({
      icon: "success",
      title: "Order Booked!",
      text: "Your order has been placed successfully.",
      timer: 3000,
      showConfirmButton: false,
      toast: true,
      position: "top",
      background: "#fff7ed",
      color: "#dc2626",
    });
  };

  return (
    <>
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isScrolled
            ? "bg-red-800/85 backdrop-blur-xl shadow-2xl border-b border-red-500/50"
            : "bg-red-900 backdrop-blur-xl"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 sm:px-6">
          {/* Logo + Brand */}
          <div className="flex items-center cursor-pointer flex-shrink-0">
            <div className="relative w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-orange-600 via-red-600 to-rose-600 rounded-2xl flex items-center justify-center shadow-xl">
              <ChefHat className="w-5 sm:w-6 h-5 sm:h-6 text-white drop-shadow-lg" />
              <div className="absolute -top-1 -right-2 w-3.5 sm:w-4 h-3.5 sm:h-4 bg-yellow-400 rounded-full flex items-center justify-center animate-pulse">
                <Sparkles className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-orange-600" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-2xl"></div>
            </div>
            <div className="ml-5">
              <h1 className="text-lg  sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-orange-400 via-red-600 to-rose-500 bg-clip-text text-transparent leading-tight whitespace-nowrap">
                Spice Garden
              </h1>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-yellow-400 fill-current"
                  />
                ))}
                <span className="text-xs sm:text-sm text-orange-200 ml-2 font-medium">
                  4.9
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-10 flex-1 justify-center">
            {navItems.map((item) => (
              <Link
                to={item.link}
                className={`relative px-3 py-2 cursor-pointer  text-base font-medium rounded-lg transition-all duration-300 group ${
                  activeNav === item.id
                    ? "text-orange-300 bg-orange-900/30"
                    : "text-white hover:text-orange-300 hover:bg-orange-900/20"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center space-x-3">
            {/* Cart */}
            <div className="relative">
              <button
                onClick={() => setCartOpen(!cartOpen)}
                className="relative p-2 sm:p-3 rounded-xl bg-slate-800/60 hover:bg-slate-700/60 cursor-pointer"
              >
                <ShoppingCart className="w-5 sm:w-6 h-5 sm:h-6 text-orange-400" />
                {!!getTotalItems() && (
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold px-1 py-0.5 rounded-full">
                    {getTotalItems()}
                  </span>
                )}
              </button>

              {/* Cart Dropdown */}
              {cartOpen && (
                <div className="absolute right-0 mt-3 w-64 sm:w-72 bg-white shadow-2xl rounded-xl p-4 z-50">
                  <div className="flex justify-between items-center mb-3">
                    <h2 className="font-semibold text-gray-800">Your Cart</h2>
                    <button onClick={() => setCartOpen(false)}>
                      <X className="w-5 h-5 text-gray-500 hover:text-red-500" />
                    </button>
                  </div>
                  {cartItems.length > 0 ? (
                    <>
                      <ul className="space-y-2 max-h-56 overflow-y-auto">
                        {cartItems.map((item, i) => (
                          <li
                            key={i}
                            className="flex justify-between items-center border-b pb-2"
                          >
                            <div>
                              <p className="text-sm font-medium text-gray-700">
                                {item.name}
                              </p>
                              <p className="text-xs text-gray-500">
                                {item.quantity} × ₹{item.price}
                              </p>
                            </div>
                            <p className="text-sm font-semibold text-gray-800">
                              ₹{item.quantity * item.price}
                            </p>
                          </li>
                        ))}
                      </ul>
                      <button className="mt-3 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg shadow">
                        Checkout
                      </button>
                    </>
                  ) : (
                    <p className="text-gray-500 text-sm">Your cart is empty</p>
                  )}
                </div>
              )}
            </div>

            {/* Book Order */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="hidden sm:flex px-4 py-2 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-xl shadow hover:scale-105 transition cursor-pointer"
            >
              Book Order <ArrowRight className="w-4 h-4 mt-1.5 ml-1" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 sm:p-3 rounded-xl bg-slate-800/60"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-slate-200" />
              ) : (
                <Menu className="w-6 h-6 text-slate-200" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-slate-900/70 transition-opacity duration-500 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMobileMenu}
      />

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden fixed inset-y-0 right-0 w-64 sm:w-80 bg-gradient-to-b from-slate-900 to-slate-800 z-50 transform transition-transform duration-500 ease-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-between items-center border-b border-slate-700">
          <h2 className="text-lg font-bold text-white">Spice Garden</h2>
          <button onClick={toggleMobileMenu}>
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        <nav className="p-4 flex flex-col space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              onClick={() => scrollToSection(item.link)}
              className={`p-3 rounded-lg transition ${
                activeNav === item.id
                  ? "bg-orange-900/40 text-orange-400"
                  : "text-slate-300 hover:text-orange-400"
              }`}
            >
              {item.name}
            </Link>
          ))}

          {/* Mobile Cart */}
          <button
            onClick={() => setCartOpen(!cartOpen)}
            className="relative flex items-center gap-2 p-3 bg-slate-800/60 rounded-lg"
          >
            <ShoppingCart className="w-5 h-5 text-orange-400" />
            {!!getTotalItems() && (
              <span className="absolute -top-1 left-6 bg-red-600 text-white text-xs px-1 rounded-full">
                {getTotalItems()}
              </span>
            )}
            <span>Cart</span>
          </button>

          {/* Mobile Book Order */}
          <button
            onClick={() => {
              setIsModalOpen(true);
              toggleMobileMenu();
            }}
            className="mt-3 bg-gradient-to-r from-orange-500 to-red-600 text-white py-3 rounded-lg shadow"
          >
            Book Order
          </button>
        </nav>
      </div>

      {/* Order Modal */}
         {/* Mobile footer */}
       

      {/* Book Order Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-[0.5px] p-2 sm:p-4">
          <div
            className={`bg-white rounded-3xl shadow-2xl w-full max-w-lg sm:max-w-xl md:max-w-2xl max-h-[90vh] overflow-y-auto relative transform transition-all duration-500 scale-100 opacity-100`}
            style={{
              background:
                "linear-gradient(135deg, #ffffff 0%, #fef7f0 50%, #ffffff 100%)",
              boxShadow:
                "0 25px 50px -12px rgba(0,0,0,0.25), 0 0 0 1px rgba(251,146,60,0.1)",
            }}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 p-2 hover:bg-orange-50 rounded-xl transition-all duration-300 hover:scale-110 z-10"
              aria-label="Close Book Order Modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Mobile Menu Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 border-t border-slate-700/50 bg-slate-900/60">
          <div className="flex items-center justify-center space-x-4 sm:space-x-6 text-slate-400 text-sm">
            <div className="flex items-center space-x-2 bg-slate-800/50 px-3 py-2 rounded-full">
              <MapPin className="w-3 h-3.5 text-orange-400" />
              <span>Lucknow</span>
            </div>
            <div className="flex items-center space-x-2 bg-slate-800/50 px-3 py-2 rounded-full">
              <Clock className="w-3 h-3.5 text-red-400" />
              <span>9AM - 11PM</span>
            </div>
          </div>
        </div>
      </div>
      {/* Book Order Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur-2xl p-2 sm:p-4">
          <div
            className={`bg-white rounded-3xl shadow-2xl w-full max-w-lg sm:max-w-xl md:max-w-2xl max-h-[90vh] overflow-y-auto relative transform transition-all duration-500 ${
              isModalOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
            style={{
              background:
                "linear-gradient(135deg, #ffffff 0%, #fef7f0 50%, #ffffff 100%)",
              boxShadow:
                "0 25px 50px -12px rgba(0,0,0,0.25), 0 0 0 1px rgba(251,146,60,0.1)",
            }}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 p-2 hover:bg-orange-50 rounded-xl transition-all duration-300 hover:scale-110 z-10"
            >
              <X className="w-5 h-5" />
            </button>
            {/* Modal Header */}
            <div className="text-center pt-8 pb-6 sm:pt-10 sm:pb-8 px-4 sm:px-8">
              <div className="relative w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-orange-400 via-red-500 to-rose-600 flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-xl transition-all duration-500 rounded-2xl">
                <ChefHat className="w-7 sm:w-8 h-7 sm:h-8 text-white drop-shadow-lg" />
                <div className="absolute -top-1 -right-1 w-4 sm:w-5 h-4 sm:h-5 bg-yellow-400 rounded-full flex items-center justify-center animate-pulse">
                  <Sparkles className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-orange-700" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-2xl"></div>
              </div>
              <h2 className="text-xl sm:text-3xl font-bold bg-gradient-to-r from-orange-600 via-red-500 to-rose-600 bg-clip-text text-transparent mb-2">
                Book Your Order
              </h2>
              <p className="text-slate-600 text-base">
                Enjoy the flavors of Spice Garden with a simple order!
              </p>
            </div>
            {/* Form Container */}
            <div className="px-4 sm:px-8 pb-6 sm:pb-8">
              <div className="bg-gradient-to-br from-orange-50/90 to-red-50/80 backdrop-blur-sm rounded-2xl p-4 sm:p-8 border border-orange-200/40 shadow-inner relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-orange-50/30 opacity-80"></div>
                <div className="relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
                    {/* Customer Information */}
                    <div className="space-y-5">
                      <h3 className="text-base sm:text-lg font-semibold text-slate-800 mb-3 sm:mb-4 flex items-center">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-2 sm:mr-3 animate-pulse"></div>
                        Your Details
                      </h3>
                      <div className="relative group">
                        <input
                          type="text"
                          placeholder="Full Name"
                          className="relative w-full p-3 sm:p-4 border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all duration-300 bg-white/90 backdrop-blur-sm group-hover:shadow-lg hover:border-orange-400 placeholder-slate-500 hover:bg-white text-sm sm:text-base"
                        />
                      </div>
                      <div className="relative group">
                        <input
                          type="tel"
                          placeholder="Phone Number"
                          className="relative w-full p-3 sm:p-4 border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all duration-300 bg-white/90 backdrop-blur-sm group-hover:shadow-lg hover:border-orange-400 placeholder-slate-500 hover:bg-white text-sm sm:text-base"
                        />
                      </div>
                      <div className="relative group">
                        <input
                          type="email"
                          placeholder="Email Address"
                          className="relative w-full p-3 sm:p-4 border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all duration-300 bg-white/90 backdrop-blur-sm group-hover:shadow-lg hover:border-orange-400 placeholder-slate-500 hover:bg-white text-sm sm:text-base"
                        />
                      </div>
                    </div>
                    {/* Order Details */}
                    <div className="space-y-5">
                      <h3 className="text-base sm:text-lg font-semibold text-slate-800 mb-3 sm:mb-4 flex items-center">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-2 sm:mr-3 animate-pulse"></div>
                        Order Details
                      </h3>
                      <div className="relative group">
                        <input
                          type="date"
                          className="relative w-full p-3 sm:p-4 border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all duration-300 bg-white/90 backdrop-blur-sm group-hover:shadow-lg hover:border-orange-400 text-slate-700 hover:bg-white text-sm sm:text-base"
                        />
                      </div>
                      <div className="relative group">
                        <select className="relative w-full p-3 sm:p-4 border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all duration-300 bg-white/90 backdrop-blur-sm group-hover:shadow-lg hover:border-orange-400 appearance-none cursor-pointer text-slate-700 hover:bg-white text-sm sm:text-base">
                          <option value="">Preferred Time</option>
                          <option>Breakfast (9am - 11am)</option>
                          <option>Lunch (12pm - 3pm)</option>
                          <option>Snacks (4pm - 7pm)</option>
                          <option>Dinner (7pm - 11pm)</option>
                        </select>
                        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                          <div className="w-0 h-0 border-l-2 border-r-2 border-t-2 border-l-transparent border-r-transparent border-t-orange-500"></div>
                        </div>
                      </div>
                      <div className="relative group">
                        <input
                          type="text"
                          placeholder="Order Items (e.g. Paneer Tikka, Butter Naan)"
                          className="relative w-full p-3 sm:p-4 border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all duration-300 bg-white/90 backdrop-blur-sm group-hover:shadow-lg hover:border-orange-400 placeholder-slate-500 hover:bg-white text-sm sm:text-base"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Additional Instructions */}
                  <div className="mt-4 sm:mt-8 relative group">
                    <label className=" text-base sm:text-lg font-semibold text-slate-800 mb-2 sm:mb-3 flex items-center">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2 sm:mr-3 animate-pulse"></div>
                      Notes / Preferences
                    </label>
                    <div className="relative">
                      <textarea
                        placeholder="Allergies, spice level, delivery/pickup requests, etc."
                        rows="3"
                        className="relative w-full p-3 sm:p-4 border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all duration-300 bg-white/90 backdrop-blur-sm resize-none group-hover:shadow-lg hover:border-orange-400 placeholder-slate-500 hover:bg-white text-sm sm:text-base"
                      />
                    </div>
                  </div>
                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mt-4 sm:mt-8">
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="flex-1 py-3 sm:py-4 px-4 sm:px-6 border-2 border-orange-200 text-slate-700 font-semibold rounded-xl hover:bg-orange-50 hover:border-orange-300 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      onClick={handleOrderConfirm}
                      className="flex-1 py-3 sm:py-4 px-4 sm:px-6 bg-gradient-to-r from-orange-500 via-red-500 to-rose-600 text-white font-bold rounded-xl shadow-xl hover:shadow-orange-500/40 hover:scale-105 transition-all duration-300 transform hover:-translate-y-0.5 relative overflow-hidden group"
                    >
                      <span className="relative z-10 flex items-center justify-center space-x-2">
                        <span>Book Order</span>
                        <Sparkles className="w-3 sm:w-4 h-3 sm:h-4 animate-pulse" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                      <div className="absolute inset-0 bg-white/10 transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-xl"></div>
                    </button>
                  </div>
                </div>
              </div>
              {/* Modal Footer */}
              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-orange-200/60">
                <div className="flex items-center justify-center space-x-5 sm:space-x-8 text-slate-500">
                  <div className="flex items-center space-x-2 bg-orange-100/80 px-3 sm:px-4 py-2 rounded-full border border-orange-200/50">
                    <MapPin className="w-4 h-4 text-orange-500" />
                    <span className="font-medium text-slate-700">
                      Lucknow, UP
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 bg-red-100/80 px-3 sm:px-4 py-2 rounded-full border border-red-200/50">
                    <Clock className="w-4 h-4 text-red-500" />
                    <span className="font-medium text-slate-700">
                      9AM - 11PM
                    </span>
                  </div>
                </div>
                <p className="text-center text-xs sm:text-sm text-slate-400 mt-2 sm:mt-4">
                  Confirmation within 30 minutes via email or SMS
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Custom Styles */}
      <style>{`
        /* Custom scrollbar */
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: rgba(251,146,60,0.1); border-radius: 10px;}
        ::-webkit-scrollbar-thumb { background: linear-gradient(to bottom, #f97316, #dc2626); border-radius: 10px;}
        ::-webkit-scrollbar-thumb:hover { background: linear-gradient(to bottom, #ea580c, #b91c1c);}
        * { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;}
        input:focus, select:focus, textarea:focus {
          transform: translateY(-1px);
          box-shadow: 0 10px 25px rgba(249, 115, 22, 0.15);
        }
      `}</style>
          </div>
      )}
    </>
  );
};

export default HeaderSection;
