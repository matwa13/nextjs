/** @type {import('prettier').Config} */

const config = {
    semi: true,
    bracketSpacing: true,
    tabWidth: 4,
    singleQuote: true,
    trailingComma: 'all',
    printWidth: 80,
    plugins: ['prettier-plugin-tailwindcss'],
};

module.exports = config;
