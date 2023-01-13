const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  devServer: {
    allowedHosts: ["codesandbox.io", ".codesandbox.io"],
    client: {
      logging: "none",
      webSocketURL: "auto://0.0.0.0:0/ws"
    },
    host: "0.0.0.0",
    port: 8080,
    historyApiFallback: true
  },
  mode: "development",
  module: {
    rules: [
      {
        include: path.resolve(__dirname, "src"),
        loader: "ts-loader",
        options: { transpileOnly: true },
        test: /\.tsx?$/
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  output: {
    path: path.join(__dirname, "/dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
};
