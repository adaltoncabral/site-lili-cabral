'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// Dados da aplicação
const APP_DATA = {
  banners: [
    { src: '/banners/banner1.webp', alt: 'Coleção de pijamas' },
    { src: '/banners/banner2.webp', alt: 'Lingeries elegantes' },
    { src: '/banners/banner3.webp', alt: 'Kits de presentes' }
  ],
  contact: {
    whatsapp: '5511999999999',
    instagram: 'lilicabral'
  }
};

// Ícones SVG inline
const HeartIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>
);

export default function Home() {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner(prev => (prev + 1) % APP_DATA.banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-pink-50">
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <HeartIcon />
            <h1 className="text-2xl font-bold text-pink-800">Lili Cabral</h1>
          </div>
          <div className="flex space-x-4">
            <a 
              href={`https://wa.me/${APP_DATA.contact.whatsapp}`}
              className="bg-green-500 text-white px-4 py-2 rounded-full flex items-center"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </header>

      <main>
        <div className="relative h-96 overflow-hidden">
          {APP_DATA.banners.map((banner, index) => (
            <div 
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${index === currentBanner ? 'opacity-100' : 'opacity-0'}`}
            >
              <Image
                src={banner.src}
                alt={banner.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
