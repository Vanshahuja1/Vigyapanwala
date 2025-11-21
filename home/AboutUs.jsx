"use client";
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';

function Counter({ value, duration = 2, delay = 0 }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        const controls = animate(motionValue, value, { duration, ease: 'easeOut' });
        return controls.stop;
      }, delay * 1000);
      
      return () => clearTimeout(timer);
    }
  }, [isInView, value, duration, delay, motionValue]);

  return (
    <motion.span ref={ref}>
      {rounded}
    </motion.span>
  );
}

export default function AboutUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const stats = [
    { percentage: 90, label: 'Client Retention', delay: 0 },
    { percentage: 56, label: 'Budget Growth', delay: 0.6 },
    { percentage: 82, label: 'ROI', delay: 1.2 },
    { percentage: 79, label: 'Service Demand', delay: 1.8 },
    { percentage: 65, label: 'Agency Growth', delay: 2.4 }
  ];

  return (
    <div ref={ref} className="min-h-screen bg-white/90 px-8 py-16 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left side - Title and Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-8 text-gray-900">
              About us
            </h1>
          </motion.div>

          {/* Right side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-gray-700 leading-relaxed">
              At <span className="font-semibold">VIGYPANWALA</span>, we specialize in innovative digital marketing strategies that drive 
              results. Our team is dedicated to helping businesses grow and succeed online.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With tailored solutions and a focus on measurable outcomes, we empower 
              brands to connect with their audience and achieve their goals in the digital 
              landscape.
            </p>
          </motion.div>
        </div>

        {/* Stats Section - Single Row, No Scroll, Fits in Viewport */}
        <div className="mt-24">
          <div className="grid grid-cols-5 gap-3">
            {stats.map((stat, index) => (
              <div key={index}>

                {/* Each Stat Block */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, ease: "easeOut", delay: stat.delay }}
                  className="flex flex-col items-center"
                >

                  {/* Graph Bar Container */}
                  <div className="w-full h-40 md:h-64 mb-2 relative flex items-end ">

                    {/* Floating Percentage (moves upward with bar) */}
                    <motion.div
                      initial={{ bottom: 0, opacity: 0 }}
                      animate={isInView ? { bottom: `${stat.percentage}%`, opacity: 1 } : {}}
                      transition={{
                        duration: 1.2,
                        ease: "easeOut",
                        delay: stat.delay + 0.2
                      }}
                      className="absolute left-1/2 -translate-x-1/2 text-xs md:text-sm font-medium text-gray-900"
                    >
                      {stat.percentage}%
                    </motion.div>

                    {/* Growing Foreground Bar */}
                    <motion.div
                      initial={{ height: 0 }}
                      animate={isInView ? { height: `${stat.percentage}%` } : {}}
                      transition={{
                        duration: 1.2,
                        ease: "easeOut",
                        delay: stat.delay + 0.2
                      }}
                      className="w-full bg-gray-100  border-t-black border-t-3"
                    />
                  </div>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: stat.delay + 0.5 }}
                    className="text-xs md:text-sm text-center text-gray-600 mt-1"
                  >
                    {stat.label}
                  </motion.p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}