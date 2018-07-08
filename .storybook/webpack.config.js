const path = require('path');
const postcssCssnext = require('postcss-cssnext');

module.exports = {
  entry: {
    bundle: './src/index.js',
  },
  output: {
    path: path.resolve('demo'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        include: path.resolve('src')
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              sourceMap: true,
              minimize: false,
              localIdentName: '[name]--[local]',
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                postcssCssnext(),
              ],
            },
          },
        ],
        include: path.resolve('src'),
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options:{
              limit: 1,
              fallback: 'file-loader',
              name: '[name].[ext]',
              // outputPath: 'assets/',
            }
          }
        ]
      },
    ]
  },
  plugins: [
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
};
