module.exports = {//注意这里是exports不是export
  entry: __dirname + "/src/index.ts",//唯一入口文件
  output: {//输出目录
      path: __dirname + '/dist',//打包后的js文件存放的地方
      filename: 'index.js'//打包后输出的js的文件名
  },
  mode: 'production',
  module: {
    rules: [
      {
        loader: 'babel-loader',
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
          ]
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
};
