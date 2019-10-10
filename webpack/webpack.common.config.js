module.exports = {
    entry: "./client/index.tsx",
    output: {
      filename: "bundle.js",
      path: __dirname + "../dist"
    },
  
    devtool: "source-map",
  
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"]
    },
  
    module: {
      rules: [
        { test: /\.tsx?$/, exclude: /node_modules/, loader: "ts-loader" },
        { test: /\.css$/, loader: 'style-loader!css-loader' },
        { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
      ]
    },
  
    plugins: [
    ],
  };