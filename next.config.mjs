/** @type {import('next').NextConfig} */
<<<<<<< HEAD
const nextConfig = {};
=======
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
>>>>>>> b9c81bd (seo changes)

export default nextConfig;
