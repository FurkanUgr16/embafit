/** @type {import('next').NextConfig} */


const nextConfig = {
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**', // Cloudinary klasörlerine erişim
        search: '',
      },
    ],
  },
};

export default nextConfig;
