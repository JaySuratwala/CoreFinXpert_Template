const defaultTheme = require("tailwindcss/defaultTheme");

const colors = require("tailwindcss/colors");
const {
    default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['aceternity.com', 'assets.aceternity.com', 'w3.org'] // Replace with your actual hostnames
    },
    keyframes: {
        shimmer: {
            from: {
                backgroundPosition: "0 0",
            },
            to: {
                backgroundPosition: "-200% 0",
            },
        },
    },
    plugins: [addVariablesForColors],
};
export default nextConfig;

function addVariablesForColors({ addBase, theme }) {
    let allColors = flattenColorPalette(theme("colors"));
    let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
    );

    addBase({
        ":root": newVars,
    });
}