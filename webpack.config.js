const path = require('path');

module.exports = {
  entry: './src/index.js',
  plugins: [
    new HtmlWebPackPlugin({
      title: 'Development',
    }),
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clear: true,
  },
};
