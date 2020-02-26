module.exports = {
  globDirectory: "./",
  globPatterns: [
    "manifest.json",
    "index.html",
    "dist/app.js"
  ],
  globIgnores: [
    "node_modules/**",
    "jest.config.js",
    "webpack.config.js",
    "workbox-config.js"
  ],
  swDest: "./sw.js",
  clientsClaim: true,
  skipWaiting: true,
  sourcemap: false,
  runtimeCaching: [
    {
      urlPattern: new RegExp("https://unpkg.com"),
      handler: "StaleWhileRevalidate"
    },
    {
      urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
      handler: 'CacheFirst'
    }
  ]
};
