const path = require('path');
const webpack = require('webpack');

module.exports = {
  module: {
    rules: [{
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [{
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(jpe?g|ico|png|gif)$/i,
        loader: [
          'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack-loader?bypassOnDebug=false'
        ]
      }
    ]
  },
  resolve: {
    extensions: [
      '.js', '.jsx', '.scss', '.css',
    ],
  },

  /* In prod, we don't want the debug info below */
  /* We can create a webpack.dev.config.js with debug stuff below and a  */
  /* webpack.release.config.js thaqt doesn't have below stuff to solve the problem */

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.LoaderOptionsPlugin({
      debug: true
    })
  ],

  watch: true,
  devtool: 'source-map',
};
