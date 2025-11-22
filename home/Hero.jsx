"use client";

import React, { useRef } from "react";
import { ArrowRight, ArrowUpRight, ArrowDownRight } from "lucide-react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const Hero = () => {
  const imageSectionRef = useRef(null);

  // Smooth scroll reveal trigger
  const isInView = useInView(imageSectionRef, {
    once: true,
    margin: "-20% 0px -20% 0px",
    amount: 0.3,
  });

  return (
    <div id="home"className="min-h-screen bg-white relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#F5E6D3] to-transparent"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#F5E6D3] to-transparent"></div>
      </div>

      <div className="relative z-10">

        {/* TOP HERO SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-8xl mx-auto px-6 pt-32 pb-40 text-center"
        >
          {/* Small Title */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-gray-400"></div>
            <h2 className="text-gray-400 text-xl lg:text-3xl tracking-[0.3em] font-light">
              VIGYAPANWALA
            </h2>
            <div className="h-px w-16 bg-gray-400"></div>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-extrabold tracking-tight leading-tight mb-6">
            DIGITAL MARKETING AGENCY
          </h1>

          {/* Description */}
          <p className="text-gray-600 max-w-3xl mx-auto mb-4 text-sm md:text-base leading-relaxed">
            Digital agency crafting impactful, user-centric experiences with cutting-edge design and technology
          </p>
          <p className="text-gray-600 max-w-3xl mx-auto mb-12 text-sm md:text-base">
            for maximum success. Innovative digital agency crafting solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-row items-center justify-center gap-3 w-full px-4 my-2">

  {/* Get in Touch */}
  <button className="
    group flex items-center justify-center gap-2 whitespace-nowrap
    px-4 py-3 text-md rounded-xl
    sm:px-8 sm:py-3 sm:text-base sm:rounded-xl
    bg-black text-white hover:bg-gray-900 transition-all hover:scale-[1.03]
  ">
    <span className="font-medium">Get In Touch</span>
    <ArrowUpRight 
      size={18} 
      className="transition-transform duration-300 group-hover:scale-125" 
    />
  </button>

  {/* Learn More */}
  <button className="
    group flex items-center justify-center gap-2 whitespace-nowrap
    px-4 py-3 text-md rounded-xl
    sm:px-8 sm:py-3 sm:text-base sm:rounded-xl
    border-2 border-gray-800  transition-all hover:scale-[1.03]
  ">
    <span className="font-medium">Learn More</span>
    <ArrowDownRight 
      size={18} 
      className="transition-transform duration-300 group-hover:scale-125" 
    />
  </button>

</div>


        </motion.div>

        {/* SECOND SECTION - Smooth Reveal */}
        <motion.div
  ref={imageSectionRef}
  initial={{ opacity: 0, y: 100 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{
    duration: 1,
    ease: "easeOut"
  }}
  className="max-w-8xl w-[95%] mx-auto px-6 pb-16"
>
  <div className="flex flex-col md:flex-row items-start gap-12">

    {/* Left Text (Hidden on Mobile) */}
    <div className="w-full md:w-2/5 space-y-6 hidden md:block">
      <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight">
        Dominate Your Market.
        <br />We'll Show You How.
      </h2>

      <p className="text-gray-600 text-lg leading-relaxed">
        We provide custom-made advertisement solutions and premium
        services to give you a competitive edge in your category.
      </p>

      <button className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-md hover:bg-gray-900 transition-all">
        <span className="font-medium">Explore Services</span>
        <ArrowRight size={18} />
      </button>
    </div>

    {/* Right Image → Full width on mobile */}
    <div className="w-full md:w-3/5 relative rounded-2xl overflow-hidden shadow-2xl">
      <img
        src="/Hero.jpg"
        alt="Team collaboration"
        className="w-full h-[350px] md:h-[450px] object-cover"
      />

      {/* Badge */}
      <div className="absolute top-6 left-6 flex items-center gap-3 bg-white/90 backdrop-blur-sm px-6 py-4 rounded-lg shadow-lg">
        <Image
          src="/Logo.png"
          alt="Logo"
          height={140}
          width={140}
          className="h-8 w-auto"
        />
        <div className="text-black">
          <div className="text-xs font-light">BOOST</div>
          <div className="text-sm font-semibold">YOUR BRAND</div>
        </div>
      </div>

      {/* Stats */}
      <div className="absolute bottom-6 right-6 bg-black/90 backdrop-blur-sm px-6 py-4 rounded-lg shadow-lg">
        <div className="text-4xl font-bold text-white mb-1">365</div>
        <div className="text-xs text-white/80">Days of Success</div>
      </div>
    </div>

  </div>
</motion.div>

      </div>
    </div>
  );
};

export default Hero;
