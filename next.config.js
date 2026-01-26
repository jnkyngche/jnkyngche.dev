const { withContentlayer } = require("next-contentlayer");
const webpack = require("webpack");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
      
      // process/browser를 resolve alias로 추가
      config.resolve.alias = {
        ...config.resolve.alias,
        process: "process/browser",
      };
      
      // 클라이언트에서 process 객체 제공
      config.plugins.push(
        new webpack.ProvidePlugin({
          process: "process/browser",
        })
      );
    }
    return config;
  },
};

module.exports = withContentlayer(nextConfig);
