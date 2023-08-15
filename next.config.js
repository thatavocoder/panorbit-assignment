/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'panorbit.in',
        port: '',
        pathname: '/wp-content/uploads/2019/hotlink-ok/*',
      },
    ],
  },
}

module.exports = nextConfig
