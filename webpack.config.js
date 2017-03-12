const path = require('path');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './app.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: [
      path.join(__dirname, "public"),
      path.join(__dirname, "assets"),
      path.join(__dirname, 'dist')
    ],
    port: 9000,
    hot: true
  }
};