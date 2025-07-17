// pages/index.tsx (Next.js 13+ with App Router support)

'use client';

import React, { useEffect, useState } from 'react'; import { ChevronLeft, ChevronRight, Heart, ShoppingBag, Instagram, MessageCircle, Star, Gift, Sparkles, } from 'lucide-react'; import Image from 'next/image';

const banners = [ '/banners/banner1.webp', '/banners/banner2.webp', '/banners/banner3.webp' ];

const testimonials = [ { name: 'Ana Carolina', text: 'Qualidade incrível! O pijama é muito confortável e o atendimento é excepcional.', rating: 5, }, { name: 'Marina Silva', text: 'Adorei minha lingerie! Chegou super rápido e exatamente como mostrado.', rating: 5, }, { name: 'Juliana Santos', text: 'Recomendo demais! Produtos lindos e preço justo.', rating: 5, } ];

const categories = [ { title: 'Pijamas', icon: '/icones/icon-pijama.png', description: 'Conforto para todas as noites', href: '/catalogo?p=pijamas' }, { title: 'Lingeries', icon: '/icones/icon-lingerie.png', description: 'Elegância e sensualidade', href: '/catalogo?p=lingeries' }, { title: 'Promoções', icon: '/icones/icon-promocao.png', description: 'Ofertas especiais', href: '/catalogo?p=promocoes' }, { title: 'Kits / Presentes', icon: '/icones/icon-especial.png', description: 'Presentes especiais', href: '/catalogo?p=kits' } ];

export default function Home() { const [current, setCurrent] = useState(0); const [currentTestimonial, setCurrentTestimonial] = useState(0);

useEffect(() => { const interval = setInterval(() => { setCurrent((prev) => (prev + 1) % banners.length); }, 5000); return () => clearInterval(interval); }, []);

useEffect(() => { const interval = setInterval(() => { setCurrentTestimonial((prev) => (prev + 1) % testimonials.length); }, 4000); return () => clearInterval(interval); }, []);

const whatsappNumber = '5511999999999'; const instagramHandle = 'lilicabral';

return ( <main className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50"> <header className="bg-white shadow-lg sticky top-0 z-50 border-b-2 border-pink-100"> <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-20"> <div className="flex items-center space-x-2"> <Heart className="h-8 w-8 text-pink-400" /> <h1 className="text-3xl font-bold text-pink-800 font-serif">Lili Cabral</h1> </div> <div className="flex items-center space-x-4"> <button onClick={() => window.open(https://wa.me/${whatsappNumber}, '_blank')} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full flex items-center space-x-2 transition shadow-lg hover:shadow-xl"> <MessageCircle size={20} /> <span className="hidden sm:inline">WhatsApp</span> </button> <button onClick={() => window.open(https://instagram.com/${instagramHandle}, '_blank')} className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-2 rounded-full flex items-center space-x-2 transition shadow-lg hover:shadow-xl"> <Instagram size={20} /> <span className="hidden sm:inline">Instagram</span> </button> </div> </div> </header>

{/* Hero */}
  <section className="relative h-[500px] overflow-hidden">
    {banners.map((banner, index) => (
      <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? 'opacity-100' : 'opacity-0'}`}>
        <Image src={banner} alt={`Banner ${index + 1}`} layout="fill" objectFit="cover" priority />
      </div>
    ))}
    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center text-white text-center px-4">
      <div>
        <h2 className="text-4xl md:text-6xl font-bold mb-4 font-serif">Conforto que Presenteia</h2>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">Pijamas, lingeries e presentes especiais para quem você ama – ou para você mesma</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Olá! Gostaria de ver o catálogo da Lili Cabral')}`, '_blank')} className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition shadow-lg hover:shadow-xl flex items-center space-x-2">
            <MessageCircle size={24} /> <span>Ver Catálogo</span>
          </button>
          <button onClick={() => window.open(`https://instagram.com/${instagramHandle}`, '_blank')} className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition shadow-lg hover:shadow-xl flex items-center space-x-2">
            <Instagram size={24} /> <span>Seguir no Instagram</span>
          </button>
        </div>
      </div>
    </div>
  </section>

  {/* Outras seções podem ser copiadas da estrutura original e adaptadas */}
</main>

); }

  
