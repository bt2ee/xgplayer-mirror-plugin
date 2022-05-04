module.exports = {
  entry: __dirname + "/src/index.ts",
  output: {
      path: __dirname + '/dist',
      filename: 'index.js'
  },
  mode: 'production',
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
        use: ['file-loader']
      }, {
        test: /\.css/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  }
  // //这是需要安装上面webpack-dev-server再进行配置
  // devServer: {
  //     port:8087,    //设置端口
  //     open:true,    //打开浏览器
  //     hot:true,      //热更新
  //     static: {
  //       directory: path.join(__dirname, "example"),
  //     },
  //     host:'localhost',    //指定地址
  // },
  // plugins: [
  //   // new CleanWebpackPlugin(['dist']),
  //   new webpack.HotModuleReplacementPlugin()
  // ]
};
