module.exports = {
  globDirectory: "./",
  globPatterns: [
    "index.html",
    "dist/app.js"
  ],
  globIgnores: [
    "node_modules/**",
    "jest.config.js",
    "webpack.config.js",
    "workbox-*.js"
  ],
  swDest: "./sw.js",
  clientsClaim: true,
  skipWaiting: true,
  sourcemap: false

}
