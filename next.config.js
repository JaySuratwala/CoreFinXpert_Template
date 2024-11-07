module.exports = {
    output: 'export',
    basePath: process.env.NODE_ENV === 'production' ? '/CFX_template' : '' ,
    trailingSlash: true,
    reactStrictMode: true,
    images: {
        domains: ['aceternity.com', 'assets.aceternity.com', 'w3.org', 'image.flaticon.com'],
        unoptimized: true,
    },
};
