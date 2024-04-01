/** @type {import('next').NextConfig} */
const nextConfig = (phase, { defaultConfig }) => {
    return {
        eslint: {
            dirs: ['app'],
        },
    };
};

export default nextConfig;
