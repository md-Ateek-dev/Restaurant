import React, { useState } from "react";
import { motion } from "framer-motion";
import img1 from '../../assets/Images/Banner2.avif';
import img2 from '../../assets/Images/Banner3.avif';
import img3 from '../../assets/Images/Banner4.avif';
import img4 from '../../assets/Images/Banner5.avif';
import img5 from '../../assets/Images/Banner6.avif';
import img6 from '../../assets/Images/dessert.avif';
import img7 from '../../assets/Images/Dessert2.avif';
import img8 from '../../assets/Images/drink1.avif';
import img9 from '../../assets/Images/Drink2.avif';

// Menu data remains unchanged...

const menuData = {
  Starters: [
    // ... your menu items ...
    { id: 1, name: "Bruschetta", description: "Grilled bread garlic topped...", price: 6.99, image: img1 },
    { id: 2, name: "Stuffed Mushrooms", description:"Mushrooms filled with cheese...", price: 8.5, image: img2 },
  ],
  "Main Course": [
    { id: 3, name: "Grilled Salmon", description:"Fresh salmon served...", price: 18.99, image: img3 },
    { id: 4, name: "Steak Frites", description:"Juicy grilled steak...", price: 24.99, image: img4 },
    { id: 5, name: "Pasta Alfredo", description:"Creamy fettuccine tossed...", price: 14.5, image: img5 },
  ],
  Desserts: [
    { id: 6, name: "Tiramisu", description:"Classic Italian dessert...", price: 7.5, image: img6 },
    { id: 7, name: "Cheesecake", description:"Smooth cheesecake...", price: 6.99, image: img7 },
  ],
  Drinks: [
    { id: 8, name: "Mojito", description:"Refreshing mint cocktail...", price: 9.5, image: img8 },
    { id: 9, name: "Espresso", description:"Strong and rich coffee...", price: 3.5, image: img9 },
  ],
};

const categories = ["All", ...Object.keys(menuData)];
const CARDS_PER_BATCH = 4;

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(CARDS_PER_BATCH);

  // Filter items based on category
  const allDishes =
    activeCategory === "All"
      ? Object.values(menuData).flat()
      : menuData[activeCategory];

  // Apply visibleCount
  const displayedDishes = allDishes.slice(0, visibleCount);

  // Reset visibleCount when category changes
  React.useEffect(() => {
    setVisibleCount(CARDS_PER_BATCH);
  }, [activeCategory]);

  return (
    <section id="menu" className="bg-white py-16 px-6 min-h-screen">
      <motion.div
        className="max-w-4xl mx-auto text-center mb-12 text-black"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight px-2">
            Discover{" "}
            <span className="bg-black text-orange-600 bg-clip-text ">
              Our
       </span>
            <br className="sm:hidden" />
            <span className="hidden sm:inline"> </span> Menu
          </h2>
          <div className="w-16 sm:w-20 md:w-24 lg:w-32 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-600 mx-auto mb-4 sm:mb-6 rounded-full shadow-sm"></div>
        <p className="text-lg max-w-xl mx-auto font-medium">
          Discover the flavors crafted with passion and the freshest ingredients.
        </p>
      </motion.div>

      {/* Category Filters */}
      <div className="flex justify-center gap-6 mb-10 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full font-semibold transition-colors duration-300
              ${
                activeCategory === cat
                  ? "bg-yellow-400 text-red-900 shadow-lg shadow-yellow-400/60"
                  : "bg-red-600 bg-opacity-30 text-yellow-200 hover:bg-yellow-400 hover:text-red-900"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Dishes Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {displayedDishes.map((dish) => (
          <motion.div
            key={dish.id}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255,215,0,0.5)" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-t-lg h-48">
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div>
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold mb-1 text-gray-900">{dish.name}</h3>
              <p className="text-gray-600 flex-grow">{dish.description}</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-xl font-semibold text-red-600">
                  ${dish.price.toFixed(2)}
                </span>
                <button
                  className="bg-red-600 text-white px-4 py-2 rounded-full font-semibold shadow-md hover:bg-red-700 transition-colors duration-300"
                  aria-label={`Add ${dish.name} to cart`}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Show More / Show Less Button */}
      <div className="flex justify-center mt-10 gap-4">
        {visibleCount < allDishes.length && (
          <button
            onClick={() => setVisibleCount((prev) => Math.min(prev + CARDS_PER_BATCH, allDishes.length))}
            className="bg-yellow-400 text-red-900 px-7 py-3 rounded-full font-bold shadow-md hover:bg-yellow-500 transition-colors duration-300"
          >
            Show More
          </button>
        )}
        {visibleCount > CARDS_PER_BATCH && (
          <button
            onClick={() => setVisibleCount((prev) => Math.max(prev - CARDS_PER_BATCH, CARDS_PER_BATCH))}
            className="bg-red-600 text-white px-7 py-3 rounded-full font-bold shadow-md hover:bg-red-700 transition-colors duration-300"
          >
            Show Less
          </button>
        )}
      </div>
    </section>
  );
}
