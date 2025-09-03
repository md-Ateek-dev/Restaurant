import React, { useState, useEffect, useCallback } from 'react';
import {Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react';
// import Banner from "../../assets/Images/Slider.png";
import Banner1 from '../../assets/Images/dessert.avif'
import Banner2 from '../../assets/Images/drink1.avif'
import Banner3 from '../../assets/Images/Slider2.avif'
import Banner4 from '../../assets/Images/slider4.avif'
import Banner5 from '../../assets/Images/slider6.avif'
import { Link } from "react-router-dom";   // ✅ Sahi

const RestaurantSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    {
      id: 1,
      image: Banner1,
      title: 'A Taste of Luxury',
      subtitle: 'Where Flavor Meets Perfection',
      description: 'Indulge in our carefully crafted dishes made with the finest ingredients and chef\'s passion.',
     
      
    },
    {
      id: 2,
      image: Banner2,
      title: 'Fresh Ingredients Daily',
      subtitle: 'Farm-to-Table Excellence',
      description: 'Discover the taste of freshness with our locally sourced ingredients prepared by expert chefs.',
      
    },
    {
      id: 3,
      image: Banner3,
      title: 'Elegant Atmosphere',
      subtitle: 'Perfect for Every Occasion',
      description: 'Experience dining in our sophisticated ambiance, ideal for romantic dinners and special celebrations.',
      
    },
    {
      id: 4,
      image: Banner4,
      title: 'Gourmet Creations',
      subtitle: 'Artistry on Every Plate',
      description: 'Savor our signature dishes that combine traditional techniques with modern culinary innovation.',
      
    },
    {
      id: 5,
      image: Banner5,
      title: 'Gourmet Creations',
      subtitle: 'Artistry on Every Plate',
      description: 'Savor our signature dishes that combine traditional techniques with modern culinary innovation.',
      
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    let interval;
    if (isAutoPlaying && !isTransitioning) {
      interval = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % slides.length);
      }, 7000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length, isTransitioning]);

  // Navigation functions
  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(prev => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 600);
  }, [isTransitioning, slides.length]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 600);
  }, [isTransitioning, slides.length]);

  const goToSlide = useCallback((index) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 600);
  }, [isTransitioning, currentSlide]);

  const toggleAutoPlay = () => {
    setIsAutoPlaying(prev => !prev);
  };

  return (
    <div className="relative w-full mt-16 h-auto md:h-[40rem] overflow-hidden shadow-2xl">
      {/* Slides Container */}
      <div className="relative w-full h-full min-h-[500px] md:min-h-0  md:h-[40rem]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${
              index === currentSlide
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-105'
            }`}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 w-full h-ful object-center bg-cover object-cover bg-no-repeat transition-transform duration-1000 ease-out"
              
            />
            {/* Image */}
          <img
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 w-full h-full object-center object-cover transition-transform duration-1000 ease-out"
            style={{
              transform:
                index === currentSlide ? "scale(1)" : "scale(1.1)",
            }}
          />
            {/* Dark Overlay */}
            <div className="absolute inset-0" />
            <div className="absolute inset-0" />
            
            {/* Content */}
            <div className="relative z-10 h-full flex items-center">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl">
                  {/* Title */}
                  <h1
                    className={`text-3xl font-sans sm:text-4xl md:text-5xl lg:text-6xl font-bold text-orange-700 mb-4 leading-tight transition-all duration-800 ${
                      index === currentSlide
                        ? 'transform translate-y-0 opacity-100'
                        : 'transform translate-y-8 opacity-0'
                    }`}
                    style={{ transitionDelay: index === currentSlide ? '200ms' : '0ms' }}
                  >
                    {slide.title}
                  </h1>
                  
                  {/* Subtitle */}
                  <h2
                    className={`text-lg sm:text-xl md:text-2xl lg:text-3xl text-orange-600 font-medium mb-6 transition-all duration-800 ${
                      index === currentSlide
                        ? 'transform translate-y-0 opacity-100'
                        : 'transform translate-y-8 opacity-0'
                    }`}
                    style={{ transitionDelay: index === currentSlide ? '400ms' : '0ms' }}
                  >
                    {slide.subtitle}
                  </h2>
                  
                  {/* Description */}
                  <p
                    className={`text-sm sm:text-base md:text-lg lg:text-xl font-medium sm:font-bold text-white mb-8 leading-relaxed max-w-xl transition-all duration-800 ${
                      index === currentSlide
                        ? 'transform translate-y-0 opacity-100'
                        : 'transform translate-y-8 opacity-0'
                    }`}
                    style={{ transitionDelay: index === currentSlide ? '600ms' : '0ms' }}
                  >
                    {slide.description}
                  </p>
                  
                  {/* CTA Button */}
                  {/* <div
                    className={`transition-all duration-800 ${
                      index === currentSlide
                        ? 'transform translate-y-0 opacity-100'
                        : 'transform translate-y-8 opacity-0'
                    }`}
                    style={{ transitionDelay: index === currentSlide ? '800ms' : '0ms' }}
                  >
                    <Link
                      to={slide.ctaLink}
                      className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base md:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-4 focus:ring-amber-300 focus:ring-opacity-50"
                    >
                      {slide.ctaText}
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        disabled={isTransitioning}
        className="absolute left-4 sm:left-6 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-30"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 text-black sm:w-6 sm:h-6" />
      </button>

      <button
        onClick={nextSlide}
        disabled={isTransitioning}
        className="absolute right-4 sm:right-6 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-30"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 text-black sm:h-6" />
      </button>

      {/* Dot Indicators */}
      {/* <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-2 sm:space-x-3 bg-black bg-opacity-30 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 ${
                index === currentSlide
                  ? 'bg-amber-500 w-6 sm:w-8'
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div> */}

      {/* Auto-play Control */}
      <button
        onClick={toggleAutoPlay}
        className="absolute top-4 sm:top-6 right-4 sm:right-6 z-20 bg-black bg-opacity-30 hover:bg-opacity-50 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-30"
        aria-label={isAutoPlaying ? 'Pause slideshow' : 'Play slideshow'}
      >
        {isAutoPlaying ? (
          <Pause className="w-4 h-4 sm:w-5 sm:h-5" />
        ) : (
          <Play className="w-4 h-4 sm:w-5 sm:h-5 ml-0.5" />
        )}
      </button>

      {/* Progress Bar */}
      {/* <div className="absolute bottom-0 left-0 w-full h-1 bg-black bg-opacity-30 z-10">
        <div
          className={`h-full bg-amber-500 transition-all ease-linear ${
            isAutoPlaying && !isTransitioning ? 'animate-progress' : 'w-0'
          }`}
          style={{
            animationDuration: '5000ms',
            animationIterationCount: 'infinite'
          }}
        />
      </div> */}

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        
        .animate-progress {
          animation: progress 5s linear infinite;
        }
        
        /* Ensure proper mobile touch targets */
        @media (max-width: 640px) {
          button {
            min-height: 44px;
            min-width: 44px;
          }
        }
        
        /* Optimize for mobile performance */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
        
        /* Custom scrollbar for mobile */
        .container {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        
        .container::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default RestaurantSlider;