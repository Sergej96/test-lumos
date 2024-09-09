import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            spacing: {
                107: '26.75rem',
            },
            colors: {
                primary: 'rgba(255, 93, 23, 1)',
                secondary: 'rgba(49, 119, 242, 1)',
                black: 'rgba(43, 43, 43, 1)',
                gray: 'rgba(100, 100, 100, 1)',
            },
            fontSize: {
                xs: '.8125rem',
                sm: '.875rem',
                base: '1rem',
                md: '1.5rem',
                lg: '1.75rem',
                xl: '2rem',
            },
            lineHeight: {
                xs: '1.125rem',
                base: '1.5rem',
                md: '2rem',
                lg: '2.125rem',
                xl: '2.875rem',
            },
            padding: {
                '4.5': '1.125rem',
                '15.5': '3.875rem',
            },
        },
    },
    plugins: [],
};
export default config;
