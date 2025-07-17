'use client';

import React, { useEffect, useState } from 'react'; import Image from 'next/image'; import { ChevronLeft, ChevronRight, Heart, ShoppingBag, Instagram, MessageCircle, Star, Gift, Sparkles, } from 'lucide-react';

const banners = [ '/banners/banner1.webp', '/banners/banner2.webp', '/banners/banner3.webp', ];

const testimonials = [ { name: 'Ana Carolina', text: 'Qualidade incrível! O pijama é muito confortável e o atendimento é excepcional.', rating: 5, }, { name: 'Marina Silva', text: 'Adorei minha lingerie! Chegou super rápido e exatamente como mostrado.', rating: 5, }, { name: 'Juliana Santos', text: 'Recomendo demais! Produtos lindos e preço justo.', rating: 5, }, ];

const categories = [ { title: 'Pijamas', icon: '/icones/icon-pijama.png', description: 'Conforto para todas as noites', href: '/catalogo?p=pijamas', }, { title: 'Lingeries', icon: '/icones/icon-lingerie.png', description: 'Elegância e sensualidade', href: '/catalogo?p=lingeries', }, { title: 'Promoções', icon: '/icones/icon-promocao.png', description: 'Ofertas especiais', href: '/catalogo?p=promocoes', }, { title: 'Kits / Presentes', icon: '/icones/icon-especial.png', description: 'Presentes especiais', href: '/catalogo?p=kits', }, ];

const whatsappNumber = '5511999999999'; const instagramHandle = 'lilicabral';

const LiliCabralHomepage = () => { const [current, setCurrent] = useState(0); const [currentTestimonial, setCurrentTestimonial] = useState(0);

useEffect(() => { const interval = setInterval(() => { setCurrent((prev) => (prev + 1) % banners.length); }, 5000); return () => clearInterval(interval); }, []);

useEffect(() => { const interval = setInterval(() => { setCurrentTestimonial((prev) => (prev + 1) % testimonials.length); }, 4000); return () => clearInterval(interval); }, []);

const nextSlide = () => { setCurrent((prev) => (prev + 1) % banners.length); };

const prevSlide = () => { setCurrent((prev) => (prev - 1 + banners.length) % banners.length); };

const openExternal = (url: string) => { if (typeof window !== 'undefined') { window.open(url, '_blank'); } };

return ( <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50"> {/* ... manter toda a estrutura conforme o código original, substituindo <img> por <Image /> e adaptando window.open para openExternal(...) /} {/ Para não repetir o código inteiro, mantenha a mesma estrutura do original colando a função openExternal onde for usar links externos */} </div> ); };

export default LiliCabralHomepage;

  
