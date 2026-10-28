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
         },{
            protocol: 'https',
            hostname: 'res.cloudinary.com',
            port: '',
            pathname: '/**/**',
         },{
            protocol: 'https',
            hostname: 'udemy-certificate.s3.amazonaws.com',
            port: '',
            pathname: '/**/**',
         }
      ]
   }
};

export default nextConfig;
