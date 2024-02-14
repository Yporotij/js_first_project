const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production',
  devServer: {
    compress: true,
    hot: true,
    static: {
      directory: path.join(__dirname, './'),
    },
    port: 9000,
  },
};