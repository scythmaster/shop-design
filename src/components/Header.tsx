"use client"; 

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShoppingCartIcon, MenuIcon, SearchIcon } from '@heroicons/react/outline';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="bg-white shadow-md sticky top-0 z-50"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          VibrantShop
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="text-gray-600 hover:text-primary">
            Home
          </Link>
          <Link href="/shop" className="text-gray-600 hover:text-primary">
            Shop
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-primary">
            About Us
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-primary">
            Contact
          </Link>
          <Link href="/login" className="text-gray-600 hover:text-primary">
              Login
            </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <form className="hidden md:flex">
            <input
              type="text"
              placeholder="Search products..."
              className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-primary text-white rounded-r-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <SearchIcon className="h-5 w-5" />
            </button>
          </form>
          <Link href="/cart" className="text-gray-600 hover:text-primary">
            <ShoppingCartIcon className="h-6 w-6" />
          </Link>
        </div>
        <button
          className="md:hidden text-gray-600 hover:text-primary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <MenuIcon className="h-6 w-6" />
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white py-2">
          <nav className="flex flex-col space-y-2 px-4">
            <Link href="/" className="text-gray-600 hover:text-primary">
              Home
            </Link>
            <Link href="/shop" className="text-gray-600 hover:text-primary">
              Shop
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-primary">
              About Us
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-primary">
              Contact
            </Link>
            <Link href="/login" className="text-gray-600 hover:text-primary">
              Login
            </Link>
          </nav>
          <form className="px-4 py-2 flex">
            <input
              type="text"
              placeholder="Search products..."
              className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-primary text-white rounded-r-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <SearchIcon className="h-5 w-5" />
            </button>
          </form>
        </div>
      )}
    </motion.header>
  );
}