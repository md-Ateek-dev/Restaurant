import React from "react";
import AppRoutes from "./Routes/Routes";
import { CartProvider } from "./Components/CartContextSection/CartContext";
import HeaderSection from "./Components/HeaderSection/HeaderSection";
import FooterSection from "./Components/FooterSection/FooterSection";
import CarouselSection from "./Components/CarouselSection/CarouselSection"
const App = () => {
  return (
    <CartProvider>
      <HeaderSection/>
      <CarouselSection/>
      <AppRoutes />
      <FooterSection/>
    </CartProvider>
  );
};

export default App;
