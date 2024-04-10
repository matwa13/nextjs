/** @type {import('next').NextConfig} */
const nextConfig = (phase, { defaultConfig }) => {
    return {
        eslint: {
            dirs: ['app'],
        },
        images: {
            remotePatterns: [
                {
                    // Pexels images
                    protocol: 'https',
                    hostname: 'images.pexels.com',
                    port: '',
                    pathname: '/photos/**',
                },
                {
                    // Clerk avatar images
                    protocol: 'https',
                    hostname: 'img.clerk.com',
                    port: '',
                    pathname: '/**',
                },
                {
                    // OpenAI images
                    protocol: 'https',
                    hostname: 'oaidalleapiprodscus.blob.core.windows.net',
                    port: '',
                    pathname: '/private/**',
                },
                {
                    // Unsplash images
                    protocol: 'https',
                    hostname: 'images.unsplash.com',
                    port: '',
                    pathname: '/**',
                },
            ]
        }
    };
};

export default nextConfig;
