const { resolve } = require('./utils');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const config = {
  mode: 'production',
  entry: {
    main: resolve('../src/index.js')
  },
  output: {
    path: resolve('../lib'),
    filename: 'vue-layui.common.js',
    libraryExport: 'default',
    library: 'vueLayui',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'vue-layui.css',
      ignoreOrder: false
    }),
    new OptimizeCSSAssetsPlugin({
      cssProcessor: require('cssnano'),
      cssProcessorOptions: {
        discardComments: { removeAll: true }
      }
    })
  ]
};

module.exports = config;
