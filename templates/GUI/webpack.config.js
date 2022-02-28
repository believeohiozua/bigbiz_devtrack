module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      // Font stylesheets
      {
        test: /\.css$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'css/[hash].[ext]'
            }
          },
          'extract-loader',
          'css-loader',
          'postcss-loader'
        ],
        include: [/fonts/]
      },
      {
        test: /\.ttf$/i,
        loader: 'null-loader',
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "file-loader?name=/public/icons/[name].[ext]"
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {}
        }]
      },

      {
        test: /\/jquery.js$/,
        loaders: [{
          loader: "expose?jQuery"
        }]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' }
      }

    ]
  }
}