import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const dev = process.env.NODE_ENV !== 'production';
const config = {
  context: path.join(__dirname, 'src'),
  devtool: dev ? 'none' : 'source-map',
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    hot: true,
  },
  entry: {
    app: '../index.js',
  },
  mode: dev ? 'development' : 'production',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
            },
          },
          'sass-loader',
        ],
        // use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]',
          },
        },
      },
      {
        test: /\.(bmp|gif|jpg|jpeg|png|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[hash:8].[ext]',
            limit: 4096, // 4kb
          },
        },
      },
      {
        test: /\.svg$/,
        use: 'file-loader',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [path.resolve(__dirname, './src'), 'node_modules'],
    alias: {
      routes$: path.resolve(__dirname, './src/routes/'),
    },
  },
};

export default config;
