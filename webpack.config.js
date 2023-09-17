const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  resolve: {
    modules: ["node_modules"],
    fallback: {
      "https": require.resolve("https-browserify"),
      "http": require.resolve("stream-http")
    }
  }
};