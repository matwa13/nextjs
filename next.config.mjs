/** @type {import('next').NextConfig} */
const nextConfig = (phase, { defaultConfig }) => {
    return {
        eslint: {
            dirs: ['app'],
        },
        images: {
            remotePatterns: [
                {
                    protocol: 'https',
                    hostname: 'images.pexels.com',
                    port: '',
                    pathname: '/photos/**',
                }
            ]
        }
    };
};

export default nextConfig;
