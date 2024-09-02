"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="bg-secondary py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="container mx-auto px-4 text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Discover Vibrant Style</h1>
        <p className="text-xl mb-8">Explore our collection of trendy and colorful products</p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/shop" legacyBehavior>
            <a className="inline-block px-8 py-3 bg-accent text-white rounded-md hover:bg-accent-dark transition duration-300">
              Shop Now
            </a>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}