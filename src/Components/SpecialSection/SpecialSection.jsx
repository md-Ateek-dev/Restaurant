// import React, { useState, useEffect } from 'react';

// const SpecialSection = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsVisible(true);
//     }, 200);
//     return () => clearTimeout(timer);
//   }, []);

//   const specialDishes = [
//     {
//       id: 1,
//       name: "Grilled Mediterranean Sea Bass",
//       description: "Fresh sea bass with herbs, olive oil, and roasted vegetables",
//       price: "$28.95",
//       image: "dish1",
//       delay: "delay-100"
//     },
//     {
//       id: 2,
//       name: "Truffle Mushroom Risotto",
//       description: "Creamy arborio rice with wild mushrooms and black truffle",
//       price: "$24.50",
//       image: "dish2",
//       delay: "delay-200"
//     },
//     {
//       id: 3,
//       name: "Beef Wellington",
//       description: "Premium beef tenderloin wrapped in puff pastry with mushroom duxelles",
//       price: "$42.00",
//       image: "dish3",
//       delay: "delay-300"
//     },
//     {
//       id: 4,
//       name: "Pan-Seared Duck Breast",
//       description: "Five-spice duck with cherry gastrique and seasonal vegetables",
//       price: "$32.75",
//       image: "dish4",
//       delay: "delay-400"
//     },
//     {
//       id: 5,
//       name: "Lobster Thermidor",
//       description: "Fresh lobster in creamy cognac sauce with Gruyère cheese",
//       price: "$45.95",
//       image: "dish5",
//       delay: "delay-500"
//     },
//     {
//       id: 6,
//       name: "Chocolate Lava Cake",
//       description: "Warm chocolate cake with molten center and vanilla ice cream",
//       price: "$12.95",
//       image: "dish6",
//       delay: "delay-600"
//     }
//   ];

//   const DishImage = ({ dishId, name }) => {
//     const colors = [
//       'from-red-500 to-orange-600',
//       'from-green-500 to-emerald-600',
//       'from-purple-500 to-pink-600',
//       'from-blue-500 to-cyan-600',
//       'from-amber-500 to-orange-600',
//       'from-indigo-500 to-purple-600'
//     ];

//     const colorClass = colors[(dishId - 1) % colors.length];

//     return (
//       <div className={`w-full h-48 rounded-t-xl bg-gradient-to-br ${colorClass} relative overflow-hidden`}>
//         <div className="absolute inset-0 bg-black bg-opacity-20"></div>
//         <div className="absolute inset-0 flex items-center justify-center">
//           <div className="text-center text-white">
//             <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
//               <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
//                 <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd" />
//               </svg>
//             </div>
//             <p className="text-sm font-medium opacity-90">{name}</p>
//           </div>
//         </div>

//         {/* Decorative elements */}
//         <div className="absolute top-3 right-3 w-8 h-8 border border-white border-opacity-30 rounded-full"></div>
//         <div className="absolute bottom-3 left-3 w-4 h-4 border border-white border-opacity-40 rounded-full"></div>
//       </div>
//     );
//   };

//   return (
//     <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 via-amber-50 to-orange-50 relative overflow-hidden">
//       {/* Background decoration */}
//       <div className="absolute top-0 left-0 w-full h-full opacity-5">
//         <div className="absolute top-20 left-10 w-32 h-32 bg-amber-400 rounded-full"></div>
//         <div className="absolute top-60 right-20 w-24 h-24 bg-orange-400 rounded-full"></div>
//         <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-red-400 rounded-full"></div>
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
//             <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
//               Chef's <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Specials</span>
//             </h2>
//             <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-6 rounded-full"></div>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
//               Discover our carefully curated selection of signature dishes, crafted with passion and served with pride
//             </p>
//           </div>
//         </div>

//         {/* Dishes Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {specialDishes.map((dish) => (
//             <div
//               key={dish.id}
//               className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-out transform hover:scale-105 hover:-translate-y-2 group ${isVisible ? `opacity-100 translate-y-0 ${dish.delay}` : 'opacity-0 translate-y-12'
//                 }`}
//             >
//               {/* Dish Image */}
//               <DishImage dishId={dish.id} name={dish.name} />

//               {/* Card Content */}
//               <div className="p-6">
//                 <div className="flex justify-between items-start mb-3">
//                   <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-amber-600 transition-colors duration-300">
//                     {dish.name}
//                   </h3>
//                   <span className="text-2xl font-bold text-amber-600 bg-amber-50 px-3 py-1 rounded-full ml-2 flex-shrink-0">
//                     {dish.price}
//                   </span>
//                 </div>

//                 <p className="text-gray-600 mb-6 leading-relaxed">
//                   {dish.description}
//                 </p>

//                 <button
//                   className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-3 px-6 rounded-lg font-semibold text-lg transition-all duration-300 hover:from-amber-600 hover:to-orange-600 hover:shadow-lg transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-amber-200 group-hover:animate-pulse"
//                   onClick={() => alert(`Added ${dish.name} to cart!`)}
//                 >
//                   Add to Cart
//                 </button>
//               </div>

//               {/* Card accent */}
//               <div className="h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-b-xl"></div>
//             </div>
//           ))}
//         </div>

//         {/* Call to Action */}
//         <div className={`text-center mt-16 transition-all duration-1000 delay-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//           }`}>
//           <p className="text-lg text-gray-600 mb-8">
//             Can't find what you're looking for? Explore our full menu
//           </p>
//           <button
//             className="bg-white text-amber-600 border-2 border-amber-500 px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:bg-amber-500 hover:text-white hover:shadow-lg transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-amber-200"
//             onClick={() => alert('Full menu would open here')}
//           >
//             View Full Menu
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SpecialSection;

// import React from 'react';

// const dishes = [
//   {
//     id: 1,
//     image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80',
//     name: 'Grilled Salmon',
//     description: 'Fresh Atlantic salmon grilled to perfection with herbs.',
//     price: '$24.99',
//   },
//   {
//     id: 2,
//     image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=600&q=80',
//     name: 'Steak Au Poivre',
//     description: 'Juicy ribeye steak with peppercorn sauce and seasonal veggies.',
//     price: '$32.50',
//   },
//   {
//     id: 3,
//     image: 'https://images.unsplash.com/photo-1555992336-cbf6aba90f47?auto=format&fit=crop&w=600&q=80',
//     name: 'Pasta Carbonara',
//     description: 'Classic Italian pasta with creamy egg and pancetta sauce.',
//     price: '$18.75',
//   },
//   {
//     id: 4,
//     image: 'https://images.unsplash.com/photo-1543352634-6fbbaf7faba3?auto=format&fit=crop&w=600&q=80',
//     name: 'Vegan Buddha Bowl',
//     description: 'Healthy and colorful bowl with quinoa, chickpeas & veggies.',
//     price: '$15.00',
//   },
//   {
//     id: 5,
//     image: 'https://images.unsplash.com/photo-1512058564366-c9e2ede1735c?auto=format&fit=crop&w=600&q=80',
//     name: 'Chocolate Lava Cake',
//     description: 'Warm molten chocolate cake served with vanilla ice cream.',
//     price: '$9.99',
//   }
// ];

// const SpecialDishesSection = () => {
//   return (
//     <section
//       className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-tr from-gray-50 via-yellow-50 to-white rounded-3xl shadow-inner"
//       aria-labelledby="special-dishes-title"
//     >
//       <h2
//         id="special-dishes-title"
//         className="text-4xl font-extrabold text-amber-600 mb-10 text-center tracking-wide drop-shadow-md"
//       >
//         Our Special Dishes
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//         {dishes.map(({ id, image, name, description, price }) => (
//           <article
//             key={id}
//             className="bg-white rounded-xl shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer animate-zoomFade"
//           >
//             <img
//               src={image}
//               alt={name}
//               className="w-full h-48 object-cover object-center"
//               loading="lazy"
//             />
//             <div className="p-6 flex flex-col h-full">
//               <h3 className="text-xl font-bold text-amber-600 mb-2">{name}</h3>
//               <p className="text-gray-700 flex-grow text-sm leading-snug mb-4">{description}</p>
//               <div className="flex items-center justify-between mt-auto">
//                 <span className="text-amber-700 font-extrabold text-lg tracking-wide">
//                   {price}
//                 </span>
//                 <button
//                   type="button"
//                   className="bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md transition"
//                 >
//                   Order Now
//                 </button>
//               </div>
//             </div>
//           </article>
//         ))}
//       </div>

//       <style jsx>{`
//         @keyframes zoomFade {
//           0% {
//             opacity: 0;
//             transform: translateY(20px) scale(0.95);
//           }
//           100% {
//             opacity: 1;
//             transform: translateY(0) scale(1);
//           }
//         }
//         .animate-zoomFade {
//           animation: zoomFade 0.6s ease forwards;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default SpecialDishesSection;

// import React from "react"
// import img1 from '../../assets/Images/Banner1.jpg'
// import img2 from '../..//assets/Images/Banner2.avif'
// import img3 from '../../assets/Images/Banner3.avif'
// import { CardSwipe } from "../ui/card-swipe"

// const specialSection = () => {
//   const images = [
//     { src: img1, alt: "Image 1" },
//     { src: img2, alt: "Image 2" },
//     { src: img3, alt: "Image 3" },
//   ]

//   return (
//     <div className="w-full">
//       <CardSwipe images={images} autoplayDelay={2000} slideShadows={false} />
//     </div>
//   )
// }

// export default specialSection

// import React from "react";
// import CardSwipe from "../../Components/ui/card-swipe"
// import img1 from "../../assets/images/Banner2.avif";
// import img2 from "../../assets/images/Banner3.avif";
// import img3 from "../../assets/images/Banner4.avif";
// import img4 from "../../assets/Images/Banner5.avif"

// const SpecialSection = () => {
//   const images = [
//     { src: img1, alt: "Image 1" },
//     { src: img2, alt: "Image 2" },
//     { src: img3, alt: "Image 3" },
//     { src: img4, alt: "Image 4" },
//   ];

//   return (
//     <div className="w-full">
//       <CardSwipe images={images} autoplayDelay={2000} slideShadows={false} />
//     </div>
//   );
// };

// export default SpecialSection;

// "use client";
import React from "react";
import { CardCarousel } from "@/components/ui/card-carousel"; // ✅ ensure correct path & lowercase
import img2 from "../../assets/Images/Card5.avif";
import img3 from "../../assets/Images/Card3.avif";
import img4 from "../../assets/Images/Card4.avif";
import img5 from "../../assets/Images/Card1.avif";
import img6 from "../../assets/Images/Card2.avif";
import { useCart,  } from "../CartContextSection/CartContext"; // ✅ CartContext ka path sahi rakho

const SpecialSection = () => {
    const { addToCart, removeFromCart, action } = useCart(); // ✅ cart ka hook
if (action === "add" || action === "increase") addToCart(images, action);
    if (action === "decrease") addToCart(images, "decrease");
    if (action === "remove") removeFromCart(images.id);
    
  const images = [
    {  
      id: 1,
      src: img2,
      alt: "Dish 1 Image",
      price: "199",
      title: "Delicious Dish 1",
      description: "A delightful dish made with fresh ingredients.",
      rating: "4.9",
      isSpecial: true,
    },
    {
      id: 2,
      src: img2,
      alt: "Dish 1 Image",
      price: "199",
      title: "Delicious Dish 1",
      description: "A delightful dish made with fresh ingredients.",
      rating: "4.9",
      isSpecial: true,
    },
    { 
      id: 3,
      src: img2,
      alt: "Dish 1 Image",
      price: "199",
      title: "Delicious Dish 1",
      description: "A delightful dish made with fresh ingredients.",
      rating: "4.9",
      isSpecial: true,
    },
    { 
      id:4,
      src: img2,
      alt: "Dish 1 Image",
      price: "199",
      title: "Delicious Dish 1",
      description: "A delightful dish made with fresh ingredients.",
      rating: "4.9",
      isSpecial: true,
    },
    { 
      id:5,
      src: img3,
      alt: "Dish 2 Image",
      price: "250",
      title: "Delicious Dish 2",
      description: "A delightful dish made with fresh ingredients.",
      rating: "4.7",
      isNew: true,
    },
    {
      id:6,
      src: img4,
      alt: "Dish 3 Image",
      price: "200",
      title: "Delicious Dish 3",
      description: "A delightful dish made with fresh ingredients.",
      rating: "4.8",
      isPopular: true,
    },
    {
      id:7,
      src: img5,
      alt: "Dish 4 Image",
      price: "300",
      title: "Delicious Dish 4",
      description: "A delightful dish made with fresh ingredients.",
      rating: "4.6",
    },
    {
     id:8,
      src: img6,
      alt: "Dish 5 Image",
      price: "500",
      title: "Delicious Dish 5",
      description: "A delightful dish made with fresh ingredients.",
      rating: "5.0",
      isSpecial: true,
      isPopular: true,
    },
    {
      id:9,
      src: img6,
      alt: "Dish 5 Image",
      price: "500",
      title: "Delicious Dish 5",
      description: "A delightful dish made with fresh ingredients.",
      rating: "5.0",
      isSpecial: true,
      isPopular: true,
    },
    {
      id:10,
      src: img6,
      alt: "Dish 5 Image",
      price: "500",
      title: "Delicious Dish 5",
      description: "A delightful dish made with fresh ingredients.",
      rating: "5.0",
      isSpecial: true,
      isPopular: true,
    },
  ];

  return (
    <section id="specialdishes" className=" bg-gradient-to-br from-white via-amber-50 to-orange-50">
      <CardCarousel
        images={images}
        
        autoplayDelay={2500}
        showPagination={true}
        showNavigation={true}
  onAddToCart={(dish, action) => addToCart(dish, action)} // ✅ ab action pass hoga
         

      />
    </section>
  );
};

export default SpecialSection;
