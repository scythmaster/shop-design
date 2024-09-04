"use client";

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <Layout>
      <Head>
        <title>Vibrant eCommerce - About Us</title>
        <meta name="description" content="Learn more about Vibrant eCommerce and our mission to bring you the best products." />
      </Head>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-16"
      >
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p className="text-lg mb-6">
          At Vibrant eCommerce, we are dedicated to bringing you the most vibrant and stylish products.
          Our mission is to provide high-quality items that not only look great but also inspire
          confidence and joy. Whether you&apos;re shopping for yourself or looking for the perfect gift, 
          we have something for everyone.
        </p>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-8"
        >
          <Image 
            src="/images/team.jpg" 
            alt="Our Team" 
            className="rounded-lg shadow-lg w-full" 
            width={1200} 
            height={800} 
          />
        </motion.div>

        <p className="text-lg mb-4">
          Our team is passionate about curating a collection of products that reflect the latest trends 
          while maintaining a timeless appeal. We believe in the power of great design and are committed 
          to offering items that are not only beautiful but also functional.
        </p>
        <p className="text-lg">
          Thank you for choosing Vibrant eCommerce. We look forward to serving you and helping you discover 
          the vibrant style that suits you best.
        </p>
      </motion.section>
    </Layout>
  );
}
