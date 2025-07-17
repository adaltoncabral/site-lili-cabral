'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  ShoppingBag,
  Instagram,
  MessageCircle,
  Star,
  Sparkles,
} from 'lucide-react';

const banners = ['/banners/banner1.webp', '/banners/banner2.webp', '/banners/banner3.webp'];

const testimonials = [
  {
    name: 'Ana Carolina',
    text: 'Qualidade incrível! O pijama é muito confortável e o atendimento é excepcional.',
    rating: 5,
  },
  {
    name: 'Marina Silva',
    text: 'Adorei minha lingerie! Chegou super rápido e exatamente como mostrado.',
    rating: 5,
  },
  {
    name: 'Juliana Santos',
    text: 'Recomendo demais! Produtos lindos e preço justo.',
    rating: 5,
  },
];

const categories = [
  {
    title: 'Pijamas',
    icon: '/icones/icon-pijama.png',
    description: 'Conforto para todas as noites',
    href: '/catalogo?p=pijamas',
  },
  {
    title: 'Lingeries',
    icon: '/icones/icon-lingerie.png',
    description: 'Elegância e sensualidade',
    href: '/catalogo?p=lingeries',
  },
  {
    title: 'Promoções',
    icon: '/icones/icon-promocao.png',
    description: 'Ofertas especiais',
    href: '/catalogo?p=promocoes',
  },
  {
    title: 'Kits / Presentes',
    icon: '/icones/icon-especial.png',
    description: 'Presentes especiais',
    href: '/catalogo?p=kits',
  },
];

const whatsappNumber = '5511999999999'; // Substituir pelo número real
const instagramHandle = 'lilicabral'; // Substituir pelo Instagram real

export default function LiliCabralHomepage() {
  const [current, setCurrent] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50">
      <header className="bg-white shadow-lg sticky top-0 z-50 border-b-2 border-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-pink-400" />
              <h1 className="text-3xl font-bold text-pink-800" style={{ fontFamily: 'Modish, serif' }}>
                Lili Cabral
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full flex items-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <MessageCircle size={20} />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>
              <a
                href={`https://instagram.com/${instagramHandle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-2 rounded-full flex items-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Instagram size={20} />
                <span className="hidden sm:inline">Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="relative overflow-hidden">
        <div className="relative h-96 md:h-[500px]">
          {banners.map((banner, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? 'opacity-100' : 'opacity-0'}`}
            >
              <Image src={banner} alt={`Banner ${index + 1}`} fill className="object-cover" />
            </div>
          ))}

          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h2 className="text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: 'Modish, serif' }}>
                Conforto que Presenteia
              </h2>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
                Pijamas, lingeries e presentes especiais para quem você ama – ou para você mesma
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=Olá! Gostaria de ver o catálogo da Lili Cabral`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <MessageCircle size={24} />
                  <span>Ver Catálogo</span>
                </a>
                <a
                  href={`https://instagram.com/${instagramHandle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <Instagram size={24} />
                  <span>Seguir no Instagram</span>
                </a>
              </div>
            </div>
          </div>

          {/* Controles */}
          <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all duration-300 shadow-lg">
            <ChevronLeft size={24} className="text-pink-800" />
          </button>
          <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all duration-300 shadow-lg">
            <ChevronRight size={24} className="text-pink-800" />
          </button>

          {/* Indicadores */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === current ? 'bg-white' : 'bg-white bg-opacity-50'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* As demais seções (categorias, depoimentos, CTA, footer, botão flutuante) seguem a mesma lógica e podem ser incluídas aqui como componentes separados ou inline. */}
    </div>
  );
            }

