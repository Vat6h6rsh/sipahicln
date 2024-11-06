"use client"
import React, { useState } from 'react';
import { FaShoppingCart, FaUser, FaHeart, FaSearch,FaBars } from 'react-icons/fa';

const Header = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isSearchOpen, setSearchOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleSearchBox = () => {
        setSearchOpen(!isSearchOpen);
    };

    return (
        <header className="bg-white shadow-md">
            {/* Top Bar with Company Logo */}
            <div className="flex justify-center py-2">
      <div className="w-32 relative group">
        <a 
          href="#Home" 
          className="block transition-all duration-300 ease-in-out"
        >
          <div className="absolute inset-0 bg-pink-900 opacity-0 group-hover:opacity-25 blur-xl rounded-full transition-opacity duration-300"></div>
          <img 
            src="logo_6d13b225-7193-496f-b38a-96f65ad347f1_180x.avif" 
            alt="Company Icon" 
            className="w-full relative z-10"
          />
        </a>
      </div>
    </div>

            {/* Desktop Header */}
            <div className="hidden md:flex items-center justify-between py-4 px-8">
                {/* Navigation Options */}
                <nav className="flex-grow">
                    <ul className="flex justify-center space-x-8">
                        <li><a href="#Products" className="text-gray-700 hover:text-black">Products</a></li>
                        <li><a href="#Our_Story" className="text-gray-700 hover:text-black">Our Story</a></li>
                        <li><a href="#Recipies" className="text-gray-700 hover:text-black">Recipies</a></li>
                        <li><a href="#Awards" className="text-gray-700 hover:text-black">Awards</a></li>
                        <li><a href="pages/pairing-chart" className="text-gray-700 hover:text-black">Pairing Chart</a></li>
                        <li><a href="#Loyalty" className="text-gray-700 hover:text-black">Loyalty Program</a></li>
                    </ul>
                </nav>
                {/* Icons for Cart, User, Wishlist */}
                <div className="flex space-x-4">
                    <FaShoppingCart className="text-gray-700 hover:text-black cursor-pointer" />
                    <FaSearch className="text-gray-700 hover:text-black cursor-pointer" />
                    
                </div>
            </div>

            {/* Mobile Header */}
            <div className="md:hidden flex items-center justify-between py-4 px-4">
                {/* Menu Button */}
                <button onClick={toggleMobileMenu} className="focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>

                {/* Company Icon */}
                <div className="w-32 mx-auto">
                <img 
            src="logo_6d13b225-7193-496f-b38a-96f65ad347f1_180x.avif" 
            alt="Company Icon" 
            className="w-full relative z-10"
          />
                </div>

                {/* Search and Cart Icons */}
                <div className="flex space-x-4 items-center">
                    <button onClick={toggleSearchBox} className="focus:outline-none">
                        <FaSearch className="text-gray-700 hover:text-black cursor-pointer" />
                    </button>
                    <FaShoppingCart className="text-gray-700 hover:text-black cursor-pointer" />
                </div>
            </div>

            {/* Search Box */}
            {isSearchOpen && (
                <div className="md:hidden p-4">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="border border-gray-300 rounded w-full px-2 py-1"
                    />
                </div>
            )}

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
                <nav className="md:hidden bg-white shadow-lg">
                    <ul className="flex flex-col p-4">
                        <li><a href="#home" className="py-2 text-gray-700 hover:text-black">Home</a></li>
                        <li><a href="#about" className="py-2 text-gray-700 hover:text-black">About</a></li>
                        <li><a href="#services" className="py-2 text-gray-700 hover:text-black">Services</a></li>
                        <li><a href="#blog" className="py-2 text-gray-700 hover:text-black">Blog</a></li>
                        <li><a href="#contact" className="py-2 text-gray-700 hover:text-black">Contact</a></li>
                        <li><a href="#faq" className="py-2 text-gray-700 hover:text-black">FAQ</a></li>
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Header;
