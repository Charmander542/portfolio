const nextConfig = {
  images: {
    unoptimized: false,
  },
  // Explicitly opt into Turbopack (default in Next.js 16).
  // SVGs and PDFs are only used as static URL strings, so no custom loaders needed.
  turbopack: {},
};

module.exports = nextConfig;
