const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: __dirname,
        loaders: [
          'babel?presets[]=es2015,presets[]=react,presets[]=stage-2',
          'imports?define=>false',
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)(\?\S*)?$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false',
        ],
      },
      {
        test: /\.(mov|mp4)(\?\S*)?$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf)(\?\S*)?$/,
        loader: 'url-loader?limit=100000',
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'postcss-loader', 'sass'],
      },
    ],
  },
  entry: [
    './index.js',
  ],
  output: {
    path: 'build',
    filename: '[hash].bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Vicki Tan',
      template: 'index.ejs',
      favicon: './favicon.png',
    }),
  ],
};
