/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/webp'],
    domains: ['lilicabral.com.br'], // adicione domínios externos se usar imagens externas
  },
  trailingSlash: true,
  experimental: {
    scrollRestoration: true
  }
}

module.exports = nextConfig
