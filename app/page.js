import Testimonials from "../home/Testimonials";

import Footer from "../home/Footer";

import Hero from "../home/Hero";

import AboutUs from "../home/AboutUs";

import Navbar from "../home/Navbar";

import Services from "../home/Services";

import WhyChooseUs from "../home/WhyChooseUs";


export default function Home() {
  return (
   <>
   <Navbar/>
   <Hero/>
   <AboutUs/>
   <Services/>
   <WhyChooseUs/>
   <Testimonials/>
   <Footer/>
   </>
  );
}
