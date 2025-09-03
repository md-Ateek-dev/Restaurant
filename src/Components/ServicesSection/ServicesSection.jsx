import React, { useState, useEffect, useRef } from 'react';
import { UtensilsCrossed, Truck, Soup, ChevronLeft, ChevronRight } from 'lucide-react';
import { TbHours24 } from "react-icons/tb";
import { FcCustomerSupport } from "react-icons/fc";


// Add your service images if needed (optional)
// import Service1Img from '../../assets/Images/service1.avif';
// import Service2Img from '../../assets/Images/service2.avif';
// ...etc

const services = [
  {
    id: 1,
    icon: UtensilsCrossed,
    title: "Fine Dining",
    desc: "Savor gourmet dishes in a stylish atmosphere, crafted for memorable evenings and elegant celebrations.",
    // image: Service1Img,
  },
  {
    id: 2,
    icon: Truck,
    title: "Fast Delivery",
    desc: "Enjoy fresh meals at your doorstep. Speedy, hygienic, and always delicious—your cravings delivered, fast.",
    // image: Service2Img,
  },
  {
    id: 3,
    icon: Soup,
    title: "Catering Service",
    desc: "Make every event unforgettable with our custom catering—fine flavors, beautiful presentation, seamless service.",
    // image: Service3Img,
  },
  {
    id: 4,
    icon: TbHours24,
    title: "24X7 Support",
    desc: "Savor gourmet dishes in a stylish atmosphere, crafted for memorable evenings and elegant celebrations.",
    // image: Service1Img,
  },
  {
    id: 5,
    icon: FcCustomerSupport,
    title: "Customar Care",
    desc: "Enjoy fresh meals at your doorstep. Speedy, hygienic, and always delicious—your cravings delivered, fast.",
    // image: Service2Img,
  },
  {
    id: 6,
    icon: Soup,
    title: "Catering Service",
    desc: "Make every event unforgettable with our custom catering—fine flavors, beautiful presentation, seamless service.",
    // image: Service3Img,
  },
];

const PremiumServices = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Responsive number of cards per slide
  const getServicesPerSlide = () => {
    if (windowWidth < 640) return 1;    // mobile
    if (windowWidth < 1024) return 2;   // tablet
    return 3;                           // desktop
  };

  const servicesPerSlide = getServicesPerSlide();
  const totalSlides = Math.ceil(services.length / servicesPerSlide);

  // Window resize handler
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % totalSlides);
    }, 2000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  // Reset slide index on layout change
  useEffect(() => {
    if (currentSlide >= totalSlides) setCurrentSlide(0);
  }, [servicesPerSlide, totalSlides, currentSlide]);

  // Arrow navigation
  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % totalSlides);
    setIsAutoPlaying(false);
  };
  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + totalSlides) % totalSlides);
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
    if (distance > 50) nextSlide();
    if (distance < -50) prevSlide();
  };

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white min-h-[500px] flex items-center">
      <div className="max-w-7xl bg-white mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight px-2">
            Our <span className="bg-black text-orange-600 bg-clip-text">Premium</span>
            <br className="sm:hidden" />                         
            <span className="hidden sm:inline"> </span> Services
          </h2>
          <div className="w-16 sm:w-20 md:w-24 lg:w-32 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-600 mx-auto mb-4 sm:mb-6 rounded-full shadow-sm"></div>
          <p className="text-xl sm:text-base md:text-lg lg:text-xl text-black max-w-3xl mx-auto leading-relaxed px-4">
            Delight in every detail — from exquisite dining to quick delivery and professional catering tailored to your needs.
          </p>
        </div>
        {/* Carousel Container */}
        <div className="relative">
          <div
            className="overflow-hidden rounded-xl sm:rounded-2xl"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex bg-white h-72 sm:h-80 transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }, (_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className={`grid gap-6 sm:gap-8 md:gap-10 px-2 sm:px-4 ${
                    servicesPerSlide === 1 ? 'grid-cols-1 max-w-md mx-auto' :
                    servicesPerSlide === 2 ? 'grid-cols-2' :
                    'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                  }`}>
                    {services.slice(slideIndex * servicesPerSlide, slideIndex * servicesPerSlide + servicesPerSlide).map((service, index) => (
                      <div
                        key={service.id}
                        className="group relative ring-1 bg-red-800 bg-opacity-80 mt-12 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 opacity-0 animate-slide-up border border-gray-100"
                        style={{ animationDelay: `${index * 200}ms` }}
                      >
                        <div className="absolute -top-4 -right-4 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-red-500/200 to-orange-500/200 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="flex items-center mb-4 sm:mb-6">
                          <div className="relative">
                            {/* <img src={service.image} alt="" className="w-12 h-12 rounded-full object-cover mr-3" /> */}
                            <service.icon className="w-12 h-12 text-white bg-red-500 rounded-full p-3 drop-shadow-xl" />
                          </div>
                          <div className="flex-1 ml-4">
                            <h3 className="font-bold text-white text-lg md:text-xl">{service.title}</h3>
                          </div>
                        </div>
                        <p className="text-red-200 text-sm sm:text-base md:text-lg leading-relaxed font-light relative z-10">
                          {service.desc}
                        </p>
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl sm:rounded-2xl"></div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Navigation Arrows (Tablet and up) */}
          <button
            onClick={prevSlide}
            className="hidden sm:flex absolute left-2 md:left-4 lg:-left-20 top-1/2 transform -translate-y-1/2 items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white hover:scale-110 group border border-gray-100 z-20"
            aria-label="Previous services"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-600 group-hover:text-orange-600 transition-colors duration-300" />
          </button>
          <button
            onClick={nextSlide}
            className="hidden sm:flex absolute right-2 md:right-4 lg:-right-20 top-1/2 transform -translate-y-1/2 items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white hover:scale-110 group border border-gray-100 z-20"
            aria-label="Next services"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-600 group-hover:text-orange-600 transition-colors duration-300" />
          </button>
        </div>
        {/* Mobile Navigation */}
        <div className="flex flex-col items-center mt-6 sm:mt-8 md:mt-12 space-y-4 sm:space-y-6">
          <div className="flex sm:hidden items-center space-x-6">
            <button
              onClick={prevSlide}
              className="flex items-center mb-20 justify-center w-10 h-10 rounded-full bg-white shadow-lg active:scale-95 transition-all duration-200 border border-gray-100"
              aria-label="Previous services"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <div className="flex items-center mb-20 space-x-2 px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full shadow-sm border border-gray-100">
              <span className="text-xs font-medium text-gray-600">
                {currentSlide + 1} / {totalSlides}
              </span>
            </div>
            <button
              onClick={nextSlide}
              className="flex mb-20 items-center justify-center w-10 h-10 rounded-full bg-white shadow-lg active:scale-95 transition-all duration-200 border border-gray-100"
              aria-label="Next services"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
      {/* Styles */}
      <style jsx>{`
        @keyframes slideUp {
          0% { opacity: 0; transform: translateY(40px) scale(0.95); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-slide-up {
          animation: slideUp 1s ease-out forwards;
          opacity: 0;
        }
        .backdrop-blur-sm {
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        @media (max-width: 639px) {
          button {
            min-height: 44px;
            min-width: 44px;
          }
        }
      `}</style>
    </section>
  );
};

export default PremiumServices;
