"use client"
import React, { useEffect, useState } from 'react';

const Announcement = () => {
  const announcements = [
    { text: "Check our best sellers out! ✨", link: "/collections/bestsellers" },
    { text: "Warm. Spicy. Refreshing 🫚 Presenting Sepoy & Co. Premium Ginger Beer", link: "/products/premium-ginger-beer" },
    { text: "Sepoy & Co. Sparkling Mineral Water - Born in the peaks, crafted by time, & enriched with Himalayan balance.", link: "/products/sparkling-mineral-water" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % announcements.length);
    }, 3000);

    return () => clearInterval(interval); // Clean up on component unmount
  }, [announcements.length]);

  return (
    <div id="shopify-section-announcement" className="relative">
      <section
        data-section-id="announcement"
        data-section-type="announcement"
        className="bg-[#edcbc9] text-black flex items-center justify-center h-12"
      >
        <div className="transition-opacity duration-500 ease-in-out opacity-100 mx-auto py-2.5 text-center text-base">
          <a href={announcements[currentIndex].link} className="hover:opacity-60">
            {announcements[currentIndex].text}
          </a>
        </div>
      </section>
    </div>
  );
};

export default Announcement;
