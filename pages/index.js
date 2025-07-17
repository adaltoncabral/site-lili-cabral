import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Heart, ShoppingBag, Instagram, MessageCircle, Star, Gift, Sparkles } from 'lucide-react';

const banners = [
  '/banners/banner1.webp',
  '/banners/banner2.webp',
  '/banners/banner3.webp'
];

const testimonials = [
  {
    name: "Ana Carolina",
    text: "Qualidade incrível! O pijama é muito confortável e o atendimento é excepcional.",
    rating: 5
  },
  {
    name: "Marina Silva",
    text: "Adorei minha lingerie! Chegou super rápido e exatamente como mostrado.",
    rating: 5
  },
  {
    name: "Juliana Santos",
    text: "Recomendo demais! Produtos lindos e preço justo.",
    rating: 5
  }
];

const categories = [
  {
    title: "Pijamas",
    icon: "/icones/icon-pijama.png",
    description: "Conforto para todas as noites",
    href: "/catalogo?p=pijamas"
  },
  {
    title: "Lingeries",
    icon: "/icones/icon-lingerie.png", 
    description: "Elegância e sensualidade",
    href: "/catalogo?p=lingeries"
  },
  {
    title: "Promoções",
    icon: "/icones/icon-promocao.png",
    description: "Ofertas especiais",
    href: "/catalogo?p=promocoes"
  },
  {
    title: "Kits / Presentes",
    icon: "/icones/icon-especial.png",
    description: "Presentes especiais",
    href: "/catalogo?p=kits"
  }
];

const LiliCabralHomepage = () => {
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

  const whatsappNumber = "5511999999999"; // Substituir pelo número real
  const instagramHandle = "lilicabral"; // Substituir pelo Instagram real

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50 border-b-2 border-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-pink-400" />
              <h1 className="text-3xl font-bold text-pink-800" style={{ fontFamily: 'Playfair Display, serif' }}>
                Lili Cabral
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => window.open(`https://wa.me/${whatsappNumber}`, '_blank')}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full flex items-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <MessageCircle size={20} />
                <span className="hidden sm:inline">WhatsApp</span>
              </button>
              <button 
                onClick={() => window.open(`https://instagram.com/${instagramHandle}`, '_blank')}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-2 rounded-full flex items-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Instagram size={20} />
                <span className="hidden sm:inline">Instagram</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Banner Carousel */}
      <section className="relative overflow-hidden">
        <div className="relative h-96 md:h-[500px]">
          {banners.map((banner, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === current ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={banner}
                alt={`Banner ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          
          {/* Overlay com texto */}
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h2 className="text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Conforto que Presenteia
              </h2>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
                Pijamas, lingeries e presentes especiais para quem você ama – ou para você mesma
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Olá! Gostaria de ver o catálogo da Lili Cabral`, '_blank')}
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <MessageCircle size={24} />
                  <span>Ver Catálogo</span>
                </button>
                <button 
                  onClick={() => window.open(`https://instagram.com/${instagramHandle}`, '_blank')}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <Instagram size={24} />
                  <span>Seguir no Instagram</span>
                </button>
              </div>
            </div>
          </div>

          {/* Controles do carousel */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all duration-300 shadow-lg"
          >
            <ChevronLeft size={24} className="text-pink-800" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all duration-300 shadow-lg"
          >
            <ChevronRight size={24} className="text-pink-800" />
          </button>

          {/* Indicadores */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === current ? 'bg-white' : 'bg-white bg-opacity-50'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Categorias */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-pink-800 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Nossas Categorias
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Descubra nossa coleção exclusiva de pijamas e lingeries pensadas especialmente para você
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {categories.map((category, index) => (
              <div
                key={index}
                onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Olá! Gostaria de ver produtos da categoria: ${category.title}`, '_blank')}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center cursor-pointer group hover:scale-105 border-2 border-pink-100 hover:border-pink-300"
              >
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full flex items-center justify-center group-hover:from-pink-200 group-hover:to-rose-200 transition-all duration-300">
                    <img 
                      src={category.icon} 
                      alt={category.title}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-pink-800 mb-2">{category.title}</h3>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 bg-gradient-to-r from-pink-100 to-rose-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-pink-800 mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            O que nossas clientes dizem
          </h2>
          
          <div className="relative">
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 text-lg mb-6 italic">
                "{testimonials[currentTestimonial].text}"
              </p>
              <p className="font-semibold text-pink-800">
                {testimonials[currentTestimonial].name}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pink-600 to-rose-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Sparkles className="w-16 h-16 mx-auto mb-6 text-pink-200" />
          <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Pronta para se sentir especial?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra nossa coleção exclusiva. Atendimento personalizado e produtos de qualidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Olá! Gostaria de conhecer a Lili Cabral`, '_blank')}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
            >
              <MessageCircle size={24} />
              <span>Falar no WhatsApp</span>
            </button>
            <button 
              onClick={() => window.open(`https://instagram.com/${instagramHandle}`, '_blank')}
              className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 border-2 border-white border-opacity-30"
            >
              <Instagram size={24} />
              <span>Seguir no Instagram</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="h-6 w-6 text-pink-400" />
                <h3 className="text-2xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Lili Cabral
                </h3>
              </div>
              <p className="text-gray-300 mb-4">
                Conforto que presenteia. Pijamas, lingeries e presentes especiais para momentos únicos.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Categorias</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-pink-400 transition-colors">Pijamas</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Lingeries</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Promoções</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Kits e Presentes</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <div className="space-y-3">
                <button 
                  onClick={() => window.open(`https://wa.me/${whatsappNumber}`, '_blank')}
                  className="flex items-center space-x-2 text-gray-300 hover:text-green-400 transition-colors"
                >
                  <MessageCircle size={20} />
                  <span>WhatsApp</span>
                </button>
                <button 
                  onClick={() => window.open(`https://instagram.com/${instagramHandle}`, '_blank')}
                  className="flex items-center space-x-2 text-gray-300 hover:text-pink-400 transition-colors"
                >
                  <Instagram size={20} />
                  <span>Instagram</span>
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Lili Cabral. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Botão flutuante WhatsApp */}
      <div className="fixed bottom-6 right-6 z-50">
        <button 
          onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Olá! Vim pelo site da Lili Cabral`, '_blank')}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
        >
          <MessageCircle size={28} />
        </button>
      </div>

      {/* Aviso de construção (remover quando site estiver pronto) */}
      <div className="fixed top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 rotate-12 pointer-events-none z-10 opacity-20">
        <div className="text-4xl font-bold text-pink-800 whitespace-nowrap select-none">
          SITE EM CONSTRUÇÃO
        </div>
      </div>
    </div>
  );
};

export default LiliCabralHomepage;
