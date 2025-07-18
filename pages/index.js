'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

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

const whatsappNumber = '5511999999999';
const instagramHandle = 'lilicabral';

// Componentes de ícones em SVG
const HeartIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>
);

const ChevronLeftIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const ChevronRightIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const MessageCircleIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

const InstagramIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const StarIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

const SparklesIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

const ShoppingBagIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
  </svg>
);

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
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50 border-b-2 border-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <HeartIcon className="h-8 w-8 text-pink-400" />
              <h1 className="text-3xl font-bold text-pink-800" style={{ fontFamily: 'serif' }}>
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
                <MessageCircleIcon className="w-5 h-5" />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>
              <a
                href={`https://instagram.com/${instagramHandle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-2 rounded-full flex items-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <InstagramIcon className="w-5 h-5" />
                <span className="hidden sm:inline">Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="relative overflow-hidden">
        <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px]">
          {banners.map((banner, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? 'opacity-100' : 'opacity-0'}`}
            >
              <Image 
                src={banner} 
                alt={`Banner ${index + 1}`} 
                fill 
                className="object-cover object-center"
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              />
            </div>
          ))}

          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white px-4 max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-2 sm:mb-4">
                Conforto que Presenteia
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 lg:mb-8">
                Pijamas, lingeries e presentes especiais para quem você ama – ou para você mesma
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=Olá! Gostaria de ver o catálogo da Lili Cabral`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base lg:text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <MessageCircleIcon className="w-4 h-4 sm:w-5 h-5 lg:w-6 lg:h-6" />
                  <span>Ver Catálogo</span>
                </a>
                <a
                  href={`https://instagram.com/${instagramHandle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base lg:text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <InstagramIcon className="w-4 h-4 sm:w-5 h-5 lg:w-6 lg:h-6" />
                  <span>Seguir no Instagram</span>
                </a>
              </div>
            </div>
          </div>

          {/* Controles */}
          <button 
            onClick={prevSlide} 
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-1 sm:p-2 transition-all duration-300 shadow-lg"
          >
            <ChevronLeftIcon className="w-4 h-4 sm:w-5 h-5 lg:w-6 lg:h-6 text-pink-800" />
          </button>
          <button 
            onClick={nextSlide} 
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-1 sm:p-2 transition-all duration-300 shadow-lg"
          >
            <ChevronRightIcon className="w-4 h-4 sm:w-5 h-5 lg:w-6 lg:h-6 text-pink-800" />
          </button>

          {/* Indicadores */}
          <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === current ? 'bg-white' : 'bg-white bg-opacity-50'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Categorias */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-pink-800 mb-2 sm:mb-4">
              Nossas Categorias
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Explore nossa seleção cuidadosa de produtos para o seu conforto e bem-estar
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-pink-100"
              >
                <div className="mb-3 sm:mb-4">
                  <Image
                    src={category.icon}
                    alt={category.title}
                    width={40}
                    height={40}
                    className="mx-auto sm:w-[50px] sm:h-[50px] lg:w-[60px] lg:h-[60px]"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-pink-800 mb-2">{category.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{category.description}</p>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=Olá! Gostaria de ver produtos da categoria ${category.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-pink-500 hover:bg-pink-600 text-white px-3 sm:px-4 py-2 rounded-full transition-all duration-300 text-sm sm:text-base"
                >
                  <ShoppingBagIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>Ver Produtos</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SparklesIcon className="w-12 h-12 text-pink-400 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-pink-800 mb-4">
              O que nossas clientes dizem
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Histórias reais de satisfação e conforto
            </p>
          </div>

          <div className="relative max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
                <p className="text-lg text-gray-700 mb-6 italic">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <p className="text-pink-600 font-semibold">
                  {testimonials[currentTestimonial].name}
                </p>
              </div>
            </div>

            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-pink-500' : 'bg-pink-200'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-pink-500 to-rose-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pronta para se sentir especial?
          </h2>
          <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra o conforto que você merece
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${whatsappNumber}?text=Olá! Gostaria de conhecer mais sobre os produtos da Lili Cabral`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-100 text-pink-600 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
            >
              <MessageCircleIcon className="w-6 h-6" />
              <span>Falar no WhatsApp</span>
            </a>
            <a
              href={`https://instagram.com/${instagramHandle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <InstagramIcon className="w-6 h-6" />
              <span>Seguir no Instagram</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <HeartIcon className="h-6 w-6 text-pink-400" />
              <span className="text-xl font-bold">Lili Cabral</span>
            </div>
            <div className="flex space-x-6">
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400 transition-colors duration-300"
              >
                <MessageCircleIcon className="w-6 h-6" />
              </a>
              <a
                href={`https://instagram.com/${instagramHandle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400 transition-colors duration-300"
              >
                <InstagramIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            <p>&copy; 2024 Lili Cabral. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Botão Flutuante WhatsApp */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=Olá! Gostaria de mais informações sobre os produtos da Lili Cabral`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
      >
        <MessageCircleIcon className="w-5 h-5 sm:w-6 sm:h-6" />
      </a>
    </div>
  );
    }
