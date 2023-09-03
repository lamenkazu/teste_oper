/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
}

module.exports = {
    ...nextConfig,
    images: {
        domains: ['loremflickr.com'],
    },
}
