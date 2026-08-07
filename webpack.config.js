const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    // 1. Хешування імен файлів для запобігання проблемам із кешуванням браузера
    filename: 'js/[name].[contenthash].bundle.js',
    clean: true,
    assetModuleFilename: 'assets/[name].[contenthash][ext][query]'
  },
  module: {
    rules: [
      {
        // 4. Інтеграція CSS стилів
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        // 3. Робота з зображеннями
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name].[contenthash][ext]'
        }
      },
      {
        // 2. Підтримка локальних шрифтів
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name].[contenthash][ext]'
        }
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'Webpack Configuration Homework',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
    }),
  ],
  optimization: {
    // 5. Оптимізоване використання зовнішніх бібліотек
    splitChunks: {
      chunks: 'all',
    },
  },
};
