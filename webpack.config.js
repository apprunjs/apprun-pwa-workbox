const path = require('path');
const htmlPlugin = require('html-webpack-plugin');
const cleanPlugin = require('clean-webpack-plugin');
const workboxPlugin = require("workbox-webpack-plugin");

module.exports = {
  entry: {
    "dist/app": "./src/main.tsx"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname)
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" },
      { test: /\.js$/, use: ["source-map-loader"], enforce: "pre" }
    ]
  },
  devServer: {
    open: true
  },
  devtool: "source-map",
  plugins: [
    // new cleanPlugin(['dist']),
    new htmlPlugin({
      template: './index.html',
      filename: "dist/index.html",
      title: "Get Started With AppRun PWA"
    }),
    new workboxPlugin.GenerateSW({
      swDest: "sw.js",
      clientsClaim: true,
      skipWaiting: true
    })
  ]
};