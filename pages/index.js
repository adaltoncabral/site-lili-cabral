'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

// Ícones SVG inline (todos necessários)
const HeartIcon = ({ className = '' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>
);

const MessageIcon = ({ className = '' }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
  </svg>
);

// Adicione todos os outros ícones necessários...

export default function Home() {
  // Seu código existente, usando apenas os ícones definidos acima
  return (
    <div>
      <HeartIcon className="h-6 w-6" />
      <MessageIcon className="h-6 w-6" />
      {/* Restante do seu JSX */}
    </div>
  );
}
