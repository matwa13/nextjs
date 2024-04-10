import type { Config } from 'tailwindcss';

const config: Config = {
    darkMode: ['class'],
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './entities/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './shared/**/*.{js,ts,jsx,tsx,mdx}',
        './widgets/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    prefix: '',
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('daisyui'),
        require('tailwindcss-animate'),
    ],
    daisyui: {
        themes: ['lemonade', 'dracula'],
    },
};

export default config;
