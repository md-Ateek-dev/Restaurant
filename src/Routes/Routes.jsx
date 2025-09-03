
import React from 'react'
import { Routes as RouterRoutes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import AboutUs from '../Pages/AboutUs';
import Blogs from '../Pages/Blogs';
import ContactUs from '../Pages/ContactUs'; 
import Menu from '../Pages/Menu';
import Reviews from '../Pages/Reviews';
import Services from '../Pages/Services';
import Gallery from '../Pages/Gallery';
import SpecialDish from '../Pages/SpecialDish';
import FAQs from '../Pages/FAQs';

const Routes = () => {
  return (  
    <RouterRoutes>  
      <Route path="/" element={<Home/>}/>
      <Route path= "/about" element={<AboutUs/>}/>
      <Route path= "/blogs" element={<Blogs/>}/>
      <Route path= "/contact" element={<ContactUs/>}/>
      <Route path= "/menu" element={<Menu/>}/> 
      <Route path= "/reviews" element={<Reviews/>}/>
      <Route path ="/services" element={<Services/>}/>
      <Route path ="/gallery" element={<Gallery/>}/>
      <Route path ="/specialdish" element={<SpecialDish/>}/>
      <Route path ="/faqs" element={<FAQs/>}/>
    </RouterRoutes>
  );
}

export default Routes