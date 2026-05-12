/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true, // valgfrit, men nyttigt til statiske URL'er
    images: {
        unoptimized: true,
    },
};

module.exports = nextConfig;
