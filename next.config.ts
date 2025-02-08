import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com', 'imgur.com', 'i.imgur.com', 'lavender-impossible-kite-440.mypinata.cloud'], // Add imgur.com as an allowed domain
  },
};

export default nextConfig;
