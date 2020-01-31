import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

const dev = process.env.NODE_ENV !== "production";
const config = {
  context: path.join(__dirname, "src"),
  devtool: dev ? "none" : "source-map",
  devServer: {
    contentBase: "./dist",
    historyApiFallback: true,
    hot: true
  },
  entry: {
    app: "../index.js"
  },
  mode: dev ? "development" : "production",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: ["babel-loader"]
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "fonts/[name].[ext]"
          }
        }
      },
      {
        test: /\.svg$/,
        use: "file-loader"
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, "public"),
    publicPath: "/",
    filename: "[name].bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "../public/index.html"
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  }
};

export default config;
