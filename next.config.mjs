/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's0.rbk.ru',
        port: '',
        pathname: '/v6_top_pics/**',
      },
    ],
  },
};

export default nextConfig;
