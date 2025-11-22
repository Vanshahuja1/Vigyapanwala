"use client";
import React from "react";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const container = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.12, when: "beforeChildren" },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div id="whyUs"className="min-h-screen bg-[#fafafa] p-4 md:p-10">
      <motion.div
        className="max-w-8xl mx-auto border border-gray-200 bg-white rounded-3xl p-10 shadow-sm"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >

        {/* Header */}
        <motion.div className="flex justify-between items-start mb-16" variants={item}>
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-3">
              Why Choose Us
            </h1>

            <p className="text-gray-600 text-lg max-w-2xl leading-relaxed">
              Your Partner in Market Domination
            </p>

            <p className="hidden sm:block text-gray-500 max-w-2xl mt-2 leading-relaxed">
              We don’t just work for you — we work with you to build an unbeatable brand.
              From strategy to execution, we combine data, design, and disciplined execution
              to deliver outcomes you can measure and momentum you can feel.
            </p>
          </div>

          <button className="hidden sm:block px-6 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100 transition flex items-center gap-1">
            Show More →
          </button>
        </motion.div>

        {/* Feature cards */}
        <div className="space-y-20">

          {/* Feature 1 */}
          <motion.div className="grid md:grid-cols-2 gap-10 items-center" variants={item}>
            <div>
              <span className="text-xs font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                Strategic Excellence
              </span>

              <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mt-4 mb-2">
                Monopoly Guarantee
              </h3>

              <p className="text-gray-600 leading-relaxed max-w-lg">
                We don’t just run ads — we engineer strategies to make you the undisputed #1 in your niche.
                Our frameworks align market insights, creative storytelling, and performance media to
                secure durable competitive advantage, not short-lived spikes.
              </p>
            </div>

            <motion.div className="relative rounded-2xl overflow-hidden border border-gray-200" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.99 }} transition={{ type: "spring", stiffness: 200, damping: 20 }}>
              <motion.img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=60"
                alt="Strategy meeting"
                className="w-full h-72 object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
              <div className="absolute top-4 left-4 bg-white border border-gray-200 shadow-sm px-4 py-1.5 rounded-lg">
                <span className="text-sm font-semibold text-gray-900">+50% Traffic</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Feature 2 */}
          <motion.div className="grid md:grid-cols-2 gap-10 items-center" variants={item}>
            <div className="md:order-2">
              <span className="text-xs font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                Complete Solutions
              </span>

              <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mt-4 mb-2">
                All-in-One Partner
              </h3>

              <p className="text-gray-600 leading-relaxed max-w-lg">
                From hoardings to AI chatbots — we manage every piece of your brand growth.
                One team, one roadmap, one source of truth: integrated execution that reduces cost,
                accelerates speed-to-market, and keeps every channel on-message.
              </p>
            </div>

            <motion.div className="relative md:order-1 rounded-2xl overflow-hidden border border-gray-200" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.99 }} transition={{ type: "spring", stiffness: 200, damping: 20 }}>
              <motion.img
                src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1200&q=60"
                alt="Team collaboration"
                className="w-full h-72 object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
              <div className="absolute bottom-4 left-4 bg-white border border-gray-200 shadow-sm px-4 py-1.5 rounded-lg">
                <span className="text-sm font-semibold text-gray-900">360° Solutions</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Feature 3 */}
          <motion.div className="grid md:grid-cols-2 gap-10 items-center" variants={item}>
            <div>
              <span className="text-xs font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                Tailored Approach
              </span>

              <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mt-4 mb-2">
                Custom-Made Strategies
              </h3>

              <p className="text-gray-600 leading-relaxed max-w-lg">
                No copy-paste plans — your strategy is built 100% uniquely for your business.
                We tailor tactics to your audience, geography, budget, and goals, then iterate fast
                with feedback loops that turn learnings into lift.
              </p>
            </div>

            <motion.div className="relative rounded-2xl overflow-hidden border border-gray-200" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.99 }} transition={{ type: "spring", stiffness: 200, damping: 20 }}>
              <motion.img
                src="https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=1200&q=60"
                alt="Custom marketing plan"
                className="w-full h-72 object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
              <div className="absolute top-4 right-4 bg-white border border-gray-200 shadow-sm px-4 py-1.5 rounded-lg">
                <span className="text-sm font-semibold text-gray-900">100% Custom</span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
}
