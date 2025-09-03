import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import Aysha from '../../assets/Images/aysha.avif';
import Gaurav from '../../assets/Images/gaurav.avif';
import Sachin from '../../assets/Images/Sachin.avif';
import David from '../../assets/Images/devid.avif';
import Sophia from '../../assets/Images/sophia.avif';
import Sanjeev from '../../assets/Images/sanjeev.avif';
const CustomerReviews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const reviews = [
    {
      id: 1,
      name: "Ayasha",
      location: "Lucknow, India",
      rating: 5,
      text: "Absolutely incredible dining experience! The pasta was perfectly al dente and the service was impeccable. Will definitely be returning soon.",
      image: Aysha,
    },
    {
      id: 2,
      name: "Gaurav",
      role: "Food Blogger",
      rating: 5,
      text: "Best Italian restaurant in the city! The atmosphere is cozy and romantic, perfect for date nights. The tiramisu is to die for!",
      image: Gaurav,
    },
    {
      id: 3,
      name: "Sachin",
      location: "Ahamdabaad, India",
      rating: 5,
      text: "Farm-to-table freshness at its finest. Every ingredient tastes like it was picked this morning. The chef's attention to detail is remarkable.",
      image: Sachin,
    },
    {
      id: 4,
      name: "David",
      role: "Local Resident",
      rating: 4,
      text: "Great ambiance and fantastic wine selection. The seafood risotto was exceptional. Staff was knowledgeable and friendly throughout our meal.",
      image: David,
    },
    {
      id: 5,
      name: "Sophia",
      location: "Barelly India",
      rating: 5,
      text: "Celebrating our anniversary here was perfect! The chef's special was outstanding and the dessert course was pure artistry on a plate.",
      image: Sophia,
    },
    {
      id: 6,
      name: "Sanjeev",
      role: "Business Executive",
      rating: 5,
      text: "Hosted a business dinner here and it exceeded all expectations. Professional service, exquisite food, and perfect ambiance for important conversations.",
      image: Sanjeev,
      featured: true
    }
  ];

  // Get reviews per slide based on screen size
  const getReviewsPerSlide = () => {
    if (windowWidth < 640) return 1; // mobile
    if (windowWidth < 1024) return 2; // tablet
    return 3; // desktop
  };

  const reviewsPerSlide = getReviewsPerSlide();
  const totalSlides = Math.ceil(reviews.length / reviewsPerSlide);

  // Window resize handler
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 2000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  // Reset slide when layout changes
  useEffect(() => {
    if (currentSlide >= totalSlides) {
      setCurrentSlide(0);
    }
  }, [totalSlides, currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-3 h-3 sm:w-4 sm:h-4 ${
          index < rating ? 'fill-amber-400 text-amber-400' : 'text-gray-300'
        } transition-colors duration-200`}
      />
    ));
  };

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white min-h-screen flex items-center">
      <div className="max-w-7xl bg-white mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full mb-4 sm:mb-6">
            <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-amber-600" />
          </div>
          
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight px-2">
            Our{" "}
            <span className="bg-black text-orange-600 bg-clip-text ">
              Customers
            </span>
            <br className="sm:hidden" />
            <span className="hidden sm:inline"> </span> Say
          </h2>
          <div className="w-16 sm:w-20 md:w-24 lg:w-32 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-600 mx-auto mb-4 sm:mb-6 rounded-full shadow-sm"></div>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white max-w-3xl mx-auto leading-relaxed px-4">
            Discover why our guests keep coming back for unforgettable culinary experiences
          </p>
        </div>

        {/* Reviews Carousel Container */}
        <div className="relative">
          <div 
            className="overflow-hidden rounded-xl sm:rounded-2xl"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex bg-white h-96 transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }, (_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className={`grid gap-4 sm:gap-6 md:gap-8 px-2 sm:px-4 ${
                    reviewsPerSlide === 1 ? 'grid-cols-1 max-w-md mx-auto' :
                    reviewsPerSlide === 2 ? 'grid-cols-2' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                  }`}>
                    {reviews.slice(slideIndex * reviewsPerSlide, slideIndex * reviewsPerSlide + reviewsPerSlide).map((review, index) => (
                      <div
                        key={review.id}
                        className={`group relative ring-1 bg-amber-50 ring-gray-200 mt-12 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 opacity-0 animate-slide-up border border-gray-100 ${
                          review.featured 
                            ? 'ring-1 shadow-amber-200/50' 
                            : 'hover:ring-1 hover:ring-gray-300'
                        }`}
                        style={{ animationDelay: `${index * 200}ms` }}
                      >
                        {/* Background Decoration */}
                        <div className="absolute -top-4 -right-4 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-red-500/200 to-orange-500/200 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        {review.featured && (
                          <div className="absolute -top-3 -right-1 bg-green-500 text-white px-2 py-1 sm:px-3 sm:py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center space-x-1">
                            <Star className="w-3 h-3 text-yellow-500 fill-current" />
                            <span>Featured</span>
                          </div>
                        )}
                        
                        {/* Quote Icon */}
                        <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500 absolute top-4 right-4 transform rotate-12" />
                        
                        {/* Customer Info */}
                        <div className="flex items-center mb-4 sm:mb-6 relative z-10">
                          <div className="relative group/avatar">
                            <img
                              src={review.image}
                              alt={review.name}
                              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-cover mr-3 sm:mr-4 ring-3 ring-white shadow-lg group-hover/avatar:ring-amber-200 transition-all duration-300"
                            />
                            <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full border-2 border-white shadow-sm"></div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg truncate group-hover:text-amber-700 transition-colors duration-300">
                              {review.name}
                            </h3>
                            <p className="text-black text-xs sm:text-sm font-medium truncate">
                              {review.role || review.location}
                            </p>
                          </div>
                        </div>
                        
                        {/* Star Rating */}
                        <div className="flex items-center mb-4 sm:mb-6">
                          <div className="flex mr-2">
                            {renderStars(review.rating)}
                          </div>
                          <span className="text-xs sm:text-sm text-amber-600 font-bold">
                            {review.rating}.0
                          </span>
                        </div>
                        
                        {/* Review Text */}
                        <div className="relative">
                          <p className="text-black leading-relaxed text-xs sm:text-sm md:text-base font-medium relative z-10 line-clamp-4">
                            "{review.text}"
                          </p>
                        </div>

                        {/* Glassmorphism overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl sm:rounded-2xl"></div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows - Hidden on mobile, visible on tablet+ */}
          <button
            onClick={prevSlide}
            className="hidden sm:flex absolute left-2 md:left-4 lg:-left-20 top-1/2 transform -translate-y-1/2 items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white hover:scale-110 group border border-gray-100 z-20"
            aria-label="Previous reviews"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-600 group-hover:text-amber-600 transition-colors duration-300" />
          </button>
          
          <button
            onClick={nextSlide}
            className="hidden sm:flex absolute right-2 md:right-4 lg:-right-20 top-1/2 transform -translate-y-1/2 items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white hover:scale-110 group border border-gray-100 z-20"
            aria-label="Next reviews"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-600 group-hover:text-amber-600 transition-colors duration-300" />
          </button>
        </div>

        {/* Bottom Navigation */}
        <div className="flex flex-col items-center mt-6 sm:mt-8 md:mt-12 space-y-4 sm:space-y-6">
         

         {/* Mobile Navigation Arrows (just below carousel, much closer) */}
<div className="flex sm:hidden items-center justify-center space-x-6 mt-4">
  <button
    onClick={prevSlide}
    className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-lg active:scale-95 transition-all duration-200 border border-gray-100"
    aria-label="Previous reviews"
  >
    <ChevronLeft className="w-5 h-5 text-gray-600" />
  </button>
  <div className="flex items-center space-x-2 px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full shadow-sm border border-gray-100">
    <span className="text-xs font-medium text-gray-600">
      {currentSlide + 1} / {totalSlides}
    </span>
  </div>
  <button
    onClick={nextSlide}
    className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-lg active:scale-95 transition-all duration-200 border border-gray-100"
    aria-label="Next reviews"
  >
    <ChevronRight className="w-5 h-5 text-gray-600" />
  </button>
</div>

        </div>
      </div>

      {/* Enhanced Custom Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          0% { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          100% { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes slideUp {
          0% { 
            opacity: 0; 
            transform: translateY(40px) scale(0.95); 
          }
          100% { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
          }
        }
        
        @keyframes shimmer {
          0% { 
            background-position: -200% 0; 
          }
          100% { 
            background-position: 200% 0; 
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 1.2s ease-out;
        }
        
        .animate-slide-up {
          animation: slideUp 1s ease-out forwards;
          opacity: 0;
        }

        /* Line clamp for consistent text height */
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Custom backdrop blur for better browser support */
        .backdrop-blur-sm {
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Enhanced focus states for accessibility */
        button:focus-visible {
          outline: 2px solid #f59e0b;
          outline-offset: 2px;
          box-shadow: 0 0 0 4px rgba(245, 158, 11, 0.1);
        }

        /* Custom selection colors */
        ::selection {
          background-color: rgba(245, 158, 11, 0.3);
          color: #1f2937;
        }

        /* Responsive image optimization */
        img {
          image-rendering: -webkit-optimize-contrast;
          image-rendering: crisp-edges;
        }

        /* Enhanced mobile touch targets */
        @media (max-width: 639px) {
          button {
            min-height: 44px;
            min-width: 44px;
          }
        }

        /* Smooth animations for reduced motion preference */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }

        /* High contrast mode support */
        @media (prefers-contrast: high) {
          .bg-gradient-to-br {
            background: white;
          }
          
          .text-gray-600 {
            color: black;
          }
        }
      `}</style>
    </section>
  );
};

export default CustomerReviews;