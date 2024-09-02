"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Promotions() {
  return (
    <section className="bg-accent text-white py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Special Offer</h2>
        <p className="text-xl mb-8">Get 20% off on all new arrivals!</p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/shop" legacyBehavior>
            <a className="inline-block px-8 py-3 bg-white text-accent rounded-md hover:bg-gray-100 transition duration-300">
              Shop New Arrivals
            </a>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}