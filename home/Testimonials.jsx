"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function Testimonials() {
  const sliderRef = useRef(null);
  const [index, setIndex] = useState(0);

  const testimonials = [
    {
      name: "Patrick Nuwado",
      role: "UX Manager at Superteams",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      quote:
        "The lovely team at DesignMia has provided our startup with significant leverage. Their work is exceptionally professional, and Adrian is always attentive to our needs, taking the time to understand our briefs and offer valuable direction. Additionally, their turnaround times are impressively fast!",
    },
    {
      name: "Pia Petit",
      role: "Product Designer at Lightdash",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      video: true,
      videoThumbnail:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop",
    },
    {
      name: "Rob Arjat",
      role: "CEO of Kingston Advisors",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
      quote:
        "DesignMia has greatly exceeded our expectations. The communication is always excellent, the turnaround is extremely quick, and the designs are fresh, innovative, and spot on!",
    },
    {
      name: "Dami Tunde",
      role: "CEO of Markia",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      quote:
        "The lovely team has provided our startup with significant leverage. Their work is exceptionally professional, and they're always attentive to our needs. We value our collaboration!",
    },
    {
      name: "Sarah Mitchell",
      role: "Founder at TechFlow",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop",
      quote:
        "Working with DesignMia transformed our brand identity. Their attention to detail and creative vision brought our ideas to life in ways we never imagined. Absolutely top-tier service!",
    },
    {
      name: "Marcus Chen",
      role: "Creative Director at Pulse Media",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop",
      quote:
        "From concept to execution, DesignMia delivers excellence. Their ability to understand our vision and translate it into stunning designs is unmatched. Highly recommend!",
    },
    {
      name: "Elena Rodriguez",
      role: "VP of Marketing at Nexus",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop",
      quote:
        "The team's responsiveness and creative solutions have been invaluable to our campaigns. They consistently exceed expectations and deliver outstanding results.",
    },
    {
      name: "James Foster",
      role: "CEO of Innovate Labs",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
      quote:
        "DesignMia is more than a design agency—they're true partners in our success. Their strategic thinking and beautiful execution have elevated our entire brand.",
    },
  ];

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // Slide to card when index changes
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: index * 325,
        behavior: "smooth",
      });
    }
  }, [index]);

  return (
    <section className="bg-white/90 py-20 px-6">
      <div className="max-w-8xl w-[90%] mx-auto">

        {/* HEADER */}
        <div className="mb-16">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">TESTIMONIALS</p>
          <h1 className="text-5xl md:text-6xl font-light text-gray-900 leading-tight">
            Don't take our word for it! <br /> Hear it from our partners.
          </h1>
        </div>

        {/* SLIDER */}
        <div
          ref={sliderRef}
          className="flex gap-5 overflow-x-hidden snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: "none" }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="min-w-[320px] max-w-[320px] h-[450px] bg-white rounded-2xl shadow-sm snap-start overflow-hidden relative p-8 flex flex-col border border-gray-200"
            >
              {/* ---- VIDEO CARD ---- */}
              {t.video ? (
                <>
                  <img
                    src={t.videoThumbnail}
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                  <img
                    src={t.image}
                    className="absolute top-5 left-5 w-12 h-12 rounded-full border-2 border-white object-cover"
                  />

                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>

                  <div className="absolute bottom-6 left-6">
                    <p className="text-white text-2xl mb-1" style={{ fontFamily: "'Brush Script MT', cursive" }}>
                      {t.name}
                    </p>
                    <p className="text-white/90 text-xs mt-1">{t.role}</p>
                  </div>
                </>
              ) : (
                /* ---- TEXT CARD ---- */
                <>
                  <img
                    src={t.image}
                    className="w-14 h-14 rounded-full mb-5 object-cover"
                  />

                  <p className="text-gray-600 text-sm leading-relaxed mb-auto">
                    "{t.quote}"
                  </p>

                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <p
                      className="text-2xl text-gray-900 mb-1"
                      style={{ fontFamily: "'Brush Script MT', cursive" }}
                    >
                      {t.name}
                    </p>
                    <p className="text-gray-400 text-xs">{t.role}</p>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}