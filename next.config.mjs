/** @type {import('next').NextConfig} */
const nextConfig = {
  // Dev и production используют разные артефакты, чтобы HMR-кэш не смешивал чанки.
  distDir: process.env.NODE_ENV === 'development' ? '.next-dev' : '.next'
};

export default nextConfig;
