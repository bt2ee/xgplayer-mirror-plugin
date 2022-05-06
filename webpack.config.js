const path = require('path')
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
  entry: __dirname + "/src/index.ts",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: {
      name: 'mirror',
      type: 'umd'
    },
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node-modules/
      }, {
        test: /\.svg/,
        exclude: /node_modules/,
        use: ['raw-loader']
      }, {
        test: /\.css/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  devtool: 'source-map',
  externals: {
    xgplayer: 'xgplayer',
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: './src/type.d.ts', to: 'index.d.ts' },
      ],
    })
  ]
};
