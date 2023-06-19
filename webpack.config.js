const path = require('path');

module.exports = {
  entry: {
    main: './src/index.js',
    donatChart: './src/charts/donatChart.js',
    horizontalBarChart: './src/charts/horizontalBarChart.js',
    pieChart: './src/charts/pieChart.js',
    lineChart: './src/charts/lineChart.js',
    verticalBarChart: './src/charts/verticalBarChart.js',
    chartsModel: './src/model/chartsModel.js',
},
output: {
  path: path.resolve(__dirname, 'dist'),
  filename: '[name].[contenthash].js',
  libraryTarget: 'umd',
    library: 'ti4fcharts',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
};
