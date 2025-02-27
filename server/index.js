require('@babel/register')({
  ignore: [/\/(build|node_modules)\//],
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    ['babel-plugin-css-modules-transform', {
      generateScopedName: '[name]__[local]___[hash:base64:5]',
      camelCase: true,
      extractCss: {
        dir: './dist/stylesheets/',
        relativeRoot: './src/',
        filename: '[name].css'
      }
    }]
  ],
  extensions: ['.js', '.jsx', '.css']
});

require("./server");