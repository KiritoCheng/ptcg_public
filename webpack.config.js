const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const devMode = process.env.NODE_ENV !== "production";
const isDevServer = process.argv[2].indexOf('serve') !== -1;

module.exports = {
  optimization: {
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        default: false,
      },
    },
  },
  entry: {
    vendors: [
      "react",
      "react-dom",
      "react-router",
      "react-router-dom",
      "redux",
      "react-redux",
      //   "redux-devtools",
      //   "redux-thunk",
    ],
    index: path.resolve(__dirname, "./src/index.tsx"),
  },
  //   devtool: 'inline-source-map',
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname + "/dist"),
    publicPath: isDevServer ? "./" : "https://kiritosa.com/ptcg/",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      chunks: ["vendors", "index"],
      title: "PTCG",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    new WorkboxPlugin.GenerateSW({
      // these options encourage the ServiceWorkers to get in there fast
      // and not allow any straggling "old" SWs to hang around
      clientsClaim: true,
      skipWaiting: true,
    }),
    new CleanWebpackPlugin(),
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".css"],
  },

  devServer: {
    contentBase: path.join(__dirname, "dist"),
    writeToDisk: true,
    compress: true,
    hot: true,
    // for BrowserRouter 404
    historyApiFallback: true,
    port: 9000,
  },
};
