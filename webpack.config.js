const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    bundle: path.resolve(__dirname, './src/js/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '../dist/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      minify: {
        collapseWhitespace: true
      },
      template: './src/index.html',
      inject: false,
    }),
    new HtmlWebpackPlugin({
      filename: 'introduction.html',
      minify: {
        collapseWhitespace: true
      },
      template: './src/introduction.html',
      inject: false,
    }),
    new HtmlWebpackPlugin({
      filename: 'character.html',
      minify: {
        collapseWhitespace: true
      },
      template: './src/character.html',
      inject: false,
    }),
    new HtmlWebpackPlugin({
      filename: 'movie.html',
      minify: {
        collapseWhitespace: true
      },
      template: './src/movie.html',
      inject: false,
    }),
    new HtmlWebpackPlugin({
      filename: 'movie_info.html',
      minify: {
        collapseWhitespace: true
      },
      template: './src/movie_info.html',
      inject: false,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },          
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ],
      },
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            minimize: true
          }
        }],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/'
            }
          }
        ]
      }
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'vendor',
    },
  },
}
