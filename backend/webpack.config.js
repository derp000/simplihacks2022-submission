const path = require('path');

module.exports = {
  entry: './assets/index.js',  // path to our input file
  output: {
    filename: 'index-bundle.js',  // output bundle file name
    path: path.resolve(__dirname, './simplihacks/static/simplihacks'),  // path to our Django static directory
  },
  module: {
    rules: [{
      test: /\.(frag|vert|glsl)$/,
      use: [
        { 
          loader: 'glsl-shader-loader',
          options: {
            root: 'simplihacks/static/simplihacks/shaders'
          }  
        }
      ]
    }]
  }
};