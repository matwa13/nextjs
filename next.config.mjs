/** @type {import('next').NextConfig} */
const nextConfig = (phase, { defaultConfig }) => {
    return {
        eslint: {
            dirs: ['entities', 'app', 'pages', 'shared', 'widgets'],
        },
    };
};

export default nextConfig;
