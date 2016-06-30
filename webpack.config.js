const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel",
        include: __dirname,
        query: {
          presets: [ 'es2015', 'react' ]
        }
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
    ],
  },
  entry: [
    './index.js'
  ],
  output: {
    path: 'public',
    filename: 'main.bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'App',
      template: 'index.ejs',
    }),
  ],
};
