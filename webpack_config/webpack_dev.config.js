const webpack = require('webpack');
// use resolve() to normalize paths between unix/windows environments
var path = require('path');

function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: [
    resolve('./src/frontend/index.js')
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test:/\.(s*)css$/,
        use:['style-loader','css-loader', 'sass-loader']
      }

    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: resolve('./dist/frontend/'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [

  ],
};
