"use client";

import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Featured from "./sections/Featured";
import Products from "./sections/Products";
import About from "./sections/About";
import Newsletter from "./sections/Newsletter";
import Footer from "./sections/Footer";
import Loader from "./components/Loader";
import CustomCursor from "./components/CustomCursor";

export default function Home() {
  return (
    <main className="bg-black text-white overflow-x-hidden">
      <Loader />
     <CustomCursor />
      <Navbar />
      <Hero />
      <Featured />
      <Products />
      <About />
      <Newsletter />
      <Footer />
    </main>
  );
}