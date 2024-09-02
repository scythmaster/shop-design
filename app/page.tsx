"use client";
import React from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import FeaturedProducts from '@/components/FeaturedProducts';
import Categories from '@/components/Categories';
import Promotions from '@/components/Promotions';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Vibrant eCommerce - Home</title>
        <meta name="description" content="Discover vibrant style with our trendy products" />
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection />
        <FeaturedProducts />
        <Categories />
        <Promotions />
      </motion.div>
    </Layout>
  );
}