let path = require('path');

module.exports = {
  entry: {
    App: "./app/js/App.js"
  },
  output: {
    path: path.resolve(__dirname, "./app/temp/js"),
    filename: "[name].js"
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
        },
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
}
