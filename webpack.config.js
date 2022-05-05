module.exports = {
  entry: __dirname + "/src/index.ts",
  output: {
      path: __dirname + '/dist',
      filename: 'index.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        loader: 'babel-loader',
        exclude: /node-modules/,
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: { chrome: 58, ie: 11 },
                corejs: 3,
                useBuiltIns: 'usage'
              }
            ]
          ],
          sourceType: "unambiguous",
        }
      },
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
