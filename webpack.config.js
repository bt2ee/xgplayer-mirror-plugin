const path = require('path')
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
  devtool: 'source-map'
};
