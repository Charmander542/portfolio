const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000, // 1 year
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Explicitly opt into Turbopack (default in Next.js 16).
  turbopack: {},
  async redirects() {
    return [
      {
        source: "/projects/accesability_controller",
        destination: "/projects/accessibility_controller",
        permanent: true,
      },
      {
        source: "/projects/robot_arm",
        destination: "/projects/robotic_arm",
        permanent: true,
      },
      {
        source: "/projects/chessboard",
        destination: "/projects/ai_chessboard",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
