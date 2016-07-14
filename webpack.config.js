const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'redux-layer-manager.js',
    libraryTarget: 'commonjs',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /(node_modules)/,
      },
    ],
  },
  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js'],
  },
  externals: {
    immutable: true,
    leaflet: true,
  },
};
