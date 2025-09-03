import React from 'react'
import AboutSection from '../Components/AboutSection/AboutSection';
import SpecialSection from '../Components/specialSection/specialSection'
import ReviewsSection from '../Components/ReviewsSection/ReviewsSection';
import GAllerySection from '../Components/GallerySection/GAllerySection';
import ServicesSection from '../Components/ServicesSection/ServicesSection';
import MenuSection from '../Components/MenuSection/MenuSection';
import FAQsSection from "../Components/FAQSection/FAQSection";
import BlogsSection from '../Components/BlogsSection/BlogsSection'; 
import ContactSection from '../Components/ContactSection/ContactSection'; 

const Home = () => {
  return (
    <>
      
      <AboutSection/>
      <SpecialSection/>
      <ReviewsSection/>
      <GAllerySection/>
      <ServicesSection/>  
      <MenuSection/>
       <FAQsSection/>
      <ContactSection/>
      <BlogsSection/>
       

    </>
  )
}

export default Home