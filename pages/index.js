'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

// Dados da aplicação
const APP_DATA = {
  banners: [
    { src: '/banners/banner1.webp', alt: 'Coleção de pijamas confortáveis' },
    { src: '/banners/banner2.webp', alt: 'Lingeries elegantes para ocasiões especiais' },
    { src: '/banners/banner3.webp', alt: 'Kits de presentes especiais' }
  ],
  testimonials: [
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
  ],
  categories: [
    {
      title: 'Pijamas',
      icon: '/icones/icon-pijama.png',
      description: 'Conforto para todas as noites',
      href: '/catalogo?p=pijamas',
      alt: 'Ícone de pijamas'
    },
    {
      title: 'Lingeries',
      icon: '/icones/icon-lingerie.png',
      description: 'Elegância e sensualidade',
      href: '/catalogo?p=lingeries',
      alt: 'Ícone de lingeries'
    },
    {
      title: 'Promoções',
      icon: '/icones/icon-promocao.png',
      description: 'Ofertas especiais',
      href: '/catalogo?p=promocoes',
      alt: 'Ícone de promoções'
    },
    {
      title: 'Kits / Presentes',
      icon: '/icones/icon-especial.png',
      description: 'Presentes especiais',
      href: '/catalogo?p=kits',
      alt: 'Ícone de presentes'
    },
  ],
  contact: {
    whatsapp: {
      number: '5511999999999',
      defaultMessage: 'Olá! Gostaria de ver o catálogo da Lili Cabral'
    },
    instagram: 'lilicabral'
  }
};

// Componentes de Ícones SVG
const HeartIcon = ({ className = '', ariaHidden = true }: { className?: string; ariaHidden?: boolean }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden={ariaHidden}>
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>
);

const MessageCircleIcon = ({ className = '', ariaHidden = true }: { className?: string; ariaHidden?: boolean }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden={ariaHidden}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

const InstagramIcon = ({ className = '', ariaHidden = true }: { className?: string; ariaHidden?: boolean }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden={ariaHidden}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const ChevronLeftIcon = ({ className = '', ariaHidden = true }: { className?: string; ariaHidden?: boolean }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden={ariaHidden}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const ChevronRightIcon = ({ className = '', ariaHidden = true }: { className?: string; ariaHidden?: boolean }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden={ariaHidden}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const StarIcon = ({ className = '', ariaHidden = true }: { className?: string; ariaHidden?: boolean }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden={ariaHidden}>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

const SparklesIcon = ({ className = '', ariaHidden = true }: { className?: string; ariaHidden?: boolean }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden={ariaHidden}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l1.5 1.5L5 6 3.5 4.5 5 3zM12 7l2 2-2 2-2-2 2-2zM19 11l1.5 1.5L19 14l-1.5-1.5L19 11zM7 17l2 2-2 2-2-2 2-2z"/>
  </svg>
);

const ShoppingBagIcon = ({ className = '', ariaHidden = true }: { className?: string; ariaHidden?: boolean }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden={ariaHidden}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 12H6L5 9z" />
  </svg>
);

// Componente de Carrossel
const Carousel = ({ 
  items, 
  autoPlayInterval = 5000,
  renderItem,
  className = ''
}: {
  items: any[];
  autoPlayInterval?: number;
  renderItem: (item: any, index: number, isActive: boolean) => React.ReactNode;
  className?: string;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, autoPlayInterval);
    return () => clearInterval(interval);
  }, [items.length, autoPlayInterval]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <div className={`relative ${className}`}>
      {items.map((item, index) => (
        <div 
          key={index}
          className={`transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0 absolute inset-0'}`}
          aria-hidden={index !== currentIndex}
        >
          {renderItem(item, index, index === currentIndex)}
        </div>
      ))}

      <button 
        onClick={prevSlide} 
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
        aria-label="Slide anterior"
      >
        <ChevronLeftIcon className="h-6 w-6 text-pink-800" />
      </button>
      <button 
        onClick={nextSlide} 
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
        aria-label="Próximo slide"
      >
        <ChevronRightIcon className="h-6 w-6 text-pink-800" />
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-500 ${index === currentIndex ? 'bg-white' : 'bg-white bg-opacity-50'}`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// Componente de Avaliação
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex justify-center" aria-label={`Avaliação: ${rating} estrelas`}>
      {[...Array(5)].map((_, i) => (
        <StarIcon 
          key={i} 
          className={`h-6 w-6 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
          aria-hidden="true"
        />
      ))}
    </div>
  );
};

// Componente Principal
export default function LiliCabralHomepage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % APP_DATA.testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const whatsappUrl = `https://wa.me/${APP_DATA.contact.whatsapp.number}?text=${encodeURIComponent(APP_DATA.contact.whatsapp.defaultMessage)}`;
  const instagramUrl = `https://instagram.com/${APP_DATA.contact.instagram}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50 border-b-2 border-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <HeartIcon className="h-8 w-8 text-pink-400" ariaHidden={false} />
              <h1 className="text-3xl font-bold text-pink-800" style={{ fontFamily: 'Modish, serif' }}>
                Lili Cabral
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full flex items-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                aria-label="Contato via WhatsApp"
              >
                <MessageCircleIcon className="h-5 w-5" />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-2 rounded-full flex items-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                aria-label="Perfil no Instagram"
              >
                <InstagramIcon className="h-5 w-5" />
                <span className="hidden sm:inline">Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="relative overflow-hidden" aria-label="Banner principal">
        <Carousel
          items={APP_DATA.banners}
          autoPlayInterval={5000}
          className="relative h-96 md:h-[500px]"
          renderItem={(banner, index, isActive) => (
            <div className="absolute inset-0">
              <Image 
                src={banner.src} 
                alt={banner.alt}
                fill 
                className="object-cover"
                priority={index === 0}
              />
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
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                      aria-label="Ver catálogo via WhatsApp"
                    >
                      <MessageCircleIcon className="h-6 w-6" />
                      <span>Ver Catálogo</span>
                    </a>
                    <a
                      href={instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                      aria-label="Seguir no Instagram"
                    >
                      <InstagramIcon className="h-6 w-6" />
                      <span>Seguir no Instagram</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        />
      </section>

      {/* Categorias */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="categories-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="categories-heading" className="text-3xl md:text-4xl font-bold text-pink-800 mb-4" style={{ fontFamily: 'Modish, serif' }}>
              Nossas Categorias
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Descubra nossa coleção especial de pijamas, lingeries e presentes únicos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {APP_DATA.categories.map((category, index) => (
              <article key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-pink-100 rounded-full flex items-center justify-center group-hover:bg-pink-200 transition-colors duration-300">
                    <Image 
                      src={category.icon} 
                      alt={category.alt} 
                      width={32} 
                      height={32} 
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-pink-800 mb-2">{category.title}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <a
                    href={`${whatsappUrl}&text=Olá! Gostaria de ver produtos da categoria ${category.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 inline-flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                    aria-label={`Ver produtos de ${category.title}`}
                  >
                    <ShoppingBagIcon className="h-4 w-4" />
                    <span>Ver Produtos</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white" aria-labelledby="testimonials-heading">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-bold text-pink-800 mb-4" style={{ fontFamily: 'Modish, serif' }}>
              O que dizem nossas clientes
            </h2>
            <p className="text-lg text-gray-600">
              Experiências reais de quem já escolheu a Lili Cabral
            </p>
          </div>

          <Carousel
            items={APP_DATA.testimonials}
            autoPlayInterval={4000}
            className="relative"
            renderItem={(testimonial, index, isActive) => (
              <div 
                className={`bg-pink-50 rounded-2xl p-8 text-center transition-opacity duration-1000 ${isActive ? 'opacity-100' : 'opacity-0'}`}
                aria-hidden={!isActive}
              >
                <StarRating rating={testimonial.rating} />
                <blockquote className="text-lg text-gray-700 mb-6 italic">
                  "{testimonial.text}"
                </blockquote>
                <h4 className="text-xl font-semibold text-pink-800">
                  {testimonial.name}
                </h4>
              </div>
            )}
          />
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-500 to-rose-500" aria-labelledby="cta-heading">
        <div className="max-w-4xl mx-auto text-center">
          <SparklesIcon className="h-16 w-16 text-white mx-auto mb-6" ariaHidden={false} />
          <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Modish, serif' }}>
            Pronta para se sentir especial?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra nossa coleção exclusiva de conforto e elegância
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-100 text-pink-600 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-pink-500"
              aria-label="Falar no WhatsApp"
            >
              <MessageCircleIcon className="h-6 w-6" />
              <span>Falar no WhatsApp</span>
            </a>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-pink-500"
              aria-label="Seguir no Instagram"
            >
              <InstagramIcon className="h-6 w-6" />
              <span>Seguir no Instagram</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-pink-800 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <HeartIcon className="h-6 w-6 text-pink-300" ariaHidden={false} />
              <span className="text-xl font-bold" style={{ fontFamily: 'Modish, serif' }}>
                Lili Cabral
              </span>
            </div>
            <div className="flex space-x-6">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-300 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-offset-2 focus:ring-offset-pink-800 rounded-full p-1"
                aria-label="WhatsApp"
              >
                <MessageCircleIcon className="h-6 w-6" />
              </a>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-300 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-offset-2 focus:ring-offset-pink-800 rounded-full p-1"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="text-center text-pink-300 text-sm mt-6">
            <p>&copy; {new Date().getFullYear()} Lili Cabral. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Botão flutuante do WhatsApp */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          aria-label="Contato via WhatsApp"
        >
          <MessageCircleIcon className="h-7 w-7" />
        </a>
      </div>
    </div>
  );
}
