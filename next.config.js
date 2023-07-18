/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["cdn.imagin.studio"] // Config of images for cars
    },
    typescript: {
        ignoreBuildErrors: true,
    }
}

module.exports = nextConfig
