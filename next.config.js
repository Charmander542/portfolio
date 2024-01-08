const nextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    loader: 'akamai',
    path: '',
  },
  webpack: (config, { dev, isServer }) => {
    // Add your custom Webpack configurations here

    // JavaScript and JSX with Babel
    config.module.rules.push({
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['next/babel'],
        },
      },
    });

    // Image Files
    config.module.rules.push({
      test: /\.(png|jpe?g|gif)$/i,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192, // Convert images smaller than 8kb to base64 strings
            name: 'images/[name].[hash].[ext]',
          },
        },
      ],
    });

    // SVG Files (using SVGR)
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    // Font Files
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: 'asset/resource',
    });

    // PDF Files
    config.module.rules.push({
      test: /\.pdf$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: 'pdf/[name].[hash].[ext]',
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
