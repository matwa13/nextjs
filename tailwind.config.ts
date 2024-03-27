import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './entities/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './shared/**/*.{js,ts,jsx,tsx,mdx}',
        './widgets/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [require('@tailwindcss/typography'), require('daisyui')],
    daisyui: {
        themes: ['winter', 'dracula'],
        // darkTheme: 'dracula',
    },
};
export default config;
