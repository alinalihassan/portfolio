module.exports = {
  poweredByHeader: false,
  assetPrefix: process.env.ASSET_HOST || undefined,
  productionBrowserSourceMaps: process.env.NODE_ENV === "production",
  webpack(config) {
    config.module.rules.push({
      test: /\.svg?$/,
      oneOf: [
        {
          use: [
            {
              loader: "@svgr/webpack",
              options: {
                prettier: false,
                svgo: true,
                svgoConfig: {
                  plugins: [
                    {
                      name: "removeViewBox",
                      active: false,
                    },
                  ],
                },
                titleProp: true,
              },
            },
          ],
          issuer: {
            and: [/\.(ts|tsx|js|jsx|md|mdx)$/],
          },
        },
      ],
    });

    return config;
  },
  publicRuntimeConfig: {},
  images: {
    domains: ["www.google.com"],
  },
  compiler: {
    styledComponents: true,
  },
};
