"use client";

import React, { useState } from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';

export default function LoginPage() {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState<string | null>(null);
//   const [password, setPassword] = useState('');
  const phonePattern = /^[+]?[0-9]{10,15}$/;

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Remove any non-numeric characters
    const numericValue = value.replace(/\D/g, '');
    setPhone(numericValue);
  };


  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phonePattern.test(phone)) {
        setError('Invalid phone number format. Please enter a valid number.');
        return;
      }
      setError(null);
    console.log(phone);
  };

  return (
    <Layout>
      <Head>
        <title>Vibrant eCommerce - Login</title>
        <meta name="description" content="Log in to your Vibrant eCommerce account to access your personalized experience." />
      </Head>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-16"
      >
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-8">
            <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-8 mb-6">
            <h1 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-400 to-orange-500 ">
                Welcome to VibrantShop
            </h1>
            </div>          
          <form onSubmit={handleLogin}>
        <div>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={handlePhoneChange}
            placeholder="Enter your phone number"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary mb-6"
            required
          />
        </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary-dark transition duration-300"
            >Log In
            </motion.button>
            {error && (
            <p className="text-center text-lg font-small text-red-600 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent mt-4">
            {error}
            </p>
        )}
          </form>

          <p className="text-center text-sm mt-6">
            Use email instead? <a href="/register" className="text-primary hover:underline">email</a>
          </p>
        </div>
      </motion.section>
    </Layout>
  );
}
