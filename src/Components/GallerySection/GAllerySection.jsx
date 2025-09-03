import React, { useState } from 'react';
import img1 from '../../assets/Images/drink1.avif';
import img2 from '../../assets/Images/Drink2.avif';
import img3 from '../../assets/Images/dessert.avif';
import img4 from '../../assets/Images/Dessert2.avif';
import img5 from '../../assets/Images/slider6.avif';
import img6 from '../../assets/Images/Slider2.avif';
import img7 from '../../assets/Images/slider4.avif';
import img8 from '../../assets/Images/slider6.avif';

const galleryImages = [
  { src: img1, alt: 'Hospital Entrance' },
  { src: img2, alt: 'Modern Patient Room' },
  { src: img3, alt: 'Advanced Operation Theater' },
  { src: img4, alt: 'Pediatric Ward' },
  { src: img5, alt: 'Friendly Nursing Staff' },
  { src: img6, alt: 'Waiting Area' },
  { src: img7, alt: 'Diagnostic Imaging Center' },
  { src: img8, alt: 'Diagnostic Imaging Center' },
];

const INITIAL_VISIBLE = 4;
const LOAD_MORE = 4;

const GallerySection = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + LOAD_MORE, galleryImages.length));
  };

  const handleShowLess = () => {
    setVisibleCount((prev) => Math.max(prev - LOAD_MORE, INITIAL_VISIBLE));
  };

  return (
    <section id="gallery" className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
<h2 className="text-2xl px-3 text-center sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
            Some{" "}
            <span className="bg-black text-orange-600 bg-clip-text ">
              Special
            </span>
            <br className="sm:hidden" />
            <span className="hidden sm:inline"> </span>Moments
          </h2>
          <div className="w-16 sm:w-20 md:w-24 lg:w-32 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-600 mx-auto mb-4 sm:mb-6 rounded-full shadow-sm"></div>
        <p data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" className="text-lg text-black text-center mb-12 max-w-2xl mx-auto">
          Explore our restaurant, modern Decoration rooms, and the compassionate environment we provide at Spice Garden.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {galleryImages.slice(0, visibleCount).map((img, idx) => (
            <div data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out"
             key={idx} className="overflow-hidden rounded-2xl shadow hover:shadow-lg shadow-blue-100 transition group">
              <img
                src={img.src}
                alt={img.alt}
                className="w-screen h-60 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <div data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" className="flex justify-center mt-10 gap-4">
          {visibleCount < galleryImages.length && (
            <button
              onClick={handleShowMore}
              className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-3 rounded-full font-semibold shadow hover:from-blue-600 hover:to-blue-800 transition-all duration-200 hover:scale-105 cursor-pointer"
            >
              Show More
            </button>
          )}
          {visibleCount > INITIAL_VISIBLE && (
            <button
              onClick={handleShowLess}
              className="bg-gradient-to-r from-gray-300 to-blue-100 text-blue-800 px-8 py-3 rounded-full font-semibold shadow hover:from-gray-400 hover:to-blue-200 transition-all duration-200 hover:scale-105 cursor-pointer"
            >
              Show Less
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
