/** @type {import('next').NextConfig} */
const nextConfig = {
   // basePath: '/Huguez',
   // output: 'export',
   reactStrictMode: true,
   images:{
      remotePatterns: [
         {
            protocol: 'https',
            hostname: 'img-c.udemycdn.com',
            port: '',
            pathname: '/**/**',
         }
      ]
   }
};

export default nextConfig;
