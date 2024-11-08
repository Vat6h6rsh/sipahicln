"use client";
import React, { useState } from "react";
import { FaShoppingCart, FaSearch, FaBars } from "react-icons/fa";
import Link from "next/link";

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
      <div className="flex justify-center py-2 md:hidden">
        <div className="w-32 relative group">
          <Link
            href="/"
            className="block transition-all duration-300 ease-in-out"
          >
            <div className="absolute inset-0 bg-pink-900 opacity-0 group-hover:opacity-25 blur-xl rounded-full transition-opacity duration-300"></div>
            <img
              src="/logo_6d13b225-7193-496f-b38a-96f65ad347f1_180x.avif"
              alt="Company Icon"
              className="w-full relative z-10"
            />
          </Link>
        </div>
      </div>

      {/* Desktop Header */}
      <div className={`md:flex hidden items-center justify-between py-4 px-8`}>
        {/* Navigation Options */}
        <nav className="flex-grow">
          <ul className="flex justify-center space-x-8">
            {[
              "Products",
              "Our Story",
              "Recipies",
              "Awards",
              "Loyalty Program",
            ].map((item, index) => (
              <li key={index}>
                <Link href={`#${item.replace(" ", "_")}`}>
                  <span className="text-gray-700 hover:text-black">{item}</span>
                </Link>
              </li>
            ))}
            <li>
              <Link href="/pairing-chart">
                <span className="text-gray-700 hover:text-black">
                  Pairing Chart
                </span>
              </Link>
            </li>
          </ul>
        </nav>
        {/* Icons for Cart and Search */}
        <div className="flex space-x-4">
          <button onClick={toggleSearchBox} className="focus:outline-none">
            <FaSearch className="text-gray-700 hover:text-black cursor-pointer" />
          </button>
          <FaShoppingCart className="text-gray-700 hover:text-black cursor-pointer" />
        </div>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between py-4 px-4">
        {/* Menu Button */}
        <button onClick={toggleMobileMenu} className="focus:outline-none">
          <FaBars className="text-gray-700 h-6 w-6" />
        </button>

        {/* Company Icon */}
        <div className="w-32 mx-auto">
          <img
            src="/logo_6d13b225-7193-496f-b38a-96f65ad347f1_180x.avif"
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

      {/* Search Box (Same for Mobile and Desktop) */}
      {isSearchOpen && (
        <div className="p-4">
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
            {[
              "Products",
              "Our Story",
              "Recipies",
              "Awards",
              "Loyalty Program",
            ].map((item, index) => (
              <li key={index}>
                <Link href={`#${item.replace(" ", "_")}`}>
                  <span className="py-2 text-gray-700 hover:text-black">
                    {item}
                  </span>
                </Link>
              </li>
            ))}
            <li>
              <Link href="/pairing-chart">
                <span className="py-2 text-gray-700 hover:text-black">
                  Pairing Chart
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
