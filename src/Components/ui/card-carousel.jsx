
// import React, { useState, useEffect } from "react"
// import { SparklesIcon, StarIcon, ChefHatIcon, ShoppingCartIcon, PlusIcon, MinusIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react"

// export default function CardCarousel() {

//   const [cart, setCart] = useState({})
//   const [showCart, setShowCart] = useState(false)
//   const [currentSlide, setCurrentSlide] = useState(0)
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true)

//   const dishes = [
//     {
//       id: 1,
//       name: "Hyderabadi Biryani",
//       description: "Aromatic basmati rice with tender mutton, saffron and traditional spices",
//       price: 18.99,
//       rating: 4.9,
//       cuisine: "Hyderabadi",
//       isSpecial: true,
//       src: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=400&h=500&fit=crop"
//     },
//     {
//       id: 2,
//       name: "Kung Pao Chicken",
//       description: "Szechuan-style stir-fried chicken with peanuts and dried chilies",
//       price: 15.99,
//       rating: 4.7,
//       cuisine: "Chinese",
//       isPopular: true,
//       src: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=500&fit=crop"
//     },
//     {
//       id: 3,
//       name: "Butter Chicken",
//       description: "Creamy tomato-based curry with tender chicken pieces and aromatic spices",
//       price: 16.99,
//       rating: 4.8,
//       cuisine: "Indian",
//       isSpecial: true,
//       src: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=400&h=500&fit=crop"
//     },
//     {
//       id: 4,
//       name: "Chicken Tikka Masala",
//       description: "Grilled chicken in rich, creamy tomato-based curry sauce",
//       price: 17.99,
//       rating: 4.6,
//       cuisine: "Indian",
//       src: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=500&fit=crop"
//     },
//     {
//       id: 5,
//       name: "Pad Thai",
//       description: "Traditional stir-fried rice noodles with shrimp, tofu, and tamarind sauce",
//       price: 14.99,
//       rating: 4.5,
//       cuisine: "Thai",
//       isNew: true,
//       src: "https://images.unsplash.com/photo-1559847844-d1b4b4b614f6?w=400&h=500&fit=crop"
//     },
//     {
//       id: 6,
//       name: "Margherita Pizza",
//       description: "Classic Italian pizza with fresh mozzarella, basil, and tomato sauce",
//       price: 12.99,
//       rating: 4.4,
//       cuisine: "Italian",
//       src: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=500&fit=crop"
//     },
//     {
//       id: 7,
//       name: "Chicken Teriyaki",
//       description: "Grilled chicken glazed with sweet and savory teriyaki sauce",
//       price: 16.99,
//       rating: 4.7,
//       cuisine: "Japanese",
//       src: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=500&fit=crop"
//     },
//     {
//       id: 8,
//       name: "Fish Tacos",
//       description: "Fresh grilled fish with cabbage slaw and chipotle mayo in corn tortillas",
//       price: 13.99,
//       rating: 4.6,
//       cuisine: "Mexican",
//       isPopular: true,
//       src: "https://images.unsplash.com/photo-1565299585323-38174c4a6c3b?w=400&h=500&fit=crop"
//     },
//     {
//       id: 9,
//       name: "Beef Burger",
//       description: "Juicy beef patty with lettuce, tomato, cheese, and special sauce",
//       price: 14.99,
//       rating: 4.5,
//       cuisine: "American",
//       src: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=500&fit=crop"
//     },
//     {
//       id: 10,
//       name: "Greek Salad",
//       description: "Fresh vegetables with feta cheese, olives, and olive oil dressing",
//       price: 11.99,
//       rating: 4.3,
//       cuisine: "Mediterranean",
//       src: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=500&fit=crop"
//     },
//     {
//       id: 11,
//       name: "Ramen Noodles",
//       description: "Rich pork bone broth with fresh noodles, egg, and vegetables",
//       price: 15.99,
//       rating: 4.8,
//       cuisine: "Japanese",
//       isNew: true,
//       src: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=500&fit=crop"
//     },
//     {
//       id: 12,
//       name: "Haleem",
//       description: "Slow-cooked lentils and meat stew, a Hyderabadi specialty",
//       price: 12.99,
//       rating: 4.7,
//       cuisine: "Hyderabadi",
//       isSpecial: true,
//       src: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&h=500&fit=crop"
//     },
//     {
//       id: 13,
//       name: "Peking Duck",
//       description: "Traditional Chinese roasted duck with pancakes and hoisin sauce",
//       price: 24.99,
//       rating: 4.9,
//       cuisine: "Chinese",
//       isSpecial: true,
//       src: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=500&fit=crop"
//     },
//     {
//       id: 14,
//       name: "Tandoori Chicken",
//       description: "Clay oven grilled chicken marinated in yogurt and spices",
//       price: 16.99,
//       rating: 4.6,
//       cuisine: "Indian",
//       src: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=500&fit=crop"
//     },
//     {
//       id: 15,
//       name: "Green Curry",
//       description: "Thai coconut curry with vegetables and aromatic herbs",
//       price: 13.99,
//       rating: 4.4,
//       cuisine: "Thai",
//       src: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400&h=500&fit=crop"
//     }
//   ]

//   // Auto-play functionality
//   useEffect(() => {
//     if (!isAutoPlaying) return

//     const interval = setInterval(() => {
//       setCurrentSlide(prev => (prev + 1) % dishes.length)
//     }, 2000)

//     return () => clearInterval(interval)
//   }, [isAutoPlaying, dishes.length])

//   const addToCart = (dish) => {
//     setCart(prev => ({
//       ...prev,
//       [dish.id]: (prev[dish.id] || 0) + 1
//     }))
//   }

//   const removeFromCart = (dishId) => {
//     setCart(prev => {
//       const newCart = { ...prev }
//       if (newCart[dishId] > 1) {
//         newCart[dishId] -= 1
//       } else {
//         delete newCart[dishId]
//       }
//       return newCart
//     })
//   }

//   const getTotalItems = () => {
//     return Object.values(cart).reduce((sum, count) => sum + count, 0)
//   }

//   const getTotalPrice = () => {
//     return Object.entries(cart).reduce((total, [dishId, count]) => {
//       const dish = dishes.find(d => d.id === parseInt(dishId))
//       return total + (dish ? dish.price * count : 0)
//     }, 0).toFixed(2)
//   }

//   const nextSlide = () => {
//     setCurrentSlide(prev => (prev + 1) % dishes.length)
//     setIsAutoPlaying(false)
//   }

//   const prevSlide = () => {
//     setCurrentSlide(prev => (prev - 1 + dishes.length) % dishes.length)
//     setIsAutoPlaying(false)
//   }

//   const goToSlide = (index) => {
//     setCurrentSlide(index)
//     setIsAutoPlaying(false)
//   }

//   const getVisibleSlides = () => {
//     const visibleSlides = []
//     const totalSlides = dishes.length

//     // Show 5 slides: 2 before current, current, 2 after current
//     for (let i = -2; i <= 2; i++) {
//       const index = (currentSlide + i + totalSlides) % totalSlides
//       visibleSlides.push({ dish: dishes[index], position: i })
//     }

//     return visibleSlides
//   }

//   const getBadgeComponent = (dish) => {
//     if (dish.isSpecial) {
//       return (
//         <div className="inline-flex items-center gap-1 bg-gradient-to-r from-amber-500 to-orange-600 text-white border-0 shadow-lg text-xs sm:text-sm px-2 py-1 rounded-full">
//           <ChefHatIcon className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
//           <span className="hidden xs:inline">Chef's </span>Special
//         </div>
//       )
//     }
//     if (dish.isNew) {
//       return (
//         <div className="inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0 shadow-lg text-xs sm:text-sm px-2 py-1 rounded-full">
//           New
//         </div>
//       )
//     }
//     if (dish.isPopular) {
//       return (
//         <div className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-600 text-white border-0 shadow-lg text-xs sm:text-sm px-2 py-1 rounded-full">
//           Popular
//         </div>
//       )
//     }
//     return null
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
//       {/* Fixed Cart Button */}
//       <div className="fixed top-6 right-6 z-50">
//         <button
//           onClick={() => setShowCart(!showCart)}
//           className="relative bg-gradient-to-r from-amber-500 to-orange-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
//         >
//           <ShoppingCartIcon className="w-6 h-6" />
//           {getTotalItems() > 0 && (
//             <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
//               {getTotalItems()}
//             </span>
//           )}
//         </button>

//         {/* Cart Dropdown */}
//         {showCart && (
//           <div className="absolute top-full right-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 p-4">
//             <h3 className="font-bold text-lg mb-3 text-gray-800">Cart Items</h3>
//             {Object.keys(cart).length === 0 ? (
//               <p className="text-gray-500 text-center py-4">Your cart is empty</p>
//             ) : (
//               <>
//                 <div className="max-h-60 overflow-y-auto">
//                   {Object.entries(cart).map(([dishId, count]) => {
//                     const dish = dishes.find(d => d.id === parseInt(dishId))
//                     return (
//                       <div key={dishId} className="flex items-center justify-between py-2 border-b">
//                         <div className="flex-1">
//                           <p className="font-medium text-sm">{dish?.name}</p>
//                           <p className="text-amber-600 font-bold">${dish?.price}</p>
//                         </div>
//                         <div className="flex items-center gap-2">
//                           <button
//                             onClick={() => removeFromCart(parseInt(dishId))}
//                             className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center hover:bg-red-200"
//                           >
//                             <MinusIcon className="w-3 h-3" />
//                           </button>
//                           <span className="font-bold">{count}</span>
//                           <button
//                             onClick={() => addToCart(dish)}
//                             className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center hover:bg-green-200"
//                           >
//                             <PlusIcon className="w-3 h-3" />
//                           </button>
//                         </div>
//                       </div>
//                     )
//                   })}
//                 </div>
//                 <div className="pt-3 border-t mt-3">
//                   <div className="flex justify-between items-center mb-3">
//                     <span className="font-bold text-lg">Total: ${getTotalPrice()}</span>
//                   </div>
//                   <button className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white py-2 rounded-lg font-semibold hover:from-amber-600 hover:to-orange-700 transition-all">
//                     Checkout
//                   </button>
//                 </div>
//               </>
//             )}
//           </div>
//         )}
//       </div>

//       <section className="w-full py-12 sm:py-16 lg:py-24 overflow-hidden">
//         <div className="mx-auto w-full max-w-7xl px-3 sm:px-6 lg:px-8">
//           {/* Header Section */}
//           <div className="text-center mb-10 sm:mb-16 lg:mb-20">
//             <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 text-xs sm:text-sm font-medium rounded-full border border-amber-200/50 shadow-sm mb-4 sm:mb-6">
//               <SparklesIcon className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-600 stroke-1" />
//               <span>Global Cuisine Collection</span>
//             </div>

//             <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight px-2">
//               World's{" "}
//               <span className="bg-gradient-to-r from-amber-600 via-orange-500 to-yellow-600 bg-clip-text text-transparent">
//                 Finest
//               </span>
//               <br className="sm:hidden" />
//               <span className="hidden sm:inline"> </span>Flavors
//             </h2>

//             <p className="text-sm sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-4 sm:px-6">
//               From Hyderabadi biryanis to Chinese delicacies, explore authentic dishes from every corner of the world
//             </p>
//           </div>

//           {/* Custom Carousel Container */}
//           <div className="relative mx-auto max-w-6xl lg:max-w-7xl">
//             {/* Background decorative elements */}
//             <div className="absolute -top-4 sm:-top-8 -left-4 sm:-left-8 w-12 h-12 sm:w-20 sm:h-20 bg-gradient-to-br from-amber-400/20 to-orange-500/20 rounded-full blur-xl animate-pulse" />
//             <div className="absolute -bottom-4 sm:-bottom-8 -right-4 sm:-right-8 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-yellow-400/20 to-amber-500/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}} />

//             <div className="relative bg-white/50 sm:bg-white/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-3 sm:p-6 lg:p-12 shadow-lg sm:shadow-xl border border-white/20">

//               {/* Navigation Buttons */}
//               <button
//                 onClick={prevSlide}
//                 className="absolute left-2 sm:left-4 lg:-left-8 top-1/2 -translate-y-1/2 z-30 bg-white/95 backdrop-blur-lg text-amber-600 hover:text-orange-600 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full shadow-xl border-2 border-amber-200/30 hover:border-orange-300/50 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-2xl"
//               >
//                 <ChevronLeftIcon className="w-5 h-5 sm:w-6 sm:h-6" />
//               </button>

//               <button
//                 onClick={nextSlide}
//                 className="absolute right-2 sm:right-4 lg:-right-8 top-1/2 -translate-y-1/2 z-30 bg-white/95 backdrop-blur-lg text-amber-600 hover:text-orange-600 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full shadow-xl border-2 border-amber-200/30 hover:border-orange-300/50 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-2xl"
//               >
//                 <ChevronRightIcon className="w-5 h-5 sm:w-6 sm:h-6" />
//               </button>

//               {/* Carousel Track */}
//               <div className="relative overflow-hidden py-8 sm:py-12 lg:py-16">
//                 <div className="flex items-center justify-center gap-4 sm:gap-6 lg:gap-8 perspective-1000">
//                   {getVisibleSlides().map(({ dish, position }) => {
//                     const isCenter = position === 0
//                     const isAdjacent = Math.abs(position) === 1
//                     const isEdge = Math.abs(position) === 2

//                     let transformStyle = ""
//                     let zIndex = 1
//                     let opacity = 0.4
//                     let scale = 0.7

//                     if (isCenter) {
//                       transformStyle = "translateY(-8px) scale(1.1)"
//                       zIndex = 20
//                       opacity = 1
//                       scale = 1.1
//                     } else if (isAdjacent) {
//                       const rotateY = position > 0 ? "-20deg" : "20deg"
//                       transformStyle = `translateY(-4px) scale(0.9) rotateY(${rotateY})`
//                       zIndex = 15
//                       opacity = 0.8
//                       scale = 0.9
//                     } else if (isEdge) {
//                       const rotateY = position > 0 ? "-35deg" : "35deg"
//                       transformStyle = `scale(0.75) rotateY(${rotateY})`
//                       zIndex = 10
//                       opacity = 0.6
//                       scale = 0.75
//                     }

//                     return (
//                       <div
//                         key={`${dish.id}-${position}`}
//                         className="flex-shrink-0 w-64 sm:w-72 lg:w-80 transition-all duration-700 ease-out cursor-pointer transform-gpu"
//                         style={{
//                           transform: transformStyle,
//                           zIndex,
//                           opacity,
//                           transformStyle: 'preserve-3d'
//                         }}
//                         onClick={() => isCenter ? null : goToSlide(dishes.findIndex(d => d.id === dish.id))}
//                       >
//                         <div className="relative group">
//                           {/* Main Card */}
//                           <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-white shadow-lg sm:shadow-2xl border border-gray-100/50 transition-all duration-500 hover:shadow-3xl">
//                             {/* Image */}
//                             <div className="aspect-[3/4] sm:aspect-[4/5] overflow-hidden">
//                               <img
//                                 src={dish.src}
//                                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//                                 alt={dish.name}
//                                 loading="lazy"
//                               />

//                               {/* Gradient Overlay */}
//                               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
//                             </div>

//                             {/* Content Overlay */}
//                             <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 lg:p-6 text-white">
//                               {/* Cuisine Badge */}
//                               <div className="mb-2">
//                                 <div className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-600 text-white border-0 text-xs px-2 py-1 rounded-full">
//                                   {dish.cuisine}
//                                 </div>
//                               </div>

//                               {/* Dish Name */}
//                               <h3 className="text-base sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2 leading-tight">
//                                 {dish.name}
//                               </h3>

//                               {/* Description - Hidden on small mobile */}
//                               <p className="hidden sm:block text-white/90 text-xs sm:text-sm leading-relaxed mb-2 sm:mb-3 line-clamp-2">
//                                 {dish.description}
//                               </p>

//                               {/* Price and Rating Row */}
//                               <div className="flex items-center justify-between mb-3">
//                                 {/* Price */}
//                                 <div className="flex items-center">
//                                   <span className="text-lg sm:text-xl lg:text-2xl font-bold text-amber-400">
//                                     ${dish.price}
//                                   </span>
//                                 </div>

//                                 {/* Rating */}
//                                 <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm rounded-full px-2 sm:px-3 py-1">
//                                   <StarIcon className="w-3 h-3 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
//                                   <span className="text-xs sm:text-sm font-medium">
//                                     {dish.rating}
//                                   </span>
//                                 </div>
//                               </div>

//                               {/* Add to Cart Section */}
//                               <div className="flex items-center gap-2">
//                                 {cart[dish.id] ? (
//                                   <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-full px-3 py-2 flex-1">
//                                     <button
//                                       onClick={(e) => {
//                                         e.stopPropagation()
//                                         removeFromCart(dish.id)
//                                       }}
//                                       className="w-6 h-6 rounded-full bg-red-500/80 text-white flex items-center justify-center hover:bg-red-600/80 transition-colors"
//                                     >
//                                       <MinusIcon className="w-3 h-3" />
//                                     </button>

//                                     <span className="font-bold text-sm flex-1 text-center">
//                                       {cart[dish.id]} in cart
//                                     </span>

//                                     <button
//                                       onClick={(e) => {
//                                         e.stopPropagation()
//                                         addToCart(dish)
//                                       }}
//                                       className="w-6 h-6 rounded-full bg-green-500/80 text-white flex items-center justify-center hover:bg-green-600/80 transition-colors"
//                                     >
//                                       <PlusIcon className="w-3 h-3" />
//                                     </button>
//                                   </div>
//                                 ) : (
//                                   <button
//                                     onClick={(e) => {
//                                       e.stopPropagation()
//                                       addToCart(dish)
//                                     }}
//                                     className="flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-4 py-2 rounded-full font-semibold text-sm hover:from-amber-600 hover:to-orange-700 transition-all duration-300 hover:scale-105 flex-1"
//                                   >
//                                     <ShoppingCartIcon className="w-4 h-4" />
//                                     Add to Cart
//                                   </button>
//                                 )}
//                               </div>
//                             </div>

//                             {/* Top Badges */}
//                             <div className="absolute top-2 sm:top-4 left-2 sm:left-4 flex flex-col gap-1 sm:gap-2">
//                               {getBadgeComponent(dish)}
//                             </div>

//                             {/* Hover/Active Overlay */}
//                             <div className="absolute inset-0 bg-gradient-to-t from-amber-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl sm:rounded-2xl pointer-events-none" />
//                           </div>
//                         </div>
//                       </div>
//                     )
//                   })}
//                 </div>
//               </div>

//               {/* Pagination Dots */}
//               <div className="flex justify-center gap-2 mt-4">
//                 {dishes.map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => goToSlide(index)}
//                     className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                       index === currentSlide
//                         ? 'bg-gradient-to-r from-amber-500 to-orange-600 scale-125 shadow-lg'
//                         : 'bg-amber-300/50 hover:bg-amber-400/70'
//                     }`}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Bottom CTA */}
//           <div className="text-center mt-10 sm:mt-16 lg:mt-20">
//             <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 overflow-hidden text-sm sm:text-base">
//               <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//               <span className="relative z-10 flex items-center justify-center gap-2">
//                 View Full Menu
//                 <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                 </svg>
//               </span>
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }
// export default CardCarousel


// #########################################################################


import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { SparklesIcon, StarIcon, ChefHatIcon, Plus, Minus } from "lucide-react"
import { useCart } from "../CartContextSection/CartContext" // ✅ Cart context import

import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules"

import { Badge } from "@/components/ui/badge"

export const CardCarousel = ({
  images,
  autoplayDelay = 4000,
  showPagination = true,
  showNavigation = true,
  onAddToCart, // ✅ new prop

}) => {
  const { cartItems } = useCart(); // ✅ cart access
 
  const css = `
  .dish-swiper {
    width: 100%;
    overflow: visible;
    padding: 20px 0 80px 0;
  }
  
  .dish-swiper .swiper-wrapper {
    align-items: center;
    transform-style: preserve-3d;
  }
  
  .dish-swiper .swiper-slide {
    width: 280px;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    transform-style: preserve-3d;
    transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    opacity: 1;
  }
  
  /* Desktop specific styling */
  @media (min-width: 1024px) {
    .dish-swiper {
      padding: 40px 0 100px 0;
    }
    
    .dish-swiper .swiper-slide {
      width: 300px;
    }
    
    /* Center card (active) */
    .dish-swiper .swiper-slide-active {
      z-index: 10;
    }
    
    .dish-swiper .swiper-slide-active .dish-card {
      transform: translateY(-15px) scale(1.1);
      box-shadow: 0 35px 70px -15px rgba(217, 119, 6, 0.5);
      opacity: 1;
    }
    
    /* Next cards (right side) */
    .dish-swiper .swiper-slide-next .dish-card {
      transform: translateY(-8px) scale(0.9) rotateY(-20deg);
      opacity: 0.8;
      z-index: 8;
    }
    
    .dish-swiper .swiper-slide-next + .swiper-slide .dish-card {
      transform: translateY(-5px) scale(0.75) rotateY(-35deg);
      opacity: 0.6;
      z-index: 6;
    }
    
    /* Previous cards (left side) */
    .dish-swiper .swiper-slide-prev .dish-card {
      transform: translateY(-8px) scale(0.9) rotateY(20deg);
      opacity: 0.8;
      z-index: 8;
    }
    
    /* Second previous card (far left) */
    .dish-swiper .swiper-slide-prev .dish-card {
      transform: translateY(-5px) scale(0.75) rotateY(35deg);
      opacity: 0.6;
      z-index: 6;
    }
    
    /* Cards appearing from right */
    .dish-swiper .swiper-slide:not(.swiper-slide-active):not(.swiper-slide-next):not(.swiper-slide-prev) .dish-card {
      transform: translateY(0) scale(0.65) rotateY(-45deg);
      opacity: 0.4;
      z-index: 4;
    }
    
    /* Smooth right-to-left flow animation */
    .dish-swiper .swiper-slide .dish-card {
      transform-origin: center center;
      perspective: 1000px;
    }
  }
  
  /* Tablet responsiveness */
  @media (max-width: 1023px) and (min-width: 769px) {
    .dish-swiper .swiper-slide {
      width: 280px;
    }
    
    .dish-swiper .swiper-slide-active .dish-card {
      transform: translateY(-10px) scale(1.05);
      box-shadow: 0 25px 50px -12px rgba(217, 119, 6, 0.4);
    }
    
    .dish-swiper .swiper-slide-next .dish-card,
    .dish-swiper .swiper-slide-prev .dish-card {
      transform: translateY(-5px) scale(0.95);
      opacity: 0.8;
    }
  }
  
  /* Mobile responsiveness */
  @media (max-width: 768px) {
    .dish-swiper {
      padding: 15px 0 60px 0;
    }
    
    .dish-swiper .swiper-slide {
      width: 260px;
    }
    
    .dish-swiper .swiper-slide-active .dish-card {
      transform: translateY(-8px) scale(1.02);
      box-shadow: 0 20px 40px -10px rgba(217, 119, 6, 0.3);
    }
    
    .dish-swiper .swiper-slide-next .dish-card,
    .dish-swiper .swiper-slide-prev .dish-card {
      transform: translateY(-3px) scale(0.98);
      opacity: 0.9;
    }
  }
  
  @media (max-width: 480px) {
    .dish-swiper {
      padding: 10px 0 50px 0;
    }
    
    .dish-swiper .swiper-slide {
      width: 240px;
    }
  }
  
  @media (max-width: 360px) {
    .dish-swiper .swiper-slide {
      width: 220px;
    }
  }
  
  /* Remove default 3D shadows */
  .dish-swiper .swiper-3d .swiper-slide-shadow-left,
  .dish-swiper .swiper-3d .swiper-slide-shadow-right {
    display: none !important;
  }
  
  /* Enhanced pagination for desktop */
  .dish-swiper .swiper-pagination {
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: auto;
  }
  
  .dish-swiper .swiper-pagination-bullet {
    background: linear-gradient(45deg, #d97706, #f59e0b);
    opacity: 0.3;
    width: 12px;
    height: 12px;
    margin: 0 8px;
    border-radius: 50%;
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    cursor: pointer;
  }
  
  .dish-swiper .swiper-pagination-bullet-active {
    opacity: 1;
    background: linear-gradient(45deg, #f59e0b, #fbbf24);
    transform: scale(1.4);
    box-shadow: 0 4px 12px rgba(245, 158, 11, 0.4);
  }
  
  /* Improved navigation buttons */
  .dish-swiper .swiper-button-next,
  .dish-swiper .swiper-button-prev {
    color: #f59e0b;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
    border-radius: 50%;
    width: 55px;
    height: 55px;
    margin-top: -27.5px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    border: 2px solid rgba(251, 191, 36, 0.3);
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    z-index: 30;
  }
  
  .dish-swiper .swiper-button-next:hover,
  .dish-swiper .swiper-button-prev:hover {
    background: rgba(254, 243, 199, 0.98);
    transform: scale(1.1) translateY(-2px);
    box-shadow: 0 15px 35px rgba(217, 119, 6, 0.25);
    color: #d97706;
  }
  
  .dish-swiper .swiper-button-next::after,
  .dish-swiper .swiper-button-prev::after {
    font-size: 18px;
    font-weight: 800;
  }
  
  /* Desktop navigation positioning */
  @media (min-width: 1024px) {
    .dish-swiper .swiper-button-next,
    .dish-swiper .swiper-button-prev {
      width: 60px;
      height: 60px;
      margin-top: -30px;
    }
    
    .dish-swiper .swiper-button-next {
      right: -30px;
    }
    
    .dish-swiper .swiper-button-prev {
      left: -30px;
    }
  }
  
  /* Tablet navigation */
  @media (max-width: 1023px) and (min-width: 769px) {
    .dish-swiper .swiper-button-next,
    .dish-swiper .swiper-button-prev {
      width: 50px;
      height: 50px;
      margin-top: -25px;
    }
    
    .dish-swiper .swiper-button-next::after,
    .dish-swiper .swiper-button-prev::after {
      font-size: 16px;
    }
  }
  
  /* Mobile navigation */
  @media (max-width: 768px) {
    .dish-swiper .swiper-button-next,
    .dish-swiper .swiper-button-prev {
      width: 45px;
      height: 45px;
      margin-top: -22.5px;
    }
    
    .dish-swiper .swiper-button-next::after,
    .dish-swiper .swiper-button-prev::after {
      font-size: 15px;
    }
  }
  
  /* Small mobile - hide navigation */
  @media (max-width: 480px) {
    .dish-swiper .swiper-button-next,
    .dish-swiper .swiper-button-prev {
      display: none;
    }
  }
  
  /* Smooth card transitions */
  .dish-card {
    transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    transform-origin: center center;
    will-change: transform, opacity;
  }
  
  .dish-card img {
    transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  
  /* Desktop hover effects */
  @media (min-width: 1024px) {
    .dish-swiper .swiper-slide-active .dish-card:hover {
      transform: translateY(-20px) scale(1.12) !important;
      box-shadow: 0 40px 80px -15px rgba(217, 119, 6, 0.6);
    }
    
    .dish-card:hover img {
      transform: scale(1.08);
    }
  }
  
  /* Mobile touch feedback */
  @media (max-width: 1023px) {
    .dish-card:active {
      transform: scale(0.98);
    }
  }
  
  /* Loading animation */
  @keyframes slideInFromRight {
    0% {
      opacity: 0;
      transform: translateX(100px) rotateY(-60deg);
    }
    100% {
      opacity: 1;
      transform: translateX(0) rotateY(0deg);
    }
  }
  
  .dish-card {
    animation: slideInFromRight 0.8s ease-out forwards;
  }
  
  /* Ensure proper stacking */
  .dish-swiper .swiper-slide {
    position: relative;
  }
  `

  return (
    <section className="w-full py-12 sm:py-16 lg:py-24 bg-white overflow-hidden">
      <style>{css}</style>

      <div className="mx-auto w-full max-w-7xl px-3 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-10 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 text-xs sm:text-sm font-medium rounded-full border border-amber-200/50 shadow-sm mb-4 sm:mb-6">
            <SparklesIcon className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-600 stroke-1" />
            <span>Culinary Masterpieces</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight px-2">
            Our{" "}
            <span className="bg-black text-orange-600 bg-clip-text ">
              Signature
            </span>
            <br className="sm:hidden" />
            <span className="hidden sm:inline"> </span>Dishes
          </h2>
          <div className="w-16 sm:w-20 md:w-24 lg:w-32 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-600 mx-auto mb-4 sm:mb-6 rounded-full shadow-sm"></div>

          <p className="text-sm sm:text-lg lg:text-xl text-white max-w-2xl mx-auto leading-relaxed px-4 sm:px-6">
            Experience the artistry of our chefs through carefully crafted dishes that tell a story of flavor, tradition, and innovation
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative mx-auto max-w-6xl lg:max-w-7xl">
          {/* Background decorative elements */}
          <div className="absolute -top-4 sm:-top-8 -left-4 sm:-left-8 w-12 h-12 sm:w-20 sm:h-20 bg-gradient-to-br from-amber-400/20 to-orange-500/20 rounded-full blur-xl animate-pulse" />
          <div className="absolute -bottom-4 sm:-bottom-8 -right-4 sm:-right-8 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-yellow-400/20 to-amber-500/20 rounded-full blur-xl animate-pulse delay-1000" />

          <div className="relative bg-white/50 sm:bg-white/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-3 sm:p-6 lg:p-12 shadow-lg sm:shadow-xl border border-white/20">
            <Swiper
              className="dish-swiper"
              spaceBetween={30}
              autoplay={{
                delay: autoplayDelay,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
                reverseDirection: false,
              }}
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView="auto"
              initialSlide={Math.floor(images.length / 2)}
              coverflowEffect={{
                rotate: 0,
                stretch:0,
                depth: 300,
                modifier: 1.3,
                slideShadows: false,
              }}
              speed={800}
              longSwipesRatio={0.5}
              pagination={
                showPagination
                  ? {
                    clickable: true,
                    dynamicBullets: true,
                    dynamicMainBullets: 3,
                  }
                  : false
              }
              navigation={
                showNavigation
                  ? {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  }
                  : false
              }
              breakpoints={{
                320: {
                  spaceBetween:40,
                  coverflowEffect: {
                    rotate:-35,
                    stretch:10,
                    depth:600,
                    modifier:1.1,
                  },
                },
                768: {
                  spaceBetween: 20,
                  coverflowEffect: {
                    rotate: 0,
                    depth: 250,
                    modifier: 1,
                  },
                },
                1024: {
      spaceBetween: 110,
      coverflowEffect: {
        rotate: -15,
        depth: 300,
        modifier: 1.8,
      },
                },
                1280: {
                  spaceBetween: 110,
                  coverflowEffect: {
                    rotate: 0,
                    depth: 400,
                    modifier: 1.5,
                  },
                },
              }}
              modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
            >
              {images.map((image, index) => {
                // ✅ Har ek dish ke liye cart quantity nikalna
                const cartItem = cartItems.find(item => item.id === image.id);
                const quantity = cartItem ? cartItem.quantity : 0;
                
//                 const cartItem = cartItems.find(item => item.id === image.id);
// const quantity = cartItem ? cartItem.quantity : 0;

                return(
                <SwiperSlide key={image.id || `dish-${index}`}>
                  <div className="dish-card relative group cursor-pointer">
                    {/* Main Image Container */}
                    <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-white shadow-lg sm:shadow-2xl border border-gray-100/50">
                      {/* Image */}
                      <div className="aspect-[3/4] sm:aspect-[4/5] overflow-hidden">
                        <img
                          src={image.src}
                          width={400}
                          height={500}
                          className="w-full h-full object-cover"
                          alt={image.alt || image.name || "Delicious dish"}
                          loading="lazy"
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                      </div>

                      {/* Content Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 lg:p-6 text-white">
                        {/* Dish Name */}
                        <h3 className="text-base sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2 leading-tight line-clamp-2">
                          {image.name || image.title || "Signature Dish"}
                        </h3>

                        {/* Description - Hidden on small mobile */}
                        {image.description && (
                          <p className="hidden sm:block text-white/90 text-xs sm:text-sm leading-relaxed mb-2 sm:mb-3 line-clamp-2">
                            {image.description}
                          </p>
                        )}

                        {/* Bottom Row */}
                        <div className="flex items-center justify-between">
                          {/* Price */}
                          {image.price && (
                            <div className="flex items-center">
                              <span className="text-lg sm:text-xl lg:text-2xl font-bold text-amber-400">
                                ${image.price}
                              </span>
                            </div>
                          )}

                          {/* ✅ Add to Cart */}
                          {onAddToCart && (
                            <div>
                              {quantity > 0 ? (
                                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-lg">
                                  <button
                                    onClick={() => {
                                      if (quantity === 1) {
                                        onAddToCart(image, "remove");
                                      } else {
                                        onAddToCart(image, "decrease");
                                      }
                                    }}
                                    className="px-2 py-1 text-xs sm:text-sm rounded-md"
                                  >
                                    <Minus className="text-white bg-red-500 rounded-3xl font-extrabold" />
                                  </button>

                                  <span className="text-white font-medium">{quantity}</span>

                                  <button
                                    onClick={() => onAddToCart(image, "increase")}
                                    className="px-2 py-1 text-xs sm:text-sm rounded-md"
                                  >
                                    
                                    <Plus className="text-white bg-green-500 rounded-3xl font-bold" />
                                    
                                  </button>
                                </div>
                              ) : (
                                <button
                                  onClick={() => onAddToCart(image, "add")}
                                  className="px-4 py-1 bg-orange-500 hover:bg-orange-600 text-white text-sm sm:text-base rounded-lg shadow-md transition"
                                >
                                  Add
                                </button>
                              )}
                            </div>
                          )}


                          {/* Rating */}
                          <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm rounded-full px-2 sm:px-3 py-1">
                            <StarIcon className="w-3 h-3 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
                            <span className="text-xs sm:text-sm font-medium">
                              {image.rating || "4.8"}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Top Badges */}
                      <div className="absolute top-2 sm:top-4 left-2 sm:left-4 flex flex-col gap-1 sm:gap-2">
                        {image.isSpecial && (
                          <Badge className="bg-gradient-to-r from-amber-500 to-orange-600 text-white border-0 shadow-lg text-xs sm:text-sm">
                            <ChefHatIcon className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1" />
                            <span className=" xs:inline">Chef's </span>Special
                          </Badge>
                        )}

                        {image.isNew && (
                          <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0 shadow-lg text-xs sm:text-sm">
                            New
                          </Badge>
                        )}

                        {image.isPopular && (
                          <Badge className="bg-gradient-to-r from-purple-500 to-pink-600 text-white border-0 shadow-lg text-xs sm:text-sm">
                            Popular
                          </Badge>
                        )}
                      </div>

                      {/* Hover/Active Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-amber-600/20 to-transparent opacity-0 group-hover:opacity-100 group-active:opacity-50 transition-opacity duration-300 rounded-xl sm:rounded-2xl pointer-events-none" />
                    </div>
                  </div>
                </SwiperSlide>
                );
})}
            </Swiper>
          </div>
        </div>

        {/* Add to cart Section  */}



        {/* Add to cart Section  */}

        {/* Bottom CTA */}
        {/* <div className="text-center mt-10 sm:mt-16 lg:mt-20">
          <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 overflow-hidden text-sm sm:text-base">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 flex items-center justify-center gap-2">
              View Full Menu
              <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
        </div> */}
      </div>
    </section>
  )
}