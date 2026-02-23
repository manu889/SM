"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const heroImages = [
  "/Images/1.jpg",
  "/Images/2.jpg",
  "/Images/3.jpg",
  "/Images/4.jpg",
  "/Images/5.jpg",
  "/Images/6.jpg",
  "/Images/7.jpg",
  "/Images/8.jpg",
  "/Images/9.jpg",
  "/Images/10.jpg",
  "/Images/11.jpg",
  "/Images/Coorg.jpg",
  "/Images/Mysore_Tour_Package.jpg",
  "/Images/Mysore.jpg",
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0" aria-hidden="true">
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-40" : "opacity-0"
          }`}
        >
          <Image
            src={image}
            alt=""
            fill
            priority={index === 0}
            quality={75}
            className="object-cover"
            sizes="100vw"
          />
        </div>
      ))}
    </div>
  );
}
